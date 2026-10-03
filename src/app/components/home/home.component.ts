import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = "";
  idButton = "Acessar perfil";
  instagramUrl = "https://instagram.com/rnldlino";

  constructor(
    private http: HttpClient,
    private router: Router,
    public themeService: ThemeService
  ) {}

  submit(): void {
    if (this.name.trim() !== '') {
      this.http.post<any>('http://127.0.0.1:8000/api/saudacao', { nome: this.name }).subscribe({
        next: (resposta) => {
          alert(resposta.mensagem);
          this.router.navigate(['perfil']);
        },
        error: (erro) => {
          console.error('Erro ao conectar com a API Python:', erro);
          alert('Não foi possível conectar ao servidor Python.');
        }
      });
    } else {
      alert('Por favor, digite o seu nome antes de continuar!');
    }
  }
}
