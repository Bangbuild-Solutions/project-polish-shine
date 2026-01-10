import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Circle, 
  Minimize2, 
  Leaf, 
  Users, 
  Zap, 
  Feather, 
  Package, 
  UserCheck, 
  Dog, 
  Sparkles, 
  Wrench,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const atouts = [
  {
    id: 1,
    icon: Circle,
    shortTitle: "Petites roues",
    title: "Un vélo à petites roues dynamique",
    description: "Simplix est équipé de roues 20 pouces. Plus réactives et maniables, elles permettent des accélérations vives et une conduite agile en ville. Le centre de gravité plus bas offre une meilleure stabilité, surtout avec du chargement.",
    highlight: "Roues 20\"",
    link: "https://www.oklo.bike/gamme-simplix/atout-simplix-n1-un-velo-a-petites-roues-dynamique/"
  },
  {
    id: 2,
    icon: Minimize2,
    shortTitle: "Vélo compact",
    title: "Guidon rétractable pour un vélo compact",
    description: "Le guidon orientable à 90° permet de ranger le vélo dans un espace réduit : ascenseur, couloir, coffre de voiture. Simplix mesure seulement 1,66 m de long, contre 2,50 m pour un longtail classique.",
    highlight: "1,66 m",
    link: "https://www.oklo.bike/gamme-simplix/atout-simplix-n2-guidon-retractable-pour-un-velo-compact/"
  },
  {
    id: 3,
    icon: Leaf,
    shortTitle: "Fourche amortie",
    title: "Fourche suspendue et amortie",
    description: "La fourche suspendue absorbe les chocs et les vibrations pour un confort optimal. Elle protège aussi votre chargement et vos passagers des secousses sur les pavés et les trottoirs.",
    highlight: "Confort +",
    link: "https://www.oklo.bike/gamme-simplix/atout-simplix-n3-mini-velo-avec-fourche-suspendue-et-amortie/"
  },
  {
    id: 4,
    icon: Users,
    shortTitle: "Taille unique",
    title: "Vélo petite taille pour adulte",
    description: "Une taille unique convient aux cyclistes de 1,45 m à 1,90 m grâce à la tige de selle télescopique et au guidon réglable. Toute la famille peut partager le même vélo.",
    highlight: "1,45 - 1,90 m",
    link: "https://www.oklo.bike/gamme-simplix/atout-simplix-n4-velo-petite-taille-pour-adulte-pas-grand/"
  },
  {
    id: 5,
    icon: Zap,
    shortTitle: "Assistance",
    title: "Une assistance efficace et légère",
    description: "Le moteur Virvolt avec capteur de couple offre une assistance naturelle et progressive. La batterie format gourde s'enlève en 2 secondes et se recharge n'importe où. Jusqu'à 80 km d'autonomie.",
    highlight: "80 km",
    link: "https://www.oklo.bike/gamme-simplix/atout-simplix-n5-une-assistance-efficace-et-legere/"
  },
  {
    id: 6,
    icon: Feather,
    shortTitle: "Léger",
    title: "Un vélo cargo léger",
    description: "De 17,6 kg (version musculaire) à 24,6 kg (version électrique), Simplix est bien plus léger que les vélos cargos classiques (30 à 50 kg). Vous pouvez le porter dans les escaliers ou le charger dans un train.",
    highlight: "17,6 - 24,6 kg",
    link: "https://www.oklo.bike/gamme-simplix/atout-simplix-n6-un-velo-cargo-leger/"
  },
  {
    id: 7,
    icon: Package,
    shortTitle: "Accessoires",
    title: "Systèmes KlickFix pour les accessoires",
    description: "Simplix est conçu comme une plateforme modulable. Les adaptateurs KlickFix à l'avant et à l'arrière permettent de clipser et déclipser paniers, sacoches et caisses en un instant.",
    highlight: "Modulable",
    link: "https://www.oklo.bike/gamme-simplix/atout-simplix-n7-systemes-klickfix-pour-les-accessoires/"
  },
  {
    id: 8,
    icon: UserCheck,
    shortTitle: "Passager",
    title: "Transportez un passager",
    description: "Le porte-bagages arrière renforcé (charge max 50 kg) peut accueillir un enfant jusqu'à 10 ans avec les accessoires adaptés : coussin, pare-jupes, repose-pieds et dossier.",
    highlight: "50 kg arrière",
    link: "https://www.oklo.bike/gamme-simplix/atout-simplix-n8-transportez-un-passager/"
  },
  {
    id: 9,
    icon: Dog,
    shortTitle: "Chien",
    title: "Un vélo pour transporter votre chien",
    description: "Grâce au porte-bagages arrière costaud et aux paniers adaptés, vous pouvez emmener votre compagnon à quatre pattes partout avec vous. Jusqu'à 15 kg pour les chiens de taille moyenne.",
    highlight: "Pet-friendly",
    link: "https://www.oklo.bike/gamme-simplix/atout-simplix-n9-un-velo-pour-transporter-votre-chien/"
  },
  {
    id: 10,
    icon: Sparkles,
    shortTitle: "Design",
    title: "Un beau vélo",
    description: "Simplix a été dessiné avec soin pour être un vélo élégant au style néo-rétro affirmé. Ses lignes épurées et sa fabrication française en font un objet dont on est fier.",
    highlight: "Made in France",
    link: "https://www.oklo.bike/gamme-simplix/atout-simplix-n10-un-beau-velo/"
  },
  {
    id: 11,
    icon: Wrench,
    shortTitle: "Réparable",
    title: "Obsolescence déprogrammée",
    description: "Tous les composants sont standards et disponibles chez n'importe quel vélociste. Pas d'interface propriétaire, pas d'appli obligatoire. Un vélo conçu pour durer et être réparé facilement.",
    highlight: "100% standard",
    link: "https://www.oklo.bike/gamme-simplix/atout-simplix-n11-velo-reparable-obsolescence-deprogrammee/"
  },
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAtout = atouts[activeIndex];

  const nextAtout = () => {
    setActiveIndex((prev) => (prev + 1) % atouts.length);
  };

  const prevAtout = () => {
    setActiveIndex((prev) => (prev - 1 + atouts.length) % atouts.length);
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            L'extrême simplisme vu par Oklö
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Les <span className="text-primary">11 atouts</span> de Simplix
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez ce qui rend Simplix unique : un mini vélo cargo modulable, facile, costaud, léger et durable.
          </p>
        </motion.div>

        {/* Navigation Pills - Horizontal scrollable */}
        <div className="relative mb-10">
          <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
            {atouts.map((atout, index) => (
              <button
                key={atout.id}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeIndex === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                <span className="flex items-center gap-2">
                  <atout.icon className="w-4 h-4" />
                  {atout.shortTitle}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Atout Display */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevAtout}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
            aria-label="Atout précédent"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <button
            onClick={nextAtout}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
            aria-label="Atout suivant"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-border rounded-3xl p-6 sm:p-10 lg:p-12 mx-6 sm:mx-8"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                {/* Icon & Number */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <activeAtout.icon className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                      {activeAtout.id}
                    </div>
                  </div>
                  {/* Highlight Badge */}
                  <div className="mt-4 px-4 py-2 rounded-full bg-secondary text-foreground font-semibold text-sm">
                    {activeAtout.highlight}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {activeAtout.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {activeAtout.description}
                  </p>
                  <a
                    href={activeAtout.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    En savoir plus
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {atouts.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-6 bg-primary"
                  : "bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Aller à l'atout ${index + 1}`}
            />
          ))}
        </div>

        {/* Quick Overview Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {[
            { label: "Roues", value: "20\"" },
            { label: "Longueur", value: "1,66 m" },
            { label: "Poids min", value: "17,6 kg" },
            { label: "Charge arrière", value: "50 kg" },
            { label: "Autonomie", value: "80 km" },
            { label: "Tailles", value: "1,45-1,90 m" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card/50 border border-border rounded-xl p-4 text-center hover:border-primary/30 transition-colors"
            >
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
