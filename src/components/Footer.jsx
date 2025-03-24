import { Facebook, Instagram, XIcon, YoutubeIcon } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        {/* Logo & Description */}
        <div className="col-span-2">
          <div className="flex items-center mb-4">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-2" />
            <span className="text-2xl font-bold">
              MeMo<span className="text-red-500">ads</span>
              <sup className="text-sm font-semibold">Pro</sup>
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, pariatur ipsa! Eveniet ducimus magni soluta doloremque modi nulla eaque animi quo ex accusamus iure expedita nostrum, illo nemo architecto. Eos.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="text-sm space-y-1 text-gray-400">
            <li>Login</li>
            <li>Register</li>

            <li>Contact Us</li>
          </ul>
        </div>

        {/* Top Categories */}
        <div>
          <h4 className="font-semibold mb-3">Top Categories</h4>
          <ul className="text-sm space-y-1 text-gray-400">
            <li>Mobile Phones</li>
            <li>Electronics</li>
          </ul>
        </div>

        {/* Top Locations */}
        <div>
          <h4 className="font-semibold mb-3">Top Locations</h4>
          <ul className="text-sm space-y-1 text-gray-400">
            <li>Accra</li>
            <li>Kumasi</li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="font-semibold mb-3">Important Links</h4>
          <ul className="text-sm space-y-1 text-gray-400">
            <li>Help Desk</li>
            <li>About</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>
          {/* © 2014 – 2024 •{" "}
          <span className="font-semibold text-white">Classiads</span> All Rights
          Reserved • Developed by{" "} */}
          
        </p>
        <div className="flex gap-3 mt-4 md:mt-0">
          <button className="bg-gray-800 p-2 rounded-full">
            <span>
              <Facebook className="text-white" />
            </span>
          </button>
          <button className="bg-gray-800 p-2 rounded-full">
            <span>
              <Instagram className="text-white" />
            </span>
          </button>
          <button className="bg-gray-800 p-2 rounded-full">
            <span>
              <YoutubeIcon className="text-white" />
            </span>
          </button>
          <button className="bg-gray-800 p-2 rounded-full">
            <span>
              <XIcon className="text-white" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer