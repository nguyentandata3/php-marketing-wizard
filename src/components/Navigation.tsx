import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Mail, User, Briefcase, Zap, Settings, MessageCircle } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Trang chủ", icon: User },
    { id: "skills", label: "Kỹ năng", icon: Zap },
    { id: "experience", label: "Kinh nghiệm", icon: Briefcase },
    { id: "services", label: "Dịch vụ", icon: Settings },
    { id: "contact", label: "Liên hệ", icon: MessageCircle }
  ];

  const handleTabClick = (tabId: string) => {
    onTabChange(tabId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="fixed left-0 top-0 h-full w-20 lg:w-80 bg-card/50 backdrop-blur-xl border-r border-border/50 z-50 hidden md:flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-tech rounded-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div className="hidden lg:block">
              <h2 className="font-bold text-lg">PHP Developer</h2>
              <p className="text-sm text-muted-foreground">Fullstack & Marketing</p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 p-4">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group ${
                    isActive 
                      ? 'bg-gradient-tech text-white shadow-lg' 
                      : 'hover:bg-muted/50 text-muted-foreground hover:text-primary'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'group-hover:text-primary'}`} />
                  <span className="hidden lg:block font-medium">{item.label}</span>
                  {isActive && (
                    <div className="hidden lg:block ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="p-4 border-t border-border/50">
          <Button 
            onClick={() => handleTabClick("contact")}
            className="w-full bg-gradient-creative hover:opacity-90"
          >
            <Mail className="mr-2 h-4 w-4" />
            <span className="hidden lg:block">Liên hệ ngay</span>
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-tech rounded-lg">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg">PHP Developer</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-background/95 backdrop-blur-lg border-b border-border/50">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? 'bg-gradient-tech text-white' 
                        : 'hover:bg-muted/50 text-muted-foreground hover:text-primary'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;