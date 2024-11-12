import { useEffect, useState } from 'react';
import FooterComponent from '../components/FooterComponent';
const Home = () => {
  const images = [
    "/images/beers-images/Malonne Bière Brut Calvados 75cl.jpeg", // Image 1
    "/images/beers-images/Still Nacht 33cl.jpeg", // Image 2
    "/images/beers-images/Père Noèl 33cl.jpeg", // Image 3
    "/images/giftpacks-images/Westvleteren 2x33cl.jpeg", // Image 4
    "/images/beers-images/Corsendonk Christmas 33cl.jpeg", // Image 5
    "/images/beers-images/Lupulus Hibernatus 33cl.jpeg", // Image 6
    "/images/beers-images/Gouden Carolus 75cl.jpeg", // Image 7
    "/images/beers-images/Mikkeller 75cl.jpeg", // Image 8
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Stato per controllare la visibilità dell'immagine

  // Cambia immagine automaticamente ogni 2 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Avvia la transizione di dissolvenza
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsVisible(true); // Riporta la visibilità dell'immagine dopo averla cambiata
      }, 200); // Il tempo della transizione prima di cambiare l'immagine
    }, 5000);

    return () => clearInterval(interval); // Pulisce l'interval quando il componente viene smontato
  }, [images.length]);

  // Funzione per passare all'immagine precedente
  const handlePrev = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setIsVisible(true);
    }, 200);
  };

  // Funzione per passare all'immagine successiva
  const handleNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsVisible(true);
    }, 200);
  };

  return (
    <div className="h-full py-5 px-1 sm:py-2 text-center flex flex-col gap-2">
        <div className='flex flex-col p-3 gap-8'>
            <h1 className="text-5xl font-bold sm:w-1/2 mx-auto p-2 text-white bg-black border-black bg-opacity-10 rounded z-0">Benvenuti in Montanaro SRLS</h1>
            <p className="text-lg text-white mx-auto w-full md:w-1/2 bg-white bg-opacity-5 rounded-2xl p-6">
            Scopri le nostre birre artigianali, realizzate con cura e passione <br/>  Ogni sorso racchiude ingredienti selezionati e un equilibrio di sapori unico, per un’ esperienza autentica che celebra la qualità e la tradizione.<br/> Scegli tra una varietà di birre, perfette per ogni palato e occasione.
            </p>
      </div>

      <div className="relative w-full max-w-xl mx-auto">
        {/* Immagine con transizione di dissolvenza */}
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className={`max w-1/2 mx-auto rounded-lg shadow-2xl border-dark border transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Pulsanti per controllare il carosello */}
        <button
          className="absolute text-[1.2rem] top-1/2 left-1/4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white hover:text-orange-500 duration-500 p-2 rounded-r"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button
          className="absolute text-[1.2rem] top-1/2 right-1/4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white hover:text-orange-500 duration-500 p-2 rounded-l"
          onClick={handleNext}
        >
          &gt;
        </button>

        {/* Indicatore della slide corrente */}
        <div className="absolute bottom-1 left-1/4 text-white bg-black bg-opacity-50 p-2 rounded">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>
      <FooterComponent/>
    </div>
  );
};

export default Home;
