import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';
import { Observable, of, from } from 'rxjs';
import { catchError, tap, switchMap, map } from 'rxjs/operators';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  private profileService = inject(ProfileService);
  // private storage = inject(Storage); // Comentado para uso local

  profile$: Observable<any> = this.profileService.getProfile().pipe(
    map(data => {
      // MODO LOCAL (Ahorro de costos y mayor velocidad)
      // Simplemente asumimos que la imagen está en assets/
      // data.image "perfil.png" -> "assets/perfil.png"
      if (data.image && !data.image.startsWith('http')) {
        return { ...data, image: `assets/${data.image}` };
      }
      return data;
    }),
    /* 
    // MODO FIREBASE STORAGE (Requiere activar providers en app.config.ts)
    switchMap(data => {
       if (data.image && !data.image.startsWith('http')) {
         const imgRef = ref(this.storage, data.image);
         return from(getDownloadURL(imgRef)).pipe(
           map(url => ({ ...data, image: url })),
           catchError(err => {
             console.error('Error getting image URL:', err);
             return of(data);
           })
         );
       }
       return of(data);
    }), 
    */
    tap(data => console.log('Data loaded (Local):', data)),
    catchError(err => {
      console.error('Error loading profile:', err);
      return of({ error: true, message: err.message });
    })
  );
}
