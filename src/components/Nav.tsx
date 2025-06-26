import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { ModeToggle } from "./SwitcherTheme.tsx";
import Logo from "./Logo.tsx";
import { services } from "../lib/data.ts";
import { Link } from "react-router-dom";
import { Button } from "./ui/button.tsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items with dropdowns
  const navigationItems = [
    {
      name: "Services",
      href: "/services",
      dropdown: services,
    },
    {
      name: "Works",
      href: "/portfolio",
    },
    {
      name: "Resume",
      href: "/resume",
    },
  ];

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 sm:px-40 px-4 py-2 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg shadow-custom-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Logo rigid={false} />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item, index) => (
              <div key={item.name + index} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={closeDropdown}
                  >
                    <motion.button
                      whileHover={{ y: -2 }}
                      className="flex items-center space-x-1 px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium focus-custom"
                    >
                      <span>{item.name}</span>
                      <motion.div
                        animate={{
                          rotate: activeDropdown === item.name ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-popover rounded-lg shadow-custom-lg border border-border py-2"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center space-x-3 px-4 py-3 text-popover-foreground hover:bg-muted hover:text-primary transition-colors duration-200 rounded-md mx-2"
                              onClick={closeDropdown}
                            >
                              <subItem.icon className="w-4 h-4" />
                              <span className="text-sm font-medium">
                                {subItem.name}
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.href}
                      className="px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium relative group whitespace-nowrap focus-custom"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-custom-gradient group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            <ModeToggle />

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block"
            >
              <Button variant="gradient">
                <Link
                  to="/contact"
                  className="py-2 rounded-lg font-medium shadow-custom-lg hover:shadow-custom transition-all duration-300 whitespace-nowrap focus-custom relative overflow-hidden group"
                >
                  <span className="relative z-10 font-bold">Let's do this</span>
                </Link>
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMobileMenu}
              className="lg:hidden focus-custom"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ scale: 0, rotate: 90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-[1.2rem] w-[1.2rem]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-[1.2rem] w-[1.2rem] " />
                  </motion.div>
                )}
              </AnimatePresence>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border bg-background/95 backdrop-blur-lg rounded-b-lg"
            >
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200 font-medium focus-custom"
                        >
                          <span>{item.name}</span>
                          <motion.div
                            animate={{
                              rotate: activeDropdown === item.name ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 mt-2 space-y-2 bg-muted/50 rounded-lg p-2"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="flex items-center space-x-3 px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200 focus-custom"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  <subItem.icon className="w-4 h-4" />
                                  <span className="text-sm">
                                    {subItem.name}
                                  </span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200 font-medium focus-custom"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navigationItems.length * 0.1 }}
                  className="pt-4 border-t border-border"
                >
                  <Link
                    to="/contact"
                    className="block w-full px-6 py-3 bg-custom-gradient text-whitish text-center rounded-lg font-medium shadow-custom-lg hover:shadow-custom transition-all duration-300 relative overflow-hidden group focus-custom"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-custom-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
