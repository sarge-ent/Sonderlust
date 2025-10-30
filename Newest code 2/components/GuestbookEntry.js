function GuestbookEntry({ entries, setEntries }) {
  try {
    const [name, setName] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [showForm, setShowForm] = React.useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (name.trim() && message.trim()) {
        const newEntry = {
          id: Date.now(),
          name: name.trim(),
          message: message.trim(),
          date: new Date().toISOString().split('T')[0]
        };
        setEntries([newEntry, ...entries]);
        setName('');
        setMessage('');
        setShowForm(false);
      }
    };

    return (
      <div className="retro-panel p-6 rounded-lg" data-name="guestbook" data-file="components/GuestbookEntry.js">
        <div className="flex items-center gap-3 mb-4">
          <div className="icon-book-open text-2xl text-[var(--primary-color)]"></div>
          <h2 className="text-2xl font-bold text-shadow-retro text-[var(--primary-color)]">
            You are here.
          </h2>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="retro-button px-6 py-3 rounded mb-4 text-white font-bold"
        >
          {showForm ? 'Hide Form' : 'Sign Guestbook'}
        </button>

        {showForm && (
          <form onSubmit={handleSubmit} className="mb-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="retro-input w-full p-3 rounded font-mono"
            />
            <textarea
              placeholder="Leave a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="retro-input w-full p-3 rounded font-mono h-24 resize-none"
            />
            <button type="submit" className="retro-button px-6 py-3 rounded text-white font-bold">
              Submit Entry
            </button>
          </form>
        )}

        <div className="space-y-3">
          {entries.map(entry => (
            <div key={entry.id} className="bg-[#FFFAF0] p-4 rounded border-2 border-[var(--border-color)]">
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-[var(--primary-color)]">{entry.name}</span>
                <span className="text-sm text-[var(--secondary-color)]">{entry.date}</span>
              </div>
              <p className="text-[var(--text-color)]">{entry.message}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('GuestbookEntry component error:', error);
    return null;
  }
}