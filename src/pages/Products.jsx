import React, { useEffect, useState } from 'react';
import productsData from '../data/Products.json'; // Assicurati di fornire il percorso corretto

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [priceSortOrder, setPriceSortOrder] = useState(true); // true = crescente, false = decrescente
    const [showAvailable, setShowAvailable] = useState(true); // true = mostra disponibili, false = mostra non disponibili
    const [selectedImage, setSelectedImage] = useState(null); // Stato per immagine selezionata

    useEffect(() => {
        // Setta i prodotti dal file JSON importato
        setProducts(productsData);
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSortByPrice = () => {
        setPriceSortOrder(!priceSortOrder); // Toggle ascending/descending
    };

    const handleToggleAvailability = () => {
        setShowAvailable(!showAvailable); // Toggle available/unavailable
    };

    const handleImageClick = (image) => {
        setSelectedImage(image); // Setta l'immagine selezionata
    };

    const handleCloseOffcanvas = () => {
        setSelectedImage(null); // Chiude l'offcanvas
    };

    // Filter and sort products
    const filteredProducts = products
    .filter(product => {
        // Filtra per nome o collaborazione
        const matchesName = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCollab = product.collab ? product.collab.toLowerCase().includes(searchTerm.toLowerCase()) : false;
        
        // La ricerca è valida se soddisfa almeno uno dei due campi
        return matchesName || matchesCollab;
    })
    .filter(product => (showAvailable ? product.availability : !product.availability)) // Filtra per disponibilità
    .sort((a, b) => {
        return priceSortOrder ? a.price - b.price : b.price - a.price; // Ordina per prezzo
    });
    return (
        <div className="p-4 mx-auto flex flex-col">
            <h1 className="text-4xl font-bold text-white text-center mb-6">Gestione Prodotti</h1>
            <input
                type="text"
                placeholder="Cerca un prodotto..."
                value={searchTerm}
                onChange={handleSearch}
                className="border mx-auto text-center border-gray-300 rounded px-5 py-2 mb-4"
            />
            <div className="flex justify-center mb-4">
                <button
                    onClick={handleSortByPrice}
                    className={`text-center text-white rounded p-2 mx-1 ${priceSortOrder ? 'bg-blue-500' : 'bg-gray-500'}`}
                >
                    Ordina per Prezzo {priceSortOrder ? 'Crescente' : 'Decrescente'}
                </button>
                <button
                    onClick={handleToggleAvailability}
                    className={`text-center text-white rounded p-2 mx-1 ${showAvailable ? 'bg-green-500' : 'bg-red-500'}`}
                >
                    {showAvailable ? 'Mostra Disponibili' : 'Mostra Non Disponibili'}
                </button>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
                {filteredProducts.map(product => (
                    <div key={product.id} className="relative flex flex-col gap-2 bg-white border rounded shadow-lg text-lg m-2 p-5 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                        {/* Pallino di disponibilità */}
                        <div
                            className={`absolute top-1 right-1 rounded-full h-3 w-3 ${product.availability ? 'bg-green-500' : 'bg-red-500'}`}
                        ></div>
                        {/* Click sull'immagine per ingrandirla */}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-[200px] mx-auto rounded mb-2 cursor-pointer"
                            onClick={() => handleImageClick(product.image)}
                        />
                        <h2 className="text-3xl font-semibold mb-3">{product.name}</h2>
                        <p><strong>Tipologia: </strong> {product.type}</p>
                        <p><strong>Gradazione: </strong> {product.alcohol_content}</p>
                        <p><strong>Prezzo: </strong> € {product.price.toFixed(2)}</p>
                        <p><strong>Disponibilità: </strong>
                            {product.availability ? (
                                <span className="text-green-500 font-bold">Disponibile</span>
                            ) : (
                                <span className="text-red-500 font-bold">Non disponibile</span>
                            )}</p>
                        <p><strong>Codice Unico:</strong> {product.unique_code}</p>
                         {/* Mostra collaborazione e link se disponibili */}
                         {product.collab && (
                            <p>
                                <strong>Collaborazione: </strong> {product.collab}
                            </p>
                        )}
                        {product.collab_link && (
                            <a
                                href={product.collab_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline hover:text-blue-800 duration-300"
                            >
                                {'> '+ product.collab + ' <'} 
                            </a>
                        )}
                    </div>
                ))}
            </div>

            {/* Offcanvas per l'immagine ingrandita */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={handleCloseOffcanvas} // Chiude l'offcanvas al click sulla zona esterna
                >
                    <div className="relative" onClick={(e) => e.stopPropagation()}> {/* Evita la chiusura cliccando sull'immagine */}
                        <img
                            src={selectedImage}
                            alt="Immagine ingrandita"
                            className="max-w-full w-[250px] max-h-full"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductManagement;
