// src/hooks/useHabits.ts
import { useEffect, useState } from 'react';
import { getHabits } from '../utils/api';
import { Habit } from '../types';

export const useHabits = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const data = await getHabits();
        setHabits(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHabits();
  }, []);

  return { habits, loading, error };
};