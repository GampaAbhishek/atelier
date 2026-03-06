export default interface SuiviDesNiveauxConstantInterface {
  id: number;
  title: string;
  description: string;
  times: {
    responseTime: string;
    resolutionTime: string;
  };
  classname: string;   
}

export const SuiviDesNiveauxConstants : SuiviDesNiveauxConstantInterface[] = [
  {
    id: 1,
    title: "P1 – Critique",
    description:
      "Service totalement indisponible (serveur, téléphone, réseau, ERP inaccessible)",
    times: {
      responseTime: "15 min – 1 h",
      resolutionTime: "4 h",
    },
    classname: 'bg-[#C3002E] text-white',   
  },
  {
    id: 2,
    title: "P2 – Haute",
    description:
      "Service dégradé mais opérationnel (logiciel métier bloqué, VPN inaccessible, panne WiFi globale)",
    times: {
      responseTime: "1 h – 2 h",
      resolutionTime: "8 h",
    },
    classname: 'bg-[#EA9800] text-white',
  },
  {
    id: 3,
    title: "P3 – Moyenne",
    description:
      "Incident utilisateur isolé (ordinateur utilisateur, bloqué imprimante, réseau erreur application)",
    times: {
      responseTime: "4 h",
      resolutionTime: "24 h",
    },
    classname: 'bg-[#CCB849] text-white',
  },
  {
    id: 4,
    title: "P4 – Basse",
    description:
      "Demande simple ou amélioration (installation logiciel, création utilisateur, paramétrage poste)",
    times: {
      responseTime: "8 h – 24 h",
      resolutionTime: "48 h – 72 h",
    },
    classname: 'bg-[#37CC7A] text-white',
  },
];
