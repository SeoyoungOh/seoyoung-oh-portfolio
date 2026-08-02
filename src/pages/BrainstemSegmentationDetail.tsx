import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ScientificFigure } from '../components/ScientificFigure';
import { DecoderEfficiencyChart } from '../components/brainstem-segmentation/DecoderEfficiencyChart';
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
  Award,
  ShieldCheck,
  Brain,
} from 'lucide-react';

export const BrainstemSegmentationDetail: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Brainstem Segmentation with Limited Annotations | Seoyoung Oh';
    window.scrollTo(0, 0);
  }, []);

  const paperUrl = 'https://doi.org/10.1109/ISBI56570.2024.10635856';
  const localPaperPath = '/papers/brainstem-segmentation-isbi-2024.pdf';
  const doiUrl = 'https://doi.org/10.1109/ISBI56570.2024.10635856';

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
            {['MEDICAL IMAGE ANALYSIS', 'BRAINSTEM MRI', 'DECODER ARCHITECTURE', 'LOSS OPTIMIZATION'].map(
              (badge) => (
                <span
                  key={badge}
                  className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#A0A1F8]/15 text-[#20243C] border border-[#A0A1F8]/30"
                >
                  {badge}
                </span>
              )
            )}
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA]">
              Published
            </span>
            <span className="text-[11px] font-semibold text-[#626A7C]">
              IEEE International Symposium on Biomedical Imaging (ISBI 2024)
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#20243C] tracking-tight leading-tight mb-6">
            Brainstem Segmentation with Limited Annotations
          </h1>

          {/* Opening Question Banner */}
          <div className="bg-[#20243C] text-[#FBFBFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]/20 mb-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#A0A1F8] mb-3">
              <HelpCircle className="w-4 h-4 text-[#DFF8E1]" />
              <span>OPENING QUESTION</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-[#B9E0FC] italic leading-snug">
              “Can decoder architecture and loss function design enable accurate brainstem segmentation under fused atlas-derived supervision with limited annotations?”
            </p>
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-[#FFFFFF] border border-[#D9DDEE] shadow-2xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#626A7C] mr-2">
              Dissemination Artifacts:
            </span>

            <a
              href={paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#A0A1F8] text-[#20243C] px-3.5 py-2 rounded-lg hover:bg-[#B6BAFA] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Read Paper</span>
            </a>

            <a
              href={localPaperPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#B9E0FC] text-[#20243C] px-3.5 py-2 rounded-lg hover:bg-[#A6C9E2] transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#DFF8E1] text-[#20243C] px-3.5 py-2 rounded-lg hover:bg-[#C8DFCA] transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>DOI Record</span>
            </a>

            <Link
              to="/publications/brainstem-segmentation"
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#20243C] text-[#FBFBFF] px-3.5 py-2 rounded-lg hover:bg-[#9091DF] transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-[#A0A1F8]" />
              <span>Related Publication Details</span>
            </Link>
          </div>
        </div>

        {/* ================================================== */}
        {/* MAIN CONTENT SECTIONS                              */}
        {/* ================================================== */}
        <div className="space-y-12">
          
          {/* 01. THE REAL CONSTRAINT */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
              01. THE REAL CONSTRAINT
            </h2>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
              Anatomical Boundary Ambiguity & Severe Annotation Scarcity
            </h3>
            
            <p className="text-base text-[#20243C] font-medium leading-relaxed">
              The brainstem (comprising the midbrain, pons, and medulla oblongata) plays a vital role in motor control, autonomic regulation, and signal conduction. In routine T1-weighted MRI, segmenting small brainstem nuclei is challenging due to low intensity contrast along subregional boundaries and spatial proximity to CSF spaces and adjacent subcortical structures.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#20243C] mb-2">
                  <Brain className="w-4 h-4 text-[#9091DF]" />
                  <span>Anatomical Bottlenecks</span>
                </div>
                <p className="text-xs text-[#626A7C] leading-relaxed font-medium">
                  Small physical volume relative to whole-brain MRI acquisitions, subtle intensity gradients against adjacent tissue, and complex subregional boundaries requiring high anatomical expertise to delineate manually.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#20243C] mb-2">
                  <AlertTriangle className="w-4 h-4 text-[#9091DF]" />
                  <span>Annotation Bottlenecks</span>
                </div>
                <p className="text-xs text-[#626A7C] leading-relaxed font-medium">
                  Direct expert manual delineations of individual subject-specific nuclei are unavailable in routine datasets. Deep neural networks trained on small cohorts risk overfitting without appropriate decoder structures and objective loss functions.
                </p>
              </div>
            </div>

            <p className="text-sm text-[#20243C] font-semibold leading-relaxed pt-2">
              <strong>Methodological Focus:</strong> Evaluating decoder architectures and loss functions under an existing atlas-derived reference to identify efficient model designs for small, annotation-scarce anatomical targets.
            </p>
          </section>

          {/* 02. WHAT THIS STUDY REVEALED */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
                WHAT THIS STUDY REVEALED
              </h2>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
                Existing atlases enabled supervised experiments—but did not cover every structure needed for later ALS-focused interpretation
              </h3>
            </div>

            <div className="space-y-4 text-sm text-[#20243C] font-medium leading-relaxed">
              <p>
                The ISBI 2024 study used a fused atlas-derived reference constructed from existing anatomical atlases and Nilearn masks. This reference enabled a controlled comparison of decoder architectures, loss functions, and encoder settings for brainstem segmentation.
              </p>
              <p>
                The study also exposed the limitations of this supervision. Atlas projection does not provide subject-specific anatomical truth, registration errors can be large relative to small nuclei, and the available atlas resources did not include several nuclei and pathways required for later bulbar- and respiratory-oriented ALS analysis.
              </p>
              <p>
                These limitations subsequently motivated the construction of a separate task-oriented brainstem atlas. That later atlas supports ROI definition, visualization, and ROI-centric interpretation in subsequent research; it was not used to train the models reported in the ISBI 2024 study.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
                  USED IN THIS STUDY
                </span>
                <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
                  Existing anatomical atlases and Nilearn masks were fused into a 34-class atlas-derived segmentation reference.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
                  LIMITATION IDENTIFIED
                </span>
                <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
                  The reference inherited registration uncertainty and did not include all nuclei or pathways relevant to later ALS-focused analysis.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
                  LATER METHODOLOGICAL RESPONSE
                </span>
                <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
                  A separate task-oriented atlas was subsequently created for ROI definition and post-hoc interpretation—not as dense supervision for this project.
                </p>
              </div>
            </div>
          </section>

          {/* 03. MODEL DESIGN */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
                03. MODEL DESIGN & DECODER ARCHITECTURE
              </h2>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
                Benchmark Architecture Evaluation & N-DecoNet Design
              </h3>
            </div>

            <ScientificFigure
              src="/images/work/brainstem-segmentation/atlas-supervision-model-design.webp"
              alt="ISBI 2024 Input, Fused Atlas-Derived Reference, and N-DecoNet / U-DecoNet Model Design"
              subheading="Figure 1: Fused Atlas-Derived Supervision & N-DecoNet Architecture"
              caption="Overview of the ISBI 2024 brainstem segmentation framework, showing input T1-weighted MRI crops, 34-class fused atlas-derived reference labels, and N-DecoNet / U-DecoNet decoder designs."
              interpretationNote="N-DecoNet combines feature maps from the last four encoder stages and passes the aggregated representation to a pixel-wise softmax classifier with 21.5M parameters."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-[#20243C]">Baseline Decoders</span>
                  <span className="text-xs font-mono text-[#626A7C]">21.6M – 31.8M Params</span>
                </div>
                <p className="text-xs text-[#626A7C] leading-relaxed">
                  Evaluated UNet, UNet++, MAnet, PSPNet, FPN, DeepLabV3, and DeepLabV3+ architectures under consistent experimental conditions.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#9091DF]/10 border-2 border-[#9091DF] space-y-2 relative overflow-hidden">
                <div className="absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wider bg-[#20243C] text-[#FBFBFF] px-2 py-0.5 rounded">
                  Proposed Design
                </div>
                <div className="flex items-center justify-between pr-16">
                  <span className="text-sm font-black text-[#20243C]">N-DecoNet Architecture</span>
                  <span className="text-xs font-mono font-bold text-[#20243C]">21.5M Params</span>
                </div>
                <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
                  Combines multi-stage encoder feature representations directly without heavy cross-level decoder processing, achieving competitive performance with reduced parameter overhead.
                </p>
              </div>
            </div>
          </section>

          {/* 04. EXPERIMENTAL DESIGN */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
                04. EXPERIMENTAL DESIGN & CONTROLLED BENCHMARK
              </h2>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
                In-Vivo MRI Dataset & Controlled Evaluation Protocol
              </h3>
            </div>

            <p className="text-base text-[#20243C] font-medium leading-relaxed">
              Experiments were conducted on T1-weighted 3T structural MRI acquisitions from 52 participants (26 early-stage ALS patients and 26 matched controls), generating 3,796 axial slices. The dataset was evaluated using a 34-class fused atlas-derived pseudo-reference across 5 repeated runs with 95% confidence intervals.
            </p>

            <div className="p-5 rounded-2xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#20243C] block">
                Controlled Experimental Variables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-[#20243C]">
                <div className="p-3 bg-[#FFFFFF] rounded-lg border border-[#D9DDEE]">
                  <span className="text-[#9091DF] font-bold block mb-1">DECODER VARIATIONS</span>
                  <span>9 decoder architectures evaluated under common ResNet-34 backbones.</span>
                </div>
                <div className="p-3 bg-[#FFFFFF] rounded-lg border border-[#D9DDEE]">
                  <span className="text-[#9091DF] font-bold block mb-1">LOSS OBJECTIVES</span>
                  <span>6 loss functions: Dice, Jaccard, Focal, SoftCE, DiceFocal, and DiceCE.</span>
                </div>
                <div className="p-3 bg-[#FFFFFF] rounded-lg border border-[#D9DDEE]">
                  <span className="text-[#9091DF] font-bold block mb-1">ENCODER INFLUENCE</span>
                  <span>Evaluated backbone depth and ImageNet-pretrained vs random initialization.</span>
                </div>
              </div>
            </div>
          </section>

          {/* 05. REPRESENTATIVE RESULTS */}
          <section className="bg-[#20243C] text-[#FBFBFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]/20 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#DFF8E1]">
              <Award className="w-4 h-4 text-[#DFF8E1]" />
              <span>05. REPRESENTATIVE RESULTS & METRICS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#181A2D] p-4 rounded-xl border border-[#A0A1F8]/20 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#A0A1F8]">
                  <CheckCircle2 className="w-4 h-4 text-[#DFF8E1]" />
                  <span>DiceCE Consistency</span>
                </div>
                <p className="text-sm font-semibold text-[#FBFBFF]">
                  DiceCE produced the highest macro mIoU for every evaluated decoder in the common ResNet-34 benchmark.
                </p>
              </div>

              <div className="bg-[#181A2D] p-4 rounded-xl border border-[#A0A1F8]/20 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#A0A1F8]">
                  <CheckCircle2 className="w-4 h-4 text-[#DFF8E1]" />
                  <span>Parameter Efficiency</span>
                </div>
                <p className="text-sm font-semibold text-[#FBFBFF]">
                  N-DecoNet achieved competitive macro mIoU (0.753 under DiceCE) with 21.5M parameters.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#A0A1F8]/10 border border-[#A0A1F8]/30">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A0A1F8] block mb-1">
                Why It Matters:
              </span>
              <p className="text-sm font-medium text-[#B9E0FC] italic">
                “Demonstrates that task-matched decoder architecture and loss function selection have a clearer impact than simply increasing encoder depth when segmenting small structures under fused atlas-derived labels.”
              </p>
            </div>
          </section>

          {/* 06. INTERACTIVE DESIGN COMPARISON */}
          <section className="space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
              06. INTERACTIVE DESIGN BENCHMARK
            </div>
            <DecoderEfficiencyChart />
          </section>

          {/* 07. QUALITATIVE RESULTS & DESIGN LESSONS */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
                07. QUALITATIVE RESULTS & DESIGN LESSONS
              </h2>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
                Qualitative Segmentation & Subregional Agreement
              </h3>
            </div>

            <ScientificFigure
              src="/images/work/brainstem-segmentation/segmentation-results-lessons.webp"
              alt="Qualitative Brainstem Segmentation Results and Model-Design Lessons"
              subheading="Figure 2: Qualitative Segmentation Results & Model-Design Lessons"
              caption="Qualitative comparison showing fused atlas-derived labels alongside predictions from evaluated baseline decoders and N-DecoNet."
              interpretationNote="Visual coherence demonstrates spatial agreement with the fused atlas-derived labels across 34 anatomical subregions."
            />

            <div className="bg-[#F8F9FE] p-5 rounded-2xl border border-[#E0E4F4] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#20243C] block">
                Key Architectural Lessons Learned:
              </span>
              <ul className="space-y-2 text-xs text-[#20243C] font-medium">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF] mt-1.5 shrink-0" />
                  <span><strong>Loss Objective Dominance:</strong> Loss configuration (especially DiceCE) was critical for handling class imbalance and small target nuclei.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF] mt-1.5 shrink-0" />
                  <span><strong>Decoder Architecture Choice:</strong> Pyramid and aggregated multi-stage feature representations (FPN, DeepLabV3, N-DecoNet) outperformed traditional UNet variants.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 08. INTERPRETATION BOUNDARIES */}
          <section className="bg-[#FBFBFF] p-6 sm:p-8 rounded-2xl border-2 border-dashed border-[#A0A1F8]/60 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#20243C]">
              <ShieldCheck className="w-4 h-4 text-[#9091DF]" />
              <span>08. INTERPRETATION BOUNDARIES & SCIENTIFIC RIGOR</span>
            </div>
            <p className="text-xs text-[#626A7C] font-mono uppercase tracking-wider">
              What this study supports vs. what it does NOT claim:
            </p>
            <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#D9DDEE] text-sm font-medium text-[#20243C] leading-relaxed space-y-2">
              <p>
                • <strong>Existing Atlas Limitations:</strong> The fused atlas-derived reference provides computational pseudo-reference labels, not expert subject-specific ground truth.
              </p>
              <p>
                • <strong>Later Task-Oriented Atlas Separation:</strong> A separate task-oriented atlas was created after this project to address missing nuclei and pathways; it was not used for training the ISBI 2024 models.
              </p>
            </div>
          </section>

          {/* 09. WHAT THIS STUDY CHANGED */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
              09. WHAT THIS STUDY CHANGED
            </h2>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
              Practical Guidelines for Small Structure Segmentation
            </h3>
            <p className="text-sm text-[#20243C] font-medium leading-relaxed">
              Demonstrated that for small, low-contrast brainstem structures, task-matched decoder architecture and loss function selection have a clearer effect than increasing backbone depth or relying on natural image pretraining.
            </p>
          </section>

          {/* 10. MY CONTRIBUTION */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
              10. PERSONAL ROLE & INDIVIDUAL CONTRIBUTION
            </h2>
            <p className="text-sm text-[#20243C] font-medium leading-relaxed">
              As first author, formulated the experimental setup, implemented proposed decoder variants (N-DecoNet, U-DecoNet), conducted cross-validation across 9 decoders and 6 loss functions, evaluated quantitative macro mIoU metrics, authored the manuscript, and presented the poster at IEEE ISBI 2024.
            </p>
          </section>

          {/* 11. RELATED PUBLICATION */}
          <section className="bg-[#F8F9FE] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
              11. RELATED PUBLICATION
            </h2>
            <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#D9DDEE] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#626A7C] uppercase block mb-1">
                  IEEE ISBI 2024 • Poster Presentation
                </span>
                <h4 className="text-base font-bold text-[#20243C]">
                  Deep Neural Networks Comparison for MRI Segmentation of the Brainstem
                </h4>
                <p className="text-xs text-[#626A7C] mt-1 font-semibold">
                  Seoyoung Oh, Mélanie Pélégrini-Issac, Hélène Urien, Véronique Marchand-Pauvert, Jérémie Sublime
                </p>
              </div>

              <Link
                to="/publications/brainstem-segmentation"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#20243C] text-[#FBFBFF] px-4 py-2.5 rounded-xl hover:bg-[#9091DF] transition-colors shrink-0"
              >
                <Layers className="w-4 h-4 text-[#A0A1F8]" />
                <span>Publication Page</span>
              </Link>
            </div>
          </section>

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

