import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "../components/ui/Card";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with payment integration, user authentication, and an admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description:
        "A Kanban-style task management application with drag and drop functionality and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Personal Finance Tracker",
      description:
        "A responsive web application for tracking expenses, setting budgets, and visualizing spending patterns.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=500",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-br from-[#e4ecf3] via-[#e4ecf3] to-[#dce2ea]"
    >
      <div className="section-container max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Featured Projects
        </h2>

        <motion.p
          className="mt-4 text-lg text-muted-foreground max-w-2xl "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Here are some of my recent projects. Each project is unique and
          showcases different skills and technologies.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="min-h-[500px] overflow-hidden border border-border hover:-translate-y-1 transition-transform duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <CardHeader className="flex flex-col justify-between h-full p-4">
                  <CardTitle className="text-lg font-semibold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm mt-2 text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-150 text-blue-600 px-3 py-1 rounded-md text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>


                <CardFooter className="flex justify-between p-4 pt-2">
                  <a
                    href={project.liveUrl}
                    className="text-sm text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-sm text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </a>
                </CardFooter>

              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
