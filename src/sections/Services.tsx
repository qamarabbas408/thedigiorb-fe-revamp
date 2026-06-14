'use client';

import { useState } from "react";
import { motion } from "framer-motion";

interface Service {
  title: string;
  number: string;
  color: string;
  description: string;
  cta?: string;
}

const services: Service[] = [
  {
    title: "UI&UX",
    number: "01",
    color: "#F9BE91",
    description:
      "Crafting intuitive and visually stunning interfaces that delight users and drive engagement across all digital touchpoints.",
  },
  {
    title: "SEO",
    number: "02",
    color: "#FCE3CC",
    description:
      "Optimizing your digital presence to rank higher, attract more traffic, and convert visitors into loyal customers.",
  },
  {
    title: "Web Design",
    number: "03",
    color: "#FAA96C",
    description:
      "Designing responsive, accessible, and conversion-focused websites that reflect your brand identity and business goals.",
  },
  {
    title: "Mobile App Design",
    number: "04",
    color: "#FA984F",
    description:
      "Creating seamless mobile experiences with pixel-perfect designs tailored for iOS and Android platforms.",
  },
  {
    title: "Web Development",
    number: "05",
    color: "#F78B3F",
    description:
      "Building high-performance web applications using cutting-edge technologies and scalable architectures.",
  },
  {
    title: "App Development",
    number: "06",
    color: "#F48031",
    description:
      "Developing robust native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    title: "Branding",
    number: "07",
    color: "#F26D0E",
    description:
      "Our branding services help businesses establish a strong and memorable identity. We design logos, visual systems, brand guidelines, and marketing materials that communicate your brand values clearly and consistently across all digital and print platforms.",
    cta: "Let's Create",
  },
];

const WIDTH_PERCENTS = [65, 70, 75, 80, 85, 90, 100];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number>(6);

  const handleActivate = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      style={{
        background: "#fff",
        padding: "80px 20px 120px",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1030px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            margin: "0 auto 16px",
            maxWidth: "750px",
            fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#000",
            fontFamily: "'Inter', sans-serif",
            textAlign: "center",
            letterSpacing: "-0.02em",
          }}
        >
          We design with purpose we build with intelligence
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          style={{
            margin: "0 auto 60px",
            maxWidth: "650px",
            fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "#555",
            fontFamily: "'Inter', sans-serif",
            textAlign: "center",
          }}
        >
          We create future-ready brands, smart SaaS interface, and high
          converting websites that leave a lasting impact
        </motion.p>

        {/* Accordion Stack */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {services.map((service, index) => {
            const isExpanded = activeIndex === index;
            const isPrevExpanded = index > 0 && activeIndex === index - 1;

            return (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 * index,
                  ease: "easeOut",
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                }}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 0,
                }}
              >
                <div
                  className="services-card"
                  onMouseEnter={() => handleActivate(index)}
                  onClick={() => handleActivate(index)}
                  style={{
                    width: `${WIDTH_PERCENTS[index]}%`,
                    zIndex: services.length - index,
                    position: "relative",
                    borderRadius: index === services.length - 1 ? "28px 28px 0 0" : "0",
                    background: service.color,
                    padding: "20px 28px",
                    cursor: "pointer",
                    transition:
                      "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                    minHeight: "60px",
                    boxShadow:
                      index === services.length - 1
                        ? "0 12px 40px rgba(242, 109, 14, 0.25)"
                        : "0 4px 12px rgba(0,0,0,0.06)",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Header row */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        color: "#fff",
                        fontFamily: "'Inter', sans-serif",
                        textTransform: "uppercase",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {service.title}
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(0.8rem, 1.1vw, 0.95rem)",
                        fontWeight: 700,
                        color: "#fff",
                        fontFamily: "'Inter', sans-serif",
                        transition: "color 0.3s ease",
                        opacity: 0.8,
                      }}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Expanded content */}
                  <motion.div
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{
                      height: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.25, delay: isExpanded ? 0.1 : 0 },
                    }}
                    style={{ overflow: "hidden" }}
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 10 }}
                      transition={{ duration: 0.3, delay: isExpanded ? 0.15 : 0 }}
                      style={{
                        margin: "16px 0 0",
                        fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
                        fontWeight: 400,
                        lineHeight: 1.75,
                        color: index <= 2 ? "#333" : "#fff",
                        fontFamily: "'Inter', sans-serif",
                        maxWidth: "580px",
                      }}
                    >
                      {service.description}
                    </motion.p>

                    {service.cta && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 10 }}
                        transition={{ duration: 0.3, delay: isExpanded ? 0.25 : 0 }}
                      >
                        <button
                          style={{
                            marginTop: "24px",
                            padding: "14px 36px",
                            borderRadius: "50px",
                            border: "none",
                            background: "#fff",
                            color: "#F26D0E",
                            fontWeight: 700,
                            fontSize: "0.9rem",
                            letterSpacing: "0.04em",
                            cursor: "pointer",
                            fontFamily: "'Inter', sans-serif",
                            transition:
                              "transform 0.2s ease, box-shadow 0.2s ease",
                          }}
                          onMouseOver={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.transform =
                              "translateY(-2px)";
                            (e.currentTarget as HTMLButtonElement).style.boxShadow =
                              "0 8px 24px rgba(0,0,0,0.15)";
                          }}
                          onMouseOut={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.transform =
                              "translateY(0)";
                            (e.currentTarget as HTMLButtonElement).style.boxShadow =
                              "none";
                          }}
                        >
                          {service.cta}
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .services-card {
            width: 100% !important;
          }
        }
        @media (max-width: 640px) {
          .services-card {
            border-radius: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
