import { closingData, profileData } from "@/data/portfolio";

export default function Contact() {
  return (
    <section className="sec contact" id="contact">
      <div className="container">
        <h2 className="closing">{closingData.headline}</h2>
        <p className="closing-sub">{closingData.sub}</p>
        <div className="contact-actions">
          <a className="btn primary" href={`mailto:${closingData.email}`}>
            {closingData.email}
          </a>
          {profileData.github && (
            <a className="btn" href={profileData.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
