import { Routes } from '@angular/router';
import { AthletesComponent } from './athletes/athletes.component';
import { AddAthleteComponent } from './add-athlete/add-athlete.component';
import { UpdateAthleteComponent } from './update-athlete/update-athlete.component';

export const routes: Routes = [
  { path: "athletes", component: AthletesComponent },
  { path: "add-athlete", component: AddAthleteComponent },
  { path: "updateAthlete/:id", component: UpdateAthleteComponent },
  { path: "", redirectTo: "athletes", pathMatch: "full" }
];
