import Link from "next/link";
import Image from "next/image";
import { Portfolio } from "@/interfaces/Portfolio";
import { FunctionComponent } from "react";
import { makePostContentShort } from "@/lib/client/utils";

type Props = {
  portfolio: Portfolio;
};

export const PortfolioItem: FunctionComponent<Props> = ({ portfolio }) => {
  return (
    <div className="relative flex items-center justify-center h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        layout="fill"
        src={portfolio.coverImage}
        alt={portfolio.title}
        className="h-full w-full object-cover object-center group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {makePostContentShort(portfolio.title)}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">
          {makePostContentShort(portfolio.description)}
        </p>
        <p className="text-center">
          <Link legacyBehavior href={`/portfolio/${portfolio.slug}`}>
            <a className="py-3 px-3 mr-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </a>
          </Link>
          <Link legacyBehavior href={portfolio.portfolioLink}>
            <a
              rel="noreferrer"
              target="_blank"
              className="py-3 px-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"
            >
              Live Site
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};
