import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-gradient-to-br from-[#e4ecf3] via-[#e4ecf3] to-[#dce2ea] py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Mukesh</h3>
            <p className="text-muted-foreground">Web Developer & Designer</p>
          </div>
          
          {/* Footer Navigation */}
          <nav className="text-center md:text-right">
            <div className="mb-4">
              <a href="#home" className="text-sm hover:text-primary transition-colors mr-4">Home</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors mr-4">About</a>
              <a href="#skills" className="text-sm hover:text-primary transition-colors mr-4">Skills</a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors mr-4">Projects</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} mukesh. All rights reserved.
            </p>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
