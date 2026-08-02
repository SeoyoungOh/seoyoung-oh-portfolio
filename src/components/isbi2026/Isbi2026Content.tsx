import React from 'react';
import { ScientificFigure } from '../ScientificFigure';
import { LocalizationPerformanceChart } from './LocalizationPerformanceChart';
import { ADNIInterpretabilityChart } from './ADNIInterpretabilityChart';
import { CheckCircle2, AlertTriangle, ArrowRight, ShieldAlert, Sparkles, Award } from 'lucide-react';

export const Isbi2026Content: React.FC = () => {
  return (
    <div className="space-y-12">
      
      {/* 1. RESEARCH PROBLEM */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
            RESEARCH PROBLEM
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#20243C] tracking-tight leading-tight">
            Dense annotations are difficult to obtain—but diagnostic labels are often already available.
          </h2>
        </div>

        <p className="text-base text-[#20243C] font-normal leading-relaxed">
          Brain MRI datasets frequently provide subject-level diagnostic labels without reliable voxel-wise annotations of disease regions. Dense masks require expert delineation, are expensive and time-consuming to produce, and may be ambiguous for small, diffuse, or multifocal abnormalities. Conventional weak-localization methods also tend to highlight only the most discriminative region, underestimating the broader spatial extent of disease-related evidence.
        </p>

        {/* Three Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              ANNOTATION BOTTLENECK
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              Voxel-wise masks are costly, time-consuming, and dependent on expert delineation.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              AVAILABLE SUPERVISION
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              Patient-versus-control diagnostic labels are substantially more accessible in retrospective clinical cohorts.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              LOCALIZATION LIMITATION
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              Single attribution maps may be coarse, fragmented, or restricted to the most salient region.
            </p>
          </div>
        </div>

        {/* Highlighted Objective Statement */}
        <div className="p-5 rounded-xl bg-[#A0A1F8]/15 border border-[#A0A1F8]/40 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-[#9091DF] shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#20243C] block mb-1">
              PRIMARY RESEARCH OBJECTIVE
            </span>
            <p className="text-sm font-bold text-[#20243C]">
              Localize disease-relevant regions from diagnostic labels alone, without using spatial annotations during training.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PROPOSED APPROACH */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
            PROPOSED APPROACH
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#20243C] tracking-tight leading-tight">
            From global diagnostic labels to spatial evidence
          </h2>
        </div>

        <p className="text-base text-[#20243C] font-normal leading-relaxed">
          We introduced GALA-Former, a weakly supervised Transformer framework trained using subject-level diagnostic labels propagated to 2D MRI slices. After classification training, the framework extracts three complementary internal localization signals from the trained model and combines them through a lightweight convolutional fusion module.
        </p>

        {/* Four-Stage Process */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="p-5 rounded-xl bg-[#20243C] text-[#FBFBFF] space-y-2 border border-[#333854]">
            <div className="text-xs font-mono font-bold text-[#A0A1F8]">01. STEP</div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FBFBFF]">SLICE-WISE CLASSIFICATION</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              A Transformer classifier learns patient-versus-control discrimination from global diagnostic labels without voxel-wise supervision.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#20243C] text-[#FBFBFF] space-y-2 border border-[#333854]">
            <div className="text-xs font-mono font-bold text-[#A0A1F8]">02. STEP</div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FBFBFF]">COMPLEMENTARY LOCALIZATION CUES</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Token-wise activation, attention rollout, and gradient-based relevance capture different forms of spatial evidence.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#20243C] text-[#FBFBFF] space-y-2 border border-[#333854]">
            <div className="text-xs font-mono font-bold text-[#A0A1F8]">03. STEP</div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FBFBFF]">MULTI-MAP FUSION</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              A lightweight convolutional module learns how to combine the three localization maps.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#20243C] text-[#FBFBFF] space-y-2 border border-[#333854]">
            <div className="text-xs font-mono font-bold text-[#A0A1F8]">04. STEP</div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FBFBFF]">SPATIAL REFINEMENT</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Thresholding and DenseCRF refinement improve spatial coherence and sharpen the final localization support.
            </p>
          </div>
        </div>
      </section>

      {/* 3. GALA-FORMER METHOD FIGURE */}
      <section className="space-y-4">
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
          METHOD ARCHITECTURE
        </div>
        <ScientificFigure
          src="/images/publications/isbi-2026/gala-former-framework.webp"
          alt="GALA-Former workflow showing diagnostic-label-only Transformer classification, extraction of token, attention, and gradient localization maps, convolutional fusion, DenseCRF refinement, and final disease localization."
          caption="Overview of GALA-Former. A slice-wise Transformer is trained using diagnostic labels, after which token activation, attention rollout, and gradient-based relevance are fused to generate a spatial localization map."
          surfaceColor="white"
          priority={true}
        />
      </section>

      {/* 4. WHY MULTI-MAP FUSION */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
            WHY MULTI-MAP FUSION?
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#20243C] tracking-tight leading-tight">
            Each internal signal captures a different part of the evidence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#20243C]">
              TOKEN-WISE ACTIVATION
            </h3>
            <p className="text-xs text-[#626A7C] font-medium leading-relaxed">
              Patch-to-class-token similarity captures semantic relevance within the Transformer representation.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#20243C]">
              ATTENTION ROLLOUT
            </h3>
            <p className="text-xs text-[#626A7C] font-medium leading-relaxed">
              Layer-wise attention aggregation captures global contextual relationships between image regions.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#20243C]">
              GRADIENT-BASED RELEVANCE
            </h3>
            <p className="text-xs text-[#626A7C] font-medium leading-relaxed">
              Class-specific gradients highlight regions that contribute directly to the predicted diagnostic score.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] text-xs font-semibold text-[#20243C]">
          <strong>Conclusion:</strong> The cues are complementary. Their fusion produces a more robust and spatially coherent localization map than relying on a single attribution source.
        </div>
      </section>

      {/* 5. EVALUATION DESIGN */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
            EVALUATION DESIGN
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#20243C] tracking-tight leading-tight">
            Evaluation across heterogeneous MRI conditions
          </h2>
        </div>

        {/* Three Dataset Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* BraTS */}
          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-black text-[#20243C]">BRATS</span>
              <span className="text-[10px] font-mono font-bold bg-[#A0A1F8]/20 text-[#20243C] px-2 py-0.5 rounded">
                Brain Tumors
              </span>
            </div>
            <div className="space-y-1.5 text-xs">
              <p><strong className="text-[#20243C]">Role:</strong> Visible-lesion localization</p>
              <p><strong className="text-[#20243C]">Evaluation:</strong> Voxel-wise overlap and lesion detection</p>
              <p className="text-[#626A7C]">
                <strong className="text-[#20243C]">Metrics:</strong> Dice, mIoU, lesion-wise recall, lesion-wise precision, and mAP@0.5
              </p>
            </div>
          </div>

          {/* MSLesSeg */}
          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-black text-[#20243C]">MSLESSEG</span>
              <span className="text-[10px] font-mono font-bold bg-[#A0A1F8]/20 text-[#20243C] px-2 py-0.5 rounded">
                Multiple Sclerosis
              </span>
            </div>
            <div className="space-y-1.5 text-xs">
              <p><strong className="text-[#20243C]">Role:</strong> Small and multifocal lesion localization</p>
              <p><strong className="text-[#20243C]">Evaluation:</strong> Voxel-wise overlap and lesion detection</p>
              <p className="text-[#626A7C]">
                <strong className="text-[#20243C]">Metrics:</strong> Dice, mIoU, lesion-wise recall, lesion-wise precision, and mAP@0.5
              </p>
            </div>
          </div>

          {/* ADNI */}
          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-black text-[#20243C]">ADNI</span>
              <span className="text-[10px] font-mono font-bold bg-[#A0A1F8]/20 text-[#20243C] px-2 py-0.5 rounded">
                Alzheimer's Disease
              </span>
            </div>
            <div className="space-y-1.5 text-xs">
              <p><strong className="text-[#20243C]">Role:</strong> Mask-free neurodegeneration interpretation</p>
              <p><strong className="text-[#20243C]">Evaluation:</strong> Decision faithfulness and anatomical plausibility</p>
              <p className="text-[#626A7C]">
                <strong className="text-[#20243C]">Metrics:</strong> Deletion, insertion, hippocampal overlap, amygdalar overlap, and hippocampal volume correlation
              </p>
            </div>
          </div>
        </div>

        {/* Interpretation Boundary Note */}
        <div className="p-4 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] space-y-1.5 text-xs text-[#20243C]">
          <p className="font-semibold">
            <strong>Interpretation Boundary:</strong> Voxel-wise disease masks were used only for evaluation on BraTS and MSLesSeg. They were not used as training supervision.
          </p>
          <p className="text-[#626A7C]">
            ADNI was evaluated using classifier faithfulness and atlas-defined anatomical ROIs rather than a voxel-wise Alzheimer’s disease mask.
          </p>
        </div>
      </section>

      {/* 6. KEY RESULTS */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
            KEY RESULTS
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#20243C] tracking-tight leading-tight">
            Multi-map fusion improves localization across visible and subtle disease settings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* BraTS Metric Card */}
          <div className="p-6 rounded-xl bg-[#20243C] text-[#FBFBFF] border border-[#333854] space-y-4">
            <div className="flex items-center justify-between border-b border-[#333854] pb-3">
              <span className="text-sm font-bold tracking-wider text-[#A0A1F8]">BRATS VERIFIED METRICS</span>
              <span className="text-[11px] font-mono text-[#94A3B8]">GALA-Former</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-[#181A2D] border border-[#333854]">
                <span className="text-[10px] font-mono text-[#94A3B8] block">DICE SCORE</span>
                <span className="text-lg font-black text-[#FBFBFF]">0.71 ± 0.03</span>
              </div>
              <div className="p-3 rounded-lg bg-[#181A2D] border border-[#333854]">
                <span className="text-[10px] font-mono text-[#94A3B8] block">mIoU</span>
                <span className="text-lg font-black text-[#FBFBFF]">0.58 ± 0.03</span>
              </div>
              <div className="p-3 rounded-lg bg-[#181A2D] border border-[#A0A1F8]/30">
                <span className="text-[10px] font-mono text-[#A0A1F8] block font-bold">LESION RECALL</span>
                <span className="text-lg font-black text-[#A0A1F8]">0.84 ± 0.03</span>
              </div>
              <div className="p-3 rounded-lg bg-[#181A2D] border border-[#333854]">
                <span className="text-[10px] font-mono text-[#94A3B8] block">LESION PRECISION</span>
                <span className="text-lg font-black text-[#FBFBFF]">0.68 ± 0.01</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#181A2D] border border-[#333854] flex items-center justify-between">
              <span className="text-xs font-mono text-[#94A3B8]">mAP@0.5</span>
              <span className="text-sm font-bold text-[#FBFBFF]">0.61 ± 0.02</span>
            </div>
          </div>

          {/* MSLesSeg Metric Card */}
          <div className="p-6 rounded-xl bg-[#20243C] text-[#FBFBFF] border border-[#333854] space-y-4">
            <div className="flex items-center justify-between border-b border-[#333854] pb-3">
              <span className="text-sm font-bold tracking-wider text-[#A0A1F8]">MSLESSEG VERIFIED METRICS</span>
              <span className="text-[11px] font-mono text-[#94A3B8]">GALA-Former</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-[#181A2D] border border-[#333854]">
                <span className="text-[10px] font-mono text-[#94A3B8] block">DICE SCORE</span>
                <span className="text-lg font-black text-[#FBFBFF]">0.68 ± 0.04</span>
              </div>
              <div className="p-3 rounded-lg bg-[#181A2D] border border-[#333854]">
                <span className="text-[10px] font-mono text-[#94A3B8] block">mIoU</span>
                <span className="text-lg font-black text-[#FBFBFF]">0.56 ± 0.02</span>
              </div>
              <div className="p-3 rounded-lg bg-[#181A2D] border border-[#A0A1F8]/30">
                <span className="text-[10px] font-mono text-[#A0A1F8] block font-bold">LESION RECALL</span>
                <span className="text-lg font-black text-[#A0A1F8]">0.78 ± 0.04</span>
              </div>
              <div className="p-3 rounded-lg bg-[#181A2D] border border-[#333854]">
                <span className="text-[10px] font-mono text-[#94A3B8] block">LESION PRECISION</span>
                <span className="text-lg font-black text-[#FBFBFF]">0.65 ± 0.01</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#181A2D] border border-[#333854] flex items-center justify-between">
              <span className="text-xs font-mono text-[#94A3B8]">mAP@0.5</span>
              <span className="text-sm font-bold text-[#FBFBFF]">0.58 ± 0.02</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-[#626A7C] italic">
          Values are reported as mean ± 95% confidence interval across five repeated experiments.
        </p>

        <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] text-xs font-semibold text-[#20243C]">
          <strong>Takeaway:</strong> GALA-Former consistently outperformed ResNet-50, ViT, and DINOv3 single-cue localization baselines. The strongest practical gain appears in lesion-wise recall, indicating that multi-map fusion recovers disease evidence beyond only the most salient region.
        </div>
      </section>

      {/* 7. INTERACTIVE LOCALIZATION PERFORMANCE */}
      <LocalizationPerformanceChart />

      {/* 8. QUALITATIVE LOCALIZATION */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
            QUALITATIVE LOCALIZATION
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#20243C] tracking-tight leading-tight">
            More complete and spatially coherent evidence
          </h2>
        </div>

        <p className="text-base text-[#20243C] font-normal leading-relaxed">
          Single-cue methods frequently highlighted sparse discriminative spots or produced scattered false-positive regions. GALA-Former generated smoother and more contiguous localization maps and better preserved the spatial shape and extent of visible lesions. On ADNI, the fused evidence was more concentrated around atlas-defined medial temporal structures.
        </p>

        <ScientificFigure
          src="/images/publications/isbi-2026/qualitative-comparison.webp"
          alt="Comparison of MRI inputs, reference masks or anatomical ROIs, baseline localization maps, and GALA-Former outputs across brain tumor, multiple sclerosis, and Alzheimer’s disease datasets."
          caption="Qualitative comparison across BraTS, MSLesSeg, and ADNI. Yellow boxes denote ground-truth lesion regions or atlas-defined anatomical ROIs, while blue boxes denote predicted localization regions."
          surfaceColor="white"
          allowHorizontalScrollOnMobile={true}
        />
      </section>

      {/* 9. ADNI FAITHFULNESS AND ANATOMICAL PLAUSIBILITY */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
            FAITHFULNESS AND ANATOMICAL PLAUSIBILITY
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#20243C] tracking-tight leading-tight">
            Does the highlighted evidence influence the decision—and align with plausible anatomy?
          </h2>
        </div>

        <p className="text-base text-[#20243C] font-normal leading-relaxed">
          For ADNI, no voxel-wise Alzheimer’s disease mask was assumed. The evidence was instead assessed by testing whether highlighted regions influenced the classifier decision and whether they aligned with anatomically relevant medial temporal structures.
        </p>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase text-[#626A7C] block">DELETION SCORE</span>
            <span className="text-xl font-black text-[#20243C]">0.29 ± 0.05</span>
            <span className="text-[10px] font-bold text-[#D97706] block">Lower is better</span>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase text-[#626A7C] block">INSERTION SCORE</span>
            <span className="text-xl font-black text-[#20243C]">0.61 ± 0.01</span>
            <span className="text-[10px] font-bold text-[#059669] block">Higher is better</span>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase text-[#626A7C] block">HIPPOCAMPAL OVERLAP</span>
            <span className="text-xl font-black text-[#20243C]">0.48 ± 0.05</span>
            <span className="text-[10px] font-bold text-[#059669] block">Higher is better</span>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase text-[#626A7C] block">AMYGDALAR OVERLAP</span>
            <span className="text-xl font-black text-[#20243C]">0.44 ± 0.02</span>
            <span className="text-[10px] font-bold text-[#059669] block">Higher is better</span>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase text-[#626A7C] block">HIPPOCAMPAL VOL CORR</span>
            <span className="text-xl font-black text-[#20243C]">0.52 ± 0.01</span>
            <span className="text-[10px] font-bold text-[#059669] block">Higher is better</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] text-xs font-semibold text-[#20243C]">
          <strong>Interpretation:</strong> The results support stronger classifier faithfulness and plausible concentration around the hippocampus and amygdala. They do not establish voxel-wise Alzheimer’s disease segmentation or clinical validation.
        </div>
      </section>

      {/* 10. INTERACTIVE ADNI RESULTS */}
      <ADNIInterpretabilityChart />

      {/* 11. MAIN CONTRIBUTIONS */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
            MAIN CONTRIBUTIONS
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#20243C] tracking-tight leading-tight">
            Core scientific contributions of GALA-Former
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#A0A1F8]/20 flex items-center justify-center text-[#20243C] font-mono font-bold text-xs mb-2">
              01
            </div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#20243C]">
              DIAGNOSTIC-LABEL-ONLY LOCALIZATION
            </h3>
            <p className="text-xs text-[#626A7C] font-medium leading-relaxed">
              A Transformer-based framework that localizes pathology-related evidence using only globally assigned diagnostic labels during training.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#A0A1F8]/20 flex items-center justify-center text-[#20243C] font-mono font-bold text-xs mb-2">
              02
            </div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#20243C]">
              COMPLEMENTARY MULTI-MAP FUSION
            </h3>
            <p className="text-xs text-[#626A7C] font-medium leading-relaxed">
              A strategy combining token-level activation, attention-derived evidence, and gradient-based relevance.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#A0A1F8]/20 flex items-center justify-center text-[#20243C] font-mono font-bold text-xs mb-2">
              03
            </div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#20243C]">
              CROSS-CONDITION EVALUATION
            </h3>
            <p className="text-xs text-[#626A7C] font-medium leading-relaxed">
              Evaluation across tumors, multiple sclerosis, and Alzheimer’s disease using dataset-appropriate localization and interpretability criteria.
            </p>
          </div>
        </div>
      </section>

      {/* 12. INTERPRETATION BOUNDARIES */}
      <section className="bg-[#F8F9FE] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#20243C]">
          <ShieldAlert className="w-4 h-4 text-[#9091DF]" />
          <span>WHAT THIS WORK DOES NOT CLAIM</span>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-[#20243C]">
          <li className="flex items-start gap-2 bg-[#FFFFFF] p-3.5 rounded-xl border border-[#D9DDEE]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF] shrink-0 mt-1.5" />
            <span>It is not a fully supervised segmentation model.</span>
          </li>
          <li className="flex items-start gap-2 bg-[#FFFFFF] p-3.5 rounded-xl border border-[#D9DDEE]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF] shrink-0 mt-1.5" />
            <span>It does not use voxel-wise disease masks during training.</span>
          </li>
          <li className="flex items-start gap-2 bg-[#FFFFFF] p-3.5 rounded-xl border border-[#D9DDEE]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF] shrink-0 mt-1.5" />
            <span>Its output is classifier-derived localization evidence, not clinical ground truth.</span>
          </li>
          <li className="flex items-start gap-2 bg-[#FFFFFF] p-3.5 rounded-xl border border-[#D9DDEE]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF] shrink-0 mt-1.5" />
            <span>ADNI results represent faithfulness and anatomical plausibility, not a voxel-wise Alzheimer’s disease map.</span>
          </li>
          <li className="flex items-start gap-2 bg-[#FFFFFF] p-3.5 rounded-xl border border-[#D9DDEE]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF] shrink-0 mt-1.5" />
            <span>The experiments are slice-wise rather than full-volume 3D localization.</span>
          </li>
          <li className="flex items-start gap-2 bg-[#FFFFFF] p-3.5 rounded-xl border border-[#D9DDEE]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF] shrink-0 mt-1.5" />
            <span>Cross-site clinical validation remains future work.</span>
          </li>
        </ul>
      </section>

      {/* 13. FUTURE DIRECTIONS */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
            FUTURE DIRECTIONS
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#20243C] tracking-tight leading-tight">
            Next steps in weakly supervised medical vision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              TINY LESIONS
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              Improve sensitivity for extremely small lesion regions.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              3D EXTENSION
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              Extend the framework from independent 2D slices to volumetric MRI localization.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              GENERALIZATION
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              Perform broader cross-cohort and multi-site validation.
            </p>
          </div>
        </div>
      </section>

      {/* 14. MY CONTRIBUTION */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-3">
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
          MY CONTRIBUTION
        </div>
        <p className="text-sm font-medium text-[#20243C] leading-relaxed">
          As first author, I contributed to the research problem formulation, method development, implementation, experimental design, quantitative and qualitative evaluation, result interpretation, manuscript preparation, and oral presentation, in collaboration with my co-authors.
        </p>
      </section>

      {/* 15. PRESENTED AT ISBI 2026 */}
      <section className="bg-[#20243C] text-[#FBFBFF] p-6 sm:p-8 rounded-2xl border border-[#333854] space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#A0A1F8]">
          <Award className="w-4 h-4 text-[#A0A1F8]" />
          <span>PRESENTED AT ISBI 2026</span>
        </div>
        <p className="text-sm font-semibold text-[#FBFBFF] leading-relaxed">
          This work was presented orally at the 2026 IEEE International Symposium on Biomedical Imaging in London, United Kingdom.
        </p>
      </section>

    </div>
  );
};
