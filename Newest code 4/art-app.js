function ArtApp() {
  try {
    return (
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Header />
          <Navigation />
          
          <div className="retro-panel p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-shadow-retro text-[var(--primary-color)]">
              Art
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              Creative expressions and visual explorations.
            </p>
          </div>
          
          <Footer />
        </div>
      </div>
    );
  } catch (error) {
    console.error('ArtApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ArtApp />);