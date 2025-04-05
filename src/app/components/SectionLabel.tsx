import React from 'react';

interface SectionLabelProps {
  text: string;
  textColor?: string;
  borderColor?: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ text, textColor = "text-gray-800", borderColor = "border-gray-800" }) => {
  return (
    <p className={`text-xs border px-4 py-1 rounded-md tracking-widest ${textColor} ${borderColor}`}>
      {text.toUpperCase()}
    </p>
  );
};

export default SectionLabel;
