import React from "react";

export default function CheckBox  ({ checked, onChange }) {
  return (
    <label className="relative inline-block w-14 h-8">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <div className="w-full h-full bg-gray-300 peer-checked:bg-blue-500 rounded-full transition duration-300 peer-focus:ring-2 peer-focus:ring-blue-400"></div>
      <div className="absolute left-1 bottom-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
    </label>
  );
};


