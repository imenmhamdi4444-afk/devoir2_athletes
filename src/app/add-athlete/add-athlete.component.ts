import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Athlete } from '../model/athlete.model';
import { Equipe } from '../model/equipe.model';
import { AthleteService } from '../services/athlete.service';

@Component({
  selector: 'app-add-athlete',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-athlete.component.html',
  styleUrl: './add-athlete.component.css'
})
export class AddAthleteComponent implements OnInit {
  newAthlete = new Athlete();
  equipes: Equipe[] = [];
  newCodeEquipe: number = 0;

  constructor(private athleteService: AthleteService, private router: Router) { }

  ngOnInit(): void {
    this.athleteService.listeEquipes().subscribe(eqs => {
      this.equipes = eqs;
      console.log(eqs);
    });
  }

  addAthlete(): void {
    if (this.newCodeEquipe && this.newCodeEquipe != 0) {
      this.newAthlete.equipe = this.equipes.find(eq => eq.codeEquipe == this.newCodeEquipe);
    } else {
      this.newAthlete.equipe = undefined;
    }
    this.athleteService.ajouterAthlete(this.newAthlete).subscribe(ath => {
      console.log(ath);
      this.router.navigate(['athletes']);
    });
  }
}
