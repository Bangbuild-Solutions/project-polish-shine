import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    location: "Lyon",
    text: "J'ai vendu ma voiture ! Le Simplix me permet de déposer mes enfants à l'école et d'aller travailler sans stress.",
    rating: 5,
  },
  {
    name: "Thomas B.",
    location: "Annecy",
    text: "Incroyablement léger pour un cargo. Je le monte facilement au 2ème étage. Un vrai game-changer.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    location: "Paris",
    text: "Qualité impeccable, SAV réactif. Meilleur investissement de ces dernières années.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ils ont choisi <span className="text-primary">Simplix</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Plus de 2 000 familles nous font confiance
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-lg">🏆</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold text-foreground">Vélo de l'année</span>
              <br />2024
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-lg">🇫🇷</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold text-foreground">Made in France</span>
              <br />Annecy
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-lg">♻️</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold text-foreground">100% réparable</span>
              <br />Garantie 5 ans
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
