import React from "react";

const CostumHr = () => {
  return (
    <div className="fixed top-16 left-0 w-full z-40 px-20">
      {/* Base Line */}
      <div className="h-[3px] bg-white w-full" />

      {/* Red active section */}
      <div className="absolute top-0 left-[42%] h-[3px] bg-red-500 w-[17.5%]" />
    </div>
  );
};

export default CostumHr;
