"use client"

import { Factory, Cog, Shield, Lightbulb, Package, BarChart2, ArrowUpRight } from "lucide-react"
import "../styles/footer.css"

const services = [
  {
    title: "Production and Assembly",
    description: "Details on production processes, assembly, capacity, and product types.'",
    icon: Factory,
  },
  {
    title: "Custom Manufacturing",
    description: "Custom product creation with design and customization options.",
    icon: Cog,
  },
  {
    title: "Quality Control",
    description: "Procedures and systems in place to ensure high product quality.",
    icon: Shield,
  },
  {
    title: "Technology and Innovation",
    description: "Details on the latest manufacturing technologies and ongoing innovations.",
    icon: Lightbulb,
  },
  {
    title: "Packaging and Logistics",
    description: "Packaging and logistics for shipping to customers and distributors",
    icon: Package,
  },
  {
    title: "Consulting Market Research",
    description: "Services to help companies understand market needs and provide strategic advice.",
    icon: BarChart2,
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

