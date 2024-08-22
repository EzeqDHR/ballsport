import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBSAeoAOtKN61UrJNuVoKVz3kVysILDdOQ",
  authDomain: "olimpiadas-app-4f951.firebaseapp.com",
  projectId: "olimpiadas-app-4f951",
  storageBucket: "olimpiadas-app-4f951.appspot.com",
  messagingSenderId: "331880735345",
  appId: "1:331880735345:web:778a73f6857e865150b1d0"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(()=>initializeApp(firebaseConfig)),
    provideFirestore(()=>getFirestore()),
  ]
};
