import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>Hello</h1>
      {children}
    </>
  );
};

export default layout;
