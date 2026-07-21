import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, ExternalLink, Sparkles, User, Link as LinkIcon, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

export const Admin: React.FC = () => {
  const [guestTitle, setGuestTitle] = useState('ඔබට');
  const [guestName, setGuestName] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) {
      toast.error('කරුණාකර නමක් ඇතුළත් කරන්න (Please enter a guest name)');
      return;
    }

    const baseUrl = window.location.origin;
    const params = new URLSearchParams();
    if (guestTitle) params.append('title', guestTitle);
    params.append('name', guestName.trim());

    const fullUrl = `${baseUrl}/sinhala?${params.toString()}`;
    setGeneratedUrl(fullUrl);
    setCopied(false);
    toast.success('ආරාධනා ලින්ක් එක සාර්ථකව සකස් කරන ලදී!');
  };

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      toast.success('ලින්ක් එක කොපි කරගන්නා ලදී!');
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      toast.error('ලින්ක් එක කොපි කිරීමට නොහැකි විය.');
    });
  };

  const generateFullMessage = (url: string, title: string, name: string) => {
    return `ආදරණීය ${name} ${title} ❤️

අපගේ ජීවිතයේ අතිශය විශේෂ දිනයක් වන විවාහ මංගල්යය සැමරීමටත්, අපගේ නව ජීවන ගමනේ ආරම්භය සමඟ සතුට බෙදා ගැනීමටත්, ඔබට උණුසුම් ආරාධනයක් පිරිනමන්නෙමු.

අපගේ විවාහ ආරාධනා පත්රය 🌐

${url}

ඔබගේ වටිනා පැමිණීම අපට මහත් සතුටක් වන අතර, මෙම සුන්දර මොහොත අප සමඟ එක්ව සැමරීමට ඔබ පැමිණෙනු ඇතැයි අපි ආදරයෙන් බලාපොරොත්තු වෙමු.

ආදරයෙන්,
❤️ රාජේෂ් & ඕෂිනි`;
  };

  const handleCopyMessageActive = () => {
    const msg = generateFullMessage(generatedUrl, guestTitle, guestName);
    navigator.clipboard.writeText(msg).then(() => {
      toast.success('සම්පූර්ණ පණිවිඩය කොපි කරගන්නා ලදී!');
    }).catch(() => {
      toast.error('පණිවිඩය කොපි කිරීමට නොහැකි විය.');
    });
  };

  return (
    <div className="min-h-screen bg-brand-blush py-12 px-4 sm:px-6 lg:px-8 font-sinhala-sans text-stone-800 relative overflow-hidden selection:bg-brand-plum/20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-radial from-brand-lavender/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <a 
            href="/sinhala" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border border-brand-lavender/40 text-stone-600 hover:text-brand-plum hover:bg-white transition-all shadow-sm font-medium text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            ආපසු ආරාධනාවට
          </a>
          <div className="flex gap-3">
            <a
              href="/admin"
              className="px-6 py-2 rounded-full bg-white border border-brand-lavender/30 text-stone-600 hover:text-brand-plum text-[11px] font-bold tracking-widest shadow-sm uppercase font-sans transition-all"
            >
              English
            </a>
            <span className="px-6 py-2 rounded-full bg-brand-rose border border-brand-lavender/30 text-brand-plum text-[11px] font-bold tracking-widest shadow-sm font-sinhala-sans">
              සිංහල
            </span>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-brand-plum animate-pulse" />
            <span className="text-brand-plum tracking-[0.2em] text-xs font-bold drop-shadow-sm font-sinhala-sans">ලින්ක් සැකසුම</span>
            <Sparkles className="w-5 h-5 text-brand-plum animate-pulse" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-sinhala-serif text-stone-800 tracking-tight mb-4 drop-shadow-sm">
            විවාහ ආරාධනා <span className="italic font-light text-brand-plum font-sinhala-serif">පාලක මණ්ඩලය</span>
          </h1>
          <p className="text-stone-500 font-sinhala-serif text-lg max-w-xl mx-auto">
            ඔබගේ අමුත්තන් සඳහා ආරාධනා ලින්ක් සකස් කරන්න.
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-[2rem] border border-white p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] relative z-10">
          <form onSubmit={handleGenerate} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-stone-500 ml-2 block">
                  ආරාධනා Prefix තේරීම
                </label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-plum/50 group-focus-within:text-brand-plum transition-colors" />
                  <select
                    className="w-full bg-white/80 pl-12 pr-6 py-4 rounded-full border border-stone-200/60 focus:ring-2 focus:ring-brand-lavender/30 focus:border-brand-plum/40 outline-none transition-all duration-300 appearance-none font-sinhala-serif text-lg shadow-inner text-stone-700 cursor-pointer"
                    value={guestTitle}
                    onChange={(e) => setGuestTitle(e.target.value)}
                  >
                    <option value="ඔබට">ඔබට</option>
                    <option value="ඔබ දෙපළට">ඔබ දෙපළට</option>
                    <option value="ඔබ සැමට">ඔබ සැමට</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs tracking-widest font-bold text-stone-500 ml-2 block font-sinhala-sans">
                  අමුත්තාගේ නම
                </label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-plum/50 group-focus-within:text-brand-plum transition-colors" />
                  <input
                    type="text"
                    required
                    placeholder="උදා: Sanjaya"
                    className="w-full bg-white/80 pl-12 pr-6 py-4 rounded-full border border-stone-200/60 focus:ring-2 focus:ring-brand-lavender/30 focus:border-brand-plum/40 outline-none transition-all duration-300 font-sinhala-serif text-lg shadow-inner placeholder:text-stone-300"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="bg-stone-800 text-brand-rose px-10 py-4 rounded-full font-sans tracking-[0.2em] font-bold text-xs uppercase hover:bg-stone-900 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] active:scale-[0.98] flex items-center justify-center gap-2 min-w-[240px]"
              >
                <LinkIcon className="w-4 h-4" />
                ලින්ක් එක සකසන්න
              </button>
            </div>
          </form>

          {generatedUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 pt-10 border-t border-brand-lavender/20"
            >
              <div className="bg-stone-50/80 rounded-2xl p-6 sm:p-8 border border-stone-200/50 shadow-inner">
                <h3 className="text-sm tracking-widest font-bold text-brand-plum mb-4 font-sinhala-sans">
                  සකස් කල ලින්ක් එක සූදානම්
                </h3>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 bg-white px-5 py-4 rounded-xl border border-stone-200 shadow-sm overflow-hidden flex items-center">
                    <p className="text-stone-600 font-mono text-sm truncate select-all">{generatedUrl}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopy(generatedUrl)}
                      className="flex-shrink-0 flex items-center justify-center gap-2 bg-brand-blush border border-brand-plum/20 hover:bg-brand-lavender/20 text-brand-plum px-6 py-4 rounded-xl font-medium transition-all shadow-sm group"
                      title="Copy URL only"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />}
                      <span className="font-sinhala-sans text-xs tracking-wider font-bold">ලින්ක් එක කොපි කරන්න</span>
                    </button>
                    <a
                      href={generatedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 flex items-center justify-center bg-stone-100 hover:bg-stone-200 text-stone-600 w-14 rounded-xl border border-stone-200 transition-all shadow-sm group"
                      title="Open link in new tab"
                    >
                      <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-white rounded-xl border border-brand-lavender/30 relative">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xs tracking-widest font-bold text-stone-500 font-sinhala-sans">පණිවිඩ පෙරදසුන</h4>
                    <button
                      onClick={handleCopyMessageActive}
                      className="flex items-center gap-2 text-brand-plum hover:text-brand-plum/80 text-xs font-bold tracking-widest bg-brand-blush px-4 py-2 rounded-lg border border-brand-plum/20 hover:bg-brand-lavender/20 transition-all font-sinhala-sans"
                    >
                      <Copy className="w-3 h-3" /> සම්පූර්ණ පණිවිඩය කොපි කරන්න
                    </button>
                  </div>
                  <div className="font-sinhala-serif text-stone-700 whitespace-pre-wrap leading-relaxed text-sm bg-stone-50/50 p-4 rounded-lg border border-stone-100">
                    {generateFullMessage(generatedUrl, guestTitle, guestName)}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
