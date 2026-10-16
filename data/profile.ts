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
  isExternal?: boolean;
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
    { title: "Blog", href: "https://substack.com/@ty1erscott", emoji: "✍️" },
    { title: "Personal Website", href: "https://ty.lerscott.com", emoji: "🌐" },
    { title: "Latest project", href: "https://bsky.app/profile/ty-lerscott.bsky.social/post/3mfpde3h3tk2w", description: "What I'm working on now", emoji: "🚀" },
    { title: "Resume", href: "./resume.pdf", emoji: "📄", isExternal: true },
    { title: "Book a call", href: "https://calendly.com/ty-lerscott/15min", description: "15 min intro chat", emoji: "📅" },
  ],
};
