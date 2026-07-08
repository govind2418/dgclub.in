import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <Container className="pb-24 sm:pb-28">
      <Reveal type="scale">
        <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-maroon-deep via-elevated to-base px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-gold/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-ember/10 blur-2xl" />
          <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
            Your Seat at the Club is Ready
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-cream/60">
            Join thousands of players enjoying fast withdrawals, premium rewards and a truly elevated
            gaming experience.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/register/" size="lg">
              Register Now
            </Button>
            <Button href="/promotion/" variant="secondary" size="lg">
              View Promotions
            </Button>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
