import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold text-white">Imagify</h2>

            <p className="mt-4 text-sm leading-7">
              Turn your imagination into stunning AI-generated images.
              Create, download, and share high-quality artwork in seconds.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-indigo-400">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/generate" className="hover:text-indigo-400">
                  Generate
                </Link>
              </li>

              <li>
                <Link to="/pricing" className="hover:text-indigo-400">
                  Pricing
                </Link>
              </li>

              <li>
                <Link to="/history" className="hover:text-indigo-400">
                  History
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Company
            </h3>

            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-400">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Stay Updated
            </h3>

            <p className="text-sm mb-4">
              Subscribe to receive updates and new AI features.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-lg px-4 py-2 text-gray-900 outline-none"
              />

              <button className="rounded-r-lg bg-indigo-600 px-5 text-white hover:bg-indigo-700">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">

          <p className="text-sm">
            © {new Date().getFullYear()} Imagify. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-indigo-400">
              Facebook
            </a>

            <a href="#" className="hover:text-indigo-400">
              Twitter
            </a>

            <a href="#" className="hover:text-indigo-400">
              Instagram
            </a>

            <a href="#" className="hover:text-indigo-400">
              LinkedIn
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;