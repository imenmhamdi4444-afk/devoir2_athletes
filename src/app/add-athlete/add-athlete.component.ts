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
  equipes!: Equipe[];
  newCodeEquipe: number = 0;
  newEquipe?: Equipe;

  constructor(private athleteService: AthleteService, private router: Router) { }

  ngOnInit(): void {
    this.equipes = this.athleteService.listeEquipes();
  }

  addAthlete(): void {
    if (this.newCodeEquipe && this.newCodeEquipe != 0) {
      this.newEquipe = this.athleteService.consulterEquipe(this.newCodeEquipe);
      this.newAthlete.equipe = this.newEquipe;
    } else {
      this.newAthlete.equipe = undefined;
    }
    this.athleteService.ajouterAthlete(this.newAthlete);
    this.router.navigate(['athletes']);
  }
}
