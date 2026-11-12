
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Gamepad2,
  GraduationCap,
  Mail,
  Palette,
  UserRound,
} from "lucide-react";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

type Section =
  | "projects"
  | "experience"
  | "development"
  | "design"
  | "about"
  | "contact";

type ArtKind =
  | "farm"
  | "food"
  | "research"
  | "bridge"
  | "event"
  | "arcade";

// ─────────────────────────────────────────────
// LINKS
// ─────────────────────────────────────────────

const FIGMA_URL =
  "https://www.figma.com/design/teXwJvAUaFwFebbv5DdB9j/Debbie-Kaburu-Portfolio";

const EMAIL = "deborahkaburu27@gmail.com";

// ─────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────

const sections = [
  { id: "projects", label: "Projects", icon: Gamepad2 },
  {
    id: "experience",
    label: "Experience",
    icon: BriefcaseBusiness,
  },
  {
    id: "development",
    label: "Development & Skills",
    icon: Code2,
  },
  { id: "design", label: "Design", icon: Palette },
  { id: "about", label: "About Me", icon: UserRound },
  { id: "contact", label: "Contact", icon: Mail },
] as const;

// These positions match the original studio artwork.
const hotspots: {
  id: Section;
  label: string;
  hint: string;
  left: string;
  top: string;
  width: string;
  height: string;
}[] = [
  {
    id: "projects",
    label: "MY WORK",
    hint: "Explore projects",
    left: "35.5%",
    top: "37.5%",
    width: "9%",
    height: "13%",
  },
  {
    id: "development",
    label: "CODE CORNER",
    hint: "Development & skills",
    left: "37%",
    top: "48.5%",
    width: "11%",
    height: "6%",
  },
  {
    id: "design",
    label: "DESIGN CORNER",
    hint: "Design & Figma",
    left: "57%",
    top: "19%",
    width: "14%",
    height: "20%",
  },
  {
    id: "experience",
    label: "THE STORY SO FAR",
    hint: "Professional experience",
    left: "71%",
    top: "22%",
    width: "18%",
    height: "43%",
  },
  {
    id: "about",
    label: "A LITTLE ABOUT ME",
    hint: "Education & more",
    left: "23%",
    top: "67%",
    width: "14%",
    height: "8%",
  },
  {
    id: "contact",
    label: "SAY HELLO!",
    hint: "Get in touch",
    left: "45%",
    top: "43%",
    width: "6%",
    height: "9%",
  },
];

// ─────────────────────────────────────────────
// DEBBIE'S CAT — DIALOGUE
// ─────────────────────────────────────────────

const catMessages = [
  "Psst... welcome to Debbie's Desk! ♡",
  "Meow! Click the computer to explore Debbie's projects.",
  "Fun fact! Debbie plays both violin and cello. ♫",
  "The wall artwork leads to her Figma designs!",
  "Did you know? The first computer bug was an actual moth!",
  "Debbie loves turning creative designs into working code!",
  "The bookshelf holds Debbie's adventures so far. 📚",
  "Want to say hello? Try the desk accessories!",
  "She's exploring AI, computer vision and food freshness!",
  "A pixel is a tiny picture element. You're looking at thousands!",
  "Fun fact: Debbie enjoys combining creativity and technology!",
  "Psst... there are hidden things to explore in this room!",
];

const catSectionMessages: Record<Section, string> = {
  projects:
    "Ooh, project time! Debbie builds websites, mobile apps and AI tools!",
  experience:
    "The bookshelf has stories! Take a look at Debbie's experience.",
  development:
    "Code corner unlocked! Curious about her technical skills?",
  design:
    "Design time! The wall artwork leads to her Figma portfolio!",
  about:
    "Here's a secret: Debbie plays both violin and cello. ♫",
  contact:
    "Have an idea? Debbie would love to hear from you! ♡",
};

// ─────────────────────────────────────────────
// PROJECT DATA
// ─────────────────────────────────────────────

const projects: {
  title: string;
  category: string;
  description: string;
  tags: string[];
  link?: string;
  linkText?: string;
  art: ArtKind;
}[] = [
  {
    title: "KilimoCash",
    category: "AgriTech / Product Innovation",
    description:
      "A mobile-first farm financial management concept helping farmers track income, expenses and cash flow. Developed through customer discovery, UX research and product validation at the Female Founders Academy.",
    tags: ["AgriTech", "Product Design", "UX Research"],
    link: "https://lnkd.in/p/dJe9Ztkt",
    linkText: "View award feature",
    art: "farm",
  },
  {
    title: "Food Spoilage Detection",
    category: "AI / Mobile Development",
    description:
      "An ongoing industrial project developing a mobile application for food freshness assessment, using image capture, CNN-based classification and offline access.",
    tags: ["Flutter", "Dart", "CNN", "Computer Vision"],
    link: "https://github.com/Deborah-dev-lab/food-spoilage-detection",
    linkText: "View GitHub repository",
    art: "food",
  },
  {
    title: "E. coli Antibiotic Resistance",
    category: "Bioinformatics / Research",
    description:
      "An analysis of E. coli genome assemblies using Python, Biopython and NCBI data to explore genomic characteristics relevant to antibiotic resistance research.",
    tags: ["Python", "Biopython", "Data Analytics"],
    link: "https://github.com/Deborah-dev-lab/ecoli-antibiotic-resistance-analysis",
    linkText: "View GitHub repository",
    art: "research",
  },
  {
    title: "Bridge Africa",
    category: "University Project",
    description:
      "A startup–investor platform concept connecting African founders with investors. Explored discovery journeys, platform navigation and user interface design.",
    tags: ["React", "MongoDB", "UI/UX"],
    art: "bridge",
  },
  {
    title: "Pamoja Play",
    category: "Hackathon",
    description:
      "An event-management prototype developed during the Africa's Talking Women in Tech Nairobi hackathon, including working SMS integration.",
    tags: ["Hackathon", "SMS Integration", "Prototyping"],
    art: "event",
  },
  {
    title: "JengaSec Arcade",
    category: "Cybersecurity / Hackathon",
    description:
      "A collaborative cybersecurity hackathon project involving practical problem-solving and interactive technical challenges.",
    tags: ["Cybersecurity", "Collaboration", "Development"],
    art: "arcade",
  },
];

// ─────────────────────────────────────────────
// EXPERIENCE DATA
// ─────────────────────────────────────────────

const experiences = [
  {
    title: "Student Researcher & Data Analyst",
    organisation:
      "Strathmore University — Bioinformatics Research",
    date: "Sept 2026 – Present",
    description:
      "Academic bioinformatics research exploring antibiotic resistance among Escherichia coli strains.",
    points: [
      "Analysed 9 E. coli genome assemblies containing 15 DNA sequence records from NCBI RefSeq using Python and Biopython in Google Colab.",
      "Processed approximately 46 million nucleotide bases to calculate genome lengths, nucleotide composition and GC content.",
      "Validated calculated genome lengths against source metadata, achieving exact agreement across all 9 assemblies.",
      "Checked duplicate accessions, missing values and ambiguous nucleotide symbols.",
      "Produced descriptive statistics, comparative visualisations and processed CSV datasets, documenting methodology and limitations for reproducibility.",
    ],
    links: [
      {
        text: "Research repository",
        url: "https://github.com/Deborah-dev-lab/ecoli-antibiotic-resistance-analysis",
      },
    ],
  },
  {
    title: "Software Developer & UI/UX Designer",
    organisation: "E-Mentoring Africa — Industrial Project",
    date: "Apr 2026 – Present",
    description:
      "Developing an intelligent food spoilage detection application combining mobile development, computer vision and user-centred design.",
    points: [
      "Developing a Flutter and Dart application focused on image capture, food freshness classification and offline access.",
      "Designing and implementing database storage for food records, image references and classification results.",
      "Supporting access to previous food assessments and records.",
      "Preparing image datasets and training and evaluating a CNN model for application integration.",
      "Refining user flows and interfaces through testing and mentor feedback.",
    ],
    links: [
      {
        text: "Project repository",
        url: "https://github.com/Deborah-dev-lab/food-spoilage-detection",
      },
    ],
  },
  {
    title: "Product Designer & Developer",
    organisation: "Freelance Software Developer",
    date: "Aug 2026 – Present",
    description:
      "Designing and delivering responsive digital experiences for clients, from initial requirements and UX/UI decisions to deployment.",
    points: [
      "Built RECA Film Company's visual portfolio using Next.js and Sanity CMS.",
      "Structured content categories for documentaries, commercials, animation and photography.",
      "Integrated a video montage and client enquiry form.",
      "Deployed RECA on Vercel and configured its custom domain and SSL.",
      "Delivered working content management and Resend email integration.",
      "Developed Kilimani Bookpark's website covering Home, About, Programmes, Team and Testimonials.",
      "Translated parent information needs into clear navigation and responsive page layouts.",
    ],
    links: [
      {
        text: "RECA Film Company",
        url: "https://www.reca.co.ke",
      },
      {
        text: "Kilimani Bookpark",
        url: "https://www.kilimanibookpark.co.ke",
      },
    ],
  },
  {
    title: "IT Officer",
    organisation: "Square One Eco Africa",
    date: "Jan 2026 – Aug 2026",
    description:
      "Supported the digital infrastructure, website and IT operations of an environmental NGO.",
    points: [
      "Managed digital infrastructure and provided IT support for approximately 20 users.",
      "Administered Google Workspace accounts, organisational email, hosting and domain configurations.",
      "Rebuilt the organisation's website to provide a more maintainable platform for climate education, communications and content management.",
      "Supported website and email reliability through troubleshooting and migration activities.",
      "Reduced technical issues by 40% through system administration, troubleshooting and migration support.",
    ],
    links: [],
  },
  {
    title: "Product Design Intern",
    organisation: "Dentsu Kenya",
    date: "Jan 2026 – Apr 2026",
    description:
      "Worked across UX/UI design, research, creative development and visual communication in a multidisciplinary advertising environment.",
    points: [
      "Supported four digital and creative projects through UX/UI design, research, content development and visual communication.",
      "Collaborated with more than 10 colleagues across three teams.",
      "Translated client briefs into user flows, interface designs and interactive prototypes.",
      "Designed and refined more than 15 screens.",
      "Incorporated stakeholder feedback to improve usability and align designs with client objectives.",
    ],
    links: [],
  },
  {
    title: "Female Founder — AgriTech",
    organisation:
      "Female Founders Academy · Garage48 & SAIS",
    date: "Jul 2025 – Feb 2026",
    description:
      "Participated in a startup acceleration programme focused on developing and validating technology-enabled solutions.",
    points: [
      "Selected for a competitive startup acceleration programme.",
      "Conducted customer discovery to understand farmers' financial record-keeping challenges.",
      "Applied product development, UX research and design methods to refine an agricultural technology concept.",
      "Designed KilimoCash, a mobile-first farm financial management platform for income, expense and cash-flow tracking.",
      "Received the Solution in Action Award for the agritech solution.",
    ],
    links: [
      {
        text: "KilimoCash feature",
        url: "https://lnkd.in/p/dJe9Ztkt",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────

const skillGroups = [
  {
    title: "Programming & Development",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "SQL",
      "HTML",
      "CSS",
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "Flutter",
      "Dart",
      "Tailwind CSS",
      "Mobile Development",
      "Responsive Web Design",
    ],
  },
  {
    title: "Data, AI & Research",
    skills: [
      "Machine Learning",
      "Convolutional Neural Networks",
      "Computer Vision",
      "Data Analytics",
      "Database Systems",
      "Bioinformatics",
      "Biopython",
      "Google Colab",
      "Data Validation",
      "Descriptive Statistics",
      "Research Documentation",
      "Data Visualisation",
    ],
  },
  {
    title: "Platforms, Cloud & IT",
    skills: [
      "Git",
      "GitHub",
      "Supabase",
      "MongoDB",
      "Sanity CMS",
      "Vercel",
      "AWS Cloud Fundamentals",
      "Cloud Computing",
      "WordPress",
      "Bluehost",
      "Google Workspace",
      "Web Hosting",
      "Domain & DNS Configuration",
      "VPS",
      "Linux",
      "Ubuntu",
      "Technical Troubleshooting",
    ],
  },
  {
    title: "Product & UX Design",
    skills: [
      "Figma",
      "UX Research",
      "UI Design",
      "Wireframing",
      "High-Fidelity Prototyping",
      "Interactive Prototyping",
      "Usability Testing",
      "User-Centred Design",
      "Design Thinking",
      "Visual Design",
      "User Flows",
      "Information Architecture",
      "Interface Design",
      "Product Development",
      "Customer Discovery",
    ],
  },
  {
    title: "Professional & Creative Skills",
    skills: [
      "Problem-Solving",
      "Creative Thinking",
      "Communication",
      "Teamwork",
      "Collaboration",
      "Leadership",
      "Adaptability",
      "Stakeholder Feedback",
      "Research",
      "Presentation",
      "Project Coordination",
      "Critical Thinking",
      "Continuous Learning",
      "Visual Communication",
    ],
  },
];

// ─────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────

const education = [
  {
    institution: "Strathmore University",
    qualification:
      "Bachelor of Science in Informatics and Computer Science",
    date: "July 2023 – Present",
    description:
      "Final-year student with an interest in software development, product design, mobile applications, artificial intelligence and research.",
    details: [
      "Relevant coursework: Software Engineering, Mobile Application Development, Database Systems, Artificial Intelligence, Machine Learning, Human-Computer Interaction, Cybersecurity and Cloud Computing.",
      "Bridge Africa: Developed a React and MongoDB startup–investor platform project, exploring discovery journeys, navigation and interface prototypes.",
      "Pamoja Play: Developed an event-management prototype with SMS integration during the Africa's Talking Women in Tech Nairobi hackathon in September 2026.",
      "JengaSec Arcade: Participated in a cybersecurity hackathon involving technical challenges and collaborative problem-solving.",
      "Research writing: Authored 'Framing the Unseen: Silence as Strategy in Contemporary African Photography and Literature', a manuscript examining visual culture and literary representation.",
      "Leadership: Team Leader, Member Experience, AIESEC in Strathmore, supporting member engagement and coordination.",
    ],
  },
  {
    institution: "Moringa School",
    qualification: "Certified Product Designer (UI/UX)",
    date: "May 2024 – Nov 2024",
    description:
      "Completed intensive product design training focused on creating accessible, thoughtful and user-centred digital experiences.",
    details: [
      "Studied user research, design thinking, wireframing, high-fidelity prototyping, usability testing, visual design and user-centred design.",
      "MindBunny: Designed 12 high-fidelity screens in Figma, developing user flows and an interactive prototype.",
      "Doctors Appointment: Designed 10 screens for specialist discovery, doctor profiles and appointment booking.",
      "Event Hub: Designed 15 screens for event listings, event details and discovery, with consistent navigation and visual design.",
    ],
  },
  {
    institution: "Alliance Girls' High School",
    qualification:
      "Kenya Certificate of Secondary Education (KCSE)",
    date: "2019 – 2022",
    description:
      "Developed an early interest in leadership, communication, creative expression and collaborative activities.",
    details: [
      "Captain of the Environmental Club and Debate Club.",
      "Head of the String Section in the school orchestra.",
      "Vice Captain of the World Scholars' Cup Team in 2022.",
    ],
  },
];

// ─────────────────────────────────────────────
// REUSABLE COMPONENTS
// ─────────────────────────────────────────────

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f2abb6] transition-colors hover:text-[#ffe0e2] hover:underline"
    >
      {children}
      <ArrowUpRight size={15} />
    </a>
  );
}

function SectionTitle({
  title,
  subtitle,
  icon: Icon,
}: {
  title: string;
  subtitle: string;
  icon: typeof Code2;
}) {
  return (
    <div className="mb-10 text-center">
      <div className="flex items-center justify-center gap-3">
        <Icon size={23} className="text-[#ee9eaa]" />
        <h2 className="text-2xl font-bold sm:text-3xl">
          {title}
        </h2>
      </div>

      <p className="mt-3 text-xs leading-6 text-[#c5aab4]">
        {subtitle}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────
// PIXEL-ART PROJECT THUMBNAILS
// ─────────────────────────────────────────────

function PixelArtwork({ kind }: { kind: ArtKind }) {
  const p = {
    pink: "#e49ba8",
    gold: "#efbc7e",
    cream: "#f0d5b9",
    green: "#94aa83",
    blue: "#8998b6",
    dark: "#302333",
  };

  const rect = (
    x: number,
    y: number,
    w: number,
    h: number,
    fill: string
  ) => (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      fill={fill}
    />
  );

  return (
    <svg
      viewBox="0 0 320 200"
      className="h-full w-full"
      shapeRendering="crispEdges"
      role="img"
      aria-label={`${kind} pixel-art project thumbnail`}
    >
      {rect(0, 0, 320, 200, "#352632")}
      {rect(12, 12, 296, 176, "#523849")}

      {kind === "farm" && (
        <>
          {rect(25, 110, 270, 65, "#705347")}
          {rect(220, 34, 42, 42, p.gold)}

          {[60, 120, 180].map((x) => (
            <g key={x}>
              {rect(x + 12, 82, 8, 62, p.green)}
              {rect(x - 3, 70, 31, 17, "#76976c")}
              {rect(x + 17, 56, 30, 15, p.green)}
              {rect(x + 5, 44, 24, 16, "#a4ba90")}
            </g>
          ))}

          {rect(230, 115, 48, 42, p.dark)}
          {rect(236, 121, 36, 29, p.pink)}
        </>
      )}

      {kind === "food" && (
        <>
          {rect(172, 26, 96, 150, p.dark)}
          {rect(180, 34, 80, 134, "#a47c8c")}
          {rect(190, 44, 60, 64, "#d9b5a5")}
          {rect(200, 54, 40, 42, p.pink)}
          {rect(190, 119, 58, 7, p.cream)}
          {rect(190, 137, 44, 7, p.cream)}
          {rect(190, 153, 58, 7, p.green)}
          {rect(70, 107, 92, 17, p.green)}
          {rect(89, 64, 65, 55, "#b87788")}
          {rect(103, 49, 40, 22, p.pink)}
          {rect(119, 37, 9, 18, p.green)}
        </>
      )}

      {kind === "research" && (
        <>
          {rect(37, 23, 246, 150, p.dark)}
          {rect(47, 33, 226, 130, "#493a50")}

          {[51, 70, 89, 108, 127].map((y, i) => (
            <g key={y}>
              {rect(
                61,
                y,
                76 - i * 6,
                7,
                [
                  p.pink,
                  p.cream,
                  p.blue,
                  p.green,
                  p.gold,
                ][i]
              )}
            </g>
          ))}

          <path
            d="M184 45 C250 75 153 110 218 149"
            stroke={p.pink}
            strokeWidth="10"
            fill="none"
          />

          <path
            d="M226 45 C157 76 263 110 190 149"
            stroke={p.blue}
            strokeWidth="10"
            fill="none"
          />

          {[62, 82, 102, 122, 142].map((y) => (
            <g key={y}>
              {rect(191, y, 29, 5, p.cream)}
            </g>
          ))}
        </>
      )}

      {kind === "bridge" && (
        <>
          {rect(25, 135, 270, 35, "#4c3b57")}
          {rect(25, 150, 270, 9, p.blue)}
          {rect(60, 82, 25, 70, "#6c4a62")}
          {rect(235, 82, 25, 70, "#6c4a62")}
          {rect(60, 74, 25, 14, p.pink)}
          {rect(235, 74, 25, 14, p.pink)}
          {rect(65, 105, 190, 12, p.cream)}
          {rect(109, 54, 29, 25, p.pink)}
          {rect(183, 39, 29, 25, p.gold)}
          {rect(146, 86, 29, 25, p.green)}
        </>
      )}

      {kind === "event" && (
        <>
          {rect(48, 33, 224, 135, p.dark)}
          {rect(59, 43, 202, 115, "#806070")}
          {rect(74, 55, 172, 30, p.pink)}
          {rect(87, 98, 60, 45, p.gold)}
          {rect(161, 98, 70, 12, p.cream)}
          {rect(161, 121, 55, 8, p.blue)}
          {rect(161, 139, 70, 8, p.green)}
          {rect(90, 106, 16, 15, p.dark)}
          {rect(116, 106, 16, 15, p.dark)}
        </>
      )}

      {kind === "arcade" && (
        <>
          {rect(98, 32, 126, 145, p.dark)}
          {rect(110, 42, 102, 95, "#806070")}
          {rect(122, 54, 78, 67, "#3d354f")}
          {rect(135, 70, 13, 13, p.pink)}
          {rect(159, 70, 13, 13, p.gold)}
          {rect(183, 70, 13, 13, p.green)}
          {rect(145, 98, 47, 9, p.blue)}
          {rect(119, 145, 84, 24, "#a77482")}
          {rect(140, 153, 11, 11, p.gold)}
          {rect(169, 153, 11, 11, p.pink)}
        </>
      )}

      <rect
        x="12"
        y="12"
        width="296"
        height="176"
        fill="none"
        stroke="#99697e"
        strokeWidth="3"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────
// PROJECTS SECTION
// ─────────────────────────────────────────────

function ProjectsSection() {
  return (
    <>
      <SectionTitle
        title="Projects"
        subtitle="Experiments, university projects, research and ideas brought to life."
        icon={Gamepad2}
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-xl border-2 border-[#ce8996] bg-[#382730] transition-transform duration-200 motion-safe:hover:-translate-y-1"
          >
            <div className="h-44 overflow-hidden border-b border-[#a96f80]/45">
              <div className="h-full transition-transform duration-300 motion-safe:group-hover:scale-[1.04]">
                <PixelArtwork kind={project.art} />
              </div>
            </div>

            <div className="p-6">
              <p className="text-[10px] uppercase tracking-widest text-[#ee9eaa]">
                {String(index + 1).padStart(2, "0")} /{" "}
                {project.category}
              </p>

              <h3 className="mt-3 text-lg font-bold">
                {project.title}
              </h3>

              <p className="mt-4 text-xs leading-7 text-[#ddc6c6]">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[#a97686]/60 px-2.5 py-1.5 text-[10px] text-[#efd1d3]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                {project.link ? (
                  <ExternalLink href={project.link}>
                    {project.linkText}
                  </ExternalLink>
                ) : (
                  <span className="text-[11px] text-[#bda5ad]">
                    Portfolio project
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

// ─────────────────────────────────────────────
// EXPERIENCE SECTION
// ─────────────────────────────────────────────

function ExperienceSection() {
  return (
    <>
      <SectionTitle
        title="Experience"
        subtitle="Professional work, research, collaborations and things I've learned along the way."
        icon={BriefcaseBusiness}
      />

      <div className="mx-auto max-w-5xl border-l-2 border-[#b8788d]/60 pl-5 sm:pl-9">
        <div className="space-y-6">
          {experiences.map((job, index) => (
            <article
              key={job.organisation}
              className="relative rounded-xl border border-[#bb7d8d] bg-[#382730] p-6 transition-colors duration-300 hover:border-[#e49ba8] sm:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[27px] top-8 h-3 w-3 rounded-full border-2 border-[#291e27] bg-[#ee9eaa] sm:-left-[43px]"
              />

              <div className="flex flex-wrap justify-between gap-4">
                <div>
                  <p className="text-[10px] tracking-widest text-[#ee9eaa]">
                    EXPERIENCE{" "}
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-3 text-lg font-bold sm:text-xl">
                    {job.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-[#ee9eaa]">
                    {job.organisation}
                  </p>
                </div>

                <span className="h-fit rounded-lg border border-[#a97686]/60 px-3 py-2 text-[11px] text-[#edc9d0]">
                  {job.date}
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#e2d0cc]">
                {job.description}
              </p>

              <ul className="mt-5 space-y-3">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-xs leading-7 text-[#d6c0c1]"
                  >
                    <span className="shrink-0 text-[#ee9eaa]">
                      ✦
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {job.links.length > 0 && (
                <div className="mt-7 flex flex-wrap gap-5">
                  {job.links.map((link) => (
                    <ExternalLink
                      key={link.url}
                      href={link.url}
                    >
                      {link.text}
                    </ExternalLink>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────
// DEVELOPMENT & SKILLS SECTION
// ─────────────────────────────────────────────

function DevelopmentSection() {
  return (
    <>
      <SectionTitle
        title="Development & Skills"
        subtitle="Technical skills, design thinking, creative tools and collaborative strengths."
        icon={Code2}
      />

      <div className="mx-auto max-w-5xl">
        <div className="mb-7 rounded-xl border border-[#bb7d8d] bg-[#382730] p-7 sm:p-9">
          <h3 className="text-xl font-bold">
            I like figuring out how things work.
          </h3>

          <p className="mt-5 text-sm leading-8 text-[#e2d0cc]">
            I enjoy moving between design and development:
            understanding a problem, exploring solutions,
            building something functional and improving it
            through feedback. My interests range from
            frontend engineering and mobile applications
            to data analysis, AI, cloud technologies and
            digital infrastructure.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-xl border border-[#bb7d8d] bg-[#382730] p-6 transition-colors duration-300 hover:border-[#e49ba8] sm:p-7"
            >
              <h3 className="text-base font-bold text-[#f5c4c6]">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[#a97686]/60 bg-[#49313c] px-3 py-2 text-[11px] leading-5 text-[#efd8d8] transition-colors hover:border-[#e49ba8] hover:bg-[#61404f]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────
// DESIGN SECTION
// ─────────────────────────────────────────────

function DesignSection() {
  return (
    <>
      <SectionTitle
        title="Design"
        subtitle="How I think, explore ideas and create digital experiences."
        icon={Palette}
      />

      <div className="mx-auto max-w-5xl space-y-7">
        <div className="rounded-xl border-2 border-[#ce8996] bg-[#382730] p-7 sm:p-10">
          <p className="text-xs tracking-widest text-[#ee9eaa]">
            MY DESIGN PHILOSOPHY ✦
          </p>

          <h3 className="mt-5 text-2xl font-bold leading-snug">
            I believe good design should feel as good as
            it looks.
          </h3>

          <p className="mt-6 text-sm leading-8 text-[#e2d0cc]">
            What I enjoy most about design is the
            opportunity to turn an idea into an experience
            that feels natural, useful and memorable. I
            love exploring different visual directions,
            experimenting with layouts, typography and
            colour, and finding creative ways to
            communicate information.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#e2d0cc]">
            At the same time, I care about usability. I
            want people to understand where to go, what
            to do and how to interact with a product
            without having to think too hard about it.
            For me, creativity and functionality should
            work together rather than compete.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#e2d0cc]">
            My process usually begins with understanding
            the user and the problem. From there, I
            explore user journeys, wireframes and
            interface concepts before moving into
            high-fidelity prototypes. I enjoy refining
            designs through feedback, testing and
            collaboration, especially when I can also
            help bring the final experience to life
            through code.
          </p>
        </div>

        <div className="rounded-xl border-2 border-[#e49ba8] bg-[#49313c] p-7 sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div className="max-w-xl">
              <p className="text-xs tracking-widest text-[#f1b2bc]">
                FEATURED DESIGN WORK
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                My Figma Portfolio
              </h3>

              <p className="mt-5 text-sm leading-8 text-[#e9d1d2]">
                Explore my product design work, interface
                concepts and prototypes. This is where
                you can see how I translate ideas into
                visual experiences.
              </p>
            </div>

            <span className="text-4xl text-[#ee9eaa] motion-safe:animate-pulse">
              ✦
            </span>
          </div>

          <a
            href={FIGMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-[#e99aa7] px-6 py-3.5 text-xs font-bold text-[#291e27] transition-colors hover:bg-[#f7bac2]"
          >
            Explore my design portfolio
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-bold">
            My design process
          </h3>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Understand",
                text: "Research the problem, learn about users, identify their needs and understand the context.",
              },
              {
                number: "02",
                title: "Explore",
                text: "Experiment with ideas, user flows, wireframes, visual styles and interactive prototypes.",
              },
              {
                number: "03",
                title: "Refine",
                text: "Test, gather feedback, improve usability and bring the experience closer to its final form.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="rounded-xl border border-[#bb7d8d] bg-[#382730] p-7 transition-transform duration-200 motion-safe:hover:-translate-y-1"
              >
                <span className="text-xs text-[#ee9eaa]">
                  {step.number}
                </span>

                <h4 className="mt-5 text-lg font-bold">
                  {step.title}
                </h4>

                <p className="mt-4 text-xs leading-7 text-[#d6c0c1]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#bb7d8d] bg-[#382730] p-7">
          <h3 className="text-lg font-bold">
            Design projects & explorations
          </h3>

          <p className="mt-4 text-xs leading-8 text-[#d6c0c1]">
            During my product design training at Moringa
            School, I designed MindBunny (12 screens),
            Doctors Appointment (10 screens) and Event
            Hub (15 screens). These projects gave me
            practical experience with user flows,
            interface design, prototyping and visual
            consistency.
          </p>

          <div className="mt-5">
            <ExternalLink href={FIGMA_URL}>
              View Figma work
            </ExternalLink>
          </div>
        </div>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────
// ABOUT & EDUCATION SECTION
// ─────────────────────────────────────────────

function AboutSection() {
  return (
    <>
      <SectionTitle
        title="About Me"
        subtitle="The person, education, interests and experiences behind the desk."
        icon={UserRound}
      />

      <div className="mx-auto max-w-5xl space-y-8">
        <article className="rounded-xl border-2 border-[#ce8996] bg-[#382730] p-7 sm:p-10">
          <p className="text-xs tracking-widest text-[#ee9eaa]">
            HELLO THERE ✦
          </p>

          <h3 className="mt-4 text-2xl font-bold">
            I'm Deborah Kaburu.
          </h3>

          <p className="mt-5 text-sm leading-8 text-[#e2d0cc]">
            I'm a software developer and product designer
            based in Nairobi, Kenya. I'm interested in
            creating technology that solves problems
            while also feeling thoughtful, intuitive
            and visually engaging.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#e2d0cc]">
            I enjoy combining my technical background
            with creative thinking. Whether I'm designing
            a digital interface, building a web
            application, exploring artificial intelligence
            or working on a research project, I'm
            motivated by curiosity and the opportunity
            to learn.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#e2d0cc]">
            Outside technology, music has been a
            meaningful part of my life. I play the violin
            and cello, and I enjoy the creativity,
            patience and attention to detail that
            music encourages.
          </p>
        </article>

        <div>
          <div className="mb-6 flex items-center gap-3">
            <GraduationCap
              size={23}
              className="text-[#ee9eaa]"
            />
            <h3 className="text-xl font-bold">
              Education & School Experience
            </h3>
          </div>

          <div className="space-y-5">
            {education.map((school) => (
              <article
                key={school.institution}
                className="rounded-xl border border-[#bb7d8d] bg-[#382730] p-6 transition-colors duration-300 hover:border-[#e49ba8] sm:p-8"
              >
                <div className="flex flex-wrap justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-bold">
                      {school.institution}
                    </h4>

                    <p className="mt-2 text-sm text-[#ee9eaa]">
                      {school.qualification}
                    </p>
                  </div>

                  <span className="text-xs text-[#cba6b0]">
                    {school.date}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#e2d0cc]">
                  {school.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {school.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 text-xs leading-7 text-[#d6c0c1]"
                    >
                      <span className="shrink-0 text-[#ee9eaa]">
                        ✦
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-[#bb7d8d] bg-[#382730] p-7">
            <div className="flex items-center gap-3">
              <BookOpen
                size={22}
                className="text-[#ee9eaa]"
              />
              <h3 className="text-lg font-bold">
                Certifications & Recognition
              </h3>
            </div>

            <ul className="mt-5 space-y-4 text-xs leading-7 text-[#d6c0c1]">
              <li>
                ✦ Certified Product Designer (UI/UX) —
                Moringa School, 2024.
              </li>
              <li>
                ✦ Solution in Action Award — Female
                Founders Academy, for KilimoCash.
              </li>
              <li>
                ✦ AWS Cloud Fundamentals — included
                among my cloud-related technical skills.
              </li>
            </ul>
          </article>

          <article className="rounded-xl border border-[#bb7d8d] bg-[#382730] p-7">
            <div className="flex items-center gap-3">
              <span className="text-2xl text-[#ee9eaa]">
                ♫
              </span>

              <h3 className="text-lg font-bold">
                Beyond Technology
              </h3>
            </div>

            <p className="mt-5 text-xs leading-8 text-[#d6c0c1]">
              I enjoy music, creative expression,
              leadership and collaborative work. My
              background in orchestra, debate,
              environmental activities and student
              organisations has shaped the way I
              communicate, collaborate and approach
              challenges.
            </p>
          </article>
        </div>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────
// CONTACT SECTION
// ─────────────────────────────────────────────

function ContactSection() {
  return (
    <>
      <SectionTitle
        title="Contact"
        subtitle="A little note from my desk to yours."
        icon={Mail}
      />

      <div className="mx-auto max-w-3xl rounded-xl border-2 border-[#ce8996] bg-[#382730] p-8 text-center sm:p-12">
        <span className="text-4xl text-[#ee9eaa]">
          ✉
        </span>

        <h3 className="mt-5 text-2xl font-bold">
          Let's make something interesting.
        </h3>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-8 text-[#d6c0c1]">
          I'm always interested in learning,
          collaborating and exploring meaningful
          opportunities in software development,
          product design and technology.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-lg bg-[#e99aa7] px-5 py-3 text-xs font-bold text-[#291e27] hover:bg-[#f7bac2]"
          >
            <Mail size={16} />
            Email me
          </a>

          {[
            {
              label: "LinkedIn",
              url: "https://www.linkedin.com/in/deborah-kaburu/",
            },
            {
              label: "GitHub",
              url: "https://github.com/Deborah-dev-lab",
            },
            {
              label: "Figma Portfolio",
              url: FIGMA_URL,
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#ce8996] px-5 py-3 text-xs font-bold text-[#f1c5cc] hover:bg-white/5"
            >
              {link.label}
              <ArrowUpRight size={15} />
            </a>
          ))}
        </div>

        <p className="mt-9 text-xs text-[#bda5ad]">
          Nairobi, Kenya · {EMAIL}
        </p>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────
// SECTION SWITCHER
// ─────────────────────────────────────────────

function SectionContent({
  section,
}: {
  section: Section;
}) {
  switch (section) {
    case "projects":
      return <ProjectsSection />;
    case "experience":
      return <ExperienceSection />;
    case "development":
      return <DevelopmentSection />;
    case "design":
      return <DesignSection />;
    case "about":
      return <AboutSection />;
    case "contact":
      return <ContactSection />;
  }
}

// ─────────────────────────────────────────────
// DEBBIE'S CAT — RETRO GAME DIALOGUE
// ─────────────────────────────────────────────

function CatDialogue({
  message,
  visibleCount,
  reducedMotion,
  onNext,
  onClose,
}: {
  message: string;
  visibleCount: number;
  reducedMotion: boolean;
  onNext: () => void;
  onClose: () => void;
}) {
  const pixelShape =
    "polygon(5% 0,95% 0,95% 5%,100% 5%,100% 82%,95% 82%,95% 88%,78% 88%,78% 94%,74% 94%,74% 100%,67% 100%,67% 88%,5% 88%,5% 82%,0 82%,0 5%,5% 5%)";

  return (
    <div className="relative w-full max-w-[340px]">
      <div
        className="relative p-[6px]"
        style={{
          background: "#241923",
          clipPath: pixelShape,
        }}
      >
        <div
          className="min-h-[175px] bg-[#fffdf5] px-5 pb-9 pt-5"
          style={{ clipPath: pixelShape }}
        >
          <div className="flex items-center justify-between gap-2 border-b-2 border-[#ead6dc] pb-2">
            <span className="text-[11px] font-extrabold tracking-wider text-[#945772]">
              ✦ DEBBIE'S CAT
            </span>

            <button
              type="button"
              onClick={onClose}
              aria-label="Hide Debbie's Cat dialogue"
              className="rounded px-1 text-sm font-bold text-[#945772] hover:bg-[#f1e1e5]"
            >
              ×
            </button>
          </div>

          <p
            className="mt-4 min-h-[70px] whitespace-pre-wrap text-[12px] font-bold leading-6 text-[#302330]"
            aria-label={message}
          >
            {reducedMotion
              ? message
              : message.slice(0, visibleCount)}

            {!reducedMotion &&
              visibleCount < message.length && (
                <span className="desk-cursor">▌</span>
              )}
          </p>

          <button
            type="button"
            onClick={onNext}
            aria-label="Next message from Debbie's Cat"
            className="absolute bottom-[38px] right-7 flex items-center gap-2 text-[10px] font-bold text-[#945772] hover:text-[#62384b]"
          >
            next
            <span className="desk-bob text-sm">
              ▼
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN STUDIO SCENE
// ─────────────────────────────────────────────

export default function DeskScene() {
  const [activeSection, setActiveSection] =
    useState<Section | null>(null);

  const [showExploreMenu, setShowExploreMenu] =
    useState(false);

  const [catIndex, setCatIndex] = useState(0);
  const [catOpen, setCatOpen] = useState(true);

  const [catMessage, setCatMessage] = useState(
    catMessages[0]
  );

  const [typed, setTyped] = useState(0);
  const [catHeart, setCatHeart] = useState(false);
  const [reducedMotion, setReducedMotion] =
    useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const pendingScrollRef = useRef(false);

  // Accessibility: reduced motion.
  useEffect(() => {
    const query = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () =>
      setReducedMotion(query.matches);

    update();
    query.addEventListener("change", update);

    return () =>
      query.removeEventListener("change", update);
  }, []);

  // Typewriter animation.
  useEffect(() => {
    if (!catOpen || reducedMotion) return;

    let position = 0;

    const timer = window.setInterval(() => {
      position += 1;
      setTyped(position);

      if (position >= catMessage.length) {
        window.clearInterval(timer);
      }
    }, 35);

    return () => window.clearInterval(timer);
  }, [catMessage, catOpen, reducedMotion]);

  // Automatically change the dialogue.
  useEffect(() => {
    if (!catOpen || reducedMotion) return;

    const timer = window.setInterval(() => {
      setCatIndex((previous) => {
        const next =
          (previous + 1) % catMessages.length;

        setCatMessage(catMessages[next]);
        setTyped(0);

        return next;
      });
    }, 8500);

    return () => window.clearInterval(timer);
  }, [catOpen, reducedMotion]);

  function nextCatMessage() {
    const next =
      (catIndex + 1) % catMessages.length;

    setCatIndex(next);
    setCatMessage(catMessages[next]);
    setTyped(0);
    setCatOpen(true);
  }

  function petCat() {
    nextCatMessage();
    setCatHeart(true);

    window.setTimeout(() => {
      setCatHeart(false);
    }, 700);
  }

  function scrollToSection() {
    contentRef.current?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  function navigateTo(section: Section | "home") {
    setShowExploreMenu(false);

    if (section === "home") {
      pendingScrollRef.current = false;
      setActiveSection(null);

      window.scrollTo({
        top: 0,
        behavior: reducedMotion ? "auto" : "smooth",
      });

      return;
    }

    // Cat responds to the studio object.
    setCatMessage(catSectionMessages[section]);
    setTyped(0);
    setCatOpen(true);

    if (activeSection === section) {
      scrollToSection();
      return;
    }

    pendingScrollRef.current = true;
    setActiveSection(section);
  }

  useEffect(() => {
    if (
      !activeSection ||
      !pendingScrollRef.current
    ) {
      return;
    }

    pendingScrollRef.current = false;

    const frame = requestAnimationFrame(() => {
      scrollToSection();
    });

    return () => cancelAnimationFrame(frame);
  }, [activeSection]);

  return (
    <main className="min-h-screen bg-[#291e27] font-mono text-[#f8e9d6]">
      <style>{`
        @keyframes desk-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes desk-twinkle {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.85);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }

        @keyframes desk-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }

        @keyframes desk-heart {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.7);
          }
          30% { opacity: 1; }
          100% {
            opacity: 0;
            transform: translateY(-26px) scale(1.2);
          }
        }

        .desk-float {
          animation: desk-float 4s ease-in-out infinite;
        }

        .desk-twinkle {
          animation: desk-twinkle 3.5s ease-in-out infinite;
        }

        .desk-bob {
          animation: desk-bob 2.5s ease-in-out infinite;
        }

        .desk-heart {
          animation: desk-heart 0.7s ease-out both;
        }

        .desk-cursor {
          animation: desk-twinkle 0.7s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .desk-float,
          .desk-twinkle,
          .desk-bob,
          .desk-heart,
          .desk-cursor {
            animation: none !important;
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* CENTRED WEBSITE TITLE */}
        <header className="sticky top-0 z-40 border-b border-[#b47a8b]/35 bg-[#291e27]/95 backdrop-blur-md">
          <div className="flex min-h-[82px] items-center justify-center">
            <button
              type="button"
              onClick={() => navigateTo("home")}
              className="group flex cursor-pointer items-center gap-3"
              aria-label="Debbie's Desk — return home"
            >
              <span className="desk-twinkle text-xl text-[#ee9eaa]">
                ✦
              </span>

              <span className="text-xl font-bold tracking-tight text-[#f8e9d6] transition-colors duration-300 group-hover:text-[#f4b4c0] sm:text-2xl">
                debbie's desk.
              </span>

              <span
                className="desk-twinkle text-xl text-[#ee9eaa]"
                style={{ animationDelay: "1.5s" }}
              >
                ✦
              </span>
            </button>
          </div>
        </header>

        {/* HOMEPAGE */}
        <section className="grid min-h-[620px] items-center gap-8 py-14 lg:grid-cols-[0.25fr_0.5fr_0.25fr] lg:gap-4 lg:py-16">
          {/* INTRODUCTION */}
          <div className="relative">
            <span
              aria-hidden="true"
              className="desk-twinkle absolute -right-1 -top-6 text-2xl text-[#f1aa61]"
            >
              ✦
            </span>

            <h1 className="text-4xl font-bold leading-[1.18] tracking-tight sm:text-5xl lg:text-[clamp(2rem,3vw,3.8rem)]">
              Hi, I'm
              <br />
              Deborah.
            </h1>

            <p className="mt-7 max-w-xs text-sm leading-7 text-[#e2d0cc]">
              A product designer and software developer
              who loves building, designing and creating.
            </p>

            <button
              type="button"
              onClick={() =>
                setShowExploreMenu((value) => !value)
              }
              aria-expanded={showExploreMenu}
              aria-controls="studio-explore-menu"
              className="mt-7 inline-flex cursor-pointer items-center gap-3 rounded-xl border-2 border-[#e99aa7] bg-[#784653]/65 px-6 py-3 text-sm font-semibold text-[#f5c4c6] transition-all hover:bg-[#935562] motion-safe:hover:-translate-y-0.5"
            >
              Explore the studio

              <ArrowDown
                size={17}
                className={`transition-transform ${
                  showExploreMenu ? "rotate-180" : ""
                }`}
              />
            </button>

            {showExploreMenu && (
              <div
                id="studio-explore-menu"
                className="mt-4 grid grid-cols-2 gap-2 rounded-xl border border-[#b47a8b] bg-[#382730] p-3 lg:grid-cols-1"
              >
                {sections.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() =>
                        navigateTo(item.id)
                      }
                      className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2.5 text-left text-xs text-[#ead8cf] transition-colors hover:bg-[#61404f] hover:text-[#f4b4c0]"
                    >
                      <Icon
                        size={15}
                        className="shrink-0 text-[#ee9eaa]"
                      />

                      {item.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* ORIGINAL INTERACTIVE STUDIO IMAGE */}
          <div className="relative w-full lg:col-start-2">
            <span
              aria-hidden="true"
              className="desk-twinkle pointer-events-none absolute -left-2 top-[12%] z-20 text-2xl text-[#f1bd85]"
            >
              ✦
            </span>

            <span
              aria-hidden="true"
              className="desk-float pointer-events-none absolute -right-2 top-[24%] z-20 text-xl text-[#ee9eaa]"
            >
              ✧
            </span>

            <span
              aria-hidden="true"
              className="desk-twinkle pointer-events-none absolute bottom-[21%] left-[5%] z-20 text-xl text-[#e9a0ad]"
              style={{ animationDelay: "1s" }}
            >
              ✧
            </span>

            <span
              aria-hidden="true"
              className="desk-float pointer-events-none absolute right-[10%] top-[5%] z-20 text-sm text-[#f1bd85]"
              style={{ animationDelay: "1.8s" }}
            >
              ✦
            </span>

            <div className="group/studio relative aspect-[3/2] w-full">
              <Image
                src="/desk/debbies-desk-studio.png"
                alt="Deborah's interactive pixel-art studio with a computer, bookshelf, violin, cello and black cat."
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain transition-transform duration-700 ease-out motion-safe:group-hover/studio:scale-[1.015]"
              />

              {/* INTERACTIVE OBJECTS */}
              {hotspots.map((spot) => (
                <button
                  key={spot.id}
                  type="button"
                  onClick={() =>
                    navigateTo(spot.id)
                  }
                  aria-label={`${spot.label} — ${spot.hint}`}
                  title={spot.hint}
                  style={{
                    left: spot.left,
                    top: spot.top,
                    width: spot.width,
                    height: spot.height,
                  }}
                  className={`group/spot absolute z-10 cursor-pointer rounded-md border-2 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5c4c6] ${
                    activeSection === spot.id
                      ? "border-[#ee9eaa]/75 bg-[#ee9eaa]/15"
                      : "border-transparent hover:border-[#ee9eaa]/85 hover:bg-[#ee9eaa]/20"
                  }`}
                >
                  <span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-3 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg border border-[#e99aa7] bg-[#291e27] px-3 py-2 text-center opacity-0 shadow-xl transition-all duration-200 group-hover/spot:translate-y-0 group-hover/spot:opacity-100 group-focus-visible/spot:translate-y-0 group-focus-visible/spot:opacity-100">
                    <span className="block text-[10px] font-bold tracking-wider text-[#f6b7c1]">
                      ✦ {spot.label}
                    </span>

                    <span className="mt-1 block text-[9px] text-[#d9c2c7]">
                      {spot.hint}
                    </span>
                  </span>
                </button>
              ))}

              {/* EXISTING BLACK CAT HOTSPOT */}
              <button
                type="button"
                onClick={petCat}
                title="Pet Debbie's Cat ♡"
                aria-label="Pet Debbie's Cat to hear another message"
                style={{
                  left: "75.5%",
                  top: "65%",
                  width: "9%",
                  height: "13%",
                }}
                className="group/cat absolute z-20 cursor-pointer rounded-lg border-2 border-transparent transition-colors hover:border-[#ffe3ae]/70 hover:bg-[#ffe3ae]/10 focus-visible:border-[#ffe3ae] focus-visible:outline-none"
              >
                <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#fffdf5] px-2 py-1 text-[10px] font-bold text-[#302330] opacity-0 transition-opacity group-hover/cat:opacity-100 group-focus-visible/cat:opacity-100">
                  Pet me! ♡
                </span>

                {catHeart && (
                  <span
                    aria-hidden="true"
                    className="desk-heart pointer-events-none absolute -top-4 left-1/2 text-xl text-[#ee9eaa]"
                  >
                    ♥
                  </span>
                )}
              </button>
            </div>

            {/* STUDIO HINT */}
            <div className="mt-5 flex flex-col items-center gap-2 text-center">
              <div className="flex items-center gap-3 text-[#e9a0ad]">
                <span className="desk-twinkle text-xs">
                  ✧
                </span>

                <span className="text-[11px] font-semibold tracking-wide sm:text-xs">
                  Psst... my studio has secrets!
                </span>

                <span
                  className="desk-twinkle text-xs"
                  style={{ animationDelay: "1.2s" }}
                >
                  ✧
                </span>
              </div>

              <p className="text-[11px] text-[#c5aab4]">
                Hover over or tap the objects
                (and the cat!) to explore
              </p>

              <span
                aria-hidden="true"
                className="desk-bob mt-1 text-lg text-[#ee9eaa]"
              >
                ↓
              </span>
            </div>
          </div>

          {/* DEBBIE'S CAT GAME DIALOGUE */}
          <aside
            className="w-full lg:col-start-3 lg:justify-self-center"
            aria-label="Debbie's Cat"
          >
            {catOpen ? (
              <CatDialogue
                message={catMessage}
                visibleCount={typed}
                reducedMotion={reducedMotion}
                onNext={nextCatMessage}
                onClose={() => setCatOpen(false)}
              />
            ) : (
              <button
                type="button"
                onClick={() => setCatOpen(true)}
                className="rounded-lg border border-[#e99aa7] px-4 py-3 text-xs text-[#f4b4c0] hover:bg-[#49313c]"
              >
                ♡ Chat with Debbie's Cat
              </button>
            )}
          </aside>
        </section>

        {/* SELECTED PORTFOLIO SECTION */}
        {activeSection && (
          <>
            <div
              aria-hidden="true"
              className="my-14 flex items-center gap-4 sm:my-20"
            >
              <div className="h-px flex-1 bg-[#bb7e91]/45" />

              <span className="text-lg text-[#ee9eaa]">
                ♥
              </span>

              <div className="h-px flex-1 bg-[#bb7e91]/45" />
            </div>

            <div
              ref={contentRef}
              className="scroll-mt-28"
              aria-live="polite"
            >
              <SectionContent section={activeSection} />
            </div>

            <div className="pb-16 pt-12 text-center">
              <button
                type="button"
                onClick={() => navigateTo("home")}
                className="cursor-pointer rounded-lg border border-[#ce8996] px-5 py-3 text-xs text-[#f1c5cc] transition-colors hover:bg-white/5"
              >
                ↑ Back to the studio
              </button>
            </div>
          </>
        )}

        {/* FOOTER */}
        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[#b47a8b]/45 py-7 text-xs text-[#bba3ae]">
          <span>
            © {new Date().getFullYear()} Debbie's Desk
          </span>

          <button
            type="button"
            onClick={() => navigateTo("home")}
            className="cursor-pointer text-[#f0a0ad] hover:underline"
          >
            Back to top ↑
          </button>
        </footer>
      </div>
    </main>
  );
}
