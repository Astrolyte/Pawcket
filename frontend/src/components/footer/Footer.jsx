import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-12"
                alt="Pawcket Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap">Pawcket</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Explore</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">Home</Link>
                </li>
                <li className="mb-4">
                  <Link to="/products" className="hover:underline">Products</Link>
                </li>
                <li>
                  <Link to="/feed" className="hover:underline">Feed</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Account</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/login" className="hover:underline">Login</Link>
                </li>
                <li>
                  <Link to="/register" className="hover:underline">Register</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © {new Date().getFullYear()} <Link to="/" className="hover:underline">Pawcket</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">GitHub</span>
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="https://twitter.com" className="text-gray-500 hover:text-gray-900" target="_blank" rel="noreferrer">
              <span className="sr-only">Twitter</span>
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://instagram.com" className="text-gray-500 hover:text-gray-900" target="_blank" rel="noreferrer">
              <span className="sr-only">Instagram</span>
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
