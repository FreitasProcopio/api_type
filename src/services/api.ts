import {  type About, type FAQ } from '@/types/api_type';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Sobrecarga de tipos para melhor inferência
async function fetchData<T>(endpoint: string, responseType: 'json'): Promise<T[]>;
async function fetchData<T>(
  endpoint: string,
  responseType: 'json' | 'image' = 'json'
): Promise<T[] | Blob> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Falha na requisição para ${endpoint}: Status ${response.status}`);
    }

    if (responseType === 'json') {
      return await response.json() as T[];
    }
    return await response.blob();
  } catch (error) {
    console.error('Erro na requisição:', error);
    return responseType === 'json' ? [] : new Blob();
  }
}

// Funções específicas com tipos explícitos
export const getAbout = (): Promise<About[]> => fetchData<About>('/type/Letter', 'json');
export const getFAQs = (): Promise<FAQ[]> => fetchData<FAQ>('/all', 'json');