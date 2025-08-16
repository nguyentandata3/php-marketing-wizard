import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = (value: string) => {
    if (value !== activeTab) {
      setIsLoading(true);
      setTimeout(() => {
        setActiveTab(value);
        setIsLoading(false);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      
      <main className="flex-1 ml-20 lg:ml-80 relative overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
              <p className="text-muted-foreground animate-pulse">Đang tải...</p>
            </div>
          </div>
        )}
        
        <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <Tabs value={activeTab} className="w-full">
            <TabsContent value="home" className="mt-0 border-0 outline-0">
              <Hero />
            </TabsContent>
            
            <TabsContent value="skills" className="mt-0 border-0 outline-0">
              <div className="animate-fade-in">
                <Skills />
              </div>
            </TabsContent>
            
            <TabsContent value="experience" className="mt-0 border-0 outline-0">
              <div className="animate-fade-in">
                <Experience />
              </div>
            </TabsContent>
            
            <TabsContent value="services" className="mt-0 border-0 outline-0">
              <div className="animate-fade-in">
                <Services />
              </div>
            </TabsContent>
            
            <TabsContent value="contact" className="mt-0 border-0 outline-0">
              <div className="animate-fade-in">
                <Contact />
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <Footer />
      </main>
    </div>
  );
};

export default Index;
