import React, { useEffect, useState } from 'react';
import WinesAndLiquorsData from '../../data/WinesAndLiquors.json';

const WinesAndLiquorsManagement = () => {
    const [WinesAndLiquors, setWinesAndLiquors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showAvailable, setShowAvailable] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedEvent, /* setSelectedEvent */] = useState('');

    useEffect(() => {
        setWinesAndLiquors(WinesAndLiquorsData);
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

    /* const handleEventChange = (event) => {
        setSelectedEvent(event.target.value);
    }; */

    // Filter WinesAndLiquors
    const filteredWinesAndLiquors = WinesAndLiquors
        .filter(wineliquor => {
            const matchesName = wineliquor.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCollab = wineliquor.collab ? wineliquor.collab.toLowerCase().includes(searchTerm.toLowerCase()) : false;
            const matchesEvent = wineliquor.limited_event && wineliquor.limited_event.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesSelectedEvent = selectedEvent ? wineliquor.limited_event === selectedEvent : true;

            return (matchesName || matchesCollab || matchesEvent) && matchesSelectedEvent;
        })
        .filter(wineliquor => (showAvailable ? wineliquor.availability : !wineliquor.availability));

    return (
        <div className="p-4 mt-10 mx-auto flex flex-col">
            <h1 className="text-4xl font-bold text-white text-center mb-6">Vini & Liquori</h1>
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
                {/* <select
                    value={selectedEvent}
                    onChange={handleEventChange}
                    className="border mx-1 rounded px-3 py-2"
                >
                    <option value="">Tutti gli Eventi</option>
                    <option value="Natale">Natale</option>
                </select> */}
            </div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                {filteredWinesAndLiquors.map(wineliquor => (
                    <div key={wineliquor.id} className="relative flex bg-white border rounded shadow-lg m-2 p-2 sm:p-5 hover:bg-gray-300 duration-500">
                        <div
                            className={`absolute top-1 right-1 rounded-full h-3 w-3 ${wineliquor.availability ? 'bg-green-500' : 'bg-red-500'}`}
                        ></div>
                        <img
                            src={wineliquor.image}
                            alt={wineliquor.name}
                            className="sm:w-[200px] w-[50px] object-contain sm:block h-auto rounded cursor-pointer"
                            onClick={() => wineliquor.image !== 'https://via.placeholder.com/200x200/cccccc/ffffff?text=IMMAGINE+NON+DISPONIBILE' ? handleImageClick(wineliquor.image) : ''}
                        />
                        <div className="ml-5 flex flex-col gap-2 justify-between max-h-[300px] overflow-y-auto">
                            <h2 className="text-3xl font-semibold mb-1">{wineliquor.name}</h2>
                            <h5 className='italic mb-2'>{wineliquor.source}</h5>
                            <p className='text-gray-600'><strong> </strong> {wineliquor.size}</p>
                            <p><strong>Tipologia: </strong> {wineliquor.type}</p>
                            <p><strong>Gradazione: </strong> {wineliquor.alcohol_content}%</p>
                            <p className=' my-2 italic text-gray-700'>{wineliquor.description}</p>
                            <p><strong>Disponibilità: </strong>
                                {wineliquor.availability ? (
                                    <span className="text-green-500 font-bold">Disponibile</span>
                                ) : (
                                    <span className="text-red-500 font-bold">Non disponibile</span>
                                )}
                            </p>
                            {/* <p><strong>Edizione Limitata:</strong> {wineliquor.limited_event}</p> */}
                            {wineliquor.collab && (
                                <p><strong>Collaborazione: </strong> {wineliquor.collab}</p>
                            )}
                            {wineliquor.collab_link && (
                                <span>
                                    <a
                                        href={wineliquor.collab_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 underline hover:text-blue-800 duration-300"
                                    >
                                       {'> ' + wineliquor.collab + ' <'}
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

export default WinesAndLiquorsManagement;
