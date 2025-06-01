"use-client";
import Link from "next/link";
import React from "react";

interface LinkButtonSecondaryProps {
  path: string;
  children: React.ReactNode;
  className?: string;
}

const LinkButtonSecondary: React.FC<LinkButtonSecondaryProps> = ({
  path,
  children,
  className = "",
}) => {
  return (
    <Link
      href={path}
      className={`px-6 py-3 bg-dark-700 border border-dark-600 text-white rounded-lg hover:bg-dark-600 transition flex items-center ${className}`}
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {children}
    </Link>
  );
};

export default LinkButtonSecondary;
