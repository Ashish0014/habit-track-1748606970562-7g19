// src/utils/api.ts
import { supabase } from './supabase';
import { Habit } from '../types';

export const getHabits = async (): Promise<Habit[]> => {
  const { data, error } = await supabase.from('habits').select('*');
  if (error) {
    throw new Error(error.message);
  }
  return data || [];
};