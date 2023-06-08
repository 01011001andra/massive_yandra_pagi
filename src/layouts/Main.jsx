import React from "react";

const Main = ({ children }) => {
  return (
    <main
      name="hero"
      className="flex flex-col justify-center w-full min-h-screen "
    >
      <div className="flex items-center justify-center w-full mx-auto xl:max-w-6xl 2xl:max-w-7xl">
        {children}
      </div>
    </main>
  );
};

export default Main;
