export type ClubPlan = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  resumo: string;
  valor: number;
  ativo: boolean;
  destaque?: boolean;
  faixaEtaria: string;
  itensInclusos: string[];
  beneficios: string[];
};

export type MonthlyKit = {
  id: number;
  referencia: string;
  titulo: string;
  descricao: string;
  chamada: string;
  itens: string[];
};

export type ClubLandingContent = {
  planos: ClubPlan[];
  kitMensal: MonthlyKit | null;
};
