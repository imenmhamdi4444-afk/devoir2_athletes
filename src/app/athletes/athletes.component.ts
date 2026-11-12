import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Athlete } from '../model/athlete.model';
import { AthleteService } from '../services/athlete.service';

@Component({
  selector: 'app-athletes',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
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

  rechercherAthletes(): void {
    if (this.motCle.trim() === '') {
      this.chargerAthletes();
      return;
    }
    this.athleteService.rechercherAthletes(this.motCle).subscribe((data: any) => {
      this.athletes = data._embedded?.athletes ?? [];
    });
  }

  supprimerAthlete(athlete: Athlete): void {
    let conf = confirm("Êtes-vous sûr ?");
    if (conf) {
      this.athleteService.supprimerAthlete(athlete.idAthlete).subscribe(() => {
        this.rechercherAthletes();
      });
    }
  }
}
