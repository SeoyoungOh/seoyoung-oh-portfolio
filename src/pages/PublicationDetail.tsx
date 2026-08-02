import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import { Footer } from '../components/Footer';
import { Isbi2026Content } from '../components/isbi2026/Isbi2026Content';
import { Eccv2026Content } from '../components/eccv2026/Eccv2026Content';
import { Isbi2024Content } from '../components/isbi2024/Isbi2024Content';
import {
  ArrowLeft,
  BookOpen,
  FileText,
  ExternalLink,
  Mic,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  Layers,
} from 'lucide-react';

export const PublicationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const pub = portfolioData.publications.find((p) => p.slug === slug);

  useEffect(() => {
    if (pub) {
      document.title = `${pub.title} | Seoyoung Oh Portfolio`;
    }
  }, [pub]);

  if (!pub || pub.visible === false) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-[#FBFBFF] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold text-[#20243C] mb-4">Publication Not Found</h1>
        <p className="text-base text-[#626A7C] mb-8">The requested publication dispatch could not be found.</p>
        <Link
          to="/#publications"
          className="bg-[#20243C] text-[#FBFBFF] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-[#9091DF] transition-colors"
        >
          Return to Publications
        </Link>
      </div>
    );
  }

  // Related project case study lookup
  const relatedCaseStudy = pub.projectSlug
    ? portfolioData.caseStudies.find((c) => c.slug === pub.projectSlug)
    : null;

  const hasPaperUrl = Boolean(pub.paperUrl && pub.paperUrl.trim() !== '');
  const hasLocalPaper = Boolean(pub.localPaperPath && pub.localPaperPath.trim() !== '');
  const hasDoi = Boolean(pub.doiUrl && pub.doiUrl.trim() !== '');
  const hasProceedings = Boolean(pub.proceedingsUrl && pub.proceedingsUrl.trim() !== '');
  const hasPresentation = Boolean(pub.presentationUrl && pub.presentationUrl.trim() !== '');

  return (
    <div className="min-h-screen bg-[#FBFBFF] pt-24 pb-16">
      
      {/* Top Header & Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        
        <button
          onClick={() => navigate('/#publications')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#626A7C] hover:text-[#20243C] transition-colors mb-6 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9091DF] rounded-md py-1"
        >
          <ArrowLeft className="w-4 h-4 text-[#9091DF]" />
          <span>Back to Publications</span>
        </button>

        {/* Badges & Category */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#A0A1F8]/15 text-[#20243C] border border-[#A0A1F8]/30">
            {pub.category}
          </span>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA]">
            {pub.status}
          </span>
          {pub.presentationType && (
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#B9E0FC] text-[#20243C] border border-[#A6C9E2] flex items-center gap-1">
              {pub.presentationType === 'Oral' && <Mic className="w-3.5 h-3.5" />}
              {pub.presentationType === 'Poster' && <BookOpen className="w-3.5 h-3.5" />}
              {pub.presentationType === 'Journal' && <FileCheck className="w-3.5 h-3.5" />}
              <span>{pub.presentationType} Presentation</span>
            </span>
          )}
          <span className="text-xs font-semibold text-[#626A7C]">
            {pub.venue} ({pub.year})
          </span>
        </div>

        {/* Full Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#20243C] tracking-tight leading-tight mb-6">
          {pub.title}
        </h1>

        {/* Authors List */}
        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#D9DDEE] mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#626A7C] block mb-2">
            AUTHORS:
          </span>
          <p className="text-sm font-semibold text-[#20243C]">
            {pub.authors.map((author, idx) => (
              <React.Fragment key={idx}>
                {author === 'Seoyoung Oh' ? (
                  <span className="font-extrabold text-[#20243C] underline decoration-[#9091DF] underline-offset-4 bg-[#A0A1F8]/20 px-1 py-0.5 rounded">
                    {author}
                  </span>
                ) : (
                  <span>{author}</span>
                )}
                {idx < pub.authors.length - 1 ? ', ' : ''}
              </React.Fragment>
            ))}
          </p>
        </div>

        {/* Action Link Bar */}
        {(hasPaperUrl || hasLocalPaper || hasDoi || hasProceedings || hasPresentation || relatedCaseStudy) && (
          <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-[#20243C] text-[#FBFBFF] mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A0A1F8] mr-2">
              Access & Media:
            </span>

            {hasPaperUrl && (
              <a
                href={pub.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#A0A1F8] text-[#20243C] px-4 py-2 rounded-lg hover:bg-[#B6BAFA] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Read Paper</span>
              </a>
            )}

            {hasLocalPaper && (
              <a
                href={pub.localPaperPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#B9E0FC] text-[#20243C] px-4 py-2 rounded-lg hover:bg-[#A6C9E2] transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            )}

            {hasDoi && (
              <a
                href={pub.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#DFF8E1] text-[#20243C] px-4 py-2 rounded-lg hover:bg-[#C8DFCA] transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Publisher DOI</span>
              </a>
            )}

            {hasProceedings && (
              <a
                href={pub.proceedingsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#B6BAFA] text-[#20243C] px-4 py-2 rounded-lg hover:bg-[#A0A1F8] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Conference Proceedings</span>
              </a>
            )}

            {hasPresentation && (
              <a
                href={pub.presentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#DFF8E1] text-[#20243C] px-4 py-2 rounded-lg hover:bg-[#C8DFCA] transition-colors"
              >
                <Mic className="w-3.5 h-3.5" />
                <span>Presentation Slides</span>
              </a>
            )}

            {relatedCaseStudy && (
              <Link
                to={`/work/${relatedCaseStudy.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#FBFBFF] text-[#20243C] px-4 py-2 rounded-lg hover:bg-[#A0A1F8] transition-colors"
              >
                <Layers className="w-3.5 h-3.5 text-[#9091DF]" />
                <span>View Full Case Study</span>
              </Link>
            )}
          </div>
        )}

        {/* Content Sections */}
        {pub.slug === 'multimap-fusion' ? (
          <Isbi2026Content />
        ) : pub.slug === 'reliable-normal-projection' ? (
          <Eccv2026Content />
        ) : pub.slug === 'brainstem-segmentation' ? (
          <Isbi2024Content />
        ) : (
          <div className="space-y-8">
            
            {/* Research Problem */}
            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-3">
                RESEARCH PROBLEM
              </h2>
              <p className="text-base text-[#20243C] font-medium leading-relaxed">
                {pub.problem}
              </p>
            </div>

            {/* Core Contribution */}
            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-3">
                CORE SCIENTIFIC CONTRIBUTION
              </h2>
              <p className="text-base text-[#20243C] font-semibold leading-relaxed">
                {pub.contribution}
              </p>
            </div>

            {/* Representative Results */}
            {pub.representativeResults && pub.representativeResults.length > 0 && (
              <div className="bg-[#20243C] text-[#FBFBFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]/20">
                <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#DFF8E1] mb-4">
                  REPRESENTATIVE RESULTS & VERIFIED METRICS
                </h2>
                <ul className="space-y-3">
                  {pub.representativeResults.map((res, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-[#FBFBFF] bg-[#181A2D] p-3.5 rounded-xl border border-[#A0A1F8]/20">
                      <CheckCircle2 className="w-4 h-4 text-[#DFF8E1] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Why It Matters */}
            <div className="bg-[#B9E0FC]/20 p-6 sm:p-8 rounded-2xl border border-[#A6C9E2]/50">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-3">
                WHY IT MATTERS
              </h2>
              <p className="text-sm text-[#20243C] font-semibold italic leading-relaxed">
                “{pub.whyItMatters}”
              </p>
            </div>

            {/* Limitations & Interpretation Boundaries */}
            <div className="bg-[#FBFBFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#626A7C] mb-3">
                <AlertTriangle className="w-4 h-4 text-[#9091DF]" />
                <span>LIMITATIONS & INTERPRETATION BOUNDARIES</span>
              </div>
              <p className="text-sm font-medium text-[#20243C] leading-relaxed">
                {pub.limitations}
              </p>
            </div>

          </div>
        )}

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-[#D9DDEE] flex items-center justify-between">
          <Link
            to="/#publications"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#20243C] hover:text-[#9091DF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Publications</span>
          </Link>
        </div>

      </div>

      <Footer />
    </div>
  );
};
