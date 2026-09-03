import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import {
  ArrowLeft,
  ArrowRight,
  Play,
  FileText,
  Building2,
  Users,
  Calendar,
  ExternalLink,
  Download,
  Sparkles,
  Layers,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { Footer } from '../components/Footer';

export const PhDHubPage: React.FC = () => {
  const { phd, publications } = portfolioData;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Match the 3 PhD publications directly from portfolioData
  const phdPublications = publications.filter((p) =>
    ['pub-1', 'pub-2', 'pub-3'].includes(p.id)
  );

  return (
    <div className="min-h-screen bg-[#FBFBFF] text-[#20243C] flex flex-col pt-20">
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-[#D9DDEE]/60 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#626A7C] hover:text-[#20243C] transition-colors focus-visible:outline-2 focus-visible:outline-[#9091DF] rounded-md px-1"
          >
            <ArrowLeft className="w-4 h-4 text-[#9091DF]" />
            <span>Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#A0A1F8]/15 text-[#20243C] border border-[#A0A1F8]/30">
              <Sparkles className="w-3 h-3 text-[#9091DF]" />
              PhD Research Hub
            </span>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* ====================================================================
            SECTION 1: HERO
        ==================================================================== */}
        <section className="py-16 sm:py-20 border-b border-[#D9DDEE]/60 bg-gradient-to-b from-[#FFFFFF] to-[#FBFBFF]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A0A1F8]/15 border border-[#A0A1F8]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#9091DF] animate-pulse" />
              <span className="text-xs font-extrabold tracking-widest text-[#20243C] uppercase">
                {phd.hero.eyebrow}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#20243C] tracking-tight leading-tight mb-4">
              {phd.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-bold text-[#9091DF] mb-8 leading-snug">
              {phd.hero.subtitle}
            </p>

            {/* Short Description */}
            <div className="space-y-4 text-base sm:text-lg text-[#626A7C] leading-relaxed max-w-4xl mb-10">
              <p>
                My doctoral research investigates how clinically meaningful spatial evidence can be
                extracted from brain MRI when precise voxel-level annotations are scarce or unavailable.
              </p>
              <p>
                Starting from supervised brainstem segmentation, the research progressively moves
                toward annotation-efficient disease localization through weak supervision and
                healthy-only normal modeling.
              </p>
            </div>

            {/* Institutions Chips */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#626A7C] mb-3">
                <Building2 className="w-3.5 h-3.5 text-[#9091DF]" />
                <span>Affiliated Institutions & Laboratories</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {phd.hero.institutions.map((inst, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold bg-[#FFFFFF] border border-[#D9DDEE] text-[#20243C] shadow-2xs"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>

            {/* Supervision Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] shadow-2xs mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#9091DF] block mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#9091DF]" />
                  <span>Thesis Supervisors</span>
                </span>
                <p className="text-sm font-bold text-[#20243C]">
                  {phd.hero.supervisors.join(' · ')}
                </p>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#9091DF] block mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#9091DF]" />
                  <span>Co-Supervisors</span>
                </span>
                <p className="text-sm font-bold text-[#20243C]">
                  {phd.hero.cosupervisors.join(' · ')}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/phd/presentation"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#20243C] text-[#FFFFFF] text-sm font-bold hover:bg-[#9091DF] transition-all shadow-sm group focus-visible:outline-2 focus-visible:outline-[#9091DF]"
              >
                <Play className="w-4 h-4 fill-current text-[#DFF8E1] group-hover:scale-110 transition-transform" />
                <span>View Thesis Presentation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#D9DDEE]/40 border border-[#D9DDEE] text-[#626A7C] text-sm font-medium cursor-not-allowed">
                <FileText className="w-4 h-4 text-[#626A7C]" />
                <span>Read Thesis (Available upon defense · 24 Sept 2026)</span>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION 2: RESEARCH TRAJECTORY
        ==================================================================== */}
        <section className="py-20 border-b border-[#D9DDEE]/60 bg-[#FBFBFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9091DF] block mb-2">
                {phd.journey.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#20243C] tracking-tight mb-4">
                {phd.journey.headline}
              </h2>
              <div className="p-4 rounded-xl bg-[#A0A1F8]/10 border-l-4 border-[#9091DF] text-sm sm:text-base font-medium text-[#20243C] italic">
                “{phd.journey.progressionQuestion}”
              </div>
            </div>

            {/* Conceptual Progression Stepper */}
            <div className="mb-12 p-6 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#626A7C] block mb-4">
                Conceptual Progression of Annotation Scarcity
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {phd.journey.progressionStages.map((st, idx) => (
                  <div
                    key={st.number}
                    className="relative flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE]"
                  >
                    <span className="w-8 h-8 rounded-lg bg-[#A0A1F8]/20 text-[#20243C] text-xs font-black flex items-center justify-center shrink-0">
                      {st.number}
                    </span>
                    <div>
                      <span className="text-xs font-bold text-[#9091DF] block uppercase tracking-wider">
                        {st.label}
                      </span>
                      <span className="text-sm font-extrabold text-[#20243C]">
                        {st.stage}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Research Work Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {phd.researchWorks.map((work) => (
                <div
                  key={work.id}
                  className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#D9DDEE] hover:border-[#9091DF] hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Meta: Number & Category */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-black px-2.5 py-1 rounded-md bg-[#20243C] text-[#FFFFFF]">
                        {work.number}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#A0A1F8]/15 text-[#20243C] border border-[#A0A1F8]/30">
                        {work.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-black text-[#20243C] group-hover:text-[#9091DF] transition-colors mb-3 leading-snug">
                      {work.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-[#626A7C] leading-relaxed mb-5">
                      {work.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {work.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#FBFBFF] text-[#20243C] border border-[#D9DDEE]/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-[#D9DDEE]/60">
                    <Link
                      to={work.route}
                      className="inline-flex items-center justify-between w-full text-xs font-extrabold text-[#20243C] group-hover:text-[#9091DF] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#9091DF] rounded"
                    >
                      <span>Explore work</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION 3: SELECTED PhD PUBLICATIONS
        ==================================================================== */}
        <section className="py-20 border-b border-[#D9DDEE]/60 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9091DF] block mb-2">
                PEER-REVIEWED EVIDENCE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#20243C] tracking-tight mb-4">
                Selected PhD Publications
              </h2>
              <p className="text-sm sm:text-base text-[#626A7C]">
                Peer-reviewed conference and workshop publications directly documenting the three stages of
                the doctoral research trajectory.
              </p>
            </div>

            <div className="space-y-6">
              {phdPublications.map((pub) => {
                // Find matching research work
                const matchingWork = phd.researchWorks.find(
                  (w) => w.publicationSlug === pub.slug
                );

                return (
                  <div
                    key={pub.id}
                    className="p-6 sm:p-8 rounded-2xl bg-[#FBFBFF] border border-[#D9DDEE] hover:border-[#9091DF] transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#20243C] text-[#FFFFFF]">
                          {pub.year}
                        </span>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#A0A1F8]/15 text-[#20243C] border border-[#A0A1F8]/30">
                          {pub.venue}
                        </span>
                        {pub.presentationType && (
                          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA]">
                            {pub.presentationType === 'Oral'
                              ? 'Oral Presentation'
                              : pub.presentationType === 'Poster'
                              ? 'Poster Presentation'
                              : `${pub.presentationType} Presentation`}
                          </span>
                        )}
                      </div>

                      {matchingWork && (
                        <Link
                          to={matchingWork.route}
                          className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#9091DF] hover:text-[#20243C] transition-colors"
                        >
                          <span>Part of Research Work {matchingWork.number}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-[#20243C] mb-3 leading-snug">
                      {pub.title}
                    </h3>

                    {/* Authors */}
                    <p className="text-xs sm:text-sm text-[#626A7C] mb-5 leading-relaxed">
                      {pub.authors.map((author, aIdx) => (
                        <span
                          key={aIdx}
                          className={
                            author.includes('Seoyoung Oh')
                              ? 'font-bold text-[#20243C] underline decoration-[#9091DF] decoration-2 underline-offset-2'
                              : 'text-[#626A7C]'
                          }
                        >
                          {author}
                          {aIdx < pub.authors.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#D9DDEE]/60">
                      <Link
                        to={`/publications/${pub.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FFFFFF] border border-[#D9DDEE] hover:border-[#9091DF] text-xs font-bold text-[#20243C] transition-colors shadow-2xs"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#9091DF]" />
                        <span>View Publication Details</span>
                      </Link>

                      {matchingWork && (
                        <Link
                          to={matchingWork.route}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#A0A1F8]/15 hover:bg-[#A0A1F8]/25 text-xs font-bold text-[#20243C] transition-colors"
                        >
                          <Layers className="w-3.5 h-3.5 text-[#9091DF]" />
                          <span>Explore PhD Research Work</span>
                        </Link>
                      )}

                      {(pub.localPaperPath || pub.paperUrl) && (
                        <a
                          href={pub.localPaperPath || pub.paperUrl}
                          download
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FFFFFF] border border-[#D9DDEE] hover:border-[#9091DF] text-xs font-bold text-[#626A7C] hover:text-[#20243C] transition-colors shadow-2xs"
                        >
                          <Download className="w-3.5 h-3.5 text-[#9091DF]" />
                          <span>PDF</span>
                        </a>
                      )}

                      {pub.doiUrl && (
                        <a
                          href={pub.doiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FFFFFF] border border-[#D9DDEE] hover:border-[#9091DF] text-xs font-bold text-[#626A7C] hover:text-[#20243C] transition-colors shadow-2xs"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-[#9091DF]" />
                          <span>DOI</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
export default PhDHubPage;
