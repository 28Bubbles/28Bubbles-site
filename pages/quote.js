// pages/quote.js
import { useState } from "react";
import Link from "next/link";

export default function Quote() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "Office/Commercial", address: "", message: "" });
  const [status, setStatus] = useState("idle");

  async function submit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      // Replace URL below with your Formspree endpoint or your API endpoint
      const res = await fetch("https://formspree.io/f/your_form_id_here", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", service: "Office/Commercial", address: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(180deg,#07122a,#05273a)", color: "#fff", padding: 24, fontFamily: "Inter, system-ui, Arial" }}>
      <div style={{ maxWidth: 720, margin: "16px auto", background: "rgba(255,255,255,0.02)", padding: 20, borderRadius: 12 }}>
        <Link href="/"><a style={{ color: "#9fe8ff", textDecoration: "none" }}>← Back</a></Link>
        <h1 style={{ marginTop: 8 }}>Get a Free Quote</h1>
        <p style={{ opacity: 0.85 }}>Tell us about your job and we'll get back with a free estimate.</p>

        {status === "success" ? (
          <div style={{ padding: 16, background: "rgba(0,180,220,0.08)", borderRadius: 8 }}>Thanks — we received your request and will contact you shortly.</div>
        ) : (
          <form onSubmit={submit} style={{ marginTop: 12, display: "grid", gap: 10 }}>
            <input required placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} />
            <input required placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} />
            <input required placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={inputStyle} />
            <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} style={inputStyle}>
              <option>Office/Commercial</option>
              <option>Residential</option>
              <option>Move In/Move Out</option>
              <option>Deep Cleaning</option>
              <option>Carpet / Floor Care</option>
            </select>
            <input placeholder="Address (optional)" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} style={inputStyle} />
            <textarea placeholder="Tell us about the job" rows="4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle, minHeight: 96 }} />
            <div style={{ display: "flex", gap: 8 }}>
              <button type="submit" disabled={status === "loading"} style={{ ...ctaStyle, flex: 1 }}>{status === "loading" ? "Sending…" : "Submit Request"}</button>
              <a href="tel:+17064284238" style={{ ...ctaStyle, background: "transparent", border: "1px solid rgba(255,255,255,0.12)", padding: "10px 12px", display: "inline-flex", alignItems: "center" }}>Call</a>
            </div>
            {status === "error" && <div style={{ color: "#ffbaba" }}>There was an error. Try again or call us at 706-428-4238.</div>}
          </form>
        )}
      </div>
    </main>
  );
}

const inputStyle = { padding: "10px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", background: "transparent", color: "#fff" };
const ctaStyle = { background: "#00bcd4", color: "#002b33", padding: "10px 14px", borderRadius: 8, textDecoration: "none", fontWeight: 700 };
