
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, MessageSquare, School, HeartHandshake, Trophy, Sparkles } from 'lucide-react';
import { Content } from '../types';

interface HomeProps {
  content: Content;
}

// Fix: Added React import to solve "Cannot find namespace 'React'" error when using React.FC
export const Home: React.FC<HomeProps> = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full bg-party-cream overflow-x-hidden">
      
      {/* 
        SECTION 1: HERO
        "No Drama" Slogan + Big Number 3 
      */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Background Image Layer - Team Photo */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://img5.pic.in.th/file/secure-sv1/IMG_409023ef09f4b44c8af4.jpeg"
             alt="Team Background"
             className="w-full h-full object-cover"
           />
           {/* Gradient overlays - Adjusted for better visibility of the image while keeping text readable */}
           <div className="absolute inset-0 bg-gradient-to-t from-party-cream via-party-cream/60 to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-party-cream/80 via-party-cream/40 to-transparent"></div>
           <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            
            {/* Text Content */}
            <div className="w-full md:w-2/3 space-y-6">
              <div 
                className={`transform transition-all duration-1000 ease-out delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <span className="inline-block py-1 px-3 border border-party-black/20 rounded-full text-xs md:text-sm font-sans tracking-widest uppercase text-party-black/60 mb-4 bg-white/40 backdrop-blur-md">
                   {content.home.partyName}
                </span>
              </div>

              <h1 
                className={`text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-party-black leading-tight max-w-4xl transform transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                No Drama <br/>
                <span className="text-party-rose">เน้นแก้ปัญหา</span> <br/>
                <span className="text-2xl md:text-4xl lg:text-5xl font-medium opacity-80 mt-2 block">
                  พรรคศรัณย์ศิริประภาจัดให้
                </span>
              </h1>

              {/* Saran Bot CTA Button */}
              <div 
                className={`mt-10 flex flex-wrap gap-4 transform transition-all duration-1000 ease-out delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <NavLink 
                    to="/saranbot"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-party-black text-white rounded-full font-sans font-bold tracking-wide overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <Sparkles size={18} className="text-party-rose animate-pulse" />
                        {content.home.saranbotBtn}
                    </span>
                    <div className="absolute inset-0 bg-party-rose-dark/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </NavLink>
              </div>
            </div>

            {/* Big Number 3 */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-12 md:mt-0 relative">
               <div 
                  className={`text-[200px] md:text-[350px] leading-none font-serif font-bold text-party-rose drop-shadow-2xl transform transition-all duration-1000 ease-out delay-500 ${isVisible ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 rotate-12'}`}
                  style={{ textShadow: '0 20px 50px rgba(185, 56, 71, 0.3)' }}
               >
                 3
               </div>
               {/* Decor circle behind number */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-white/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        SECTION 2: SCROLLING MARQUEE
        Rose background strip
      */}
      <div className="bg-party-rose text-white py-4 overflow-hidden shadow-lg transform -skew-y-1 relative z-20">
         <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-12 mx-6">
                    {content.home.marqueeKeywords.map((word, idx) => (
                        <div key={idx} className="flex items-center gap-12">
                            <span className="text-lg md:text-xl font-sans font-medium uppercase tracking-widest">{word}</span>
                            <div className="w-2 h-2 rounded-full bg-white/50"></div>
                        </div>
                    ))}
                </div>
            ))}
         </div>
      </div>
      <style>{`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 30s linear infinite;
        }
      `}</style>


      {/* 
        SECTION 3: POLICY TEASER (2x2 GRID) & CTA
      */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        
        {/* Decor Side Image - Significantly increased visibility */}
        <div className="absolute right-0 top-0 w-full md:w-2/3 h-full opacity-60 pointer-events-none mix-blend-multiply">
            <img 
                src="https://img5.pic.in.th/file/secure-sv1/IMG_419800accdd12bad9d94.jpeg" 
                alt="Decor" 
                className="w-full h-full object-cover object-left-top"
            />
            {/* Gradient to fade cleanly into the background color */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-party-cream"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-party-cream via-transparent to-transparent"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
                
                {/* Policy 1: Complaints */}
                <div className="group p-8 bg-white/90 backdrop-blur-sm border border-party-black/5 rounded-2xl shadow-sm hover:shadow-xl hover:border-party-rose/30 transition-all duration-500 transform hover:-translate-y-1">
                    <div className="w-12 h-12 bg-party-rose/10 rounded-full flex items-center justify-center text-party-rose mb-6 group-hover:scale-110 transition-transform">
                        <MessageSquare size={24} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-party-black mb-2">{content.home.policyHighlights.complaint}</h3>
                    <p className="text-party-black/60 font-sans text-sm">Direct line to solutions. No bureaucracy, just action.</p>
                </div>

                 {/* Policy 2: Academic */}
                 <div className="group p-8 bg-white/90 backdrop-blur-sm border border-party-black/5 rounded-2xl shadow-sm hover:shadow-xl hover:border-party-rose/30 transition-all duration-500 transform hover:-translate-y-1 transition-delay-100">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                        <School size={24} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-party-black mb-2">{content.home.policyHighlights.academic}</h3>
                    <p className="text-party-black/60 font-sans text-sm">Peer tutoring systems & resource sharing centers.</p>
                </div>

                 {/* Policy 3: Welfare */}
                 <div className="group p-8 bg-white/90 backdrop-blur-sm border border-party-black/5 rounded-2xl shadow-sm hover:shadow-xl hover:border-party-rose/30 transition-all duration-500 transform hover:-translate-y-1 transition-delay-200">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                        <HeartHandshake size={24} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-party-black mb-2">{content.home.policyHighlights.welfare}</h3>
                    <p className="text-party-black/60 font-sans text-sm">Improved facilities and swift maintenance response.</p>
                </div>

                 {/* Policy 4: E-Sports */}
                 <div className="group p-8 bg-white/90 backdrop-blur-sm border border-party-black/5 rounded-2xl shadow-sm hover:shadow-xl hover:border-party-rose/30 transition-all duration-500 transform hover:-translate-y-1 transition-delay-300">
                    <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                        <Trophy size={24} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-party-black mb-2">{content.home.policyHighlights.esport}</h3>
                    <p className="text-party-black/60 font-sans text-sm">Support for diverse talents, from stage to screen.</p>
                </div>

            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
                <NavLink 
                    to="/policies"
                    className="group relative inline-flex items-center gap-3 px-10 py-5 bg-party-rose text-white rounded-full font-sans font-bold tracking-wide overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                    <span className="relative z-10">{content.home.policyBtn}</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-party-rose-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </NavLink>
            </div>

        </div>
      </section>
    </div>
  );
};
