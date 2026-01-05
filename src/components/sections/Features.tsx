import { motion } from "framer-motion";
import { Zap, Shield, Bike, Feather, Wrench, Ruler } from "lucide-react";

const features = [
  {
    icon: Feather,
    title: "Léger : 17,6 à 24,6 kg",
    description: "Plus léger que la plupart des vélos cargos. Franchissez des marches, prenez l'ascenseur ou le train sans effort.",
  },
  {
    icon: Bike,
    title: "Mini mais costaud",
    description: "50 kg de charge à l'arrière, 15 kg à l'avant. Transportez enfants, courses, chien ou matériel professionnel.",
  },
  {
    icon: Ruler,
    title: "Compact et maniable",
    description: "Roues 20\", guidon orientable pour le stationnement. Taille unique pour cyclistes de 1,45 m à 1,90 m.",
  },
  {
    icon: Wrench,
    title: "Réparable à l'infini",
    description: "Composants 100% standards. Pas d'interface propriétaire, pas d'appli. Obsolescence déprogrammée.",
  },
  {
    icon: Zap,
    title: "Assistance électrique",
    description: "Moteur Virvolt avec capteur de couple. Batterie format gourde amovible en 2 secondes.",
  },
  {
    icon: Shield,
    title: "Cadre acier Cro-Mo",
    description: "Cadre en acier made in Europe. Fourche suspendue pour le confort du cycliste et du chargement.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const Features = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            L'extrême simplisme vu par Oklö
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Facile, costaud, léger, <span className="text-primary">durable</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            À l'heure où les vélos cargos sont de plus en plus gros et sophistiqués, Oklö fait le choix de la simplicité.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
