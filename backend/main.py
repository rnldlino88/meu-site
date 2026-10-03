import json
import os
from datetime import datetime
from typing import Any
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

# Permite comunicação com o Angular no localhost:4200
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:4200",
        "http://127.0.0.1:4200"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Caminho absoluto para garantir que o usuarios.json é criado na pasta backend
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
NOME_ARQUIVO = os.path.join(BASE_DIR, "usuarios.json")

class Usuario(BaseModel):
    nome: Optional[str] = None
    email: Optional[str] = None

@app.post("/api/cadastrar-email")
def cadastrar_email(usuario: Usuario):
    registro = {
        "email": usuario.email,
        "data_cadastro": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    salvar_no_json(registro)
    return {"mensagem": "E-mail salvo com sucesso!", "sucesso": True}

def salvar_no_json(novo_usuario: dict) -> None:
    dados = []
    
    # Se o ficheiro já existir, lê os dados atuais
    if os.path.exists(NOME_ARQUIVO):
        try:
            with open(NOME_ARQUIVO, "r", encoding="utf-8") as file:
                dados = json.load(file)
        except Exception:
            dados = []

    # Adiciona o novo registo
    dados.append(novo_usuario)

    # Escreve a lista atualizada de volta no ficheiro
    with open(NOME_ARQUIVO, "w", encoding="utf-8") as file:
        json.dump(dados, file, ensure_ascii=False, indent=4)

@app.get("/")
def home():
    return {"mensagem": "API Python a funcionar!"}

# Rota chamada pelo Angular (se a sua rota no Angular for /api/saudacao)
@app.post("/api/saudacao")
def processar_usuario(usuario: Usuario):
    registro = {
        "nome": usuario.nome,
        "data_acesso": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    
    # CHAMA A FUNÇÃO PARA GRAVAR NO FICHEIRO
    salvar_no_json(registro)

    return {
        "mensagem": f"Seja bem-vindo(a), {usuario.nome}!",
        "sucesso": True
    }

# Rota alternativa se no seu Angular estiver /api/saudar
@app.post("/api/saudar")
def saudar_usuario(usuario: Usuario):
    return processar_usuario(usuario)

@app.get("/api/usuarios")
def listar_usuarios():
    if os.path.exists(NOME_ARQUIVO):
        with open(NOME_ARQUIVO, "r", encoding="utf-8") as file:
            return json.load(file)
    return []