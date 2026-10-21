import { Routes } from '@angular/router';
import { AthletesComponent } from './athletes/athletes.component';
import { AddAthleteComponent } from './add-athlete/add-athlete.component';

export const routes: Routes = [
  { path: "athletes", component: AthletesComponent },
  { path: "add-athlete", component: AddAthleteComponent },
  { path: "", redirectTo: "athletes", pathMatch: "full" }
];
