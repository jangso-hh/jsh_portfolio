import { closingData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">{closingData.footer}</div>
    </footer>
  );
}
