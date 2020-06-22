import React from "react";

const ButtonSubmit = ({ name, value }) => {
  return (
    <button
      className="shadow-inner my-12 md:my-6  text-xl px-4 py-6  text-gray-700 bg-gray-200 font-bold hover:shadow-lg hover:text-white hover:border hover:bg-transparent"
      type="submit"
      value={value}
    >
      {name}
    </button>
  );
};

export default ButtonSubmit;
