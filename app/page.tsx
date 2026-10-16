import { profile } from "@/data/profile";
import { SocialIcon } from "@/components/SocialIcon";
import styles from "./page.module.css";

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function isExternal(obj: { href: string; isExternal?: boolean }): boolean {
  return obj.href.startsWith("http") || !!obj.isExternal;
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <header className={styles.header}>
          {profile.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className={styles.avatar} src={profile.avatar} alt={profile.name} />
          ) : (
            <div className={styles.avatar} aria-hidden="true">
              {initials(profile.name)}
            </div>
          )}
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.handle}>{profile.handle}</p>
          <p className={styles.bio}>{profile.bio}</p>
        </header>

        <nav className={styles.socials} aria-label="Social links">
          {profile.socials.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              className={styles.social}
              target={isExternal(social) ? "_blank" : undefined}
              rel={isExternal(social) ? "noopener noreferrer" : undefined}
            >
              <SocialIcon platform={social.platform} />
            </a>
          ))}
        </nav>

        <ul className={styles.links}>
          {profile.links.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                className={styles.link}
                target={isExternal(link) ? "_blank" : undefined}
                rel={isExternal(link) ? "noopener noreferrer" : undefined}
              >
                {link.emoji && (
                  <span className={styles.emoji} aria-hidden="true">
                    {link.emoji}
                  </span>
                )}
                <span className={styles.linkText}>
                  <span className={styles.linkTitle}>{link.title}</span>
                  {link.description && <span className={styles.linkDesc}>{link.description}</span>}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <footer className={styles.footer}>&copy; {new Date().getFullYear()} {profile.name}</footer>
      </div>
    </main>
  );
}
