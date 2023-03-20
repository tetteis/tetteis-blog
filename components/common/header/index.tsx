import Link from "next/link";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Header = () => {
  return (
    <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Hi,</span>{" "}
          <span className="block text-indigo-600 xl:inline">Welcome! 👋🏼</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          <RoughNotationGroup show>
            My name is Tettei Shahday-Annang and I am a{" "}
            <RoughNotation type="highlight" multiline={true} color="yellow">
              Front-End Developer
            </RoughNotation>
            . I am available for{" "}
            <RoughNotation type="underline" color="#9B1FE8" padding={0}>
              fulltime
            </RoughNotation>
            ,{" "}
            <RoughNotation type="underline" color="gold" padding={0}>
              contract
            </RoughNotation>{" "}
            or{" "}
            <RoughNotation type="underline" padding={0} color="#EEBFAA">
              freelance
            </RoughNotation>{" "}
            work. Feel free to check my working experience and blogs about tech
            topics.
          </RoughNotationGroup>
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link legacyBehavior href="/portfolio">
              <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">
                My Portfolio
              </a>
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link legacyBehavior href="#">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
              >
                CV
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
