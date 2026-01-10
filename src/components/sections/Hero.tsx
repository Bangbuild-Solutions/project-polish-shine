import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import heroUrbanParents from "@/assets/hero-urban-parents.png";
import heroCityCreative from "@/assets/hero-city-creative.png";
import heroWeekendExplorer from "@/assets/hero-weekend-explorer.png";

const heroImages = [
  { src: heroImage, alt: "Simplix mini vélo cargo modulable" },
  { src: heroUrbanParents, alt: "Simplix pour les parents urbains" },
  { src: heroCityCreative, alt: "Simplix pour les créatifs de la ville" },
  { src: heroWeekendExplorer, alt: "Simplix pour les explorateurs du weekend" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const scrollToConfigurator = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("configurator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={heroImages[currentIndex].src}
            alt={heroImages[currentIndex].alt}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        </AnimatePresence>
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/60 via-teal-900/40 to-teal-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 to-transparent" />
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-gold-400"
                : "bg-background/50 hover:bg-background/70"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-20">
        {/* Made in France Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/90 text-foreground text-sm font-semibold shadow-lg backdrop-blur-sm">
            <span>🇫🇷</span>
            <span>Assemblé à Annecy</span>
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-tight mb-4"
        >
          Simplix
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
            mini vélo cargo modulable
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-background/90 font-medium max-w-3xl mx-auto mb-4"
        >
          Facile, costaud, léger et durable
        </motion.p>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8"
        >
          <div className="flex items-center gap-2 text-background/90">
            <span className="text-3xl sm:text-4xl font-black text-gold-400">17,6</span>
            <span className="text-sm">kg<br/>méca</span>
          </div>
          <div className="w-px h-12 bg-background/30" />
          <div className="flex items-center gap-2 text-background/90">
            <span className="text-3xl sm:text-4xl font-black text-gold-400">50</span>
            <span className="text-sm">kg<br/>arrière</span>
          </div>
          <div className="w-px h-12 bg-background/30" />
          <div className="flex items-center gap-2 text-background/90">
            <span className="text-3xl sm:text-4xl font-black text-gold-400">70</span>
            <span className="text-sm">km<br/>autonomie</span>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <Button
            size="xl"
            variant="hero"
            onClick={scrollToConfigurator}
            className="group"
          >
            Personnaliser mon Simplix
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-background/80 text-sm sm:text-base">
            À partir de <strong className="text-background font-bold">1 190€ TTC</strong> • Expédition sous 3 semaines
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-background/70"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Découvrir</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
