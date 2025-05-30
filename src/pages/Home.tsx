import React from 'react';
import { Layout } from '@/components/Layout/Layout';

export const Home: React.FC = () => {
  return (
    <Layout>
      <div className="prose dark:prose-invert mx-auto">
        <h1>Welcome to Your MVP</h1>
        <p>Start building something amazing!</p>
      </div>
    </Layout>
  );
};