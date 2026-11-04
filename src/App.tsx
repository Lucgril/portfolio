import { useEffect } from 'react';
import { Code, Database, Settings, Layers, Workflow, Server, Cpu, GitMerge, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log(
      "%c💻 Ciao Tech Lead / Hello Tech Lead! Se stai leggendo questa console, abbiamo già qualcosa in comune. Parliamone: lucag.8595@gmail.com", 
      "color: #10b981; font-size: 16px; font-weight: bold; background: #1e293b; padding: 10px; border-radius: 5px;"
    );
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'it' ? 'en' : 'it');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-emerald-500 selection:text-white">
      
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">LUCA GRILLO</h1>
            <p className="text-emerald-400 font-mono text-sm mt-1">{t('header.role')}</p>
          </div>
          <div className="flex gap-4 items-center">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-medium transition-colors text-white"
            >
              <Globe className="w-4 h-4" />
              {i18n.language === 'it' ? 'EN' : 'IT'}
            </button>
            <a href="mailto:lucag.8595@gmail.com" className="px-5 py-2 rounded-md bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-medium transition-colors">
              {t('header.emailBtn')}
            </a>
            <a 
              href={`cv-luca-grillo-${i18n.language}.pdf`} 
              download={`CV_Luca_Grillo_${i18n.language.toUpperCase()}.pdf`}
              className="px-5 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              {t('header.cvBtn')}
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        
        <section className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {t('hero.title1')} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              {t('hero.title2')}
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            {t('hero.descPart1')}
            <strong className="text-white">{t('hero.descHighlight')}</strong>
            {t('hero.descPart2')}
          </p>
        </section>

        <section>
          <div className="rounded-lg overflow-hidden border border-slate-800 bg-[#0d1117] shadow-2xl">
            <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-xs font-mono text-slate-400">luca@dev-machine: ~</span>
            </div>
            <div className="p-6 font-mono text-sm sm:text-base overflow-x-auto">
              <div className="flex gap-2 mb-4 text-emerald-400">
                <span>$</span>
                <span className="text-slate-300">cat mindset.txt</span>
              </div>
              <div className="space-y-4 text-slate-400 pl-4 border-l-2 border-slate-700">
                <p><span className="text-cyan-400 font-bold">{t('mindset.title1')}</span>{t('mindset.desc1')}</p>
                <p><span className="text-cyan-400 font-bold">{t('mindset.title2')}</span>{t('mindset.desc2')}</p>
                <p><span className="text-cyan-400 font-bold">{t('mindset.title3')}</span>{t('mindset.desc3')}</p>
                <p><span className="text-cyan-400 font-bold">{t('mindset.title4')}</span>{t('mindset.desc4')}</p>
              </div>
              <div className="flex gap-2 mt-6 text-emerald-400 items-center">
                <span>$</span>
                <span className="text-slate-300">sudo hire luca_grillo</span>
                <span className="w-2.5 h-5 bg-slate-400 animate-pulse ml-1"></span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white shrink-0">{t('challenges.sectionTitle')}</h2>
            <div className="h-px bg-slate-800 w-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-xl hover:border-emerald-500/30 transition-colors group">
              <Server className="w-10 h-10 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">{t('challenges.ch1.title')}</h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                <strong className="text-slate-300">{t('challenges.ch1.challengeLabel')}</strong>{t('challenges.ch1.challengeText')}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                <strong className="text-emerald-400">{t('challenges.ch1.solutionLabel')}</strong>{t('challenges.ch1.solutionText')}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-slate-900 text-cyan-300 px-2 py-1 rounded">Spring Boot</span>
                <span className="text-xs bg-slate-900 text-cyan-300 px-2 py-1 rounded">NestJS</span>
                <span className="text-xs bg-slate-900 text-cyan-300 px-2 py-1 rounded">FastAPI</span>
              </div>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-xl hover:border-emerald-500/30 transition-colors group">
              <Layers className="w-10 h-10 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">{t('challenges.ch2.title')}</h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                <strong className="text-slate-300">{t('challenges.ch2.challengeLabel')}</strong>{t('challenges.ch2.challengeText')}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                <strong className="text-emerald-400">{t('challenges.ch2.solutionLabel')}</strong>{t('challenges.ch2.solutionText')}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-slate-900 text-purple-300 px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-slate-900 text-purple-300 px-2 py-1 rounded">Odoo ORM</span>
                <span className="text-xs bg-slate-900 text-purple-300 px-2 py-1 rounded">PostgreSQL</span>
              </div>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-xl hover:border-emerald-500/30 transition-colors group">
              <Workflow className="w-10 h-10 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">{t('challenges.ch3.title')}</h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                <strong className="text-slate-300">{t('challenges.ch3.challengeLabel')}</strong>{t('challenges.ch3.challengeText')}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                <strong className="text-emerald-400">{t('challenges.ch3.solutionLabel')}</strong>{t('challenges.ch3.solutionText')}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-slate-900 text-emerald-300 px-2 py-1 rounded">UiPath</span>
                <span className="text-xs bg-slate-900 text-emerald-300 px-2 py-1 rounded">Python Scripting</span>
                <span className="text-xs bg-slate-900 text-emerald-300 px-2 py-1 rounded">Bash / CLI</span>
              </div>
            </div>

          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white shrink-0">{t('stack.sectionTitle')}</h2>
            <div className="h-px bg-slate-800 w-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-lg bg-slate-800/20 border border-slate-700 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-emerald-400 w-5 h-5" />
                <h3 className="text-white font-bold">{t('stack.coreTitle')}</h3>
              </div>
              <p className="text-sm text-slate-400 mb-4 flex-grow">{t('stack.coreDesc')}</p>
              <p className="text-sm text-slate-300 font-mono">Java, Python, JS/TS, Spring Boot, FastAPI, NestJS</p>
            </div>

            <div className="p-6 rounded-lg bg-slate-800/20 border border-slate-700 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-emerald-400 w-5 h-5" />
                <h3 className="text-white font-bold">{t('stack.dbTitle')}</h3>
              </div>
              <p className="text-sm text-slate-400 mb-4 flex-grow">{t('stack.dbDesc')}</p>
              <p className="text-sm text-slate-300 font-mono">PostgreSQL, Oracle, MySQL, SQL</p>
            </div>

            <div className="p-6 rounded-lg bg-slate-800/20 border border-slate-700 flex flex-col h-full border-l-4 border-l-purple-500">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="text-purple-400 w-5 h-5" />
                <h3 className="text-white font-bold">{t('stack.odooTitle')}</h3>
              </div>
              <p className="text-sm text-slate-400 mb-4 flex-grow">
                <strong>{t('stack.odooLabel')}</strong>{t('stack.odooDesc')}
              </p>
              <p className="text-sm text-slate-300 font-mono">Odoo Framework, QWeb, Business Logic</p>
            </div>

            <div className="p-6 rounded-lg bg-slate-800/20 border border-slate-700 flex flex-col h-full border-l-4 border-l-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="text-blue-400 w-5 h-5" />
                <h3 className="text-white font-bold">{t('stack.rpaTitle')}</h3>
              </div>
              <p className="text-sm text-slate-400 mb-4 flex-grow">{t('stack.rpaDesc')}</p>
              <p className="text-sm text-slate-300 font-mono">UiPath Studio, Orchestrator, Process Mining</p>
            </div>

            <div className="p-6 rounded-lg bg-slate-800/20 border border-slate-700 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="text-emerald-400 w-5 h-5" />
                <h3 className="text-white font-bold">{t('stack.cloudTitle')}</h3>
              </div>
              <p className="text-sm text-slate-400 mb-4 flex-grow">{t('stack.cloudDesc')}</p>
              <p className="text-sm text-slate-300 font-mono">Docker, AWS, Linux, Bash Scripting</p>
            </div>

            <div className="p-6 rounded-lg bg-slate-800/20 border border-slate-700 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <GitMerge className="text-emerald-400 w-5 h-5" />
                <h3 className="text-white font-bold">{t('stack.workflowTitle')}</h3>
              </div>
              <p className="text-sm text-slate-400 mb-4 flex-grow">{t('stack.workflowDesc')}</p>
              <p className="text-sm text-slate-300 font-mono">Git, CI/CD, Scrum, Copilot, Gemini</p>
            </div>

          </div>
        </section>

      </main>

      <footer className="border-t border-slate-800 bg-slate-900 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-slate-500 gap-4">
          <p>Status: <span className="text-emerald-400">200 OK</span> | Build v.2.0</p>
          <p>All tests passed ({t('footer.bugs')}).</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/luca-grillo-3a3205140/" target="_blank" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
            <a href="https://github.com/Lucgril" target="_blank" className="hover:text-emerald-400 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}