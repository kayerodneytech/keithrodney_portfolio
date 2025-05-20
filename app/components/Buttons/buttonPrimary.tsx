"use-client";
import Link from "next/link";
import React from "react";

const LinkButtonPrimary = (props) => {
  return (
    <Link
      href={props.path}
      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition flex items-center"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {props.text}
    </Link>
  );
};

export default LinkButtonPrimary;
