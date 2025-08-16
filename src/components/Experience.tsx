import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "PHP Developer & Marketing Specialist",
      company: "Công ty Marketing",
      location: "Việt Nam",
      period: "2021 - Hiện tại",
      type: "Full-time",
      description: "Phát triển và duy trì các hệ thống web, tạo landing page cho chiến dịch Google Ads, quản lý hệ thống IT của công ty",
      achievements: [
        "Phát triển 30+ landing page với tỷ lệ chuyển đổi cao",
        "Tích hợp hệ thống thanh toán Sepay vào các dự án",
        "Xây dựng bot Telegram phục vụ customer service",
        "Quản lý và bảo trì hệ thống máy tính toàn công ty",
        "Tối ưu SEO cho website chính đạt top 3 Google"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "ReactJS", "Google Ads", "SEO"]
    },
    {
      title: "Freelance Web Developer",
      company: "Tự do",
      location: "Remote",
      period: "2020 - 2021",
      type: "Freelance",
      description: "Nhận các dự án phát triển web, tạo bot Telegram và thiết kế landing page cho các doanh nghiệp nhỏ",
      achievements: [
        "Hoàn thành 20+ dự án web cho khách hàng",
        "Phát triển 5+ bot Telegram tự động",
        "Tạo hệ thống quản lý nội dung cho fanpage Facebook",
        "Thiết kế và cắt video TikTok marketing"
      ],
      technologies: ["PHP", "JavaScript", "Telegram Bot API", "Photoshop", "Video Editing"]
    }
  ];

  const projects = [
    {
      title: "E-commerce Landing Page System",
      description: "Hệ thống tạo landing page tự động với tích hợp thanh toán Sepay",
      tech: ["Laravel", "ReactJS", "Sepay API", "MySQL"]
    },
    {
      title: "Telegram Customer Support Bot",
      description: "Bot tự động trả lời khách hàng và chuyển tiếp đơn hàng",
      tech: ["PHP", "Telegram Bot API", "Webhook"]
    },
    {
      title: "SEO-Optimized Corporate Website",
      description: "Website doanh nghiệp với SEO tối ưu, đạt top ranking Google",
      tech: ["Laravel", "SEO", "Google Analytics", "Schema Markup"]
    },
    {
      title: "Facebook Content Management System",
      description: "Hệ thống quản lý và đăng nội dung tự động cho fanpage",
      tech: ["PHP", "Facebook Graph API", "Cron Jobs"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kinh nghiệm làm việc
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            3 năm phát triển và triển khai các giải pháp web cho doanh nghiệp
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-20">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-card backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Thành tựu chính:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Công nghệ sử dụng:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Projects */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Dự án tiêu biểu</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-gradient-card backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;