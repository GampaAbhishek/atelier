import { StaticImageData } from "next/image";
import StarBrown from "@/public/IndicateursSla/starBrown.svg";
import StarBlack from "@/public/IndicateursSla/startBlack.svg";
import StartGold from "@/public/IndicateursSla/stargold.svg";

export default interface ContractMspConstantInterface {
  id: number;
  image: StaticImageData;
  title: string;
  points: string[];
  response: string[];
  addSymbol: boolean;
  description?: string;
}

export const ContractMspConstants = [
  {
    id: 1,
    title: "Bronze",
    image: StarBrown,
    points: [
      "Support email",
      "Support ticket",
      "Maintenance poste",
      "Supervision",
      "Intervention sur site en option",
    ],
    response: ["Critique 4h", "Moyenne 24h", "Haute 8h", "Basse 48h"],
    addSymbol: false,
  },
  {
    id: 2,
    title: "Silver",
    image: StarBlack,
    description: "Tous points du contrat Bronze",
    points: [
      "Supervision serveurs",
      "Support illimité",
      "Maintenance préventive",
      "Patch management",
      "Support téléphonique",
    ],
    response: ["Critique 1h", "Moyenne 4h", "Haute 2h", "Basse 8h"],
    addSymbol: true,
  },
  {
    id: 3,
    title: "Or",
    image: StartGold,
    description: "Tous points du contrat Silver",
    points: [
      "Supervision 24/7",
      "Cybersécurité",
      "Sauvegarde vérifiée",
      "PRA / continuité",
      "Support prioritaire",
    ],
    response: ["Critique 15 min", "Moyenne 2h", "Haute 30 min", "Basse 4h"],
    addSymbol: true,
  },
];
