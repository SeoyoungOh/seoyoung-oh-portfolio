import React from 'react';
import { ScientificFigure } from '../ScientificFigure';
import { DecoderLossComparisonChart } from './DecoderLossComparisonChart';
import {
  CheckCircle2,
  AlertTriangle,
  Brain,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  Award,
  BookOpen,
  FileCheck,
} from 'lucide-react';

export const Isbi2024Content: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* ================================================== */}
      {/* 1. RESEARCH PROBLEM                                */}
      {/* ================================================== */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
            RESEARCH PROBLEM
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#20243C] tracking-tight leading-tight">
            Small brainstem structures are difficult to segment in routine in-vivo MRI
          </h2>
        </div>

        <p className="text-base text-[#20243C] font-normal leading-relaxed">
          Brainstem nuclei are clinically relevant to neurological, motor, bulbar, and respiratory function, but their boundaries are difficult to observe in routine structural MRI. In-vivo acquisition provides substantially lower spatial detail than high-resolution ex-vivo MRI, while large collections of expert-delineated subject-specific nuclei annotations are unavailable. This creates a model-design problem under low image resolution, limited data, small anatomical targets, and imperfect atlas-derived supervision.
        </p>

        {/* Three Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              LOW SPATIAL DETAIL
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              Small brainstem nuclei occupy only a limited number of voxels and are difficult to distinguish in routine T1-weighted MRI.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              LIMITED ANNOTATIONS
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              Large collections of expert-delineated, subject-specific nuclei masks were not available.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              MODEL-DESIGN QUESTION
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              The study tests whether decoder architecture and loss configuration matter more than stronger or pretrained encoder backbones.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 2. CLINICAL RESOLUTION CHALLENGE                   */}
      {/* ================================================== */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
            IMAGING CHALLENGE
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
            Routine clinical MRI does not reveal the same anatomical detail as ex-vivo reference imaging
          </h2>
        </div>

        <ScientificFigure
          src="/images/publications/isbi-2024/in-vivo-resolution-challenge.webp"
          alt="Whole-brain in-vivo T1-weighted MRI, cropped brainstem region, high-resolution ex-vivo brainstem MRI, and detailed brainstem nuclei reference."
          subheading="Figure 1: Routine In-Vivo Resolution vs. Ex-Vivo Anatomical Detail"
          caption="Comparison between routine in-vivo T1-weighted brain MRI and high-resolution ex-vivo anatomical detail. Brainstem nuclei visible in specialized reference imaging are difficult to distinguish in routine MRI."
          interpretationNote="Highlights why direct manual voxel-wise delineation of individual brainstem nuclei on routine clinical MRI is fundamentally unfeasible without atlas-based registration priors."
        />
      </section>

      {/* ================================================== */}
      {/* 3. DATASET AND SUPERVISION                         */}
      {/* ================================================== */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
            DATASET AND SUPERVISION
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
            A brainstem-centered segmentation task with atlas-derived anatomical references
          </h2>
        </div>

        {/* Five Dataset Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              COHORT
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              26 participants with early-stage ALS and 26 age- and sex-matched healthy controls.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              MRI
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              T1-weighted structural MRI acquired using a 3T Siemens Verio scanner.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              PREPROCESSING
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              Skull stripping, bias-field correction, intensity normalization, nonlinear registration to MNI space, and resampling to 1 mm isotropic resolution.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              INPUT PREPARATION
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              Axial brainstem-centered crops of 50 × 50 pixels, resized to 224 × 224.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-1 sm:col-span-2 lg:col-span-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              SAMPLES
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              3,796 two-dimensional slices: 1,100 training, 798 validation, and 1,898 test images.
            </p>
          </div>
        </div>

        {/* Supervision Card */}
        <div className="p-5 rounded-2xl bg-[#9091DF]/10 border border-[#9091DF]/40 space-y-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#9091DF]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#20243C]">
              ATLAS-DERIVED LABEL REFERENCE
            </span>
          </div>
          <p className="text-sm font-semibold text-[#20243C]">
            Thirty-four classes: extra-brainstem background, white matter, non-nuclei gray matter, and 31 brainstem nuclei classes using <strong className="text-[#20243C] underline decoration-[#9091DF]">atlas-derived pseudo-reference labels</strong>.
          </p>
          <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#D9DDEE] text-xs font-medium text-[#626A7C] leading-relaxed">
            <strong className="text-[#20243C]">Interpretation Note:</strong> The registered and fused atlas enabled dense supervised experiments, but the labels remain computational anatomical references inherited from atlas resources and registration procedures rather than direct subject-specific nuclei delineations.
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 4. PROPOSED DECODER DESIGN                         */}
      {/* ================================================== */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
            PROPOSED DECODER DESIGN
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
            Recover multi-scale encoder features with limited decoder complexity
          </h2>
        </div>

        <ScientificFigure
          src="/images/publications/isbi-2024/ndeco-architecture.webp"
          alt="Architecture diagrams of N-DecoNet and U-DecoNet using multi-stage encoder features, convolution, upsampling, feature aggregation, and pixel-wise softmax classification."
          subheading="Figure 2: Proposed N-DecoNet & U-DecoNet Architectures"
          caption="N-DecoNet and U-DecoNet decoder architectures. Both use feature maps from the last four encoder pooling stages; U-DecoNet adds cross-level decoder connections to test the effect of UNet-style feature propagation."
        />

        {/* Two Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#20243C] block">
              N-DECONET ARCHITECTURE
            </span>
            <p className="text-xs text-[#626A7C] font-medium leading-relaxed">
              Feature maps from the final four encoder pooling stages are processed and upsampled to a common spatial resolution. The aligned representations are summed and passed to a trainable pixel-wise softmax classifier. The architecture limits additional cross-level decoder processing and reduces parameter overhead.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#20243C] block">
              U-DECONET ARCHITECTURE
            </span>
            <p className="text-xs text-[#626A7C] font-medium leading-relaxed">
              An experimental variant adds the upsampled output of preceding decoder levels. This comparison tests whether additional UNet-style feature propagation improves segmentation of small, low-resolution structures.
            </p>
          </div>
        </div>

        {/* Loss Card */}
        <div className="p-4 rounded-xl bg-[#B9E0FC]/20 border border-[#A6C9E2] space-y-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#20243C] block">
            DICECE COMBINED OBJECTIVE
          </span>
          <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
            DiceCE combines Dice loss with label-smoothed cross-entropy. In the common ResNet-34 comparison, DiceCE produced the strongest overall macro mIoU for every evaluated decoder architecture.
          </p>
        </div>
      </section>

      {/* ================================================== */}
      {/* 5. CONTROLLED EXPERIMENTAL QUESTIONS               */}
      {/* ================================================== */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
            CONTROLLED MODEL STUDY
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
            Separate the effects of decoder structure, loss function, and encoder choice
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              WHICH DECODER?
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              Compare UNet, UNet++, MAnet, PSPNet, FPN, DeepLabV3, DeepLabV3+, N-DecoNet, and U-DecoNet.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              WHICH LOSS?
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              Compare Dice, Jaccard, Focal, SoftCE, DiceFocal, and DiceCE objectives.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              WHICH ENCODER?
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              Compare different encoder architectures, model depths, ImageNet-pretrained initialization, and random initialization.
            </p>
          </div>
        </div>

        {/* Shared Experimental Setup */}
        <div className="p-5 rounded-2xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#20243C] block">
            Shared Controlled Experimental Setup:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs font-semibold text-[#20243C]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF]" />
              <span>34 segmentation classes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF]" />
              <span>Macro mIoU evaluation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF]" />
              <span>Five repeated experiments</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF]" />
              <span>95% confidence intervals</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF]" />
              <span>Adam optimizer</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF]" />
              <span>10 training epochs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF]" />
              <span>Batch size 16</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF]" />
              <span>Learning rate 0.0001</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF]" />
              <span>Consistent conditions across comparisons</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 6. INTERACTIVE DECODER–LOSS COMPARISON            */}
      {/* ================================================== */}
      <section className="space-y-4">
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
          INTERACTIVE DECODER–LOSS BENCHMARK
        </div>
        <DecoderLossComparisonChart />
      </section>

      {/* ================================================== */}
      {/* 7. QUALITATIVE RESULTS                             */}
      {/* ================================================== */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
            QUALITATIVE RESULTS
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
            Compare spatial agreement across selected decoder configurations
          </h2>
        </div>

        <ScientificFigure
          src="/images/publications/isbi-2024/qualitative-segmentation-results.webp"
          alt="Brainstem MRI segmentation predictions from selected decoder models shown using multiple atlas-derived anatomical label colors."
          subheading="Figure 3: Qualitative Segmentation Comparison"
          caption="Representative segmentation outputs for selected FPN, DeepLabV3, N-DecoNet, and U-DecoNet configurations. Colors represent atlas-derived anatomical label classes."
          interpretationNote="Visual coherence indicates agreement with the fused atlas-derived reference. It should not be interpreted as direct validation of invisible, subject-specific nuclei boundaries."
        />
      </section>

      {/* ================================================== */}
      {/* 8. LOSS DESIGN FINDINGS                            */}
      {/* ================================================== */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
            LOSS DESIGN FINDINGS
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
            Loss configuration had a strong effect on segmentation performance
          </h2>
        </div>

        {/* Three Native Text Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              DICECE WAS CONSISTENTLY STRONG
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              DiceCE produced the highest overall macro mIoU for each decoder architecture in the common ResNet-34 comparison.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              SMALL CLASSES WERE SENSITIVE
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              Performance on small nuclei classes was more sensitive to loss weighting than performance on larger gray- and white-matter classes.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              TASK-MATCHED OPTIMIZATION MATTERED
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              The results indicate that selecting a loss suited to class imbalance and small anatomical targets was more consequential than simply increasing encoder complexity.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 9. ENCODER AND TRANSFER-LEARNING FINDINGS          */}
      {/* ================================================== */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
            ENCODER ANALYSIS
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
            A deeper or pretrained encoder was not automatically better
          </h2>
        </div>

        {/* Three Native Text Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              LIMITED TRANSFER-LEARNING GAIN
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              ImageNet-pretrained initialization did not provide a substantial or consistent advantage over random initialization in the evaluated setting.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              MORE COMPLEX WAS NOT ALWAYS BETTER
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              Deeper and more complex encoder architectures did not consistently improve brainstem segmentation performance.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              DECODER AND LOSS WERE MORE IMPORTANT
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              For this low-resolution brainstem dataset, decoder structure and loss configuration had a clearer effect than adopting a stronger classification backbone.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 10. MAIN FINDINGS                                  */}
      {/* ================================================== */}
      <section className="bg-[#20243C] text-[#FBFBFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]/20 space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#DFF8E1]">
          <Award className="w-4 h-4 text-[#DFF8E1]" />
          <span>MAIN FINDINGS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#181A2D] p-5 rounded-xl border border-[#A0A1F8]/20 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A0A1F8] block">
              EFFICIENT DECODER DESIGN
            </span>
            <p className="text-xs font-semibold text-[#FBFBFF]">
              N-DecoNet combined multi-stage encoder features using limited additional decoder processing and 21.5 million parameters.
            </p>
          </div>

          <div className="bg-[#181A2D] p-5 rounded-xl border border-[#A0A1F8]/20 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A0A1F8] block">
              LOSS CONFIGURATION MATTERED
            </span>
            <p className="text-xs font-semibold text-[#FBFBFF]">
              DiceCE produced the strongest overall macro mIoU across every decoder in the controlled ResNet-34 comparison.
            </p>
          </div>

          <div className="bg-[#181A2D] p-5 rounded-xl border border-[#A0A1F8]/20 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A0A1F8] block">
              TRANSFER LEARNING WAS NOT THE MAIN DRIVER
            </span>
            <p className="text-xs font-semibold text-[#FBFBFF]">
              Deeper encoders and ImageNet-pretrained initialization offered limited and inconsistent improvements.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-[#A0A1F8]/10 border border-[#A0A1F8]/30">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A0A1F8] block mb-1">
            Concise Takeaway:
          </span>
          <p className="text-sm font-medium text-[#B9E0FC] italic">
            “The strongest lesson from the study is not that one proposed model dominates every comparison. It is that task-matched decoder and loss design can matter more than increasing backbone complexity for small, low-resolution medical structures.”
          </p>
        </div>
      </section>

      {/* ================================================== */}
      {/* 11. INTERPRETATION BOUNDARIES                      */}
      {/* ================================================== */}
      <section className="bg-[#FBFBFF] p-6 sm:p-8 rounded-2xl border-2 border-dashed border-[#A0A1F8]/60 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#20243C]">
          <ShieldCheck className="w-4 h-4 text-[#9091DF]" />
          <span>WHAT THE RESULTS SUPPORT</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
          Atlas agreement and subject-specific anatomical validity are different questions
        </h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {[
            'The study evaluates agreement with atlas-derived pseudo-reference labels.',
            'The atlas labels are not expert-delineated subject-specific nuclei masks.',
            'The output is anatomical segmentation, not ALS disease localization.',
            'Atlas construction and registration uncertainty are inherited by the supervision.',
            'Small nuclei may be insufficiently visible in routine T1-weighted MRI.',
            'High overlap with the atlas does not prove biological or clinical validity.',
            'Registration error can be substantial relative to the size of individual nuclei.',
            'The study provides architecture-design guidance and evidence of computational feasibility.',
          ].map((point, idx) => (
            <li key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFFFF] border border-[#D9DDEE] text-xs font-medium text-[#20243C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF] mt-1.5 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ================================================== */}
      {/* 12. MAIN CONTRIBUTIONS                             */}
      {/* ================================================== */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
            MAIN CONTRIBUTIONS
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
            Key scientific and architectural contributions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              N-DECONET
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              A compact decoder that aligns and combines multi-stage encoder features with limited additional processing.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              CONTROLLED MODEL STUDY
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              A systematic comparison of decoder structures, loss functions, encoder architectures, and initialization strategies.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FE] border border-[#E0E4F4] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block">
              PRACTICAL DESIGN GUIDANCE
            </span>
            <p className="text-xs text-[#20243C] font-semibold leading-relaxed">
              Evidence that decoder and loss design may matter more than increasingly complex transfer-learning backbones for low-resolution brainstem MRI.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 13. MY CONTRIBUTION                                */}
      {/* ================================================== */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-3">
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
          MY CONTRIBUTION
        </div>
        <p className="text-sm text-[#20243C] font-medium leading-relaxed">
          As first author, I contributed to the problem formulation, brainstem-centered preprocessing, atlas-reference preparation, N-DecoNet and U-DecoNet design, implementation, controlled decoder, loss, and encoder comparisons, quantitative and qualitative analysis, result interpretation, manuscript preparation, and poster presentation, in collaboration with my co-authors.
        </p>
      </section>

      {/* ================================================== */}
      {/* 14. PRESENTED AT ISBI 2024                         */}
      {/* ================================================== */}
      <section className="bg-[#F8F9FE] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-3">
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
          PRESENTED AT ISBI 2024
        </div>
        <p className="text-sm text-[#20243C] font-semibold leading-relaxed">
          This work was presented as a poster at the 2024 IEEE International Symposium on Biomedical Imaging in Athens, Greece.
        </p>
      </section>
    </div>
  );
};
