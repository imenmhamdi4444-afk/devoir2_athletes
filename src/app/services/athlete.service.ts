import { Injectable } from '@angular/core';
import { Athlete } from '../model/athlete.model';
import { Equipe } from '../model/equipe.model';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {
  athletes: Athlete[];
  athlete!: Athlete;
  equipes: Equipe[];

  constructor() {
    this.equipes = [
      { codeEquipe: 1, nomEquipe: "Club Africain" },
      { codeEquipe: 2, nomEquipe: "Espérance Sportive de Tunis" },
      { codeEquipe: 3, nomEquipe: "Real Madrid" },
      { codeEquipe: 4, nomEquipe: "Los Angeles Lakers" }
    ];

    this.athletes = [
      {
        idAthlete: 1,
        nomComplet: "Mohamed Ali",
        nationalite: "Tunisien",
        sport: "Boxe",
        dateNaissance: new Date("03/12/1995"),
        equipe: { codeEquipe: 1, nomEquipe: "Club Africain" }
      },
      {
        idAthlete: 2,
        nomComplet: "Ons Jabeur",
        nationalite: "Tunisienne",
        sport: "Tennis",
        dateNaissance: new Date("08/28/1994"),
        equipe: { codeEquipe: 1, nomEquipe: "Club Africain" }
      },
      {
        idAthlete: 3,
        nomComplet: "Cristiano Ronaldo",
        nationalite: "Portugais",
        sport: "Football",
        dateNaissance: new Date("02/05/1985"),
        equipe: { codeEquipe: 3, nomEquipe: "Real Madrid" }
      },
      {
        idAthlete: 4,
        nomComplet: "Kylian Mbappé",
        nationalite: "Français",
        sport: "Football",
        dateNaissance: new Date("12/20/1998"),
        equipe: { codeEquipe: 3, nomEquipe: "Real Madrid" }
      }
    ];
  }

  listeAthletes(): Athlete[] {
    return this.athletes;
  }

  ajouterAthlete(athlete: Athlete): void {
    this.athletes.push(athlete);
  }

  supprimerAthlete(athlete: Athlete): void {
    const index = this.athletes.indexOf(athlete, 0);
    if (index > -1) {
      this.athletes.splice(index, 1);
    }
  }

  consulterAthlete(id: number): Athlete {
    this.athlete = this.athletes.find(a => a.idAthlete == id)!;
    return this.athlete;
  }

  updateAthlete(athlete: Athlete): void {
    const index = this.athletes.findIndex(a => a.idAthlete == athlete.idAthlete);
    if (index > -1) {
      this.athletes.splice(index, 1);
      this.athletes.splice(index, 0, athlete);
    }
  }

  listeEquipes(): Equipe[] {
    return this.equipes;
  }

  consulterEquipe(id: number): Equipe {
    return this.equipes.find(eq => eq.codeEquipe == id)!;
  }
}
