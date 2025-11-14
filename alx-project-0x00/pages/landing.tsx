import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button"; // make sure this exact import exists

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      <Card />

      <div className="flex gap-4 mt-6">
        <Button title="Small Rounded" styles="px-3 py-1 text-sm bg-blue-500 text-white rounded-sm" />
        <Button title="Medium Rounded" styles="px-4 py-2 text-base bg-blue-500 text-white rounded-lg" />
        <Button title="Large Rounded" styles="px-6 py-3 text-lg bg-blue-500 text-white rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
