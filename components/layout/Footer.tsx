import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/lib/data";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/BeeZero.bo",
    icon: "/icons/shared/facebook.png",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/beezero.bo/",
    icon: "/icons/shared/instagram.png",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/beezero-bo/posts/",
    icon: "/icons/shared/linkedin.png",
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-gray px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <Link href="/" className="relative h-9 w-32">
          <Image
            src="/images/shared/logo.png"
            alt="Bee Zero"
            fill
            sizes="128px"
            className="object-contain object-left"
          />
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold">Síguenos</span>
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-9 w-9 overflow-hidden rounded-full transition-opacity hover:opacity-80"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </a>
            ))}
          </div>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm font-semibold transition-opacity hover:opacity-80"
        >
          <span className="text-right">
            ¿Tienes alguna consulta?
            <br />
            <span className="font-bold uppercase underline">Escríbenos</span>
          </span>
          <span className="relative h-10 w-10 shrink-0">
            <Image
              src="/icons/shared/whatsapp.png"
              alt="WhatsApp"
              fill
              sizes="40px"
              className="object-contain"
            />
          </span>
        </a>
      </div>
    </footer>
  );
}
