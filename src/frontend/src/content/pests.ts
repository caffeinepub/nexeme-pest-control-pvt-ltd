export interface PestInfo {
  name: string;
  identification: string;
  signs: string[];
  prevention: string[];
}

export const pestsData: PestInfo[] = [
  {
    name: "Cockroaches",
    identification: "Flat, oval-shaped insects with long antennae. Common species include German (light brown) and American (reddish-brown) cockroaches. They range from 1/2 to 2 inches in length.",
    signs: [
      "Droppings that look like black pepper or coffee grounds",
      "Musty, oily odor in infested areas",
      "Egg cases (oothecae) in hidden areas",
      "Smear marks along walls and surfaces"
    ],
    prevention: [
      "Keep kitchen and dining areas clean and free of crumbs",
      "Store food in sealed containers",
      "Fix leaky pipes and eliminate moisture sources",
      "Seal cracks and crevices around your home"
    ]
  },
  {
    name: "Termites",
    identification: "Small, pale insects about 1/4 to 1/2 inch long. Workers are cream-colored while swarmers have wings. Often mistaken for flying ants but have straight antennae and uniform waist.",
    signs: [
      "Mud tubes on exterior walls or foundation",
      "Hollow-sounding wood when tapped",
      "Discarded wings near windows and doors",
      "Visible damage to wood structures"
    ],
    prevention: [
      "Eliminate wood-to-soil contact around your property",
      "Fix moisture problems and improve ventilation",
      "Remove dead trees and stumps from your yard",
      "Schedule regular professional inspections"
    ]
  },
  {
    name: "Mosquitoes",
    identification: "Small flying insects with long legs and a proboscis for feeding. Females are typically larger and bite to obtain blood for egg production. Size ranges from 1/4 to 3/8 inch.",
    signs: [
      "Buzzing sound near ears, especially at dawn and dusk",
      "Itchy, red bite marks on exposed skin",
      "Presence of standing water where they breed",
      "Increased activity in humid, warm conditions"
    ],
    prevention: [
      "Eliminate standing water in containers, gutters, and birdbaths",
      "Install or repair window and door screens",
      "Use fans to create air circulation outdoors",
      "Trim vegetation and maintain your lawn regularly"
    ]
  },
  {
    name: "Bed Bugs",
    identification: "Small, flat, reddish-brown insects about the size of an apple seed. They become swollen and darker after feeding. Nymphs are smaller and translucent.",
    signs: [
      "Small blood stains on sheets and pillowcases",
      "Dark spots (excrement) on mattresses and furniture",
      "Itchy bite marks, often in a line or cluster",
      "Sweet, musty odor in severe infestations"
    ],
    prevention: [
      "Inspect secondhand furniture before bringing it home",
      "Use protective covers on mattresses and box springs",
      "Reduce clutter to minimize hiding spots",
      "Check hotel rooms when traveling and keep luggage elevated"
    ]
  },
  {
    name: "Ants",
    identification: "Small insects with segmented bodies, bent antennae, and narrow waists. Common types include carpenter ants (large, black) and sugar ants (small, brown). Size varies from 1/16 to 1/2 inch.",
    signs: [
      "Visible trails of ants marching to food sources",
      "Small piles of sawdust (carpenter ants)",
      "Nests in soil, under stones, or in wood",
      "Presence near food and water sources"
    ],
    prevention: [
      "Clean up spills and crumbs immediately",
      "Store food in airtight containers",
      "Seal entry points around doors and windows",
      "Trim tree branches away from your house"
    ]
  },
  {
    name: "Rodents (Rats & Mice)",
    identification: "Rats are larger (7-9 inches) with long tails, while mice are smaller (2-4 inches) with proportionally larger ears. Both have sharp teeth and leave distinctive droppings.",
    signs: [
      "Droppings near food sources and along walls",
      "Gnaw marks on food packaging, wires, and wood",
      "Scratching or scurrying sounds in walls or ceilings",
      "Grease marks along frequently traveled paths"
    ],
    prevention: [
      "Seal holes and gaps larger than 1/4 inch",
      "Store food in rodent-proof containers",
      "Keep garbage in sealed bins and dispose regularly",
      "Remove outdoor clutter and trim vegetation near buildings"
    ]
  }
];
