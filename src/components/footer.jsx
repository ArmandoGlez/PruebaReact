import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import logoLemon from "../assets/images/lemonXDD.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoWarning } from "react-icons/io5";
import { GiBeech } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="flex-footer">
        <img src={logoLemon} alt="lemon logo" style={{ height: "100px" }} />

        <div className="childFooter">
          <h1 className="titleFooter">Contact us</h1>
          <div className="flexContact">
            <BsTelephoneFill />
            <span>311-241-5054</span>
          </div>

          <div className="flexContact">
            <FaFacebookF />
            <span>Facebook</span>
          </div>

          <div className="flexContact">
            <FaLocationArrow />
            <span>Location</span>
          </div>
        </div>

        <div className="childFooter">
          <h1 className="titleFooter">About us</h1>

          <div className="flexContact">
            <AiOutlineGlobal />
            <span>Global Warming</span>
          </div>

          <div className="flexContact">
            <GiBeech />
            <span>Trees</span>
          </div>

          <div className="flexContact">
            <IoWarning />
            <span>First aid</span>
          </div>
        </div>

        <div className="childFooter">
          <h1 className="titleFooter">Our products</h1>
          <div className="flexContact">
            <span style={{ opacity: "0.8" }}>Insecticides</span>
          </div>

          <div className="flexContact">
            <span style={{ opacity: "0.8" }}>Foliar</span>
          </div>

          <div className="flexContact">
            <span style={{ opacity: "0.8" }}>Foliage</span>
          </div>
        </div>

        <div
          style={{
            marginTop: "5%",
            borderTop: "1px solid white",
            width: "100%",
            opacity: "0.3",
          }}
        ></div>
      </footer>

      <div className="flexSocial">
        <p>
          &copy; 2024 Agrio Limón. This page was created for educational
          purposes only. <br></br> All rights reserved.
        </p>
        <div className="flexMedia">
          <div>
            <h1 style={{ fontSize: "20px" }}>Follow Us</h1>
          </div>
          <div className="flexIcons">
            <FaInstagram />
            <FaFacebook />
            <FaXTwitter />
            <FaGithub />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </>
  );
}
