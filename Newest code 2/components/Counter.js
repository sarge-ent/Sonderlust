function Counter() {
  try {
    const [count, setCount] = React.useState(0);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      const incrementVisitor = async () => {
        try {
          // Get current visitor count
          const response = await trickleListObjects('visitor_stats', 1, true);
          
          if (response.items && response.items.length > 0) {
            const stats = response.items[0];
            const currentCount = stats.objectData.total_visitors || 0;
            const newCount = currentCount + 1;
            
            // Update the count
            await trickleUpdateObject('visitor_stats', stats.objectId, {
              total_visitors: newCount,
              last_updated: new Date().toISOString()
            });
            
            setCount(newCount);
          } else {
            // Initialize if no stats exist
            const newStats = await trickleCreateObject('visitor_stats', {
              total_visitors: 1,
              last_updated: new Date().toISOString()
            });
            setCount(1);
          }
          setLoading(false);
        } catch (error) {
          console.error('Error updating visitor count:', error);
          setCount(0);
          setLoading(false);
        }
      };
      
      incrementVisitor();
    }, []);

    return (
      <div className="flex items-center gap-3 bg-[#2C1810] p-4 rounded border-4 ridge #8B4513 inline-block" 
           data-name="counter" 
           data-file="components/Counter.js">
        <div className="icon-users text-2xl text-[var(--accent-color)]"></div>
        <div>
          <div className="text-xs text-[var(--accent-color)] mb-1">You are visitor number:</div>
          <div className="flex gap-1">
            {loading ? (
              <span className="bg-red-900 text-red-300 px-2 py-1 rounded border border-red-700 font-bold text-lg font-mono">...</span>
            ) : (
              count.toString().split('').map((digit, index) => (
                <span key={index} 
                      className="bg-red-900 text-red-300 px-2 py-1 rounded border border-red-700 font-bold text-lg font-mono">
                  {digit}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Counter component error:', error);
    return null;
  }
}
