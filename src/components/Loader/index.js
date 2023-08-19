import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-gray-900 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-(#FFF)-500"></div>
    </div>
  );
};

export default Loader;
