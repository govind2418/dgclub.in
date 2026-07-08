import Link from "next/link";

export function FloatingRegisterButton() {
  return (
    <Link
      href="/register/"
      className="fixed bottom-24 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-base shadow-gold-glow transition-all duration-300 hover:-translate-y-1 hover:bg-gold-light sm:hidden"
      aria-label="Register now"
    >
      <span className="text-lg font-bold">+</span>
    </Link>
  );
}
