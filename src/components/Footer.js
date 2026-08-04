import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="bg-indigo-600 text-white py-8 px-4 mt-12">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <p>© 2025 IfaMedShop - Your Online Drugstore Partner</p>
        <p>Contact us: <a href="#" className="underline hover:text-indigo-300">contact@ifamedshop.com</a></p>
        <div className="flex justify-center space-x-6 mt-4 text-indigo-300">
          <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.63 9.87v-6.99h-2.8v-2.88h2.8v-2.2c0-2.77 1.64-4.3 4.15-4.3 1.2 0 2.46.22 2.46.22v2.7h-1.37c-1.35 0-1.77.84-1.77 1.7v2.08h3l-.48 2.88h-2.52v6.99A10 10 0 0022 12z" /></svg>
          </a>
          <a href="#" target="_blank" rel="noreferrer" aria-label="Twitter">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
          </a>
          <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 2a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
