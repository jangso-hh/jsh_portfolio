import { closingData, profileData } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="n-contact">
      <div className="n-divider" />
      <p className="n-closing">{closingData.headline}</p>
      <p className="n-muted">{closingData.sub}</p>
      <p className="n-links">
        <a href={`mailto:${closingData.email}`}>✉️ {closingData.email}</a>
        {profileData.github && (
          <a href={profileData.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </p>
    </section>
  );
}
