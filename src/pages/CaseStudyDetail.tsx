import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Footer } from '../components/Footer';
import {
  ArrowLeft,
  HelpCircle,
  AlertTriangle,
  CheckCircle2,
  FileText,
  ExternalLink,
  BookOpen,
  Award,
  Layers,
} from 'lucide-react';

import { WeaklySupervisedDetail } from './WeaklySupervisedDetail';
import { ReliableNormalProjectionDetail } from './ReliableNormalProjectionDetail';
import { BrainstemSegmentationDetail } from './BrainstemSegmentationDetail';

export const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  if (slug === 'weakly-supervised-localization') {
    return <WeaklySupervisedDetail />;
  }

  if (slug === 'reliable-normal-projection') {
    return <ReliableNormalProjectionDetail />;
  }

  if (slug === 'brainstem-segmentation') {
    return <BrainstemSegmentationDetail />;
  }

  const study = portfolioData.caseStudies.find((c) => c.slug === slug);

  useEffect(() => {
    if (study) {
      document.title = `${study.title} | Seoyoung Oh Portfolio`;
    }
  }, [study]);

  if (!study || study.visible === false) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-[#FBFBFF] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold text-[#20243C] mb-4">Case Study Not Found</h1>
        <p className="text-base text-[#626A7C] mb-8">The requested case study could not be located.</p>
        <Link
          to="/"
          className="bg-[#20243C] text-[#FBFBFF] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-[#9091DF] transition-colors"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  // Related publication lookup
  const relatedPub = study.publicationSlug
    ? portfolioData.publications.find((p) => p.slug === study.publicationSlug)
    : null;

  const hasPaperUrl = Boolean(study.paperUrl && study.paperUrl.trim() !== '');
  const hasLocalPaper = Boolean(study.localPaperPath && study.localPaperPath.trim() !== '');
  const hasDoi = Boolean(study.doiUrl && study.doiUrl.trim() !== '');

  return (
    <div className="min-h-screen bg-[#FBFBFF] pt-24 pb-16">
      
      {/* Top Header & Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => navigate('/#work')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#626A7C] hover:text-[#20243C] transition-colors mb-6 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9091DF] rounded-md py-1"
        >
          <ArrowLeft className="w-4 h-4 text-[#9091DF]" />
          <span>Back to Portfolio Work</span>
        </button>

        {/* Category & Status */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#A0A1F8]/15 text-[#20243C] border border-[#A0A1F8]/30">
            {study.category}
          </span>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA]">
            {study.status}
          </span>
          {study.venue && (
            <span className="text-xs font-semibold text-[#626A7C]">
              {study.venue}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#20243C] tracking-tight leading-tight mb-6">
          {study.title}
        </h1>

        {/* Opening Question Banner */}
        <div className="bg-[#20243C] text-[#FBFBFF] p-6 rounded-2xl border border-[#D9DDEE]/20 mb-8 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#A0A1F8] mb-2">
            <HelpCircle className="w-4 h-4 text-[#DFF8E1]" />
            <span>OPENING QUESTION</span>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-[#B9E0FC] italic leading-snug">
            “{study.openingQuestion}”
          </p>
        </div>

        {/* Hero Image / Visual Graphic */}
        {study.image && (
          <div className="mb-12 rounded-2xl overflow-hidden border border-[#D9DDEE] shadow-xs max-h-[450px]">
            <ImageWithFallback
              src={study.image}
              alt={study.imageAlt || study.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Quick Links Action Bar if real links exist */}
        {(hasPaperUrl || hasLocalPaper || hasDoi || relatedPub) && (
          <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-[#FFFFFF] border border-[#D9DDEE] mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#626A7C] mr-2">
              Dissemination Artifacts:
            </span>

            {hasPaperUrl && (
              <a
                href={study.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#A0A1F8] text-[#20243C] px-3.5 py-2 rounded-lg hover:bg-[#B6BAFA] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Read Paper</span>
              </a>
            )}

            {hasLocalPaper && (
              <a
                href={study.localPaperPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#B9E0FC] text-[#20243C] px-3.5 py-2 rounded-lg hover:bg-[#A6C9E2] transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            )}

            {hasDoi && (
              <a
                href={study.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#DFF8E1] text-[#20243C] px-3.5 py-2 rounded-lg hover:bg-[#C8DFCA] transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>DOI Record</span>
              </a>
            )}

            {relatedPub && (
              <Link
                to={`/publications/${relatedPub.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#20243C] text-[#FBFBFF] px-3.5 py-2 rounded-lg hover:bg-[#9091DF] transition-colors"
              >
                <Layers className="w-3.5 h-3.5 text-[#A0A1F8]" />
                <span>Related Publication Details</span>
              </Link>
            )}
          </div>
        )}

        {/* Detailed Case Content Sections */}
        <div className="space-y-10 text-[#20243C]">
          
          {/* Section 1: The Real Problem */}
          <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-3">
              01. THE REAL PROBLEM
            </h2>
            <p className="text-base text-[#20243C] font-medium leading-relaxed">
              {study.realProblem}
            </p>
          </div>

          {/* Section 2: What I Questioned & Reframing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#B6BAFA]/15 p-6 rounded-2xl border border-[#B6BAFA]/40">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-3">
                WHAT I QUESTIONED
              </h3>
              <p className="text-sm text-[#20243C] font-semibold leading-relaxed">
                “{study.questionedAssumption}”
              </p>
            </div>

            <div className="bg-[#DFF8E1]/20 p-6 rounded-2xl border border-[#C8DFCA]">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-3">
                HOW I REFRAMED IT
              </h3>
              <p className="text-sm text-[#20243C] font-semibold leading-relaxed">
                {study.reframing}
              </p>
            </div>
          </div>

          {/* Section 3: Solution & Evaluation Steps */}
          <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-4">
              02. DEVELOPED SOLUTION & EVALUATION PROTOCOL
            </h2>

            <div className="mb-6">
              <h3 className="text-sm font-bold text-[#20243C] uppercase tracking-wider mb-3">
                Methodological & Algorithmic Components:
              </h3>
              <ul className="space-y-2.5">
                {study.solution.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-medium text-[#20243C]">
                    <span className="w-2 h-2 rounded-full bg-[#A0A1F8] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {study.evaluation.length > 0 && (
              <div className="pt-6 border-t border-[#D9DDEE]/60">
                <h3 className="text-sm font-bold text-[#20243C] uppercase tracking-wider mb-3">
                  Evaluation Protocol:
                </h3>
                <ul className="space-y-2.5">
                  {study.evaluation.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-medium text-[#20243C]">
                      <span className="w-2 h-2 rounded-full bg-[#9091DF] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Section 4: Representative Results */}
          <div className="bg-[#20243C] text-[#FBFBFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]/20">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#DFF8E1] mb-4">
              <Award className="w-4 h-4 text-[#DFF8E1]" />
              <span>03. REPRESENTATIVE RESULTS & VERIFIED METRICS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {study.representativeResults.map((res, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-[#181A2D] p-4 rounded-xl border border-[#A0A1F8]/20 text-sm font-semibold text-[#FBFBFF]">
                  <CheckCircle2 className="w-4 h-4 text-[#DFF8E1] shrink-0" />
                  <span>{res}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#A0A1F8]/10 border border-[#A0A1F8]/30">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A0A1F8] block mb-1">Why It Matters:</span>
              <p className="text-sm font-medium text-[#B9E0FC] italic">“{study.whyItMatters}”</p>
            </div>
          </div>

          {/* Section 5: Interpretation Boundaries (What It Does NOT Prove) */}
          <div className="bg-[#FBFBFF] p-6 sm:p-8 rounded-2xl border-2 border-dashed border-[#A0A1F8]/60">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#20243C] mb-3">
              <AlertTriangle className="w-4 h-4 text-[#9091DF]" />
              <span>04. INTERPRETATION BOUNDARIES & SCIENTIFIC RIGOR</span>
            </div>
            <p className="text-xs text-[#626A7C] font-mono uppercase tracking-wider mb-2">What this study does NOT claim or prove:</p>
            <p className="text-sm font-medium text-[#20243C] leading-relaxed bg-[#FFFFFF] p-4 rounded-xl border border-[#D9DDEE]">
              {study.limitations}
            </p>
          </div>

          {/* Section 6: Personal Contribution */}
          <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-3">
              05. PERSONAL ROLE & INDIVIDUAL CONTRIBUTION
            </h2>
            <p className="text-sm text-[#20243C] font-medium leading-relaxed">
              {study.personalContribution}
            </p>
          </div>

        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-[#D9DDEE] flex items-center justify-between">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#20243C] hover:text-[#9091DF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </Link>
        </div>

      </div>

      <Footer />
    </div>
  );
};
