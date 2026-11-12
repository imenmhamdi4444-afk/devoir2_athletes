import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Athlete } from '../model/athlete.model';
import { AthleteService } from '../services/athlete.service';
import { SearchFilterPipe } from '../pipes/search-filter.pipe';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent implements OnInit {

  nomAthlete!: string;
  athletes!: Athlete[];
  allAthletes!: Athlete[];
  searchTerm!: string;

  constructor(private athleteService: AthleteService) { }

  ngOnInit(): void {
    this.athleteService.listeAthletes().subscribe(athletes => {
      console.log(athletes);
      this.athletes = athletes;
      this.allAthletes = athletes;
    });
  }

  rechercherAthletes() {
    if (this.nomAthlete)
      this.athleteService.rechercherParNom(this.nomAthlete).subscribe(athletes => {
        console.log(athletes);
        this.athletes = athletes;
      });
    else
      this.athleteService.listeAthletes().subscribe(athletes => {
        console.log(athletes);
        this.athletes = athletes;
      });
  }

  onKeyUp(filterText: string) {
    this.athletes = this.allAthletes.filter(item =>
      item.nomComplet.toLowerCase().includes(filterText));
  }

}
