import { Routes } from '@angular/router';
import { AthletesComponent } from './athletes/athletes.component';
import { AddAthleteComponent } from './add-athlete/add-athlete.component';
import { UpdateAthleteComponent } from './update-athlete/update-athlete.component';
import { RechercheParEquipeComponent } from './recherche-par-equipe/recherche-par-equipe.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

export const routes: Routes = [
  { path: "athletes", component: AthletesComponent },
  { path: "add-athlete", component: AddAthleteComponent },
  { path: "updateAthlete/:id", component: UpdateAthleteComponent },
  { path: "rechercheParEquipe", component: RechercheParEquipeComponent },
  { path: "rechercheParNom", component: RechercheParNomComponent },
  { path: "", redirectTo: "athletes", pathMatch: "full" }
];
