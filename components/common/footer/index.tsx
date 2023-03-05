import Link from "next/link";

import { navigation } from "../navbar/navigation";
import SocialLinks from "../socialLinks";

function Copyright() {
  return (
    <>
      &copy;&nbsp;
      <Link color="inherit" href="/">
        tetteis
      </Link>{" "}
      {new Date().getFullYear()}
    </>
  );
}

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link legacyBehavior href={item.href}>
                <a className="text-base text-gray-400 hover:text-gray-500">
                  {item.name}
                </a>
              </Link>
            </div>
          ))}
        </nav>
        <SocialLinks />
        <p className="mt-8 text-center text-base text-gray-400">
          <Copyright />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
