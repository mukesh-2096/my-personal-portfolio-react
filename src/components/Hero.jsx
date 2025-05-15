import React from 'react';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const Hero = ({ name = "Mukesh", role = "Web Developer & Designer" }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-br from-[#f5f7fa] via-[#e4ecf3] to-[#dce2ea]"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <motion.div
          className="space-y-8 order-2 sm:order-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-3">
            <div className="text-lg text-primary font-semibold tracking-wide uppercase">Hello, I'm</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight">
              {name}
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-700 font-medium">
              {role}
            </h2>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            I design and build modern, user-friendly web experiences that are responsive, performant, and beautiful.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button size="lg" className="rounded-full bg-blue-600 text-white hover:bg-blue-500 shadow-sm">
              Get in touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-gray-400 text-gray-700 hover:bg-gray-100 shadow-sm"
            >
              View Projects
            </Button>
          </div>

          <div className="flex items-center gap-5 pt-6">
            {[
              {
                href: "https://github.com/mukesh-2096",
                label: "GitHub",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                ),
              },
              {
                href: "https://www.linkedin.com/in/mukesh-vantakula/",
                label: "LinkedIn",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                ),
              },
              {
                href: "#",
                label: "Twitter",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                ),
              },
              {
                href: "mailto:durgasaimukeshvantakula5764@gmail.com",
                label: "Email",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                ),
              },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-500 hover:text-primary transition-colors p-2 rounded-full border border-gray-300 hover:shadow-md"
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          className="flex justify-center sm:justify-end order-1 sm:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl">
            <img
              src={profileImg}
              alt="Profile"
              className="object-cover w-full h-full object-[center_10%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
