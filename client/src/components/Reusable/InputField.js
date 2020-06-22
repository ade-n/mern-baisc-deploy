import React from "react";

const InputField = ({ placeholder, onChange, value, htmlFor, label }) => {
  return (
    <div>
      <label
        className="block uppercase tracking-wide text-gray-700 text-md  mb-2 text-xs"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <input
        id="placeholderColor"
        className="appearance-none bg-transparent border w-full text-md text-gray-800 mr-3 py-2 px-4  leading-tight focus:outline-none  mb-6 hover:bg-gray-200"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputField;
