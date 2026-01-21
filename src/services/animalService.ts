import api from './api'

export interface AnimalCreateData {
  species: string;
  name: string;
  breedId: number | undefined;
  birth: string;
  weight: number;
  activityLevel: 'SEDENTARY' | 'NORMAL' | 'ACTIVE' | 'VERY_ACTIVE';
  lifeStage: 'BABY' | 'ADULT' | 'SENIOR';
  treatments?: string;
};

export const ACTIVITY_LEVELS = [
  { value: 'SEDENTARY', label: 'Sédentaire' },
  { value: 'NORMAL', label: 'Normal' },
  { value: 'ACTIVE', label: 'Actif' },
  { value: 'VERY_ACTIVE', label: 'Très actif' }
] as const;

export const LIFE_STAGES = [
  { value: 'BABY', label: 'Chiot' },
  { value: 'ADULT', label: 'Adulte' },
  { value: 'SENIOR', label: 'Senior' }
] as const;

export const createAnimal = async (data: AnimalCreateData) => {
    return api.post('/animals', data);
};

export const getMyAnimal = () => {
  return api.get('/animals/me');
};

export const getBreeds = () => {
    return api.get('/breeds');
};