
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import AiGuide from './components/AiGuide';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <main>
        <Hero />
        
        {/* Quality Banner */}
        <div className="bg-amber-600 text-white py-4 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="mx-8 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                • 100% COLD PRESSED • LAKDI GHANA • CHEMICAL FREE • ZERO CHOLESTEROL • PURE OIL JUNCTION •
              </span>
            ))}
          </div>
        </div>

        <ProductGrid />
        
        <About />
        
        {/* Testimonial Snippet */}
        <section className="bg-stone-100 py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-stone-400 text-6xl font-serif opacity-30 leading-none">"</h2>
            <p className="text-2xl md:text-3xl italic text-stone-700 font-light leading-relaxed mb-8">
              The aroma of their Groundnut oil takes me back to my grandmother's kitchen. The quality is truly exceptional and visibly different from store-bought refined oils.
            </p>
            <div className="flex items-center justify-center gap-4">
              <img src="https://picsum.photos/seed/user1/100/100" alt="Customer" className="w-12 h-12 rounded-full border-2 border-amber-600" />
              <div className="text-left">
                <p className="font-bold text-stone-800">Prachi Deshmukh</p>
                <p className="text-sm text-stone-500">Loyal Customer since 2022</p>
              </div>
            </div>
          </div>
        </section>

        <AiGuide />

        {/* Local Map Visualization Section */}
        <section className="h-[450px] w-full relative group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3486333912957!2d73.948256375014!3d18.5583561825421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3d183f3689d%3A0xc3f58e4695029a7c!2sOil%20Junction!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale opacity-80 contrast-125 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          ></iframe>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
             <div className="bg-white/90 backdrop-blur-md px-8 py-6 rounded-3xl shadow-2xl border border-stone-200 text-center scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
               <h4 className="font-bold text-xl text-stone-800 mb-1">Visit Our Ghana</h4>
               <p className="text-stone-500 text-sm">Experience live oil extraction at Kharadi</p>
             </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Tailwind Config for Animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 20s linear infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-from-top-4 {
          from { transform: translateY(-1rem); }
          to { transform: translateY(0); }
        }
        @keyframes slide-in-from-bottom-2 {
          from { transform: translateY(0.5rem); }
          to { transform: translateY(0); }
        }
        .animate-in {
          animation-duration: 0.3s;
          animation-fill-mode: both;
        }
        .fade-in {
          animation-name: fade-in;
        }
        .slide-in-from-top-4 {
          animation-name: slide-in-from-top-4;
        }
        .slide-in-from-bottom-2 {
          animation-name: slide-in-from-bottom-2;
        }
      `}</style>
    </div>
  );
};

export default App;
