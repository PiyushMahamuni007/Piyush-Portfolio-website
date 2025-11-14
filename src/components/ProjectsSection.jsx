import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Figma", "Prototyping"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Classic Brunch Restaurant Website",
    description:
      "A stylish and responsive website for a restaurant and brunch cafe, featuring menu display, dessert showcase, and intuitive navigation.",
    image: "/projects/project2.jpg",
    tags: ["Figma", "Prototyping", "Responsive Design", "UI/UX"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 3,
    title: "Gym Management Platform",
    description:
      "A modern gym management website for tracking trainers, analytics, member status, and workout categories—all in one dashboard.",
    image: "/projects/project3.png",
    tags: ["React", "Dashboard", "Analytics", "Modern UI"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Fashion E-commerce Website",
    description:
      "A visually engaging fashion store website that showcases unique clothes, new arrivals, favorite items, and promotional sales with seamless shopping experience.",
    image: "/projects/project4.png",
    tags: ["Figma", "Prototyping", "E-commerce", "UI/UX", "Responsive"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Basketball Shoes E-commerce Landing Page",
    description:
      "A sleek, modern landing page for basketball shoes, showcasing product details, variants, and seamless add-to-cart functionality.",
    image: "/projects/project5.png",
    tags: ["Figma", "Prototyping", "Landing Page", "UI/UX", "Product Showcase"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 6,
    title: "Earth Vyavastha Tourism Website",
    description:
      "A comprehensive platform for discovering Himachal's tourist attractions, eco-stays, adventure activities, and popular retreats with smooth search and booking experiences.",
    image: "/projects/project6.png",
    tags: ["React", "Booking", "UI/UX", "Responsive", "REST APIs"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Jarvis Automation Assistant",
    description: "An advanced virtual assistant leveraging AI for automation, voice commands, web search, email handling, and smart scheduling.",
    image: "/projects/project0.png", 
    tags: ["Python", "AI", "NLP", "Voice Recognition", "Automation"],
    demoUrl: "#",
    githubUrl: "#"
  },

  {
    id: 8,
    title: "QuestifyAI",
    description: "A smart interview preparation platform powered by AI, offering dynamic question generation, instant feedback, and progress analytics for job seekers.",
    image: "/projects/project0.png",
    tags: ["Next.js", "AI", "NLP", "Education", "Analytics"],
    demoUrl: "#",
    githubUrl: "#"
  }
,
];

export const ProjectsSection = () => {
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setPreviewImage(null);
    };
    if (previewImage) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [previewImage]);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
          Some of the projects are not open-source , due to confidentiality
          reasons, and Others you may find on my GitHub profile.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={
                        project.demoUrl && project.demoUrl !== "#"
                          ? project.demoUrl
                          : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      onClick={(e) => {
                        if (!project.demoUrl || project.demoUrl === "#") {
                          e.preventDefault();
                          setPreviewImage(project.image);
                        }
                      }}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/PiyushMahamuni007"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={previewImage}
              alt="Project preview"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              aria-label="Close preview"
              onClick={() => setPreviewImage(null)}
              className="absolute top-2 right-2 bg-white/90 text-black rounded-full p-2 shadow hover:bg-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
