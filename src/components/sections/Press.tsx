import { motion } from "framer-motion";

// Press logos
import frandroidLogo from "@/assets/press/frandroid-logo.png";
import cleanriderLogo from "@/assets/press/cleanrider-logo.png";
import weelzLogo from "@/assets/press/weelz-logo.png";
import transitionVeloLogo from "@/assets/press/transition-velo-logo.png";

const pressLogos = [
  {
    name: "Frandroid",
    logo: frandroidLogo,
    quote: "Le vélo cargo compact et modulable",
    url: "https://www.frandroid.com/survoltes/velo-electrique/2631953_ce-velo-electrique-francais-est-la-preuve-quun-velo-peut-etre-pratique-et-compact",
  },
  {
    name: "Cleanrider",
    logo: cleanriderLogo,
    quote: "Un vélo bien pensé et bien construit",
    url: "https://www.cleanrider.com/catalogue/velo-electrique/oklo/oklo-simplix/",
  },
  {
    name: "Weelz",
    logo: weelzLogo,
    quote: "La simplicité au service du quotidien",
    url: "https://weelz.ouest-france.fr/oklo-simplix-un-velo-cargo-midtail-gaulois-refractaire-a-la-techno-mais-pas-au-style/",
  },
  {
    name: "Transition Vélo",
    logo: transitionVeloLogo,
    quote: "Un cargo léger et pratique",
    url: "https://www.transitionvelo.com/test/test-oklo-simplix-le-velo-cargo-biplace-simple-compact-et-leger/",
  },
];

const Press = () => {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Presse
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Ils parlent de <span className="text-primary">nous</span>
          </h2>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {pressLogos.map((press, index) => (
            <motion.a
              key={press.name}
              href={press.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Logo (grayscale by default, colored on hover) */}
              <div className="relative mb-4 h-12 sm:h-16 w-full flex items-center justify-center">
                <img
                  src={press.logo}
                  alt={`${press.name} logo`}
                  className="max-h-full max-w-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              
              {/* Quote - always visible */}
              <p className="text-xs sm:text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300 line-clamp-2">
                "{press.quote}"
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Press mention stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          <div className="text-center">
            <span className="block text-3xl sm:text-4xl font-black text-primary">50+</span>
            <span className="text-sm text-muted-foreground">Articles presse</span>
          </div>
          <div className="text-center">
            <span className="block text-3xl sm:text-4xl font-black text-primary">⭐ 4.8</span>
            <span className="text-sm text-muted-foreground">Note moyenne</span>
          </div>
          <div className="text-center">
            <span className="block text-3xl sm:text-4xl font-black text-primary">🏆</span>
            <span className="text-sm text-muted-foreground">Vélo cargo de l'année 2024</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Press;
