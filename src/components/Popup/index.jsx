import React from 'react';

const Popup = ({ isOpen, onClose,title, subTitle,children }) => {
  if (!isOpen) {
    return null;
  }

  const handleStopPropagation =(e) =>{
    e.stopPropagation()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-black opacity-50 fixed inset-0"></div>
      <div className="bg-white p-8 rounded-lg shadow-md z-10 w-1/2" onClick={handleStopPropagation} >
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl">{title}</h2>
          <p> {subTitle} </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Popup;
