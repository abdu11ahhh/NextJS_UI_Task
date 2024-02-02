import React from 'react';
import { FaYoutube } from 'react-icons/fa6';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="lg:px-20 px-8 py-8 border-b border-[#e6e6e6]">
        <div className="flex items-center gap-8 ">
          <h1 className="text-[13px] font-semibold">Follow us</h1>
          <span className="flex footer-icons gap-4 items-center text-[#595959] cursor-pointer text-[20px]">
            <span>
              <FaYoutube />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaFacebookF />
            </span>
          </span>
        </div>
      </div>
      <div className="footer-links border-b border-[#e6e6e6] flex flex-wrap lg:gap-48 justify-between  text-[14px] px-8 lg:px-20 py-4">
        <div>
          <ul>
            <li>Internal Links</li>
            <li>
              <a href="">Documentaries</a>
            </li>
            <li>
              <a href="">Themes</a>
            </li>
            <li>
              <a href="">Chrome casts</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Enterprise</li>
            <li>
              <a href="">Download Chrome Browser</a>
            </li>
            <li>
              <a href="">Chrome Browser for Enterprise</a>
            </li>
            <li>
              <a href="">Chrome Browser Devices</a>
            </li>
            <li>
              <a href="">ChromeOS</a>
            </li>
            <li>
              <a href="">Google Cloud</a>
            </li>
            <li>
              <a href="">Google Workspace</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Internal Links</li>
            <li>
              <a href="">Documentaries</a>
            </li>
            <li>
              <a href="">Themes</a>
            </li>
            <li>
              <a href="">Chrome casts</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Enterprise</li>
            <li>
              <a href="">Download Chrome Browser</a>
            </li>
            <li>
              <a href="">Chrome Browser for Enterprise</a>
            </li>
            <li>
              <a href="">Chrome Browser Devices</a>
            </li>
            <li>
              <a href="">ChromeOS</a>
            </li>
            <li>
              <a href="">Google Cloud</a>
            </li>
            <li>
              <a href="">Google Workspace</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-4 lg:flex gap-6 items-center">
        <div className="flex lg:px-20 px-8">
          <span class="pb-1.5 leading-none font-bold text-2xl md:text-3xl text-text-dark">
            Similar
          </span>
          <span class="ml-1 flex items-center rounded-xl bg-[black] min-h-[34px] md:min-h-[38px] px-2.5 mb-1 ">
            <span class="text-xl font-bold leading-none text-white md:text-xl ">
              Watch
            </span>
          </span>
        </div>
        <ul className="flex footer-links2 lg:gap-4 gap-2 text-[12px]">
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Terms and conditions</a>
          </li>
          <li>
            <a href="">Cookies Policy</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">EULA</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
