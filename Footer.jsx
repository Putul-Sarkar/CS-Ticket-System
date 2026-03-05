import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-gray-300 w-full mt-16">
      
      {/* Full width container */}
      <div className="w-full px-4 sm:px-6 lg:px-12 py-12">
        
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center sm:text-left">
          
          {/* Brand */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">
              CS — Ticket System
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Mission</a></li>
              <li><a href="#" className="hover:text-white">Contact Sales</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Products & Services</a></li>
              <li><a href="#" className="hover:text-white">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white">Download Apps</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Join Us</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Social Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-center sm:justify-start items-center gap-3">
                <i className="fa-brands fa-twitter"></i>
                <a href="#" className="hover:text-white">Twitter</a>
              </li>
              <li className="flex justify-center sm:justify-start items-center gap-3">
                <i className="fa-brands fa-facebook"></i>
                <a href="#" className="hover:text-white">Facebook</a>
              </li>
              <li className="flex justify-center sm:justify-start items-center gap-3">
                <i className="fa-brands fa-instagram"></i>
                <a href="#" className="hover:text-white">Instagram</a>
              </li>
              <li className="flex justify-center sm:justify-start items-center gap-3 mt-3">
                <i className="fa-solid fa-envelope"></i>
                <span className="text-gray-500">support@cst.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-600">
          © 2025 CS — Ticket System. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer