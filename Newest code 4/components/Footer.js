function Footer() {
  try {
    return (
      <footer className="retro-panel p-6 rounded-lg text-center" data-name="footer" data-file="components/Footer.js">
        <p className="text-lg mb-3 text-[var(--primary-color)] font-bold">
          You have every right to exist.
        </p>
        
        <a 
          href="https://sargentworks.weebly.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mb-3 retro-button rounded overflow-hidden hover:opacity-90 transition-opacity"
        >
          <img 
            src="https://app.trickle.so/storage/public/images/usr_170d739758000001/9ffcd146-d3bd-458e-bd14-c8113af2298d.jpeg" 
            alt="Visit Sargent Works"
            className="w-48 h-auto object-contain"
          />
        </a>
        
        <p className="text-sm text-[var(--secondary-color)]">
          © 2025 Sonderlust. All rights reserved.
        </p>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
