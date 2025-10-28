import React from 'react';
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="min-h-[500px]  py-16 px-4 flex items-center justify-center">
                <div className="text-center  max-w-5xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark drop-shadow-lg">
                        Benvenuti in <span className="text-white/80">Montanaro SRLS</span>
                    </h1>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-dark bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-primary/30 leading-relaxed">
                        Da oltre <span className="font-bold text-primary">40 anni</span> offriamo un servizio a domicilio unico nel suo genere, in zona Asti, Alessandria e Sud Piemonte.
                        <br/><br/> 
                        Per la migliore qualità e il rispetto del nostro pianeta, preferiamo commercializzare prodotti in <span className="font-semibold text-primary">vetro e materiale riciclabile</span>...
                        <br/><br/>
                        Da NOI puoi trovare dalle bevande più comuni alle più esclusive, prodotti di panetteria, birre artigianali, vini locali...
                        <br/>
                        <span className="font-semibold text-primary">Il tutto consegnato comodamente a casa tua.</span>
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4 md:px-10">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">La Nostra <strong className='text-white/80'> Missione</strong></h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>
                    <p className="text-xl text-dark max-w-4xl mx-auto mb-12 text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        La passione per la birra e l'amore per la qualità ci guidano. Offriamo prodotti genuini, innovativi e di alta qualità, rispettando l'ambiente e promuovendo il consumo responsabile.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <div className="bg-white/85 backdrop-blur-sm shadow-xl p-8 rounded-2xl border-2 border-primary/40 hover:border-primary hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="text-5xl mb-4">🛡️</div>
                            <h3 className="text-2xl font-bold mb-4 text-dark">Garanzia</h3>
                            <p className="text-gray-700">Cerchiamo sempre di garantire disponibilità sui nostri sapori senza mai scendere a compromessi sulla qualità.</p>
                        </div>
                        <div className="bg-white/85 backdrop-blur-sm shadow-xl p-8 rounded-2xl border-2 border-primary/40 hover:border-primary hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="text-5xl mb-4">⭐</div>
                            <h3 className="text-2xl font-bold mb-4 text-dark">Qualità</h3>
                            <p className="text-gray-700">Se la qualità è solamente "sufficiente", non fa per noi!</p>
                        </div>
                        <div className="bg-white/85 backdrop-blur-sm shadow-xl p-8 rounded-2xl border-2 border-primary/40 hover:border-primary hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="text-5xl mb-4">🚚</div>
                            <h3 className="text-2xl font-bold mb-4 text-dark">Disponibilità</h3>
                            <p className="text-gray-700">Non temiamo le lunghe distanze, nonostante i nostri prodotti arrivino in fretta, bisogna goderseli a piccoli sorsi.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-4 md:px-10 bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Il Nostro<strong className='text-white/80'> Team</strong></h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary/30 hover:border-primary hover:shadow-2xl transition-all duration-300">
                            <div className="text-6xl mb-4 text-center">👨‍💼</div>
                            <h3 className="text-2xl font-bold mb-2 text-dark text-center">Andrea Montanaro</h3>
                            <p className="text-lg font-semibold text-primary mb-4 text-center">Proprietario</p>
                            <p className="text-gray-700 text-center">Andrea è il titolare dell'azienda, con un'esperienza decennale in questa realtà, con l'aiuto di Mariangela, che lo supporta nell'organizzazione degli eventi fieristici e di degustazione.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary/30 hover:border-primary hover:shadow-2xl transition-all duration-300">
                            <div className="text-6xl mb-4 text-center">👥</div>
                            <h3 className="text-2xl font-bold mb-2 text-dark text-center">Valentino & Gianfranco</h3>
                            <p className="text-lg font-semibold text-primary mb-4 text-center">Collaboratori</p>
                            <p className="text-gray-700 text-center">Collaboratori nel servizio di consegna a domicilio.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Servizi Section */}
            <section className="py-16 px-4 md:px-10">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">I Nostri <strong className='text-white/80'>  Servizi</strong></h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>
                    <div className="bg-white/85 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-2 border-primary/30">
                        <img 
                            src="/images/info-images/Background_IMG - Chi Siamo.jpeg" 
                            alt="Servizio a domicilio" 
                            className="w-full h-[400px] object-cover"
                        />
                        <div className="p-8 text-center">
                            <p className="text-lg text-gray-700">
                                Il <strong className="text-primary">PREZZO</strong> e i <strong className="text-primary">TEMPI</strong> di consegna possono variare in base alla quantità di articoli ordinati e alla distanza dalla nostra sede.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 text-center bg-primary/90 backdrop-blur-sm shadow-2xl">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6  text-black drop-shadow-md">
                        Scopri la nostra <strong className='text-white/80'> gamma di prodotti! </strong>
                    </h2>
                    <p className="text-xl mb-8 text-white/90">
                        Visita il nostro catalogo online e ordina i tuoi prodotti preferiti oggi stesso!
                    </p>
                    <Link 
                        to="/beers" 
                        className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-full hover:bg-dark hover:text-white shadow-xl transition-all duration-300 hover:scale-110 text-lg"
                    >
                        Vai al Catalogo 🍺
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;