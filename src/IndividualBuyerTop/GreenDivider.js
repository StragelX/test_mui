import * as React from "react";

function GreenDivider() {
  return (
    <div className="mb-5 mt-5 h-1 flex items-stretch">
      <div className="bg_primary w-[92px] flex-none"></div>
      <div className="bg_primary opacity-60 flex-auto"></div>
    </div>
  );
}

export default GreenDivider;
