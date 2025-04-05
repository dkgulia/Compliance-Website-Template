import React from "react";
import { FaRegCircle } from "react-icons/fa";

// Define the interface for problem item props
interface ProblemItemProps {
  title: string;
  description: string;
  hasIcon: boolean;
  hasBackground: boolean;
}

// ProblemItem component to render each item
const ProblemItem: React.FC<ProblemItemProps> = ({
  title,
  description,
  hasIcon,
  hasBackground,
}) => {
  // Define the content based on whether it has an icon
  const content = hasIcon ? (
    <div className="flex gap-4 md:hover:translate-x-2 transition-all duration-300 ease-in-out">
      <div className="flex flex-col justify-center text-gray-500 text-sm space-y-1">
        <span className="text-xs text-red-400">
          <FaRegCircle />
        </span>
        {/* <div
          className={`bg-gradient-to-r from-green-400 to-green-600  w-0.5 h-4 flex-1 rounded-lg`}
        ></div> */}
      </div>
      <div className="space-y-1">
        <p className="text-gray-300">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  ) : (
    <>
      <p>{title}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </>
  );

  // Conditionally wrap content in a div with background styles
  return hasBackground ? (
    <div className="bg-gray-500 bg-opacity-10 px-4 py-2 rounded-lg space-y-1">
      {content}
    </div>
  ) : (
    content
  );
};

// Array of problem items
const problems: ProblemItemProps[] = [
  {
    title: "Fragmented Tools",
    description:
      "Disconnected compliance, risk, and threat tools create chaos.",
    hasIcon: true,
    hasBackground: false,
  },
  {
    title: "Compliance Overload",
    description:
      "Manual audits and evolving regulations (GDPR, CCPA) slip through the cracks.",
    hasIcon: true,
    hasBackground: false,
  },
  {
    title: "Unidentified Risks",
    description:
      "Scattered data leaves exploitable gaps and vendor risks unseen.",
    hasIcon: true,
    hasBackground: false,
  },
  {
    title: "Human Error + Security Blindspots",
    description:
      "Phishing clicks, misconfigured clouds, overprivileged vendors, and unsecured APIs risk breaches.",
    hasIcon: true,
    hasBackground: false,
  },
  {
    title: "Burnout + Breaches",
    description:
      "Alert fatigue, slow patching, and siloed SOCs let attackers win.",
    hasIcon: true,
    hasBackground: false,
  },
  {
    title: "Reputational + Financial Loss",
    description:
      "Failing to prioritize cybersecurity and compliance endangers both finances and reputation.",
    hasIcon: true,
    hasBackground: false,
  },
];

// ProblemsList component to render the list
const ProblemsList: React.FC = () => {
  return (
    <div>
      {problems.map((problem, index) => (
        <div key={index}>
          <ProblemItem key={index} {...problem} />
          {index < problems.length - 1 && (
            <div
              className="text-gray-500 border w-0.5 h-6 border-gray-200 dark:border-gray-700 dark:text-gray-400 rounded-lg"
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProblemsList;
