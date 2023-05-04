import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className="pl-5 md:pl-0 pt-5 text-gray-400">{category}</p>
      <p className="pl-5 md:pl-0 text-3xl font-extrabold tracking-tight text-slate-900">
        {title}
      </p>
    </div>
  );
};

export default Header;
