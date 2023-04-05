import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SimpsonsService {

  constructor(private http: HttpClient) { }

  public getPersonajes() {
    return this.http.get<any>(`${environment.apiUrl}/personajes?limit=5`).toPromise();
  }

  public searchPersonaje(name: string) {
    return this.http.get<any>(`${environment.apiUrl}/personajes/find/${name}`).toPromise();
  }
}
