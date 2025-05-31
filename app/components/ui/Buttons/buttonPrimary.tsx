import Link from "next/link";
import React from "react";

type ButtonPrimaryProps = {
  path: string;
  text: string;
  icon?: React.ReactNode;
};

const LinkButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  path,
  text,
  icon,
}) => {
  return (
    <Link
      href={path}
      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:opacity-90 transition flex items-center justify-center"
    >
      {icon && icon}
      {text}
    </Link>
  );
};

export default LinkButtonPrimary;
