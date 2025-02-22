export interface KuralRow {
  ID: number;
  Adhigaram_ID: number;
  Paal: string;
  Iyal: string;
  Adhigaram: string;
  Kural: string;
  Transliteration: string;
  Vilakam: string;
  Couplet: string;
  Chapter: string;
  Section: string;
  Athigaram: string;
  Kalaingar_Urai: string;
  Parimezhalagar_Urai: string;
  M_Varadharajanar: string;
  Solomon_Pappaiya: string;
}

export interface KuralResponse {
  rows: { row: KuralRow }[];
}
