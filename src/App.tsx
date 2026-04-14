import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  MessageSquare, 
  PenLine, 
  ArrowUpRight,
  Calendar as CalendarIcon,
  X,
  CheckCircle2,
  HeartPulse,
  Flame,
  Zap
} from 'lucide-react';
import { getDias, TEMAS } from './data';

const MONTHS = [
  { name: 'Janeiro', days: 31 },
  { name: 'Fevereiro', days: 28 },
  { name: 'Março', days: 31 },
  { name: 'Abril', days: 30 },
  { name: 'Maio', days: 31 },
  { name: 'Junho', days: 30 },
  { name: 'Julho', days: 31 },
  { name: 'Agosto', days: 31 },
  { name: 'Setembro', days: 30 },
  { name: 'Outubro', days: 31 },
  { name: 'Novembro', days: 30 },
  { name: 'Dezembro', days: 31 },
];

export default function App() {
  const dias = useMemo(() => getDias(), []);
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('365diasUserName') || '';
  });
  const [tempName, setTempName] = useState('');
  const [hasEntered, setHasEntered] = useState(() => {
    return !!localStorage.getItem('365diasUserName');
  });
  
  const [diaAtual, setDiaAtual] = useState(() => {
    const saved = localStorage.getItem('365diasDia_v2');
    return saved ? Math.min(Math.max(parseInt(saved), 1), 365) : 1;
  });
  const [concluidos, setConcluidos] = useState<number[]>(() => {
    const saved = localStorage.getItem('365diasConcluidos');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [inputDia, setInputDia] = useState('');
  const [exameAnswers, setExameAnswers] = useState<Record<number, string>>(() => {
    const saved = localStorage.getItem('365diasExameAnswers');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('365diasDia_v2', diaAtual.toString());
    // Auto-mark as completed when viewing
    if (!concluidos.includes(diaAtual)) {
      setConcluidos(prev => {
        const next = [...prev, diaAtual];
        localStorage.setItem('365diasConcluidos', JSON.stringify(next));
        return next;
      });
    }
  }, [diaAtual, concluidos]);

  const dia = dias[diaAtual - 1];
  const tema = TEMAS[dia.tema];
  const totalConcluidos = concluidos.length;
  const progresso = Math.round((totalConcluidos / 365) * 100);

  const dataFormatada = useMemo(() => {
    const hoje = new Date();
    return new Intl.DateTimeFormat('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(hoje);
  }, []);

  const proximo = () => {
    if (diaAtual < 365) setDiaAtual(prev => prev + 1);
  };

  const anterior = () => {
    if (diaAtual > 1) setDiaAtual(prev => prev - 1);
  };

  const irParaDia = () => {
    const v = parseInt(inputDia);
    if (v >= 1 && v <= 365) {
      setDiaAtual(v);
      setInputDia('');
    } else {
      alert('Digite um dia entre 1 e 365.');
    }
  };

  const handleEnter = () => {
    if (tempName.trim()) {
      setUserName(tempName.trim());
      localStorage.setItem('365diasUserName', tempName.trim());
      setHasEntered(true);
    } else {
      alert('Por favor, digite seu nome para começar.');
    }
  };

  const handleExameChange = (val: string) => {
    setExameAnswers(prev => {
      const next = { ...prev, [diaAtual]: val };
      localStorage.setItem('365diasExameAnswers', JSON.stringify(next));
      return next;
    });
  };

  if (!hasEntered) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-8"
        >
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gold text-5xl mb-6"
            >
              ✦
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-lora text-4xl text-white tracking-tight"
            >
              Bem-vindo à Presença
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 leading-relaxed"
            >
              Prepare-se para uma jornada de 365 dias de renovação espiritual. 
              Para começarmos, como podemos te chamar?
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <input 
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleEnter()}
              placeholder="Seu nome"
              className="w-full bg-surface border border-border rounded-2xl px-6 py-4 text-center text-lg focus:outline-none focus:border-gold transition-all shadow-2xl"
              autoFocus
            />
            <button 
              onClick={handleEnter}
              className="w-full bg-gold text-bg py-4 rounded-2xl font-black text-lg hover:bg-yellow-500 transition-all shadow-lg shadow-gold/10"
            >
              Iniciar Jornada
            </button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-32 bg-bg text-slate-200">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border px-5 py-6 text-center">
        <div className="flex justify-between items-center max-w-2xl mx-auto mb-2">
          <div className="w-10" /> {/* Spacer */}
          <h1 className="font-lora text-2xl md:text-3xl text-gold tracking-tight">
            ✦ 365 Dias com Deus
          </h1>
          <button 
            onClick={() => setIsCalendarOpen(true)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border text-gold hover:bg-card transition-colors"
            title="Ver Calendário"
          >
            <CalendarIcon size={20} />
          </button>
        </div>
        <p className="text-xs text-slate-500 mb-4">
          Bem-vindo, <span className="text-gold font-bold">{userName}</span>. Sua jornada de fé continua.
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mb-1">
            <motion.div 
              className="h-full bg-gradient-to-r from-gold-dim to-gold"
              initial={{ width: 0 }}
              animate={{ width: `${progresso}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wider">
            <span>{totalConcluidos} de 365 concluídos</span>
            <span>{progresso}% concluído</span>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Quick Nav */}
        <div className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 mb-8">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">
            Ir para o dia:
          </label>
          <input 
            type="number" 
            min="1" 
            max="365"
            value={inputDia}
            onChange={(e) => setInputDia(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && irParaDia()}
            placeholder="1–365"
            className="flex-1 bg-slate-900 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold-dim transition-colors"
          />
          <button 
            onClick={irParaDia}
            className="bg-gold text-bg px-4 py-2 rounded-lg text-xs font-bold hover:bg-yellow-500 transition-colors flex items-center gap-1"
          >
            Ir <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Day Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={anterior}
            disabled={diaAtual <= 1}
            className="w-12 h-12 flex items-center justify-center rounded-xl border border-border bg-card text-slate-400 hover:text-white hover:border-slate-500 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-extrabold text-gold leading-none mb-1">
              {diaAtual}
            </div>
            <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-3">
              de 365
            </div>
            <motion.div 
              key={tema.nome}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]"
              style={{ backgroundColor: tema.bg, color: tema.cor }}
            >
              {tema.nome}
            </motion.div>
          </div>

          <button 
            onClick={proximo}
            disabled={diaAtual >= 365}
            className="w-12 h-12 flex items-center justify-center rounded-xl border border-border bg-card text-slate-400 hover:text-white hover:border-slate-500 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-center text-xs text-slate-500 mb-8 flex items-center justify-center gap-2">
          <CalendarIcon size={12} />
          {dataFormatada}
        </div>

        {/* Content Cards */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={diaAtual}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {/* Verse Card */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <BookOpen size={16} />
                </div>
                Versículo do Dia
              </div>
              <h3 className="font-lora font-bold text-blue-400 mb-2">{dia.ref}</h3>
              <p className="font-lora italic text-lg md:text-xl leading-relaxed text-slate-100">
                "{dia.texto}"
              </p>
            </div>

            {/* Reflection Card */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <MessageSquare size={16} />
                </div>
                Reflexão
              </div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {dia.reflexao}
              </p>
            </div>

            {/* Task Card */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <PenLine size={16} />
                </div>
                Prática do Dia
              </div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {dia.tarefa}
              </p>
            </div>

            {/* Exame de Consciência Card */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400">
                  <HeartPulse size={16} />
                </div>
                Exame de Consciência
              </div>
              <p className="text-slate-100 font-medium mb-4 text-sm md:text-base">
                {dia.exame}
              </p>
              <textarea 
                value={exameAnswers[diaAtual] || ''}
                onChange={(e) => handleExameChange(e.target.value)}
                placeholder="Escreva aqui sua resposta sincera... (apenas para você)"
                className="w-full bg-slate-900/50 border border-border rounded-xl p-4 text-sm text-slate-300 focus:outline-none focus:border-rose-500/50 transition-colors min-h-[100px] resize-none"
              />
            </div>

            {/* Dinâmica do Dia Card */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                  <Flame size={16} />
                </div>
                Dinâmica do Dia
              </div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {dia.dinamica}
              </p>
            </div>

            {/* Desafio de Impacto Card */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">
                <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                  <Zap size={16} />
                </div>
                Desafio de Impacto
              </div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {dia.desafio}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-bg via-bg to-transparent pointer-events-none">
        <div className="max-w-md mx-auto flex gap-4 pointer-events-auto">
          <button 
            onClick={anterior}
            disabled={diaAtual <= 1}
            className="flex-1 py-4 bg-card border border-border rounded-xl font-bold text-slate-400 hover:text-white disabled:opacity-20 transition-all flex items-center justify-center gap-2"
          >
            <ChevronLeft size={20} /> Anterior
          </button>
          <button 
            onClick={proximo}
            disabled={diaAtual >= 365}
            className="flex-1 py-4 bg-gold text-bg rounded-xl font-black hover:bg-yellow-500 disabled:opacity-20 transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold/10"
          >
            Próximo <ChevronRight size={20} />
          </button>
        </div>
      </nav>
      {/* Calendar Modal */}
      <AnimatePresence>
        {isCalendarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-xl overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto px-6 py-12">
              <div className="flex justify-between items-center mb-12">
                <div>
                  <h2 className="font-lora text-3xl text-gold mb-2">Jornada de Fé</h2>
                  <p className="text-slate-500 text-sm">Visualize seu progresso ao longo do ano</p>
                </div>
                <button 
                  onClick={() => setIsCalendarOpen(false)}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border text-slate-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {MONTHS.map((month, mIdx) => {
                  let startDay = 1;
                  for (let i = 0; i < mIdx; i++) {
                    startDay += MONTHS[i].days;
                  }

                  return (
                    <div key={month.name} className="relative">
                      <div className="flex items-baseline gap-3 mb-4">
                        <span className="font-lora text-4xl font-black text-slate-800/50 select-none">
                          {(mIdx + 1).toString().padStart(2, '0')}
                        </span>
                        <h3 className="font-bold text-lg text-slate-300 uppercase tracking-widest">
                          {month.name}
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-7 gap-2">
                        {Array.from({ length: month.days }).map((_, dIdx) => {
                          const dayNum = startDay + dIdx;
                          const isConcluido = concluidos.includes(dayNum);
                          const isAtual = diaAtual === dayNum;

                          return (
                            <button
                              key={dayNum}
                              onClick={() => {
                                setDiaAtual(dayNum);
                                setIsCalendarOpen(false);
                              }}
                              className={`
                                aspect-square rounded-lg text-[10px] font-bold transition-all flex items-center justify-center relative
                                ${isAtual ? 'bg-gold text-bg ring-4 ring-gold/20' : 
                                  isConcluido ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 
                                  'bg-card border border-border text-slate-600 hover:border-slate-400'}
                              `}
                            >
                              {dIdx + 1}
                              {isConcluido && !isAtual && (
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full border border-bg" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
