import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Array com os links de navegação para facilitar a manutenção
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#como-comecar", label: "Como Começar" },
  { href: "#funcionalidades", label: "Funcionalidades" },
];

export function Navigation() {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito para "escutar" a rolagem da página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Define "home" como ativo quando o usuário está no topo
      if (window.scrollY < 100) {
        setActiveLink("home");
        return;
      }

      let currentSection = "";
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.getAttribute('id') || "";
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto relative flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="text-xl font-bold text-primary">
          Pontuei
        </Link>
        
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              // A rolagem suave padrão do CSS (ativada no index.css) cuidará da animação
              className={`text-sm font-medium transition-colors hover:text-primary ${
                (activeLink === link.href.substring(1))
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          {/* Botão "Para Lojistas" agora leva para a página admin-store */}
          <Link to="/admin-store">
            <Button>Para Lojistas</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

