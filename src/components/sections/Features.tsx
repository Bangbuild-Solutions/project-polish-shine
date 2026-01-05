import { motion } from "framer-motion";
import { Zap, Shield, MapPin, Feather, Wrench, Heart } from "lucide-react";

const features = [
  {
    icon: Feather,
    title: "21 kg seulement",
    description: "Le vélo cargo le plus léger d'Europe. Facile à manier, à ranger et à transporter.",
  },
  {
    icon: Zap,
    title: "Moteur Bafang",
    description: "Assistance électrique puissante jusqu'à 25 km/h avec une autonomie de 80 km.",
  },
  {
    icon: Shield,
    title: "Charge 100 kg",
    description: "Transportez enfants, courses ou matériel professionnel en toute sécurité.",
  },
  {
    icon: Wrench,
    title: "100% réparable",
    description: "Pièces standard disponibles partout. Conçu pour durer des décennies.",
  },
  {
    icon: MapPin,
    title: "Made in Annecy",
    description: "Assemblé dans nos ateliers au pied des Alpes. Qualité française garantie.",
  },
  {
    icon: Heart,
    title: "Écologique",
    description: "Zéro émission, matériaux durables, économie circulaire intégrée.",
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
            Pourquoi Simplix
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conçu pour la <span className="text-primary">vraie vie</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un vélo cargo pensé pour simplifier votre quotidien, sans compromis sur la qualité.
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
