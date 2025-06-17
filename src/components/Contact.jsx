import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { Card, CardContent } from "../components/ui/Card";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "0a82b97c-356c-4962-a6af-462b69cda3f8"); // Replace this

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.error("Submission error:", data);
      setResult(`Error: ${data.message}`);
    }
  };

  return (
    <section
      id="contact"
      className="pt-24 pb-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#e4ecf3] via-[#e4ecf3] to-[#dce2ea]"
    >
      <div className="section-container">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Get In Touch</h2>

        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Have a question or want to work together? Feel free to contact me!
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <Card className="p-6">
            <CardContent className="p-0">
              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" name="email" type="email" placeholder="Your email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" name="subject" placeholder="Subject" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-500 shadow-sm">
                  Send Message
                </Button>

                <p className="text-center text-sm text-muted-foreground">{result}</p>
              </form>
            </CardContent>
          </Card>

          {/* Right side content (Contact Info + Social Links) */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span>(+91) 8179831797</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>durgasaimukeshvantakula5764@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Narsipatnam, Vishakapatnam</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a href="https://github.com/mukesh-2096" className="bg-secondary p-3 rounded-full text-foreground hover:text-primary transition-colors" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </a>
                <a href="www.linkedin.com/in/mukesh-vantakula" className="bg-secondary p-3 rounded-full text-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                {/* <a href="#" className="bg-secondary p-3 rounded-full text-foreground hover:text-primary transition-colors" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                </a> */}
                <a href="https://www.instagram.com/mukesh_2_0_9_6/" className="bg-secondary p-3 rounded-full text-foreground hover:text-primary transition-colors" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
