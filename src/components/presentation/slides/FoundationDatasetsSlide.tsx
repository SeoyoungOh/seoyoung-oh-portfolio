import React, { useState } from 'react';
import { ArrowRight, ShieldAlert, Check, HelpCircle } from 'lucide-react';

interface FoundationDatasetsSlideProps {
  isActive: boolean;
}

type PublicDatasetKey = 'brats' | 'mslesseg' | 'adni' | 'openbhb';

interface PublicDatasetInfo {
  key: PublicDatasetKey;
  name: string;
  badge: string;
  badgeStyle: string;
  disease: string;
  lesionType: string;
  reference: string;
  roleSummary: string;
  question: string;
  detailCategory: string;
  detailReference: string;
  detailPurpose: string;
}

const PUBLIC_DATASETS: PublicDatasetInfo[] = [
  {
    key: 'brats',
    name: 'BraTS',
    badge: 'VOXEL-MASK VALIDATION',
    badgeStyle: 'bg-[#D9D8F4]/70 text-[#6F69C9] border-[#A7A3DE]',
    disease: 'Brain tumor',
    lesionType: 'Large / heterogeneous lesions',
    reference: 'Voxel-wise masks',
    roleSummary: 'Visible-lesion localization benchmark',
    question: 'Can the method recover a clearly defined abnormal region?',
    detailCategory: 'BRAIN TUMOR',
    detailReference: 'Voxel-wise masks · large heterogeneous abnormalities',
    detailPurpose: 'Explicit spatial localization benchmark with direct voxel-wise ground truth',
  },
  {
    key: 'mslesseg',
    name: 'MSLesSeg',
    badge: 'VOXEL-MASK VALIDATION',
    badgeStyle: 'bg-[#D9D8F4]/70 text-[#6F69C9] border-[#A7A3DE]',
    disease: 'Multiple sclerosis',
    lesionType: 'Small / fragmented lesions',
    reference: 'Voxel-wise masks',
    roleSummary: 'Small-lesion sensitivity benchmark',
    question: 'Can the method detect smaller and more fragmented abnormal regions?',
    detailCategory: 'MULTIPLE SCLEROSIS',
    detailReference: 'Voxel-wise masks · small fragmented lesions',
    detailPurpose: 'Stress test for sensitivity to small and spatially dispersed abnormalities',
  },
  {
    key: 'adni',
    name: 'ADNI',
    badge: 'ROI-CENTRIC VALIDATION',
    badgeStyle: 'bg-[#F4F5FB] text-[#74747D] border-[#D9DDEE]',
    disease: 'Neurodegeneration',
    lesionType: 'Diffuse abnormality',
    reference: 'No focal lesion mask',
    roleSummary: 'ROI-centric neurodegeneration benchmark',
    question: 'Can anatomical interpretation remain meaningful when no lesion mask exists?',
    detailCategory: 'NEURODEGENERATION',
    detailReference: 'No focal lesion masks · diffuse neurodegenerative changes',
    detailPurpose: 'ROI-centric evaluation in a second neurodegenerative setting without explicit lesion masks',
  },
  {
    key: 'openbhb',
    name: 'OpenBHB',
    badge: 'HEALTHY REFERENCE',
    badgeStyle: 'bg-[#E3F0E6] text-[#2E7D32] border-[#C3E0C9]',
    disease: 'Healthy brain MRI',
    lesionType: 'No pathology (large reference)',
    reference: '>5,000 healthy scans',
    roleSummary: 'Healthy-only modeling & calibration',
    question: 'Can normal anatomy be learned without using disease annotations?',
    detailCategory: 'HEALTHY REFERENCE',
    detailReference: 'No pathology · large healthy population (>5,000 scans)',
    detailPurpose: 'Healthy-only model training, validation, calibration, and false-positive control',
  },
];

export const FoundationDatasetsSlide: React.FC<FoundationDatasetsSlideProps> = () => {
  const [lockedDataset, setLockedDataset] = useState<PublicDatasetKey | null>(null);
  const [hoveredDataset, setHoveredDataset] = useState<PublicDatasetKey | null>(null);
  const [focusedDataset, setFocusedDataset] = useState<PublicDatasetKey | null>(null);

  const activeKey: PublicDatasetKey = hoveredDataset ?? focusedDataset ?? lockedDataset ?? 'brats';
  const activeDataset = PUBLIC_DATASETS.find((d) => d.key === activeKey) ?? PUBLIC_DATASETS[0];

  const handleToggleSelect = (key: PublicDatasetKey) => {
    setLockedDataset((prev) => (prev === key ? null : key));
  };

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          ZONE 1: Header Area (~10% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              FOUNDATIONS
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              ALS Cohorts and Supporting Validation Datasets
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              ALS remains the clinical target; public datasets provide complementary validation where ALS lacks voxel-wise disease ground truth.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Multi-Cohort Architecture</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          ZONE 2: Top Section — Target ALS Cohorts (~54% height, Visually Dominant)
      ========================================================================= */}
      <div className="shrink-0 rounded-xl bg-white border-2 border-[#6F69C9]/30 p-2.5 shadow-2xs">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-1.5 border-b border-[#D9DDEE]/80 mb-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#6F69C9] text-white text-[9px] font-mono font-black uppercase tracking-wider">
              TARGET ALS COHORTS
            </span>
            <span className="text-xs font-black text-[#24242A]">
              Clinical Target of the Thesis
            </span>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-[#6F69C9]">
            <span>SOMALS</span>
            <ArrowRight className="w-3 h-3 stroke-[2.5]" />
            <span>Why Move Beyond?</span>
            <ArrowRight className="w-3 h-3 stroke-[2.5]" />
            <span className="font-black">PULSE</span>
          </div>
        </div>

        {/* 3-Column Progression Row */}
        <div className="grid grid-cols-12 gap-2 items-stretch">
          {/* 1. SOMALS (cols: 4) */}
          <div className="col-span-4 p-2.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-1 mb-1">
                <div>
                  <span className="text-[8.5px] font-mono font-bold text-[#6F69C9] uppercase tracking-wider block">
                    INITIAL ALS COHORT
                  </span>
                  <h3 className="text-sm font-black text-[#24242A] tracking-tight">
                    SOMALS
                  </h3>
                </div>
                <span className="px-1.5 py-0.5 rounded bg-white border border-[#D9DDEE] text-[9px] font-mono font-bold text-[#6F69C9]">
                  26 ALS + 26 HC
                </span>
              </div>

              <ul className="space-y-1 text-[9.5px] text-[#24242A] mb-2">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9] shrink-0" />
                  <span>Early-stage ALS case–control cohort</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9] shrink-0" />
                  <span>T1-weighted MRI + DTI / FA</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9] shrink-0" />
                  <span>Age- and sex-matched controls</span>
                </li>
                <li className="flex items-center gap-1.5 font-medium text-[#6F69C9]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9] shrink-0" />
                  <span>Initial supervised brainstem framework</span>
                </li>
              </ul>
            </div>

            <div className="pt-1.5 border-t border-[#D9DDEE]/80 space-y-0.5">
              <p className="text-[9px] text-[#24242A] font-medium leading-tight">
                Established the initial supervised and atlas-based brainstem analysis framework.
              </p>
              <div className="pt-1 border-t border-[#D9DDEE]/50">
                <span className="text-[8px] font-mono font-bold text-[#74747D] uppercase block">
                  WHAT DID SOMALS ENABLE?
                </span>
                <p className="text-[8.5px] text-[#6F69C9] italic leading-tight">
                  Could conventional supervised brainstem segmentation provide a practical starting point?
                </p>
              </div>
            </div>
          </div>

          {/* 2. Transition: Why move beyond SOMALS? (cols: 3.5) */}
          <div className="col-span-3 p-2 rounded-lg bg-[#F4F5FB] border border-[#D9D8F4] flex flex-col justify-between">
            <div>
              <div className="text-[8.5px] font-mono font-bold text-[#6F69C9] uppercase tracking-wider mb-1">
                WHY MOVE BEYOND SOMALS?
              </div>
              <p className="text-[9px] text-[#74747D] leading-tight mb-1.5">
                Sufficient for initial baseline, but not for broader evidence localization:
              </p>

              <div className="space-y-1 text-[9px]">
                <div className="p-1 rounded bg-white border border-[#D9DDEE] flex items-start gap-1 shadow-2xs">
                  <span className="text-[8px] font-mono font-bold text-[#6F69C9] shrink-0 mt-0.5">1.</span>
                  <div>
                    <strong className="text-[#24242A] block leading-tight">Limited scale</strong>
                    <span className="text-[#74747D] text-[8.5px]">26 ALS participants</span>
                  </div>
                </div>

                <div className="p-1 rounded bg-white border border-[#D9DDEE] flex items-start gap-1 shadow-2xs">
                  <span className="text-[8px] font-mono font-bold text-[#6F69C9] shrink-0 mt-0.5">2.</span>
                  <div>
                    <strong className="text-[#24242A] block leading-tight">Early-stage setting</strong>
                    <span className="text-[#74747D] text-[8.5px]">Limited clinical heterogeneity</span>
                  </div>
                </div>

                <div className="p-1 rounded bg-white border border-[#D9DDEE] flex items-start gap-1 shadow-2xs">
                  <span className="text-[8px] font-mono font-bold text-[#6F69C9] shrink-0 mt-0.5">3.</span>
                  <div>
                    <strong className="text-[#24242A] block leading-tight">Limited clinical depth</strong>
                    <span className="text-[#74747D] text-[8.5px]">Insufficient for disease-evidence tasks</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-1 text-[9px] font-mono font-bold text-[#6F69C9] pt-1">
              <span>Points to PULSE</span>
              <ArrowRight className="w-3 h-3 stroke-[2.5]" />
            </div>
          </div>

          {/* 3. PULSE (cols: 5, Visually Strongest) */}
          <div className="col-span-5 p-2.5 rounded-lg bg-white border-2 border-[#6F69C9] shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D9D8F4]/25 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="flex items-start justify-between gap-1 mb-1">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[8.5px] font-mono font-black text-[#6F69C9] uppercase tracking-wider block">
                      MAIN ALS APPLICATION COHORT
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9]" />
                  </div>
                  <h3 className="text-sm lg:text-[15px] font-black text-[#24242A] tracking-tight">
                    PULSE
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-[#D9D8F4]/60 border border-[#6F69C9] text-[10.5px] font-mono font-black text-[#6F69C9]">
                  178 ALS + 9 HC
                </span>
              </div>

              <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[9.5px] text-[#24242A] mb-1.5">
                <div className="flex items-start gap-1">
                  <Check className="w-3 h-3 text-[#6F69C9] shrink-0 mt-0.5" />
                  <span>Larger ALS cohort (178 ALS)</span>
                </div>
                <div className="flex items-start gap-1">
                  <Check className="w-3 h-3 text-[#6F69C9] shrink-0 mt-0.5" />
                  <span>Richer clinical characterization</span>
                </div>
                <div className="flex items-start gap-1">
                  <Check className="w-3 h-3 text-[#6F69C9] shrink-0 mt-0.5" />
                  <span>T1-weighted MRI + DTI / FA</span>
                </div>
                <div className="flex items-start gap-1">
                  <Check className="w-3 h-3 text-[#6F69C9] shrink-0 mt-0.5" />
                  <span>Distinct acquisition protocol</span>
                </div>
                <div className="col-span-2 flex items-start gap-1 font-semibold text-[#6F69C9]">
                  <Check className="w-3 h-3 text-[#6F69C9] shrink-0 mt-0.5" />
                  <span>Longitudinal follow-up available (~6 and 12 months)</span>
                </div>
              </div>
            </div>

            {/* Comparison Cue Box */}
            <div className="pt-1 border-t border-[#D9DDEE]/80 bg-[#FAFAFC] p-1.5 rounded border border-[#D9DDEE]/60 text-[8.5px] font-mono">
              <div className="flex items-center justify-between text-[#24242A]">
                <span>26 ALS → <strong className="text-[#6F69C9]">178 ALS</strong></span>
                <span className="text-[#74747D]">|</span>
                <span>Early baseline → <strong className="text-[#6F69C9]">Broader clinical cohort</strong></span>
                <span className="text-[#74747D]">|</span>
                <span className="font-bold text-[#6F69C9]">Main ALS evidence cohort</span>
              </div>
            </div>
          </div>
        </div>

        {/* Shared ALS Limitation Strip */}
        <div className="mt-2 py-1 px-2.5 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] flex items-center justify-between gap-3 text-[10px]">
          <div className="flex items-center gap-1.5 font-bold shrink-0">
            <ShieldAlert className="w-3.5 h-3.5 text-[#6F69C9] shrink-0" />
            <span className="text-[8.5px] font-mono text-[#6F69C9] uppercase">SHARED ALS CONSTRAINT:</span>
            <span className="text-[#6F69C9] font-black">
              No voxel-wise ALS disease masks are available.
            </span>
          </div>
          <p className="text-[9.5px] text-[#24242A] truncate text-right">
            Therefore, ALS evaluation must remain <strong className="text-[#24242A]">anatomically grounded and ROI-centric</strong> rather than lesion-mask based.
          </p>
        </div>
      </div>

      {/* =========================================================================
          ZONE 3: Bottom Section — Supporting Public Datasets (~23% height)
      ========================================================================= */}
      <div className="shrink-0 rounded-xl bg-[#FAFAFC] border border-[#D9DDEE] p-2 shadow-2xs">
        <div className="flex items-center justify-between pb-1 border-b border-[#D9DDEE]/80 mb-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono font-bold text-[#74747D] uppercase tracking-wider">
              SUPPORTING PUBLIC DATASETS
            </span>
            <span className="text-[#D9DDEE]">·</span>
            <span className="text-[9px] font-mono font-bold text-[#6F69C9]">
              METHODOLOGICAL VALIDATION
            </span>
          </div>
          <span className="text-[9.5px] text-[#74747D] italic">
            Not substitutes for ALS — each provides a validation condition unavailable in the ALS cohorts.
          </span>
        </div>

        {/* 4 Compact Public Dataset Modules */}
        <div className="grid grid-cols-4 gap-2">
          {PUBLIC_DATASETS.map((ds) => {
            const isSelected = activeKey === ds.key;
            const isLocked = lockedDataset === ds.key;

            return (
              <button
                key={ds.key}
                type="button"
                tabIndex={0}
                onClick={() => handleToggleSelect(ds.key)}
                onMouseEnter={() => setHoveredDataset(ds.key)}
                onMouseLeave={() => setHoveredDataset(null)}
                onFocus={() => setFocusedDataset(ds.key)}
                onBlur={() => setFocusedDataset(null)}
                aria-pressed={isLocked}
                aria-label={`${ds.name}: ${ds.disease}`}
                className={`p-1.5 rounded-lg border text-left transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6F69C9] ${
                  isSelected
                    ? 'bg-white border-[#6F69C9] shadow-2xs ring-1 ring-[#6F69C9]/30'
                    : 'bg-white/70 border-[#D9DDEE] hover:border-[#A7A3DE]'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="text-[11px] font-black text-[#24242A]">{ds.name}</span>
                  <span className={`px-1 py-0.2 rounded text-[7.5px] font-mono font-bold border ${ds.badgeStyle}`}>
                    {ds.badge}
                  </span>
                </div>
                <div className="text-[9px] font-bold text-[#24242A] leading-tight truncate">
                  {ds.disease}
                </div>
                <div className="text-[8.5px] text-[#74747D] truncate mt-0.5">
                  {ds.lesionType}
                </div>
                <div className="text-[8px] font-mono text-[#74747D] truncate mt-0.5">
                  Ref: {ds.reference}
                </div>
                <div className="text-[8.5px] font-mono text-[#6F69C9] font-semibold truncate mt-1 pt-1 border-t border-[#D9DDEE]/60">
                  → {ds.roleSummary}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Strip for Selected Public Dataset */}
        <div className="mt-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#D9D8F4] flex items-center justify-between text-[9.5px] shadow-2xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="font-mono font-bold text-[#6F69C9] uppercase text-[9px] shrink-0">
              [{activeDataset.detailCategory}]
            </span>
            <span className="text-[#24242A] font-semibold truncate">
              {activeDataset.detailReference}
            </span>
            <span className="text-[#D9DDEE]">|</span>
            <span className="text-[#626A7C] truncate">
              <strong className="text-[#24242A]">Purpose:</strong> {activeDataset.detailPurpose}
            </span>
          </div>
          <div className="flex items-center gap-1 text-[8.5px] font-mono text-[#74747D] shrink-0 ml-2">
            <HelpCircle className="w-3 h-3 text-[#6F69C9]" />
            <span className="italic text-[#24242A]">"{activeDataset.question}"</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          ZONE 4: Persistent Takeaway & Transition to Slide 15 (~13% height)
      ========================================================================= */}
      <div className="shrink-0 space-y-1">
        {/* Main Takeaway */}
        <div className="py-1.5 px-3 rounded-xl bg-white border border-[#D9DDEE] shadow-2xs text-center">
          <p className="text-xs text-[#24242A]">
            <span className="font-extrabold text-[#6F69C9]">SOMALS established the foundation</span>;{' '}
            <span className="font-extrabold text-[#6F69C9]">PULSE became the main ALS target</span>, while public datasets provided the validation signals unavailable in ALS.
          </p>
        </div>

        {/* Transition line to Slide 15 */}
        <div className="px-3 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] flex items-center justify-between text-[11px] text-[#24242A]">
          <span className="text-[#74747D]">
            With this ALS-centered evaluation framework in place, the first annotation-efficient direction asks:
          </span>
          <div className="flex items-center gap-1 font-bold text-[#6F69C9]">
            <span>What can we learn from diagnostic labels alone?</span>
            <ArrowRight className="w-3 h-3 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
};


