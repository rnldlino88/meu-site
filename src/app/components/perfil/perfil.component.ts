import { ThemeService } from './../../services/theme.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Usuario {
  nome?: string;
  email?: string
  data_acesso?: string;
}

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
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
  isDarkMode: boolean = false;

  //Variáveis para o Modal de E-mail
  exibirModalEmail: boolean = false;
  emailUsuario: string = '';

  constructor(private http: HttpClient, private router: Router, public themeService: ThemeService) {}

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  alternarTema(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  // Intercepta o clique no botão "Página Inicial"
  solicitarEmailRedirecionar(event: Event): void {
    event.preventDefault(); // Impede a navegação imediata
    this.exibirModalEmail = true; // Abre a caixa para digitar o e-mail
  }

  confirmarEnvioEmail(): void {
    if (this.emailUsuario.trim()) {
      this.http.post('http://127.0.0.1:8000/api/cadastrar-email', { email: this.emailUsuario})
      .subscribe({
        next: () => {
          this.fecharEMudarDePagina();
        },
        error: (err) => {
          console.error('Erro ao salvar e-mail:', err);
          this.fecharEMudarDePagina(); //Redireciona mesmo se houver erro
        }
      });
    } else {
      this.fecharEMudarDePagina();
    }
  }
  fecharEMudarDePagina(): void {
    this.exibirModalEmail = false;
    this.router.navigate(['/']); //Navega para a página inicial
  }

  carregarUsuarios(): void {
    this.http.get<Usuario[]>('http://127.0.0.1:8000/api/usuarios')
      .subscribe({
        next: (dados) => {
          this.totalAcessos = dados.length;

          if (dados.length > 0) {
            const ultimoRegistro = dados[dados.length - 1].data_acesso;
            if (ultimoRegistro) {
              const dataAcesso = ultimoRegistro.split(' ')[0];
              const hoje = new Date().toISOString().split('T')[0];
              this.ultimaAtualizacao = (dataAcesso === hoje) ? 'Hoje' : dataAcesso;
          }
        }
        },
        error: (erro) => console.error('Erro ao carregar métricas:', erro),
      });
  }
}
