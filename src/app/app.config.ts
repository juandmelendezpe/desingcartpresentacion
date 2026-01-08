import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    /* 
    // CONFIGURACIÓN FIREBASE (Comentada para ahorrar peticiones/costos)
    // Para reactivar: Descomentar estas líneas e importar environment
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()) 
    */
  ]
};
