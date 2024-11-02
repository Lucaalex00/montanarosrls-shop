import React, { useEffect, useState } from 'react';
import GiftPacksData from '../data/Giftpacks.json';

const GiftPacksManagement = () => {
    const [GiftPacks, setGiftPacks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showAvailable, setShowAvailable] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState('');

    useEffect(() => {
        setGiftPacks(GiftPacksData);
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleToggleAvailability = () => {
        setShowAvailable(!showAvailable);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseOffcanvas = () => {
        setSelectedImage(null);
    };

    const handleEventChange = (event) => {
        setSelectedEvent(event.target.value);
    };

    // Filter GiftPacks
    const filteredGiftPacks = GiftPacks
        .filter(giftpack => {
            const matchesName = giftpack.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCollab = giftpack.collab ? giftpack.collab.toLowerCase().includes(searchTerm.toLowerCase()) : false;
            const matchesEvent = giftpack.limited_event && giftpack.limited_event.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesSelectedEvent = selectedEvent ? giftpack.limited_event === selectedEvent : true;

            return (matchesName || matchesCollab || matchesEvent) && matchesSelectedEvent;
        })
        .filter(giftpack => (showAvailable ? giftpack.availability : !giftpack.availability));

    return (
        <div className="p-4 mt-10 mx-auto flex flex-col">
            <h1 className="text-4xl font-bold text-white text-center mb-6">Confezioni Regalo</h1>
            <input
                type="text"
                placeholder="Cerca un prodotto..."
                value={searchTerm}
                onChange={handleSearch}
                className="border mx-auto text-center border-gray-300 rounded px-5 py-2 mb-4"
            />
            <div className="flex justify-center mb-4">
                <button
                    onClick={handleToggleAvailability}
                    className={`text-center text-white rounded p-2 mx-1 ${showAvailable ? 'bg-green-500' : 'bg-red-500'}`}
                >
                    {showAvailable ? 'Mostra Disponibili' : 'Mostra Non Disponibili'}
                </button>
                <select
                    value={selectedEvent}
                    onChange={handleEventChange}
                    className="border mx-1 rounded px-3 py-2"
                >
                    <option value="">Tutti gli Eventi</option>
                    <option value="Natale">Natale</option>
                </select>
            </div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                {filteredGiftPacks.map(giftpack => (
                    <div key={giftpack.id} className="relative flex bg-white border rounded shadow-lg m-2 p-5 hover:bg-gray-300 duration-500">
                        <div
                            className={`absolute top-1 right-1 rounded-full h-3 w-3 ${giftpack.availability ? 'bg-green-500' : 'bg-red-500'}`}
                        ></div>
                        <img
                            src={giftpack.image}
                            alt={giftpack.name}
                            className="sm:w-[200px] w-[100px] object-contain sm:block h-auto rounded cursor-pointer"
                            onClick={() => handleImageClick(giftpack.image)}
                        />
                        <div className="ml-5 flex flex-col gap-2 justify-between max-h-[300px] overflow-y-auto">
                            <h2 className="text-3xl font-semibold mb-1">{giftpack.name}</h2>
                            <h5 className='italic mb-2'>{giftpack.source}</h5>
                            <p className='text-gray-600'><strong> </strong> {giftpack.size}</p>
                            <p><strong>Tipologia: </strong> {giftpack.type}</p>
                            <p><strong>Gradazione: </strong> {giftpack.alcohol_content}%</p>
                            <p className=' my-2 italic text-gray-700'>{giftpack.description}</p>
                            <p><strong>Disponibilità: </strong>
                                {giftpack.availability ? (
                                    <span className="text-green-500 font-bold">Disponibile</span>
                                ) : (
                                    <span className="text-red-500 font-bold">Non disponibile</span>
                                )}
                            </p>
                            <p><strong>Edizione Limitata:</strong> {giftpack.limited_event}</p>
                            {giftpack.collab && (
                                <p><strong>Collaborazione: </strong> {giftpack.collab}</p>
                            )}
                            {giftpack.collab_link && (
                                <span>
                                    <a
                                        href={giftpack.collab_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 underline hover:text-blue-800 duration-300"
                                    >
                                       {'> ' + giftpack.collab + ' <'}
                                    </a>
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={handleCloseOffcanvas}
                >
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
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

export default GiftPacksManagement;
