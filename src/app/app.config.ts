// Importa o tipo ApplicationConfig (estrutura de configuração da aplicação)
// e provideZoneChangeDetection (configura a detecção de mudanças via Zone.js)
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

// Importa provideRouter, função que registra o sistema de rotas na aplicação
import { provideRouter } from '@angular/router';


import { provideHttpClient } from '@angular/common/http';

// Importa o array de rotas definido em app.routes.ts
import { routes } from './app.routes';


// appConfig é o objeto de configuração raiz da aplicação.
// É passado para bootstrapApplication() em main.ts para inicializar o Angular.
export const appConfig: ApplicationConfig = {
  providers: [
    // Ativa a detecção de mudanças com "event coalescing":
    // agrupa múltiplos eventos em um único ciclo de detecção, melhorando a performance
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Registra o roteador Angular com as rotas definidas em app.routes.ts
    provideRouter(routes),

    provideHttpClient()
  ]
};
