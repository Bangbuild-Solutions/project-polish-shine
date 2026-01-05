import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  const scrollToConfigurator = () => {
    document.getElementById("configurator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-6">
            Prêt à simplifier <br className="hidden sm:block" />
            <span className="text-gold-400">vos déplacements ?</span>
          </h2>
          <p className="text-lg sm:text-xl text-background/80 max-w-2xl mx-auto mb-8">
            Essayez le Simplix gratuitement près de chez vous, ou configurez le vôtre en ligne.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              variant="hero"
              onClick={scrollToConfigurator}
              className="group"
            >
              Personnaliser mon Simplix
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="xl"
              variant="heroOutline"
              className="group"
            >
              <Calendar className="w-5 h-5" />
              Réserver un essai gratuit
            </Button>
          </div>

          <p className="mt-8 text-background/60 text-sm">
            Livraison offerte • Paiement en 3x sans frais • Garantie 5 ans
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
