// src/pages/HomePage.tsx
import React from 'react';
import { useHabits } from '../hooks/useHabits';
import HabitList from '../components/Feature/HabitList';

const HomePage: React.FC = () => {
  const { habits, loading, error } = useHabits();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>My Habits</h1>
      <HabitList habits={habits} />
    </div>
  );
};

export default HomePage;