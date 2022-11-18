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
  // {
  //     index: 2,
  //     smallTitle: "Aider c'est comprendre",
  //     bigTitle: "S’arrêter à temps et au bon endroit, pas si simple !",
  //     canvas: {
  //         canvasWidth: 2560,
  //         canvasHeight: 1440,
  //         frameCount: 141,
  //         frameFilePath: "/bus-rencontre/BUS_RENCONTRE_",
  //         startingFrame: 50
  //     },
  //     intro: {
  //         text: "Anna arrive tant bien que mal à rentrer dans le bus, mais les personnes comme Carl ne sont pas toujours là lorsqu’il y a des problèmes.",
  //         legende: "Ile de France - Banlieu de Paris"
  //     },
  //     dialog: DialogLaRencontre ,
  //     stat:{
  //         title: "Quel est le nombre de personnes à handicap moteur qui prennent le bus en Île de France par jour ?",
  //         text: "À Paris, ce sont plus de 175 000 personnes atteintes de handicap moteur qui ont besoin d’utiliser le bus quotidiennement. Il est donc primordial de leur en faciliter l’accès et l’utilisation.",
  //         statNumber: 433,
  //         statLabel: "arrêts équipés en 2017",
  //         legende: "Evolution des arrêts de bus accessibles en Île de France au fil du temps",
  //         source: "source : IFOP"
  //     }
  // }
];
