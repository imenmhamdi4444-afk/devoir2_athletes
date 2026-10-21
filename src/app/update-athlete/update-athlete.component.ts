import { Component, OnInit } from '@angular/core';
import { Athlete } from '../model/athlete.model';
import { Equipe } from '../model/equipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AthleteService } from '../services/athlete.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-athlete',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-athlete.component.html',
  styleUrl: './update-athlete.component.css'
})
export class UpdateAthleteComponent implements OnInit {
  currentAthlete = new Athlete();
  equipes!: Equipe[];
  updatedCodeEquipe!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private athleteService: AthleteService
  ) { }

  ngOnInit(): void {
    this.equipes = this.athleteService.listeEquipes();
    this.currentAthlete = this.athleteService.consulterAthlete(
      this.activatedRoute.snapshot.params['id']
    );
    this.updatedCodeEquipe = this.currentAthlete.equipe ? this.currentAthlete.equipe.codeEquipe : 1;
    console.log(this.currentAthlete);
  }

  updateAthlete(): void {
    this.currentAthlete.equipe = this.athleteService.consulterEquipe(this.updatedCodeEquipe);
    this.athleteService.updateAthlete(this.currentAthlete);
    this.router.navigate(['athletes']);
  }
}
