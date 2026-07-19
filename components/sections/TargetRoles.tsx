"use client";

import { motion } from "framer-motion";

const roles = [
  "💻 Software Engineering",
  "📱 Product Management",
  "🎨 UI/UX Design",
  "🤖 Data & AI",
  "📣 Marketing",
  "🤝 Sales & Business Development",
  "📦 Operations",
  "💬 Customer Success",
  "👥 Human Resources (HR)",
  "📊 Finance & Accounting",
];

export function TargetRoles() {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-4">
            IS THIS FOR YOU?
          </p>
          <h2 className="text-3xl font-semibold tracking-tighter text-white sm:text-4xl mb-4">
            Built for Remote Startup Careers on Wellfound
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            This session is designed for students, freshers, and professionals targeting remote startup opportunities on Wellfound. If you're aiming for one of the roles below, we'll help you build a personalized strategy.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-zinc-300 hover:bg-white/[0.05] hover:border-white/[0.12] transition-colors"
            >
              {role}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-zinc-600 max-w-xl mx-auto leading-relaxed"
        >
          This session focuses on career paths that are actively available on Wellfound. If your target profession isn't commonly represented on Wellfound, this session may not be the right fit.
        </motion.p>
      </div>
    </section>
  );
}
