class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center retro-panel p-8 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Oops! Something went wrong</h1>
            <button onClick={() => window.location.reload()} className="retro-button px-6 py-3 rounded">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [guestbookEntries, setGuestbookEntries] = React.useState([]);

    return (
      <div className="min-h-screen p-4 md:p-8" data-name="app" data-file="app.js">
        <div className="max-w-4xl mx-auto space-y-6">
          <Header />
          <Navigation />
          
          <div className="retro-panel p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-shadow-retro text-[var(--primary-color)]">
              Welcome to Sonderlust! ☕
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              Step back in time to the good old days of the internet! This is a place where
              everyone is welcome. Grab a virtual coffee and stay a while.
            </p>
            <Counter />
          </div>

          <GuestbookEntry entries={guestbookEntries} setEntries={setGuestbookEntries} />
          
          <Footer />
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);