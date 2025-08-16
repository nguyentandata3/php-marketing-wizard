import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  MessageCircle,
  Heart
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Phát triển Web PHP/Laravel",
    "Landing Page & SEO",
    "Bot Telegram",
    "Digital Marketing",
    "Tích hợp thanh toán",
    "Quản lý hệ thống IT"
  ];

  const technologies = [
    "PHP", "Laravel", "ReactJS", "MySQL", 
    "JavaScript", "Telegram Bot API", "SEO", 
    "Google Ads", "Photoshop", "Sepay"
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-tech rounded-lg">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg">PHP Developer</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              3 năm kinh nghiệm phát triển web, chuyên PHP/Laravel, ReactJS và digital marketing. 
              Giải pháp toàn diện cho doanh nghiệp.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-600">
                Sẵn sàng nhận dự án mới
              </Badge>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Dịch vụ</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button className="text-muted-foreground hover:text-primary transition-colors text-sm text-left">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Công nghệ</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>developer@email.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+84 123 456 789</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Việt Nam (Remote)</span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-gradient-hero rounded-lg border border-border/50">
              <p className="text-xs text-muted-foreground mb-2">Phản hồi nhanh:</p>
              <p className="text-sm font-medium">2-4 giờ trong giờ làm việc</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} PHP Developer CV.</span>
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>in Vietnam</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-primary transition-colors">
                Terms of Service
              </button>
              <Badge variant="outline" className="text-xs">
                CV Website v1.0
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;