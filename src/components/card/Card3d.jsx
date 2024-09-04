import create from "zustand";
import { useState } from "react";
import Card from "react-animated-3d-card";
import img from "../../assets/poster/1.png";

const CreditCard = ({courseName, courseDescription, courseImg}) => {
  return (
    <Card
      shineStrength={0.1}
      className="cursor-pointer rounded-lg shadow-lg overflow-hidden "
      onClick={() => console.log("Hola")}
      style={{
        background: "linear-gradient(to right, #4c5270, #4c5270, #4c5270)",
      }}
    >
      <div className="flex flex-col h-full p-4">
        <div className="flex-1 flex flex-col items-center">
          <div
            className="w-full h-1/2 bg-cover bg-center rounded-t-lg"
            style={{ backgroundImage: "url(../../../assets/poster/1.png)" }}
          >
            <img src={courseImg} />
          </div>
          <div className="text-xl font-semibold text-secondary mt-2">
          {courseName}
          </div>
          <div className="text-sm text-white mt-2 text-center">
           {courseDescription}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreditCard;
