export interface ForgeLayer {
  dt: string;
  title: string;
  body: string;
}

export interface ForgeStage {
  id: string;
  stage_key: string;       // 'focus', 'originate', 'refine', 'gate', 'engineer-a', 'engineer-b'
  stage_letter: string;    // 'F', 'O', 'R', 'G', 'E', 'E'
  stage_index: number;     // 1..6
  name: string;            // 'Focus.', 'Originate.'
  tagline: string;         // 'Vision intelligence & brief capture.'
  description: string;     // "We don't start with what to design..."
  turnaround: string;      // '2–4 days'
  layers: ForgeLayer[];
  stat_value: string;      // 'Day 1', '3', '80', '1:1', '0'
  stat_label: string;
  deliverable: string;
  gate_text: string;
  image_slot: string;
  created_at?: string;
}

export interface ForgeFaq {
  id: string;
  question: string;
  answer: string;
  display_order: number;
  created_at?: string;
}

export interface ForgeClient {
  id: string;
  name: string;
  logo_url?: string | null;
  display_order: number;
  is_active?: boolean;
  created_at?: string;
}

export interface ForgeCaseStudy {
  id: string;
  title: string;
  slug: string;
  stages_label: string;    // 'Focus → Engineer B'
  summary: string;
  image_url?: string | null;
  display_order: number;
  is_active?: boolean;
  created_at?: string;
}

export interface ForgeStat {
  id: string;
  value: string;           // '50+', '9 yr', '20', '35+'
  label: string;           // 'Products delivered'
  display_order: number;
  created_at?: string;
}
