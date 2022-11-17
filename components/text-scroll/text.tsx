import React from "react";
import cls from "classnames";

export default function TextSticky() {
  return (
    <div>
      <article className="flex flex-col h-full justify-center">
        <p className="text-3xl">01</p>
        <p className="font-extralight">LA RENCONTRE</p>
        <h3 className="text-3xl font-bold my-6">
          Monter dans un bus quand on est handicapé moteur, une épreuve ?
        </h3>
        <svg
          width="82"
          height="17"
          viewBox="0 0 82 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 10.7653C9.14221 7.35633 12.7664 5.82591 18.9542 3.9057C27.8399 0.429399 19.6122 10.4171 22.145 13.5213C23.5484 15.2412 38.9413 -1.06107 42.9983 3.96695C43.9656 6.60908 41.5097 12.6182 45.7871 13.5213C50.1296 14.4382 54.6029 14.0638 58.6947 12.1739C65.1076 9.21204 71.6044 3.59947 79 3.59947"
            stroke="#ECD6F5"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
        <p className="text-2xl mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
          non curabitur gravida arcu ac tortor dignissim. Nibh praesent
          tristique magna sit.
        </p>
      </article>
    </div>
  );
}
