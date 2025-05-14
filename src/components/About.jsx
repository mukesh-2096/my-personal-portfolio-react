import React from 'react';
import { Button } from "../components/ui/Button";
import { motion } from "framer-motion";

const About = ({
  name = "Mukesh",
  location = "Narsipatnam",
  imageUrl = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=600",
  resumeLink = "#"
}) => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-br from-[#e4ecf3] via-[#e4ecf3] to-[#dce2ea]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-xl border-4 border-primary/20 shadow-lg">
              <img 
                src={imageUrl} 
                alt="Working on code" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed">
              Hi, I'm <span className="font-semibold text-primary">{name}</span>, a passionate developer based in <span className="font-semibold">{location}</span>. I love building things that live on the web — websites, apps, and everything in between.
            </p>

            <p className="text-lg leading-relaxed">
              My journey into web development began back in 2012 when I customized Tumblr themes. That playful exploration taught me a lot about how the web works.
            </p>

            <p className="text-lg leading-relaxed">
              Since then, I’ve worked in startups, agencies, and tech companies, focusing on creating clean, accessible, and inclusive user experiences.
            </p>

            <p className="text-lg leading-relaxed">
              Outside of coding, you’ll find me climbing rocks, hiking trails, or sipping coffee in cozy cafés.
            </p>

            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full bg-blue-600 text-white hover:bg-blue-500 shadow-sm">
                <a href={resumeLink} download>
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
