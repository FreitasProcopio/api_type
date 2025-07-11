'use client';
import { AboutsSection } from "./sections_page/AboutSections";
import { FaqSection } from "./sections_page/FaqSections";
import { useRef } from 'react';
import {type About, type FAQ } from '@/types/api_type';
import { motion } from 'framer-motion';

export default function SelectedSection({abouts,faqs }: {
  abouts: About[];
  faqs: FAQ[];
}) {
  return (
    <main className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <AboutsSection data={abouts} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        >
        <FaqSection data={faqs} />
      </motion.div>
    </main>
  );
} 