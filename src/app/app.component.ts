// Importa o decorator @Component, que transforma esta classe em um componente Angular
import { Component } from '@angular/core';

// Importa RouterOutlet, diretiva responsável por renderizar o componente
// correspondente à rota ativa no template HTML
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// @Component define os metadados do componente:
//   selector     → nome da tag HTML que representa este componente (<app-root>)
//   imports      → lista de dependências usadas no template (aqui, o RouterOutlet)
//   templateUrl  → caminho para o arquivo HTML do componente
//   styleUrl     → caminho para o arquivo CSS exclusivo deste componente
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Propriedade pública que armazena o nome da aplicação
  title = 'meu-site';
}
