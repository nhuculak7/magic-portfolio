import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Nick",
  lastName: "Huculak",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Web Developer",
  avatar: "/images/avatar.jpg",
  email: "nick.huculak@pm.me",
  location: "America/Edmonton", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Polish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};
const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nhuculak7/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nick-huculak/",
  },
  {
    name: "Email",
    icon: "email",
    /*link: `mailto:${person.email}`,*/
    link: "mailto&#58;nick%2E&#37;68%&#55;5cu%6C&#37;6&#49;k&#64;pm&#37;&#50;Eme",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/",
  label: "About",
  title: `${person.name}'s Portfolio`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/nhuculak7/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
        <p>
          👋 Hiya! I'm Nick, a passionate Web Developer. 💻
          <br></br>
          <br></br>
          I have a knack for bridging the gap between non-technical needs and technical solutions, turning "wish lists"
          into functional web solutions.
          <br></br>
          <br></br>
          Whether it's creating new web pages, integrating features, or fine-tuning what's already there, I make it my
          mission to understanding the needs of non-technical stakeholders and bring their ideas to life through code
          refinement and innovative problem-solving.
          <br></br>
          <br></br>
          I thrive on continuous learning and enjoy revisiting projects with new skills to find fresh solutions. With
          expertise in HTML, CSS, PHP, JavaScript, and more, I'm equipped to contribute creatively and technically to
          any project.
        </p>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Super Channel",
        timeframe: "2019 - 2024",
        role: "Full Stack Web Developer",
        achievements: [
          <>
            Contributed to the development and deployment of new website features aligned with organizational goals,
            including assisting with the Drupal 7 to 10 migration using Bootstrap.
          </>,
          <>
            Improved content workflows by implementing CMS solutions tailored to internal needs.
          </>,
          <>
            Used Git for version control and collaboration, while continuously optimizing performance and code quality.
          </>,
          <>
            Collaborated across teams, conducted thorough testing, and maintained clear documentation to ensure quality
            and consistency.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Northern Alberta Institute of Technology",
        description: <>Completed a Diploma in Digital Media and IT, specializing in the Web Design & Development stream.</>,
      },
    ],
  },
  learning: {
    display: true, // set to false to hide this section
    title: "Online Learning",
    platforms: [
      {
        name: "Boot.dev",
        description: <>
          Completed Python course – Backend-focused online platform.
        </>,
        profileLink: 'https://www.boot.dev/u/nhuculak7',
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Web Development",
        description: <>HTML5, JavaScript, jQuery</>,
      },
      {
        title: "Styling / UI Frameworks",
        description: <>CSS3, Bootstrap, SASS</>,
      },
      {
        title: "Back-End / Database",
        description: <>PHP, MySQL, Python</>,
      },
      {
        title: "CMS / Platforms",
        description: <>Drupal, GitHub</>,
      },
      {
        title: "Analytics / Tracking",
        description: <>Google Analytics, Google Tag Manager</>,
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export {person, social, newsletter, home, about, blog, work, gallery};
