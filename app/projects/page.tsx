"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "IconStreamer",
      category: "AI Design Tools",
      description:
        "Modern icon streaming and management platform for designers and developers. Provides seamless access to high-quality icons with real-time updates and integration capabilities.",
      image: "/images/iconstreamer.png?height=300&width=600",
      technologies: ["Next.js", "LiveKit", "Python", "Langchain", "LangGraph", "Supabase", "AWS", "CI/CD"],
      link: "https://www.iconstreamer.com/",
    },
    {
      id: 2,
      title: "Thinkrr.ai",
      category: "AI Voice & Sales Automation",
      description:
        "AI-driven voice agent platform automating inbound and outbound calls, CRM integration, and real-time appointment scheduling in multiple languages.",
      image: "/images/thinkrrai.png?height=300&width=600",
      technologies: ["React", "Node.js", "OpenAI", "Voice AI", "CRM Integration", "Multi-language", "REST API"],
      link: "https://thinkrr.ai/",
    },
    {
      id: 3,
      title: "SafePayment.ai",
      category: "AI Voice & FinTech",
      description:
        "Secure voice payment platform enabling PCI-compliant, AI-powered transactions and seamless integration with enterprise voice systems for enhanced security and compliance.",
      image: "/images/safepayment.png?height=300&width=600",
      technologies: ["React", "Framer Motion", "Voice AI", "STT/TTS", "Stripe", "Python", "PCI DSS", "Encryption"],
      link: "https://safepayment.ai/",
    },
    {
      id: 4,
      title: "RingAI",
      category: "AI Voice & Web3",
      description:
        "AI phone agent solution for 24/7 multilingual customer support, sales automation, analytics, and Web3/crypto payment integration with advanced features.",
      image: "/images/tryringai.png?height=300&width=600",
      technologies: ["React", "Node.js", "Prisma", "AI Voice", "VAPI AI", "CRM", "Multi-language", "web3.js", "Crypto"],
      link: "https://www.tryring.ai/",
    },
    {
      id: 5,
      title: "SPENDiD",
      category: "FinTech & AI & AWS",
      description:
        "Predictive analytics platform delivering financial insights, budgeting tools, and personalized wellness solutions via web applications and APIs for comprehensive financial management.",
      image: "/images/finance_spendid.png?height=300&width=600",
      technologies: ["Vue.js", "AWS Lambda", "OpenAI", "CloudFront", "CI/CD", "Financial APIs", "Predictive Analytics"],
      link: "https://spendid.io",
    },
    {
      id: 6,
      title: "Stackguardian",
      category: "Cloud Infrastructure",
      description:
        "Comprehensive platform for orchestrating infrastructure as code templates and organizational policies, featuring a robust marketplace and no-code policy builder.",
      image: "/images/stackguardian.png?height=300&width=600",
      technologies: ["Terraform", "Ansible", "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Grafana", "Prometheus"],
      link: "https://www.stackguardian.io/",
    },
    {
      id: 7,
      title: "ControlMonkey",
      category: "Cloud Operations",
      description:
        "Cloud operations solution enabling automated governance, compliance, and proactive management of cloud infrastructure through advanced IaC workflows.",
      image: "/images/control_monkey.png?height=300&width=600",
      technologies: ["Pulumi", "Jenkins", "Ansible", "Cilium", "Docker", "Kubernetes", "React", "AWS Lambda", "Node.js"],
      link: "https://controlmonkey.io/",
    },
    {
      id: 8,
      title: "Ankra",
      category: "Cloud Infrastructure",
      description:
        "Automation platform for cloud infrastructure, delivering seamless provisioning, integration, and enhanced developer efficiency across environments.",
      image: "/images/ankra.png?height=300&width=600",
      technologies: ["Jenkins", "Puppet", "Terraform", "Docker", "GIT", "Kubernetes", "Containerization", "Microservices"],
      link: "https://www.ankra.io/",
    },
    {
      id: 9,
      title: "AliExpress",
      category: "E-commerce & Cloud",
      description:
        "Global e-commerce platform utilizing scalable backend infrastructure, advanced cloud services, and interactive frontend technologies for high-performance online shopping.",
      image: "/images/aliexpress.png?height=300&width=600",
      technologies: ["Java", "Tengine", "React", "Vue.js", "Alibaba Cloud", "ECS", "Object Storage", "CDN", "Microservices"],
      link: "https://www.aliexpress.com/",
    },
    {
      id: 10,
      title: "BinahAI",
      category: "Healthcare & AI",
      description:
        "Led DevOps automation and cloud infrastructure for AI-powered, contactless health monitoring platform with advanced video analysis and ML health insights.",
      image: "/images/healthcare_binahai.png?height=300&width=600",
      technologies: ["GCP Function", "Serverless", "CI/CD", "React Native", "OpenAI", "Firebase", "Supabase", "HIPAA"],
      link: "https://binah.ai/",
    },
    {
      id: 11,
      title: "ContractPower",
      category: "AI & DevOps",
      description:
        "Architected and automated cloud infrastructure for AI-powered document intelligence platform, enabling secure and scalable contract review for renewable energy sector.",
      image: "/images/AI_contactpower.png?height=300&width=600",
      technologies: ["GCP", "Terraform", "CI/CD", "React", "Flask", "Document AI", "Docker", "LoadBalance", "K8s"],
      link: "https://contractpower.ai",
    },
    {
      id: 12,
      title: "AI HomeDesign",
      category: "AI Real Estate & DevOps",
      description:
        "Implemented CI/CD pipelines and Azure cloud automation for real estate photo editing platform, enabling rapid and reliable deployments for virtual staging services.",
      image: "/images/aihomedesign.png?height=300&width=600",
      technologies: ["Nuxt.js", "Vue.js", ".NET", "MS SQL", "CI/CD", "Entity Framework", "RESTful API", "Azure DevOps"],
      link: "https://aihomedesign.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 text-gray-900">
      {/* Canadian Flag Decoration */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-white to-red-600 z-50"></div>
      
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
        {/* Background Maple Leaves */}
        <div className="absolute top-20 right-20 text-9xl opacity-5 pointer-events-none">🍁</div>
        <div className="absolute bottom-20 left-20 text-9xl opacity-5 pointer-events-none">🍁</div>
        
        <div className="mb-12">
          <Button 
            variant="ghost" 
            asChild 
            className="mb-6 text-red-600 hover:text-red-700 hover:bg-red-50 font-semibold"
          >
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
              <span>🍁</span>
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent flex items-center gap-3">
              <span>🍁</span> My Projects <span>🍁</span>
            </span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-700 font-medium">
            A collection of projects I've worked on throughout my career,
            showcasing my skills and expertise in various technologies and
            domains from across Canada 🇨🇦
          </p>
          <Separator className="mt-8 bg-red-200 h-1" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-2 border-red-300 bg-white transition-all hover:border-red-600 hover:shadow-2xl hover:shadow-red-200 animate-fadeIn"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute top-2 right-2 z-10 text-3xl">🍁</div>
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 flex justify-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    size="sm"
                    variant="outline"
                    className="mr-2 h-8 w-8 rounded-full p-0 bg-red-600 border-2 border-white hover:bg-red-700 shadow-lg"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 text-white" />
                    <span className="sr-only">Visit site</span>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-white to-red-50">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-red-700">{project.title}</h3>
                  <Badge
                    variant="outline"
                    className="border-2 border-red-400 bg-red-100 text-red-700 font-semibold text-xs"
                  >
                    {project.category}
                  </Badge>
                </div>
                <p className="mb-4 text-sm text-gray-700 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-red-600 text-white hover:bg-red-700 font-medium text-xs"
                    >
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
  );
}
