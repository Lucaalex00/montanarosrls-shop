import React, { useEffect, useState } from 'react';
import eventsData from '../data/Events.json'; // Assicurati che il percorso sia corretto
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'; // Icone per decorare

/********************************************************* 
 * 
 *  AGGIUNGERE VARIABILE DI APPOGGIO PER GOOGLE MAPS
 *  https://maps.com/{LOCALITA}
 *  Fare controllo se la località ha degli spazi (san didero)
 *  inserire al posto dello ' ' il simbolo '+' per autogenerare i link dei luoghi
 * 
*********************************************************/



const Events = () => {
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState(true); // true = crescente, false = decrescente
    const [selectedImage, setSelectedImage] = useState(null); // Stato per immagine selezionata
    const [eventFilter, setEventFilter] = useState('all'); // Stato per il filtro degli eventi

    useEffect(() => {
        // Carica i dati degli eventi dal file JSON
        setEvents(eventsData);
    }, []);

    // Funzione per controllare se un evento è futuro, passato o oggi
    const getEventStatus = (event) => {
        const today = new Date();
        const startDate = new Date(event.start_date);
        const endDate = event.end_date ? new Date(event.end_date) : startDate;

        if (startDate <= today && endDate >= today) {
            return 'today'; // Evento in corso
        } else if (startDate > today) {
            return 'future'; // Evento futuro
        } else {
            return 'past'; // Evento passato
        }
    };

    // Funzione per determinare il colore del bordo e del pallino
    const getBorderColor = (event) => {
        const status = getEventStatus(event);
        if (status === 'future') return 'border-green-500'; // Evento futuro
        if (status === 'today') return 'border-yellow-500 animate-pulse'; // Evento di oggi
        return 'border-red-500'; // Evento passato
    };

    const getDotColor = (event) => {
        const status = getEventStatus(event);
        if (status === 'future') return 'bg-green-500';
        if (status === 'today') return 'bg-yellow-500 animate-pulse';
        return 'bg-red-500';
    };

    const handleImageClick = (image) => {
        if (image) setSelectedImage(image); // Mostra l'immagine se esiste
    };

    const handleCloseOffcanvas = () => {
        setSelectedImage(null); // Chiudi l'offcanvas
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSortByDate = () => {
        setSortOrder(!sortOrder); // Toggle ascending/descending sort order
    };

    // Funzione per filtrare eventi in base allo stato
    const filteredEvents = events.filter(event => {
        const eventStatus = getEventStatus(event);

        // Filtra in base al filtro selezionato
        if (eventFilter === 'past' && eventStatus === 'past') return true;
        if (eventFilter === 'future' && eventStatus === 'future') return true;
        if (eventFilter === 'today' && eventStatus === 'today') return true;
        if (eventFilter === 'all') return true; // Mostra tutti
        return false;
    }).filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => {
        const dateA = new Date(a.start_date);
        const dateB = new Date(b.start_date);
        return sortOrder ? dateA - dateB : dateB - dateA;
    });

    // Controlla se ci sono eventi in corso oggi
    const todayEvents = events.filter(event => getEventStatus(event) === 'today');

    return (
        <div className="p-10 mx-auto flex flex-col">
            <h1 className="text-4xl font-bold text-white text-center mb-6">Gestione Eventi</h1>

            {/* Barra di ricerca */}
            <input
                type="text"
                placeholder="Cerca un evento per nome o luogo..."
                value={searchTerm}
                onChange={handleSearch}
                className="border mx-auto w-3/4 md:w-1/4 text-center border-gray-300 rounded px-2 py-2 mb-4"
            />

            {/* Pulsante per ordinare per data */}
            <div className="flex justify-center mb-4">
                <button
                    onClick={handleSortByDate}
                    className={`text-center text-white rounded p-2 mx-1 ${sortOrder ? 'bg-blue-500' : 'bg-gray-500'}`}
                >
                    Ordina per Data {sortOrder ? 'Crescente' : 'Decrescente'}
                </button>
            </div>

            {/* Filtri per eventi passati, futuri e tutti */}
            <div className="flex justify-center mb-4">
                <button
                    onClick={() => setEventFilter('past')}
                    className="text-center text-white rounded p-2 mx-1 bg-red-500"
                >
                    Eventi Passati
                </button>
                <button
                    onClick={() => setEventFilter('all')}
                    className="text-center text-white rounded p-2 mx-1 bg-gray-500"
                >
                    Tutti gli Eventi
                </button>
                <button
                    onClick={() => setEventFilter('future')}
                    className="text-center text-white rounded p-2 mx-1 bg-green-500"
                >
                    Eventi Futuri
                </button>
            </div>

            {/* Notifica per eventi di oggi */}
            {todayEvents.length > 0 && (
                <div
                    className="bg-yellow-300 text-black text-center p-2 mb-4 rounded cursor-pointer w-3/4 sm:w-2/4 lg:w-1/4 mx-auto"
                    onClick={() => setEventFilter('today')} // Cliccando sulla notifica mostra solo gli eventi di oggi
                >
                    Oggi c'è qualche evento {todayEvents.length > 1 ? 'i' : ''} in corso! <br/>
                    <strong>Clicca per visualizzarlo.</strong>
                </div>
            )}

            {/* Lista degli eventi */}
            <div className="flex flex-wrap justify-center gap-3">
                {filteredEvents.map(event => (
                    <div
                        key={event.id}
                        className={`relative flex flex-col gap-2 bg-white border-4 rounded-lg shadow-lg text-lg p-5 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 cursor-pointer ${getBorderColor(event)}`}
                        onClick={() => handleImageClick(event.poster_image)}
                    >
                        {/* Pallino colorato in alto a destra */}
                        <div className={`absolute top-1 right-1 h-3 w-3 rounded-full ${getDotColor(event)}`}></div>

                        {/* Titolo e luogo con icone */}
                        <h2 className="text-xl font-bold mb-2 flex items-center">
                            {event.title} <FaMapMarkerAlt className="ml-2 text-red-500" />
                        </h2>
                        <p className="text-gray-700 mb-2 flex items-center">
                            <FaMapMarkerAlt className="mr-2" /> {event.location}
                        </p>

                        {/* Date di inizio e fine */}
                        <div className="flex items-center mb-3 text-sm">
                            <p className="mr-4 flex items-center">
                                <FaCalendarAlt className="mr-1" />
                                {new Date(event.start_date).toLocaleDateString()}
                                {event.end_date ? ` - ${new Date(event.end_date).toLocaleDateString()}` : ''}
                            </p>
                        </div>

                        {/* Link a Google Maps */}
                        <a
                            href={event.map_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline text-sm"
                        >
                            Visualizza su Google Maps
                        </a>
                    </div>
                ))}
            </div>

            {/* Offcanvas per l'immagine ingrandita */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={handleCloseOffcanvas} // Chiude l'offcanvas al click
                >
                    <div className="relative" onClick={(e) => e.stopPropagation()}> {/* Evita la chiusura cliccando sull'immagine */}
                        <img
                            src={selectedImage}
                            alt="Immagine ingrandita"
                            className="max-w-full w-[450px] max-h-full"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Events;
