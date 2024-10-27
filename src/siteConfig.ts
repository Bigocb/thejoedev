export const config = {
    siteTitle: "Sujay Kundu",
    siteDescription: "Full Stack Web Developer",
    siteKeywords: "portfolio, website, nextjs",
    siteUrl: "https://next-portfolio.vercel.app",
    siteLanguage: "en-US",
    authorName: "Sujay Kundu",
    authorEmail: "sujaykundu@gmail.com",
    authorBio: "I'm a full stack web developer and a wanderlust, based in India. If you are looking for a developer, I'm available for hire.",
    routes: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
      submenu: [
        {
          name: "Web Development",
          path: "/portfolio/web-development",
        },
        {
          name: "Mobile Apps",
          path: "/portfolio/mobile-apps",
        },
        {
          name: "Design Projects",
          path: "/portfolio/design",
        },
      ],
    },
    {
      name: "Gallery",
      path: "/gallery",
      submenu: [
        {
          name: "Photography",
          path: "/gallery/photography",
        },
        {
          name: "Digital Art",
          path: "/gallery/digital-art",
        },
      ],
    },
  ]
}
