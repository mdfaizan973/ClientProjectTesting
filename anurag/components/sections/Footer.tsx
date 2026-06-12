'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-16">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
  
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">
            {PORTFOLIO_DATA.name}
          </h3>
  
          <p className="text-gray-600 leading-relaxed">
            {PORTFOLIO_DATA.footer.description}
          </p>
  
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-200 bg-green-50">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-green-700">
              {PORTFOLIO_DATA.footer.availability}
            </span>
          </div>
        </div>
  
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">
            Quick Links
          </h4>
  
          <ul className="space-y-3">
            {["About", "Projects", "Experience", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">
            Contact
          </h4>
  
          <div className="space-y-3 text-gray-600">
            <p>{PORTFOLIO_DATA.email}</p>
            <p>{PORTFOLIO_DATA.location}</p>
          </div>
        </div>
  
        {/* Socials */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">
            Connect
          </h4>
  
          <div className="flex flex-col gap-3">
            {PORTFOLIO_DATA.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-all hover:translate-x-1"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
  
      <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>
          © {currentYear} {PORTFOLIO_DATA.name}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  );
}
