function Header() {
  try {
    const [blinkVisible, setBlinkVisible] = React.useState(true);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setBlinkVisible(prev => !prev);
      }, 500);
      return () => clearInterval(interval);
    }, []);

    return (
      <header className="retro-panel p-8 rounded-lg text-center" data-name="header" data-file="components/Header.js">
        <a href="index.html" className="block">
          <h1 className="text-4xl md:text-5xl font-bold text-shadow-retro text-[var(--primary-color)] flex items-center justify-center gap-3 cursor-pointer hover:opacity-90 transition-opacity">
            <img src="https://app.trickle.so/storage/public/images/usr_170d739758000001/7e42d378-43e1-4416-b3d7-90641405c3c7.jpeg" alt="Star" className="w-8 h-8 md:w-10 md:h-10 border-3 border-[var(--border-color)] rounded" style={{borderWidth: '3px', borderStyle: 'outset'}} />
            Sonderlust
            <img src="https://app.trickle.so/storage/public/images/usr_170d739758000001/7e42d378-43e1-4416-b3d7-90641405c3c7.jpeg" alt="Star" className="w-8 h-8 md:w-10 md:h-10 border-3 border-[var(--border-color)] rounded" style={{borderWidth: '3px', borderStyle: 'outset'}} />
          </h1>
        </a>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}