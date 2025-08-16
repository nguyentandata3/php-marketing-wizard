import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Globe, 
  Bot, 
  TrendingUp, 
  CreditCard, 
  Camera,
  Settings,
  Megaphone,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Phát triển Web Backend",
      description: "Xây dựng backend mạnh mẽ với PHP, Laravel và MySQL. API RESTful, xử lý dữ liệu phức tạp.",
      features: ["PHP/Laravel Development", "MySQL Database Design", "RESTful API", "Server Management"],
      price: "Từ 5,000,000 VNĐ",
      gradient: "bg-gradient-tech"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Landing Page & Frontend",
      description: "Thiết kế landing page chuyển đổi cao với ReactJS, tối ưu cho Google Ads và SEO.",
      features: ["ReactJS Development", "Responsive Design", "SEO Optimization", "High Conversion Rate"],
      price: "Từ 3,000,000 VNĐ",
      gradient: "bg-gradient-creative"
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Bot Telegram tự động",
      description: "Phát triển bot Telegram cho customer service, bán hàng và quản lý đơn hàng tự động.",
      features: ["Custom Bot Logic", "Payment Integration", "Auto Response", "Order Management"],
      price: "Từ 2,000,000 VNĐ",
      gradient: "bg-gradient-tech"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Marketing & SEO",
      description: "Chiến lược marketing toàn diện: Google Ads, SEO, content cho social media.",
      features: ["Google Ads Setup", "SEO Strategy", "Content Creation", "Analytics Tracking"],
      price: "Từ 4,000,000 VNĐ",
      gradient: "bg-gradient-creative"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Tích hợp thanh toán",
      description: "Tích hợp Sepay và các cổng thanh toán khác, xử lý form và quản lý giao dịch.",
      features: ["Sepay Integration", "Payment Gateway", "Transaction Management", "Security Implementation"],
      price: "Từ 1,500,000 VNĐ",
      gradient: "bg-gradient-tech"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Content & Design",
      description: "Sáng tạo nội dung: video TikTok, post Facebook, thiết kế Photoshop cho marketing.",
      features: ["TikTok Video Creation", "Facebook Content", "Photoshop Design", "Brand Identity"],
      price: "Từ 2,500,000 VNĐ",
      gradient: "bg-gradient-creative"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Quản lý hệ thống IT",
      description: "Quản lý phần cứng, phần mềm, bảo trì hệ thống máy tính cho doanh nghiệp.",
      features: ["Hardware Management", "Software Installation", "System Maintenance", "IT Support"],
      price: "Từ 3,500,000 VNĐ/tháng",
      gradient: "bg-gradient-tech"
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Tư vấn Marketing Tech",
      description: "Tư vấn chiến lược kết hợp công nghệ và marketing để tối ưu hiệu quả kinh doanh.",
      features: ["Strategy Consulting", "Tech Stack Advice", "Marketing Automation", "ROI Optimization"],
      price: "Từ 1,000,000 VNĐ/session",
      gradient: "bg-gradient-creative"
    }
  ];

  const packages = [
    {
      name: "Startup Package",
      price: "8,000,000 VNĐ",
      description: "Giải pháp hoàn chỉnh cho startup",
      features: [
        "Landing page responsive",
        "Backend cơ bản với Laravel",
        "Tích hợp thanh toán Sepay",
        "SEO cơ bản",
        "Support 3 tháng"
      ],
      popular: false
    },
    {
      name: "Business Package",
      price: "15,000,000 VNĐ",
      description: "Giải pháp toàn diện cho doanh nghiệp",
      features: [
        "Website hoàn chỉnh + Admin panel",
        "Bot Telegram tự động",
        "Chiến lược Google Ads + SEO",
        "Content marketing 3 tháng",
        "Quản lý hệ thống IT",
        "Support 6 tháng"
      ],
      popular: true
    },
    {
      name: "Enterprise Package",
      price: "25,000,000 VNĐ",
      description: "Giải pháp tùy chỉnh cho doanh nghiệp lớn",
      features: [
        "Hệ thống web phức tạp",
        "Multiple bots và automation",
        "Marketing campaign management",
        "Custom integrations",
        "Full IT management",
        "Support 1 năm"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dịch vụ & Giải pháp
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kết hợp công nghệ và marketing để tạo ra giải pháp toàn diện cho doanh nghiệp
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 bg-gradient-card backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${service.gradient} flex items-center justify-center text-white mb-4`}>
                  {service.icon}
                </div>
                <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-primary">{service.price}</span>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Package Pricing */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Gói dịch vụ trọn gói</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-2 ${pkg.popular ? 'border-primary shadow-glow' : 'border-border/50'} bg-gradient-card backdrop-blur-sm`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-creative text-white px-3 py-1 text-xs font-semibold">
                    Phổ biến nhất
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.popular ? 'bg-gradient-creative' : ''}`}>
                    Chọn gói này
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-hero border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Sẵn sàng bắt đầu dự án?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Liên hệ ngay để được tư vấn miễn phí và báo giá chi tiết cho dự án của bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-tech">
                Tư vấn miễn phí
              </Button>
              <Button variant="outline" size="lg">
                Xem portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;