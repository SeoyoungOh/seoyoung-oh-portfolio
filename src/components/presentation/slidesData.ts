import { SlideData } from './types';
import { TitleSlide } from './slides/TitleSlide';
import { IntroAlsSlide } from './slides/IntroAlsSlide';
import { IntroBrainstemSlide } from './slides/IntroBrainstemSlide';
import { IntroMriChallengeSlide } from './slides/IntroMriChallengeSlide';
import { IntroAnnotationGapSlide } from './slides/IntroAnnotationGapSlide';
import { IntroObjectiveSlide } from './slides/IntroObjectiveSlide';
import { FoundationBaselineMotivationSlide } from './slides/FoundationBaselineMotivationSlide';
import { FoundationIsbi2024MethodSlide } from './slides/FoundationIsbi2024MethodSlide';
import { FoundationIsbi2024ResultsSlide } from './slides/FoundationIsbi2024ResultsSlide';
import { FoundationLimitationsSlide } from './slides/FoundationLimitationsSlide';
import { FoundationTwoDirectionsSlide } from './slides/FoundationTwoDirectionsSlide';
import { FoundationAtlasMotivationSlide } from './slides/FoundationAtlasMotivationSlide';
import { FoundationAtlasConstructionSlide } from './slides/FoundationAtlasConstructionSlide';
import { FoundationDatasetsSlide } from './slides/FoundationDatasetsSlide';
import { WeakMotivationSlide } from './slides/WeakMotivationSlide';
import { WeakMethodSlide } from './slides/WeakMethodSlide';
import { WeakDifferenceSlide } from './slides/WeakDifferenceSlide';
import { WeakResultsBenchmarkSlide } from './slides/WeakResultsBenchmarkSlide';
import { WeakResultsAlsSlide } from './slides/WeakResultsAlsSlide';
import { WeakMeaningSlide } from './slides/WeakMeaningSlide';
import { WeakLimitationsSlide } from './slides/WeakLimitationsSlide';
import { NormalMotivationSlide } from './slides/NormalMotivationSlide';
import { NormalMethodSlide } from './slides/NormalMethodSlide';
import { NormalDifferenceSlide } from './slides/NormalDifferenceSlide';
import { NormalResultsBenchmarkSlide } from './slides/NormalResultsBenchmarkSlide';
import { NormalResultsAlsSlide } from './slides/NormalResultsAlsSlide';
import { NormalMeaningSlide } from './slides/NormalMeaningSlide';
import { NormalLimitationsSlide } from './slides/NormalLimitationsSlide';
import { SynthesisAlsSlide } from './slides/SynthesisAlsSlide';
import { SynthesisComparisonSlide } from './slides/SynthesisComparisonSlide';
import { ConclusionSlide } from './slides/ConclusionSlide';
import { ThankYouSlide } from './slides/ThankYouSlide';

export const presentationSlides: SlideData[] = [
  {
    id: 'title',
    slug: 'title',
    category: 'TITLE',
    title: 'MRI Segmentation of Brainstem Structures Using Deep Learning Techniques',
    subtitle: 'Application to Amyotrophic Lateral Sclerosis',
    component: TitleSlide,
  },
  {
    id: 'intro-als',
    slug: 'intro-als',
    category: 'INTRODUCTION',
    title: 'What is Amyotrophic Lateral Sclerosis?',
    component: IntroAlsSlide,
  },
  {
    id: 'intro-brainstem',
    slug: 'intro-brainstem',
    category: 'INTRODUCTION',
    title: 'Why Focus on the Brainstem?',
    component: IntroBrainstemSlide,
  },
  {
    id: 'intro-mri-challenge',
    slug: 'intro-mri-challenge',
    category: 'INTRODUCTION',
    title: 'Why Is the Brainstem Difficult to Study on Routine MRI?',
    component: IntroMriChallengeSlide,
  },
  {
    id: 'intro-annotation-gap',
    slug: 'intro-annotation-gap',
    category: 'INTRODUCTION',
    title: 'Clinically Important Structures, but No Reliable Annotations',
    component: IntroAnnotationGapSlide,
  },
  {
    id: 'intro-objective',
    slug: 'intro-objective',
    category: 'INTRODUCTION',
    title: 'Research Objective',
    component: IntroObjectiveSlide,
  },
  {
    id: 'foundation-baseline-motivation',
    slug: 'foundation-baseline-motivation',
    category: 'FOUNDATIONS',
    title: 'Where Do We Start Without a Fine-Grained Baseline?',
    component: FoundationBaselineMotivationSlide,
  },
  {
    id: 'foundation-isbi2024-method',
    slug: 'foundation-isbi2024-method',
    category: 'FOUNDATIONS',
    title: 'Building an Initial Brainstem Segmentation Framework',
    component: FoundationIsbi2024MethodSlide,
  },
  {
    id: 'foundation-isbi2024-results',
    slug: 'foundation-isbi2024-results',
    category: 'FOUNDATIONS',
    title: 'What Did the Initial Segmentation Study Show?',
    component: FoundationIsbi2024ResultsSlide,
  },
  {
    id: 'foundation-limitations',
    slug: 'foundation-limitations',
    category: 'FOUNDATIONS',
    title: 'Why Segmentation Alone Was Not Enough',
    component: FoundationLimitationsSlide,
  },
  {
    id: 'foundation-two-directions',
    slug: 'foundation-two-directions',
    category: 'FOUNDATIONS',
    title: 'Two Directions Emerged',
    component: FoundationTwoDirectionsSlide,
  },
  {
    id: 'foundation-atlas-motivation',
    slug: 'foundation-atlas-motivation',
    category: 'FOUNDATIONS',
    title: 'We Still Needed an Anatomical Reference',
    component: FoundationAtlasMotivationSlide,
  },
  {
    id: 'foundation-atlas-construction',
    slug: 'foundation-atlas-construction',
    category: 'FOUNDATIONS',
    title: 'From Neuroanatomy Diagrams to a Programmable Atlas',
    component: FoundationAtlasConstructionSlide,
  },
  {
    id: 'foundation-datasets',
    slug: 'foundation-datasets',
    category: 'FOUNDATIONS',
    title: 'Expanding the Evaluation Testbed',
    component: FoundationDatasetsSlide,
  },
  {
    id: 'weak-motivation',
    slug: 'weak-motivation',
    category: 'METHOD 1 · WEAK SUPERVISION',
    title: 'Weak Supervision: Can Diagnostic Labels Reveal Where?',
    component: WeakMotivationSlide,
  },
  {
    id: 'weak-method',
    slug: 'weak-method',
    category: 'METHOD 1 · WEAK SUPERVISION',
    title: 'Reliable Weakly Supervised Disease Localization',
    component: WeakMethodSlide,
  },
  {
    id: 'weak-difference',
    slug: 'weak-difference',
    category: 'METHOD 1 · WEAK SUPERVISION',
    title: 'What Makes This Different?',
    component: WeakDifferenceSlide,
  },
  {
    id: 'weak-results-benchmark',
    slug: 'weak-results-benchmark',
    category: 'METHOD 1 · WEAK SUPERVISION',
    title: 'What Did Reliability Calibration Actually Improve?',
    component: WeakResultsBenchmarkSlide,
  },
  {
    id: 'weak-results-als',
    slug: 'weak-results-als',
    category: 'METHOD 1 · WEAK SUPERVISION',
    title: 'ALS Interpretation in PULSE',
    component: WeakResultsAlsSlide,
  },
  {
    id: 'weak-meaning',
    slug: 'weak-meaning',
    category: 'METHOD 1 · WEAK SUPERVISION',
    title: 'What Did Weak Supervision Tell Us?',
    component: WeakMeaningSlide,
  },
  {
    id: 'weak-limitations',
    slug: 'weak-limitations',
    category: 'METHOD 1 · WEAK SUPERVISION',
    title: 'What Still Remained?',
    component: WeakLimitationsSlide,
  },
  {
    id: 'normal-motivation',
    slug: 'normal-motivation',
    category: 'METHOD 2 · NORMAL PROJECTION',
    title: 'Can We Remove Patient Supervision Entirely?',
    component: NormalMotivationSlide,
  },
  {
    id: 'normal-method',
    slug: 'normal-method',
    category: 'METHOD 2 · NORMAL PROJECTION',
    title: 'Reliable Normal Projection from Healthy MRI',
    component: NormalMethodSlide,
  },
  {
    id: 'normal-difference',
    slug: 'normal-difference',
    category: 'METHOD 2 · NORMAL PROJECTION',
    title: 'What Makes Normal Projection Reliable?',
    component: NormalDifferenceSlide,
  },
  {
    id: 'normal-results-benchmark',
    slug: 'normal-results-benchmark',
    category: 'METHOD 2 · NORMAL PROJECTION',
    title: 'Can We Control False Positives Without Losing Meaningful Evidence?',
    component: NormalResultsBenchmarkSlide,
  },
  {
    id: 'normal-results-als',
    slug: 'normal-results-als',
    category: 'METHOD 2 · NORMAL PROJECTION',
    title: 'Does Healthy-Calibrated Evidence Remain Meaningful in ALS?',
    component: NormalResultsAlsSlide,
  },
  {
    id: 'normal-meaning',
    slug: 'normal-meaning',
    category: 'METHOD 2 · NORMAL PROJECTION',
    title: 'What Did Healthy-Only Modeling Tell Us?',
    component: NormalMeaningSlide,
  },
  {
    id: 'normal-limitations',
    slug: 'normal-limitations',
    category: 'METHOD 2 · NORMAL PROJECTION',
    title: 'Normal Deviation Is Not the Same as Disease',
    component: NormalLimitationsSlide,
  },
  {
    id: 'als-interpretation-respiratory-patterns',
    slug: 'als-interpretation-respiratory-patterns',
    category: 'ALS INTERPRETATION',
    title: 'What Did We Learn in ALS?',
    component: SynthesisAlsSlide,
  },
  {
    id: 'synthesis-comparison',
    slug: 'synthesis-comparison',
    category: 'SYNTHESIS',
    title: 'Two Complementary Ways to Extract Disease Evidence',
    component: SynthesisComparisonSlide,
  },
  {
    id: 'conclusion',
    slug: 'conclusion',
    category: 'CONCLUSION',
    title: 'Contributions of This Thesis',
    component: ConclusionSlide,
  },
  {
    id: 'thank-you',
    slug: 'thank-you',
    category: 'CLOSING',
    title: 'Thank You',
    component: ThankYouSlide,
  },
];
