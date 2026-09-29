import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Usuario {
  nome: string;
  data_acesso: string;
}

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink, HttpClientModule, CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  name = "Ronaldo";
  githubUrl: string = "https://github.com/rnldcode";
  linkedinUrl: string = "https://www.linkedin.com/in/lino-silva-ab47682a/";
  youtubeUrl: string = "https://youtube.com/@rnldlino-dev";
  instagramUrl = "https://instagram.com/rnldlino";

  totalAcessos: number = 0;
  ultimaAtualizacao: string = 'Nenhum acesso registrado';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios(): void {
    this.http.get<Usuario[]>('http://127.0.0.1:8000/api/usuarios')
      .subscribe({
        next: (dados) => {
          this.totalAcessos = dados.length;
          
          if (dados.length > 0) {
            const ultimoRegistro = dados[dados.length - 1].data_acesso; // Ex: "2026-09-29 16:30:11"
            const dataAcesso = ultimoRegistro.split(' ')[0]; // Pega apenas a parte da data: "2026-09-29"
            
            // Obtém a data de hoje no formato YYYY-MM-DD
            const hoje = new Date().toISOString().split('T')[0];

            if (dataAcesso === hoje) {
              this.ultimaAtualizacao = 'Hoje';
            } else {
              this.ultimaAtualizacao = dataAcesso;
            }
          }
        },
        error: (erro) => {
          console.error('Erro ao carregar métricas:', erro);
        }
      });
  }
}