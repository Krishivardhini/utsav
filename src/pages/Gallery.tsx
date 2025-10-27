import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroIndian from "@/assets/hero-indian-celebration.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";

const Gallery = () => {
  const categories = [
    { id: "all", label: "All Events" },
    { id: "weddings", label: "Weddings" },
    { id: "prewedding", label: "Pre-Wedding" },
    { id: "baby", label: "Baby Celebrations" },
    { id: "festivals", label: "Festivals" },
  ];

  const galleryItems = [
    { category: "weddings", image: heroWedding, title: "Traditional Wedding Ceremony", description: "Grand celebration with 500+ guests" },
    { category: "prewedding", image: heroIndian, title: "Vibrant Mehendi Celebration", description: "Colorful traditional mehendi night" },
    { category: "weddings", image: heroWedding, title: "Royal Wedding Decor", description: "Luxurious palace-themed wedding" },
    { category: "baby", image: heroIndian, title: "Godh Bharai Ceremony", description: "Beautiful baby shower celebration" },
    { category: "festivals", image: heroIndian, title: "Diwali Celebration", description: "Corporate Diwali party" },
    { category: "prewedding", image: heroWedding, title: "Sangeet Night", description: "Musical evening with family" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Gallery
            </h1>
            <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the beautiful celebrations we've crafted
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto mb-12 grid-cols-3 md:grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="font-poppins">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {galleryItems
                    .filter((item) => category.id === "all" || item.category === category.id)
                    .map((item, index) => (
                      <Card
                        key={index}
                        className="overflow-hidden border-border hover:shadow-elegant transition-all duration-300 animate-scale-in cursor-pointer group"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="relative overflow-hidden aspect-[4/3]">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <div className="text-white">
                              <h3 className="font-playfair text-xl font-semibold mb-1">
                                {item.title}
                              </h3>
                              <p className="font-poppins text-sm">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
