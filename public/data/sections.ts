import { DialogLaRencontre } from "../../components/DialogSVGs/dialogLaRencontre";
import { GraphButtons1 } from "../../components/GraphButtons1/graphButtons1";

export const CONTENT = [
  {
    index: 1,
    smallTitle: "La rencontre",
    bigTitle: "Monter dans un bus quand on est handicapé moteur, une épreuve ?",
    canvas: {
      canvasWidth: 805,
      canvasHeight: 453,
      frameCount: 171,
      frameFilePath: "/bus-rencontre/BUS_RENCONTRE_",
      startingFrame: 50,
      hasButton: GraphButtons1,
    },
    intro:
      "Carl, un jeune collégien de 14 ans se rend comme tous les matins à son arrêt de bus. Il rencontre Anna, une adulte de 35 ans en situation de handicap moteur.",
    dialog: DialogLaRencontre,
    stat: {
      title: "Le nombre d’arrêts de bus accessibles en Île-de-France",
      text: "La loi du 11 février 2005 stipule que les personnes handicapées doivent être en mesure de monter et descendre des véhicules routiers ou des rames. La réalité elle, est bien différente. Cette situation peut amener les personnes handicapées à être mal à l’aise et stressées à l’idée de prendre le bus.",
      statNumber: { number: 433, isYellow: true },
      statLabel: "arrêts équipés en 2017",
    },
  },

  {
    index: 2,
    smallTitle: "Aider c'est comprendre",
    bigTitle: "S’arrêter à temps et au bon endroit, pas si simple !",
    canvas: {
      canvasWidth: 805,
      canvasHeight: 453,
      frameCount: 151,
      frameFilePath: "/bus-topdown/BUS_TOPDOWN_",
      startingFrame: 0,
    },
    intro:
      "Anna arrive tant bien que mal à rentrer dans le bus, mais les personnes comme Carl ne sont pas toujours là lorsqu’il y a des problèmes.",
    dialog: DialogLaRencontre,
    stat: {
      title:
        "Quel est le nombre de personnes à handicap moteur qui prennent le bus en Île de France par jour ?",
      text: "À Paris, ce sont plus de 175 000 personnes atteintes de handicap moteur qui ont besoin d’utiliser le bus quotidiennement. Il est donc primordial de leur en faciliter l’accès et l’utilisation.",
      noStat: true,
    },
  },
  {
    index: 3,
    smallTitle: "Handicap et métro",
    bigTitle:
      "Le labyrinthe à escaliers : le métro quand on est atteint d’handicap moteur.",
    canvas: {
      canvasWidth: 805,
      canvasHeight: 453,
      frameCount: 151,
      frameFilePath: "/stares/STARES_",
      startingFrame: 0,
    },
    intro:
      "Après avoir pris le bus, Anna et Carl discutent en chemin jusqu’à arriver devant une bouche de métro.",
    dialog: DialogLaRencontre,
    stat: {
      title:
        "Sur les 15 lignes du métro parisien, combien sont accessibles pour les personnes atteintes d’handicap moteur ?",
      text: "Le métro parisien pose un véritable soucis d’accessibilité car les infrastructure sont vieillissantes. Dans la majorité des lignes, l’absence d’ascenseur ne permet pas aux personnes à handicap moteur d’accéder au métro.",
      statNumber: { number: 1, isYellow: true },
      statLabel: "1 seule ligne respecte toutes les normes d’accessibilité",
    },
  },
  {
    index: 4,
    smallTitle: "Des quotidiens différents ?",
    bigTitle: "L’accès et l’usage quotidien des transports, ca s’améliore ?",
    canvas: {
      canvasWidth: 2560,
      canvasHeight: 1440,
      frameCount: 141,
      frameFilePath: "/bus-rencontre/BUS_RENCONTRE_",
      startingFrame: 50,
    },
    intro:
      "Carl décide de poursuivre son trajet aux côtés d’Anna, curieux du ressenti qu’elle partage avec lui.",
    dialog: DialogLaRencontre,
    stat: {
      title:
        "Quel est le ressenti des personnes à handicap moteur par rapport aux transports en commun ?",
      text: "On constate une évolution des dispositifs mis en place par les différentes AOM*, et une vraie prise de conscience génrale. Malgré ça, les personnes concernées par l’accessibilité de la mobilité restent en grande partie insatisfaites par les infrastructures et solutions proposées.",
      legend: "*Autorités Organisatrices de la Mobilité",
      statNumber: { number: "35%", isYellow: true },
      statLabel:
        "La part de voyageurs handicapés qui sont satisfaits de l’évolution",
    },
  },
];
