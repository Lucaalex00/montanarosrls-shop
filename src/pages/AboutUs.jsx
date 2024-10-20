import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const AboutUs = () => {
    // Particles Configuration
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesOptions = {
        background: {
            color: {
                value: "#000",
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            move: {
                direction: "none",
                enable: true,
                out_mode: "out", // Corretto
                random: false,
                speed: 0.5,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        fullScreen: {
            enable: false,
        },
    };

    return (
        <div className="bg-black text-white relative">
            {/* Hero Section */}
            <section className="bg-cover bg-center h-[500px] text-white flex items-center justify-center shadow-lg"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517511620798-cec17d428bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fHRyYW1vbnxlbnwwfHx8fDE2MzQ5NzMwODk&ixlib=rb-1.2.1&q=80&w=1080)' }}>
                <div className="text-center bg-gradient-to-t from-black via-transparent to-transparent w-full h-full flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold mb-4 drop-shadow-2xl">Benvenuti nel Mondo delle Birre Artigianali</h1>
                    <br />
                    <p className="text-xl text-gray-300 drop-shadow-lg">Produciamo birre di qualità per veri intenditori</p>
                </div>
            </section>

            {/* Particles Background for Mission Section */}
            <section className="relative bg-black text-white py-16">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={particlesOptions}
                    className="absolute top-0 left-0 w-full h-full"
                />
                <div className="container mx-auto relative z-10 text-center px-4 md:px-10">
                    <h2 className="text-4xl font-bold mb-8 text-orange-700 drop-shadow-md">La Nostra Missione</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                        La passione per la birra e l'amore per la qualità ci guidano. Offriamo prodotti genuini, innovativi e di alta qualità, rispettando l'ambiente e promuovendo il consumo responsabile.
                    </p>
                    {/* ... il resto del tuo codice */}
                </div>
            </section>

            {/* ... altre sezioni */}
        </div>
    );
};

export default AboutUs;
