import React from 'react';
import { ScientificFigure } from '../ScientificFigure';
import { MSLDResultsChart } from './MSLDResultsChart';
import { ISICResultsChart } from './ISICResultsChart';
import {
  CheckCircle2,
  AlertTriangle,
  Layers,
  Brain,
  Shield,
  Cpu,
  HelpCircle,
  Sparkles,
  Award,
  UserCheck,
  Calendar,
} from 'lucide-react';

export const RethnetContent: React.FC = () => {
  return (
    <div className="space-y-12">
      
      {/* 1. RESEARCH PROBLEM */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            RESEARCH PROBLEM
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-4">
          Fine-grained skin problems can look similar—but they do not appear in isolation
        </h3>
        
        <p className="text-base text-[#20243C] font-medium leading-relaxed mb-4">
          Facial skin problems are often small, visually ambiguous, and densely distributed across the face.
        </p>
        <p className="text-base text-[#20243C] font-medium leading-relaxed mb-4">
          Different categories may share similar color, texture, size, and local appearance. A segmentation model that evaluates every region independently can therefore confuse visually related classes.
        </p>
        <p className="text-base text-[#20243C] font-medium leading-relaxed mb-6">
          The central research question is whether contextual relationships between objects and groups of objects can improve fine-grained semantic segmentation.
        </p>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              AMBIGUOUS APPEARANCE
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              Different facial skin problems may share similar texture, color, scale, and local visual characteristics.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              SMALL AND DENSE TARGETS
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              Many target regions occupy relatively few pixels and may occur in dense groups across the face.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              CONTEXTUAL RELATIONSHIPS
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              The presence of one visual pattern may provide positive or negative evidence for identifying another.
            </p>
          </div>
        </div>

        {/* Question Highlight */}
        <div className="p-4 rounded-xl bg-[#20243C] text-[#FBFBFF]">
          <p className="text-sm font-semibold text-center italic">
            “Can an object be identified more reliably by considering its relationship to other objects?”
          </p>
        </div>
      </section>

      {/* 2. OBJECT-BY-OBJECT LEARNING (CORE CONCEPT) */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Brain className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            CORE CONCEPT
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-4">
          Object-by-object learning uses relationships between classes as additional evidence
        </h3>

        <p className="text-base text-[#20243C] font-medium leading-relaxed mb-4">
          The paper introduces object-by-object decision-making.
        </p>
        <p className="text-base text-[#20243C] font-medium leading-relaxed mb-4">
          Rather than treating every candidate region independently, the model learns contextual interactions between objects or groups of objects.
        </p>
        <p className="text-base text-[#20243C] font-medium leading-relaxed mb-6">
          Positive relationships represent visually or semantically related patterns. Negative relationships help distinguish patterns that should not receive the same label.
        </p>

        {/* Figure 1 */}
        <ScientificFigure
          src="/images/publications/rethnet-iccv-2019/object-by-object-concept.webp"
          alt="Facial image patches connected through positive and negative relationships to illustrate object-by-object contextual learning."
          caption="Object-by-object learning concept. Local facial regions may share positive or negative visual relationships, allowing contextual evidence from one object or group of objects to influence another prediction."
        />
      </section>

      {/* 3. DATASET AND PRIVACY */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            DATASET AND PRIVACY
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-2">
          A purpose-built facial skin segmentation dataset with privacy-preserving restrictions
        </h3>
        <p className="text-xs font-mono text-[#626A7C] mb-6">
          Dataset Name: Multi-type Skin Lesion Labelled Database (MSLD)
        </p>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              IMAGE COLLECTION
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              27,790 frontal facial images were collected through cosmetics-store kiosks between April and August 2018 after obtaining user consent.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              PIXEL-WISE ANNOTATION
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              Four hundred and twelve images were selected for detailed pixel-wise annotation of multiple facial skin problems and additional facial-region classes.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              TRAIN–TEST SPLIT
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              Three hundred and seventy-four annotated images were used for training, while 38 images were reserved for testing.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              PRIVACY
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              The MSLD dataset was used for research but was not publicly released because the images contain private facial information.
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] flex items-center gap-2 text-xs font-medium text-[#626A7C]">
          <Shield className="w-4 h-4 text-[#9091DF] shrink-0" />
          <span>No private MSLD facial images are displayed or made publicly accessible on this page.</span>
        </div>
      </section>

      {/* 4. RETHINKER MODULE */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Layers className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            RETHINKER MODULE
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-4">
          Combine local object interactions with global channel context
        </h3>

        <p className="text-base text-[#20243C] font-medium leading-relaxed mb-4">
          The REthinker module combines two complementary contextual mechanisms.
        </p>
        <p className="text-base text-[#20243C] font-medium leading-relaxed mb-4">
          A locally constructed Conv3D or ConvLSTM operation processes fragmented feature maps as groups of spatial patches, capturing contextual relationships across local neighborhoods.
        </p>
        <p className="text-base text-[#20243C] font-medium leading-relaxed mb-4">
          A squeeze-and-excitation branch aggregates global spatial information and performs channel-wise feature recalibration.
        </p>
        <p className="text-base text-[#20243C] font-medium leading-relaxed mb-6">
          The two branches are combined to produce a context-aware representation for object-dependent decision-making.
        </p>

        {/* Figure 4 */}
        <ScientificFigure
          src="/images/publications/rethnet-iccv-2019/rethinker-module-comparison.webp"
          alt="Five block diagrams comparing squeeze-and-excitation, convolutional baseline, Conv3D REthinker, and ConvLSTM REthinker modules."
          caption="Comparison of squeeze-and-excitation blocks, the convolutional baseline, and the proposed Conv3D- and ConvLSTM-based REthinker variants."
        />

        {/* 2 Method Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              LOCAL CONTEXT
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              Image-to-patch transformation allows Conv3D or ConvLSTM operations to model relationships across local feature neighborhoods.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              GLOBAL CONTEXT
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              Squeeze-and-excitation aggregates global spatial information and dynamically recalibrates feature channels.
            </p>
          </div>
        </div>

        <p className="text-xs font-semibold text-[#626A7C] italic">
          Note: The Conv3D variant is referred to as REthinker-d, while the ConvLSTM variant is referred to as REthinker-e.
        </p>
      </section>

      {/* 5. RETHNET ARCHITECTURE */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Cpu className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            PROPOSED ARCHITECTURE
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-4">
          Integrate REthinker blocks into an Xception-based segmentation network
        </h3>

        <p className="text-base text-[#20243C] font-medium leading-relaxed mb-4">
          RethNet modifies Xception by inserting REthinker modules after feature blocks, reducing selected middle- and exit-flow parameters, and preserving contextual representations throughout the encoder.
        </p>
        <p className="text-base text-[#20243C] font-medium leading-relaxed mb-6">
          The decoder follows the DeepLabv3+ design to recover detailed pixel-wise segmentation outputs.
        </p>

        {/* Figure 5 */}
        <ScientificFigure
          src="/images/publications/rethnet-iccv-2019/rethnet-architecture.webp"
          alt="Facial image processed through convolution, Xception and REthinker blocks, ASPP, skip-feature fusion, and upsampling to produce a multi-class facial segmentation map."
          caption="RethNet architecture based on a modified Xception encoder with REthinker blocks and the DeepLabv3+ decoder."
        />

        {/* 4 Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              RE-XCEPTION ENCODER
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              REthinker modules are inserted into a modified Xception feature extractor.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              PATCH-BASED CONTEXT
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              Spatial feature maps are reorganized into patch groups for local contextual modeling.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              ATROUS SPATIAL PYRAMID
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              ASPP aggregates information using multiple effective receptive-field scales.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              DEEPLABV3+ DECODER
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              Low- and high-level features are combined to recover detailed segmentation boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* 6. EXPERIMENTAL SETUP */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            EXPERIMENTAL SETUP
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-6">
          Training parameters and data augmentation across benchmarks
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* MSLD Column */}
          <div className="p-5 rounded-2xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#20243C] mb-3 pb-2 border-b border-[#D9DDEE]">
              MSLD EXPERIMENTAL SETUP
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#20243C]">
              <li>• <span className="font-bold">Dataset Split:</span> 374 training images, 38 test images</li>
              <li>• <span className="font-bold">Image Resizing:</span> Resized to 730 × 960</li>
              <li>• <span className="font-bold">Cropping:</span> Random 512 × 512 crops during training</li>
              <li>• <span className="font-bold">Data Augmentation:</span> Random rotation, random zoom, random horizontal flipping</li>
              <li>• <span className="font-bold">Hardware:</span> TensorFlow on one NVIDIA GeForce GTX 1080 Ti</li>
              <li>• <span className="font-bold">Loss & Optimizer:</span> Softmax cross-entropy with momentum optimizer</li>
              <li>• <span className="font-bold">Learning Rate:</span> Base 0.001, 200 epochs, reduced by 10x every 50 epochs</li>
            </ul>
          </div>

          {/* ISIC Column */}
          <div className="p-5 rounded-2xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#20243C] mb-3 pb-2 border-b border-[#D9DDEE]">
              ISIC 2018 ATTRIBUTE SEGMENTATION
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#20243C]">
              <li>• <span className="font-bold">Dataset Split:</span> 2,594 training, 100 validation, 1,000 test images</li>
              <li>• <span className="font-bold">Evaluation Metrics:</span> Jaccard index and Dice coefficient</li>
              <li>• <span className="font-bold">Augmentation:</span> Common data augmentation applied</li>
              <li>• <span className="font-bold">Preprocessing:</span> No additional test-image preprocessing reported</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. MSLD RESULTS SUMMARY */}
      <section className="bg-[#20243C] text-[#FBFBFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]/20 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-4 h-4 text-[#DFF8E1]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#DFF8E1]">
            MSLD RESULTS & VERIFIED METRICS
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#FBFBFF] tracking-tight mb-6">
          Context modeling substantially improved multi-type facial segmentation
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#181A2D] border border-[#A0A1F8]/20">
            <span className="text-[10px] font-mono font-bold uppercase text-[#A0A1F8] block mb-1">
              RETHNET + RETHINKER-E
            </span>
            <p className="text-base font-extrabold text-[#DFF8E1]">
              79.46% Mean IoU
            </p>
            <p className="text-xs text-[#CBD5E1]">96.11% Pixel Accuracy</p>
          </div>

          <div className="p-4 rounded-xl bg-[#181A2D] border border-[#A0A1F8]/20">
            <span className="text-[10px] font-mono font-bold uppercase text-[#A0A1F8] block mb-1">
              RETHNET + RETHINKER-D
            </span>
            <p className="text-base font-extrabold text-[#FBFBFF]">
              76.56% Mean IoU
            </p>
            <p className="text-xs text-[#DFF8E1]">96.45% Pixel Accuracy</p>
          </div>

          <div className="p-4 rounded-xl bg-[#181A2D] border border-[#A0A1F8]/20">
            <span className="text-[10px] font-mono font-bold uppercase text-[#A0A1F8] block mb-1">
              DEEPLABV3+ + XCEPTION
            </span>
            <p className="text-base font-extrabold text-[#CBD5E1]">
              64.12% Mean IoU
            </p>
            <p className="text-xs text-[#CBD5E1]">94.08% Pixel Accuracy</p>
          </div>

          <div className="p-4 rounded-xl bg-[#181A2D] border border-[#A0A1F8]/20">
            <span className="text-[10px] font-mono font-bold uppercase text-[#A0A1F8] block mb-1">
              GAIN OVER BASELINE
            </span>
            <p className="text-base font-extrabold text-[#DFF8E1]">
              +15.34 percentage points
            </p>
            <p className="text-xs text-[#CBD5E1]">in Mean IoU</p>
          </div>
        </div>

        <p className="text-xs font-medium text-[#CBD5E1]">
          The ConvLSTM-based REthinker-e achieved the highest Mean IoU, while the Conv3D-based REthinker-d achieved the highest pixel accuracy.
        </p>
      </section>

      {/* 8. INTERACTIVE MSLD CHART */}
      <MSLDResultsChart />

      {/* 9. ISIC 2018 GENERALIZATION */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            EXTERNAL DATASET EVALUATION
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-4">
          The contextual model also generalized to dermoscopic attribute segmentation
        </h3>

        <p className="text-base text-[#20243C] font-medium leading-relaxed mb-4">
          The proposed architectures were also evaluated on the ISIC 2018 attribute segmentation task.
        </p>
        <p className="text-base text-[#20243C] font-medium leading-relaxed mb-4">
          RethNet + REthinker-e reached a Jaccard index of 0.475 and a Dice coefficient of 0.644.
        </p>
        <p className="text-base text-[#20243C] font-medium leading-relaxed mb-6">
          It outperformed the reported comparison single models while remaining slightly below the top ensemble result.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              JACCARD INDEX
            </span>
            <p className="text-lg font-extrabold text-[#20243C]">0.475</p>
            <p className="text-xs text-[#626A7C]">RethNet + REthinker-e</p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              DICE COEFFICIENT
            </span>
            <p className="text-lg font-extrabold text-[#20243C]">0.644</p>
            <p className="text-xs text-[#626A7C]">RethNet + REthinker-e</p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#626A7C] block mb-1">
              TOP ENSEMBLE BENCHMARK
            </span>
            <p className="text-lg font-extrabold text-[#20243C]">Jaccard 0.483 | Dice 0.651</p>
            <p className="text-xs text-[#626A7C]">Challenge Winner Reference</p>
          </div>
        </div>
      </section>

      {/* 10. INTERACTIVE ISIC CHART */}
      <ISICResultsChart />

      {/* 11. QUALITATIVE EXTERNAL EXAMPLES */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            QUALITATIVE EXAMPLES
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-4">
          Context-aware segmentation on selected external facial examples
        </h3>

        <p className="text-base text-[#20243C] font-medium leading-relaxed mb-4">
          Figure 7 of the paper shows qualitative outputs from external facial images provided through fionaseah.com with the image author’s agreement.
        </p>
        <p className="text-base text-[#20243C] font-medium leading-relaxed mb-6">
          The examples illustrate how RethNet + REthinker-e produces dense segmentation support around visible facial skin-problem regions.
        </p>

        {/* Figure 7 */}
        <ScientificFigure
          src="/images/publications/rethnet-iccv-2019/qualitative-external-results.webp"
          alt="Two external facial examples displayed alongside semantic segmentation maps and localized RethNet prediction overlays for visible facial skin-problem regions."
          caption="Qualitative outputs of RethNet + REthinker-e on external facial examples reproduced from Figure 7 of the paper. The source images were provided through fionaseah.com with the image author’s agreement."
          interpretationNote="These examples illustrate model behavior on selected external images. They do not establish clinical diagnosis, population-level generalization, prospective validation, or dermatologist-validated lesion boundaries."
        />
      </section>

      {/* 12. COMPUTATIONAL COST */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Cpu className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            COMPUTATIONAL COST
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-6">
          Strong contextual modeling came with substantial computational cost
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              PARAMETERS
            </span>
            <p className="text-lg font-extrabold text-[#20243C]">112 Million</p>
            <p className="text-xs text-[#626A7C]">RethNet + REthinker-e</p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              GPU INFERENCE
            </span>
            <p className="text-lg font-extrabold text-[#20243C]">~2.7 seconds</p>
            <p className="text-xs text-[#626A7C]">Per 512 × 512 image (GTX 1080 Ti)</p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-1">
              CPU INFERENCE
            </span>
            <p className="text-lg font-extrabold text-[#20243C]">~11 seconds</p>
            <p className="text-xs text-[#626A7C]">Per 512 × 512 image (CPU System)</p>
          </div>
        </div>

        <p className="text-xs font-semibold text-[#626A7C] italic">
          The paper identifies model complexity as an important limitation and proposes lighter REthinker designs as future work.
        </p>
      </section>

      {/* 13. MAIN FINDINGS */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            MAIN FINDINGS
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-6">
          Key empirical conclusions from the evaluation
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-2">
              CONTEXT IMPROVED SEGMENTATION
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              Explicitly modeling local and global relationships improved the separation of visually ambiguous facial skin-problem classes.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-2">
              CONVLSTM STRONGEST OVERLAP
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              The REthinker-e variant achieved the highest MSLD Mean IoU and strongest single-model ISIC result.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-2">
              GENERALIZATION BEYOND MSLD
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              The approach also produced competitive results on the independent ISIC 2018 attribute-segmentation task.
            </p>
          </div>
        </div>
      </section>

      {/* 14. INTERPRETATION BOUNDARIES & SCOPE */}
      <section className="bg-[#FBFBFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#626A7C] mb-3">
          <AlertTriangle className="w-4 h-4 text-[#9091DF]" />
          <span>WHAT THE RESULTS SUPPORT (INTERPRETATION BOUNDARIES)</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-4">
          Scope, assumptions, and scientific boundaries
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-medium text-[#20243C] leading-relaxed">
          <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#D9DDEE] flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#9091DF] shrink-0 mt-0.5" />
            <span>Evaluates semantic segmentation of facial skin-problem labels.</span>
          </div>
          <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#D9DDEE] flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-[#9091DF] shrink-0 mt-0.5" />
            <span>Output is NOT a clinical diagnosis.</span>
          </div>
          <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#D9DDEE] flex items-start gap-2">
            <Shield className="w-4 h-4 text-[#9091DF] shrink-0 mt-0.5" />
            <span>MSLD was not publicly released because it contains private facial images.</span>
          </div>
          <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#D9DDEE] flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#9091DF] shrink-0 mt-0.5" />
            <span>The MSLD test set contains only 38 annotated images.</span>
          </div>
          <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#D9DDEE] flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-[#9091DF] shrink-0 mt-0.5" />
            <span>Results do NOT constitute broad demographic or clinical validation.</span>
          </div>
          <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#D9DDEE] flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#9091DF] shrink-0 mt-0.5" />
            <span>ISIC uses dermoscopic images, representing a different domain from frontal facial photographs.</span>
          </div>
          <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#D9DDEE] flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#9091DF] shrink-0 mt-0.5" />
            <span>Figure 7 contains selected external qualitative examples, not MSLD samples.</span>
          </div>
          <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#D9DDEE] flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-[#9091DF] shrink-0 mt-0.5" />
            <span>Figure 7 does not establish clinical or population-level generalization.</span>
          </div>
          <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#D9DDEE] flex items-start gap-2">
            <Cpu className="w-4 h-4 text-[#9091DF] shrink-0 mt-0.5" />
            <span>The model has substantial parameter (112M) and inference time requirements.</span>
          </div>
          <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#D9DDEE] flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#9091DF] shrink-0 mt-0.5" />
            <span>Demonstrates contextual segmentation performance, not prospective clinical utility.</span>
          </div>
        </div>
      </section>

      {/* 15. MAIN CONTRIBUTIONS */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            MAIN CONTRIBUTIONS
          </h2>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-6">
          Summary of primary technical contributions
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-2">
              OBJECT-BY-OBJECT LEARNING
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              A contextual formulation in which one object or group of objects provides evidence for identifying another.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-2">
              RETHINKER MODULE
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              A reusable module combining patch-level Conv3D or ConvLSTM context with global squeeze-and-excitation recalibration.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] block mb-2">
              RETHNET
            </span>
            <p className="text-xs font-medium text-[#20243C] leading-relaxed">
              An Xception-based semantic segmentation architecture integrating REthinker modules with a DeepLabv3+ decoder.
            </p>
          </div>
        </div>
      </section>

      {/* 16. MY CONTRIBUTION */}
      <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <UserCheck className="w-4 h-4 text-[#9091DF]" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
            MY CONTRIBUTION
          </h2>
        </div>
        <p className="text-sm font-semibold text-[#20243C] leading-relaxed">
          As a co-author and machine learning researcher at lululab, I contributed to the development and evaluation of the facial skin-analysis research, including experimental implementation, quantitative analysis, result interpretation, manuscript preparation, and scientific presentation in collaboration with the co-authors.
        </p>
      </section>

      {/* 17. PRESENTED AT ICCV 2019 */}
      <section className="bg-[#20243C] text-[#FBFBFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE]/20 text-center">
        <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#A0A1F8] mb-2">
          PRESENTED AT ICCV 2019
        </h2>
        <p className="text-sm font-semibold text-[#FBFBFF] max-w-2xl mx-auto leading-relaxed">
          This work was presented orally at the Visual Recognition for Medical Images Workshop held in conjunction with the 2019 IEEE International Conference on Computer Vision.
        </p>
      </section>

    </div>
  );
};
