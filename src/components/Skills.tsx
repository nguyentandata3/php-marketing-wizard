import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Server, Smartphone, TrendingUp, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Backend Development",
      gradient: "bg-gradient-tech",
      skills: ["PHP", "Laravel", "MySQL", "API Development", "Backend Architecture"],
      description: "3 năm kinh nghiệm phát triển backend với PHP và Laravel"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Frontend & Mobile",
      gradient: "bg-gradient-creative",
      skills: ["ReactJS", "JavaScript", "HTML/CSS", "Responsive Design", "Bot Telegram"],
      description: "Phát triển giao diện người dùng và ứng dụng bot"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Digital Marketing",
      gradient: "bg-gradient-tech",
      skills: ["Google Ads", "Landing Page", "SEO", "Facebook Marketing", "Content Creation"],
      description: "Tạo landing page hiệu quả và chiến lược marketing"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Payment & Integration",
      gradient: "bg-gradient-creative",
      skills: ["Sepay Integration", "Payment Gateway", "Form Processing", "API Integration"],
      description: "Tích hợp thanh toán và xử lý dữ liệu form"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Creative & Content",
      gradient: "bg-gradient-tech",
      skills: ["Photoshop", "Video TikTok", "Facebook Content", "Visual Design"],
      description: "Sáng tạo nội dung và thiết kế đa phương tiện"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "System Management",
      gradient: "bg-gradient-creative",
      skills: ["Hardware Management", "Software Management", "IT Support", "System Admin"],
      description: "Quản lý hệ thống máy tính trong môi trường doanh nghiệp"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kỹ năng & Chuyên môn
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kết hợp kỹ thuật lập trình với marketing và quản lý hệ thống
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-border/50 bg-gradient-card backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${category.gradient} text-white`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Skill Level Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            {[
              { name: "PHP/Laravel", level: 90 },
              { name: "ReactJS", level: 75 },
              { name: "MySQL/Database", level: 85 },
              { name: "API Development", level: 80 }
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-tech rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Marketing & Creative</h3>
            {[
              { name: "SEO/Landing Page", level: 85 },
              { name: "Google Ads", level: 80 },
              { name: "Content Creation", level: 75 },
              { name: "System Management", level: 70 }
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-creative rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%`, animationDelay: `${index * 200}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;