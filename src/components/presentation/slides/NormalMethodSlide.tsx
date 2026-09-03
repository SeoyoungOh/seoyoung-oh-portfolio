import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface NormalMethodSlideProps {
  isActive: boolean;
}

export const NormalMethodSlide: React.FC<NormalMethodSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          METHOD 2 · NORMAL PROJECTION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Reliable Normal Projection
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          The complete healthy-only normative modeling, projection, and calibration pipeline.
        </p>
      </div>

      {/* 6-Stage Process Pipeline */}
      <div className="my-auto py-1">
        <div className="grid grid-cols-6 gap-1.5 items-stretch">
          {/* Stage 1 */}
          <div className="p-2 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col justify-between text-center">
            <div>
              <span className="text-[9px] font-mono font-bold text-[#9091DF] block mb-0.5">STAGE 01</span>
              <h3 className="text-[11px] font-bold text-[#20243C] mb-0.5">Healthy MRI Only</h3>
              <p className="text-[9px] text-[#626A7C] leading-snug">Normative training cohort</p>
            </div>
            <div className="mt-1.5 py-0.5 rounded bg-[#DFF8E1]/60 text-[9px] font-mono text-[#20243C] font-semibold">x_h ∈ D_healthy</div>
          </div>

          {/* Stage 2: Normal-manifold modeling */}
          <div className="p-2 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-mono font-bold text-[#9091DF] block text-center mb-0.5">STAGE 02</span>
              <h3 className="text-[11px] font-bold text-[#20243C] text-center mb-1">Manifold Modeling</h3>
              <div className="space-y-0.5 text-[8.5px]">
                <div className="px-1 py-0.5 rounded bg-[#F4F5FB] text-[#20243C] truncate font-medium">Latent Autoencoder</div>
                <div className="px-1 py-0.5 rounded bg-[#F4F5FB] text-[#20243C] truncate font-medium">Diffusion Teacher</div>
                <div className="px-1 py-0.5 rounded bg-[#F4F5FB] text-[#20243C] truncate font-medium">Projection Student</div>
              </div>
            </div>
            <div className="mt-1 text-[8.5px] text-center text-[#9091DF] font-bold">Generative Prior</div>
          </div>

          {/* Stage 3 */}
          <div className="p-2 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col justify-between text-center">
            <div>
              <span className="text-[9px] font-mono font-bold text-[#9091DF] block mb-0.5">STAGE 03</span>
              <h3 className="text-[11px] font-bold text-[#20243C] mb-0.5">Input MRI</h3>
              <p className="text-[9px] text-[#626A7C] leading-snug">Query scan (suspected pathology)</p>
            </div>
            <div className="mt-1.5 py-0.5 rounded bg-[#F4F5FB] text-[9px] font-mono text-[#626A7C]">x_query ∈ ℝ³</div>
          </div>

          {/* Stage 4 */}
          <div className="p-2 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col justify-between text-center">
            <div>
              <span className="text-[9px] font-mono font-bold text-[#9091DF] block mb-0.5">STAGE 04</span>
              <h3 className="text-[11px] font-bold text-[#20243C] mb-0.5">Projection</h3>
              <p className="text-[9px] text-[#626A7C] leading-snug">Map to healthy-like counterfactual</p>
            </div>
            <div className="mt-1.5 py-0.5 rounded bg-[#20243C] text-[9px] font-mono text-[#FFFFFF]">x̂ = Proj(x)</div>
          </div>

          {/* Stage 5: Multi-view residual + uncertainty */}
          <div className="p-2 rounded-xl bg-[#FBFBFF] border-2 border-[#9091DF]/40 flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-mono font-bold text-[#9091DF] block text-center mb-0.5">STAGE 05</span>
              <h3 className="text-[11px] font-bold text-[#20243C] text-center mb-1">Residual & Disagreement</h3>
              <div className="space-y-0.5 text-[8px]">
                <div className="px-1 py-0.5 rounded bg-[#A0A1F8]/10 text-[#20243C] truncate font-medium">Pixel / Latent / HF Residuals</div>
                <div className="px-1 py-0.5 rounded bg-[#DFF8E1]/60 text-[#20243C] truncate font-medium">Projection Disagreement</div>
                <div className="px-1 py-0.5 rounded bg-[#F4F5FB] text-[#626A7C] truncate font-medium">Confidence Calibration</div>
              </div>
            </div>
            <div className="mt-1 text-[8.5px] text-center text-[#9091DF] font-bold">Multi-View Evidence</div>
          </div>

          {/* Stage 6 */}
          <div className="p-2 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col justify-between text-center">
            <div>
              <span className="text-[9px] font-mono font-bold text-[#9091DF] block mb-0.5">STAGE 06</span>
              <h3 className="text-[11px] font-bold text-[#20243C] mb-0.5">Calibrated Evidence</h3>
              <p className="text-[9px] text-[#626A7C] leading-snug">Selective anomaly map + ROI overlay</p>
            </div>
            <div className="mt-1.5 py-0.5 rounded bg-[#DFF8E1] text-[9px] font-mono text-[#20243C] font-bold">A* ⊙ ROIs</div>
          </div>
        </div>

        {/* Large Central Reserved Area for Thesis Pipeline Figure */}
        <div className="mt-2 p-3 rounded-xl border border-dashed border-[#D9DDEE] bg-[#FBFBFF] text-center">
          <p className="text-xs font-bold text-[#20243C] mb-0.5">
            METHOD 2 DETAILED ARCHITECTURE & PROJECTION FORMULATION
          </p>
          <p className="text-[10px] text-[#626A7C]">
            Reserved area for diffusion guidance schedules, student-teacher distillation pathways, and multi-scale frequency residual decomposition diagrams.
          </p>
        </div>
      </div>

      {/* Important Message at the Bottom */}
      <div className="p-2.5 rounded-xl bg-[#DFF8E1]/50 border border-[#C8DFCA] flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-[#20243C] shrink-0" />
        <p className="text-xs font-bold text-[#20243C]">
          Foundational Rigor: <span className="font-normal text-[#626A7C]">Training and calibration use <strong className="text-[#20243C]">healthy data only</strong>. Patient images do not determine the operating point.</span>
        </p>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Normative Pipeline Architecture</span>
        <span className="font-semibold text-[#9091DF]">Healthy-Only Framework</span>
      </div>
    </div>
  );
};
