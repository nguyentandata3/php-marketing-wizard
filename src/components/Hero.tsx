import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Download, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import avatar from "@/assets/avatar.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Avatar */}
          <div className="relative mx-auto w-32 h-32 mb-8">
            <img 
              src={avatar}
              alt="Developer Avatar"
              className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-2xl animate-float"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-tech opacity-20 animate-glow" />
          </div>
          
          {/* Status Badge */}
          <Badge variant="secondary" className="bg-gradient-tech text-white border-0 px-4 py-2">
            🚀 Available for Work
          </Badge>
          
          {/* Main Heading */}
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-tech via-primary to-creative bg-clip-text text-transparent leading-tight">
              PHP Developer
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Backend • Frontend • Marketing Tech
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in">
            3 năm kinh nghiệm phát triển web với PHP, Laravel, ReactJS. 
            Chuyên tạo bot Telegram, landing page, SEO và quản lý hệ thống marketing.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto py-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Năm kinh nghiệm</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-creative">50+</div>
              <div className="text-sm text-muted-foreground">Dự án hoàn thành</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech">100%</div>
              <div className="text-sm text-muted-foreground">Khách hàng hài lòng</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-tech hover:shadow-glow transition-all duration-300 px-8">
              <Mail className="mr-2 h-5 w-5" />
              Liên hệ ngay
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <Download className="mr-2 h-5 w-5" />
              Tải CV
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-tech rounded-full opacity-10 animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-creative rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;