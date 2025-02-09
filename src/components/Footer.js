"use client"

import { ArrowUpRight } from "lucide-react";
import { GoNorthStar } from "react-icons/go";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FiTool } from "react-icons/fi";
import { FaShieldAlt } from "react-icons/fa";
import { BsBox, BsGraphUp } from "react-icons/bs";
import "../styles/footer.css"

const services = [
  {
    title: "Production and Assembly",
    description: "Details on production processes, assembly, capacity, and product types.'",
    icon: GoNorthStar,
  },
  {
    title: "Custom Manufacturing",
    description: "Custom product creation with design and customization options.",
    icon: HiOutlineViewGrid,
  },
  {
    title: "Quality Control",
    description: "Procedures and systems in place to ensure high product quality.",
    icon: FiTool,
  },
  {
    title: "Technology and Innovation",
    description: "Details on the latest manufacturing technologies and ongoing innovations.",
    icon: FaShieldAlt,
  },
  {
    title: "Packaging and Logistics",
    description: "Packaging and logistics for shipping to customers and distributors",
    icon: BsBox,
  },
  {
    title: "Consulting Market Research",
    description: "Services to help companies understand market needs and provide strategic advice.",
    icon: BsGraphUp,
  },
]

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Efficient and Integrated <br></br>Manufacturing Services</h2>
          <p className="services-subtitle">Simple operations with our efficient, quality-focused services</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <IconComponent size={48} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-arrow">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

