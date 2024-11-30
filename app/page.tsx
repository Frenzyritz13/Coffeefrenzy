"use client";

import { Coffee, MapPin, Send, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Exquisite Coffee Beans from India
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Cultivating Excellence in Every Bean
          </p>
          <Button
            size="lg"
            className="bg-[#8B4513] hover:bg-[#654321] text-white"
          >
            Explore Our Beans
          </Button>
        </div>
      </section>

      {/* Estate Overview */}
      <section className="py-20 bg-[#FDF5E6] px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#654321]">
            Our Estate
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1771&q=80"
                alt="Coffee Estate"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#654321]">
                A Legacy of Excellence
              </h3>
              <p className="text-gray-700 mb-6">
                Nestled in the pristine highlands at 1,500 meters above sea level,
                our estate spans over 200 hectares of carefully cultivated coffee
                plantations. For three generations, we've been nurturing the
                perfect conditions for growing exceptional coffee beans.
              </p>
              <div className="flex items-center gap-2 text-[#8B4513]">
                <MapPin className="h-5 w-5" />
                <span>Coorg</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Types */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#654321]">
            Our Premium Beans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coffeeTypes.map((coffee, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#654321]">
                    {coffee.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{coffee.description}</p>
                  <div className="flex items-center gap-2 text-[#8B4513]">
                    <Coffee className="h-5 w-5" />
                    <span>{coffee.type}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Hub */}
      <section className="py-20 bg-[#FDF5E6] px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#654321]">
            Coffee Knowledge Hub
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {knowledgeItems.map((item, index) => (
              <Card key={index} className="p-6">
                <Sprout className="h-12 w-12 text-[#8B4513] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#654321]">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#654321]">
            Get in Touch
          </h2>
          <Card className="p-8">
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
        </div>
      </section>
    </main>
  );
}

const coffeeTypes = [
  {
    name: "Blue Mountain Reserve",
    type: "Arabica",
    description:
      "Smooth, clean taste with an excellent balance of sweetness, acidity, and body.",
    image:
      "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1776&q=80",
  },
  {
    name: "Highland Peaberry",
    type: "Peaberry",
    description:
      "Bright, complex flavor with wine-like characteristics and chocolate notes.",
    image:
      "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1776&q=80",
  },
  {
    name: "Estate Blend",
    type: "Mixed Arabica",
    description:
      "A perfect harmony of flavors, combining different varieties from our estate.",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1776&q=80",
  },
];

const knowledgeItems = [
  {
    title: "Cultivation",
    description:
      "Learn about our sustainable farming practices and how we nurture our coffee plants from seedling to harvest.",
  },
  {
    title: "Processing",
    description:
      "Discover the meticulous steps we take to process our coffee beans, ensuring the highest quality in every batch.",
  },
  {
    title: "Brewing",
    description:
      "Master the art of brewing with our expert tips and techniques for different brewing methods.",
  },
];