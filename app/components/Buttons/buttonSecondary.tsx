"use-client";
import Link from "next/link";
import React from "react";

const LinkButtonSecondary = (props) => {
  return (
    <Link
      href={props.path}
      className="px-6 py-3 bg-dark-800 border border-dark-700 text-white rounded-lg hover:bg-dark-700 transition flex items-center"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {props.text}
    </Link>
  );
};

export default LinkButtonSecondary;
