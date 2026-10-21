import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pest Patrol CDO | Termite Defense in Cagayan de Oro",
  description:
    "Subterranean termite chemical barriers, soil warranty treatments, and odorless pest eradication for residences and businesses across Cagayan de Oro.",
};

export default function LP2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#e2e2e2] text-[#121212] selection:bg-[#7d0c14] selection:text-white -mb-16 sm:mb-0">
      {children}
    </div>
  );
}
