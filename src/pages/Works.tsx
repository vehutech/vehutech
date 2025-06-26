import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye, Calendar, Tag } from "lucide-react";
import { useTheme } from "@/components/util/theme-provider";
import { Button } from "@/components/ui/button";
import Squares from "@/components/util/Squares";
import BlurText from "@/components/util/BlutText";

// Sample works data - replace with your actual projects
const worksData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    image: "/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web Development",
    date: "2024",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: true,
  },
  {
    id: 2,
    title: "AI Chat Application",
    description:
      "Real-time chat application with AI integration using OpenAI API. Built with Next.js and Socket.io for seamless communication.",
    image: "/project2.jpg",
    technologies: ["Next.js", "OpenAI", "Socket.io", "TypeScript"],
    category: "AI/ML",
    date: "2024",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Modern portfolio website with dark/light theme, smooth animations, and responsive design. Built with React and Framer Motion.",
    image: "/project3.jpg",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    category: "Web Development",
    date: "2024",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: false,
  },
  {
    id: 4,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/project4.jpg",
    technologies: ["Vue.js", "Firebase", "Vuetify", "PWA"],
    category: "Web Development",
    date: "2023",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: false,
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description:
      "Beautiful weather application with location-based forecasting, interactive maps, and detailed weather analytics.",
    image: "/project5.jpg",
    technologies: ["React Native", "Weather API", "Redux", "Maps"],
    category: "Mobile Development",
    date: "2023",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: false,
  },
  {
    id: 6,
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard for data visualization with charts, graphs, and real-time data updates. Perfect for business intelligence.",
    image: "/project6.jpg",
    technologies: ["D3.js", "React", "Python", "FastAPI"],
    category: "Data Science",
    date: "2023",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: false,
  },
];

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "AI/ML",
  "Design",
];

const Works = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredWorks, setFilteredWorks] = useState(worksData);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredWorks(worksData);
    } else {
      setFilteredWorks(
        worksData.filter((work) => work.category === selectedCategory),
      );
    }
  }, [selectedCategory]);

  const featuredWorks = worksData.filter((work) => work.featured);
  const regularWorks = filteredWorks.filter((work) => !work.featured);

  return (
    <div className="relative min-h-screen bg-custom-background">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.3}
          squareSize={30}
          direction="up"
          borderColor={theme === "light" ? "#e5e7eb" : "#374151"}
          hoverFillColor={theme === "light" ? "#f3f4f6" : "#1f2937"}
        />
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-custom-background/50 to-custom-background z-10"></div>

      <div className="relative z-20 sm:px-40 px-4 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          {!isAnimationComplete ? (
            <BlurText
              text="My Works"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-6xl md:text-8xl mb-6 font-bold text-custom-foreground"
              onAnimationComplete={handleAnimationComplete}
            />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-8xl mb-6 font-bold text-custom-foreground">
                My Works
              </h1>
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-custom-muted-foreground max-w-2xl mx-auto"
          >
            A collection of projects that showcase my skills and passion for
            creating innovative digital solutions.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <Button
              key={category + index}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-primary text-custom-primary-foreground shadow-glow"
                  : "hover:bg-custom-muted"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        {selectedCategory === "All" && featuredWorks.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-custom-foreground mb-8 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredWorks.map((work, index) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="group relative overflow-hidden rounded-xl bg-custom-card border border-custom-border shadow-lg hover:shadow-xl transition-all duration-300"
                  onMouseEnter={() => setHoveredProject(work.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Tag className="w-4 h-4 text-primary-teal" />
                      <span className="text-sm text-custom-muted-foreground">
                        {work.category}
                      </span>
                      <Calendar className="w-4 h-4 text-custom-muted-foreground ml-auto" />
                      <span className="text-sm text-custom-muted-foreground">
                        {work.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-custom-foreground mb-2 group-hover:text-primary-teal transition-colors duration-300">
                      {work.title}
                    </h3>

                    <p className="text-custom-muted-foreground mb-4 line-clamp-3">
                      {work.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {work.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-custom-muted text-custom-muted-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        asChild
                        className="bg-gradient-primary text-custom-primary-foreground"
                      >
                        <a
                          href={work.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={work.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {hoveredProject === work.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute top-4 right-4"
                      >
                        <div className="bg-gradient-primary p-2 rounded-full shadow-glow">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: selectedCategory === "All" ? 1.2 : 0.6,
          }}
        >
          {(selectedCategory !== "All" || regularWorks.length > 0) && (
            <h2 className="text-3xl font-bold text-custom-foreground mb-8 text-center">
              {selectedCategory === "All"
                ? "Other Projects"
                : `${selectedCategory} Projects`}
            </h2>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {(selectedCategory === "All" ? regularWorks : filteredWorks).map(
              (work, index) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay:
                      (selectedCategory === "All" ? 1.4 : 0.8) + index * 0.1,
                  }}
                  className="group relative overflow-hidden rounded-xl bg-custom-card border border-custom-border shadow-lg hover:shadow-xl transition-all duration-300"
                  onMouseEnter={() => setHoveredProject(work.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Tag className="w-4 h-4 text-primary-teal" />
                      <span className="text-sm text-custom-muted-foreground">
                        {work.category}
                      </span>
                      <Calendar className="w-4 h-4 text-custom-muted-foreground ml-auto" />
                      <span className="text-sm text-custom-muted-foreground">
                        {work.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-custom-foreground mb-2 group-hover:text-primary-teal transition-colors duration-300">
                      {work.title}
                    </h3>

                    <p className="text-custom-muted-foreground mb-4 text-sm line-clamp-2">
                      {work.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {work.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-custom-muted text-custom-muted-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {work.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-custom-muted-foreground">
                          +{work.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        asChild
                        className="flex-1 bg-gradient-primary text-custom-primary-foreground"
                      >
                        <a
                          href={work.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="flex-1"
                      >
                        <a
                          href={work.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {hoveredProject === work.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute top-4 right-4"
                      >
                        <div className="bg-gradient-primary p-2 rounded-full shadow-glow">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ),
            )}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-custom-foreground mb-4">
            Interested in working together?
          </h3>
          <p className="text-custom-muted-foreground mb-6">
            Let's discuss your next project and bring your ideas to life.
          </p>
          <Button className="bg-gradient-primary text-custom-primary-foreground px-8 py-3 text-lg shadow-glow hover-lift">
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
