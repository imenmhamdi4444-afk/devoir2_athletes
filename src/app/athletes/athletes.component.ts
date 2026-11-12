import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Athlete } from '../model/athlete.model';
import { AthleteService } from '../services/athlete.service';
import { ChercherComponent } from '../chercher/chercher.component';

@Component({
  selector: 'app-athletes',
  standalone: true,
  imports: [CommonModule, RouterLink, ChercherComponent],
  templateUrl: './athletes.component.html',
  styleUrl: './athletes.component.css'
})
export class AthletesComponent implements OnInit {
  athletes: Athlete[] = [];
  motCle: string = '';

  constructor(private athleteService: AthleteService) { }

  ngOnInit(): void {
    this.chargerAthletes();
  }

  chargerAthletes(): void {
    this.athleteService.listeAthletes().subscribe(athletes => {
      this.athletes = athletes;
    });
  }

  rechercherAthletes(motCle: string): void {
    this.motCle = motCle;
    if (motCle.trim() === '') {
      this.chargerAthletes();
      return;
    }
    this.athleteService.rechercherAthletes(motCle).subscribe((data: any) => {
      this.athletes = data._embedded?.athletes ?? [];
    });
  }

  supprimerAthlete(athlete: Athlete): void {
    let conf = confirm("Êtes-vous sûr ?");
    if (conf) {
      this.athleteService.supprimerAthlete(athlete.idAthlete).subscribe(() => {
        this.rechercherAthletes(this.motCle);
      });
    }
  }
}
