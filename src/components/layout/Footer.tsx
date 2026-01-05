import okloLogo from "@/assets/oklo-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src={okloLogo}
              alt="Oklö"
              className="h-10 brightness-0 invert mb-4"
            />
            <p className="text-background/70 text-sm leading-relaxed">
              Vélos cargo légers et réparables, fabriqués à Annecy depuis 2019.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Produits</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Simplix</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Accessoires</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Pièces détachées</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Configurateur</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Notre histoire</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Nos valeurs</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Recrutement</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Presse</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-gold-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Garantie</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Réparations</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © 2024 Oklö. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-background transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-background transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-background transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
