// components/CaseStudiesSection.tsx
'use client';

import CaseStudyCard, { CaseStudy } from './CaseStudyCard';

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  return (
    <section className="container mx-auto py-5">
      <h2 className="text-[30px] sm:text-[35px] md:text-[45px] lg:text-[55px] text-white font-medium text-center mb-16">
        НАШІ КЕЙСИ
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
}
