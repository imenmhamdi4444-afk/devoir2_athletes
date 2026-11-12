import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Athlete } from '../model/athlete.model';
import { AthleteService } from '../services/athlete.service';

@Component({
  selector: 'app-athletes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './athletes.component.html',
  styleUrl: './athletes.component.css'
})
export class AthletesComponent implements OnInit {
  athletes: Athlete[] = [];

  constructor(private athleteService: AthleteService) { }

  ngOnInit(): void {
    this.chargerAthletes();
  }

  chargerAthletes(): void {
    this.athleteService.listeAthletes().subscribe(athletes => {
      this.athletes = athletes;
    });
  }

  supprimerAthlete(athlete: Athlete): void {
    let conf = confirm("Êtes-vous sûr ?");
    if (conf) {
      this.athleteService.supprimerAthlete(athlete.idAthlete).subscribe(() => {
        this.chargerAthletes();
      });
    }
  }
}
