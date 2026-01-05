import { motion } from "framer-motion";

const specs = [
  { label: "Poids total", value: "21 kg", highlight: true },
  { label: "Charge maximale", value: "100 kg" },
  { label: "Moteur", value: "Bafang 250W" },
  { label: "Vitesse max", value: "25 km/h" },
  { label: "Batterie", value: "360-720 Wh" },
  { label: "Autonomie", value: "50-110 km" },
  { label: "Freins", value: "Hydrauliques" },
  { label: "Roues", value: '20"' },
  { label: "Transmission", value: "7 vitesses" },
  { label: "Éclairage", value: "LED intégré" },
];

const Specs = () => {
  return (
    <section className="py-20 sm:py-28 bg-teal-800 text-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-background/10 text-background text-sm font-semibold mb-4">
              Fiche technique
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Performances <span className="text-gold-400">exceptionnelles</span>
            </h2>
            <p className="text-lg text-background/80 mb-8 leading-relaxed">
              Chaque composant du Simplix a été sélectionné pour offrir le meilleur rapport 
              poids/performance. Un vélo cargo qui rivalise avec les vélos classiques en agilité.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-background/10 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-black text-gold-400">21</div>
                <div className="text-sm text-background/70 mt-1">kg</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-background/10 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-black text-gold-400">110</div>
                <div className="text-sm text-background/70 mt-1">km max</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-background/10 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-black text-gold-400">100</div>
                <div className="text-sm text-background/70 mt-1">kg charge</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Specs Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 gap-3">
              {specs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`p-4 rounded-xl backdrop-blur-sm ${
                    spec.highlight
                      ? "bg-gold-400 text-foreground col-span-2"
                      : "bg-background/10"
                  }`}
                >
                  <div className={`text-sm ${spec.highlight ? "text-foreground/70" : "text-background/60"}`}>
                    {spec.label}
                  </div>
                  <div className={`text-xl font-bold ${spec.highlight ? "text-foreground" : "text-background"}`}>
                    {spec.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Specs;
