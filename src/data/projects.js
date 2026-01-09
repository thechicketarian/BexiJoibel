/**
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} title
 * @property {string} shortDescription
 * @property {string} longDescription - HTML string
 * @property {string[]} images
 * @property {{label: string, url: string}[]} links
 * @property {string[]} [tags]
 * @property {string} [embed]
 */

/**
 * Factory function for creating a new Project object
 * with full IntelliSense + autocomplete support.
 *
 * @returns {Project}
 */
export function createProject() {
  return {
    slug: "",
    title: "",
    shortDescription: "",
    longDescription: "",
    images: [],
    links: [],
    tags: [],
    embed: "",
  };
}

/** @type {Project[]} */

export const projects = [
  
//Mobile App
  {
    ...createProject(),
    slug: "grizzlies-mobile-app",
    title: "Grizzlies Mobile App Redesign",
    shortDescription:
      "A redesigned mobile app now maintained and evolved as an ongoing, multi‑season evergreen product.",
    longDescription: `
<h3>Launched 10/2023 — Ongoing</h3>
<hr/>
<p>
  When I joined the Marketing Technology team as a junior engineer, the organization was preparing
  to switch mobile app providers — a rare moment that opened the door for a full redesign. With my
  background in UI/UX design and product strategy, we were able to keep the redesign in‑house,
  making it one of my first major projects at the Grizzlies.
</p>

<p>
  I was responsible for exploring a refreshed visual direction while preserving the core content
  structure of the previous app. The goal was to modernize the interface without straying too far
  from existing patterns, ensuring a smooth transition for both users and the new vendor. Working
  within these constraints pushed me to think creatively about how to evolve the app’s look and feel
  while staying aligned with organizational goals. It also strengthened my ability to communicate
  design decisions clearly to stakeholders and collaborate across teams.
</p>

<hr/>
<h3>Design Scope</h3>
<p>
  I began by auditing the existing app — content types, navigation patterns, user flows, and areas
  where fans were experiencing friction. I also aligned with broader NBA mobile app trends and what
  our target users expected from a modern team app. From there, I developed a new visual system with
  cleaner layouts, updated typography, and a more premium brand presence, all while preserving the
  functional structure stakeholders relied on.
</p>

<p>
  Throughout the redesign, I worked closely with our vendor’s product design team and engineers to
  ensure my designs aligned with their existing systems. This collaboration helped me understand
  technical constraints and opportunities on both sides, shaping a more efficient and modular design
  system. I kept their component library in mind so their engineering team could easily implement
  reusable components during the transition.
</p>

<p>
  We launched the redesigned app in October 2023 with a strong foundation for future growth — a
  modern baseline we could continue to iterate on as fan needs and organizational priorities
  evolved.
</p>

<hr/>
<h3>Engineering Scope</h3>
<p>
  I'm proud to say that I’ve led all custom design requests for the mobile app since the start of
  this new app iteration, partnering closely with our Product Manager to evaluate requirements,
  refine user flows, and ensure our solutions meet both user and business needs. In 2025, I was
  promoted to Product Engineering, formalizing the level of ownership I had already been operating
  at while expanding my skillset. I also serve as the lead engineer when reviewing out‑of‑the‑box UI
  proposals from our vendor, ensuring that any new components or features align with our brand, user
  expectations, and long‑term product strategy.
</p>

<p>
This product has been central to my career — I was trusted to take ownership early as a junior engineer, and it has grown with me as I’ve advanced into Product Engineering. I’m excited to continue guiding its evolution as it scales beyond its original scope.
</p>

    `,
    images: [""],
    links: [
      {
        label: "IOS ↗",
        url: "https://apps.apple.com/us/app/memphis-grizzlies/id787339433",
      },
      {
        label: "android ↗",
        url: "https://play.google.com/store/apps/details?id=com.yinzcam.nba.grizzlies&pli=1",
      },
      {
        label: "figma ↗",
        url: "https://www.figma.com/design/PzsqU12DbDMlljhq1Z9GEq/bx-flo-projects?node-id=4-41644&t=u2b4KKf5YB7Cr1x7-1",
      },
    ],
  },

  //Schedule
  {
    ...createProject(),
    slug: "schedule",
    title: "Schedule",
    shortDescription:
      "A fully custom, data‑driven schedule experience built to replace the league CMS template.",
    longDescription: `
  <h3>Launched 11/2023–Ongoing</h3>
<hr/>
<p>
  Leadership requested a fully custom schedule page to replace the league‑provided CMS template,
  which limited our flexibility, branding, and ability to integrate team‑specific promotional data.
  This opened the door for a ground‑up rebuild — one that could merge multiple data sources, support
  partner requirements, and serve as a scalable foundation for every game‑driven experience on
  Grizzlies.com.
</p>

<p>
  The result is a comprehensive, user‑friendly hub for game information, promotions, theme nights,
  uniforms, ticketing, and playoff logic. It was designed to be modular, readable, and adaptable,
  giving us full control over how we present our season.
</p>

<hr/>
<h3>Design Scope</h3>
<p>
  I led the design phase independently, creating a flexible layout system that could accommodate a
  wide range of game data without overwhelming the user. The structure supports dynamic content —
  from promotions to partner placements — while maintaining a clean, premium presentation across the
  entire season.
</p>

<p>
  The system also needed to support future variations, which became essential when the Single Game
  Tickets experience was introduced. Because the schedule was designed with modularity in mind, it
  was able to power a more curated shopping flow without requiring a rebuild.
</p>

<hr/>
<h3>Engineering Scope</h3>
<p>
  On the engineering side, I architected a custom data pipeline that merges NBA schedule data with
  our internal promotional metadata, creating a single enriched schedule object that powers the
  entire page. Since this was a significant lift for our team, I collaborated closely with our
  senior developer during development to establish a sustainable, long‑term foundation for the
  product.
</p>

<p>
  Together, we built an architecture capable of withstanding league API changes, supporting new data
  requirements, and remaining stable across seasons. This included caching strategies, defensive
  data handling, and patterns that allow the page to adapt gracefully to evolving business needs.
</p>

<p>
  That stability meant the system didn’t require major rescoping for several seasons. When the
  business introduced a new need in 2025 — a more curated shopping experience for Single Game
  Tickets — I was able to take full ownership of that variation. These enhancements include there, expanded filtering, layout logic, and promotional tagging. The schedule page’s architecture made this possible, and it now serves as the backbone of our broader ticketing and promotional ecosystem.
</p>
<p> Curious how this foundation evolved? Explore the full <a href="/projects/single-game-tickets">Single Game Tickets build</a>. </p>
  `,
    images: [""],
    links: [
      {
        label: "view schedule ↗",
        url: "https://www.nba.com/grizzlies/schedule",
      },
    ],
    tags: ["Web", "Engineering", "Design", "API", "Data Systems"],
  },

  //Season Tickets
  {
    ...createProject(),
    slug: "season-tickets",
    title: "MVP Season Tickets",
    shortDescription:
      "Web presence redesign for the Season Tickets MVP loyalty program.",
    longDescription: `
<h3>Launched 2025 — Ongoing</h3>
<p>
  The Season Tickets MVP project was part of a department‑wide off‑season push for the start of the
  25–26 season. With the launch of our new MVP Loyalty Program, CLAWS, and outdated legacy branding,
  the Sales & Service team needed a refreshed, unified experience for multiple user types. Our
  previous setup was extremely fragmented, with one‑off pages scattered across web and mobile, so I
  was asked to consolidate the entire ecosystem into a single, cohesive hub.
</p>

<p>
  I was tasked with gutting the existing user flow and design to reintroduce the season‑tickets
  environment, elevate the experience, and create a clearer, more intuitive path for users and reps.
</p>
<hr/>
<h3>Design Scope</h3>
<p>
  I proposed a centralized hub on web that flexed to each audience while maintaining a cohesive,
  premium experience. This required restructuring the information architecture, defining new user
  states, and creating a layout system that could adapt to different journeys without feeling
  fragmented.
</p>

<p>
  Because this hub became the new home for all things Season Tickets (MVP) and loyalty, I
  streamlined the pathways between web, mobile, and MVP Central (Fortress - Loyalty Platform). This reduced the number
  of clicks and pages required for users to reach key actions. I also designed a dedicated page for
  existing MVPs, giving them quick links, FAQs, and a clear guide to the new CLAWS program.
</p>

<p>
  This project marked the reintroduction of the season‑tickets environment on Grizzlies.com. I led
  the brand pivot across web and app, creating a bridge between Sales & Service needs and a clean,
  informative experience for users.
</p>

<hr/>
<h3>Engineering Scope</h3>
<p>
  A core priority for this hub was building a scalable, flexible system. I designed the structure so
  the page could shift seamlessly to support any Sales & Service initiative — whether a renewal
  push, a new program launch, or updated benefits and tiers. This modular approach ensures the hub
  can evolve without requiring a full redesign.
</p>

<p>
  I developed the page with a component‑driven architecture that supports dynamic content updates,
  personalized user states, and cross‑platform pathways between web, mobile, and MVP Central. The
  result is a system that adapts quickly to campaign needs while maintaining performance,
  consistency, and clarity across the entire MVP ecosystem.
</p>

    `,
    images: [""],
    links: [
      {
        label: "View Season Tickets ↗",
        url: "https://www.nba.com/grizzlies/tickets/season-tickets",
      },
      {
        label: "View MVP How-To ↗",
        url: "https://www.nba.com/grizzlies/tickets/season-tickets/how-to",
      },
      {
        label: "figma ↗",
        url: "https://www.figma.com/design/PzsqU12DbDMlljhq1Z9GEq/bx-flo-projects?node-id=2-7781&t=u2b4KKf5YB7Cr1x7-1",
      },
    ],
    embed: `
      <iframe
        title="Season Tickets MVP Pitch Deck"
        style="border: 1px solid rgba(0,0,0,0.1); height: 450px; width: 100%;"
        src="https://embed.figma.com/slides/EPEFlnPH20PB7qos0zXRjA/25-26-Season-Tickets-MVP-Redesign-Pitch-Deck?node-id=7-987&embed-host=share"
        allowfullscreen
      ></iframe>
    `,
    tags: ["Branding", "Design Systems", "Identity"],
  },


  //City Edition 25-26
  {
    ...createProject(),
    slug: "city",
    title: "25-26 City Edition Launch",
    shortDescription:
      "Celebrating 25 seasons in Memphis with a City Edition uniform inspired by the soul of Stax Records.",
    longDescription: `
<h3>Launched 2025</h3>
<hr/>
<p>
  The 25–26 City Edition project was a chance to blend culture, history, and digital storytelling
  into a unified experience. I designed and developed the entire page from concept to completion,
  translating the creative direction—rooted in Stax Records, Isaac Hayes, and Memphis soul—into an
  interactive, performant landing experience that felt alive without overwhelming the user.
</p>

<hr/>
<h3>Design Scope</h3>
<p>
  I kicked off the project with a concept package from our creative team: a uniform‑details
  breakdown, the campaign concept, and the typography and color style guide. Using that foundation,
  I curated the full visual direction, layout system, and interaction patterns for the page.
</p>

<p>
  I mapped the narrative beats early—heritage, uniform details, player energy, and cultural
  callbacks—and used them to guide the flow of the experience. From there, I prototyped motion
  studies in GSAP to create subtle, rhythmic animations that echoed the cadence of soul music:
  smooth fades, staggered reveals, and tempo‑driven transitions.
</p>

<hr/>
<h3>Engineering Scope</h3>
<p>
  Performance was a major focus. The creative assets were heavy (GIFs, bursts, textures), so I
  optimized loading strategies, implemented lazy loading for media, and ensured the page remained
  responsive across devices. I also structured the build to support modular content sections,
  allowing the narrative to scale without compromising load time or interaction smoothness.
</p>

<p>
  I developed the page end‑to‑end, ensuring the motion system, media handling, and layout logic
  worked seamlessly together. The result is a landing experience that feels expressive and dynamic
  while still meeting performance and accessibility standards.
</p>
<p class="system-tag">
  <span class="wiggle-star">✦</span>
  <a href="https://www.nba.com/grizzlies/city-edition#games" target="_blank" rel="noopener">City Games</a>
  are powered by the
  <a href="/projects/single-game-tickets#schedule-context">Grizz Schedule Context</a>.
</p>

    `,
    images: [""],
    links: [
      { label: "view city ↗", url: "https://www.nba.com/grizzlies/city-edition" },
      {
        label: "figma breakdown ↗",
        url: "https://www.figma.com/design/PzsqU12DbDMlljhq1Z9GEq/bx-flo-projects?node-id=2-7780&t=u2b4KKf5YB7Cr1x7-1",
      },
      {
        label: "Inspo Board ↗",
        url: "https://pin.it/139QQRBZ1",
      },
      {
        label: "Isaac Hayes inspo Playlist ↗",
        url: "https://open.spotify.com/playlist/37i9dQZF1EIW6LsTcpj1BF?si=a022deed325a4db3",
      },
    ],
    tags: ["React", "GSAP", "Animation", "Brand Experience"],
  },

  //Single Game Tickets
  {
    ...createProject(),
    slug: "single-game-tickets",
    title: "Single Game Tickets",
    shortDescription:
      "A net-new Single Game Tickets experience focused on clarity, hierarchy, and a smoother path to purchase for every type of fan.",
    longDescription: `
<h3>Launched 11/2025 — Ongoing</h3>
<p>
  The Single Game Tickets redesign was an opportunity to rethink how fans browse, filter, and
  understand ticket options across the season. My core requirements were to create content harmony
  in the UI and establish a clear information hierarchy that made every game easy to scan.
</p>
<p>
  Previously, Single Game Tickets simply redirected users to our <a href="https://www.nba.com/grizzlies/schedule" target="_blank" rel="noopener noreferrer">schedule ↗</a>
  page (<a href="/projects/schedule">see project details</a>). As part of our KPIs for this season,
  our single‑game strategy outgrew that mirrored solution. I was asked to use the same source of
  truth—the NBA API merged with our promotional schedule data—but design a new, more sales‑driven
  experience.
</p>
<hr/>
<h3>Design Scope</h3>
<p>
  The page needed to adapt dynamically based on ticket offers, promotions, and partnership
  requirements. Since this is an anniversary season with three distinct creative looks—City,
  Classic, and Core—we also needed the flexibility to theme each card and showcase the vibe more
  prominently throughout the experience.
</p>
<p>
  The final design balances clarity and personality: a layout that feels modern and readable, paired
  with subtle motion and team‑driven visual cues. It supports a wide range of fans—from casual
  attendees to die‑hard season planners—while aligning with broader ticketing and marketing goals.
</p>
<p>
  The most challenging part of this build was fitting all required information into each game card
  while maintaining a clean, harmonious layout. I love modular design work, but this one pushed me
  to think even more systematically. I almost got grey hairs figuring this one out. LOL
</p>
<hr/>
<h3>Engineering Scope</h3>
<p id="schedule-context">
On the technical side, I created a new strategy for Single Game Tickets by expanding our promotional schedule data and building what I call the “Master Schedule API.” This enhanced API merges our league‑managed WordPress CMS, the NBA Content API, and our in‑house promotional Google Sheet. The result is a fully enriched game object that I can export as a shared “Schedule Context” to any page that needs schedule data.
</p>
<p>
  This ensures all game‑related landing pages work in tandem and pull from one source of truth.
  I also programmed the spreadsheet to double as a lightweight CMS through a tagging system for
  temporary pushes like ticket offers, promotions, theme nights, ticket packs, and manual data
  inputs.
</p>
<p>
These tags fuel the filtering logic and power dynamic UI states and query parameters, enabling expandable cards that show or hide pertinent information. This system also gives non‑technical team members the ability to update the Schedule Context quickly—without requiring any code changes from me.
</p>
<p class="system-tag">
  Pages Powered by Grizz Schedule Context.
  </br>
  <a href="https://www.nba.com/grizzlies/watch" target="_blank" rel="noopener">  <span class="wiggle-star">✦</span>Watch ↗</a>
</p>
<hr/>
<h3>A True Win/Win</h3>
<p>
  This project streamlined both the fan‑facing experience and the internal workflow behind single game ticket promotions, creating a smoother, more efficient system end‑to‑end.
</p>
  `,
    images: [""],
    links: [
      {
        label: "View Single Game Tickets ↗",
        url: "https://www.nba.com/grizzlies/single-game-tickets",
      },
      {
        label: "Inspo Board ↗",
        url: "https://pin.it/1CG3Xm4lQ",
      },
    ],
    tags: ["UI/UX", "Information Architecture", "React", "Ticketing"],
  },
];


