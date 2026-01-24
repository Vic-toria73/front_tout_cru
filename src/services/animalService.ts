import api from './api'

//création d'un animal
export interface AnimalCreate {
  species: string
  name: string
  breedId: number
  birth: string
  weight: number
  activityLevel: 'SEDENTARY' | 'NORMAL' | 'ACTIVE' | 'VERY_ACTIVE'
  lifeStage: 'BABY' | 'ADULT' | 'SENIOR'
  treatments?: string
};

export const createAnimal = async (data: AnimalCreate) => {
  return api.post('/animals', data)
};

// lecture 
export interface Animal {
  id: number
  species: string
  name: string
  breed: {
    id: number
    name: string
  }

  birth: string
  weight: number
  activityLevel: 'SEDENTARY' | 'NORMAL' | 'ACTIVE' | 'VERY_ACTIVE'
  lifeStage: 'BABY' | 'ADULT' | 'SENIOR'
  treatments?: string
}

export const activityLevels = [
  { value: 'SEDENTARY', label: 'Sédentaire' },
  { value: 'NORMAL', label: 'Normal' },
  { value: 'ACTIVE', label: 'Actif' },
  { value: 'VERY_ACTIVE', label: 'Très actif' },
] as const

export const lifeStages = [
  { value: 'BABY', label: 'Chiot' },
  { value: 'ADULT', label: 'Adulte' },
  { value: 'SENIOR', label: 'Senior' },
] as const

export const getMyAnimal = async (): Promise<Animal[]> => {
  const response = await api.get('/animals/me')
  return response.data
}

export const getBreeds = async (): Promise<Array<{ id: number; name: string }>> => {
  const response = await api.get('/breeds')
  return response.data
}
