import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, ChevronUp, ShoppingCart } from "lucide-react";

interface Version {
  id: string;
  name: string;
  price: number;
  motor: string;
  battery: string;
  range: string;
}

interface Accessory {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

const versions: Version[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    price: 1190,
    motor: "Bafang 250W",
    battery: "360Wh",
    range: "50 km",
  },
  {
    id: "confort",
    name: "Confort",
    price: 1490,
    motor: "Bafang 250W",
    battery: "540Wh",
    range: "80 km",
  },
  {
    id: "premium",
    name: "Premium",
    price: 1890,
    motor: "Bafang 250W",
    battery: "720Wh",
    range: "110 km",
  },
];

const accessories: Accessory[] = [
  { id: "panier", name: "Panier City Cargo", price: 89, description: "Panier avant robuste", category: "Transport" },
  { id: "sacoche", name: "Sacoche Basil", price: 59, description: "Sacoche imperméable", category: "Transport" },
  { id: "topcase", name: "Topcase Citybox", price: 129, description: "Coffre arrière verrouillable", category: "Transport" },
  { id: "coussin", name: "Coussin passager", price: 49, description: "Confort optimal", category: "Confort" },
  { id: "dossier", name: "Dossier arrière", price: 79, description: "Sécurité enfant", category: "Confort" },
  { id: "antivol", name: "Antivol AXA Fold", price: 89, description: "Sécurité renforcée", category: "Sécurité" },
];

const Configurator = () => {
  const [selectedVersion, setSelectedVersion] = useState<string>("confort");
  const [selectedAccessories, setSelectedAccessories] = useState<Set<string>>(new Set());
  const [showAccessories, setShowAccessories] = useState(false);

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

  return (
    <section id="configurator" className="py-20 sm:py-28 bg-secondary/30">
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
            Configurateur
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Créez votre <span className="text-primary">Simplix</span>
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
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">1. Choisissez votre version</h3>
            <div className="grid sm:grid-cols-3 gap-4">
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
                  <p className="text-2xl font-black text-primary mb-3">{version.price.toLocaleString("fr-FR")} €</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>🔋 {version.battery}</p>
                    <p>📍 {version.range}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Accessories Toggle */}
            <div className="pt-6">
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
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
                      {accessories.map((accessory) => (
                        <button
                          key={accessory.id}
                          onClick={() => toggleAccessory(accessory.id)}
                          className={`relative p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                            selectedAccessories.has(accessory.id)
                              ? "border-gold-400 bg-gold-50"
                              : "border-border bg-card hover:border-gold-300"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h5 className="font-semibold text-foreground text-sm">{accessory.name}</h5>
                              <p className="text-xs text-muted-foreground">{accessory.description}</p>
                            </div>
                            <span className="text-sm font-bold text-primary whitespace-nowrap">+{accessory.price} €</span>
                          </div>
                          {selectedAccessories.has(accessory.id) && (
                            <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-gold-400 flex items-center justify-center">
                              <Check className="w-3 h-3 text-foreground" />
                            </div>
                          )}
                        </button>
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
              <div className="pb-4 border-b border-border">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Version</span>
                  <span className="font-semibold text-foreground">{selectedVersionData?.name}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-muted-foreground">Autonomie</span>
                  <span className="font-semibold text-foreground">{selectedVersionData?.range}</span>
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
                          <span className="text-foreground">{a.name}</span>
                          <span className="text-muted-foreground">+{a.price} €</span>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Total */}
              <div className="pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-foreground">Total</span>
                  <span className="text-2xl font-black text-primary">
                    {total.toLocaleString("fr-FR")} €
                  </span>
                </div>
                <Button variant="gold" size="lg" className="w-full">
                  <ShoppingCart className="w-5 h-5" />
                  Commander
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  Livraison gratuite • Paiement en 3x sans frais
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Configurator;
