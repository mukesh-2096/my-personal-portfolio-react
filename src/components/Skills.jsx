import React from 'react';
import { Card, CardContent } from "../components/ui/Card";
import { motion } from "framer-motion";

const Skills = ({
  skillCategories = [
    {
      category: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"]
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express", "MongoDB", "REST API"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Figma"]
    }
  ]
}) => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-[#e4ecf3] via-[#e4ecf3] to-[#dce2ea]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Skills & Expertise</h2>

        <motion.p
          className="mt-4 text-lg text-muted-foreground max-w-2xl "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          I've worked with a variety of technologies in the web development world.
          Here are my main areas of expertise:
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border border-border hover:shadow-md transition-shadow min-h-[200px] flex flex-col justify-between">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
