import { useEffect, useState } from 'react';

const Home = () => {
  const images = [
    'https://picsum.photos/id/1015/600/400', // Image 1
    'https://picsum.photos/id/1016/600/400', // Image 2
    'https://picsum.photos/id/1018/600/400', // Image 3
    'https://picsum.photos/id/1019/600/400', // Image 4
    'https://picsum.photos/id/1020/600/400', // Image 5
    'https://picsum.photos/id/1021/600/400', // Image 6
    'https://picsum.photos/id/1022/600/400', // Image 7
    'https://picsum.photos/id/1023/600/400', // Image 8
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
    <div className="h-full p-8 text-center flex flex-col gap-5">
        <div className='flex flex-col p-3 gap-10'>
            <h1 className="text-5xl font-bold opacity-90 text-orange-600 bg-clip-text drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]">Benvenuti nella nostra Birreria Artigianale</h1>
            <p className="text-xl text-white mx-auto w-2/4 max-h-[300px] overflow-auto bg-white bg-opacity-5 rounded-2xl p-6">
                Scopri le nostre birre uniche, fatte con passione e ingredienti selezionati. Sperimenta il vero sapore artigianale! <br /><br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta nesciunt perferendis fugiat est harum non incidunt assumenda delectus sapiente velit, facere alias ullam optio pariatur minus atque itaque fuga ex.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam assumenda accusantium optio consequuntur reiciendis numquam vel nulla consectetur accusamus magni illum magnam repellat, natus nam distinctio voluptates quo unde!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam inventore ipsa, delectus tenetur nemo repudiandae saepe dolor non, blanditiis deleniti asperiores adipisci animi nisi minima eligendi similique molestiae quaerat ad!
                Ducimus saepe praesentium quae odio sequi repudiandae animi exercitationem deleniti at mollitia? Voluptatibus atque recusandae at numquam reprehenderit amet iure accusamus rem, asperiores consequatur repellendus aspernatur cum animi magni perspiciatis?
                Voluptatem non ab doloremque amet dignissimos quam odio a magnam, necessitatibus omnis id beatae maiores adipisci nemo corrupti, sed deserunt officiis veritatis natus. Earum excepturi, eligendi atque culpa saepe facilis.
                Ex, voluptas! Assumenda minus libero rerum, doloremque impedit eveniet temporibus expedita asperiores obcaecati dignissimos amet cupiditate maxime adipisci ad soluta eius molestiae reiciendis! Consectetur placeat reprehenderit sint dolor corrupti ad.
                Est libero similique excepturi, corrupti, culpa neque beatae cupiditate, sequi necessitatibus soluta aut autem! Incidunt voluptatibus quidem porro eum, iusto, sed quo, omnis distinctio dignissimos ut facere sint deleniti harum.
                Accusantium quo itaque, vel laborum beatae consequuntur delectus, nulla magni veritatis, saepe soluta necessitatibus quis? Eos corrupti accusamus enim excepturi aperiam et, odio obcaecati, voluptatem distinctio quia tempore laborum veniam!
                Sed odio, voluptates sequi consectetur enim magnam tenetur quis inventore porro molestiae deleniti possimus, quasi doloribus atque, incidunt in ipsam quia expedita. Adipisci quidem eum ipsam mollitia quos. Dolor, illum.
                Voluptas, natus maxime inventore qui doloremque quaerat quae accusantium quam itaque distinctio consequatur corporis quis perspiciatis quas odit! Ipsa impedit autem labore quas in voluptas ea quis nulla, nam odio!
                Perferendis eum sapiente quaerat tempora nostrum assumenda repellendus rerum minima odio possimus a, officiis voluptate praesentium debitis nihil delectus quis quae? Laudantium veniam dolor corrupti architecto sed, autem praesentium accusamus!
                Fugiat in consectetur dignissimos dolores repellat tenetur a tempora rerum soluta quo quasi necessitatibus mollitia dolorum quia magni quidem, ab aspernatur at excepturi natus nulla assumenda! Aliquid deserunt eaque assumenda.
            </p>
      </div>

      <div className="relative w-full max-w-2xl mx-auto">
        {/* Immagine con transizione di dissolvenza */}
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className={`w-full h-auto rounded-lg shadow-2xl border-dark border transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Pulsanti per controllare il carosello */}
        <button
          className="absolute text-[1.2rem] top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white hover:text-orange-700 duration-500 p-4 rounded-r"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button
          className="absolute text-[1.2rem] top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white hover:text-orange-700 duration-500 p-4 rounded-l"
          onClick={handleNext}
        >
          &gt;
        </button>

        {/* Indicatore della slide corrente */}
        <div className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-2 rounded">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default Home;