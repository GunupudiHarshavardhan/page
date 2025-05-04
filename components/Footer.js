import React from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import {
  SiGooglepay,
  SiMastercard,
  SiPaypal,
  SiAmericanexpress,
  SiApplepay,
  SiShopify,
} from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold uppercase">
              Be the first to know
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Sign up for updates from mettä muse.
            </p>
            <form className="mt-4 flex max-w-md">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-transparent border border-gray-600 rounded-r-md hover:bg-gray-800 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div>
            {/* Contact & Currency */}
            <h3 className="text-lg font-semibold uppercase">Contact Us</h3>
            <p className="mt-2 text-sm">+44 221 133 5360</p>
            <p className="text-sm mb-4">customercare@mettamuse.com</p>

            <h3 className="text-lg font-semibold uppercase mt-4">Currency</h3>
            <div className="mt-2 flex items-center space-x-2">
              <span role="img" aria-label="US flag">🇺🇸</span>
              <span>USD</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>

        <hr className="border-gray-700" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: mettä muse */}
          <div>
            <h4 className="text-lg font-semibold">mettä muse</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Stories</a></li>
              <li><a href="#" className="hover:underline">Artisans</a></li>
              <li><a href="#" className="hover:underline">Boutiques</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">EU Compliances Docs</a></li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">Orders & Shipping</a></li>
              <li><a href="#" className="hover:underline">Join/Login as a Seller</a></li>
              <li><a href="#" className="hover:underline">Payment & Pricing</a></li>
              <li><a href="#" className="hover:underline">Return & Refunds</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="mt-4 flex space-x-4 text-gray-300">
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Column 4: Payment Icons */}
          <div>
            <h4 className="text-lg font-semibold">mettä muse accepts</h4>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-2xl text-gray-300">
              <SiGooglepay />
              <SiMastercard />
              <SiPaypal />
              <SiAmericanexpress />
              <SiApplepay />
              <SiShopify />
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500">
          &copy; 2024 mettämuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
