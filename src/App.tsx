import { motion } from "motion/react";
import { Phone, Instagram, MapPin, Pizza, Coffee, Utensils } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-dark/95 backdrop-blur-sm z-50 border-b border-white/10 px-6 py-4 flex justify-between items-center">
      <div className="text-primary font-bold text-xl md:text-2xl">Haji TX Café & Pizzeria</div>
      <ul className="hidden md:flex gap-8">
        <li><a href="#about" className="hover:text-primary transition-colors">À propos</a></li>
        <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
        <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
      </ul>
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 drop-shadow-lg">
          Pizza fraîche, bon café, bonne ambiance 🍕☕
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Bienvenue chez Haji TX Café & Pizzeria à Tanger, Mesnana Inara. Découvrez nos délicieuses pizzas, notre café savoureux et une ambiance chaleureuse pour vos moments en famille ou entre amis.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="tel:0604159003" 
            className="bg-secondary hover:bg-red-500 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:-translate-y-1 flex items-center gap-2"
          >
            <Phone size={20} /> Appeler maintenant
          </a>
          <a 
            href="https://instagram.com/haji_tx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary hover:bg-yellow-500 text-dark px-8 py-3 rounded-full font-bold transition-all transform hover:-translate-y-1 flex items-center gap-2"
          >
            <Instagram size={20} /> Instagram
          </a>
        </div>
      </motion.div>
    </header>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">À propos de nous</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Chez <strong className="text-primary">Haji TX Café & Pizzeria</strong>, nous vous proposons des pizzas préparées avec des ingrédients frais, un café délicieux et une atmosphère conviviale au cœur de Tanger. Que ce soit pour une pause café, un repas en famille ou un moment entre amis, nous vous accueillons avec plaisir.
        </p>
      </motion.div>
    </section>
  );
};

const MenuCard = ({ title, description, image, icon: Icon }: { title: string, description: string, image: string, icon: any, key?: any }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-card rounded-2xl overflow-hidden border border-white/5 shadow-2xl"
  >
    <img src={image} alt={title} className="w-full h-56 object-cover" referrerPolicy="no-referrer" />
    <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="text-primary" size={20} />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="text-primary font-bold">Prix en magasin</div>
    </div>
  </motion.div>
);

const Menu = () => {
  const items = [
    {
      title: "Pizza Margherita",
      description: "Sauce tomate classique, mozzarella fondante et basilic frais.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      icon: Pizza
    },
    {
      title: "Pizza Pepperoni",
      description: "Une pizza généreuse avec fromage fondant, sauce tomate et pepperoni.",
      image: "https://images.unsplash.com/photo-1548365328-9f547fb0953b?auto=format&fit=crop&w=800&q=80",
      icon: Pizza
    },
    {
      title: "Café chaud",
      description: "Un café fraîchement préparé pour accompagner vos meilleurs moments.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      icon: Coffee
    },
    {
      title: "Jus frais",
      description: "Des boissons rafraîchissantes et des jus servis bien frais.",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6cf7?auto=format&fit=crop&w=800&q=80",
      icon: Utensils
    }
  ];

  return (
    <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">Nos spécialités</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <MenuCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">Contact & Localisation</h2>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-card p-10 rounded-3xl border border-white/10 text-center shadow-2xl"
      >
        <div className="space-y-4 mb-8">
          <p className="text-lg"><strong className="text-primary">Nom :</strong> Haji TX Café & Pizzeria</p>
          <div className="text-lg flex items-center justify-center gap-2">
            <MapPin className="text-primary" size={20} />
            <span><strong>Adresse :</strong> Café, Tanger Mesnana Inara, 90000</span>
          </div>
          <p className="text-lg"><strong>Code de localisation :</strong> Q42R+VC طنجة</p>
          <p className="text-lg">
            <strong>Téléphone :</strong> <a href="tel:0604159003" className="hover:text-primary transition-colors">0604159003</a>
          </p>
          <p className="text-lg">
            <strong>Instagram :</strong> <a href="https://instagram.com/haji_tx" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@haji_tx</a>
          </p>
        </div>
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Q42R%2BVC%20Tangier" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-secondary hover:bg-red-500 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105"
        >
          Voir sur la carte
        </a>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-black/50 border-t border-white/5 text-center text-gray-500">
      <p>© {new Date().getFullYear()} Haji TX Café & Pizzeria — Tanger, Maroc. Tous droits réservés.</p>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-dark">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}
