import { Coffee } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function BeansPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 text-[#654321]">
          Our Premium Coffee Beans
        </h1>
        
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
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#8B4513]">
                    <Coffee className="h-5 w-5" />
                    <span>{coffee.type}</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Altitude: {coffee.altitude}
                  </p>
                  <p className="text-sm text-gray-500">
                    Process: {coffee.process}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

const coffeeTypes = [
  {
    name: "Blue Mountain Reserve",
    type: "Arabica",
    description: "Smooth, clean taste with an excellent balance of sweetness, acidity, and body.",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1776&q=80",
    altitude: "1,500 - 1,800m",
    process: "Washed",
  },
  {
    name: "Highland Peaberry",
    type: "Peaberry",
    description: "Bright, complex flavor with wine-like characteristics and chocolate notes.",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1776&q=80",
    altitude: "1,600 - 1,900m",
    process: "Natural",
  },
  {
    name: "Estate Blend",
    type: "Mixed Arabica",
    description: "A perfect harmony of flavors, combining different varieties from our estate.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1776&q=80",
    altitude: "1,500 - 1,700m",
    process: "Mixed",
  },
];