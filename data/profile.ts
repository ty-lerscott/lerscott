export type SocialPlatform = "github" | "linkedin" | "x" | "instagram" | "email";

export interface Social {
  platform: SocialPlatform;
  href: string;
}

export interface LinkItem {
  title: string;
  href: string;
  description?: string;
  emoji?: string;
}

export interface Profile {
  name: string;
  handle: string;
  bio: string;
  avatar?: string;
  socials: Social[];
  links: LinkItem[];
}

// Edit this to change everything shown on the page.
export const profile: Profile = {
  name: "Tyler Scott",
  handle: "@ty_lerscott",
  bio: "Building things on the web. Here's where to find me.",
  avatar: "./profile_picture.png",
  socials: [
    { platform: "github", href: "https://github.com/ty-lerscott" },
    { platform: "linkedin", href: "https://www.linkedin.com/in/ty-lerscott" },
    { platform: "instagram", href: "https://instagram.com/ty_lerscott" },
    { platform: "email", href: "mailto:ty@lerscott.com" },
  ],
  links: [
    { title: "Personal website", href: "https://ty.lerscott.com", emoji: "🌐" },
    { title: "Latest project", href: "#", description: "What I'm working on now", emoji: "🚀" },
    { title: "Blog", href: "#", emoji: "✍️" },
    { title: "Resume", href: "#", emoji: "📄" },
    { title: "Book a call", href: "#", description: "30 min intro chat", emoji: "📅" },
  ],
};
