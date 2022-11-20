import {
  GraphTypeBuilding,
  GraphTypeBus,
} from "../../components/buttons-provider/buttonts-provider";
import { DialogAiderComprendre } from "../../components/DialogSVGs/dialogAiderComprendre";
import { DialogHandicapMetro } from "../../components/DialogSVGs/dialogHandicapMetro";
import { DialogLaRencontre } from "../../components/DialogSVGs/dialogLaRencontre";
import { DialogQuotidiensDifferents } from "../../components/DialogSVGs/dialogQuotidiensDifferents";
import { GraphButtonBuilding } from "../../components/GraphButtonsBuilding/GraphButtonBuilding/graphButtonBuilding";
import { GraphButtonsBuilding } from "../../components/GraphButtonsBuilding/graphButtonsBuilding";
import { GraphButtonsBus } from "../../components/GraphButtonsBus/graphButtonsBus";

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
      graph: {
        src: "/graph-time.png",
        offset: "bottom-[-5px]",
        frame: 170,
        buttons: GraphButtonsBus,
        srcs: {
          [GraphTypeBus.TIME]: {
            src: "/graph-time.png",
            offset: "bottom-[15px]",
          },
          [GraphTypeBus.DISTANCE]: {
            src: "/graph-distance.png",
            offset: "bottom-[5px]",
          },
        },
      },
      draw: {
        src: "/draw-bus.png",
        frameStart: 150,
        frameEnd: 171,
      },
    },
    intro: [
      "Carl, un jeune collégien de 14 ans se rend comme tous les matins à son arrêt de bus.",
      "Il rencontre Anna, une adulte de 35 ans en situation de handicap moteur.",
    ],
    dialog: DialogLaRencontre,
    stat: {
      text: [
        "La loi du 11 février 2005 stipule que les personnes handicapées doivent être en mesure de monter et descendre des véhicules routiers ou des rames. La réalité elle, est bien différente.",
        "Cette situation peut amener les personnes handicapées à être mal à l’aise et stressées à l’idée de prendre le bus.",
      ],
      statNumber: { number: "12K" },
      statLabel: "arrêts de bus total ,en Île-De-france (2022)",
      bigLabel: true,
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
      graph: {
        src: "/graph-roof.png",
        offset: "bottom-[30px]",
        frame: 170,
        buttons: null,
        srcs: null,
      },
      draw: {
        src: "/draw-roof.png",
        frameStart: 135,
        frameEnd: 151,
      },
    },
    intro: [
      "Anna arrive tant bien que mal à rentrer dans le bus, mais les personnes comme Carl ne sont pas toujours là lorsqu’il y a des problèmes.",
    ],
    dialog: DialogAiderComprendre,
    stat: {
      text: [
        "À Paris, ce sont plus de 175 000 personnes atteintes de handicap moteur qui ont besoin d’utiliser le bus quotidiennement. ",
        "Il est donc primordial de leur en faciliter l’accès et l’utilisation.",
      ],
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
      graph: {
        src: "/graph-stares.png",
        offset: "bottom-[-88px]",
        frame: 150,
        buttons: null,
        srcs: null,
      },
      draw: {
        src: "/draw-stares.png",
        frameStart: 40,
        frameEnd: 90,
      },
    },
    intro: [
      "Après avoir pris le bus, Anna et Carl discutent en chemin jusqu’à arriver devant une bouche de métro.",
    ],
    dialog: DialogHandicapMetro,
    stat: {
      title:
        "Sur les 15 lignes du métro parisien, combien sont accessibles pour les personnes atteintes d’handicap moteur ?",
      text: [
        "Le métro parisien pose un véritable soucis d’accessibilité car les infrastructure sont vieillissantes.",
        " Dans la majorité des lignes, l’absence d’ascenseur ne permet pas aux personnes à handicap moteur d’accéder au métro.",
      ],
      statNumber: { number: 1, isYellow: true },
      statLabel: "1 seule ligne respecte toutes les normes d’accessibilité",
    },
  },
  {
    index: 4,
    smallTitle: "Des quotidiens différents ?",
    bigTitle: "L’accès et l’usage quotidien des transports, ca s’améliore ?",
    canvas: {
      canvasWidth: 805,
      canvasHeight: 453,
      frameCount: 146,
      frameFilePath: "/building/BUILDING_",
      startingFrame: 0,
      graph: {
        src: "/graph-building.png",
        offset: "bottom-[65px]",
        frame: 165,
        buttons: GraphButtonsBuilding,
        srcs: {
          [GraphTypeBuilding.BUS]: {
            src: "/graph-building-bus.png",
            offset: "bottom-[65px]",
          },
          [GraphTypeBuilding.METRO]: {
            src: "/graph-building-metro.png",
            offset: "bottom-[65px]",
          },
        },
      },
      draw: {
        src: "/draw-building.png",
        frameStart: 145,
        frameEnd: 165,
      },
    },
    intro: [
      "Carl décide de poursuivre son trajet aux côtés d’Anna, curieux du ressenti qu’elle partage avec lui.",
    ],
    dialog: DialogQuotidiensDifferents,
    stat: {
      text: [
        "On constate une évolution des dispositifs mis en place par les différentes AOM*, et une vraie prise de conscience génrale.",
        " Malgré ça, les personnes concernées par l’accessibilité de la mobilité restent en grande partie insatisfaites par les infrastructures et solutions proposées.",
      ],
      legend: "* Autorités Organisatrices de la Mobilité",
      statNumber: { number: "35%", isYellow: true },
      statLabel:
        "Des voyageurs handicapés sont satisfaits de l’évolution des métro en île-de-france",
    },
  },
];
