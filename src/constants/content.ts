import { ClubLandingContent } from '../types';

export const API_BASE_URL = import.meta.env.VITE_API_URL ?? '/api';
export const WHATSAPP_NUMBER = import.meta.env.VITE_CLUBE_AKKAI_WHATSAPP ?? '';
export const WHATSAPP_LABEL = import.meta.env.VITE_CLUBE_AKKAI_WHATSAPP_LABEL ?? '';

export const MOCK_LANDING_CONTENT: ClubLandingContent = {
  planos: [
    {
      id: 1,
      slug: 'basico',
      nome: 'Plano Básico',
      descricao: 'Uma assinatura mensal para quem quer entrar no Clube Akkai com uma seleção enxuta e divertida.',
      resumo: 'Perfeito para começar a aventura',
      valor: 5990,
      ativo: true,
      faixaEtaria: 'Crianças a partir de 4 anos',
      itensInclusos: [
        '1 articulado grande 3D',
        '1 mini colecionável 3D',
        '1 fidget toy temático',
        'Embalagem temática surpresa',
      ],
      beneficios: ['Entrada ideal no clube', 'Kit com variedade de brincadeiras'],
    },
    {
      id: 2,
      slug: 'pro',
      nome: 'Plano PRO',
      descricao: 'Para famílias que querem um kit mais completo, com mais conteúdo para brincar junto.',
      resumo: 'A experiência completa para os heróis',
      valor: 8990,
      ativo: true,
      destaque: true,
      faixaEtaria: 'Crianças a partir de 4 anos',
      itensInclusos: [
        '2 minis colecionáveis 3D',
        '1 articulado grande 3D',
        '1 fidget toy temático',
        '1 jogo / atividade do tema',
        'Embalagem premium surpresa',
      ],
      beneficios: ['Mais tempo de brincadeira', 'Kit mais completo para presentear'],
    },
  ],
  kitMensal: {
    id: 1,
    referencia: 'Maio 2026',
    titulo: 'Kit Exploradores do Oceano',
    descricao: 'Mergulhe fundo neste mundo aquático! Este mês o kit Clube Akkai traz as criaturas mais incríveis dos oceanos em impressão 3D de alta qualidade.',
    chamada: 'Um kit temático especial com peças articuladas, colecionáveis e muito mais!',
    itens: [
      '🦈 Tubarão Articulado',
      '🐢 Mini Colecionáveis Marinhos',
      '🎮 Jogo de Memória Marinha',
      '🌊 Diorama do Oceano',
    ],
  },
};

export const HOW_IT_WORKS = [
  { step: '1', icon: '📋', title: 'Escolha seu plano', copy: 'Plano Básico ou PRO — escolha o que combina mais com a sua família e o que a criança vai adorar.' },
  { step: '2', icon: '📬', title: 'Receba em casa', copy: 'Todo mês, um kit temático surpresa cheio de colecionáveis 3D exclusivos chega na porta da sua casa.' },
  { step: '3', icon: '🎮', title: 'Monte e brinque', copy: 'Hora da diversão! Monte, explore e mergulhe no tema do mês junto com as crianças.' },
  { step: '4', icon: '🏆', title: 'Colecione!', copy: 'Cada kit traz itens exclusivos para colecionar. Sua coleção cresce a cada mês!' },
];

export const KIT_ITEMS = [
  { icon: '🔄', title: 'Fidget Toys', desc: 'Brinquedos sensoriais temáticos para desenvolver coordenação e criatividade.' },
  { icon: '⭐', title: 'Miniaturas', desc: 'Miniaturas exclusivas impressas em 3D para colecionar série a série.' },
  { icon: '🦕', title: 'Articulado Grande', desc: 'Figura articulada impressa em 3D com detalhes incríveis do tema do mês.' },
  { icon: '🎲', title: 'Jogos Educativos', desc: 'Jogos e atividades temáticas para toda a família aprender brincando.' },
];

export const BENEFITS = [
  { icon: '🖨️', title: 'Impressão 3D', desc: 'Peças produzidas com tecnologia e precisão em impressão 3D.' },
  { icon: '🧠', title: 'Estímulo e Aprendizado', desc: 'Jogos que desenvolvem habilidades cognitivas, sensoriais e motoras.' },
  { icon: '💡', title: 'Tecnologia e Inovação', desc: 'Design inteligente e materiais de alta qualidade para muito mais diversão.' },
  { icon: '🛡️', title: 'Segurança e Confiança', desc: 'Peças seguras, resistentes e feitas para crianças explorarem sem medo.' },
];

export const TESTIMONIALS = [
  { stars: '★★★★★', text: '"Meu filho fica ansioso semanas antes de chegar o kit! Ele adora montar e organizar os colecionáveis. Virou uma tradição na nossa casa!"', name: 'Ana Lima', role: 'Mãe do Lucas, 7 anos', avatar: '👩', avatarClass: 'a1' },
  { stars: '★★★★★', text: '"As figuras são de qualidade incrível! Minha filha ficou impressionada com a textura e os detalhes. Vale cada centavo do plano PRO."', name: 'Roberto Alves', role: 'Pai da Sofia, 9 anos', avatar: '👨', avatarClass: 'a2' },
  { stars: '★★★★★', text: '"Assino há 6 meses e não me arrependo. Os temas são criativos, a entrega é rápida e o atendimento é excelente. Super recomendo!"', name: 'Carla Santos', role: 'Mãe do Miguel, 8 anos', avatar: '👩', avatarClass: 'a3' },
];

export const HOW_ARRIVES = [
  { icon: '📦', title: 'Embalagem Premium', desc: 'Cada kit chega em uma embalagem especial, preparada com cuidado para manter a surpresa e a qualidade das peças.' },
  { icon: '🚚', title: 'Entrega Rápida', desc: 'Enviamos de dentro do Brasil com rastreamento. Receba seu kit em 3 a 7 dias úteis após o envio.' },
  { icon: '🛡️', title: 'Garantia Total', desc: 'Se chegar danificado, a gente reembolsa ou envia um novo kit, sem complicação. Sua satisfação em primeiro lugar!' },
  { icon: '🌐', title: 'Frete Incluso', desc: 'Já está tudo incluído! Sem taxas surpresa ou custos adicionais. O que você vê é o que você paga.' },
];

export const FAQ_ITEMS = [
  { category: 'Assinatura', q: 'Como funciona a assinatura? 📝', a: 'Você escolhe um plano (Básico ou PRO), paga mensalmente e recebe um kit novo todo mês! Sem contrato, pode cancelar quando quiser.' },
  { category: 'Assinatura', q: 'Posso cancelar quando quiser? ❌', a: 'Sim! Não temos fidelidade. Você pode cancelar sua assinatura a qualquer momento direto pelo painel do cliente, sem burocracia.' },
  { category: 'Entrega', q: 'Como funciona a entrega? 📬', a: 'Os kits são enviados todo mês, com envio para todo o Brasil. O prazo de entrega varia de 3 a 7 dias úteis após o envio. Você recebe um código de rastreamento por e-mail.' },
  { category: 'Entrega', q: 'Qual o frete? 🚚', a: 'O frete já está incluído no valor do plano! Entregamos em qualquer lugar do Brasil sem custos extras.' },
  { category: 'Produtos', q: 'Qual a idade recomendada? 👶', a: 'Os kits são desenvolvidos para crianças de 4 a 12 anos. Algumas peças pequenas exigem supervisão para crianças menores de 5 anos.' },
  { category: 'Produtos', q: 'As figuras são seguras para crianças? ✅', a: 'Sim! Todos os nossos produtos são impressos com filamento atóxico, certificado e seguro. Seguimos todas as normas de segurança infantil.' },
  { category: 'Produtos', q: 'Posso escolher o tema do kit? 🎨', a: 'O tema é definido mensalmente pela equipe Clube Akkai para garantir a surpresa! Mas você pode ver previamente o tema do próximo mês no painel do assinante.' },
];
