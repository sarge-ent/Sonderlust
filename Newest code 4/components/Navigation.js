function Navigation() {
  try {
    const navItems = [
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/acf9cf88-5f75-422d-a238-9b161f62b69b.jpeg',
        page: 'music.html',
        label: 'Music'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/2dc7e6f0-540a-4ebc-a3cd-b639bc8e85e9.jpeg',
        page: 'pictures.html',
        label: 'Pictures'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/ef5aa564-a464-4fce-adca-aa04f6e7afdb.jpeg',
        page: 'films.html',
        label: 'Films and Videos'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/7f9fa4e1-7cd0-4586-83ab-31c5e1a9d2c2.jpeg',
        page: 'art.html',
        label: 'Art'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/940100b4-46d5-47ae-829d-58e51517e7dd.jpeg',
        page: 'texts.html',
        label: 'Texts'
      }
    ];

    return (
      <nav className="retro-panel p-4 rounded-lg" data-name="navigation" data-file="components/Navigation.js">
        <div className="flex justify-center gap-3 flex-wrap">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.page}
              className="retro-button rounded overflow-hidden hover:opacity-90 transition-opacity"
              title={item.label}
            >
              <img 
                src={item.image} 
                alt={item.label}
                className="w-20 h-20 md:w-24 md:h-24 object-cover"
              />
            </a>
          ))}
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navigation component error:', error);
    return null;
  }
}