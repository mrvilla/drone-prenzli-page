import { useState } from 'react';
import { Play, Mail, Phone, ChevronLeft, ChevronRight, X, Instagram } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Daylight Pass',
    description: 'Smooth cinematic movement showcasing façade and surrounding streets',
    thumbnail: '/prenzli-01-Cover.jpg',
    gif: '/prenzli-01.gif',
    video: '/prenzli-01.mp4',
    duration: '1:06'
  },
  {
    id: 2,
    title: 'Golden Hour',
    description: 'A warm, dynamic flyby with sunset tones',
    thumbnail: '/prenzli-02-Cover.jpg',
    gif: '/prenzli-02.gif',
    video: '/prenzli-02.mp4',
    duration: '0:39'
  },
  {
    id: 3,
    title: 'Top-Down Precision',
    description: 'High-detail overhead shots for layout and context',
    thumbnail: '/prenzli-03-Cover.jpg',
    gif: '/prenzli-03.gif',
    video: '/prenzli-03.mp4',
    duration: '0:59'
  }
];

const photos = [
  '/prenzli-ave-view-styled.jpg?auto=compress&cs=tinysrgb&w=1200',
  '/prenzli-corner-view-styled.jpg?auto=compress&cs=tinysrgb&w=1200',
  '/prenzli-front-view-styled.jpg?auto=compress&cs=tinysrgb&w=1200',
  '/prenzli-side-view-styled.jpg?auto=compress&cs=tinysrgb&w=1200',
  '/prenzli-upfront-street-view-styled.jpg?auto=compress&cs=tinysrgb&w=1200',
  '/prenzli-front-side-styled.jpg?auto=compress&cs=tinysrgb&w=1200',
];

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto - 1 + photos.length) % photos.length);
    }
  };

  const handleVideoPlay = (video: typeof videos[0]) => {
    setSelectedVideo(video);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(./prenzli-Cover.jpg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/50 to-zinc-950"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <img 
              src="/flywithme.svg" 
              alt="Fly With Evilla Logo" 
              className="w-20 h-20 text-emerald-400" 
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Prenzlauer Berg <span className="block mt-2" style={{ color: '#06B391' }}>from Above</span>
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            A modern view of Berlin architecture, captured in motion
          </p>
          <p className="text-sm md:text-base mt-4 font-light tracking-wide">
            Drone footage and aerial photography by Enrique
          </p>
          <div className="mt-12">
            <a
              href="#videos"
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium"
              style={{ backgroundColor: '#06B391' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#08908D'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#06B391'}
            >
              <Play className="w-5 h-5" />
              View Work
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">Featured Videos</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Experience the building at Prenzlauer Allee from three unique perspectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 mb-4">
                  {/* Thumbnail Image */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  {/* GIF that appears on hover */}
                  <img
                    src={video.gif}
                    alt={`${video.title} preview`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVideoPlay(video);
                      }}
                      title="Play Video"
                      className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-transparent"
                    >
                      <Play className="w-7 h-7 text-zinc-950 ml-1" fill="currentColor" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {video.duration}
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-2 group-hover:text-emerald-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section id="photos" className="py-24 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">Aerial Photos</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Highlighting textures, symmetry, and environment from above
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                onClick={() => setSelectedPhoto(index)}
                className="aspect-square rounded-lg overflow-hidden bg-zinc-800 cursor-pointer group"
              >
                <img
                  src={photo}
                  alt={`Aerial view ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">About the Pilot</h2>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-6">
              Hi, I'm <span className="text-emerald-400 font-medium">Enrique</span> — a certified drone operator and frontend designer based in Berlin. I specialize in cinematic aerial content for real estate, architecture, and creative projects.
            </p>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              My goal is to help you present spaces in a way that feels elevated, clear, and inspiring.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">Work With Me</h2>
            <p className="text-zinc-400 text-lg">
              Looking to capture a property, building, or project from above?
            </p>
            <p className="text-xl text-white mt-2">Let's talk.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:fly@iammrvilla.com"
              className="flex items-center gap-4 bg-zinc-900 hover:bg-zinc-800 p-6 rounded-xl transition-colors group"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                <Mail className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-sm text-zinc-400 mb-1">Email</div>
                <div className="text-white">fly@iammrvilla.com</div>
              </div>
            </a>

            <a
              href="tel:+491701518404"
              className="flex items-center gap-4 bg-zinc-900 hover:bg-zinc-800 p-6 rounded-xl transition-colors group"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                <Phone className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-sm text-zinc-400 mb-1">Phone</div>
                <div className="text-white">+49 170 151 8404</div>
              </div>
            </a>

            <a
              href="https://www.instagram.com/fly_iammrvilla/"
              className="flex items-center gap-4 bg-zinc-900 hover:bg-zinc-800 p-6 rounded-xl transition-colors group"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                <Instagram className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-sm text-zinc-400 mb-1">Instagram</div>
                <div className="text-white">@fly_iammrvilla</div>
              </div>
            </a>
          </div>

          <div className="text-center">
            <p className="text-zinc-400 italic border-l-2 border-emerald-400 pl-6 py-2 inline-block">
              Available for drone projects in Berlin and beyond. Fully licensed (A1/A3, A2/STS).
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto text-center text-zinc-500 text-sm">
          <p>&copy; 2025 Enrique Berlin Aerials. All rights reserved.</p>
        </div>
      </footer>

      {/* Photo Modal */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto(null);
            }}
            title="Close Photo"
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            title="Previous Photo"
            className="absolute left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            title="Next Photo"
            className="absolute right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <img
            src={photos[selectedPhoto]}
            alt={`Aerial view ${selectedPhoto + 1}`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
            {selectedPhoto + 1} / {photos.length}
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedVideo(null);
            }}
            title="Close Video"
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-5xl mx-auto">
            <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Header */}
              <div className="p-6 border-b border-zinc-700">
                <h3 className="text-2xl font-medium text-white mb-2">{selectedVideo.title}</h3>
                <p className="text-zinc-400">{selectedVideo.description}</p>
              </div>
              
              {/* Video Player */}
              <div className="relative aspect-video bg-black">
                <video
                  src={selectedVideo.video}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  onClick={(e) => e.stopPropagation()}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Video Footer */}
              <div className="p-4 bg-zinc-800/50 text-center">
                <p className="text-zinc-400 text-sm">
                  Duration: {selectedVideo.duration}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
