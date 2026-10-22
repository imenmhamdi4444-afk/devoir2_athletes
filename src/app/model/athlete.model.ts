import { Equipe } from "./equipe.model";

export class Athlete {
  idAthlete!: number;
  nomComplet!: string;
  nationalite!: string;
  sport!: string;
  dateNaissance!: Date;
  equipe?: Equipe;
}
