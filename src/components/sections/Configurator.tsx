import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, ChevronUp, ShoppingCart, Info } from "lucide-react";

// Import accessory images (PNG with transparent backgrounds)
import panierCityCargo from "@/assets/accessories/panier-city-cargo.png";
import caissePlastiqueBasil from "@/assets/accessories/caisse-plastique-basil.png";
import panierPourChien from "@/assets/accessories/panier-pour-chien.png";
import sacocheBaSilShopperBag from "@/assets/accessories/sacoche-basil-shopper-bag.png";
import topcaseCitybox from "@/assets/accessories/topcase-citybox.png";
import ensembleCoussinPareJupe from "@/assets/accessories/ensemble-coussin-pare-jupe.png";
import gardeCorpsArriere from "@/assets/accessories/garde-corps-arriere.png";
import antivolAxaFold from "@/assets/accessories/antivol-axa-fold.png";
import retroviseurXlc from "@/assets/accessories/retroviseur-xlc.png";
import verrouUniklip from "@/assets/accessories/verrou-uniklip.png";
import dossierPoigneeArriere from "@/assets/accessories/dossier-poignee-arriere.png";
import bequilleCentraleUrsus from "@/assets/accessories/bequille-centrale-ursus.png";

interface Version {
  id: string;
  name: string;
  price: number;
  motor: string;
  battery: string;
  range: string;
  weight: string;
  brakes: string;
  description: string;
}

interface Accessory {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image?: string;
  specs?: string[];
}

const versions: Version[] = [
  {
    id: "meca",
    name: "Simplix Méca",
    price: 1190,
    motor: "Sans moteur",
    battery: "—",
    range: "—",
    weight: "17,6 kg",
    brakes: "V-Brake",
    description: "Pour ceux qui circulent sur du plat avec un chargement modéré. Facile à entretenir, possibilité d'électrification ultérieure.",
  },
  {
    id: "eco",
    name: "Simplix Éco",
    price: 1990,
    motor: "Virvolt 750 roue arrière",
    battery: "250 Wh",
    range: "≃30 km",
    weight: "21,0 kg",
    brakes: "V-Brake",
    description: "Usage occasionnel ou faibles dénivelés. Batterie format gourde légère et compacte.",
  },
  {
    id: "plus",
    name: "Simplix Plus",
    price: 2290,
    motor: "Virvolt 750 roue arrière",
    battery: "380 Wh",
    range: "≃50 km",
    weight: "21,5 kg",
    brakes: "Disque hydraulique",
    description: "Usage quotidien intensif. Plus grande batterie et freins à disque hydrauliques.",
  },
  {
    id: "max",
    name: "Simplix Max",
    price: 2640,
    motor: "Virvolt 900 pédalier",
    battery: "540 Wh",
    range: "≃70 km",
    weight: "24,6 kg",
    brakes: "Disque hydraulique",
    description: "Usage très intensif. Moteur pédalier 80 Nm et grande autonomie.",
  },
];

const accessories: Accessory[] = [
  { 
    id: "panier-city-cargo", 
    name: "Panier city cargo", 
    price: 67, 
    description: "Panier métallique robuste",
    category: "Transport",
    image: panierCityCargo,
    specs: ["Volume : 38 l", "Charge maxi : 10 kg", "Position : avant et/ou arrière"],
  },
  { 
    id: "caisse-basil", 
    name: "Caisse plastique Basil", 
    price: 64, 
    description: "Caisse plastique pratique",
    category: "Transport",
    image: caissePlastiqueBasil,
    specs: ["Volume : 29,5 l", "Charge maxi : 10 kg", "Fixation : UniKlip 2"],
  },
  { 
    id: "panier-chien", 
    name: "Panier pour chien", 
    price: 234, 
    description: "Panier osier avec capuche",
    category: "Transport",
    image: panierPourChien,
    specs: ["Volume : 40 l", "Charge maxi : 10 kg", "Capuche et coussin inclus"],
  },
  { 
    id: "sacoche-basil", 
    name: "Sacoche Basil shopper bag", 
    price: 49, 
    description: "Sacoche imperméable",
    category: "Transport",
    image: sacocheBaSilShopperBag,
    specs: ["Volume : 23 l", "Charge maxi : 5 kg", "Position : arrière"],
  },
  { 
    id: "topcase", 
    name: "Topcase Citybox", 
    price: 183, 
    description: "Coffre arrière verrouillable",
    category: "Transport",
    image: topcaseCitybox,
    specs: ["Volume : 22 l", "Étanche", "Serrure à clé"],
  },
  { 
    id: "coussin-ensemble", 
    name: "Ensemble coussin + pare-jupe + cale-pieds", 
    price: 100, 
    description: "Kit passager complet",
    category: "Confort",
    image: ensembleCoussinPareJupe,
    specs: ["Coussin 45 cm", "Cale-pieds aluminium", "Pare-jupes inclus"],
  },
  { 
    id: "garde-corps", 
    name: "Garde-corps porte-bagages arrière", 
    price: 150, 
    description: "Sécurité et maintien passager",
    category: "Confort",
    image: gardeCorpsArriere,
    specs: ["Aluminium", "Volume intérieur : 42x53 cm", "Fabriqué en France"],
  },
  { 
    id: "dossier-poignee", 
    name: "Dossier et poignée arrière", 
    price: 85, 
    description: "Confort passager amélioré",
    category: "Confort",
    image: dossierPoigneeArriere,
    specs: ["Petit dossier + poignée", "Encombrement réduit", "Fabriqué en France"],
  },
  { 
    id: "bequille-centrale", 
    name: "Béquille centrale Ursus Jumbo", 
    price: 43, 
    description: "Stabilité maximale à l'arrêt",
    category: "Équipement",
    image: bequilleCentraleUrsus,
    specs: ["Double pied", "Position verticale", "Grande stabilité"],
  },
  { 
    id: "antivol-axa", 
    name: "Antivol pliant AXA Fold Ultra 90", 
    price: 139, 
    description: "Sécurité niveau ART2",
    category: "Sécurité",
    image: antivolAxaFold,
    specs: ["Longueur : 90 cm", "Niveau : ART2, FUB2", "AXA 14/15"],
  },
  { 
    id: "retroviseur", 
    name: "Rétroviseur XLC bout de guidon", 
    price: 25, 
    description: "Vision arrière optimale",
    category: "Sécurité",
    image: retroviseurXlc,
    specs: ["Diamètre : 68 mm", "Position : gauche et/ou droite"],
  },
  { 
    id: "verrou-uniklip", 
    name: "Verrou à clé UniKlip 2/KorbKlip 2", 
    price: 21, 
    description: "Sécurise les accessoires",
    category: "Sécurité",
    image: verrouUniklip,
    specs: ["Compatible UniKlip 2", "Compatible KorbKlip 2"],
  },
];

const Configurator = () => {
  const [selectedVersion, setSelectedVersion] = useState<string>("eco");
  const [selectedAccessories, setSelectedAccessories] = useState<Set<string>>(new Set());
  const [showAccessories, setShowAccessories] = useState(false);
  const [hoveredAccessory, setHoveredAccessory] = useState<string | null>(null);

  const toggleAccessory = (id: string) => {
    setSelectedAccessories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const { total, selectedVersionData } = useMemo(() => {
    const versionData = versions.find((v) => v.id === selectedVersion);
    const basePrice = versionData?.price || 0;
    const accessoriesPrice = accessories
      .filter((a) => selectedAccessories.has(a.id))
      .reduce((sum, a) => sum + a.price, 0);
    return {
      total: basePrice + accessoriesPrice,
      selectedVersionData: versionData,
    };
  }, [selectedVersion, selectedAccessories]);

  const groupedAccessories = useMemo(() => {
    const groups: Record<string, Accessory[]> = {};
    accessories.forEach((a) => {
      if (!groups[a.category]) groups[a.category] = [];
      groups[a.category].push(a);
    });
    return groups;
  }, []);

  return (
    <section id="configurator" className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Configurateur
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Personnalisez votre <span className="text-primary">Simplix</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Choisissez la version et les accessoires qui correspondent à vos besoins.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Versions Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-lg font-semibold text-foreground">1. Choisissez votre version</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {versions.map((version) => (
                <button
                  key={version.id}
                  onClick={() => setSelectedVersion(version.id)}
                  className={`relative p-5 rounded-xl border-2 text-left transition-all duration-300 ${
                    selectedVersion === version.id
                      ? "border-primary bg-primary/5 shadow-lg"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  {selectedVersion === version.id && (
                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                  <h4 className="text-lg font-bold text-foreground mb-1">{version.name}</h4>
                  <p className="text-2xl font-black text-primary mb-2">{version.price.toLocaleString("fr-FR")} €</p>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{version.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <p>⚖️ {version.weight}</p>
                    <p>🔋 {version.battery}</p>
                    <p>📍 {version.range}</p>
                    <p>🛞 {version.brakes}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Accessories Toggle */}
            <div className="pt-4">
              <button
                onClick={() => setShowAccessories(!showAccessories)}
                className="flex items-center gap-2 text-lg font-semibold text-foreground hover:text-primary transition-colors"
              >
                2. Ajoutez des accessoires
                <span className="text-sm font-normal text-muted-foreground">
                  ({selectedAccessories.size} sélectionné{selectedAccessories.size !== 1 ? "s" : ""})
                </span>
                {showAccessories ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              <AnimatePresence>
                {showAccessories && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 space-y-6">
                      {Object.entries(groupedAccessories).map(([category, items]) => (
                        <div key={category}>
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                            {category}
                          </h4>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {items.map((accessory) => (
                              <button
                                key={accessory.id}
                                onClick={() => toggleAccessory(accessory.id)}
                                onMouseEnter={() => setHoveredAccessory(accessory.id)}
                                onMouseLeave={() => setHoveredAccessory(null)}
                                className={`relative p-3 rounded-xl border-2 text-left transition-all duration-200 ${
                                  selectedAccessories.has(accessory.id)
                                    ? "border-gold-400 bg-gold-50"
                                    : "border-border bg-card hover:border-gold-300"
                                }`}
                              >
                                {/* Image */}
                                {accessory.image ? (
                                  <div className="w-full h-20 mb-2 rounded-lg overflow-hidden bg-muted/50">
                                    <img 
                                      src={accessory.image} 
                                      alt={accessory.name}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                ) : (
                                  <div className="w-full h-20 mb-2 rounded-lg bg-muted/30 flex items-center justify-center">
                                    <span className="text-xs text-muted-foreground">Image à venir</span>
                                  </div>
                                )}
                                
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex-1 min-w-0">
                                    <h5 className="font-semibold text-foreground text-sm leading-tight line-clamp-2">
                                      {accessory.name}
                                    </h5>
                                    <p className="text-xs text-muted-foreground mt-0.5">{accessory.description}</p>
                                  </div>
                                  <span className="text-sm font-bold text-primary whitespace-nowrap">
                                    +{accessory.price} €
                                  </span>
                                </div>
                                
                                {/* Specs tooltip on hover */}
                                <AnimatePresence>
                                  {hoveredAccessory === accessory.id && accessory.specs && (
                                    <motion.div
                                      initial={{ opacity: 0, y: 5 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 5 }}
                                      className="absolute bottom-full left-0 right-0 mb-2 p-2 bg-foreground text-background text-xs rounded-lg shadow-lg z-10"
                                    >
                                      {accessory.specs.map((spec, i) => (
                                        <p key={i}>• {spec}</p>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>

                                {selectedAccessories.has(accessory.id) && (
                                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-gold-400 flex items-center justify-center">
                                    <Check className="w-3 h-3 text-foreground" />
                                  </div>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:row-start-1"
          >
            <div className="sticky top-24 p-6 rounded-2xl bg-card border border-border shadow-lg">
              <h3 className="text-lg font-bold text-foreground mb-4">Votre Simplix</h3>
              
              {/* Selected Version */}
              <div className="pb-4 border-b border-border space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Version</span>
                  <span className="font-semibold text-foreground">{selectedVersionData?.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Poids</span>
                  <span className="font-semibold text-foreground">{selectedVersionData?.weight}</span>
                </div>
                {selectedVersionData?.id !== "meca" && (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Autonomie</span>
                      <span className="font-semibold text-foreground">{selectedVersionData?.range}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Batterie</span>
                      <span className="font-semibold text-foreground">{selectedVersionData?.battery}</span>
                    </div>
                  </>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Freins</span>
                  <span className="font-semibold text-foreground">{selectedVersionData?.brakes}</span>
                </div>
              </div>

              {/* Accessories */}
              {selectedAccessories.size > 0 && (
                <div className="py-4 border-b border-border">
                  <span className="text-sm text-muted-foreground">Accessoires</span>
                  <div className="mt-2 space-y-1">
                    {accessories
                      .filter((a) => selectedAccessories.has(a.id))
                      .map((a) => (
                        <div key={a.id} className="flex justify-between text-sm">
                          <span className="text-foreground truncate pr-2">{a.name}</span>
                          <span className="text-muted-foreground whitespace-nowrap">+{a.price} €</span>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Total */}
              <div className="pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-foreground">Total TTC</span>
                  <span className="text-2xl font-black text-primary">
                    {total.toLocaleString("fr-FR")} €
                  </span>
                </div>
                <Button variant="gold" size="lg" className="w-full">
                  <ShoppingCart className="w-5 h-5" />
                  Commander
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  Livraison 80€ • Paiement en 3x ou 4x avec Alma
                </p>
                <p className="text-xs text-center text-muted-foreground mt-1">
                  Expédition sous 3 semaines
                </p>
              </div>

              {/* Info */}
              <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                <div className="flex gap-2 text-xs text-muted-foreground">
                  <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                  <span>Assemblé à la commande dans notre atelier d'Annecy en Haute-Savoie.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Configurator;
