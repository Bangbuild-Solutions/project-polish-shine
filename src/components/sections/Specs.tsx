import { motion } from "framer-motion";

const specs = [
  { label: "Dimensions", value: "166 × 70 × 102 cm" },
  { label: "Empattement", value: "1150 mm" },
  { label: "Roues", value: '20" Mach1 France' },
  { label: "Pneus", value: 'Schwalbe Big Apple' },
  { label: "Fourche", value: "RST suspendue 50mm" },
  { label: "Cadre", value: "Acier Cro-Mo Europe" },
  { label: "Transmission", value: "Shimano Altus 8v" },
  { label: "Taille cycliste", value: "1,45 m à 1,90 m" },
];

const versions = [
  { name: "Méca", weight: "17,6 kg", motor: "—", battery: "—", brakes: "V-Brake", price: "1 190 €", ptac: "120 kg" },
  { name: "Éco", weight: "21,0 kg", motor: "Virvolt 750", battery: "250 Wh", brakes: "V-Brake", price: "1 990 €", ptac: "120 kg" },
  { name: "Plus", weight: "21,5 kg", motor: "Virvolt 750", battery: "380 Wh", brakes: "Disque hydr.", price: "2 290 €", ptac: "140 kg" },
  { name: "Max", weight: "24,6 kg", motor: "Virvolt 900", battery: "540 Wh", brakes: "Disque hydr.", price: "2 640 €", ptac: "140 kg" },
];

const Specs = () => {
  return (
    <section className="py-20 sm:py-28 bg-teal-800 text-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-background/10 text-background text-sm font-semibold mb-4">
              Spécifications techniques
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              4 versions pour <span className="text-gold-400">tous les usages</span>
            </h2>
            <p className="text-lg text-background/80 mb-8 leading-relaxed">
              Du modèle mécanique sans assistance au Simplix Max avec moteur pédalier, 
              trouvez la version adaptée à votre utilisation.
            </p>

            {/* Capacity Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 rounded-xl bg-background/10 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-black text-gold-400">50</div>
                <div className="text-sm text-background/70 mt-1">kg arrière</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-background/10 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-black text-gold-400">15</div>
                <div className="text-sm text-background/70 mt-1">kg avant</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-background/10 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-black text-gold-400">70</div>
                <div className="text-sm text-background/70 mt-1">km max</div>
              </div>
            </div>

            {/* Common Specs */}
            <div className="grid grid-cols-2 gap-3">
              {specs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-3 rounded-lg bg-background/5"
                >
                  <div className="text-xs text-background/60">{spec.label}</div>
                  <div className="text-sm font-semibold text-background">{spec.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Versions Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-4">
              {versions.map((version, index) => (
                <motion.div
                  key={version.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-background/10 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-background">Simplix {version.name}</h3>
                    <span className="text-xl font-black text-gold-400">{version.price}</span>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-xs">
                    <div>
                      <span className="text-background/60">Poids</span>
                      <p className="font-semibold text-background">{version.weight}</p>
                    </div>
                    <div>
                      <span className="text-background/60">Moteur</span>
                      <p className="font-semibold text-background">{version.motor}</p>
                    </div>
                    <div>
                      <span className="text-background/60">Batterie</span>
                      <p className="font-semibold text-background">{version.battery}</p>
                    </div>
                    <div>
                      <span className="text-background/60">Freins</span>
                      <p className="font-semibold text-background">{version.brakes}</p>
                    </div>
                    <div>
                      <span className="text-background/60">PTAC</span>
                      <p className="font-semibold text-background">{version.ptac}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <p className="mt-6 text-sm text-background/60 text-center">
              Tous les modèles : cadre acier Cro-Mo, fourche suspendue, porte-bagages avant 15 kg et arrière 50 kg
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Specs;
