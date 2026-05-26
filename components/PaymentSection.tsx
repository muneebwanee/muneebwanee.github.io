import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Bitcoin, Smartphone, MessageCircle, Zap, Mail, Shield } from 'lucide-react';

export const PaymentSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const btcAddress = "36QW21MQQxUK7ohBQnvP5itipe4bFx91Bo";
  const contactEmail = "i@muneeb.eu.org";
  const upiId = "muneeb.mushtaq@feferal";
  const name = "Muneeb Wani";

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleTributeClick = () => {
    window.location.href = `mailto:${contactEmail}?subject=I have sent a tribute&body=I have sent a payment via Bitcoin/UPI. %0D%0A%0D%0ATransaction Details:%0D%0A`;
  };

  return (
    <section id="pay" className="py-32 px-4 relative overflow-hidden bg-black">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
       <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand-orange opacity-20 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter"
          >
            Settle The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-600">Score</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Quality isn't free. I am simply generous enough to let you pay later. <br/>
            <span className="text-white font-bold">That time is now.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* INR / UPI Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-1 rounded-3xl group"
          >
            <div className="bg-[#0A0A0A] rounded-[22px] p-8 h-full flex flex-col relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
               
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Direct Transfer</h3>
                    <p className="text-xs text-gray-500 font-mono">UPI • IMPS • NEFT</p>
                  </div>
               </div>

               <div className="flex-1 flex flex-col justify-center mb-8">
                  
                  {/* UPI ID Section - Restored as necessary detail */}
                  <div 
                    onClick={() => copyToClipboard(upiId, 'upi')}
                    className="bg-[#111] border border-white/10 p-4 rounded-xl mb-4 cursor-pointer hover:border-blue-500/50 transition-all group/upi"
                  >
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">UPI ID (VPA)</span>
                        <span className="bg-blue-500/10 text-blue-400 text-[10px] px-2 py-0.5 rounded font-bold uppercase">Fastest</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-lg text-white font-mono">{upiId}</div>
                        {copiedKey === 'upi' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-600 group-hover/upi:text-white" />}
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center mb-6">
                    <Shield className="w-10 h-10 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400 text-sm mb-2">
                      Banking details are available upon request.
                    </p>
                    <p className="text-xs text-gray-600 font-mono uppercase tracking-wider">
                      Private & Secured
                    </p>
                  </div>

                  <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 hover:bg-blue-500/20 transition-all cursor-pointer group/email" onClick={() => copyToClipboard(contactEmail, 'email')}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-mono text-blue-400 flex items-center gap-2">
                        <Mail className="w-3 h-3" /> EMAIL ADDRESS
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-white font-mono break-all">{contactEmail}</span>
                      {copiedKey === 'email' ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-gray-500 group-hover/email:text-white" />}
                    </div>
                  </div>
               </div>

               <div className="flex justify-between items-center text-sm text-gray-400 border-t border-white/10 pt-4 mt-auto">
                  <span>Name: <strong className="text-white">{name}</strong></span>
                  <div className="flex items-center gap-2 text-xs text-blue-400">
                      <MessageCircle className="w-3 h-3" /> Contact for details
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Crypto Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-1 rounded-3xl group"
          >
            <div className="bg-[#0A0A0A] rounded-[22px] p-8 h-full flex flex-col relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl group-hover:bg-brand-orange/20 transition-all"></div>

               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                    <Bitcoin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Bitcoin</h3>
                    <p className="text-xs text-gray-500 font-mono">BTC • NETWORK</p>
                  </div>
               </div>

               <div className="flex-1 flex flex-col items-center justify-center mb-8">
                  <div className="bg-white p-3 rounded-2xl shadow-[0_0_20px_rgba(255,165,0,0.2)] mb-8 group-hover:scale-105 transition-transform">
                     <img 
                       src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${btcAddress}`} 
                       alt="Bitcoin QR Code" 
                       className="w-40 h-40"
                     />
                  </div>
                  <div className="w-full relative group/copy">
                    <label className="text-[10px] text-brand-orange font-mono mb-1 block text-center uppercase tracking-widest">Wallet Address</label>
                    <div 
                      onClick={() => copyToClipboard(btcAddress, 'btc')}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 font-mono text-sm text-center text-gray-300 cursor-pointer hover:border-brand-orange/50 hover:text-white transition-colors break-all"
                    >
                      {btcAddress}
                    </div>
                    <div className="text-center mt-2">
                      {copiedKey === 'btc' ? 
                        <span className="text-xs text-green-400 flex items-center justify-center gap-1"><Check className="w-3 h-3" /> Copied</span> : 
                        <span className="text-xs text-gray-600">Click to copy</span>
                      }
                    </div>
                  </div>
               </div>

               <button 
                 onClick={handleTributeClick}
                 className="w-full py-4 bg-gradient-to-r from-brand-orange to-red-600 text-white rounded-xl font-bold hover:shadow-[0_0_20px_rgba(255,77,0,0.4)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
               >
                 <Zap className="w-4 h-4" /> I HAVE SENT TRIBUTE
               </button>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-xs font-mono text-gray-600 tracking-[0.3em] uppercase">
                Join the Digital Army
            </p>
        </div>
      </div>
    </section>
  );
};