"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 text-[#654321]">
          Contact Us
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-[#654321]">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <Input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#8B4513] hover:bg-[#654321] text-white"
              >
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-[#654321]">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="h-5 w-5 text-[#8B4513]" />
                  <span>Bengaluru, India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="h-5 w-5 text-[#8B4513]" />
                  <span>+91 8446025694</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="h-5 w-5 text-[#8B4513]" />
                  <span>ritvi@frenzy.works</span>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-[#654321]">
                Business Hours
              </h2>
              <div className="space-y-2 text-gray-700">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}