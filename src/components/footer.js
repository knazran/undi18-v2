import React from "react";
import { Link } from "gatsby";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
        <path
          fill="#3e64ff"
          fillOpacity="1"
          d="M0,128L48,112C96,96,192,64,288,74.7C384,85,480,139,576,144C672,149,768,107,864,80C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> */}
      <footer className="bg-red-800">
        <nav className="flex flex-wrap justify-between max-w-4xl p-4 mx-auto md:px-8  pt-8 pb-16 bg-red-800">
          <div className="flex w-full lg:w-1/2">
            <div className="w-1/2 lg:w-full text-white">
              <h4 className="font-semibold text-md mb-4">Contact Us</h4>
              <p className="text-sm">contact@undi18.org </p>
              <p className="text-sm">+6010 659 6061</p>
              <div className="text-sm text-white mt-4">
                Persatuan Pengundi Muda
                <br></br>
                PPM-008-14-27092018.
              </div>
              <div className="text-sm text-white mt-4">
                Suite 10-01, Menara Centara, 
                <br></br>
                Jalan Tuanku Abdul Rahman 
                <br></br>
                50100 Kuala Lumpur
              </div>
              

            </div>
          </div>
          <div className="lg:flex w-full lg:w-1/2 lg:pl-8">
            <div className="w-full mb-4 lg:w-1/3">
              <h4 className="font-semibold text-md mb-4 text-white">
                Follow Us
              </h4>
              <div className="flex text-white text-2xl">
                <span className="mr-2">
                  <a href="https://www.facebook.com/MyUndi18/">
                    <FaFacebookSquare />
                  </a>
                </span>
                <span className="mr-2">
                  <a href="https://twitter.com/Undi18My">
                    <FaTwitterSquare />
                  </a>
                </span>
                <span className="mr-2">
                  <a href="https://www.instagram.com/undi18my">
                    <FaInstagram />
                  </a>
                </span>
                <span className="mr-2">
                  <a href="https://www.linkedin.com/company/undi18/">
                    <FaLinkedin />
                  </a>
                </span>
              </div>
              <div className="text-sm text-white mt-12">
              <Link
                key="psea"
                to="/psea"
              >
                PSEA Policy
              </Link>
              </div>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
