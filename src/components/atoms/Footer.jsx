import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <section class="bg-primary">
        <div class="max-w-lg bg-primary px-4  py-8 mx-auto text-left md:max-w-none md:text-center">
          <h1 class="text-3xl font-extrabold leading-10 tracking-tight text-left text-white sm:text-center sm:leading-none sm:text-4xl lg:text-5xl ">
            <span class="inline">Build with ❤️</span> <br />
            <span class="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block">
              By {""}
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-cyon-400 to-purple-300">
                Yandra Muslim
              </span>
            </span>
          </h1>
        </div>
      </section>

      <hr class="text-white mx-5" />
      <footer class="bg-primary">
        <div class="max-w-screen-xl px-4 py-7 mx-auto sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex justify-center text-teal-300 sm:justify-start">
              <h1>MusYan</h1>
            </div>

            <Link
              to="hero"
              smooth={true}
              class="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0 cursor-pointer"
            >
              Scroll Up
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
