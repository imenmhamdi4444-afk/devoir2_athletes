import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Athlete } from '../model/athlete.model';
import { Equipe } from '../model/equipe.model';
import { AthleteService } from '../services/athlete.service';

@Component({
  selector: 'app-recherche-par-equipe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recherche-par-equipe.component.html',
  styles: ``
})
export class RechercheParEquipeComponent implements OnInit {
  athletes: Athlete[] = [];
  idEquipe!: number;
  equipes: Equipe[] = [];

  constructor(private athleteService: AthleteService) { }

  ngOnInit(): void {
    this.athleteService.listeEquipes().subscribe(eqs => {
      this.equipes = eqs._embedded.equipes;
    });
  }

  onChange(): void {
    this.athleteService.rechercherParEquipe(this.idEquipe).subscribe(athletes => {
      this.athletes = athletes;
    });
  }
}
