import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function EstatesPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 text-[#654321]">
          Our Coffee Estates
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {estates.map((estate, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={estate.image}
                alt={estate.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-[#654321]">
                  {estate.name}
                </h2>
                <p className="text-gray-700 mb-4">{estate.description}</p>
                <div className="flex items-center gap-2 text-[#8B4513]">
                  <MapPin className="h-5 w-5" />
                  <span>{estate.location}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

const estates = [
  {
    name: "Blue Mountain Estate",
    location: "Blue Mountains, Jamaica",
    description: "Our flagship estate situated at 1,500 meters above sea level, featuring rich volcanic soil and perfect climate conditions for premium coffee cultivation.",
    image: "https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1771&q=80",
  },
  {
    name: "Valley View Plantation",
    location: "Kingston Valley, Jamaica",
    description: "A historic plantation dating back to 1920, known for its traditional processing methods and exceptional bean quality.",
    image: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
  },
];