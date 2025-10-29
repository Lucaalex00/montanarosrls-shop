import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const ContactPage = () => {
  const imagePath = '/images/info-images/Montanaro-FRONT.jpg';
  const phoneNumberAndrea = '+393357443529';
  const whatsappLink = (phoneNumber) => `https://wa.me/${phoneNumber}`;

  const handleOpenImage = () => {
    window.open(imagePath, '_blank');
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-3 drop-shadow-lg">
            Contattaci
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-primary/30">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            Montanaro SRLS
          </h2>

          {/* Info Azienda */}
          <div className="mb-8 bg-gray-50 rounded-2xl p-6 border-l-4 border-primary">
            <h3 className="text-xl font-semibold text-dark mb-4 flex items-center gap-2">
              <span className="text-2xl">📍</span> Informazioni
            </h3>
            <div className="space-y-3">
              <p className="text-lg text-gray-800">
                <strong className="text-primary">Indirizzo:</strong> Via 1613, n. 205 <br />
                14049 Nizza Monferrato AT
              </p>
              <p className="text-lg text-gray-800">
                <strong className="text-primary">Telefono (Ufficio):</strong>{' '}
                <a href="tel:+390141725046" className="text-primary hover:text-dark hover:underline transition-colors duration-300 font-medium">
                  +39 0141 725046
                </a>
              </p>
              <p className="text-lg text-gray-800">
                <strong className="text-primary">Email (Ufficio):</strong>{' '}
                <a href="mailto:montanaro.ufficio@gmail.com" className="text-primary hover:text-dark hover:underline transition-colors duration-300 font-medium">
                  montanaro.ufficio@gmail.com
                </a>
              </p>
              <p className="text-lg text-gray-800">
                <strong className="text-primary">Email (Info):</strong>{' '}
                <a href="mailto:montanaro.info@gmail.com" className="text-primary hover:text-dark hover:underline transition-colors duration-300 font-medium">
                  montanaro.info@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Contatto Andrea */}
          <div className="mb-8 bg-gray-50 rounded-2xl p-6 border-l-4 border-primary">
            <h3 className="text-xl font-semibold text-dark mb-4 flex items-center gap-2">
              <span className="text-2xl">👤</span> Contatto Diretto
            </h3>
            <p className="text-lg text-gray-800 mb-4">
              <strong className="text-primary">Andrea Montanaro</strong>
            </p>
            <p className="text-lg text-gray-800 mb-5">
              <a href={`tel:${phoneNumberAndrea}`} className="text-primary hover:text-dark hover:underline transition-colors duration-300 font-medium">
                {phoneNumberAndrea}
              </a>
            </p>
            <a
              href={whatsappLink(phoneNumberAndrea)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span className="text-2xl">📱</span>
              Contattaci su WhatsApp
            </a>
          </div>

          {/* QR Code Section */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center border-2 border-primary/20">
            <h3 className="text-2xl font-semibold text-dark mb-4 flex items-center justify-center gap-2">
              <span className="text-2xl">📱</span> Scansiona il QR Code
            </h3>
            <div 
              onClick={handleOpenImage} 
              className="inline-block bg-white p-4 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-4 border-2 border-primary/30"
            >
              <QRCodeSVG value="https://maps.app.goo.gl/t8NFqVknZdGDtQWRA" size={170} />
            </div>
            <div className="space-y-2">
              <p className="text-gray-700 font-medium">
                🗺️ Scansiona per scoprire come raggiungerci
              </p>
              <p className="text-gray-600 text-sm">
                oppure clicca il QR Code per visionare il biglietto da visita
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;