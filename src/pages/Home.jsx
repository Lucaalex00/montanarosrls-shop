import { useEffect, useState } from 'react';
import FooterComponent from '../components/FooterComponent';

const Home = () => {
  const images = [
    "/images/giftpacks-images/BrewdogHoppyXmas.jpg",
    "/images/beers-images/Gouden Carolus 33cl.jpeg",
    "/images/beers-images/criminally_33cl.jpg",
    "/images/beers-images/xocoveza latt.jpeg",
    "/images/beers-images/st._bernardus_xmas ale33.jpg",
    "/images/giftpacks-images/TrappistesRochefort.jpg",
    "/images/giftpacks-images/PanettoneZago600gr.jpg",
    "/images/beers-images/LaTrappex4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark mb-6 drop-shadow-lg">
            Benvenuti in
            <span className="block mt-2 text-primary">
              Montanaro SRLS
            </span>
          </h1>
          <p className="text-lg md:text-xl text-dark max-w-3xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-primary/30">
            Scopri i nostri servizi e prodotti selezionati con <span className="font-semibold text-primary">qualità</span> e <span className="font-semibold text-primary">tradizione</span>.
            <br className="hidden sm:block" />
            Scegli tra una varietà di <span className="text-primary font-medium">birre artigianali</span>, <span className="text-primary font-medium">vini pregiati</span>, bevande e non solo...
            <br />
            <span className="text-sm text-gray-700 mt-2 block">Perfetto per ogni palato e occasione.</span>
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative max-w-2xl mx-auto mb-16">
          <div className="relative group">
            {/* Immagine principale */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-primary/50">
              <img
                src={images[currentImageIndex]}
                alt={`Prodotto ${currentImageIndex + 1}`}
                className={`w-full h-[400px] md:h-[500px] object-contain bg-transparent transition-all duration-500 transform ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              />
            </div>

            {/* Indicatore slide con dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-dark/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsVisible(false);
                    setTimeout(() => {
                      setCurrentImageIndex(index);
                      setIsVisible(true);
                    }, 300);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentImageIndex
                      ? 'w-8 h-3 bg-primary'
                      : 'w-3 h-3 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Vai alla slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="absolute top-6 right-6 bg-dark/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-6 border-2 border-primary/40 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl mb-4">🍺</div>
            <h3 className="text-xl font-bold text-dark mb-2">Birre Artigianali</h3>
            <p className="text-gray-700">Selezione premium di birre provenienti da tutto il mondo</p>
          </div>
          
          <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-6 border-2 border-primary/40 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl mb-4">🍷</div>
            <h3 className="text-xl font-bold text-dark mb-2">Vini Pregiati</h3>
            <p className="text-gray-700">Le migliori etichette per ogni occasione speciale</p>
          </div>
          
          <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-6 border-2 border-primary/40 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-bold text-dark mb-2">Confezioni Regalo</h3>
            <p className="text-gray-700">Idee regalo perfette per sorprendere chi ami</p>
          </div>
        </div>

        <FooterComponent />
      </div>
    </div>
  );
};

export default Home;