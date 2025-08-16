import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Download, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import avatar from "@/assets/avatar.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Avatar */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="w-64 h-80 rounded-xl overflow-hidden border-2 border-primary/30 shadow-2xl">
              <img 
                src={avatar}
                alt="PHP Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Code Content */}
          <div className="flex-1 animate-fade-in delay-300">
            <div className="bg-[#1e1e1e] rounded-xl p-6 font-mono text-sm overflow-x-auto border border-primary/20">
              <div className="text-gray-400">// Developer Information</div>
              <div className="mt-2">
                <span className="text-blue-400">public class</span> <span className="text-yellow-300">DEVELOPER_INFO</span>
              </div>
              <div className="text-gray-300 ml-4">{'{'}</div>
              
              <div className="ml-8 space-y-1">
                <div><span className="text-blue-400">public string</span> <span className="text-white">TÊN</span> <span className="text-gray-400">=</span> <span className="text-green-400">"PHP Developer"</span>;</div>
                <div><span className="text-blue-400">public string</span> <span className="text-white">CHUYÊN_MÔN</span> <span className="text-gray-400">=</span> <span className="text-green-400">"Fullstack & Marketing"</span>;</div>
                <div><span className="text-blue-400">public int</span> <span className="text-white">KINH_NGHIỆM</span> <span className="text-gray-400">=</span> <span className="text-orange-400">3</span>; <span className="text-gray-400">// năm</span></div>
                <div><span className="text-blue-400">public string</span> <span className="text-white">EMAIL</span> <span className="text-gray-400">=</span> <span className="text-green-400">"developer@example.com"</span>;</div>
                <div><span className="text-blue-400">public string</span> <span className="text-white">ĐIỆN_THOẠI</span> <span className="text-gray-400">=</span> <span className="text-green-400">"+84 123 456 789"</span>;</div>
                <div><span className="text-blue-400">public bool</span> <span className="text-white">SẴN_SÀNG_LÀM_VIỆC</span> <span className="text-gray-400">=</span> <span className="text-purple-400">true</span>;</div>
              </div>
              
              <div className="text-gray-300 ml-4 mt-2">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;