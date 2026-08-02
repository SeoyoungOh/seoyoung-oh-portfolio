import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ScientificFigure } from '../components/ScientificFigure';
import { Footer } from '../components/Footer';
import {
  ArrowLeft,
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  FileText,
  BookOpen,
  ExternalLink,
  Layers,
  ArrowRight,
  ShieldCheck,
  Target,
  Sparkles,
} from 'lucide-react';

export const WeaklySupervisedDetail: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Reliability-Calibrated Weakly Supervised Disease Localization | Seoyoung Oh";
    window.scrollTo(0, 0);
  }, []);

  const paperUrl = "/papers/multimap-fusion-isbi-2026.pdf";
  const doiUrl = "https://doi.org/10.1109/ISBI61048.2026.11516027";

  return (
    <div className="min-h-screen bg-[#FBFBFF] pt-24 pb-16 text-[#20243C]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================================================== */}
        {/* 1. PROJECT HEADER                                  */}
        {/* ================================================== */}
        <div className="mb-10">
          <button
            onClick={() => navigate('/#work')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#626A7C] hover:text-[#20243C] transition-colors mb-6 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9091DF] rounded-md py-1"
          >
            <ArrowLeft className="w-4 h-4 text-[#9091DF]" />
            <span>Back to Portfolio Work</span>
          </button>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {['MEDICAL AI', 'COMPUTER VISION', 'WEAK SUPERVISION', 'RELIABLE EVIDENCE'].map((badge) => (
              <span
                key={badge}
                className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#A0A1F8]/15 text-[#20243C] border border-[#A0A1F8]/30"
              >
                {badge}
              </span>
            ))}
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA]">
              Published research + thesis extension
            </span>
          </div>

          {/* Title & Subtitle */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#20243C] tracking-tight leading-tight mb-3">
            Reliability-Calibrated Weakly Supervised Disease Localization
          </h1>
          <p className="text-lg sm:text-xl font-medium text-[#626A7C] mb-8">
            From diagnostic labels to spatial evidence in brain MRI
          </p>
        </div>

        {/* ================================================== */}
        {/* 2. OPENING QUESTION                                */}
        {/* ================================================== */}
        <div className="bg-[#20243C] text-[#FBFBFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]/20 mb-12 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#A0A1F8] mb-3">
            <HelpCircle className="w-4 h-4 text-[#DFF8E1]" />
            <span>OPENING QUESTION</span>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-[#B9E0FC] italic leading-snug mb-3">
            “How can we localize disease evidence when only subject-level diagnoses are available?”
          </p>
          <p className="text-sm font-medium text-[#FBFBFF]/80 leading-relaxed border-t border-[#D9DDEE]/20 pt-3">
            Medical imaging cohorts often provide diagnostic labels while reliable voxel-wise disease annotations are missing, uncertain, or impossible to define.
          </p>
        </div>

        {/* Action Links Bar */}
        <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-[#FFFFFF] border border-[#D9DDEE] mb-12 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#626A7C] mr-2">
            Publication Artifacts:
          </span>
          <a
            href={paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#A0A1F8] text-[#20243C] px-3.5 py-2 rounded-lg hover:bg-[#B6BAFA] transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Read Paper</span>
          </a>
          <a
            href={doiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#DFF8E1] text-[#20243C] px-3.5 py-2 rounded-lg hover:bg-[#C8DFCA] transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>View DOI (10.1109/ISBI61048.2026.11516027)</span>
          </a>
          <Link
            to="/publications/multimap-fusion"
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#20243C] text-[#FBFBFF] px-3.5 py-2 rounded-lg hover:bg-[#9091DF] transition-colors"
          >
            <Layers className="w-3.5 h-3.5 text-[#A0A1F8]" />
            <span>Related Publication Details</span>
          </Link>
        </div>

        {/* Main Content Flow */}
        <div className="space-y-16">

          {/* ================================================== */}
          {/* 3. THE REAL CONSTRAINT                             */}
          {/* ================================================== */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] block mb-2">
              01. PROBLEM FORMULATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#20243C] tracking-tight mb-4">
              “The target exists clinically—but not as a reliable training mask.”
            </h2>
            <p className="text-base text-[#20243C] font-medium leading-relaxed mb-8">
              In retrospective neuroimaging cohorts, diagnostic or clinical group labels are often available, while voxel-wise annotations of disease-related regions are missing or uncertain.
              <br /><br />
              The objective is therefore not to reconstruct an assumed hidden segmentation mask. It is to extract spatial evidence that is diagnostically relevant, stable under perturbation, and anatomically interpretable.
            </p>

            {/* Three Compact Info Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-2">
                  AVAILABLE SUPERVISION
                </span>
                <p className="text-sm font-bold text-[#20243C]">
                  Subject- or image-level diagnostic labels
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FFF5F5] border border-[#FEB2B2]">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9B2C2C] block mb-2">
                  UNAVAILABLE SUPERVISION
                </span>
                <p className="text-sm font-bold text-[#742A2A]">
                  Lesion masks, nuclei annotations, boxes, or scribbles
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F0FDF4] border border-[#86EFAC]">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#166534] block mb-2">
                  REQUIRED OUTPUT
                </span>
                <p className="text-sm font-bold text-[#15803D]">
                  Continuous spatial evidence with explicit reliability information
                </p>
              </div>
            </div>
          </section>

          {/* ================================================== */}
          {/* 4. IMAGE 1 — SUPERVISION SPECTRUM                  */}
          {/* ================================================== */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
            <ScientificFigure
              src="/images/work/weak-supervision/supervision-spectrum.webp"
              alt="Supervision spectrum for disease localization, comparing fully supervised, weak spatial, diagnostic-label-only, and healthy-only learning."
              subheading="“The supervision available changes the question we can ask.”"
              caption="Supervision spectrum for disease localization, from voxel-wise annotation to diagnostic-label-only and healthy-only learning."
              surfaceColor="lavender"
              priority={true}
            />
            <p className="text-sm sm:text-base font-medium text-[#626A7C] leading-relaxed mt-4">
              Fully supervised segmentation assumes reliable voxel-wise masks. Weak spatial supervision uses approximate regions or scribbles. Diagnostic-label-only localization removes explicit spatial guidance, while healthy-only modeling removes disease labels entirely.
              <br /><br />
              This project focuses on the diagnostic-label-only setting: global supervision is available, but spatial evidence must be inferred indirectly.
            </p>
          </section>

          {/* ================================================== */}
          {/* 5. FROM CLASSIFICATION TO LOCALIZATION             */}
          {/* ================================================== */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] block mb-2">
              02. LOCALIZATION NATURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#20243C] tracking-tight mb-4">
              “A classifier knows what—but not automatically where.”
            </h2>
            <p className="text-base text-[#20243C] font-medium leading-relaxed mb-8">
              A diagnostic classifier can learn disease-discriminative representations from global labels. Post-hoc localization methods attempt to recover the spatial evidence contributing to that decision.
              <br /><br />
              However, a visually plausible heatmap is not necessarily reliable. It may reflect attention diffusion, architectural bias, unstable activation, threshold choice, or only the most discriminative fragment of a target.
            </p>

            {/* Compact Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#626A7C] block mb-1">
                  CLASSIFICATION OUTPUT
                </span>
                <p className="text-sm font-bold text-[#20243C]">
                  A diagnostic prediction
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#EEF0FC] border border-[#A0A1F8]">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#20243C] block mb-1">
                  LOCALIZATION OUTPUT
                </span>
                <p className="text-sm font-bold text-[#20243C]">
                  A continuous map of spatial support for that prediction
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#DFF8E1]/40 border border-[#C8DFCA]">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#166534] block mb-1">
                  INTERPRETATION REQUIREMENT
                </span>
                <p className="text-sm font-bold text-[#15803D]">
                  Evidence must be evaluated rather than treated as a segmentation mask
                </p>
              </div>
            </div>
          </section>

          {/* ================================================== */}
          {/* 6. IMAGE 2 — RELIABILITY MOTIVATION                */}
          {/* ================================================== */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
            <ScientificFigure
              src="/images/work/weak-supervision/reliability-motivation.webp"
              alt="Scientific diagram showing limitations of single weak-localization heatmaps, including incompleteness, instability, disagreement, and uncertain interpretability."
              subheading="“Why a single convincing heatmap was not enough.”"
              caption="Limitations of conventional weak localization that motivated reliability-calibrated evidence fusion."
              surfaceColor="white"
              allowHorizontalScrollOnMobile={true}
            />

            <p className="text-sm sm:text-base font-medium text-[#626A7C] leading-relaxed mb-6">
              Single explanation maps can be incomplete, diffuse, unstable, or sensitive to the explanation method and threshold. The research therefore moved from selecting one heatmap to comparing complementary evidence sources and testing their reliability.
            </p>

            {/* Four Compact Concepts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#20243C] block mb-1">
                  INCOMPLETE EVIDENCE
                </span>
                <p className="text-xs font-medium text-[#626A7C] leading-normal">
                  One cue may highlight only the most discriminative region.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#20243C] block mb-1">
                  CUE DISAGREEMENT
                </span>
                <p className="text-xs font-medium text-[#626A7C] leading-normal">
                  Different explanation methods may emphasize different spatial locations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#20243C] block mb-1">
                  INSTABILITY
                </span>
                <p className="text-xs font-medium text-[#626A7C] leading-normal">
                  Small input changes may produce substantially different maps.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#20243C] block mb-1">
                  UNCERTAIN MEANING
                </span>
                <p className="text-xs font-medium text-[#626A7C] leading-normal">
                  Visual plausibility does not establish decision faithfulness or anatomical validity.
                </p>
              </div>
            </div>
          </section>

          {/* ================================================== */}
          {/* 7. RESEARCH EVOLUTION                              */}
          {/* ================================================== */}
          <section className="bg-[#20243C] text-[#FBFBFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]/20">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A0A1F8] block mb-2">
              03. METHODOLOGICAL TRAJECTORY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FBFBFF] tracking-tight mb-8">
              Research Evolution
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              
              {/* STAGE 1 */}
              <div className="bg-[#181A2D] p-6 rounded-2xl border border-[#A0A1F8]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded bg-[#A0A1F8] text-[#20243C]">
                      STAGE 1 · PUBLISHED FOUNDATION
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#FBFBFF] mb-2">
                    Multi-Map Fusion
                  </h3>
                  <p className="text-xs font-semibold text-[#A0A1F8] mb-4">
                    ISBI 2026 Oral Presentation
                  </p>
                  <p className="text-sm font-medium text-[#B9E0FC] leading-relaxed mb-6">
                    “The published ISBI 2026 study fused complementary classifier-derived localization maps to recover disease evidence from globally assigned diagnostic labels.”
                  </p>
                </div>

                <ul className="space-y-2 text-xs font-medium text-[#FBFBFF]/90 border-t border-[#D9DDEE]/15 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#DFF8E1] shrink-0" />
                    <span>Diagnostic-label-only training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#DFF8E1] shrink-0" />
                    <span>Complementary spatial cues</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#DFF8E1] shrink-0" />
                    <span>Multi-map fusion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#DFF8E1] shrink-0" />
                    <span>Evaluation on BraTS, MSLesSeg, and ADNI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#DFF8E1] shrink-0" />
                    <span>Published and presented orally at ISBI 2026</span>
                  </li>
                </ul>
              </div>

              {/* STAGE 2 */}
              <div className="bg-[#181A2D] p-6 rounded-2xl border border-[#DFF8E1]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded bg-[#DFF8E1] text-[#20243C]">
                      STAGE 2 · THESIS EXTENSION
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#FBFBFF] mb-2">
                    RC-Explainer: From fused heatmaps to reliability-calibrated evidence
                  </h3>
                  <p className="text-xs font-semibold text-[#DFF8E1] mb-4">
                    Doctoral Thesis Research Extension
                  </p>
                  <p className="text-sm font-medium text-[#B9E0FC] leading-relaxed mb-6">
                    “The thesis extension asks not only where the classifier responds, but whether the highlighted evidence is stable, faithful to the diagnostic decision, and anatomically plausible.”
                  </p>
                </div>

                <ul className="space-y-2 text-xs font-medium text-[#FBFBFF]/90 border-t border-[#D9DDEE]/15 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#DFF8E1] shrink-0" />
                    <span>Multiple transformer-derived evidence cues</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#DFF8E1] shrink-0" />
                    <span>Spatially varying reliability weights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#DFF8E1] shrink-0" />
                    <span>Perturbation-based stability analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#DFF8E1] shrink-0" />
                    <span>Decision-faithfulness evaluation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#DFF8E1] shrink-0" />
                    <span>Explanation uncertainty</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#DFF8E1] shrink-0" />
                    <span>ROI-oriented interpretation</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#A0A1F8]/10 border border-[#A0A1F8]/20 text-xs font-medium text-[#B9E0FC] text-center">
              Note: The published ISBI 2026 paper establishes the multi-map fusion foundation. The subsequent RC-Explainer framework represents the later thesis extension incorporating reliability calibration, stability analysis, and uncertainty gating.
            </div>
          </section>

          {/* ================================================== */}
          {/* 8. WHAT I DEVELOPED                                */}
          {/* ================================================== */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] block mb-2">
              04. METHODOLOGICAL FRAMEWORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#20243C] tracking-tight mb-8">
              “Multiple cues. Spatial reliability. Explicit uncertainty.”
            </h2>

            {/* 4 Connected Method Stages */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-2">
                    STAGE 01
                  </span>
                  <h3 className="text-sm font-bold text-[#20243C] mb-2">
                    1. DIAGNOSTIC-LABEL-ONLY CLASSIFIER
                  </h3>
                  <p className="text-xs font-medium text-[#626A7C] leading-relaxed">
                    “A self-supervised transformer backbone is fine-tuned using image-level diagnostic labels without voxel-wise or region-level supervision.”
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-2">
                    STAGE 02
                  </span>
                  <h3 className="text-sm font-bold text-[#20243C] mb-2">
                    2. COMPLEMENTARY EVIDENCE EXTRACTION
                  </h3>
                  <p className="text-xs font-medium text-[#626A7C] leading-relaxed">
                    “Attention, token activation, gradient-weighted semantic cues, and structural spectral cues capture complementary spatial information.”
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#EEF0FC] border border-[#A0A1F8] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#20243C] block mb-2">
                    STAGE 03
                  </span>
                  <h3 className="text-sm font-bold text-[#20243C] mb-2">
                    3. RELIABILITY-CALIBRATED FUSION
                  </h3>
                  <p className="text-xs font-medium text-[#20243C] leading-relaxed">
                    “Cue disagreement, perturbation-induced instability, and decision faithfulness determine which cues should contribute at each spatial location.”
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#DFF8E1]/30 border border-[#C8DFCA] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#166534] block mb-2">
                    STAGE 04
                  </span>
                  <h3 className="text-sm font-bold text-[#20243C] mb-2">
                    4. UNCERTAINTY-AWARE EVIDENCE
                  </h3>
                  <p className="text-xs font-medium text-[#20243C] leading-relaxed">
                    “Explanation uncertainty suppresses unstable responses and produces a final evidence map, an uncertainty map, and ROI-oriented interpretation outputs.”
                  </p>
                </div>
              </div>
            </div>

            {/* ================================================== */}
            {/* 9. IMAGE 3 — RC-EXPLAINER OVERVIEW                 */}
            {/* ================================================== */}
            <div className="mt-8">
              <ScientificFigure
                src="/images/work/weak-supervision/rc-explainer-overview.webp"
                alt="RC-Explainer workflow combining diagnostic classification, multiple transformer localization cues, reliability calibration, uncertainty gating, final evidence maps, and ROI-oriented interpretation."
                caption="RC-Explainer combines complementary transformer-derived evidence cues with spatial reliability calibration, explanation uncertainty, and ROI-oriented outputs."
                surfaceColor="white"
                allowHorizontalScrollOnMobile={true}
              />

              {/* How to read this figure strip */}
              <div className="mt-4 p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#20243C] block mb-3">
                  How to read this figure:
                </span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="font-bold text-[#9091DF] uppercase block text-[10px]">INPUT</span>
                    <span className="font-medium text-[#20243C]">A diagnostic MRI sample</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#9091DF] uppercase block text-[10px]">CUES</span>
                    <span className="font-medium text-[#20243C]">Complementary semantic, structural, attention, and token evidence</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#9091DF] uppercase block text-[10px]">RELIABILITY</span>
                    <span className="font-medium text-[#20243C]">Disagreement, perturbation stability, and faithfulness</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#166534] uppercase block text-[10px]">OUTPUT</span>
                    <span className="font-medium text-[#20243C]">Calibrated evidence, uncertainty, proposals, and ROI summaries</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================== */}
          {/* 10. HOW I TESTED THE EVIDENCE                      */}
          {/* ================================================== */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] block mb-2">
              05. EVALUATION PROTOCOL
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#20243C] tracking-tight mb-8">
              “Performance was only one part of the evaluation.”
            </h2>

            {/* Four Evaluation Lenses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#20243C] mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#9091DF]" />
                  <span>LOCALIZATION</span>
                </h3>
                <ul className="space-y-2 text-xs font-medium text-[#626A7C]">
                  <li className="flex items-center gap-2">• Max-IoU</li>
                  <li className="flex items-center gap-2">• Pixel-AUPRC</li>
                  <li className="flex items-center gap-2">• Top-ranked evidence recall</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#20243C] mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#9091DF]" />
                  <span>SMALL-LESION SENSITIVITY</span>
                </h3>
                <ul className="space-y-2 text-xs font-medium text-[#626A7C]">
                  <li className="flex items-center gap-2">• Lesion-size-stratified retrieval</li>
                  <li className="flex items-center gap-2">• Candidate-proposal recall</li>
                  <li className="flex items-center gap-2">• Fragmented-lesion behavior</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#20243C] mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#9091DF]" />
                  <span>RELIABILITY</span>
                </h3>
                <ul className="space-y-2 text-xs font-medium text-[#626A7C]">
                  <li className="flex items-center gap-2">• Perturbation stability</li>
                  <li className="flex items-center gap-2">• Cue agreement</li>
                  <li className="flex items-center gap-2">• Reliability stratification</li>
                  <li className="flex items-center gap-2">• Explanation uncertainty</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#20243C] mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#9091DF]" />
                  <span>INTERPRETATION</span>
                </h3>
                <ul className="space-y-2 text-xs font-medium text-[#626A7C]">
                  <li className="flex items-center gap-2">• Deletion and insertion faithfulness</li>
                  <li className="flex items-center gap-2">• ROI concentration</li>
                  <li className="flex items-center gap-2">• False evidence outside target ROIs</li>
                  <li className="flex items-center gap-2">• Brainstem-focused versus unrestricted analysis</li>
                </ul>
              </div>
            </div>

            {/* Interpretation Note */}
            <div className="p-4 rounded-xl bg-[#EEF0FC] border border-[#A0A1F8]/40 text-xs font-medium text-[#20243C] leading-relaxed">
              <span className="font-bold text-[#20243C]">Evaluation Context Note: </span>
              “Voxel-wise masks were used only for evaluation in BraTS and MSLesSeg. ADNI and PULSE were assessed through ROI-centric anatomical plausibility, decision-faithfulness, and reliability analyses rather than voxel-wise disease segmentation.”
            </div>
          </section>

          {/* ================================================== */}
          {/* 11. REPRESENTATIVE RESULTS                         */}
          {/* ================================================== */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] block mb-2">
              06. VERIFIED METRICS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#20243C] tracking-tight mb-8">
              Representative Results
            </h2>

            {/* Metric Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              
              {/* BraTS Card */}
              <div className="p-6 rounded-2xl bg-[#20243C] text-[#FBFBFF] border border-[#D9DDEE]/20">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#D9DDEE]/20">
                  <span className="text-sm font-bold text-[#A0A1F8] uppercase tracking-wider">
                    BraTS Benchmark
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#A0A1F8]/20 text-[#DFF8E1]">
                    Visible Lesions
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-[#181A2D] border border-[#A0A1F8]/20">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A0A1F8] block mb-1">Max-IoU</span>
                    <span className="text-lg font-black text-[#FBFBFF]">0.39 ± 0.01</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#181A2D] border border-[#A0A1F8]/20">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A0A1F8] block mb-1">Pixel-AUPRC</span>
                    <span className="text-lg font-black text-[#FBFBFF]">0.33 ± 0.02</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#181A2D] border border-[#A0A1F8]/20">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A0A1F8] block mb-1">Recall@10</span>
                    <span className="text-lg font-black text-[#DFF8E1]">0.77 ± 0.02</span>
                  </div>
                </div>
              </div>

              {/* MSLesSeg Card */}
              <div className="p-6 rounded-2xl bg-[#20243C] text-[#FBFBFF] border border-[#D9DDEE]/20">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#D9DDEE]/20">
                  <span className="text-sm font-bold text-[#B9E0FC] uppercase tracking-wider">
                    MSLesSeg Benchmark
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#B9E0FC]/20 text-[#DFF8E1]">
                    Small Lesions
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-[#181A2D] border border-[#B9E0FC]/20">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B9E0FC] block mb-1">Max-IoU</span>
                    <span className="text-lg font-black text-[#FBFBFF]">0.28 ± 0.03</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#181A2D] border border-[#B9E0FC]/20">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B9E0FC] block mb-1">Pixel-AUPRC</span>
                    <span className="text-lg font-black text-[#FBFBFF]">0.22 ± 0.01</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#181A2D] border border-[#B9E0FC]/20">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B9E0FC] block mb-1">Recall@10</span>
                    <span className="text-lg font-black text-[#DFF8E1]">0.65 ± 0.01</span>
                  </div>
                </div>
              </div>

            </div>

            <p className="text-xs font-mono text-[#626A7C] mb-6">
              “Values are mean ± 95% confidence interval across five random seeds.”
            </p>

            <div className="p-4 rounded-xl bg-[#DFF8E1]/40 border border-[#C8DFCA] text-sm font-semibold text-[#20243C]">
              “Reliability calibration improved not only spatial overlap and lesion retrieval, but also the relationship between selected evidence and the classifier decision.”
            </div>

            {/* ================================================== */}
            {/* 12. IMAGE 4 — QUALITATIVE RELIABILITY               */}
            {/* ================================================== */}
            <div className="mt-10 pt-8 border-t border-[#D9DDEE]">
              <ScientificFigure
                src="/images/work/weak-supervision/qualitative-reliability.webp"
                alt="Qualitative comparison across BraTS, MSLesSeg, ADNI, and PULSE showing input images, reference masks or ROIs, baseline localization maps, RC-Explainer evidence, uncertainty maps, and reliable evidence overlays."
                subheading="“How reliability calibration changed the spatial behavior.”"
                caption="Qualitative reliability examples across BraTS, MSLesSeg, ADNI, and PULSE. Reference regions, model-derived evidence, uncertainty, and reliable ROI-oriented outputs are shown for complementary evaluation settings."
                surfaceColor="white"
                allowHorizontalScrollOnMobile={true}
              />

              <p className="text-sm font-medium text-[#626A7C] leading-relaxed mb-6">
                The examples compare individual localization baselines, the reliability-free output, the final RC-Explainer evidence map, the uncertainty map, and reliable ROI overlays across visible-lesion and ROI-centric settings.
              </p>

              {/* Legend below image */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                  <span className="font-bold text-[#20243C] uppercase block mb-1">VISIBLE-LESION SETTINGS</span>
                  <span className="font-medium text-[#626A7C]">BraTS and MSLesSeg use lesion masks for localization evaluation.</span>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                  <span className="font-bold text-[#20243C] uppercase block mb-1">ROI-CENTRIC SETTINGS</span>
                  <span className="font-medium text-[#626A7C]">ADNI and PULSE use anatomical references rather than voxel-wise disease masks.</span>
                </div>

                <div className="p-4 rounded-xl bg-[#FFF5F5] border border-[#FEB2B2]">
                  <span className="font-bold text-[#9B2C2C] uppercase block mb-1">UNCERTAINTY</span>
                  <span className="font-medium text-[#742A2A]">High-uncertainty regions indicate where explanation evidence is less reliable.</span>
                </div>

                <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#86EFAC]">
                  <span className="font-bold text-[#166534] uppercase block mb-1">FINAL EVIDENCE</span>
                  <span className="font-medium text-[#15803D]">The final map retains more stable and concentrated diagnostic evidence.</span>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================== */}
          {/* 13. ALS-FOCUSED INTERPRETATION                     */}
          {/* ================================================== */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] block mb-2">
              07. DOMAIN APPLICATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#20243C] tracking-tight mb-4">
              “What changes when the analysis is focused on the ALS brainstem?”
            </h2>
            <p className="text-base text-[#20243C] font-medium leading-relaxed mb-8">
              In PULSE, the brainstem mask defines the spatial field used for cropping, filtering, or post-hoc restriction. It is not itself the target of evaluation.
              <br /><br />
              ROI-centric interpretation is performed with respect to task-oriented nuclei or pathway regions inside the brainstem focus mask.
            </p>

            {/* Distinction Panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9091DF] block mb-2">
                  BRAINSTEM FOCUS MASK
                </span>
                <p className="text-sm font-semibold text-[#20243C]">
                  Defines where evidence is ranked or analyzed.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#EEF0FC] border border-[#A0A1F8]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#20243C] block mb-2">
                  TASK-ORIENTED ROI
                </span>
                <p className="text-sm font-semibold text-[#20243C]">
                  Defines the anatomically motivated target used for ROI-centric interpretation.
                </p>
              </div>
            </div>

            {/* ================================================== */}
            {/* 14. IMAGE 5 — PULSE INPUT COMPARISON               */}
            {/* ================================================== */}
            <div className="mt-8 pt-8 border-t border-[#D9DDEE]">
              <ScientificFigure
                src="/images/work/weak-supervision/pulse-input-comparison.webp"
                alt="PULSE brain MRI comparison showing whole-brain T1-weighted input, brainstem-focused T1-weighted input, and brainstem-focused T1-weighted plus fractional anisotropy input with corresponding evidence and ROI-oriented outputs."
                subheading="“Separating spatial focus from modality contribution.”"
                caption="Representative PULSE comparisons across whole-brain T1w, brainstem-focused T1w, and brainstem-focused T1w+FA input regimes. The figure supports ROI-centric anatomical interpretation, not voxel-wise ALS segmentation or clinical validation."
                surfaceColor="white"
                allowHorizontalScrollOnMobile={true}
              />

              <p className="text-sm font-medium text-[#626A7C] leading-relaxed mb-6">
                The comparison examines three input regimes: whole-brain T1-weighted MRI, brainstem-focused T1-weighted MRI, and brainstem-focused T1-weighted MRI combined with fractional anisotropy.
                <br /><br />
                Brainstem-focused analysis reduces irrelevant spatial context, while FA provides complementary microstructural information once the model is focused on the clinically motivated region.
              </p>

              {/* Three compact regime summaries */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#20243C] block mb-1">
                    WHOLE-BRAIN T1W
                  </span>
                  <p className="text-xs font-medium text-[#626A7C]">
                    Broad spatial context, with a greater possibility of diffuse off-target evidence.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#20243C] block mb-1">
                    BRAINSTEM-FOCUSED T1W
                  </span>
                  <p className="text-xs font-medium text-[#626A7C]">
                    Restricts evidence analysis to the clinically motivated brainstem field.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#EEF0FC] border border-[#A0A1F8]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#20243C] block mb-1">
                    BRAINSTEM-FOCUSED T1W + FA
                  </span>
                  <p className="text-xs font-medium text-[#20243C]">
                    Adds exploratory microstructural information to the focused structural input.
                  </p>
                </div>
              </div>

              {/* PULSE Native Metric Cards */}
              <div className="bg-[#20243C] text-[#FBFBFF] p-6 rounded-2xl border border-[#D9DDEE]/20 mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#DFF8E1] block mb-4">
                  ROI-CENTRIC ANATOMICAL PLAUSIBILITY
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3.5 rounded-xl bg-[#181A2D] border border-[#A0A1F8]/20">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A0A1F8] block mb-1">Hit@ROI</span>
                    <span className="text-lg font-black text-[#FBFBFF]">0.68 ± 0.01</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#181A2D] border border-[#A0A1F8]/20">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A0A1F8] block mb-1">FP@Non-ROI</span>
                    <span className="text-lg font-black text-[#FBFBFF]">0.13 ± 0.02</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#181A2D] border border-[#A0A1F8]/20">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A0A1F8] block mb-1">ROI Conc.</span>
                    <span className="text-lg font-black text-[#FBFBFF]">0.59 ± 0.03</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#181A2D] border border-[#A0A1F8]/20">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#DFF8E1] block mb-1">Reliable Conc.</span>
                    <span className="text-lg font-black text-[#DFF8E1]">0.64 ± 0.01</span>
                  </div>
                </div>
              </div>

              <p className="text-xs font-mono text-[#626A7C]">
                “These values describe the concentration and reliability of classifier-derived evidence relative to task-oriented anatomical ROIs. They do not represent voxel-wise ALS segmentation performance.”
              </p>
            </div>
          </section>

          {/* ================================================== */}
          {/* 15. WHY IT MATTERS                                 */}
          {/* ================================================== */}
          <section className="bg-[#20243C] text-[#FBFBFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]/20">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A0A1F8] block mb-2">
              08. CORE SIGNIFICANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FBFBFF] tracking-tight mb-4">
              Why It Matters
            </h2>
            <p className="text-base sm:text-lg font-medium text-[#B9E0FC] leading-relaxed italic">
              “Weak supervision makes spatial analysis possible when dense annotations are unavailable. Reliability calibration makes the resulting evidence more suitable for cautious interpretation by distinguishing stable, decision-relevant evidence from visually salient but unreliable responses.”
            </p>
          </section>

          {/* ================================================== */}
          {/* 16. WHAT IT DOES NOT PROVE                         */}
          {/* ================================================== */}
          <section className="bg-[#FBFBFF] p-6 sm:p-8 rounded-2xl border-2 border-dashed border-[#A0A1F8]/60">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#20243C] mb-3">
              <AlertTriangle className="w-4 h-4 text-[#9091DF]" />
              <span>09. SCIENTIFIC BOUNDARIES &amp; LIMITATIONS</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-4">
              “What this evidence should—and should not—be used to claim.”
            </h2>

            <p className="text-xs font-mono text-[#626A7C] uppercase tracking-wider mb-3">
              This work does NOT produce:
            </p>

            <ul className="space-y-2 mb-6 text-sm font-semibold text-[#20243C] bg-[#FFFFFF] p-5 rounded-xl border border-[#D9DDEE]">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF]" />
                <span>A fully supervised lesion segmentation</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF]" />
                <span>A voxel-wise ALS pathology map</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF]" />
                <span>A clinically validated biomarker</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF]" />
                <span>Proof that every highlighted region is disease-specific</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF]" />
                <span>A substitute for anatomical or clinical validation</span>
              </li>
            </ul>

            <p className="text-sm font-medium text-[#626A7C] leading-relaxed">
              In mask-free neurodegeneration and ALS settings, the maps should be interpreted as classifier-derived, reliability-filtered spatial evidence—not as disease ground truth.
            </p>
          </section>

          {/* ================================================== */}
          {/* 17. MY CONTRIBUTION                                */}
          {/* ================================================== */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] block mb-2">
              10. INDIVIDUAL ROLE
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-4">
              My Contribution
            </h2>
            <p className="text-base text-[#20243C] font-medium leading-relaxed">
              As the doctoral researcher and first author, I worked on problem formulation, method development, implementation, experimental design, reliability evaluation, result interpretation, and manuscript preparation, in collaboration with engineering, imaging, anatomical, and clinical partners.
            </p>
          </section>

          {/* ================================================== */}
          {/* 18. RELATED PUBLICATION                            */}
          {/* ================================================== */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] block mb-2">
              11. PEER-REVIEWED PUBLICATION
            </span>
            
            <h2 className="text-2xl font-extrabold text-[#20243C] tracking-tight mb-3">
              Multi-Map Fusion for Weakly Supervised Disease Localization from Globally Assigned Diagnostic Labels in Brain MRI
            </h2>

            <p className="text-sm font-semibold text-[#626A7C] mb-2">
              Authors: Seoyoung Oh, Mélanie Pélégrini-Issac, Hélène Urien, Véronique Marchand-Pauvert, Jérémie Sublime
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#20243C] mb-6">
              <span className="px-3 py-1 rounded-md bg-[#EEF0FC] border border-[#A0A1F8]">
                Venue: 2026 IEEE 23rd International Symposium on Biomedical Imaging
              </span>
              <span className="px-3 py-1 rounded-md bg-[#F8F9FE] border border-[#D9DDEE]">
                Location: London, United Kingdom
              </span>
              <span className="px-3 py-1 rounded-md bg-[#DFF8E1] border border-[#C8DFCA]">
                Status: Published · Oral presentation
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] mb-6 text-xs font-mono text-[#626A7C]">
              <span className="font-bold text-[#20243C]">DOI: </span>
              10.1109/ISBI61048.2026.11516027
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#A0A1F8] text-[#20243C] px-4 py-2.5 rounded-lg hover:bg-[#B6BAFA] transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Read Paper</span>
              </a>

              <a
                href={doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#DFF8E1] text-[#20243C] px-4 py-2.5 rounded-lg hover:bg-[#C8DFCA] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View DOI</span>
              </a>

              <Link
                to="/#publications"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#20243C] text-[#FBFBFF] px-4 py-2.5 rounded-lg hover:bg-[#9091DF] transition-colors"
              >
                <Layers className="w-4 h-4 text-[#A0A1F8]" />
                <span>Back to publications</span>
              </Link>
            </div>
          </section>

          {/* ================================================== */}
          {/* 19. BACK TO PORTFOLIO WORK                         */}
          {/* ================================================== */}
          <div className="pt-8 border-t border-[#D9DDEE] flex items-center justify-between">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#20243C] hover:text-[#9091DF] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#9091DF]" />
              <span>Back to Portfolio Work</span>
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};
