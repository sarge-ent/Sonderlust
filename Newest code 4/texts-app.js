function GallerySection({ title, images }) {
  try {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextImage = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const selectImage = (index) => {
      setCurrentIndex(index);
    };

    return (
      <div className={title ? "retro-panel p-6 rounded-lg mb-6" : "mb-6"}>
        {title && (
          <h3 className="text-2xl font-bold mb-4 text-shadow-retro text-[var(--primary-color)]">
            {title}
          </h3>
        )}
        
        <div className="relative mb-4">
          <div className="relative bg-[#2C1810] p-4 rounded border-4 ridge" style={{borderColor: 'var(--border-color)'}}>
            <img 
              src={images[currentIndex]} 
              alt={`${title} ${currentIndex + 1}`}
              className="w-full h-96 object-contain"
            />
            
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 retro-button p-3 rounded"
              title="Previous"
            >
              <div className="icon-chevron-left text-xl text-white"></div>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 retro-button p-3 rounded"
              title="Next"
            >
              <div className="icon-chevron-right text-xl text-white"></div>
            </button>
          </div>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => selectImage(index)}
              className={`flex-shrink-0 border-3 rounded overflow-hidden transition-all ${
                index === currentIndex 
                  ? 'border-[var(--primary-color)] scale-110' 
                  : 'border-[var(--secondary-color)] opacity-70 hover:opacity-100'
              }`}
              style={{borderWidth: '3px'}}
            >
              <img 
                src={img} 
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('GallerySection error:', error);
    return null;
  }
}

function TextsApp() {
  try {
    const poetryImages = [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800'
    ];

    const literatureImages = [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800',
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800',
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800',
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800'
    ];

    const lettersImages = [
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800',
      'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=800',
      'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?w=800',
      'https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800'
    ];

    const messagesImages = [
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/005b62fb-20b0-4111-991e-793b4928c4c0.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/42b2c61c-ba0d-40c3-97c5-16bb79e6b249.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/ed014e20-d406-4668-8946-111f12c001af.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/50f470c1-52b1-4802-8d97-110219550f14.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/b18b8e58-9a6e-42ff-b3fa-6990133ac815.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/bab560b6-0110-44d3-afdb-278537753dcc.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/ca9d6ae8-3ddb-479a-8206-03909cfa3e6d.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/559ed900-e8a5-4bff-b2e0-788051934bdb.png',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/e411d26c-6373-4a8a-8de8-03882cbd817c.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/a0b098b7-778d-479c-97c6-b85565b5c796.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/92cb597e-ddc3-4a83-80b2-d984d494220e.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/c8050d23-5f63-4c3a-ac41-2dc42ef99a1e.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/fb72f11c-f0bf-4fd2-a94a-adc562f98525.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/a078cfc1-a287-4f22-af30-88f24db592e3.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/36aaaa14-3fb7-4c74-b753-64ccbaca1c78.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/0dcc5619-762c-4a74-85c4-b3bccfc4c6f5.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/eddf47e6-6adb-4f11-a4f5-1decdb26634c.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/62ab144e-3fed-4dfc-8a9a-d181df5a8e54.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/f8f8329c-3ad2-4f0a-a6a1-e0ac1db7b344.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/57cfb450-017e-489c-b70c-aa8346da1cdd.png',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/772fb993-b747-444c-b339-ff3f766b9065.png',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/ee6410c3-dad2-4481-bf7a-068b8b507e40.png',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/fe758469-d037-469f-9f06-ad4a3daecbd1.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/d81aae6b-4e0a-45b1-9014-1af50597db98.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/258154fc-f0e7-4c44-9673-0aaadef1ea78.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/313b21f0-9e86-46af-b4c9-fca8fd235225.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/c5522790-d014-4b34-80c9-b9e80f0a2871.png',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/4a70fa5e-40ad-4a59-910d-42eae7254ab2.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/74438389-0414-42fc-8af9-7f33ea1bc01a.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/9d4b7540-a2a3-4cd7-8fb5-4754a57af75e.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/78fcbd08-c2d1-4b4f-bd53-05996caede61.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/f518c19a-f2ca-49d4-83ab-1046180cf3e3.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/6822f93e-ac24-4e6e-a494-2c57da2b337c.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/9457f0ee-c5fe-4a8a-84d9-89beb8357d81.jpeg'
    ];

    return (
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Header />
          <Navigation />
          
          <div className="retro-panel p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-shadow-retro text-[var(--primary-color)]">
              Texts
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              Words, writings, and thoughts preserved in digital form.
            </p>
          </div>

          <GallerySection title="Poetry" images={poetryImages} />
          <GallerySection title="Literature" images={literatureImages} />
          <GallerySection title="Letters" images={lettersImages} />
          <div className="retro-panel p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-bold mb-2 text-shadow-retro text-[var(--primary-color)]">
              Messages
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              A collection of various messages from people I've loved that I have saved for one reason or another over the years.
            </p>
            <GallerySection title="" images={messagesImages} />
          </div>
          
          <Footer />
        </div>
      </div>
    );
  } catch (error) {
    console.error('TextsApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TextsApp />);
