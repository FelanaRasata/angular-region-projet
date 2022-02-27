import { CategorieSignalement } from "./signalement/categorie-signalement";
import { CoordonneeSignalement } from "./signalement/coordonnee-signalement";
import { EtatSignalement } from "./signalement/etat-signalement";
import { PhotoSignalement } from "./signalement/photo-signalement";
import { RegionSignalement } from "./signalement/region-signalement";
import { UtilisateurSignalement } from "./signalement/utilisateur-signalement";

export class Signalement {
  id!: string;
  description!: string;
  photo!: string[];
  utilisateur!: UtilisateurSignalement;
  coordonnee!: CoordonneeSignalement;
  categorie!: CategorieSignalement[];
  region!: RegionSignalement;
  etat!: EtatSignalement[];
}
