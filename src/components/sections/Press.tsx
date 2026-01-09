import { motion } from "framer-motion";

const pressLogos = [
  {
    name: "Frandroid",
    quote: "Le vélo cargo compact et modulable",
    url: "https://www.frandroid.com",
  },
  {
    name: "Cleanrider",
    quote: "Un vélo bien pensé et bien construit",
    url: "https://www.cleanrider.com",
  },
  {
    name: "Weelz",
    quote: "La simplicité au service du quotidien",
    url: "https://www.weelz.fr",
  },
  {
    name: "Transition Vélo",
    quote: "Un cargo léger et pratique",
    url: "https://www.transitionvelo.com",
  },
  {
    name: "Vélo & Territoires",
    quote: "L'avenir de la mobilité urbaine",
    url: "https://www.velo-territoires.org",
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8"
        >
          {pressLogos.map((logo, index) => (
            <motion.a
              key={logo.name}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Logo Text (grayscale by default, colored on hover) */}
              <div className="relative mb-3">
                <span className="text-lg sm:text-xl font-bold text-muted-foreground grayscale group-hover:grayscale-0 group-hover:text-primary transition-all duration-300">
                  {logo.name}
                </span>
              </div>
              
              {/* Quote appears on hover */}
              <p className="text-xs text-center text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                "{logo.quote}"
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
            <span className="text-sm text-muted-foreground">Vélo de l'année 2023</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Press;
