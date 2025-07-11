import { type About } from '@/types/api_type';
import '@/app/styles/about.css';
import { MdGroups } from 'react-icons/md';
import { Lusitana } from '@next/font/google';

const lusitana = Lusitana({ subsets: ['latin'], weight: ['700'] });

interface AboutsSectionProps {
  data: About[];
}

export const AboutsSection = ({ data }: AboutsSectionProps) => (
  <section className="abouts-section" id="abouts">
    <div className="container">
      <h2 className={`abouts-section__title ${lusitana.className}`} style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8}}><MdGroups size={36}/> abouts Parceiras</h2>
      <div className="abouts-section__list">
        {data.map((about, idx) => (
          <div key={about.id + '-' + idx} className="abouts-section__card">
            <h3 className="abouts-section__card-title">{about.people}</h3>
            <p className="abouts-section__card-missao">&quot;{about.type}&quot;</p>
            <div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);