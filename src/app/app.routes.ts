// Importa o tipo Routes, que representa um array de objetos de rota do Angular
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';


// Array de rotas da aplicação.
// Cada objeto dentro do array define uma rota com propriedades como:
//   path      → o trecho de URL (ex: 'home', 'sobre', 'contato')
//   component → o componente a ser exibido quando a rota for acessada
// Por enquanto, o array está vazio — nenhuma rota foi configurada ainda.
export const routes: Routes = [
    { path: '', component: HomeComponent }, //Página inicial
    { path: 'perfil', component: PerfilComponent } // Página do perfil
];
