import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-athletes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './athletes.component.html',
  styleUrl: './athletes.component.css'
})
export class AthletesComponent implements OnInit {
  athletes: string[]; // un tableau de chaînes de caractères

  constructor() {
    this.athletes = ["Mohamed Ali", "Ons Jabeur", "Cristiano Ronaldo", "Kylian Mbappé"];
  }

  ngOnInit(): void {
  }
}
