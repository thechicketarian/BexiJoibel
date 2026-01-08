export const projects = [
  {
    slug: "city",
    title: "25-26 City Edition Launch",
    shortDescription:
      "Celebrating 25 seasons in Memphis with a City Edition uniform inspired by the soul of Stax Records.",
    longDescription: `
The 25–26 City Edition project was a chance to blend culture, history, and digital storytelling 
into a unified experience. I designed and developed the entire page from concept to completion, 
translating the creative direction—rooted in Stax Records and Memphis soul—into an interactive, 
performant landing experience that felt alive without overwhelming the user.

I approached the build by first mapping the narrative beats: the heritage, the uniform details, 
the player energy, and the cultural callbacks. From there, I prototyped motion studies using GSAP 
to create subtle, rhythmic animations that echoed the cadence of soul music—smooth fades, 
staggered reveals, and tempo‑driven transitions.

A major focus was performance. The creative assets were heavy (GIFs, bursts, textures), so I 
optimized loading strategies, implemented lazy loading for media, and ensured the page remained 
responsive across devices.

The final experience is a blend of brand storytelling and technical precision—an immersive 
showcase that honors Memphis culture while delivering a polished, modern digital experience.
`,
    images: [
    //   "https://s3.grizzliesapp.com/assets/custom_pages/city-edition/25-26/img/ja_bursts_optimized.gif",
    //   "https://s3.grizzliesapp.com/assets/custom_pages/city-edition/25-26/img/stax_treated.jpg",
    //   "/images/grizz-3.png",
    ""
    ],
    links: [
      {
        label: "Live demo",
        url: "https://www.nba.com/grizzlies/city-edition",
      },
      {
        label: "Figma",
        url: "https://www.figma.com/design/PzsqU12DbDMlljhq1Z9GEq/bx-flo-projects?node-id=2-7780&t=u2b4KKf5YB7Cr1x7-1",
      },
      {
        label: "Isaac Hayes Inspo Playlist",
        url: "https://open.spotify.com/playlist/37i9dQZF1EIW6LsTcpj1BF?si=a022deed325a4db3",
      },
    ],
    tags: ["React", "GSAP", "Animation", "Brand Experience"],
  },
  {
    slug: "season-tickets",
    title: "MVP Season Tickets Rebrand & Redesign",
    shortDescription:
      "Web presence redesign for the Season Tickets MVP program.",
    longDescription: `
The Season Tickets MVP project was a full refresh of the Grizzlies’ season‑tickets and loyalty experience for the 25–26 season. With the launch of our new CLAWS program, the Sales & Service team needed a clearer, more modern hub for MVPs, prospects, and reps.

I redesigned the user flow, rebuilt the page structure, and introduced a centralized hub that reduced friction across web, mobile, and MVP Central (Loyalty Portal). The new system is flexible, scalable, and built to support future loyalty updates, benefits, and campaigns.

You can explore the full project breakdown in Figma.
`,
    images: [""],
    links: [
      {
        label: "live demo - home",
        url: "https://www.nba.com/grizzlies/tickets/season-tickets",
      },
      {
        label: "live demo - loyalty",
        url: "https://www.nba.com/grizzlies/tickets/season-tickets/how-to",
      },
      {
        label: "figma",
        url: "https://www.figma.com/design/PzsqU12DbDMlljhq1Z9GEq/bx-flo-projects?node-id=2-7781&t=u2b4KKf5YB7Cr1x7-1",
      },
    ],
    embed: `
    <iframe
      title="Season Tickets MVP Pitch Deck"
      style="border: 1px solid rgba(0,0,0,0.1); height: 450px;"
      src="https://embed.figma.com/slides/EPEFlnPH20PB7qos0zXRjA/25-26-Season-Tickets-MVP-Redesign-Pitch-Deck?node-id=7-987&embed-host=share"
      allowfullscreen
    ></iframe>
  `,
    tags: ["Branding", "Design Systems", "Identity"],
  },
  {
    slug: "grizzlies-mobile-app",
    title: "Grizzlies Mobile App Redesign",
    shortDescription:
      "Designed in Memphis (by me lol), for Grizzlies fans everywhere.",
    longDescription: `I redesigned the Grizzlies mobile app during a provider transition, modernizing the interface and aligning it with business needs and fan expectations. Since launch, I’ve continued to shape the product — partnering with our PM on requirements, reviewing vendor UI as the lead engineer, and delivering features like onboarding, Game Day Mode, the Ads Carousel, the MVP Profile and wallet, and the Game Day Guide. A full breakdown of the redesign and feature work is available in the linked Figma file.`,
    images: [""],
    links: [
      {
        label: "figma",
        url: "https://www.figma.com/design/PzsqU12DbDMlljhq1Z9GEq/bx-flo-projects?node-id=4-41644&t=u2b4KKf5YB7Cr1x7-1",
      },
    ],
  },
];
