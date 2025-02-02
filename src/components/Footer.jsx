import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <div className="p-10 bg-blue-100 mt-14 rounded-2xl">
      <p className="text-gray-800 text-center font-serif font-bold">Designed and Developed by</p>
      <div className="flex justify-center space-x-6">
        <a href="https://www.facebook.com/saiprashanth.j?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/rams_prashanth_18?igsh=MTZpd3BqYW1mbXlxMA==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/prashu1815" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sai-prasanth-jampana-8217452a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <CiLinkedin />
        </a>
        <a href="mailto:jsaiprasanth18@gmail.com" target="_blank" rel="noopener noreferrer">
          <MdEmail />
        </a>
      </div>
      <p className="text-gray-800 text-center font-serif font-bold">Sai Prasanth.J</p>
    </div>
  );
}

export default Footer;
