// components/TextIcon.tsx

import React from "react";

interface TextIconProps {
  icon: React.ReactNode;
  text: string;
  textSize?: string;
  textColor?: string;
}

const TextIcon: React.FC<TextIconProps> = ({
  icon,
  text,
  textSize,
  textColor,
}) => {
  return (
    <div className={`flex items-center space-x-2 ${textSize} ${textColor}`}>
      <span className={textSize}>{icon}</span>
      <p>{text}</p>
    </div>
  );
};

export default TextIcon;
