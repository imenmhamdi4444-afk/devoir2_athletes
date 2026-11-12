import { Injectable } from '@angular/core';
import { Athlete } from '../model/athlete.model';
import { Equipe } from '../model/equipe.model';
import { EquipeWrapper } from '../model/equipeWrapped.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AthleteService {
  apiURL: string = 'http://localhost:8084/athletes/api';
  apiURLEq: string = 'http://localhost:8084/athletes/eq';
  apiURLRest: string = 'http://localhost:8084/athletes/rest';

  constructor(private http: HttpClient) { }

  listeAthletes(): Observable<Athlete[]> {
    return this.http.get<Athlete[]>(this.apiURL);
  }

  ajouterAthlete(athlete: Athlete): Observable<Athlete> {
    return this.http.post<Athlete>(this.apiURL, athlete, httpOptions);
  }

  supprimerAthlete(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterAthlete(id: number): Observable<Athlete> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Athlete>(url);
  }

  updateAthlete(athlete: Athlete): Observable<Athlete> {
    return this.http.put<Athlete>(this.apiURL, athlete, httpOptions);
  }

  listeEquipes(): Observable<EquipeWrapper> {
    return this.http.get<EquipeWrapper>(this.apiURLEq);
  }

  consulterEquipe(id: number): Observable<Equipe> {
    const url = `${this.apiURLEq}/${id}`;
    return this.http.get<Equipe>(url);
  }

  rechercherAthletes(nom: string): Observable<any> {
    const url = `${this.apiURLRest}/search/findByNomCompletContains?nom=${nom}`;
    return this.http.get<any>(url);
  }
}
