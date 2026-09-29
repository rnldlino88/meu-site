import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home', // Nome da tag HTML personalizada criada para este site componente.
  standalone: true,
  imports: [FormsModule], // Insere dependências (outros componentes, diretivas como NgIf ou módulos) que utilizar dentro do home.component.html
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
// sempre devo alterar o tipo de variável: string, booleano ou número
// ficar atento à nomenclatura da variável se é número: colocar meuNumber como está abaixo.
export class HomeComponent {
  // Tipagem implícita (o TypeScript descobre sozinho que é string)
  name = "";
  idButton = "Acessar perfil";
  instagramUrl = "https//:instagram.com"
  
  //2. Injetando o HttpClient e o Router no construtor
  constructor(private http: HttpClient, private router: Router) {}

  submit(): void {
    if (this.name.trim() !== '') {
      //3. Fazer a requisição POST para a API FastAPI em Python
      this.http.post<any>('http://127.0.0.1:8000/api/saudacao', { nome: this.name }).subscribe({
        next: (resposta) => {
          //exibe a mensagem que veio diretamente do servidor Python
          alert(resposta.mensagem);

          //Redireciona para a página de perfil
          this.router.navigate(['perfil']);
        },
        error: (erro) => {
          console.error('Erro ao conectar com a API Python:', erro);
          alert('Não foi possível conectar ao servidor Python.');
        }
      });
    } else {
      alert('Por favor, digite o seu nome antes de continuar!')
    }
  }
}
