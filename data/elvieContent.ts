export type ThemeId = 'command' | 'clinical' | 'oncall' | 'atlas' | 'signal' | 'shared' | 'thermal' | 'surgical';

export interface Theme {
  id: ThemeId;
  label: string;
  description: string;
  tagline: string;
}

export const themes: Theme[] = [
  {
    id: 'command',
    label: 'On-Call',
    description: 'Radiology AI workstation aesthetic',
    tagline: 'Command-level imaging intelligence',
  },
  {
    id: 'signal',
    label: 'Signal',
    description: 'Bebas Neue editorial dark',
    tagline: 'Every signal, mapped and connected',
  },
  {
    id: 'clinical',
    label: 'Clinical Precision',
    description: 'Medical-device trust aesthetic',
    tagline: 'Built for the clinical enterprise',
  },
  {
    id: 'oncall',
    label: 'Clinical Dark',
    description: 'Dark Clinical Precision — night shift',
    tagline: 'Clinical authority, after dark',
  },
  {
    id: 'atlas',
    label: 'Signal Atlas',
    description: 'Clinical intelligence agent network',
    tagline: 'Every signal, mapped and connected',
  },
  {
    id: 'shared',
    label: 'Shared Review',
    description: 'Collaborative clinical workspace',
    tagline: 'Understanding built together',
  },
  {
    id: 'thermal',
    label: 'Deep Tissue',
    description: 'Thermal imaging aesthetic',
    tagline: 'Heat maps the truth',
  },
  {
    id: 'surgical',
    label: 'Surgical',
    description: 'Operating theatre precision',
    tagline: 'Every detail, illuminated',
  },
];

export const problemFragments = [
  { id: 'pacs',    label: 'PACS / DICOM Viewer',         icon: 'monitor',      color: '#0891b2' },
  { id: 'reports', label: 'Radiology Reports',            icon: 'file-text',    color: '#0e7490' },
  { id: 'path',    label: 'Pathology Results',            icon: 'microscope',   color: '#7c3aed' },
  { id: 'labs',    label: 'Lab Values',                   icon: 'flask-conical',color: '#059669' },
  { id: 'notes',   label: 'Clinical Notes',               icon: 'notebook-pen', color: '#d97706' },
  { id: 'pdfs',    label: 'PDFs & Scanned Docs',          icon: 'file-scan',    color: '#dc2626' },
  { id: 'prior',   label: 'Prior Studies',                icon: 'history',      color: '#9333ea' },
  { id: 'ai',      label: 'AI Chat Tools',                icon: 'bot',          color: '#0284c7' },
];

export const chatExamples = [
  { role: 'user',      text: 'What are the key findings in this report?' },
  { role: 'assistant', text: 'Three primary findings: (1) Chronic infarct, left thalamus — non-acute, stable. (2) Mild periventricular white matter changes, likely small vessel disease. (3) No acute intracranial abnormality.' },
  { role: 'user',      text: 'Which finding is most clinically important?' },
  { role: 'assistant', text: 'The left thalamic infarct warrants closest attention. It correlates with reported memory symptoms and should be compared with prior studies. Recommend clinical correlation with neurology.' },
  { role: 'user',      text: 'Show me the infarct finding.' },
  { role: 'assistant', text: 'Opening Series 2, Image 19 — left thalamic region. The hypodense area is visible on axial DWI sequence.' },
];

export const findingCards = [
  { finding: 'Chronic infarct, left thalamus',          series: 'Series 2', image: 'Image 19', anatomy: 'Thalamus',    modality: 'DWI',  urgency: 'moderate' },
  { finding: 'Periventricular white matter changes',    series: 'Series 1', image: 'Image 34', anatomy: 'Periventricular', modality: 'FLAIR', urgency: 'low' },
  { finding: 'No acute intracranial abnormality',       series: 'Series 3', image: 'Image 08', anatomy: 'Brain',       modality: 'T2',   urgency: 'none' },
];

export const futureCapabilities = [
  {
    title: 'Longitudinal Tracking',
    description: 'Follow findings across studies over time. Automatically compare current and prior imaging for interval change.',
    icon: 'trending-up',
    status: 'roadmap',
  },
  {
    title: 'Cross-Document Intelligence',
    description: 'Connect findings across radiology, pathology, labs, and clinical notes into a unified patient understanding.',
    icon: 'layers',
    status: 'roadmap',
  },
  {
    title: 'AI-Assisted Recommendations',
    description: 'Evidence-based follow-up suggestions derived from structured finding analysis and clinical guidelines.',
    icon: 'sparkles',
    status: 'roadmap',
  },
  {
    title: 'Finding Localization',
    description: 'Multimodal AI that links text descriptions directly to spatial locations in 3D anatomy.',
    icon: 'map-pin',
    status: 'experimental',
  },
];

export const targetUsers = [
  {
    role: 'Radiologist',
    description: 'Navigate complex reports faster. Let AI surface key findings and open the right image at the right moment.',
    icon: 'stethoscope',
    accent: 'cyan',
  },
  {
    role: 'Medical Provider',
    description: 'Understand imaging results without translation. Move from findings to clinical action with full context.',
    icon: 'user-round',
    accent: 'indigo',
  },
  {
    role: 'Researcher',
    description: 'Ingest structured findings, annotations, and AI outputs at scale. Build on a clinically-grounded workspace.',
    icon: 'flask-conical',
    accent: 'amber',
  },
];

export const designPrinciples = [
  { title: 'Human-Centered',       description: 'AI assists; medical providers decide. Every workflow keeps the physician in control.' },
  { title: 'AI-Assisted',          description: 'Not AI-replaced. Intelligence that amplifies clinical judgment without replacing it.' },
  { title: 'Explainable',          description: 'Every finding has a source. Every navigation has a reason. No black boxes.' },
  { title: 'Incremental Adoption', description: 'Integrate with existing PACS, reports, and workflows. No rip-and-replace.' },
  { title: 'Browser-First',        description: 'Full clinical intelligence agent delivered in any modern browser. Zero install.' },
  { title: 'Open & Extensible',    description: 'Built on open standards. Connect your data, your agents, your workflow.' },
];

export const atlasNodes = [
  { id: 'ct',       label: 'CT',        color: '#00d4e8', angle: 0,    radius: 160 },
  { id: 'mri',      label: 'MRI',       color: '#3b82f6', angle: 45,   radius: 160 },
  { id: 'report',   label: 'Report',    color: '#f59e0b', angle: 90,   radius: 160 },
  { id: 'path',     label: 'Pathology', color: '#a78bfa', angle: 135,  radius: 160 },
  { id: 'labs',     label: 'Labs',      color: '#34d399', angle: 180,  radius: 160 },
  { id: 'notes',    label: 'Notes',     color: '#fb923c', angle: 225,  radius: 160 },
  { id: 'prior',    label: 'Prior',     color: '#f472b6', angle: 270,  radius: 160 },
  { id: 'ai',       label: 'AI',        color: '#818cf8', angle: 315,  radius: 160 },
];
