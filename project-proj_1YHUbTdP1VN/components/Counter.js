function Counter() {
  try {
    const [count, setCount] = React.useState(42069);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setCount(prev => prev + Math.floor(Math.random() * 3));
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="flex items-center gap-3 bg-[#2C1810] p-4 rounded border-4 ridge #8B4513 inline-block" 
           data-name="counter" 
           data-file="components/Counter.js">
        <div className="icon-users text-2xl text-[var(--accent-color)]"></div>
        <div>
          <div className="text-xs text-[var(--accent-color)] mb-1">You are visitor number:</div>
          <div className="flex gap-1">
            {count.toString().split('').map((digit, index) => (
              <span key={index} 
                    className="bg-red-900 text-red-300 px-2 py-1 rounded border border-red-700 font-bold text-lg font-mono">
                {digit}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Counter component error:', error);
    return null;
  }
}