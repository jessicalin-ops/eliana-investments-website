import { useState, useEffect } from 'react';
import { Menu, X, Briefcase, Lightbulb, TrendingUp, Users, Mail, MapPin, Send, CheckCircle, Sparkles, Zap, Target } from 'lucide-react';
import Logo from './components/Logo';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '', newsletter: false });
    setIsSubmitting(false);

    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, newsletter: e.target.checked }));
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
              <Logo className="h-10 w-auto" />
            </div>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-cyan-600 transition-all font-medium hover:scale-110 transform">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-cyan-600 transition-all font-medium hover:scale-110 transform">About</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-cyan-600 transition-all font-medium hover:scale-110 transform">Services</button>
              <button onClick={() => scrollToSection('founders-message')} className="text-slate-700 hover:text-cyan-600 transition-all font-medium hover:scale-110 transform">Founder's Message</button>
              <button onClick={() => scrollToSection('founder')} className="text-slate-700 hover:text-cyan-600 transition-all font-medium hover:scale-110 transform">Meet our Founder</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-cyan-600 transition-all font-medium hover:scale-110 transform">Contact Us</button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 animate-in slide-in-from-top">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-cyan-50 rounded-md transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-cyan-50 rounded-md transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-cyan-50 rounded-md transition-colors">Services</button>
              <button onClick={() => scrollToSection('founders-message')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-cyan-50 rounded-md transition-colors">Founder's Message</button>
              <button onClick={() => scrollToSection('founder')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-cyan-50 rounded-md transition-colors">Meet our Founder</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-cyan-50 rounded-md transition-colors">Contact Us</button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-white to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-teal-50 px-4 py-2 rounded-full mb-6 animate-fade-in border border-cyan-200">
              <Sparkles className="text-cyan-600" size={20} />
              <span className="text-sm font-semibold text-slate-700">AI-Powered Investment Solutions</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight animate-fade-in-up">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-600 to-cyan-500 animate-gradient">
                Eliana Investments
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-slate-700 mb-12 leading-relaxed font-light animate-fade-in-up animation-delay-200">
              An AI-driven leverage to accelerate corporate growth and innovation
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
              <button
                onClick={() => scrollToSection('about')}
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105 text-lg font-semibold overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative">Learn More</span>
                <Zap size={20} className="relative group-hover:rotate-12 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-lg border-2 border-cyan-500 hover:bg-cyan-50 transition-all shadow-md hover:shadow-lg hover:scale-105 text-lg font-semibold"
              >
                Get Started
                <Target size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 animate-fade-in-up animation-delay-600">
            <button
              onClick={() => scrollToSection('service-product-leadership')}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-cyan-200 transition-all hover:-translate-y-2 duration-300 text-left cursor-pointer"
            >
              <div className="bg-gradient-to-br from-cyan-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">Product Leadership</h3>
              <p className="text-slate-600 leading-relaxed">Fractional executive support to scale your organization</p>
            </button>

            <button
              onClick={() => scrollToSection('service-private-equity')}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-teal-200 transition-all hover:-translate-y-2 duration-300 text-left cursor-pointer"
            >
              <div className="bg-gradient-to-br from-teal-500 to-teal-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">Private Equity Advisory</h3>
              <p className="text-slate-600 leading-relaxed">Strategic insights for investment decisions and value creation</p>
            </button>

            <button
              onClick={() => scrollToSection('service-strategic-advisory')}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-emerald-200 transition-all hover:-translate-y-2 duration-300 text-left cursor-pointer"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Lightbulb className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">Strategic Advisory</h3>
              <p className="text-slate-600 leading-relaxed">Growth acceleration and transformation expertise</p>
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
            <Users className="text-cyan-600" size={28} />
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
          </div>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-12 text-center">About</h2>

          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p className="animate-fade-in-up">
              At Eliana Investments, we believe growth happens where innovation meets disciplined strategy. Our mission is to help visionary companies and investors unlock their full potential through expert product leadership and data-driven insight.
            </p>

            <p className="animate-fade-in-up animation-delay-200">
              We offer fractional product management services for organizations looking to scale without the overhead of a full-time executive team. From refining product strategy to aligning teams and accelerating go-to-market success, we bring hands-on experience in turning complex ideas into high-impact products that drive results.
            </p>

            <p className="animate-fade-in-up animation-delay-400">
              For investors, our private equity advisory services bridge the gap between product and capital. We partner with private equity and venture firms to assess product-market fit, evaluate technology and team readiness, and uncover post-acquisition growth opportunities that create long-term value.
            </p>

            <p className="animate-fade-in-up animation-delay-600">
              At our core, Eliana Investments combines a deep understanding of technology, markets, and human potential. Thoughtful innovation and purposeful growth are always within reach.
            </p>

            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl border-l-4 border-cyan-500 animate-fade-in-up animation-delay-800">
              <p className="font-bold text-xl text-cyan-900 text-center">
                Eliana Investments bridges innovation and capital for meaningful, measurable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
            <Briefcase className="text-cyan-600" size={28} />
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
          </div>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-16 text-center">Services</h2>

          <div className="space-y-8">
            <div id="service-product-leadership" className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl border-l-4 border-cyan-500 transition-all hover:-translate-y-1 duration-300 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <h3 className="text-3xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">Fractional Executive Product Support</h3>
              </div>
              <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600 mb-6 italic">Leadership on Demand. Strategy in Motion.</p>
              <p className="text-slate-700 mb-6 text-lg">
                We provide seasoned product leadership when and where you need it most. Our fractional product management services give you the strategic clarity and operational strength to move faster, smarter, and with purpose.
              </p>
              <p className="text-slate-700 mb-4 font-semibold text-lg">We help you:</p>
              <ul className="space-y-3 text-slate-700 mb-6 text-lg">
                <li className="flex items-start group/item hover:translate-x-2 transition-transform">
                  <span className="text-cyan-500 mr-3 mt-1 font-bold">▸</span>
                  <span>Define and refine your product vision and strategy</span>
                </li>
                <li className="flex items-start group/item hover:translate-x-2 transition-transform">
                  <span className="text-cyan-500 mr-3 mt-1 font-bold">▸</span>
                  <span>Develop product prototypes for user research and market testing</span>
                </li>
                <li className="flex items-start group/item hover:translate-x-2 transition-transform">
                  <span className="text-cyan-500 mr-3 mt-1 font-bold">▸</span>
                  <span>Build prioritized outcome-driven roadmaps</span>
                </li>
                <li className="flex items-start group/item hover:translate-x-2 transition-transform">
                  <span className="text-cyan-500 mr-3 mt-1 font-bold">▸</span>
                  <span>Manage the entire product lifecycle, from ideation and design through launch and post-launch optimization</span>
                </li>
              </ul>
              <p className="text-slate-700 text-lg">
                Whether you need interim leadership, guidance for a new initiative, or structure for an evolving product organization, Eliana Investments provides the expertise and flexibility to drive results.
              </p>
            </div>

            <div id="service-private-equity" className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl border-l-4 border-teal-600 transition-all hover:-translate-y-1 duration-300 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></div>
                <h3 className="text-3xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">Private Equity Advisory & Investment</h3>
              </div>
              <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-6 italic">Invest with Insight. Build with Purpose.</p>
              <p className="text-slate-700 mb-6 text-lg">
                We partner with private equity firms and investors to identify, evaluate, and unlock growth opportunities. Our team brings a product-centric lens to deal evaluation and value creation, focusing on the fundamentals that drive sustainable returns.
              </p>
              <p className="text-slate-700 mb-4 font-semibold text-lg">Our services include:</p>
              <ul className="space-y-3 text-slate-700 mb-6 text-lg">
                <li className="flex items-start group/item hover:translate-x-2 transition-transform">
                  <span className="text-teal-600 mr-3 mt-1 font-bold">▸</span>
                  <span>Deal identification</span>
                </li>
                <li className="flex items-start group/item hover:translate-x-2 transition-transform">
                  <span className="text-teal-600 mr-3 mt-1 font-bold">▸</span>
                  <span>Product and market due diligence to inform investment decisions</span>
                </li>
                <li className="flex items-start group/item hover:translate-x-2 transition-transform">
                  <span className="text-teal-600 mr-3 mt-1 font-bold">▸</span>
                  <span>Growth and turnaround strategy for portfolio companies</span>
                </li>
                <li className="flex items-start group/item hover:translate-x-2 transition-transform">
                  <span className="text-teal-600 mr-3 mt-1 font-bold">▸</span>
                  <span>Technology and talent assessments to support scaling and transformation</span>
                </li>
              </ul>
              <p className="text-slate-700 text-lg">
                For select opportunities, Eliana Investments will take an equity and/or debt position, helping to fund and guide high-potential companies through critical growth or turnaround phases.
              </p>
            </div>

            <div id="service-strategic-advisory" className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl border-l-4 border-emerald-600 transition-all hover:-translate-y-1 duration-300 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
                <h3 className="text-3xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Strategic Advisory & Growth Acceleration</h3>
              </div>
              <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-6 italic">Accelerate What's Next.</p>
              <p className="text-slate-700 mb-6 text-lg">
                For organizations seeking focused expertise on a project or transformation initiative, we offer short-term advisory engagements that deliver high-impact insights and actionable plans.
              </p>
              <p className="text-slate-700 mb-4 font-semibold text-lg">Examples include:</p>
              <ul className="space-y-3 text-slate-700 mb-6 text-lg">
                <li className="flex items-start group/item hover:translate-x-2 transition-transform">
                  <span className="text-emerald-600 mr-3 mt-1 font-bold">▸</span>
                  <span>Product-market fit assessments</span>
                </li>
                <li className="flex items-start group/item hover:translate-x-2 transition-transform">
                  <span className="text-emerald-600 mr-3 mt-1 font-bold">▸</span>
                  <span>Go-to-market and monetization strategy refinement</span>
                </li>
                <li className="flex items-start group/item hover:translate-x-2 transition-transform">
                  <span className="text-emerald-600 mr-3 mt-1 font-bold">▸</span>
                  <span>Customer journey and experience mapping</span>
                </li>
                <li className="flex items-start group/item hover:translate-x-2 transition-transform">
                  <span className="text-emerald-600 mr-3 mt-1 font-bold">▸</span>
                  <span>Team and process diagnostics for scale-up readiness</span>
                </li>
              </ul>
              <p className="text-slate-700 text-lg">
                These engagements are ideal for leadership teams who need clarity, confidence, and a concrete path forward without long-term commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="founders-message" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
            <Mail className="text-cyan-600" size={28} />
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
          </div>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-12 text-center">Founder's Message</h2>

          <div className="bg-gradient-to-br from-cyan-50 via-white to-teal-50 p-10 md:p-14 rounded-2xl shadow-xl border-2 border-cyan-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  <img
                    src="jessica-lin copy copy.png"
                    alt="Jessica Lin"
                    className="relative w-56 h-56 rounded-lg object-cover shadow-xl border-4 border-white"
                  />
                </div>
              </div>

              <div className="space-y-5 text-slate-700 leading-relaxed text-lg flex-1">
                <p>
                  I founded Eliana Investments to bridge two worlds I've spent my career navigating, innovation and impact.
                </p>

                <p>
                  Throughout my journey in technology, energy, and policy, I've seen how great ideas often need both strategic clarity and the right capital to reach their full potential.
                </p>

                <p>
                  Eliana was created to provide that bridge, helping organizations translate complex technology into products that matter, and helping investors see beyond spreadsheets to the human and market potential that drives real value.
                </p>

                <p>
                  The name of our organization is a reminder that purposeful growth comes from aligning vision with action. My goal is simple: to help founders, operators, and investors build the future thoughtfully, responsibly, and with lasting impact.
                </p>

                <p className="font-bold text-slate-900 pt-4 text-xl">
                  — Jessica Lin<br />
                  <span className="text-base text-slate-600 font-normal">Founder & CEO, Eliana Investments</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="founder" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
            <Users className="text-cyan-600" size={28} />
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
          </div>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-4 text-center">Meet our Founder</h2>
          <p className="text-center text-slate-600 mb-16 text-xl">Founder, CEO and Chair of Board</p>

          <div className="bg-white p-10 md:p-14 rounded-2xl shadow-xl border-2 border-cyan-100 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-4xl font-bold text-slate-900 mb-8">Jessica Lin</h3>

            <div className="space-y-5 text-slate-700 leading-relaxed text-lg">
              <p>
                Jessica Lin is a technology and clean energy leader with more than two decades of experience driving innovation at the intersection of clean energy, product strategy, and artificial intelligence.
              </p>

              <p>
                Before founding Eliana Investments, Jessica served as Head of Product for Amazon Alexa's Smart Energy team, where she defined the vision for using AI and smart devices to reduce residential energy use and decarbonize the grid.
              </p>

              <p>
                Previously, as Group Product Manager at Oracle Energy and Water, she led a portfolio of data science and behavioral energy products that reached millions of utility customers worldwide. Earlier in her career, she directed teams of data scientists at U.S. National Laboratories for the Department of Energy under the Obama Administration, advancing the global Mission Innovation initiative. At the World Bank, she developed frameworks to scale climate technology enterprises across Latin America and the Caribbean. Jessica has also held leadership roles in finance, consulting, and startup innovation, including serving as CEO and Head of Product at a wireless mesh technology company.
              </p>

              <p>
                She has advised the National Renewable Energy Laboratory and Pacific Northwest National Laboratory, holds patents in data science engineering, and has been recognized as a Rising Star and Global Leader in CleanTech by Emerging Technology News.
              </p>

              <p>
                Jessica earned her Bachelor of Science in Electrical Engineering and Computer Science from MIT and a Master of Public Policy from the Harvard Kennedy School, where she was a Fellow in Social Entrepreneurship.
              </p>

              <p>
                She resides in Virginia Beach, Virginia, where she volunteers with MIT and Harvard admissions, the MIT Angels Club of DC, and serves as Secretary of the Virginia Beach Rotary Club.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-600 via-teal-600 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
            <Mail className="text-white" size={28} />
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
          </div>
          <h2 className="text-5xl font-extrabold text-white mb-6 text-center">Contact Us</h2>

          <div className="text-center mb-10">
            <p className="text-white/90 mb-3 text-xl font-medium">Drop us a line!</p>
            <div className="flex items-center justify-center gap-2 text-white/80 text-lg">
              <MapPin size={20} />
              <span>Our offices are located in Coastal Virginia, USA.</span>
            </div>
            <p className="text-white/80 mt-2 text-lg">Reach out to us to discuss how we can partner with you.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                required
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/40 transition-all text-lg group-hover:border-white/30"
              />
            </div>

            <div className="group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email*"
                required
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/40 transition-all text-lg group-hover:border-white/30"
              />
            </div>

            <div className="group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                required
                rows={6}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/40 transition-all resize-none text-lg group-hover:border-white/30"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="newsletter"
                checked={formData.newsletter}
                onChange={handleCheckboxChange}
                className="w-5 h-5 rounded border-white/20 bg-white/10 text-cyan-600 focus:ring-2 focus:ring-white/50 focus:ring-offset-0"
              />
              <label htmlFor="newsletter" className="text-white/90 text-base">
                Sign up for our email list for updates, promotions, and more.
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-3 bg-white text-cyan-700 px-10 py-4 rounded-xl hover:bg-cyan-50 transition-all text-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl hover:scale-105 hover:shadow-3xl overflow-hidden relative"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-100/0 via-cyan-100/50 to-cyan-100/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                {isSubmitting ? (
                  <>
                    <span className="relative">Processing...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle size={24} className="relative" />
                    <span className="relative">Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={24} className="relative group-hover:rotate-12 transition-transform" />
                    <span className="relative">SEND</span>
                  </>
                )}
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="text-center text-white font-semibold text-lg animate-fade-in">
                Thank you! We'll be in touch soon.
              </div>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            <Logo className="mb-6 hover:scale-105 transition-transform duration-300" isDark={true} />
          </div>
          <div className="text-center">
            <p className="text-slate-400">&copy; 2025 Eliana Investments. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
