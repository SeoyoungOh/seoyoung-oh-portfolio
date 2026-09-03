import React from 'react';
import { Database } from 'lucide-react';

interface FoundationDatasetsSlideProps {
  isActive: boolean;
}

export const FoundationDatasetsSlide: React.FC<FoundationDatasetsSlideProps> = () => {
  const datasets = [
    {
      name: 'SOMALS',
      tag: 'CLINICAL COHORT',
      role: 'Initial ALS cohort / early-stage study',
      note: 'Cohort information and dataset numbers to be inserted',
    },
    {
      name: 'PULSE',
      tag: 'EXPANDED COHORT',
      role: 'Expanded ALS cohort with broader clinical and symptom diversity',
      note: 'Cohort information and dataset numbers to be inserted',
    },
    {
      name: 'Public Lesion Datasets',
      tag: 'GROUND TRUTH BENCHMARK',
      role: 'Spatial validation when voxel-wise lesion masks are available',
      note: 'Cohort information and dataset numbers to be inserted',
    },
    {
      name: 'Public Neurodegeneration / Healthy Datasets',
      tag: 'REFERENCE COHORT',
      role: 'ROI-centric evaluation and healthy-reference modeling',
      note: 'Cohort information and dataset numbers to be inserted',
    },
  ];

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          FOUNDATIONS
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Expanding the Evaluation Testbed
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Broadening data sources to systematically evaluate methods across clinical and technical benchmarks.
        </p>
      </div>

      {/* 4 Dataset Cards Grid */}
      <div className="my-auto py-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {datasets.map((ds) => (
          <div
            key={ds.name}
            className="p-4 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#A0A1F8]/15 text-[#9091DF]">
                  {ds.tag}
                </span>
                <Database className="w-3.5 h-3.5 text-[#626A7C]" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-[#20243C] mb-1">
                {ds.name}
              </h3>
              <p className="text-xs text-[#626A7C] leading-relaxed mb-2">
                <strong className="text-[#20243C]">Role:</strong> {ds.role}
              </p>
            </div>

            <div className="pt-2 border-t border-[#D9DDEE]/60 text-[10px] text-[#626A7C] italic">
              {ds.note}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Message Banner */}
      <div className="p-3 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] flex items-center justify-center text-center">
        <p className="text-xs font-bold text-[#20243C]">
          Different datasets answer different validation questions.
        </p>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-3 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Multi-Cohort Evaluation</span>
        <span className="font-semibold text-[#9091DF]">Datasets & Benchmarks</span>
      </div>
    </div>
  );
};
