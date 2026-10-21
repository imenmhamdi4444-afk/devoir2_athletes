import { Injectable } from '@angular/core';
import { Athlete } from '../model/athlete.model';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {
  athletes: Athlete[];

  constructor() {
    this.athletes = [
      { idAthlete: 1, nomComplet: "Mohamed Ali", nationalite: "Tunisien", sport: "Boxe", dateNaissance: new Date("03/12/1995") },
      { idAthlete: 2, nomComplet: "Ons Jabeur", nationalite: "Tunisienne", sport: "Tennis", dateNaissance: new Date("08/28/1994") },
      { idAthlete: 3, nomComplet: "Cristiano Ronaldo", nationalite: "Portugais", sport: "Football", dateNaissance: new Date("02/05/1985") },
      { idAthlete: 4, nomComplet: "Kylian Mbappé", nationalite: "Français", sport: "Football", dateNaissance: new Date("12/20/1998") }
    ];
  }

  listeAthletes(): Athlete[] {
    return this.athletes;
  }

  ajouterAthlete(athlete: Athlete): void {
    this.athletes.push(athlete);
  }
}
