import React from "react";

const Button = ({ type = 'outline', title = '', onClick = () => { } }) => {
  let className
  if (type === 'outline') {
    className = 'bg-transparent rounded hover:bg-primary text-primary font-medium hover:text-white py-2 px-4 border border-primary-500 hover:border-transparent rounded-md'
  } else {
    className = 'bg-[#1597E4] rounded hover:bg-transparent hover:text-primary font-medium text-white py-2 px-4 border border-primary rounded-md"'
  }

  return <button className={className} onClick={onClick}>{title}</button>
};

export default Button;
