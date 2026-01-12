import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { StatItem } from '../types';

const statsData: StatItem[] = [
  { id: 1, label: "누적 수술 건수", value: 25483, suffix: "+" },
  { id: 2, label: "재활 치료 케이스", value: 8900, suffix: "+" },
  { id: 3, label: "고난이도 수술 성공률", value: 99, suffix: "%" },
  { id: 4, label: "보유 첨단 의료장비", value: 45, suffix: "종" },
];

const Counter: React.FC<{ value: number; suffix?: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      // Adjust duration based on value size for realistic speed
      const duration = 2000; 
      const incrementTime = Math.max(duration / end, 5); 
      
      const timer = setInterval(() => {
        start += Math.ceil(end / (duration / 10)); // Increment chunk
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 10);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif text-5xl md:text-6xl font-bold text-amber-400">
      {count.toLocaleString()}
      {suffix && <span className="text-3xl md:text-4xl ml-1 text-amber-200">{suffix}</span>}
    </span>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section id="stats" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
         <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] rounded-full bg-blue-900 blur-3xl mix-blend-screen"></div>
         <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full bg-amber-900 blur-3xl mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-2 block">Our Records</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            숫자로 증명하는 <br className="md:hidden" />
            <span className="text-amber-400">노블 메디컬 센터</span>의 실력
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            수만 건의 임상 경험을 바탕으로 반려동물에게 가장 안전하고 정확한 치료를 약속합니다.
            끊임없는 연구와 발전으로 최고의 결과를 만들어냅니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-lg text-center hover:border-amber-500/50 transition-colors group"
            >
              <div className="mb-4">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="h-px w-12 bg-slate-600 mx-auto mb-4 group-hover:bg-amber-500 transition-colors"></div>
              <h3 className="text-lg font-medium text-slate-300 group-hover:text-white transition-colors">
                {stat.label}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Highlighted Box for Surgery */}
        <div className="mt-16 p-8 bg-gradient-to-r from-amber-600 to-amber-800 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 transform hover:scale-[1.01] transition-transform duration-500">
           <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">고난이도 수술 전문 센터</h3>
              <p className="text-amber-100">대학병원급 멸균 시스템과 마취 전담의 상주로 가장 안전한 수술을 집도합니다.</p>
           </div>
           <a href="#contact" className="px-8 py-3 bg-white text-amber-700 font-bold rounded shadow hover:bg-amber-50 transition-colors whitespace-nowrap">
              수술 상담 예약하기
           </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;