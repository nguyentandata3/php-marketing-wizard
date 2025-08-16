import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "developer@email.com",
      description: "Phản hồi trong 24h"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Điện thoại",
      value: "+84 123 456 789",
      description: "Sẵn sàng tư vấn"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Địa điểm",
      value: "Việt Nam",
      description: "Làm việc remote"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Giờ làm việc",
      value: "8:00 - 22:00",
      description: "Thứ 2 - Chủ nhật"
    }
  ];

  const services = [
    "Phát triển Web (PHP/Laravel)",
    "Landing Page + Google Ads",
    "Bot Telegram",
    "Tích hợp thanh toán",
    "SEO & Digital Marketing",
    "Quản lý hệ thống IT"
  ];

  return (
    <section className="py-20 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Liên hệ với tôi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sẵn sàng hỗ trợ dự án của bạn. Tư vấn miễn phí và báo giá trong 24h
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Thông tin liên hệ</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gradient-card backdrop-blur-sm border border-border/50">
                    <div className="p-2 bg-gradient-tech rounded-lg text-white">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-foreground">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services List */}
            <Card className="bg-gradient-card backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Dịch vụ chính
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {service}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Status */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                🟢 Đang online - Sẵn sàng nhận dự án mới
              </Badge>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Gửi tin nhắn</CardTitle>
                <p className="text-muted-foreground">
                  Mô tả chi tiết dự án của bạn để được tư vấn và báo giá chính xác nhất
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Họ tên *</label>
                      <Input placeholder="Nhập họ tên của bạn" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Số điện thoại</label>
                      <Input placeholder="+84 123 456 789" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Loại dự án</label>
                      <select className="w-full p-2 rounded-md border border-input bg-background text-foreground">
                        <option>Website/Landing Page</option>
                        <option>Bot Telegram</option>
                        <option>E-commerce</option>
                        <option>Digital Marketing</option>
                        <option>Tích hợp thanh toán</option>
                        <option>Quản lý hệ thống IT</option>
                        <option>Khác</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Ngân sách dự kiến</label>
                    <select className="w-full p-2 rounded-md border border-input bg-background text-foreground">
                      <option>Dưới 5 triệu VNĐ</option>
                      <option>5 - 10 triệu VNĐ</option>
                      <option>10 - 20 triệu VNĐ</option>
                      <option>20 - 50 triệu VNĐ</option>
                      <option>Trên 50 triệu VNĐ</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Mô tả dự án *</label>
                    <Textarea 
                      placeholder="Mô tả chi tiết về dự án: yêu cầu chức năng, timeline, mục tiêu kinh doanh..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <label className="text-sm text-muted-foreground">
                      Tôi đồng ý với việc xử lý thông tin cá nhân theo chính sách bảo mật
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 bg-gradient-tech">
                      <Send className="mr-2 h-4 w-4" />
                      Gửi tin nhắn
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat qua Telegram
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Response Time */}
            <div className="mt-6 p-4 bg-gradient-hero rounded-lg border border-border/50 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Cam kết phản hồi nhanh</p>
                  <p className="text-sm text-muted-foreground">
                    Tin nhắn sẽ được phản hồi trong vòng 2-4 giờ trong giờ làm việc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;