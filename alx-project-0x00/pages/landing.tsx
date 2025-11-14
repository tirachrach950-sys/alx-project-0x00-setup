import React from "react";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
    </div>
  );
};

export default Landing;
import React from "react";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <div className="p-2 flex gap-2 mt-2">
        <Card>
          <Pill title="Top Villa" />
          <Pill title="Self CheckIn" />
          <Pill title="Free Reschedule" />
        </Card>
      </div>
    </div>
  );
};

export default Landing;

