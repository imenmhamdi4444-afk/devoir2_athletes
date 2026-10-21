import { Component, OnInit } from '@angular/core';
import { Athlete } from '../model/athlete.model';
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private athleteService: AthleteService
  ) { }

  ngOnInit(): void {
    this.currentAthlete = this.athleteService.consulterAthlete(
      this.activatedRoute.snapshot.params['id']
    );
    console.log(this.currentAthlete);
  }

  updateAthlete(): void {
    this.athleteService.updateAthlete(this.currentAthlete);
    this.router.navigate(['athletes']);
  }
}
