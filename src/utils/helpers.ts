import { ClubLandingContent } from '../types';
import { API_BASE_URL, WHATSAPP_NUMBER } from '../constants/content';

export async function fetchClubLanding(): Promise<ClubLandingContent> {
  const response = await fetch(`${API_BASE_URL}/publico/clube-akkai/vitrine`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) throw new Error('Não foi possível carregar a vitrine do clube.');
  return (await response.json()) as ClubLandingContent;
}

export function formatCurrency(valueInCents: number): string {
  return (valueInCents / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function createWhatsAppUrl(message: string): string | null {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, '');
  if (!cleanNumber) return null;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function buildInterestMessage(input: {
  planName: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}): string {
  return [
    'Olá, Akkai! Quero conhecer melhor o Clube Akkai.',
    `Plano de interesse: ${input.planName}`,
    `Nome: ${input.name || '-'}`,
    `Email: ${input.email || '-'}`,
    `Telefone: ${input.phone || '-'}`,
    `Observações: ${input.notes || '-'}`,
  ].join('\n');
}
