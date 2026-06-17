import { profileData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-muted sm:px-6">
        <p>
          © {profileData.name} ({profileData.nameEn})
        </p>
        <p className="mt-1">Built with Next.js · Tailwind CSS · Framer Motion</p>
      </div>
    </footer>
  );
}
