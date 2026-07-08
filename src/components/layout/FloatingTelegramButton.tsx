import { TelegramIcon } from "@/components/ui/icons";
import { TELEGRAM_URL } from "@/lib/constants";

export function FloatingTelegramButton() {
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on Telegram"
      className="fixed bottom-24 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-surface/80 text-gold-light shadow-soft backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-glow sm:bottom-8"
    >
      <TelegramIcon className="h-5 w-5" />
    </a>
  );
}
