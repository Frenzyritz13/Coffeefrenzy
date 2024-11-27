import { Card } from "@/components/ui/card";

export default function ProcessingPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 text-[#654321]">
          Our Processing Methods
        </h1>
        
        <div className="space-y-12">
          {processes.map((process, index) => (
            <Card key={index} className="p-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-[#654321]">
                    {process.name}
                  </h2>
                  <p className="text-gray-700 mb-4">{process.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {process.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <img
                    src={process.image}
                    alt={process.name}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

const processes = [
  {
    name: "Washed Process",
    description: "Our signature washing process removes the cherry pulp before drying, resulting in a clean, bright cup profile.",
    benefits: [
      "Enhanced clarity in flavor",
      "Consistent quality",
      "Bright acidity",
      "Clean aftertaste",
    ],
    image: "https://images.unsplash.com/photo-1599639932525-532675a3e77d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1776&q=80",
  },
  {
    name: "Natural Process",
    description: "Beans are dried with the cherry intact, allowing for natural fermentation and sugar development.",
    benefits: [
      "Fuller body",
      "Enhanced sweetness",
      "Complex fruit notes",
      "Unique flavor profiles",
    ],
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1776&q=80",
  },
];