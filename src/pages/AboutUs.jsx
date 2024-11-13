import React from 'react';
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <div className="bg-black text-white">
            {/* Hero Section */}
            <section className="h-[500px] text-white bg-gradient-custom flex items-center justify-center shadow-lg">
                <div className="text-center bg-gradient-to-t from-black via-transparent to-transparent w-full h-full flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold mb-4 drop-shadow-2xl">Benvenuti in Montanaro Srls</h1> <br/>
                    <p className="text-xl text-gray-300 w-1/2 drop-shadow-lg max-h-[400px] overflow-auto">Da oltre 40 anni offriamo un servizio a domicilio unico <br /> nel suo genere, in zona Asti, Alessandria e Sud Piemonte.
                    <br/> Per la migliore qualità e il rispetto del nostro pianeta,<br/> preferiamo commercializzare prodotti in vetro e materiale riciclabile...<br/>  e da NOI puoi trovare dalle bevande più comuni alle più esclusive, prodotti di panetteria, birre artigianali, vini locali... <br/> Il tutto consegnato comodamente a casa tua.</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="container mx-auto py-16 px-4 md:px-10 text-center">
                <h2 className="text-4xl font-bold mb-8 text-orange-700 drop-shadow-md">La Nostra Missione</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                    La passione per la birra e l'amore per la qualità ci guidano. Offriamo prodotti genuini, innovativi e di alta qualità, rispettando l'ambiente e promuovendo il consumo responsabile.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="w-full md:w-1/3 bg-gray-900 shadow-lg p-8 rounded-lg border border-gray-800 hover:shadow-2xl transition">
                        <h3 className="text-2xl font-semibold mb-4 text-white">Garanzia</h3>
                        <p className="text-gray-400">Cerchiamo sempre di garantire disponibilità sui nostri sapori senza mai scendere a compromessi sulla qualità.</p>
                    </div>
                    <div className="w-full md:w-1/3 bg-gray-900 shadow-lg p-8 rounded-lg border border-gray-800 hover:shadow-2xl transition">
                        <h3 className="text-2xl font-semibold mb-4 text-white">Qualità</h3>
                        <p className="text-gray-400">Se la qualità è solamente "sufficiente", non fa per noi !</p>
                    </div>
                    <div className="w-full md:w-1/3 bg-gray-900 shadow-lg p-8 rounded-lg border border-gray-800 hover:shadow-2xl transition">
                        <h3 className="text-2xl font-semibold mb-4 text-white">Disponibilità</h3>
                        <p className="text-gray-400">Non temiamo le lunghe distanze, nonostante i nostri prodotti arrivino in fretta, bisogna goderseli a piccoli sorsi. </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-gray-900 py-16 shadow-lg">
                <div className="container mx-auto px-4 md:px-10 text-center">
                    <h2 className="text-4xl font-bold mb-10 text-orange-700">Il Nostro Team</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Membri del team */}
                        <div className="bg-black rounded-lg shadow-lg p-6 w-full md:w-1/3 hover:shadow-2xl transition border border-gray-800">
                            {/* <img className="h-48 w-48 rounded-full mx-auto mb-4 shadow-xl" src="https://picsum.photos/200/200?random=4" alt="CEO" /> */}
                            <h3 className="text-2xl font-bold mb-2 text-white">Andrea Montanaro</h3>
                            <p className="text-lg font-semibold text-orange-700">Proprietario</p>
                            <p className="text-gray-400">Andrea è il titolare dell'azienda, con un'esperienza decennale in questa realtà, con l'aiuto di Mariangela, che lo supporta nell'organizzazione degli eventi fieristici e di degustazione.</p>
                        </div>
                        <div className="bg-black rounded-lg shadow-lg p-6 w-full md:w-1/3 hover:shadow-2xl transition border border-gray-800">
                            {/* <img className="h-48 w-48 rounded-full mx-auto mb-4 shadow-xl" src="https://picsum.photos/200/200?random=4" alt="CEO" /> */}
                            <h3 className="text-2xl font-bold mb-2 text-white">Valentino & Gianfranco</h3>
                            <p className="text-lg font-semibold text-orange-700">Collaboratori</p>
                            <p className="text-gray-400">Collaboratori nel servizio di consegna a domicilio.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Storia e Valori */}
            <section className="container mx-auto py-16 px-20 text-gray-300">
                <h2 className="text-4xl font-bold text-center mb-10 text-orange-700">I Nostri Servizi</h2>
                <div className="md:flex md:justify-between">
                    <div className="md:w-1/2 flex flex-col gap-5 mx-auto mb-8 md:mb-0 md:pr-8">
                    <img src="/images/info-images/Background_IMG - Chi Siamo.jpeg" alt="Servizio a domicilio" />
                    <p className='text-center'> il <strong>PREZZO</strong> e i <strong>TEMPI</strong> di consegna possono variare in base alla quantità di articoli ordinati e alla distanza dalla nostra sede. </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-orange-700 py-16 text-center text-white shadow-lg">
                <h2 className="text-4xl font-bold mb-6 drop-shadow-md">Scopri la nostra gamma di birre artigianali!</h2>
                <p className="text-xl mb-8 text-gray-200">Visita il nostro negozio online e ordina la tua birra preferita oggi stesso!</p>
                <Link to="/beers" className="bg-white text-orange-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 shadow-md transition">
                    Vai al Negozio
                </Link>
            </section>
        </div>
    );
};

export default AboutUs;