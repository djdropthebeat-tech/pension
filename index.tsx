import React, { useState, useEffect } from 'react';
import { 
  Waves, 
  Mountain, 
  Star, 
  Utensils, 
  Wine, 
  Coffee, 
  Wind, 
  Menu, 
  X, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';

const TheJoeunPension = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 스크롤 감지 효과
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-stone-200">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6 text-white'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-serif tracking-widest font-bold cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            THE JOEUN
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 text-sm tracking-widest font-medium">
            {['CONCEPT', 'ROOMS', 'AMENITIES', 'OFFERS', 'LOCATION'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="hover:opacity-70 transition-opacity">
                {item}
              </button>
            ))}
          </div>

          <button className={`hidden md:block px-6 py-2 border ${isScrolled ? 'border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white' : 'border-white text-white hover:bg-white hover:text-stone-900'} transition-all duration-300 text-xs tracking-widest`}>
            RESERVATION
          </button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-stone-900 text-white flex flex-col items-center justify-center space-y-8">
          {['CONCEPT', 'ROOMS', 'AMENITIES', 'OFFERS', 'LOCATION'].map((item) => (
            <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-2xl font-serif tracking-widest">
              {item}
            </button>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Gradient simulating Mountain & Ocean */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800">
           {/* Abstract visual elements representing concept */}
           <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1502085671122-2d218cd434e6?q=80&w=2626&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
           <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <p className="text-sm md:text-base tracking-[0.3em] font-light uppercase text-stone-300 mb-4">
            Private Sanctuary in Nature
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8">
            <span className="block mb-2">산이 품고 바다가 열리는 곳,</span>
            <span className="block">오직 당신만의 안식처.</span>
          </h1>

          <div className="flex flex-col md:flex-row justify-center gap-6 text-sm font-light tracking-wider opacity-90 my-8">
            <span className="flex items-center justify-center gap-2"><Wind size={16}/> 구름 위에서 유영하다</span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center justify-center gap-2"><Waves size={16}/> 수평선 끝에서 잠들다</span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center justify-center gap-2"><Star size={16}/> 완벽한 고립, 가장 우아한 자유</span>
          </div>

          <button className="mt-12 px-10 py-4 bg-white text-stone-900 hover:bg-stone-200 transition-colors duration-300 text-sm tracking-widest font-bold">
            PRIVATE STAY 예약하기
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <ChevronDown />
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-24 md:py-32 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 space-y-8">
              <span className="text-stone-500 tracking-widest text-xs font-bold uppercase border-b border-stone-300 pb-2">Our Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
                산속의 고요함과<br />
                바다의 광활함이<br />
                만나는 접점
              </h2>
              <p className="text-stone-600 leading-relaxed font-light text-lg">
                더조은 펜션은 일상의 소음이 닿지 않는 깊은 숲 속에 자리 잡고 있습니다. 
                모든 객실에서 파노라마처럼 펼쳐지는 오션뷰는 마치 바다 위에 떠 있는 듯한 비현실적인 경험을 선사합니다.
                <br /><br />
                30대 당신을 위한 완벽한 휴식. 프라이빗 독채 구조는 누구의 방해도 받지 않는 온전한 시간을 보장하며,
                최고급 침구와 셰프의 다이닝은 당신의 하루를 예술로 만듭니다.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="h-64 md:h-80 bg-stone-200 rounded-lg overflow-hidden relative group">
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors duration-500"></div>
                <img src="https://images.unsplash.com/photo-1544885935-98dd03517368?q=80&w=1000&auto=format&fit=crop" alt="Forest view" className="w-full h-full object-cover" />
              </div>
              <div className="h-64 md:h-80 bg-stone-300 rounded-lg overflow-hidden relative group mt-12">
                 <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors duration-500"></div>
                 <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop" alt="Infinity Pool" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-stone-500 tracking-widest text-xs font-bold uppercase">Private Villas</span>
            <h2 className="text-4xl font-serif mt-4 text-stone-900">Rooms</h2>
          </div>

          <div className="space-y-24">
            {/* Room A */}
            <div className="flex flex-col md:flex-row items-center group">
              <div className="md:w-3/5 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1590490360182-f33efe29a77d?q=80&w=2000&auto=format&fit=crop" 
                  alt="Oceanus Rise" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="md:w-2/5 md:-ml-12 z-10 bg-stone-100 p-10 md:p-14 shadow-xl">
                <div className="text-xs tracking-widest text-stone-500 mb-2">TYPE A</div>
                <h3 className="text-3xl font-serif mb-6 text-stone-900">Oceanus Rise <span className="text-lg italic text-stone-400 font-light block mt-1">오션너스 라이즈</span></h3>
                <p className="text-stone-600 leading-relaxed mb-8 text-sm md:text-base font-light">
                  새벽녘, 산능선 너머로 떠오르는 붉은 태양을 가장 먼저 마주하는 객실입니다. 
                  침대에 누워 통창 가득 쏟아지는 아침 햇살과 바다 위로 반짝이는 윤슬을 감상해 보세요. 
                  화이트 톤의 모던한 인테리어와 자연 채광이 어우러진 이 공간은 
                  새로운 시작을 꿈꾸는 연인들에게 벅찬 감동을 선사합니다.
                  프라이빗 테라스에서 즐기는 모닝 커피는 하루의 시작을 특별하게 만듭니다.
                </p>
                <button className="flex items-center text-stone-900 text-sm font-bold tracking-widest hover:text-stone-600 transition-colors">
                  VIEW DETAIL <ArrowRight size={16} className="ml-2"/>
                </button>
              </div>
            </div>

            {/* Room B */}
            <div className="flex flex-col md:flex-row-reverse items-center group">
              <div className="md:w-3/5 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=2000&auto=format&fit=crop" 
                  alt="Celestia Fall" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="md:w-2/5 md:-mr-12 z-10 bg-stone-900 text-stone-50 p-10 md:p-14 shadow-xl">
                <div className="text-xs tracking-widest text-stone-400 mb-2">TYPE B</div>
                <h3 className="text-3xl font-serif mb-6 text-white">Celestia Fall <span className="text-lg italic text-stone-500 font-light block mt-1">셀레스티아 폴</span></h3>
                <p className="text-stone-300 leading-relaxed mb-8 text-sm md:text-base font-light">
                  해 질 녘, 붉게 물드는 노을과 밤하늘에 쏟아지는 별빛을 오롯이 소유할 수 있는 객실입니다. 
                  짙은 우드 톤의 인테리어는 차분하고 고급스러운 분위기를 자아내며, 
                  달빛 아래 프라이빗 풀에서의 유영은 잊지 못할 낭만을 선사합니다. 
                  고요한 밤바다의 파도 소리에 귀 기울이며 도시에서 느낄 수 없었던 깊은 휴식을 경험하세요.
                </p>
                <button className="flex items-center text-white text-sm font-bold tracking-widest hover:text-stone-300 transition-colors">
                  VIEW DETAIL <ArrowRight size={16} className="ml-2"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities & Special Offers */}
      <section id="amenities" className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-stone-500 tracking-widest text-xs font-bold uppercase">Special Experiences</span>
            <h2 className="text-4xl font-serif mt-4 text-stone-900">Signature Amenities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Core Features */}
            <div className="bg-white p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <Waves className="w-10 h-10 text-stone-800 mb-6" />
              <h3 className="text-xl font-serif mb-4">Private Infinity Pool</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                바다와 하늘이 맞닿은 듯한 인피니티 풀에서 사계절 온수풀을 즐기세요. 타인의 시선 없이 오직 두 분만을 위해 준비되어 있습니다.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <Utensils className="w-10 h-10 text-stone-800 mb-6" />
              <h3 className="text-xl font-serif mb-4">Chef's Welcome Dinner</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                특급 호텔 출신 셰프가 제철 식재료로 준비한 웰컴 코스 요리를 객실 내 다이닝 공간으로 직접 서빙해 드립니다.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <Star className="w-10 h-10 text-stone-800 mb-6" />
              <h3 className="text-xl font-serif mb-4">Premium Bedding</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                구스다운 침구와 최고급 매트리스가 구름 위에 누운 듯한 편안함을 제공합니다. 당신의 꿀잠을 책임집니다.
              </p>
            </div>
          </div>

          <div className="border-t border-stone-200 my-16"></div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-serif text-stone-800">Only for You: Special Services</h3>
            <p className="text-stone-500 mt-2 text-sm">더조은 펜션만의 특별한 감성을 더하는 큐레이션 서비스</p>
          </div>

          {/* New Special Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="relative group overflow-hidden h-80">
                <img src="https://images.unsplash.com/photo-1572331165267-854da2dc7252?q=80&w=1000&auto=format&fit=crop" alt="Floating Tray" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 text-white">
                   <div className="flex items-center gap-2 mb-2 text-amber-200">
                     <Wine size={18} />
                     <span className="text-xs tracking-widest uppercase font-bold">Service 01</span>
                   </div>
                   <h4 className="text-xl font-serif mb-2">플로팅 선셋 트레이</h4>
                   <p className="text-xs text-stone-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                     인피니티 풀 위에서 즐기는 핑거푸드와 샴페인. 노을 지는 바다를 배경으로 인생 사진을 남겨보세요.
                   </p>
                </div>
             </div>

             <div className="relative group overflow-hidden h-80">
                <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1000&auto=format&fit=crop" alt="Forest Picnic" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 text-white">
                   <div className="flex items-center gap-2 mb-2 text-amber-200">
                     <Coffee size={18} />
                     <span className="text-xs tracking-widest uppercase font-bold">Service 02</span>
                   </div>
                   <h4 className="text-xl font-serif mb-2">시크릿 포레스트 피크닉</h4>
                   <p className="text-xs text-stone-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                     펜션 뒷산 전용 산책로에서 즐기는 프라이빗 피크닉. 라탄 바구니에 커피와 디저트를 담아드립니다.
                   </p>
                </div>
             </div>

             <div className="relative group overflow-hidden h-80">
                <img src="https://images.unsplash.com/photo-1612454376902-577cd469d008?q=80&w=1000&auto=format&fit=crop" alt="Aroma Therapy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 text-white">
                   <div className="flex items-center gap-2 mb-2 text-amber-200">
                     <Wind size={18} />
                     <span className="text-xs tracking-widest uppercase font-bold">Service 03</span>
                   </div>
                   <h4 className="text-xl font-serif mb-2">아로마 딥 슬립 테라피</h4>
                   <p className="text-xs text-stone-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                     취향에 맞는 천연 에센셜 오일을 선택하세요. 자기 전 필로우 미스트와 디퓨징 서비스로 꿀잠을 선물합니다.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="location" className="bg-stone-900 text-stone-400 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="md:w-1/3">
              <div className="text-2xl font-serif text-stone-200 tracking-widest font-bold mb-6">THE JOEUN</div>
              <p className="text-sm leading-relaxed mb-6">
                산과 바다가 만나는 곳, <br/>
                가장 프라이빗한 당신의 안식처.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-stone-700 cursor-pointer">IG</div>
                <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-stone-700 cursor-pointer">FB</div>
                <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-stone-700 cursor-pointer">YT</div>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <h4 className="text-stone-200 font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>010-1234-5678</li>
                <li>reservation@thejoeun.com</li>
                <li>강원도 어느 깊은 산속, 바다가 보이는 길 123</li>
                <li className="pt-4 text-xs text-stone-600">AM 09:00 - PM 06:00 (연중무휴)</li>
              </ul>
            </div>

            <div className="md:w-1/3 w-full">
              <h4 className="text-stone-200 font-bold uppercase tracking-widest text-sm mb-6">Newsletter</h4>
              <div className="flex">
                <input type="email" placeholder="Email Address" className="bg-stone-800 text-white px-4 py-3 w-full focus:outline-none focus:bg-stone-700 text-sm" />
                <button className="bg-stone-200 text-stone-900 px-6 py-3 text-xs font-bold tracking-widest hover:bg-white transition-colors">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-16 pt-8 text-center text-xs text-stone-600">
            &copy; 2024 THE JOEUN PENSION. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TheJoeunPension;