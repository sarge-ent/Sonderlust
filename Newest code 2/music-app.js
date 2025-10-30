function MusicApp() {
  try {
    return (
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Header />
          <Navigation />
          
          <div className="retro-panel p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-shadow-retro text-[var(--primary-color)]">
              Music
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              Here is a music pairing for the film. Directly below is the magnum opus, a collective playlist put together by a great many people from different times and different places. It contains music from the other recommendations mixed in, and serves as a complete masterlist of the music we all deemed near "sonder". Start here, if you want to, and listen with every part of you open.
            </p>
            <a 
              href="https://open.spotify.com/playlist/78xECwOccznUMup5Va9DLa?si=iPvS5QJ2QX-JtjJw5Oqe2w&pi=tXViXO2pSLO_o" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block retro-button rounded overflow-hidden hover:opacity-90 transition-opacity"
            >
              <img 
                src="https://app.trickle.so/storage/public/images/usr_170d739758000001/2504a911-bc3d-43df-8d9e-9c4dcdc431aa.jpeg" 
                alt="Listen to Playlist"
                className="w-48 h-auto object-contain"
              />
            </a>
          </div>
          
          <Footer />
        </div>
      </div>
    );
  } catch (error) {
    console.error('MusicApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MusicApp />);