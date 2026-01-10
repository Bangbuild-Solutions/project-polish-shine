import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import okloLogo from "@/assets/oklo-logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToConfigurator = () => {
    const element = document.getElementById("configurator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img
              src={okloLogo}
              alt="Oklö"
              className={`h-8 sm:h-10 transition-all duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              variant={isScrolled ? "outline" : "heroOutline"}
              size="sm"
              className="text-xs sm:text-sm"
            >
              Essai gratuit
            </Button>
            <Button
              variant={isScrolled ? "default" : "hero"}
              size="sm"
              className="text-xs sm:text-sm"
              onClick={scrollToConfigurator}
            >
              Personnaliser
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
