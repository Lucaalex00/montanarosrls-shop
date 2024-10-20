import React from 'react';
import { QRCode } from 'react-qrcode-logo';

const ContactPage = () => {
  const imagePath = '/images/Montanaro-FRONT.jpeg'; // Percorso dell'immagine
  const phoneNumberAndrea = '+39 335-7443529';
  const phoneNumberValentino = '+39 335-7443827';
  const whatsappLink = (phoneNumber) => `https://wa.me/${phoneNumber}`;

  // Funzione per aprire l'immagine
  const handleOpenImage = () => {
    window.open(imagePath, '_blank');
  };

  return (
    <div className="bg-gradient-to-r from-orange-700 to-black min-h-screen text-center flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-5">
        <h1 className="text-3xl font-bold text-center mb-6 text-dark">
            Montanaro SRLS
        </h1>

        <div className="mb-6">
          <p className="text-lg text-gray-800 mb-2">
            <strong>Indirizzo:</strong> Via 1613, n. 205 <br />
            14049 Nizza Monferrato AT
          </p>
          <p className="text-lg text-gray-800 mb-2">
            <strong>Telefono (Office):</strong>{' '}
            <a href="tel:+390141725046" className="text-blue-500 hover:underline">
              +39 0141 725046
            </a>
          </p>
          <p className="text-lg text-gray-800 mb-2">
            <strong>Email (Ufficio):</strong>{' '}
            <a href="mailto:montanaro.ufficio@gmail.com" className="text-blue-500 hover:underline">
              montanaro.ufficio@gmail.com
            </a>
          </p>
          <p className="text-lg text-gray-800 mb-6">
            <strong>Email (Info):</strong>{' '}
            <a href="mailto:montanaro.info@gmail.com" className="text-blue-500 hover:underline">
              montanaro.info@gmail.com
            </a>
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Contacts</h2>
        <div className="mb-6">
          <p className="text-lg text-gray-800 mb-5">
            <strong>Andrea Montanaro:</strong> <br />
            <a href={`tel:${phoneNumberAndrea}`} className="text-blue-500 hover:underline">
              {phoneNumberAndrea}
            </a>{' '}
            <br />
            <br />
            <strong>
              <a
                href={whatsappLink(phoneNumberAndrea)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-2 rounded text-xl hover:bg-green-700 duration-500"
              >
                WhatsApp
              </a>
            </strong>
          </p>
          <p className="text-lg text-gray-800">
            <strong>Valentino Ambrosia:</strong><br />
            <a href={`tel:${phoneNumberValentino}`} className="text-blue-500 hover:underline">
              {phoneNumberValentino}
            </a>{' '}
            <br />
            <br />
            <strong>
              <a
                href={whatsappLink(phoneNumberValentino)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-2 rounded text-xl hover:bg-green-700 duration-500"
              >
                WhatsApp
              </a>
            </strong>
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Scan the QR Code</h2>
        <div 
          onClick={handleOpenImage} 
          className="w-1/4 mx-auto flex justify-center cursor-pointer mb-4"
        >
          <QRCode value="https://www.google.com/maps/place//data=!4m2!3m1!1s0x478785dc89d8e2fd:0xbb59bc13ba0db0e?sa=X&ved=1t:8290&ictx=111" size={170} /> {/* Scansione porta ai prodotti */}
        </div>
        <p className="text-center text-gray-600">
          Scansiona il QRCode e scopri come raggiungerci
        </p>
        <p className="text-center text-gray-600 mb-2">
          oppure cliccalo per visionare il biglietto da visita.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
