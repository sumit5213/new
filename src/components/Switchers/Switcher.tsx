import React from "react";

interface SwitcherProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Switcher: React.FC<SwitcherProps> = ({
  id,
  checked,
  onChange,
}) => {
  return (
    <label htmlFor={id} className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          id={id}
          type="checkbox"
          className="sr-only" // Hide the default checkbox
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        {/* The "track" */}
        <div
          className={`block w-10 h-6 rounded-full transition ${
            checked ? "bg-blue-600" : "bg-gray-300"
          }`}
        ></div>
        {/* The "thumb" */}
        <div
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
            checked ? "translate-x-4" : ""
          }`}
        ></div>
      </div>
    </label>
  );
};