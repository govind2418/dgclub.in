import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CoinIcon } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <Container className="flex min-h-[80vh] flex-col items-center justify-center py-24 text-center">
      <CoinIcon className="h-14 w-14 opacity-80" />
      <p className="mt-8 font-heading text-7xl font-extrabold text-gold-light sm:text-8xl">404</p>
      <h1 className="mt-4 font-heading text-2xl font-semibold text-cream sm:text-3xl">
        This Table Doesn&apos;t Exist
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/55">
        The page you're looking for may have moved or never existed. Let's get you back to the club.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/" size="lg">
          Back to Home
        </Button>
        <Button href="/dgclub-game/" variant="secondary" size="lg">
          Explore Games
        </Button>
      </div>
    </Container>
  );
}
