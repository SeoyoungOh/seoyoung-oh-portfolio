import React, { useState } from 'react';
import { 
  FileText, ShieldAlert, ShieldCheck, CheckCircle2, AlertCircle, Info, Maximize2, X, 
  HelpCircle, Sparkles, Layers, Sliders, Target, Eye, Compass, UserCheck
} from 'lucide-react';
import { VisibleLesionResultsChart } from './VisibleLesionResultsChart';
import { SmallLesionResultsChart } from './SmallLesionResultsChart';
import { CalibrationTradeoffChart } from './CalibrationTradeoffChart';
import { ROICentricResultsChart } from './ROICentricResultsChart';
import { ReliabilityAblationChart } from './ReliabilityAblationChart';

export const Eccv2026Content: React.FC = () => {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string; title: string } | null>(null);

  return (
    <div className="space-y-16 py-8 border-t border-[#D9DDEE]/60 text-[#20243C]">

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-[#20243C]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative max-w-5xl w-full bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#D9DDEE] pb-3">
              <h4 className="font-bold text-lg text-[#20243C]">{activeImage.title}</h4>
              <button 
                onClick={() => setActiveImage(null)}
                className="p-1.5 rounded-lg bg-[#F8F9FE] text-[#20243C] hover:bg-[#D9DDEE] transition-colors cursor-pointer"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex justify-center max-h-[75vh] overflow-auto">
              <img 
                src={activeImage.src} 
                alt={activeImage.alt} 
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 1. RESEARCH MOTIVATION */}
      {/* ==================================================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            <HelpCircle className="w-4 h-4 text-[#9091DF]" />
            <span>RESEARCH MOTIVATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#20243C]">
            Residual deviations are not trustworthy anomaly evidence by default.
          </h2>
        </div>

        <p className="text-base sm:text-lg text-[#626A7C] leading-relaxed">
          Reliable normal projection maps an unseen MRI scan toward a learned healthy reference and evaluates the resulting patient-to-healthy deviations. However, a large residual may reflect disease-related change, normal anatomical variability, imaging artifacts, registration mismatch, scanner or protocol differences, partial-volume effects, or instability in the normal projection itself. The central problem is therefore not only to generate a plausible healthy projection, but to determine which residual evidence is sufficiently stable and well calibrated to retain.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-2">
            <div className="text-xs font-mono font-bold text-[#9091DF] uppercase tracking-wider">01. Annotation Scarcity</div>
            <p className="text-sm font-medium text-[#20243C]">
              Routine ALS MRI does not provide an established voxel-wise disease ground truth for brainstem involvement.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-2">
            <div className="text-xs font-mono font-bold text-[#9091DF] uppercase tracking-wider">02. Ambiguous Residuals</div>
            <p className="text-sm font-medium text-[#20243C]">
              Patient-to-healthy differences may reflect pathology, but also benign anatomy, artifacts, acquisition variation, or projection instability.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-2">
            <div className="text-xs font-mono font-bold text-[#9091DF] uppercase tracking-wider">03. Reliability Requirement</div>
            <p className="text-sm font-medium text-[#20243C]">
              Evidence should be projection-consistent, low-uncertainty, and selected using a false-positive operating point fixed on healthy reference scans.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#A0A1F8]/10 border border-[#9091DF]/30 flex items-center gap-3">
          <Info className="w-5 h-5 text-[#9091DF] shrink-0" />
          <p className="text-xs sm:text-sm font-bold text-[#20243C]">
            The output is calibrated selective evidence—not a supervised segmentation mask or a voxel-wise ALS pathology map.
          </p>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. MOTIVATION AND OVERVIEW FIGURE */}
      {/* ==================================================================== */}
      <section className="space-y-4">
        <div className="bg-[#FFFFFF] border border-[#D9DDEE] rounded-2xl p-4 sm:p-6 space-y-4 shadow-xs">
          <div className="relative group overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#F8F9FE]">
            <img 
              src="/images/publications/eccv-2026/motivation-overview.webp"
              alt="Overview showing the lack of voxel-wise ALS brainstem ground truth, projection of an unseen MRI scan toward a learned healthy manifold, and selection of healthy-calibrated anomaly evidence across visible-lesion and ROI-centric evaluation regimes."
              className="w-full h-auto object-contain max-h-[500px]"
            />
            <button
              onClick={() => setActiveImage({
                src: "/images/publications/eccv-2026/motivation-overview.webp",
                alt: "Overview showing the lack of voxel-wise ALS brainstem ground truth, projection of an unseen MRI scan toward a learned healthy manifold, and selection of healthy-calibrated anomaly evidence across visible-lesion and ROI-centric evaluation regimes.",
                title: "Motivation and Overview"
              })}
              className="absolute top-3 right-3 p-2 rounded-lg bg-[#20243C]/80 text-[#FBFBFF] hover:bg-[#20243C] transition-colors cursor-pointer inline-flex items-center gap-1.5 text-xs font-bold"
              aria-label="Enlarge figure"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Enlarge</span>
            </button>
          </div>
          <figcaption className="text-xs sm:text-sm text-[#626A7C] font-medium leading-relaxed">
            <strong>Figure 1: Motivation and overview.</strong> Routine in-vivo ALS MRI lacks established voxel-wise ground truth for brainstem involvement. The framework maps unseen MRI toward a learned healthy manifold and converts residual deviations into healthy-calibrated selective evidence.
          </figcaption>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. HEALTHY-ONLY LEARNING AND CALIBRATION */}
      {/* ==================================================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            <ShieldCheck className="w-4 h-4 text-[#9091DF]" />
            <span>HEALTHY-ONLY PROTOCOL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#20243C]">
            Every model and threshold decision is fixed before patient evaluation.
          </h2>
        </div>

        <p className="text-base text-[#626A7C] leading-relaxed">
          The complete framework is trained, selected, and calibrated using healthy MRI only. Downstream patient data are reserved strictly for final evaluation. OpenBHB provides 5,330 healthy reference samples and is split into four non-overlapping roles using a 70/10/10/10 ratio.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-1.5">
            <div className="text-xs font-mono font-bold text-[#20243C]">01. TRAINING — 70%</div>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Fits the latent autoencoder, latent diffusion teacher, and fast projection student.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-1.5">
            <div className="text-xs font-mono font-bold text-[#20243C]">02. VALIDATION — 10%</div>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Selects checkpoints, residual-fusion weights, and uncertainty-penalty parameters.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-1.5">
            <div className="text-xs font-mono font-bold text-[#20243C]">03. CALIBRATION — 10%</div>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Fixes the projection-uncertainty cutoff and the FPR-controlled anomaly-score threshold.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-1.5">
            <div className="text-xs font-mono font-bold text-[#20243C]">04. HEALTHY TEST — 10%</div>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Measures final held-out healthy false-positive behavior after all choices have been locked.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] text-xs text-[#20243C] leading-relaxed font-medium">
          <strong>Strict Leakage Control:</strong> No BraTS, MSLesSeg, ADNI, or PULSE image, diagnostic label, lesion mask, or disease-specific ROI is used for model fitting, hyperparameter selection, residual fusion, uncertainty filtering, or threshold calibration.
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. PROPOSED FRAMEWORK */}
      {/* ==================================================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            <Sparkles className="w-4 h-4 text-[#9091DF]" />
            <span>PROPOSED FRAMEWORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#20243C]">
            From normal projection to projection-consistent selective evidence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] space-y-2 shadow-xs">
            <div className="text-xs font-mono font-bold text-[#9091DF]">STAGE 1</div>
            <h4 className="font-bold text-sm text-[#20243C]">Healthy Latent Representation</h4>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              A three-dimensional encoder–decoder learns a compact representation of healthy brain anatomy.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] space-y-2 shadow-xs">
            <div className="text-xs font-mono font-bold text-[#9091DF]">STAGE 2</div>
            <h4 className="font-bold text-sm text-[#20243C]">Latent Diffusion Teacher</h4>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              A diffusion model learns the distribution of healthy latent representations and defines iterative normal projection.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] space-y-2 shadow-xs">
            <div className="text-xs font-mono font-bold text-[#9091DF]">STAGE 3</div>
            <h4 className="font-bold text-sm text-[#20243C]">Fast Projection Student</h4>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              The iterative teacher projection is distilled into a practical one-step student for volumetric inference.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] space-y-2 shadow-xs">
            <div className="text-xs font-mono font-bold text-[#9091DF]">STAGE 4</div>
            <h4 className="font-bold text-sm text-[#20243C]">Multi-View Residual Evidence</h4>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Pixel-space, latent-space, and high-frequency residuals are extracted at multiple spatial scales.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] space-y-2 shadow-xs">
            <div className="text-xs font-mono font-bold text-[#9091DF]">STAGE 5</div>
            <h4 className="font-bold text-sm text-[#20243C]">Projection-Disagreement Uncertainty</h4>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Four stochastic normal projections estimate whether residual evidence remains stable across plausible healthy references.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] space-y-2 shadow-xs">
            <div className="text-xs font-mono font-bold text-[#9091DF]">STAGE 6</div>
            <h4 className="font-bold text-sm text-[#20243C]">Healthy-Calibrated Selection</h4>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              A lower-confidence-bound score penalizes unstable evidence before FPR-controlled thresholding on held-out healthy scans.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] text-xs sm:text-sm text-[#20243C] font-mono leading-relaxed">
          <strong>Mathematical Principle:</strong> Final evidence retains voxels whose residual signal remains strong after subtracting a projection-disagreement penalty and whose score exceeds the healthy-calibrated operating threshold.
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 5. MAIN FRAMEWORK FIGURE */}
      {/* ==================================================================== */}
      <section className="space-y-4">
        <div className="bg-[#FFFFFF] border border-[#D9DDEE] rounded-2xl p-4 sm:p-6 space-y-4 shadow-xs">
          <div className="relative group overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#F8F9FE]">
            <img 
              src="/images/publications/eccv-2026/reliable-normal-projection-framework.webp"
              alt="Framework showing healthy-only latent representation learning, diffusion teacher training, fast student projection, multi-view residual extraction, projection-disagreement uncertainty, lower-confidence evidence, and false-positive-controlled anomaly selection."
              className="w-full h-auto object-contain max-h-[600px]"
            />
            <button
              onClick={() => setActiveImage({
                src: "/images/publications/eccv-2026/reliable-normal-projection-framework.webp",
                alt: "Framework showing healthy-only latent representation learning, diffusion teacher training, fast student projection, multi-view residual extraction, projection-disagreement uncertainty, lower-confidence evidence, and false-positive-controlled anomaly selection.",
                title: "Reliable Normal Projection Framework"
              })}
              className="absolute top-3 right-3 p-2 rounded-lg bg-[#20243C]/80 text-[#FBFBFF] hover:bg-[#20243C] transition-colors cursor-pointer inline-flex items-center gap-1.5 text-xs font-bold"
              aria-label="Enlarge framework figure"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Enlarge</span>
            </button>
          </div>
          <figcaption className="text-xs sm:text-sm text-[#626A7C] font-medium leading-relaxed">
            <strong>Figure 2: Reliable normal projection with healthy-reference calibration.</strong> Healthy-only training builds the latent normal-projection backbone; inference maps an unseen scan toward a healthy reference and converts multi-view deviations into uncertainty-aware, FPR-controlled selective evidence.
          </figcaption>
          <div className="pt-2 border-t border-[#D9DDEE] text-xs font-bold text-[#20243C]">
            The final output is calibrated evidence, not a supervised segmentation mask or voxel-wise ALS pathology map.
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 6. EVALUATION REGIMES */}
      {/* ==================================================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            <Compass className="w-4 h-4 text-[#9091DF]" />
            <span>COMPLEMENTARY EVALUATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#20243C]">
            Four regimes test different evidence questions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] space-y-3">
            <div className="text-xs font-mono font-bold text-[#9091DF] uppercase">01. BraTS</div>
            <div className="text-sm font-bold text-[#20243C]">Visible Brain-Tumor Localization</div>
            <p className="text-xs text-[#626A7C]">Reference: Voxel-wise tumor masks used only for evaluation</p>
            <div className="text-[11px] font-mono text-[#20243C]">
              Metrics: Max-IoU, Pixel-AUPRC, Recall@10%, Small-lesion Recall@5%, Top-1% Dice
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] space-y-3">
            <div className="text-xs font-mono font-bold text-[#9091DF] uppercase">02. MSLesSeg</div>
            <div className="text-sm font-bold text-[#20243C]">Small & Multifocal MS Lesion Localization</div>
            <p className="text-xs text-[#626A7C]">Reference: Voxel-wise lesion masks used only for evaluation</p>
            <div className="text-[11px] font-mono text-[#20243C]">
              Metrics: Max-IoU, Pixel-AUPRC, Recall@10%, Small-lesion Recall@5%, Top-1% Dice
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] space-y-3">
            <div className="text-xs font-mono font-bold text-[#9091DF] uppercase">03. ADNI</div>
            <div className="text-sm font-bold text-[#20243C]">Mask-Free Neurodegeneration Analysis</div>
            <p className="text-xs text-[#626A7C]">Reference: Hippocampus-related anatomical ROIs</p>
            <div className="text-[11px] font-mono text-[#20243C]">
              Metrics: ROI concentration, reliable ROI concentration, FP@Non-ROI, Score IQR
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] space-y-3">
            <div className="text-xs font-mono font-bold text-[#9091DF] uppercase">04. PULSE</div>
            <div className="text-sm font-bold text-[#20243C]">ALS Brainstem ROI Reliability Stress Test</div>
            <p className="text-xs text-[#626A7C]">Reference: Task-oriented brainstem nuclei or pathway ROIs & unrelated control ROIs</p>
            <div className="text-[11px] font-mono text-[#20243C]">
              Metrics: ROI concentration, reliable ROI concentration, FP@Non-ROI, Score IQR, target-to-control enrichment
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] text-xs text-[#20243C] font-medium leading-relaxed">
          <strong>Interpretation Boundary:</strong> These regimes are complementary rather than interchangeable. BraTS and MSLesSeg evaluate visible-lesion localization where voxel-wise masks exist. ADNI and PULSE evaluate anatomical plausibility and off-target suppression when voxel-wise disease ground truth is unavailable.
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 7. VISIBLE-LESION LOCALIZATION */}
      {/* ==================================================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            <Target className="w-4 h-4 text-[#9091DF]" />
            <span>VISIBLE-LESION LOCALIZATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#20243C]">
            Healthy-calibrated evidence remains effective where lesion masks are available
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-[#20243C] text-[#FBFBFF] space-y-3">
            <div className="text-xs font-mono font-bold uppercase text-[#A0A1F8]">BraTS — Full Model</div>
            <div className="grid grid-cols-3 gap-2 pt-1 text-center">
              <div className="bg-[#FBFBFF]/10 p-2 rounded-lg">
                <div className="text-[10px] font-mono text-[#B9E0FC]">Max-IoU</div>
                <div className="text-lg font-black">0.46 ± 0.01</div>
              </div>
              <div className="bg-[#FBFBFF]/10 p-2 rounded-lg">
                <div className="text-[10px] font-mono text-[#B9E0FC]">Pixel-AUPRC</div>
                <div className="text-lg font-black">0.61 ± 0.01</div>
              </div>
              <div className="bg-[#FBFBFF]/10 p-2 rounded-lg">
                <div className="text-[10px] font-mono text-[#B9E0FC]">Recall@10%</div>
                <div className="text-lg font-black">0.69 ± 0.02</div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#20243C] text-[#FBFBFF] space-y-3">
            <div className="text-xs font-mono font-bold uppercase text-[#A0A1F8]">MSLesSeg — Full Model</div>
            <div className="grid grid-cols-3 gap-2 pt-1 text-center">
              <div className="bg-[#FBFBFF]/10 p-2 rounded-lg">
                <div className="text-[10px] font-mono text-[#B9E0FC]">Max-IoU</div>
                <div className="text-lg font-black">0.35 ± 0.01</div>
              </div>
              <div className="bg-[#FBFBFF]/10 p-2 rounded-lg">
                <div className="text-[10px] font-mono text-[#B9E0FC]">Pixel-AUPRC</div>
                <div className="text-lg font-black">0.48 ± 0.02</div>
              </div>
              <div className="bg-[#FBFBFF]/10 p-2 rounded-lg">
                <div className="text-[10px] font-mono text-[#B9E0FC]">Recall@10%</div>
                <div className="text-lg font-black">0.65 ± 0.02</div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-[#626A7C]">
          * Values are mean ± 95% confidence interval across five fixed-split, fixed-seed runs. Max-IoU is a threshold-swept reference metric. It was not used for calibration, operating-point selection, or mask-free evaluation.
        </p>
      </section>

      {/* ==================================================================== */}
      {/* 8. INTERACTIVE VISIBLE-LESION RESULTS */}
      {/* ==================================================================== */}
      <section>
        <VisibleLesionResultsChart />
      </section>

      {/* ==================================================================== */}
      {/* 9. SMALL-LESION SENSITIVITY */}
      {/* ==================================================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            <Eye className="w-4 h-4 text-[#9091DF]" />
            <span>SMALL-LESION SENSITIVITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#20243C]">
            False-positive control should not erase weak abnormalities
          </h2>
        </div>

        <p className="text-base text-[#626A7C] leading-relaxed">
          A conservative calibration strategy may reduce false positives by removing weak evidence, but it may also suppress small true abnormalities. Small lesions are defined as fewer than 5,000 voxels in BraTS and fewer than 300 voxels in MSLesSeg.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-2">
            <div className="text-xs font-mono font-bold text-[#9091DF]">BRATS SMALL LESIONS (&lt;5k voxels)</div>
            <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono">
              <div>
                <div className="text-[10px] text-[#626A7C]">Recall@5%</div>
                <div className="text-base font-bold text-[#20243C]">0.62 ± 0.01</div>
              </div>
              <div>
                <div className="text-[10px] text-[#626A7C]">Top-1% Dice</div>
                <div className="text-base font-bold text-[#20243C]">0.31 ± 0.02</div>
              </div>
              <div>
                <div className="text-[10px] text-[#626A7C]">Cal. Recall</div>
                <div className="text-base font-bold text-[#20243C]">0.60 ± 0.02</div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-2">
            <div className="text-xs font-mono font-bold text-[#9091DF]">MSLESSEG SMALL LESIONS (&lt;300 voxels)</div>
            <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono">
              <div>
                <div className="text-[10px] text-[#626A7C]">Recall@5%</div>
                <div className="text-base font-bold text-[#20243C]">0.56 ± 0.01</div>
              </div>
              <div>
                <div className="text-[10px] text-[#626A7C]">Top-1% Dice</div>
                <div className="text-base font-bold text-[#20243C]">0.26 ± 0.01</div>
              </div>
              <div>
                <div className="text-[10px] text-[#626A7C]">Cal. Recall</div>
                <div className="text-base font-bold text-[#20243C]">0.53 ± 0.02</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 10. INTERACTIVE SMALL-LESION RESULTS */}
      {/* ==================================================================== */}
      <section>
        <SmallLesionResultsChart />
      </section>

      {/* ==================================================================== */}
      {/* 11. FPR-CONTROLLED OPERATING POINT */}
      {/* ==================================================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            <Sliders className="w-4 h-4 text-[#9091DF]" />
            <span>CALIBRATED OPERATING POINT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#20243C]">
            Healthy-reference calibration makes the sensitivity–risk trade-off explicit
          </h2>
        </div>

        <p className="text-base text-[#626A7C] leading-relaxed">
          Uncalibrated lower-confidence evidence provides the highest lesion sensitivity, but also produces a high false-positive rate on held-out healthy scans. The selected operating point uses target FPR α = 0.05.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="p-4 rounded-xl bg-[#20243C] text-[#FBFBFF] space-y-1 text-center">
            <div className="text-[10px] font-mono text-[#A0A1F8]">Target FPR</div>
            <div className="text-lg font-black">0.050</div>
          </div>
          <div className="p-4 rounded-xl bg-[#20243C] text-[#FBFBFF] space-y-1 text-center">
            <div className="text-[10px] font-mono text-[#A0A1F8]">Healthy Test FPR</div>
            <div className="text-lg font-black">4.7%</div>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-1 text-center">
            <div className="text-[10px] font-mono text-[#626A7C]">BraTS Recall</div>
            <div className="text-lg font-black text-[#20243C]">0.67</div>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-1 text-center">
            <div className="text-[10px] font-mono text-[#626A7C]">BraTS Small</div>
            <div className="text-lg font-black text-[#20243C]">0.60</div>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-1 text-center">
            <div className="text-[10px] font-mono text-[#626A7C]">MS Recall</div>
            <div className="text-lg font-black text-[#20243C]">0.63</div>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-1 text-center">
            <div className="text-[10px] font-mono text-[#626A7C]">MS Small</div>
            <div className="text-lg font-black text-[#20243C]">0.53</div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 12. INTERACTIVE CALIBRATION TRADE-OFF */}
      {/* ==================================================================== */}
      <section>
        <CalibrationTradeoffChart />
      </section>

      {/* ==================================================================== */}
      {/* 13. QUALITATIVE RESULTS */}
      {/* ==================================================================== */}
      <section className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            <Eye className="w-4 h-4 text-[#9091DF]" />
            <span>QUALITATIVE RESULTS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#20243C]">
            Calibration suppresses diffuse residuals without collapsing the evidence map
          </h2>
        </div>

        <div className="bg-[#FFFFFF] border border-[#D9DDEE] rounded-2xl p-4 sm:p-6 space-y-4 shadow-xs">
          <div className="relative group overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#F8F9FE]">
            <img 
              src="/images/publications/eccv-2026/qualitative-results.webp"
              alt="Qualitative comparison across BraTS, MSLesSeg, ADNI, and PULSE showing MRI inputs, lesion masks or anatomical ROI references, baseline anomaly supports, and calibrated selected evidence."
              className="w-full h-auto object-contain max-h-[550px]"
            />
            <button
              onClick={() => setActiveImage({
                src: "/images/publications/eccv-2026/qualitative-results.webp",
                alt: "Qualitative comparison across BraTS, MSLesSeg, ADNI, and PULSE showing MRI inputs, lesion masks or anatomical ROI references, baseline anomaly supports, and calibrated selected evidence.",
                title: "Qualitative Results Comparison"
              })}
              className="absolute top-3 right-3 p-2 rounded-lg bg-[#20243C]/80 text-[#FBFBFF] hover:bg-[#20243C] transition-colors cursor-pointer inline-flex items-center gap-1.5 text-xs font-bold"
              aria-label="Enlarge qualitative figure"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Enlarge</span>
            </button>
          </div>
          <figcaption className="text-xs sm:text-sm text-[#626A7C] font-medium leading-relaxed">
            <strong>Figure 3: Qualitative results across benchmark regimes.</strong> Red denotes lesion masks or anatomical ROI references; green denotes healthy-calibrated selected evidence.
          </figcaption>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs border-t border-[#D9DDEE]">
            <div className="flex items-start gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 shrink-0 mt-0.5"></span>
              <div>
                <strong>Visible-Lesion References:</strong> BraTS and MSLesSeg red overlays are voxel-wise lesion masks used only for evaluation.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-400 shrink-0 mt-0.5"></span>
              <div>
                <strong>ROI-Centric References:</strong> ADNI and PULSE red overlays are anatomical ROIs, not voxel-wise disease masks.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0 mt-0.5"></span>
              <div>
                <strong>Model Output:</strong> Green overlays are calibrated model-derived selective evidence.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 14. ROI-CENTRIC ADNI AND PULSE EVALUATION */}
      {/* ==================================================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            <Layers className="w-4 h-4 text-[#9091DF]" />
            <span>ROI-CENTRIC EVALUATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#20243C]">
            Anatomical concentration replaces segmentation accuracy when disease masks do not exist
          </h2>
        </div>

        <p className="text-base text-[#626A7C] leading-relaxed">
          ADNI and PULSE do not provide voxel-wise disease masks. Evidence is therefore evaluated by whether it concentrates inside clinically motivated anatomical ROIs while reducing off-target support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-2">
            <div className="text-xs font-mono font-bold text-[#9091DF]">ADNI — FULL MODEL</div>
            <div className="text-xs space-y-1 font-mono text-[#20243C]">
              <div>ROI Conc: <strong>0.72 ± 0.01</strong></div>
              <div>Rel ROI Conc: <strong>0.66 ± 0.02</strong></div>
              <div>FP Non-ROI: <strong>0.09 ± 0.01</strong></div>
              <div>Score IQR: <strong>0.20 ± 0.02</strong></div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-2">
            <div className="text-xs font-mono font-bold text-[#9091DF]">PULSE WHOLE-BRAIN T1W</div>
            <div className="text-xs space-y-1 font-mono text-[#20243C]">
              <div>ROI Conc: <strong>0.53 ± 0.02</strong></div>
              <div>Rel ROI Conc: <strong>0.47 ± 0.02</strong></div>
              <div>FP Non-ROI: <strong>0.22 ± 0.01</strong></div>
              <div>Score IQR: <strong>0.34 ± 0.01</strong></div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-2">
            <div className="text-xs font-mono font-bold text-[#9091DF]">PULSE BRAINSTEM T1W</div>
            <div className="text-xs space-y-1 font-mono text-[#20243C]">
              <div>ROI Conc: <strong>0.62 ± 0.02</strong></div>
              <div>Rel ROI Conc: <strong>0.57 ± 0.02</strong></div>
              <div>FP Non-ROI: <strong>0.18 ± 0.01</strong></div>
              <div>Score IQR: <strong>0.30 ± 0.01</strong></div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-2">
            <div className="text-xs font-mono font-bold text-[#9091DF]">PULSE BRAINSTEM T1W + FA</div>
            <div className="text-xs space-y-1 font-mono text-[#20243C]">
              <div>ROI Conc: <strong>0.65 ± 0.01</strong></div>
              <div>Rel ROI Conc: <strong>0.60 ± 0.01</strong></div>
              <div>FP Non-ROI: <strong>0.16 ± 0.01</strong></div>
              <div>Score IQR: <strong>0.29 ± 0.01</strong></div>
            </div>
          </div>
        </div>

        <p className="text-xs text-[#626A7C]">
          * Fractional Anisotropy (FA) is treated as an exploratory microstructural complement rather than independent clinical validation.
        </p>
      </section>

      {/* ==================================================================== */}
      {/* 15. INTERACTIVE ROI-CENTRIC RESULTS */}
      {/* ==================================================================== */}
      <section>
        <ROICentricResultsChart />
      </section>

      {/* ==================================================================== */}
      {/* 16. ALS UNRELATED-ROI CONTROL */}
      {/* ==================================================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            <ShieldCheck className="w-4 h-4 text-[#9091DF]" />
            <span>ANATOMICAL CONTROL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#20243C]">
            Does evidence concentrate in the task-oriented ROI rather than an arbitrary brainstem location?
          </h2>
        </div>

        <p className="text-base text-[#626A7C] leading-relaxed">
          The atlas-derived brainstem mask defines the focused field of view. It is not itself the disease target. The task-oriented ALS ROI is compared with 100 size-matched unrelated control ROIs sampled inside the brainstem mask while excluding the target-ROI neighborhood.
        </p>

        <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#D9DDEE] grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-[#20243C]">
                <span>Task-Oriented ALS ROI Concentration</span>
                <span className="font-mono">0.62</span>
              </div>
              <div className="h-4 bg-[#F1F5F9] rounded-full overflow-hidden border border-[#E2E8F0]">
                <div className="h-full bg-[#9091DF] rounded-full" style={{ width: '62%' }} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-[#20243C]">
                <span>Size-Matched Unrelated Control ROI</span>
                <span className="font-mono">0.20 ± 0.06</span>
              </div>
              <div className="h-4 bg-[#F1F5F9] rounded-full overflow-hidden border border-[#E2E8F0]">
                <div className="h-full bg-[#CBD5E1] rounded-full" style={{ width: '20%' }} />
              </div>
            </div>
          </div>

          <div className="bg-[#20243C] text-[#FBFBFF] p-5 rounded-xl border border-[#20243C] space-y-2 text-center">
            <div className="text-xs font-mono font-bold uppercase text-[#A0A1F8]">ENRICHMENT & SIGNIFICANCE</div>
            <div className="text-3xl font-black text-[#DFF8E1]">3.10× Ratio</div>
            <div className="text-xs font-mono text-[#B9E0FC]">Permutation Test: p &lt; 0.05</div>
            <p className="text-[11px] text-[#A0A1F8] pt-2 border-t border-[#FFFFFF]/10">
              Target ROI concentration is 3.10× higher than unrelated brainstem control regions.
            </p>
          </div>
        </div>

        <p className="text-xs text-[#626A7C] leading-relaxed">
          * This control reduces the possibility that evidence concentration is explained only by brainstem-focused cropping. It supports anatomical plausibility, not proof of ALS-specific disease localization.
        </p>
      </section>

      {/* ==================================================================== */}
      {/* 17. RELIABILITY ABLATION */}
      {/* ==================================================================== */}
      <section>
        <ReliabilityAblationChart />
      </section>

      {/* ==================================================================== */}
      {/* 18. INTERPRETATION BOUNDARIES */}
      {/* ==================================================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-600">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            <span>WHAT THIS WORK DOES NOT CLAIM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#20243C]">
            Scope and Methodological Boundaries
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] space-y-3 text-xs sm:text-sm text-[#92400E] leading-relaxed">
          <ul className="list-disc pl-5 space-y-2">
            <li>The framework is trained only on healthy MRI.</li>
            <li>Patient labels, lesion masks, and disease-specific ROIs are used only for evaluation.</li>
            <li>The final map is selective deviation evidence, not segmentation ground truth.</li>
            <li>ADNI results represent ROI-centric anatomical plausibility, not voxel-wise Alzheimer’s disease segmentation.</li>
            <li>PULSE results represent an ALS brainstem ROI reliability stress test, not a voxel-wise ALS pathology map.</li>
            <li>ROI enrichment does not prove disease specificity.</li>
            <li>T1w+FA results are exploratory and do not constitute independent clinical validation.</li>
            <li>Healthy-test FPR is conditional on the OpenBHB reference distribution.</li>
            <li>The same FPR is not guaranteed across every age group, site, scanner, or acquisition protocol.</li>
            <li>Longitudinal clinical, respiratory, bulbar, survival, and neurophysiological validation remain future work.</li>
          </ul>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 19. MAIN CONTRIBUTIONS */}
      {/* ==================================================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            <Sparkles className="w-4 h-4 text-[#9091DF]" />
            <span>MAIN CONTRIBUTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#20243C]">
            Core Methodological Innovations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] space-y-2 shadow-xs">
            <div className="text-xs font-mono font-bold text-[#9091DF]">CONTRIBUTION 01</div>
            <h4 className="font-bold text-sm text-[#20243C]">Healthy-Reference Calibrated Formulation</h4>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Frames annotation-scarce anomaly localization as selective normal-projection evidence rather than supervised disease segmentation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] space-y-2 shadow-xs">
            <div className="text-xs font-mono font-bold text-[#9091DF]">CONTRIBUTION 02</div>
            <h4 className="font-bold text-sm text-[#20243C]">Projection-Consistent Evidence</h4>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Combines multi-view residuals, projection-disagreement uncertainty, lower-confidence scoring, and held-out healthy calibration.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D9DDEE] space-y-2 shadow-xs">
            <div className="text-xs font-mono font-bold text-[#9091DF]">CONTRIBUTION 03</div>
            <h4 className="font-bold text-sm text-[#20243C]">Complementary Reliability Evaluation</h4>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Evaluates visible lesions, mask-free neurodegeneration, ALS brainstem ROIs, and unrelated ROI controls under one locked healthy-only protocol.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 20. MY CONTRIBUTION */}
      {/* ==================================================================== */}
      <section className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            <UserCheck className="w-4 h-4 text-[#9091DF]" />
            <span>MY CONTRIBUTION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#20243C]">
            Author Role & Scope
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[#F8F9FE] border border-[#D9DDEE] text-sm text-[#20243C] font-medium leading-relaxed">
          As first author, I contributed to the research problem formulation, normal-projection framework design, implementation, healthy-only experimental protocol, residual and uncertainty formulation, calibration strategy, quantitative and qualitative evaluation, ALS ROI interpretation, manuscript preparation, and scientific communication, in collaboration with my co-authors.
        </div>
      </section>

    </div>
  );
};
