/**
 * ============================================================================
 * EDITABLE PORTFOLIO CONTENT & DATA ENGINE
 * ============================================================================
 * 
 * HOW TO EDIT THIS FILE:
 * - Text Content: Edit string values directly inside the objects below.
 * - Add/Remove Publication: Copy an existing item in `portfolioData.publications`,
 *   give it a unique `id` and `slug`, and set `visible: true` (or `false` to hide).
 * - Add/Remove Case Study: Copy an item in `portfolioData.caseStudies`, assign
 *   unique `id` and `slug`, and update `visible`.
 * - Change Publication Status: Set `status` to 'Published', 'Accepted', etc.
 * - Add Paper URL / DOI: Set `paperUrl`, `doiUrl`, or `proceedingsUrl`. If left
 *   as empty string `""`, links will be hidden automatically without broken buttons.
 * - Local PDF File: Place your PDF file in `/public/papers/filename.pdf` and update
 *   `localPaperPath`. If left as `""` or if file doesn't exist, local paper button will hide.
 * - Replace Images: Put images in `/public/images/filename.webp` and update `image`
 *   or `thumbnail` properties.
 * - Replace CV: Put CV file in `/public/cv/Seoyoung_Oh_CV_2026.pdf` and update `cvUrl`.
 * - Hide/Show Content: Set `visible: false` on any publication or case study to hide it.
 * - Contact Email: Always kept as "dkdlel9603@gmail.com".
 */

export interface Publication {
  id: string;
  slug: string;
  visible: boolean;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  month?: string;
  status: 'Published' | 'Accepted' | 'Under Review' | 'Manuscript';
  presentationType?: 'Oral' | 'Poster' | 'Journal' | '';
  category: string;
  problem: string;
  contribution: string;
  representativeResults?: string[];
  whyItMatters: string;
  limitations: string;
  paperUrl?: string;
  localPaperPath?: string;
  doiUrl?: string;
  proceedingsUrl?: string;
  presentationUrl?: string;
  projectSlug?: string;
  thumbnail?: string;
  thumbnailAlt?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  visible: boolean;
  title: string;
  openingQuestion: string;
  category: string;
  status: string;
  venue?: string;
  shortSummary: string;
  realProblem: string;
  questionedAssumption: string;
  reframing: string;
  solution: string[];
  evaluation: string[];
  representativeResults: string[];
  whyItMatters: string;
  limitations: string;
  personalContribution: string;
  publicationSlug?: string;
  paperUrl?: string;
  localPaperPath?: string;
  doiUrl?: string;
  image?: string;
  imageAlt?: string;
}

export interface MethodologicalTab {
  id: string;
  title: string;
  projectTitle: string;
  summary: string;
  achievements: string[];
  dynamicPanelHeading: string;
  ctaLabel: string;
  ctaDestination: string;
  colorAccent: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  institutions: string[];
  dates: string;
  theme: string;
  focus: string[];
  supervisor?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institutions: string[];
  period: string;
  importantNote?: string;
  grade?: string;
  achievement?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  colorTheme: 'periwinkle' | 'babyBlue' | 'lavender' | 'powderBlue' | 'mint';
  items: string[];
}

export interface ContributionArea {
  id: string;
  title: string;
  roles: string[];
  contributions: string[];
  accentColor: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    tagline: string;
    email: string;
    location: string;
    availability: string;
    cvUrl: string;
    social: {
      linkedin: string;
      github: string;
      googleScholar: string;
    };
  };
  hero: {
    eyebrow: string;
    headline: string;
    supportingStatement: string;
    shortContext: string;
    processSteps: Array<{
      key: 'FRAME' | 'SOLVE' | 'TEST' | 'TRANSLATE';
      title: string;
      shortExplanation: string;
    }>;
  };
  approach: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: Array<{
      key: string;
      label: string;
      description: string;
    }>;
    principles: string[];
  };
  methodologicalTabs: MethodologicalTab[];
  caseStudies: CaseStudy[];
  publications: Publication[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  languages: Array<{
    language: string;
    level: string;
  }>;
  contributions: ContributionArea[];
  contact: {
    headline: string;
    supportingText: string;
    email: string;
  };
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
    ogImage: string;
  };
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Seoyoung Oh",
    tagline: "Medical AI · Scientific Problem Solving · Evidence Translation",
    email: "dkdlel9603@gmail.com",
    location: "Paris, France",
    availability: "Open to opportunities across AI research, applied science, and scientific or medical communication.",
    cvUrl: "/cv/Seoyoung_Oh_CV_2026.pdf",
    social: {
      linkedin: "https://www.linkedin.com/in/seoyoung-oh-medai",
      github: "https://github.com/seoyoung-oh",
      googleScholar: "https://scholar.google.com/citations?user=seoyoung_oh_placeholder",
    },
  },

  hero: {
    eyebrow: "MEDICAL AI · SCIENTIFIC PROBLEM SOLVING · EVIDENCE TRANSLATION",
    headline: "“I don’t start with a model.\nI start with the problem.”",
    supportingStatement: "“I turn complex medical and scientific problems into solutions that are rigorous, trustworthy, and understandable.”",
    shortContext: "My work connects medical AI, computer vision, evidence evaluation, real-world implementation, and scientific communication.",
    processSteps: [
      {
        key: 'FRAME',
        title: 'FRAME',
        shortExplanation: 'Identify the real constraint.',
      },
      {
        key: 'SOLVE',
        title: 'SOLVE',
        shortExplanation: 'Develop what the problem requires.',
      },
      {
        key: 'TEST',
        title: 'TEST',
        shortExplanation: 'Challenge the evidence.',
      },
      {
        key: 'TRANSLATE',
        title: 'TRANSLATE',
        shortExplanation: 'Make the meaning clear.',
      },
    ],
  },

  approach: {
    eyebrow: "APPROACH",
    title: "How I work",
    intro: "The problem defines the method. Evidence must survive scrutiny. Its meaning must remain clear.",
    steps: [
      { key: "FRAME", label: "FRAME", description: "Identify the real constraint." },
      { key: "SOLVE", label: "SOLVE", description: "Develop what the problem requires." },
      { key: "TEST", label: "TEST", description: "Challenge the evidence." },
      { key: "TRANSLATE", label: "TRANSLATE", description: "Make the meaning clear." },
    ],
    principles: [
      "Method follows the problem.",
      "Limitations belong in the story.",
      "Complexity should never prevent understanding.",
    ],
  },

  methodologicalTabs: [
    {
      id: "problem-driven",
      title: "Problem-driven research",
      projectTitle: "Weakly Supervised Disease Localization",
      summary: "Reframed brain MRI localization around the supervision that was realistically available: global diagnostic labels rather than dense voxel-wise annotations.",
      achievements: [
        "Published at ISBI 2026",
        "Oral presentation",
        "Multi-map fusion for spatial evidence localization",
        "Evaluation across BraTS, MSLesSeg, and ADNI",
      ],
      dynamicPanelHeading: "PUBLISHED RESEARCH & EVALUATION SCOPE",
      ctaLabel: "View case study",
      ctaDestination: "/work/weakly-supervised-localization",
      colorAccent: "primary-periwinkle",
    },
    {
      id: "evidence-beyond-performance",
      title: "Evidence beyond performance",
      projectTitle: "Reliable Normal Projection with Healthy-Reference Calibration",
      summary: "Moved beyond visually convincing anomaly maps by testing whether residual evidence was calibrated, stable, anatomically plausible, and distinguishable from unrelated spatial concentration.",
      achievements: [
        "Accepted at ECCV 2026 Workshop — MedFM-Bench",
        "BraTS Pixel-AUPRC: 0.61",
        "MSLesSeg Pixel-AUPRC: 0.48",
        "Healthy-test FPR: 0.047 at the calibrated operating point",
        "ALS target/control ROI enrichment: 3.10×",
        "Permutation p < 0.05",
      ],
      dynamicPanelHeading: "RELIABILITY & CALIBRATED EVIDENCE",
      ctaLabel: "View case study",
      ctaDestination: "/work/reliable-normal-projection",
      colorAccent: "pale-lavender",
    },
    {
      id: "real-world-implementation",
      title: "Real-world implementation",
      projectTitle: "Edge Computer Vision under Hardware Constraints",
      summary: "Developed lightweight vision systems for embedded Android environments without GPU acceleration.",
      achievements: [
        "+15.34% mIoU over DeepLabv3+",
        "67.17% mIoU for UV-reflective image analysis",
        "1.78-second CPU-only inference",
        "150 ms object localization on an RK3399 board",
      ],
      dynamicPanelHeading: "VERIFIED HARDWARE & ENGINEERING METRICS",
      ctaLabel: "View industry experience",
      ctaDestination: "/work/edge-computer-vision",
      colorAccent: "powder-blue",
    },
    {
      id: "scientific-communication",
      title: "Scientific communication",
      projectTitle: "Translating scientific evidence across audiences",
      summary: "Communicated complex computer vision and medical imaging research through peer-reviewed writing, oral presentations, posters, and interdisciplinary collaboration.",
      achievements: [
        "ISBI 2026 oral presentation",
        "ICCV 2019 workshop oral presentation",
        "ISBI 2024 poster presentation",
        "Scientific communication in Korean, English, and French",
        "Collaboration across engineering and biomedical research environments",
      ],
      dynamicPanelHeading: "SCIENTIFIC DISSEMINATION & AUDIENCE ADAPTATION",
      ctaLabel: "Explore publications and presentations",
      ctaDestination: "#publications",
      colorAccent: "soft-sage",
    },
  ],

  caseStudies: [
    {
      id: "cs-1",
      slug: "reliable-normal-projection",
      visible: true,
      title: "Reliable Normal Projection with Healthy-Reference Calibration for Brain MRI Anomaly Localization",
      openingQuestion: "What if an anomaly map looks convincing—but the evidence itself cannot be trusted?",
      category: "Medical AI · Generative Modeling · Reliable Evidence",
      status: "Accepted",
      venue: "ECCV 2026 Workshop — MedFM-Bench",
      shortSummary: "Developed a healthy-reference calibration protocol for brain MRI normal projection, testing whether residual evidence genuinely reflected target anatomy rather than projection noise.",
      realProblem: "Normal-only anomaly localization can generate visually convincing residual maps containing pathology-related change, anatomical variability, acquisition effects, preprocessing mismatch, or projection instability.",
      questionedAssumption: "Whether concentrated residual evidence genuinely reflected task-relevant anatomy and whether similar concentration could also appear in unrelated regions.",
      reframing: "Treat patient-to-healthy residuals as candidate evidence requiring calibration and reliability evaluation rather than as anomaly maps by default.",
      solution: [
        "Healthy-only normal projection using generative architecture",
        "Multi-view residual evidence aggregation",
        "Projection-disagreement uncertainty estimation",
        "Healthy-reference calibration for false-positive control",
        "False-positive-controlled evidence selection",
        "Anatomical ROI evaluation against size-matched control regions",
        "Domain-shift and robustness evaluation across scanners",
      ],
      evaluation: [
        "Benchmarked on BraTS and MSLesSeg synthetic and real lesion benchmarks",
        "Evaluated false positive rates on healthy held-out control cohorts",
        "Measured ROI concentration ratio between targeted pathology regions (PULSE brainstem T1w) and size-matched control regions",
        "Permutation testing for statistical significance across 5 repeated experimental runs",
      ],
      representativeResults: [
        "BraTS Pixel-AUPRC: 0.61",
        "MSLesSeg Pixel-AUPRC: 0.48",
        "Healthy-test FPR: 0.047 at target alpha = 0.05",
        "PULSE brainstem T1w ROI concentration: 0.62",
        "Size-matched unrelated control ROI concentration: 0.20 ± 0.06",
        "Target/control enrichment: 3.10×",
        "Permutation p < 0.05 (reported over 5 repeated runs)",
      ],
      whyItMatters: "The study provides a reliability-oriented protocol for evaluating normal-projection evidence under severe annotation scarcity without tuning thresholds on abnormal data.",
      limitations: "Outputs calibrated, hypothesis-generating deviation evidence. It does not represent a supervised segmentation mask, a voxel-wise ALS pathology map, a clinically validated biomarker, a diagnostic system, or proof of disease specificity or clinical utility.",
      personalContribution: "Conceptualized the healthy-reference calibration protocol, designed the multi-view projection architecture, executed experimental validation across public and cohort datasets, and authored the workshop manuscript.",
      publicationSlug: "reliable-normal-projection",
      localPaperPath: "/papers/reliable-normal-projection-eccv-2026.pdf",
      image: "/images/project-reliable-normal-projection.webp",
      imageAlt: "Brain MRI healthy-reference calibration and normal projection schematic",
    },
    {
      id: "cs-2",
      slug: "weakly-supervised-localization",
      visible: true,
      title: "Weakly Supervised Disease Localization from Globally Assigned Diagnostic Labels",
      openingQuestion: "How can we localize disease evidence when only subject-level diagnoses are available?",
      category: "Medical AI · Computer Vision · Weak Supervision",
      status: "Published",
      venue: "IEEE International Symposium on Biomedical Imaging (ISBI 2026)",
      shortSummary: "Combined classification-derived spatial evidence and complementary localization cues via multi-map fusion to localize pathology using global subject-level diagnostic labels.",
      realProblem: "Medical imaging datasets frequently provide global diagnostic labels without dense voxel-level disease annotations.",
      questionedAssumption: "That precise anatomical disease localization strictly requires labor-intensive voxel-wise expert annotations.",
      reframing: "Use classification-derived spatial evidence and complementary localization cues rather than requiring fully supervised lesion segmentation.",
      solution: [
        "Transformer-based global diagnostic classification model",
        "Spatial evidence extraction from class-activation patterns",
        "Complementary evidence map generation",
        "Multi-map fusion for noise reduction and spatial precision",
        "Weakly supervised spatial disease localization pipeline",
      ],
      evaluation: [
        "Evaluated across diverse neurological MRI benchmarks: BraTS, MSLesSeg, and ADNI",
        "Assessed localization accuracy against sparse ground truth validation masks",
        "Presented orally at ISBI 2026",
      ],
      representativeResults: [
        "Multi-map fusion achieved robust spatial alignment with disease sites across datasets",
        "Demonstrated superior localization precision over standard CAM and Grad-CAM baselines",
        "Validated across BraTS, MSLesSeg, and ADNI datasets",
        "ISBI 2026 Oral Presentation selection",
      ],
      whyItMatters: "Enables clinical datasets lacking dense manual annotations to yield spatial evidence for research and exploratory disease mapping.",
      limitations: "Localization relies on global diagnostic labels; spatial precision depends on dataset scale and feature discriminability.",
      personalContribution: "Formulated the multi-map fusion architecture, implemented the transformer feature extractors, conducted cross-dataset experiments, and delivered the oral presentation.",
      publicationSlug: "multimap-fusion",
      localPaperPath: "/papers/multimap-fusion-isbi-2026.pdf",
      image: "/images/project-weakly-supervised-localization.webp",
      imageAlt: "Multi-map fusion pipeline for weakly supervised disease localization",
    },
    {
      id: "cs-3",
      slug: "edge-computer-vision",
      visible: true,
      title: "Edge Computer Vision under Hardware Constraints",
      openingQuestion: "How do you deliver usable computer vision when the device has no GPU?",
      category: "Industry R&D · Efficient Computer Vision · Embedded Deployment",
      status: "Deployed R&D System",
      venue: "lululab Inc. (R&D)",
      shortSummary: "Engineered lightweight computer vision models and CPU-only optimization pipelines for real-time mobile and embedded Android devices.",
      realProblem: "Skin analysis, UV image analysis, semantic segmentation, and object localization had to run on constrained Android hardware without GPU acceleration.",
      questionedAssumption: "That high-precision image segmentation requires server-side processing or heavy edge GPUs.",
      reframing: "Optimize feature representation and network architecture to run within stringent mobile memory and CPU latency limits.",
      solution: [
        "Custom lightweight encoder-decoder architecture optimized for CPU SIMD operations",
        "Post-training quantization and memory layout alignment for mobile processors",
        "UV-reflective image normalization and feature extraction module",
        "Fast bounding-box localization pipeline for embedded Android boards",
      ],
      evaluation: [
        "Measured mean Intersection over Union (mIoU) on skin problem segmentation dataset",
        "Inference latency benchmarked on Rockchip RK3399 ARM processor",
        "Memory footprint profiling during continuous camera streaming",
      ],
      representativeResults: [
        "Improved skin-problem segmentation by 15.34% mIoU over DeepLabv3+",
        "Achieved 67.17% mIoU for UV-reflective image analysis",
        "Achieved 1.78-second inference without GPU acceleration",
        "Optimized object localization to 150 ms on an RK3399 Android board",
      ],
      whyItMatters: "This work demonstrates the ability to translate computer vision research into practical systems under real hardware and inference constraints.",
      limitations: "System optimizations were specific to target ARM platform instructions and mobile camera sensor formats.",
      personalContribution: "Led machine learning model lightweighting, designed the custom segmentation head, optimized CPU inference bottlenecks, and integrated Android native libraries.",
      publicationSlug: "rethnet",
      localPaperPath: "/papers/rethnet-iccv-workshop-2019.pdf",
      image: "/images/project-edge-computer-vision.webp",
      imageAlt: "Embedded edge computer vision performance architecture",
    },
    {
      id: "cs-4",
      slug: "brainstem-segmentation",
      visible: true,
      title: "Brainstem Segmentation with Limited Annotations",
      openingQuestion: "Can knowledge learned from other anatomical regions support segmentation of a small and complex structure?",
      category: "Medical Image Analysis · Transfer Learning",
      status: "Published",
      venue: "IEEE International Symposium on Biomedical Imaging (ISBI 2024)",
      shortSummary: "Investigated deep neural network architectures and transfer learning strategies for brainstem MRI segmentation under severe annotation scarcity.",
      realProblem: "The brainstem is small and anatomically complex, while dedicated training annotations are limited.",
      questionedAssumption: "That training a dedicated brainstem segmentation network requires large annotated cohorts of that specific structure.",
      reframing: "Leverage representations learned from broader anatomical brain structures to regularize learning for small target regions.",
      solution: [
        "Comparative evaluation of 3D U-Net, V-Net, and Attention U-Net variants",
        "Pretraining strategies on multi-structure neuroimaging databases",
        "Targeted fine-tuning protocols on sparse brainstem ground truth sets",
        "Anatomical shape constraint regularization",
      ],
      evaluation: [
        "Evaluated overlap metrics (Dice similarity coefficient, Hausdorff distance)",
        "Assessed stability against varying training sample sizes",
        "Published at ISBI 2024 (Poster Presentation)",
      ],
      representativeResults: [
        "Demonstrated consistent segmentation stability when initializing from broader brain anatomical pretraining",
        "Outperformed training-from-scratch baselines under sparse annotation regimes",
        "DOI: 10.1109/ISBI56570.2024.10635856",
      ],
      whyItMatters: "Offers practical guidelines for segmenting small, annotation-scarce anatomical targets in neuroimaging research.",
      limitations: "Tested primarily on specific MRI acquisition protocols and limited training sample sizes.",
      personalContribution: "Designed the experimental framework, configured network architectures, performed cross-validation, and presented the poster at ISBI 2024.",
      publicationSlug: "brainstem-segmentation",
      doiUrl: "https://doi.org/10.1109/ISBI56570.2024.10635856",
      localPaperPath: "/papers/brainstem-segmentation-isbi-2024.pdf",
      image: "/images/project-brainstem-segmentation.webp",
      imageAlt: "Brainstem MRI segmentation deep neural network evaluation",
    },
  ],

  publications: [
    {
      id: "pub-1",
      slug: "reliable-normal-projection",
      visible: true,
      title: "Reliable Normal Projection with Healthy-Reference Calibration for Brain MRI Anomaly Localization",
      authors: ["Seoyoung Oh", "Mélanie Pélégrini-Issac", "Hélène Urien", "Véronique Marchand-Pauvert", "Jérémie Sublime"],
      venue: "ECCV 2026 Workshop — MedFM-Bench",
      year: 2026,
      status: "Accepted",
      presentationType: "",
      category: "Medical AI · Trustworthy AI",
      problem: "Normal-only anomaly localization can generate visually convincing residual maps containing pathology-related change, anatomical variability, acquisition effects, preprocessing mismatch, or projection instability.",
      contribution: "Proposes a healthy-reference calibration protocol establishing multi-view residual aggregation and false-positive-controlled evidence selection without tuning on abnormal data.",
      representativeResults: [
        "BraTS Pixel-AUPRC: 0.61",
        "MSLesSeg Pixel-AUPRC: 0.48",
        "Healthy-test FPR: 0.047 at target alpha = 0.05",
        "Target/control ROI enrichment: 3.10× (p < 0.05)",
      ],
      whyItMatters: "Provides a reliability-oriented protocol for evaluating normal-projection evidence under severe annotation scarcity.",
      limitations: "Outputs calibrated, hypothesis-generating deviation evidence. It does not represent a diagnostic system or clinically validated biomarker.",
      projectSlug: "reliable-normal-projection",
      localPaperPath: "/papers/reliable-normal-projection-eccv-2026.pdf",
    },
    {
      id: "pub-2",
      slug: "multimap-fusion",
      visible: true,
      title: "Multi-map Fusion for Weakly Supervised Disease Localization from Globally Assigned Diagnostic Labels in Brain MRI",
      authors: ["Seoyoung Oh", "Mélanie Pélégrini-Issac", "Hélène Urien", "Véronique Marchand-Pauvert", "Jérémie Sublime"],
      venue: "IEEE International Symposium on Biomedical Imaging",
      year: 2026,
      status: "Published",
      presentationType: "Oral",
      category: "Medical AI · Computer Vision",
      problem: "Medical imaging datasets frequently provide global diagnostic labels without dense voxel-level disease annotations.",
      contribution: "Combines classification-derived spatial evidence and complementary localization cues through multi-map fusion to localize disease without requiring dense lesion segmentation.",
      representativeResults: [
        "Validated across BraTS, MSLesSeg, and ADNI datasets",
        "Delivered Oral Presentation at ISBI 2026",
      ],
      whyItMatters: "Enables spatial disease evidence extraction when only subject-level diagnostic labels are realistically available.",
      limitations: "Spatial precision depends on global diagnostic label consistency and feature discriminability.",
      projectSlug: "weakly-supervised-localization",
      localPaperPath: "/papers/multimap-fusion-isbi-2026.pdf",
    },
    {
      id: "pub-3",
      slug: "brainstem-segmentation",
      visible: true,
      title: "Deep Neural Networks Comparison for MRI Segmentation of the Brainstem",
      authors: ["Seoyoung Oh", "Mélanie Pélégrini-Issac", "Hélène Urien", "Véronique Marchand-Pauvert", "Jérémie Sublime"],
      venue: "IEEE International Symposium on Biomedical Imaging",
      year: 2024,
      status: "Published",
      presentationType: "Poster",
      category: "Medical Image Analysis",
      problem: "The brainstem is small and anatomically complex, while dedicated training annotations are limited.",
      contribution: "Systematically compared deep architectures and transfer learning from models pretrained on other brain regions to support small structure segmentation.",
      whyItMatters: "Demonstrates how representation reuse from broader brain regions supports segmentation of small, annotation-scarce anatomical structures.",
      limitations: "Evaluated on specific MRI acquisition protocols and limited training cohort sizes.",
      projectSlug: "brainstem-segmentation",
      doiUrl: "https://doi.org/10.1109/ISBI56570.2024.10635856",
      localPaperPath: "/papers/brainstem-segmentation-isbi-2024.pdf",
    },
    {
      id: "pub-4",
      slug: "rethnet",
      visible: true,
      title: "RethNet: Object-by-Object Learning for Detecting Facial Skin Problems",
      authors: ["Shohrukh Bekmirzaev", "Seoyoung Oh", "Sangwook Yoo"],
      venue: "IEEE International Conference on Computer Vision, Visual Recognition for Medical Images Workshop",
      year: 2019,
      status: "Published",
      presentationType: "Oral",
      category: "Computer Vision",
      problem: "Facial skin problem detection requires precise localized identification across diverse skin condition classes.",
      contribution: "Proposed an object-by-object learning framework for fine-grained detection of facial skin features.",
      whyItMatters: "Advanced specialized object detection pipelines for computer vision applications in non-standard imaging environments.",
      limitations: "Designed for specialized camera hardware and specific skin condition categories.",
      localPaperPath: "/papers/rethnet-iccv-workshop-2019.pdf",
    },
    {
      id: "pub-5",
      slug: "blockchain-real-estate",
      visible: true,
      title: "Block Chain Applied Technology to Improve Reliability of Real Estate Market",
      authors: ["Seoyoung Oh", "Changhoon Lee"],
      venue: "The Journal of Society for e-Business Studies",
      year: 2017,
      status: "Published",
      presentationType: "Journal",
      category: "Other Research",
      problem: "Real estate transaction records suffer from vulnerability to tampering and lack of transparent verification.",
      contribution: "Analyzed cryptographic blockchain application architectures to improve data reliability and transaction verification.",
      whyItMatters: "Early exploration of cryptographic verification models and immutable record integrity.",
      limitations: "Theoretical and algorithmic analysis preceding enterprise blockchain scaling.",
      localPaperPath: "/papers/blockchain-real-estate-2017.pdf",
    },
  ],

  experience: [
    {
      id: "exp-1",
      role: "PhD Researcher",
      dates: "October 2023 – Present",
      institutions: [
        "Institut Supérieur d’Électronique de Paris",
        "Laboratoire d’Imagerie Biomédicale",
        "Sorbonne Université",
        "Inserm",
        "CNRS",
      ],
      theme: "Reliable Medical AI",
      focus: [
        "Trustworthy and annotation-efficient medical image analysis",
        "Weakly supervised disease localization",
        "Healthy-reference calibration and reliability evaluation",
        "ALS-relevant brainstem MRI research",
      ],
    },
    {
      id: "exp-2",
      role: "Research Intern",
      dates: "March 2023 – August 2023",
      institutions: [
        "Institut Supérieur d’Électronique de Paris",
        "Laboratoire d’Imagerie Biomédicale",
      ],
      theme: "Medical Image Analysis",
      focus: [
        "Brainstem MRI segmentation under limited annotations",
      ],
    },
    {
      id: "exp-3",
      role: "TER Research Project",
      dates: "March 2022 – April 2022",
      institutions: [
        "Université Paris-Saclay and CNRS LISN",
      ],
      supervisor: "Prof. Aurélie Névéol",
      theme: "Responsible AI",
      focus: [
        "Evaluation of language-model bias using names as proxies for social categories",
      ],
    },
    {
      id: "exp-4",
      role: "Machine Learning Research Engineer, R&D",
      dates: "December 2017 – March 2020",
      institutions: [
        "lululab Inc.",
      ],
      theme: "Applied Computer Vision",
      focus: [
        "Efficient computer vision for embedded Android deployment",
        "Semantic segmentation, localization, and CPU-only optimization",
      ],
    },
    {
      id: "exp-5",
      role: "Student Research Intern",
      dates: "July 2015 – July 2017",
      institutions: [
        "Cryptography Information and Security Lab, Seoul National University of Science and Technology",
      ],
      supervisor: "Prof. Changhoon Lee",
      theme: "Trust and System Assumptions",
      focus: [
        "Cryptographic reliability and security analysis",
        "Data Structures teaching assistance",
      ],
    },
  ],

  education: [
    {
      id: "edu-1",
      degree: "PhD Candidate in Artificial Intelligence and Medical Image Analysis",
      institutions: [
        "Institut Supérieur d’Électronique de Paris",
        "Laboratoire d’Imagerie Biomédicale",
        "Sorbonne Université",
        "Inserm",
        "CNRS",
      ],
      period: "October 2023 – September 2026",
      importantNote: "Defense scheduled for 24 September 2026",
    },
    {
      id: "edu-2",
      degree: "Master in Artificial Intelligence, Computer Science",
      institutions: ["Université Paris-Saclay"],
      period: "September 2021 – September 2023",
      grade: "15.7 / 20",
    },
    {
      id: "edu-3",
      degree: "BS in Computer Science and Engineering",
      institutions: ["Seoul National University of Science and Technology"],
      period: "March 2012 – February 2016",
      grade: "3.86 / 4.5",
      achievement: "Merit-based full scholarship in 2012 and 2015",
    },
  ],

  skills: [
    {
      category: "CORE EXPERTISE",
      description: "Central technical domains",
      colorTheme: "periwinkle",
      items: [
        "Computer Vision",
        "Medical Image Analysis",
        "Generative Modeling",
        "Diffusion Models",
        "Representation Learning",
      ],
    },
    {
      category: "RESEARCH APPROACHES",
      description: "Problem-solving methodologies",
      colorTheme: "babyBlue",
      items: [
        "Weakly Supervised Learning",
        "Anomaly Detection",
        "Segmentation & Localization",
        "Annotation-Scarce Learning",
        "Healthy-Only Modeling",
      ],
    },
    {
      category: "RELIABILITY & INTERPRETATION",
      description: "Evaluation and evidence lens",
      colorTheme: "lavender",
      items: [
        "Trustworthy AI",
        "Explainable AI",
        "Uncertainty & Calibration",
        "Robustness & Domain Shift",
        "Evidence Evaluation",
      ],
    },
    {
      category: "RESEARCH & ENGINEERING",
      description: "Practical engineering stack",
      colorTheme: "powderBlue",
      items: [
        "Python",
        "PyTorch & TensorFlow",
        "Experimental Design",
        "Reproducible ML Pipelines",
        "Deployment Optimization",
      ],
    },
    {
      category: "SCIENTIFIC COMMUNICATION",
      description: "Knowledge dissemination",
      colorTheme: "mint",
      items: [
        "Scientific Writing",
        "Oral Presentation",
        "Visual Communication",
        "Audience Adaptation",
        "Interdisciplinary Collaboration",
      ],
    },
  ],

  languages: [
    { language: "Korean", level: "Native" },
    { language: "English", level: "Advanced" },
    { language: "French", level: "Intermediate" },
  ],

  contributions: [
    {
      id: "contrib-1",
      title: "RESEARCH & ENGINEERING",
      roles: ["ML Research Engineer", "Research Scientist"],
      accentColor: "primary-periwinkle",
      contributions: [
        "Framing research problems around real constraints",
        "Developing specialized methods and models",
        "Designing rigorous experimental benchmarks",
        "Building reproducible ML pipelines",
        "Testing model reliability, stability, and robustness",
        "Optimizing vision systems under compute constraints",
      ],
    },
    {
      id: "contrib-2",
      title: "APPLIED SCIENCE",
      roles: ["Applied Scientist", "Medical AI Scientist"],
      accentColor: "baby-blue",
      contributions: [
        "Connecting AI research with real-world clinical data",
        "Understanding operational and hardware deployment constraints",
        "Balancing raw predictive metrics with evidence reliability",
        "Supporting evidence-based decisions for clinical tools",
        "Collaborating across technical, medical, and engineering teams",
      ],
    },
    {
      id: "contrib-3",
      title: "SCIENTIFIC & MEDICAL COMMUNICATION",
      roles: ["Medical Science Liaison", "Scientific Communications", "Medical Affairs"],
      accentColor: "soft-sage",
      contributions: [
        "Analyzing and synthesizing complex scientific evidence",
        "Translating AI and imaging findings for medical professionals",
        "Transparently communicating methodology strengths and limits",
        "Adapting scientific narratives to diverse stakeholders",
        "Anticipating scientific questions and clinical concerns",
        "Bridging gaps between technical developers and medical teams",
      ],
    },
  ],

  contact: {
    headline: "“Let’s turn complex evidence into solutions people can trust and use.”",
    supportingText: "I am open to opportunities where scientific problem solving, reliable evidence, and clear communication come together.",
    email: "dkdlel9603@gmail.com",
  },

  seo: {
    title: "Seoyoung Oh | Medical AI, Reliable Evidence and Scientific Communication",
    description: "Portfolio of Seoyoung Oh, a PhD candidate working across medical AI, computer vision, generative and diffusion modeling, trustworthy evidence evaluation, real-world implementation, and scientific communication.",
    canonicalUrl: "https://seoyoung-oh.netlify.app/",
    ogImage: "/images/og-image-placeholder.webp",
  },
};
