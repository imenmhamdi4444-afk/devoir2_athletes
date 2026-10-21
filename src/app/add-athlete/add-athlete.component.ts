import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Athlete } from '../model/athlete.model';
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

  constructor(private athleteService: AthleteService, private router: Router) { }

  ngOnInit(): void {
  }

  addAthlete(): void {
    this.athleteService.ajouterAthlete(this.newAthlete);
    this.router.navigate(['athletes']);
  }
}
