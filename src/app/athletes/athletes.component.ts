import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Athlete } from '../model/athlete.model';
import { AthleteService } from '../services/athlete.service';

@Component({
  selector: 'app-athletes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './athletes.component.html',
  styleUrl: './athletes.component.css'
})
export class AthletesComponent implements OnInit {
  athletes: Athlete[]; // un tableau de Athlete

  constructor(private athleteService: AthleteService) {
    this.athletes = athleteService.listeAthletes();
  }

  ngOnInit(): void {
  }
}
