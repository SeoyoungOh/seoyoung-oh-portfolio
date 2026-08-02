import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ScientificFigure } from '../components/ScientificFigure';
import { CalibrationTradeoffChart } from '../components/reliable-normal-projection/CalibrationTradeoffChart';
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
  ShieldCheck,
  Target,
  Sparkles,
  Activity,
  Boxes,
  Cpu,
  Microscope,
  Compass,
  Zap,
} from 'lucide-react';

export const ReliableNormalProjectionDetail: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Reliable Normal Projection with Healthy-Reference Calibration | Seoyoung Oh";
    window.scrollTo(0, 0);
  }, []);

  const localPaperPath = "/papers/reliable-normal-projection-eccv-2026.pdf";
  const publicationSlug = "reliable-normal-projection";

  return (
    <div className="min-h-screen bg-[#FBFBFF] pt-24 pb-16 text-[#20243C]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================================================== */}
        {/* 1. HEADER & NAVIGATION                             */}
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
            {['MEDICAL AI', 'GENERATIVE MODELING', 'RELIABLE EVIDENCE', 'DIFFUSION MODELS'].map((badge) => (
              <span
                key={badge}
                className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#A0A1F8]/15 text-[#20243C] border border-[#A0A1F8]/30"
              >
                {badge}
              </span>
            ))}
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA]">
              Accepted
            </span>
            <span className="text-[11px] font-semibold text-[#626A7C]">
              ECCV 2026 Workshop — MedFM-Bench
            </span>
          </div>

          {/* Title & Subtitle */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#20243C] tracking-tight leading-tight mb-3">
            Reliable Normal Projection with Healthy-Reference Calibration for Brain MRI Anomaly Localization
          </h1>
          <p className="text-lg sm:text-xl font-medium text-[#626A7C] mb-8">
            Healthy-only 3D normal projection for calibrated and uncertainty-aware anomaly evidence
          </p>
        </div>

        {/* ================================================== */}
        {/* 2. OPENING QUESTION BANNER                         */}
        {/* ================================================== */}
        <div className="bg-[#20243C] text-[#FBFBFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]/20 mb-10 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#A0A1F8] mb-3">
            <HelpCircle className="w-4 h-4 text-[#DFF8E1]" />
            <span>OPENING QUESTION</span>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-[#B9E0FC] italic leading-snug mb-3">
            “What if an anomaly map looks convincing—but the evidence itself cannot be trusted?”
          </p>
          <p className="text-sm font-medium text-[#FBFBFF]/80 leading-relaxed border-t border-[#D9DDEE]/20 pt-3">
            Normal-only generative models can reconstruct healthy brain anatomy, but uncalibrated intensity residuals confuse real pathological change with anatomical variability, scanner differences, and projection instability.
          </p>
        </div>

        {/* ================================================== */}
        {/* 3. ACTION LINKS BAR                                */}
        {/* ================================================== */}
        <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-[#FFFFFF] border border-[#D9DDEE] mb-12 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#626A7C] mr-2">
            Dissemination Artifacts:
          </span>
          <a
            href={localPaperPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#A0A1F8] text-[#20243C] px-3.5 py-2 rounded-lg hover:bg-[#B6BAFA] transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Read Paper (PDF)</span>
          </a>
          <Link
            to={`/publications/${publicationSlug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#20243C] text-[#FBFBFF] px-3.5 py-2 rounded-lg hover:bg-[#9091DF] transition-colors"
          >
            <Layers className="w-3.5 h-3.5 text-[#A0A1F8]" />
            <span>ECCV Workshop Publication Details</span>
          </Link>
        </div>

        {/* ================================================== */}
        {/* 4. DETAILED SCIENTIFIC & METHODOLOGICAL SECTIONS   */}
        {/* ================================================== */}
        <div className="space-y-10 text-[#20243C]">

          {/* SECTION 1: THE NORMAL-ONLY RESEARCH PROBLEM */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-3">
              01. THE NORMAL-ONLY RESEARCH PROBLEM
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-[#20243C] mb-3">
              Learning Anomaly Detection Under Severe Annotation Scarcity
            </h3>
            <p className="text-sm sm:text-base text-[#20243C] leading-relaxed mb-4">
              In neurodegenerative diseases (such as ALS) and rare brain conditions, dense voxel-wise lesion annotations are either impossible to acquire or biologically ill-defined. Consequently, machine learning models must operate under a <strong>normal-only learning paradigm</strong>: learning the distribution of healthy brain anatomy P(X_healthy) and detecting pathology as deviations from this learned norm.
            </p>
            <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#626A7C] block mb-1">
                The Core Technical Bottleneck:
              </span>
              <p className="text-xs sm:text-sm text-[#20243C] leading-relaxed">
                Generative normal projection maps an abnormal scan X to its closest healthy counterpart X_recon. However, taking the simple absolute difference |X - X_recon| creates visually compelling heatmaps that are heavily contaminated by non-pathological noise.
              </p>
            </div>
          </section>

          {/* SECTION 2: WHY RAW RESIDUAL MAGNITUDE IS UNRELIABLE */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#20243C] text-[#FBFBFF] p-6 sm:p-8 rounded-2xl border border-[#20243C]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#A0A1F8] mb-3">
                <AlertTriangle className="w-4 h-4 text-[#DFF8E1]" />
                <span>WHY RAW RESIDUALS FAIL</span>
              </div>
              <h3 className="text-base font-bold text-[#B9E0FC] mb-3">
                Uncalibrated False-Positive Flaws
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#FBFBFF]/90 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-[#A0A1F8] font-bold">•</span>
                  <span><strong>Anatomical Variability:</strong> Natural skull shape and cortical gyrification differences create high residual peaks on healthy scans.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A0A1F8] font-bold">•</span>
                  <span><strong>Registration & Preprocessing Noise:</strong> Alignment shifts manifest as false high-magnitude boundary residuals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A0A1F8] font-bold">•</span>
                  <span><strong>High FPR:</strong> Uncalibrated raw residual thresholds yield a <strong>27.4% false positive rate</strong> on healthy test cohorts.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#DFF8E1]/20 p-6 sm:p-8 rounded-2xl border border-[#C8DFCA]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#20243C] mb-3">
                <ShieldCheck className="w-4 h-4 text-[#20243C]" />
                <span>OUR REFRAMING & SOLUTION</span>
              </div>
              <h3 className="text-base font-bold text-[#20243C] mb-3">
                Healthy-Reference Calibration
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#20243C] font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-[#9091DF] font-bold">•</span>
                  <span><strong>Statistical Bound:</strong> Treat residual maps as hypothesis candidate evidence that must satisfy a strict false-positive bound (&alpha;).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9091DF] font-bold">•</span>
                  <span><strong>Held-Out Reference Cohort:</strong> Compute spatial empirical null distributions exclusively on healthy control scans.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9091DF] font-bold">•</span>
                  <span><strong>Noise Suppression:</strong> Reduces healthy FPR to <strong>4.7%</strong> (at nominal &alpha;=0.05) while preserving target spatial concentration.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 3: 3D LATENT DIFFUSION NORMAL-PROJECTION BACKBONE */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-3">
              02. 3D LATENT DIFFUSION NORMAL-PROJECTION BACKBONE
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-[#20243C] mb-3">
              Generative Reconstruction onto the Healthy Manifold
            </h3>
            <p className="text-sm sm:text-base text-[#20243C] leading-relaxed mb-6">
              The core generative backbone utilizes a 3D Latent Diffusion Model (LDM) trained strictly on healthy 3D brain MRI volumes. When an unseen subject scan X is processed:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                <div className="text-xs font-mono font-bold text-[#9091DF] mb-1">STEP 1. LATENT ENCODING</div>
                <p className="text-xs text-[#20243C]">Encodes 3D volume into a compact anatomical latent space Z = E(X).</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                <div className="text-xs font-mono font-bold text-[#9091DF] mb-1">STEP 2. MANIFOLD PROJECTION</div>
                <p className="text-xs text-[#20243C]">Applies stochastic reverse diffusion to project Z onto healthy latent manifold Z_norm.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                <div className="text-xs font-mono font-bold text-[#9091DF] mb-1">STEP 3. 3D RECONSTRUCTION</div>
                <p className="text-xs text-[#20243C]">Decodes healthy latent state into reconstructed 3D volume X_recon = D(Z_norm).</p>
              </div>
            </div>
          </section>

          {/* SECTION 4: STRICT HEALTHY-ONLY DATA & CALIBRATION PROTOCOL */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-3">
              03. STRICT HEALTHY-ONLY CALIBRATION PROTOCOL
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-[#20243C] mb-3">
              Zero Data Leakage Calibration Policy
            </h3>
            <p className="text-sm sm:text-base text-[#20243C] leading-relaxed mb-4">
              A major methodological strength of this work is its strict adherence to zero-leakage evaluation. Calibration parameters—including empirical residual scaling factors, spatial quantile maps, and decision threshold &alpha;—are computed <strong>exclusively on held-out healthy control subjects</strong>.
            </p>
            <div className="bg-[#B6BAFA]/15 p-4 rounded-xl border border-[#B6BAFA]/40 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#9091DF] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-semibold text-[#20243C]">
                No abnormal patient scans, synthetic tumor labels, or lesion annotations are EVER used during model training or calibration parameter selection.
              </p>
            </div>
          </section>

          {/* SECTION 5: MULTI-VIEW & MULTI-SCALE RESIDUAL EVIDENCE */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-3">
              04. MULTI-VIEW & MULTI-SCALE RESIDUAL EVIDENCE
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-[#20243C] mb-3">
              Multi-Planar Aggregation & Feature-Space Residuals
            </h3>
            <p className="text-sm sm:text-base text-[#20243C] leading-relaxed mb-4">
              Single-view planar reconstructions suffer from directional slice artifacts. To overcome this, our pipeline aggregates residual evidence across three spatial orientations (axial, coronal, sagittal) and across multi-resolution U-Net feature maps.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                <div className="text-xs font-bold text-[#20243C] uppercase mb-1">Multi-Planar Consensus</div>
                <p className="text-xs text-[#626A7C]">Combines axial, coronal, and sagittal projection views to filter out view-dependent slice boundary artifacts.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                <div className="text-xs font-bold text-[#20243C] uppercase mb-1">Multi-Scale Feature Residuals</div>
                <p className="text-xs text-[#626A7C]">Evaluates latent spatial difference vectors across coarse structural scales and fine voxel-level details.</p>
              </div>
            </div>
          </section>

          {/* SECTION 6: HEALTHY-RISK OPTIMIZED FUSION & UNCERTAINTY */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Healthy-Risk Fusion */}
            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-3">
                05. HEALTHY-RISK OPTIMIZED FUSION
              </h2>
              <h3 className="text-base font-bold text-[#20243C] mb-2">
                Constrained Risk Optimization
              </h3>
              <p className="text-xs sm:text-sm text-[#626A7C] leading-relaxed">
                Multi-view evidence components are merged by solving an optimization problem that minimizes expected false-positive energy on healthy validation controls subject to FPR &le; &alpha;.
              </p>
            </div>

            {/* Projection Uncertainty */}
            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-3">
                06. PROJECTION UNCERTAINTY
              </h2>
              <h3 className="text-base font-bold text-[#20243C] mb-2">
                Stochastic Disagreement Gating
              </h3>
              <p className="text-xs sm:text-sm text-[#626A7C] leading-relaxed">
                Running K stochastic diffusion sampling trajectories yields a voxel-wise projection variance map &sigma;&sup2;_proj(x,y,z). High-variance regions indicate model reconstruction instability and are gated out.
              </p>
            </div>

          </section>

          {/* SECTION 7: INTERACTIVE CALIBRATION TRADEOFF CHART */}
          <CalibrationTradeoffChart />

          {/* SECTION 8: QUALITATIVE EVIDENCE & SCIENTIFIC FIGURES */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-3">
              07. QUALITATIVE EVIDENCE & MULTI-DATASET BENCHMARKS
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-[#20243C] mb-4">
              Visualizing Calibrated Evidence Across BraTS, MSLesSeg, and PULSE
            </h3>

            {/* Figure 1: Qualitative Anomaly Evidence */}
            <ScientificFigure
              src="/images/work/reliable-normal-projection/qualitative-anomaly-evidence.webp"
              alt="Qualitative anomaly evidence comparison across BraTS, MSLesSeg, and PULSE"
              subheading="Figure 1: Multi-Dataset Qualitative Evidence Comparison"
              caption="Qualitative evaluation of healthy-reference calibrated normal projection across synthetic tumor anomalies (BraTS), focal multiple sclerosis lesions (MSLesSeg), and unannotated neurodegenerative brainstem MRI scans (PULSE). Calibrated normal projection successfully suppresses non-pathological cortical noise on healthy subjects while accurately isolating lesion boundaries."
              interpretationNote="Notice how raw residual maps exhibit high false-positive intensity across healthy cortical gray matter, whereas healthy-reference calibration restricts evidence to true pathological regions."
              surfaceColor="white"
            />

            {/* Figure 2: Anatomical ROI Evaluation */}
            <ScientificFigure
              src="/images/work/reliable-normal-projection/pulse-brainstem-evidence.webp"
              alt="Anatomical ROI residual evidence concentration in target brainstem structures"
              subheading="Figure 2: Anatomical ROI Evidence Concentration in PULSE Brainstem MRI"
              caption="Residual evidence concentration in targeted anatomical structures (corticospinal tract / brainstem) vs. size-matched unrelated control ROIs across whole-brain T1-weighted, brainstem-focused T1-weighted, and multimodal T1w + Fractional Anisotropy (FA) input regimes. Target ROIs show 3.10× higher evidence concentration than control ROIs (p < 0.05 over 5 permutation runs)."
              interpretationNote="The brainstem focus mask is evaluated strictly as an anatomical spatial ROI to measure signal enrichment, not as a supervised disease ground truth."
              surfaceColor="white"
            />
          </section>

          {/* SECTION 9: MULTI-DATASET QUANTITATIVE BENCHMARKS */}
          <section className="bg-[#20243C] text-[#FBFBFF] p-6 sm:p-8 rounded-2xl border border-[#20243C]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#DFF8E1] mb-4">
              <Activity className="w-4 h-4 text-[#DFF8E1]" />
              <span>08. VERIFIED QUANTITATIVE BENCHMARK METRICS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#181A2D] p-5 rounded-xl border border-[#A0A1F8]/20">
                <div className="text-xs font-mono font-bold text-[#A0A1F8] uppercase mb-1">BraTS Benchmark</div>
                <div className="text-2xl font-black text-[#FBFBFF] mb-1">0.61 AUPRC</div>
                <p className="text-xs text-[#B9E0FC]">Pixel-wise Precision-Recall AUC on synthetic/real tumor lesions.</p>
              </div>

              <div className="bg-[#181A2D] p-5 rounded-xl border border-[#A0A1F8]/20">
                <div className="text-xs font-mono font-bold text-[#A0A1F8] uppercase mb-1">MSLesSeg Benchmark</div>
                <div className="text-2xl font-black text-[#FBFBFF] mb-1">0.48 AUPRC</div>
                <p className="text-xs text-[#B9E0FC]">Pixel-wise AUPRC on focal MS white matter hyperintensities.</p>
              </div>

              <div className="bg-[#181A2D] p-5 rounded-xl border border-[#A0A1F8]/20">
                <div className="text-xs font-mono font-bold text-[#DFF8E1] uppercase mb-1">PULSE Brainstem ROI</div>
                <div className="text-2xl font-black text-[#DFF8E1] mb-1">3.10× Ratio</div>
                <p className="text-xs text-[#B9E0FC]">Target vs size-matched control ROI concentration (p &lt; 0.05, 5 runs).</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#A0A1F8]/10 border border-[#A0A1F8]/30 text-xs sm:text-sm text-[#B9E0FC] leading-relaxed">
              <span className="font-bold text-[#FBFBFF] block mb-1">Healthy Control Safety Bound:</span>
              At nominal target $\alpha = 0.05$, the observed false positive rate on held-out healthy control MRI scans was <strong>4.7% (0.047)</strong>, demonstrating rigorous noise bound compliance across datasets.
            </div>
          </section>

          {/* SECTION 10: DOMAIN SHIFT & SCANNER ROBUSTNESS */}
          <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-3">
              09. DOMAIN SHIFT & SCANNER ROBUSTNESS
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-[#20243C] mb-3">
              Cross-Scanner & Acquisition Stability
            </h3>
            <p className="text-sm sm:text-base text-[#20243C] leading-relaxed mb-4">
              To verify that healthy-reference calibration does not break down under domain shifts, models were tested across distinct MRI scanner manufacturers (Siemens 3T vs GE 1.5T) and varying acquisition protocols.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                <span className="text-xs font-bold text-[#20243C] uppercase block mb-1">Cross-Field Strength Stability</span>
                <p className="text-xs text-[#626A7C]">Calibration parameters derived on 3T healthy controls successfully bounded false positives on 1.5T test scans (observed FPR = 0.049).</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
                <span className="text-xs font-bold text-[#20243C] uppercase block mb-1">Resampling & Preprocessing Robustness</span>
                <p className="text-xs text-[#626A7C]">Multi-scale feature residual aggregation maintained stability under spatial resolution resampling and skull-stripping variations.</p>
              </div>
            </div>
          </section>

          {/* SECTION 11: INTERPRETATION BOUNDARIES & RIGOR */}
          <section className="bg-[#FBFBFF] p-6 sm:p-8 rounded-2xl border-2 border-dashed border-[#A0A1F8]/60">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#20243C] mb-3">
              <AlertTriangle className="w-4 h-4 text-[#9091DF]" />
              <span>10. INTERPRETATION BOUNDARIES & SCIENTIFIC RIGOR</span>
            </div>
            <p className="text-xs font-mono text-[#626A7C] uppercase tracking-wider mb-3">
              What this research does NOT claim or prove:
            </p>
            <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#D9DDEE] space-y-3 text-xs sm:text-sm font-medium text-[#20243C] leading-relaxed">
              <p>
                • <strong>Hypothesis-Generating Evidence Only:</strong> The output maps represent calibrated, false-positive-controlled deviation evidence—NOT supervised disease segmentation masks.
              </p>
              <p>
                • <strong>No ALS Voxel-Wise Ground Truth Claim:</strong> In unannotated neurodegenerative brainstem settings (PULSE), the residual maps reflect statistical anatomical deviations, NOT voxel-wise ALS pathology ground truth.
              </p>
              <p>
                • <strong>No Clinical Diagnostic Claim:</strong> This methodology is a scientific research framework for evidence evaluation under annotation scarcity; it is NOT a clinical diagnostic tool or validated biomarker.
              </p>
              <p>
                • <strong>Spatial Focus Mask Distinction:</strong> Brainstem anatomical focus masks are utilized exclusively for ROI spatial signal enrichment analysis—never presented as validated disease target boundaries.
              </p>
            </div>
          </section>

        </div>

        {/* ================================================== */}
        {/* BOTTOM NAVIGATION                                  */}
        {/* ================================================== */}
        <div className="mt-12 pt-8 border-t border-[#D9DDEE] flex items-center justify-between">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#20243C] hover:text-[#9091DF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </Link>
          <Link
            to={`/publications/${publicationSlug}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9091DF] hover:text-[#20243C] transition-colors"
          >
            <span>View Related Publication</span>
            <Layers className="w-4 h-4" />
          </Link>
        </div>

      </div>

      <Footer />
    </div>
  );
};
