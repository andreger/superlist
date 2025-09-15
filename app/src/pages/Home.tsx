import React from 'react';
import { Button } from '../components/ui/button';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md mx-auto bg-card rounded-xl shadow-md overflow-hidden border">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Welcome to Home</h1>
          <p className="text-muted-foreground mb-6">This is the Home component with shadcn/ui components!</p>
          <div className="space-y-4">
            <Button className="w-full">Default Button</Button>
            <Button variant="secondary" className="w-full">Secondary Button</Button>
            <Button variant="outline" className="w-full">Outline Button</Button>
            <Button variant="destructive" className="w-full">Destructive Button</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;