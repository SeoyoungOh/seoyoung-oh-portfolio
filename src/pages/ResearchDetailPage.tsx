import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  Download,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  Layers,
  Calendar,
} from 'lucide-react';
import { Footer } from '../components/Footer';

export const ResearchDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { phd, publications } = portfolioData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const currentWorkIndex = phd.researchWorks.findIndex((w) => w.slug === slug);
  const work = currentWorkIndex !== -1 ? phd.researchWorks[currentWorkIndex] : null;

  if (!work) {
    return (
      <div className="min-h-screen bg-[#FBFBFF] text-[#20243C] flex flex-col items-center justify-center p-6 pt-24">
        <div className="max-w-md w-full bg-[#FFFFFF] p-8 rounded-2xl border border-[#D9DDEE] text-center shadow-sm">
          <AlertCircle className="w-12 h-12 text-[#9091DF] mx-auto mb-4" />
          <h1 className="text-xl font-black text-[#20243C] mb-2">Research Work Not Found</h1>
          <p className="text-sm text-[#626A7C] mb-6">
            The requested PhD research detail page could not be located.
          </p>
          <Link
            to="/phd"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#20243C] text-[#FFFFFF] text-xs font-bold hover:bg-[#9091DF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to PhD Hub</span>
          </Link>
        </div>
      </div>
    );
  }

  const prevWork = currentWorkIndex > 0 ? phd.researchWorks[currentWorkIndex - 1] : null;
  const nextWork =
    currentWorkIndex < phd.researchWorks.length - 1
      ? phd.researchWorks[currentWorkIndex + 1]
      : null;

  const associatedPub = publications.find((p) => p.slug === work.publicationSlug);

  return (
    <div className="min-h-screen bg-[#FBFBFF] text-[#20243C] flex flex-col pt-20">
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-[#D9DDEE]/60 bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <Link
            to="/phd"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#626A7C] hover:text-[#20243C] transition-colors focus-visible:outline-2 focus-visible:outline-[#9091DF] rounded-md px-1"
          >
            <ArrowLeft className="w-4 h-4 text-[#9091DF]" />
            <span>Back to PhD Research Hub</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#626A7C]">
              Work {work.number} of {phd.researchWorks.length}
            </span>
          </div>
        </div>
      </div>

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="text-xs font-black px-2.5 py-1 rounded-md bg-[#20243C] text-[#FFFFFF]">
                WORK {work.number}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#A0A1F8]/15 text-[#20243C] border border-[#A0A1F8]/30">
                {work.category}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#B9E0FC]/25 text-[#20243C]">
                Progression: {work.progressionStage}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#20243C] tracking-tight leading-tight mb-4">
              {work.title}
            </h1>

            <p className="text-base sm:text-lg text-[#626A7C] leading-relaxed mb-6">
              {work.summary}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold px-3 py-1 rounded-lg bg-[#FFFFFF] text-[#20243C] border border-[#D9DDEE] shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Core Content Grid */}
          <div className="space-y-8">
            
            {/* Section: Problem */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] shadow-2xs">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#9091DF] block mb-2">
                CHALLENGE
              </span>
              <h2 className="text-xl font-black text-[#20243C] mb-3">
                Problem
              </h2>
              <p className="text-sm sm:text-base text-[#626A7C] leading-relaxed">
                {work.problem}
              </p>
            </div>

            {/* Section: Why It Matters */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] shadow-2xs">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#9091DF] block mb-2">
                RATIONALE
              </span>
              <h2 className="text-xl font-black text-[#20243C] mb-3">
                Why It Matters
              </h2>
              <p className="text-sm sm:text-base text-[#626A7C] leading-relaxed">
                {work.whyItMatters}
              </p>
            </div>

            {/* Section: Approach */}
            {work.approach && work.approach.length > 0 && (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] shadow-2xs">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#9091DF] block mb-2">
                  METHODOLOGY
                </span>
                <h2 className="text-xl font-black text-[#20243C] mb-4">
                  Approach
                </h2>
                <ul className="space-y-2.5">
                  {work.approach.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#20243C]">
                      <span className="w-5 h-5 rounded-full bg-[#A0A1F8]/20 text-[#20243C] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Section: Key Results */}
            {work.keyResults && work.keyResults.length > 0 && (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] shadow-2xs">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#9091DF] block mb-2">
                  EMPIRICAL EVIDENCE
                </span>
                <h2 className="text-xl font-black text-[#20243C] mb-4">
                  Key Results
                </h2>
                <div className="space-y-2.5">
                  {work.keyResults.map((result, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#9091DF] shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-semibold text-[#20243C] leading-relaxed">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section: What We Learned */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] shadow-2xs">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#9091DF] block mb-2">
                INSIGHTS & PERSPECTIVES
              </span>
              <h2 className="text-xl font-black text-[#20243C] mb-4">
                What We Learned
              </h2>
              {work.whatWeLearned && work.whatWeLearned.length > 0 ? (
                <ul className="space-y-2">
                  {work.whatWeLearned.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#626A7C]">
                      <span className="text-[#9091DF]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] text-xs sm:text-sm font-medium text-[#626A7C] italic text-center">
                  Detailed research narrative will be added here.
                </div>
              )}
            </div>

            {/* Section: Associated Peer-Reviewed Publication */}
            {associatedPub && (
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FFFFFF] to-[#FBFBFF] border-2 border-[#9091DF]/40 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-[#9091DF]" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#9091DF]">
                    Associated Peer-Reviewed Publication
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-extrabold px-2.5 py-0.5 rounded bg-[#20243C] text-[#FFFFFF]">
                    {associatedPub.year}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-[#A0A1F8]/15 text-[#20243C] border border-[#A0A1F8]/30">
                    {associatedPub.venue}
                  </span>
                  {associatedPub.presentationType && (
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA]">
                      {associatedPub.presentationType === 'Oral'
                        ? 'Oral Presentation'
                        : associatedPub.presentationType === 'Poster'
                        ? 'Poster Presentation'
                        : `${associatedPub.presentationType} Presentation`}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-black text-[#20243C] mb-2 leading-snug">
                  {associatedPub.title}
                </h3>

                <p className="text-xs text-[#626A7C] mb-5 leading-relaxed">
                  {associatedPub.authors.join(', ')}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#D9DDEE]/60">
                  <Link
                    to={`/publications/${associatedPub.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#20243C] hover:bg-[#9091DF] text-xs font-bold text-[#FFFFFF] transition-colors shadow-2xs"
                  >
                    <span>View Publication Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {(associatedPub.localPaperPath || associatedPub.paperUrl) && (
                    <a
                      href={associatedPub.localPaperPath || associatedPub.paperUrl}
                      download
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FFFFFF] border border-[#D9DDEE] hover:border-[#9091DF] text-xs font-bold text-[#20243C] transition-colors shadow-2xs"
                    >
                      <Download className="w-3.5 h-3.5 text-[#9091DF]" />
                      <span>Download PDF</span>
                    </a>
                  )}

                  {associatedPub.doiUrl && (
                    <a
                      href={associatedPub.doiUrl}
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
            )}

          </div>

          {/* Trajectory Navigation Footer */}
          <div className="mt-14 pt-8 border-t border-[#D9DDEE] flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevWork ? (
              <Link
                to={prevWork.route}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#20243C] hover:text-[#9091DF] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Work {prevWork.number}: {prevWork.category}</span>
              </Link>
            ) : (
              <div />
            )}

            <Link
              to="/phd"
              className="px-4 py-2 rounded-lg bg-[#FFFFFF] border border-[#D9DDEE] hover:border-[#9091DF] text-xs font-bold text-[#20243C] transition-colors shadow-2xs"
            >
              PhD Research Hub Overview
            </Link>

            {nextWork ? (
              <Link
                to={nextWork.route}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#20243C] hover:text-[#9091DF] transition-colors"
              >
                <span>Work {nextWork.number}: {nextWork.category}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
export default ResearchDetailPage;
