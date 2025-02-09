"use client";

import { ArrowUpRight, MoreHorizontal, LayoutDashboard } from 'lucide-react';
import { PiWavesBold } from "react-icons/pi";
import { BiBarChart } from "react-icons/bi";
import { BsStars } from "react-icons/bs"; 
import { IoMdCopy } from "react-icons/io";
import { BsSpeedometer } from "react-icons/bs";

import "../styles/hero.css";
import img1 from "../img/img1.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">
          The Future of Manufacturing
          <br />
          with Latest Technology
        </h1>
        <p className="hero-subtitle">
          Expert tech to elevate your manufacturing. Let's take your business further
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Try Demo</button>
        </div>
        <div className="rating">
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="rating-number">5.0</span>
        </div>
        <div className="review">
          <p>from 80+ <u>reviews</u></p>
        </div>

        <div className="stats-grid">
          <div className="stats-card-wrapper">
            <div className="floating-arrow">
              <ArrowUpRight size={20} />
            </div>
            <div className="righticon1">
              <PiWavesBold size={20} />
            </div>
            <div className="righticon2">
              <BiBarChart size={20} /> 
            </div>
            <div className="lefticon2">
              <BsStars size={20} /> 
            </div>
            <div className="lefticon3">
              <IoMdCopy size={20} /> 
            </div>
            <div className="floating-arrow5">
              <BsSpeedometer size={20} /> 
            </div>
            <div className="stats-card image" style={{ backgroundImage: `url(${img1})` }}></div>
          </div>
          <div className="stats-card primary">
            <div className="stats-number">100+</div>
            <div className="stats-label">
              Our Esteemed <br />
              Clients and
              <br /> Partners
            </div>
          </div>
          <div className="stats-card secondary">
            <div className="accent-box">
              <LayoutDashboard size={24} />
            </div>
            <div className="more-menu">
              <MoreHorizontal size={20} />
            </div>
            <div className="stats-label1">
              Total project
              <span className="arrow-icon">
                <ArrowUpRight size={16} />
              </span>
              8%
            </div>
            <div className="stats-number">1951+</div>
            <div className="stats-label">Increase 126 this month</div>
          </div>
          <div className="stats-card third">
            <div className="stats-number">6+</div>
            <div className="stats-label">
              Years of <br />
              Dedicated <br />
              Services
            </div>
          </div>
          <div className="stats-card fourth">
            <div className="stats-label">
              Achieve Optimal <br /> Efficiency and <br />
              Boost Productivity
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
