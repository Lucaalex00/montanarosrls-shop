import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa'; // Importa un'icona di informazione

const FooterComponent = () => {
    const [showCredits, setShowCredits] = useState(false);

    const toggleCredits = () => {
        setShowCredits(!showCredits);
    };

    return (
        <div className="absolute p-5 bottom-2 right-2">
            {/* Bottone per i Credits con icona */}
            <button
                onClick={toggleCredits}
                className={`flex mx-auto items-center justify-center w-10 h-10 rounded-full text-white transition-colors  bg-opacity-30 duration-500 ${
                    showCredits ? 'bg-transparent' : 'bg-gray-300'
                }`}
            >
                <FaInfoCircle className="text-xl" />
            </button>

            {/* Sezione Credits con animazione slide */}
            <div
                className={`transition-transform ease-in-out overflow-hidden ${
                    showCredits ? 'max-h-20' : 'hidden'
                }`}
            >
                <div
                    className={`text-center p-2 mt-2 rounded-lg shadow-lg transition-colors duration-500 ${
                        showCredits ? ' text-white' :  'text-black'
                    }`}
                >
                    <p className='bg-dark p-3 rounded bg-opacity-75'>
                        Sviluppato da{' '}
                        <a
                            href="https://github.com/Lucaalex00"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-gray-700 duration-500"
                        >
                            Luca Cirio
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;
