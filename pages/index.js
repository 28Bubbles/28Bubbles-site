import { useState } from "react";

export default function Home() {
  return (
    <main
      style={{
        background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Floating bubbles animation */}
      <div className="bubbles-container" style={{ position: "relative", height: "150px" }}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              position: "absolute",
              bottom: "-20px",
              left: `${Math.random() * 100}%`,
              width: `${10 + Math.random() * 30}px`,
              height: `${10 + Math.random() * 30}px`,
              background: "rgba(255, 255, 255, 0.3)",
              borderRadius: "50%",
              animation: `rise ${4 + Math.random() * 6}s linear infinite`,
            }}
          ></div>
        ))}
      </div>

      {/* Logo */}
      <img
        src="/logo-192.png"
        alt="28Bubbles Logo"
        style={{ width: "200px", margin: "20px auto", display: "block" }}
      />

      {/* Header + CTA */}
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>
        Welcome to 28Bubbles
      </h1>

      <button
        style={{
          margin: "20px auto",
          display: "block",
          padding: "12px 24px",
          background: "#00aaff",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Get a Free Quote
      </button>

      {/* Contact Info */}
      <p style={{ textAlign: "center" }}>Licensed & Insured | Guaranteed Clean</p>
      <p style={{ textAlign: "center" }}>📞 706-428-4238</p>
      <p style={{ textAlign: "center" }}>
        ✉️ support@28bubbles.com | sales@28bubbles.com
      </p>

      {/* Services Section */}
      <section style={{ marginTop: "40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Our Commercial & Residential Cleaning Services
        </h2>
        <ul style={{ maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
          <li>Deep Cleaning</li>
          <li>Move-In / Move-Out Cleaning</li>
          <li>Office Cleaning</li>
          <li>Rental / Airbnb Cleaning</li>
          <li>Carpet & Floor Care</li>
          <li>Post-Construction Cleanup</li>
        </ul>
      </section>

      {/* Global Styles for animations */}
      <style>{`
        @keyframes rise {
          0% { transform: translateY(0); opacity: 0.4; }
          100% { transform: translateY(-180px); opacity: 0; }
        }

        @media (max-width: 600px) {
          h1 { font-size: 1.6rem; }
          h2 { font-size: 1.2rem; }
        }
      `}</style>
    </main>
  );
}



