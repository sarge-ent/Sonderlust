function Footer() {
  try {
    return (
      <footer className="retro-panel p-6 rounded-lg text-center" data-name="footer" data-file="components/Footer.js">
        <p className="text-lg mb-3 text-[var(--primary-color)] font-bold">
          You have every right to exist.
        </p>
        
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
