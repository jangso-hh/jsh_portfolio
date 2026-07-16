import { docFooterData } from "@/data/portfolio";

/** original.html 의 footer */
export default function Footer() {
  return (
    <footer className="docfooter">
      <span>{docFooterData.left}</span>
      <span>{docFooterData.right}</span>
    </footer>
  );
}
