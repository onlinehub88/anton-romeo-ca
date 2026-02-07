"use client";

import type React from "react";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUp,
  Code,
  Download,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Linkedin,
  Phone,
} from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [randomStyles, setRandomStyles] = useState<
    {
      top: string;
      left: string;
      width: string;
      height: string;
      opacity: number;
      animation: string;
    }[]
  >([]);

  useEffect(() => {
    // Generate random styles for stars
    const styles = Array.from({ length: 100 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 2 + 1}px`,
      height: `${Math.random() * 2 + 1}px`,
      opacity: Math.random() * 0.5 + 0.2,
      animation: `twinkle ${Math.random() * 5 + 5}s ease-in-out infinite ${
        Math.random() * 5
      }s`,
    }));
    setRandomStyles(styles);
  }, []);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollTop(scrollTop > 300); // Show button after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)
    ) {
      errs.email = "Invalid email address";
    }
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSending(true);
    try {
      await emailjs.send(
        "service_dk7gmr5", // <-- replace with your EmailJS service ID
        "template_a14dxiw", // <-- replace with your EmailJS template ID
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        {
          publicKey: "T_ux0mJw58wKMixD9", // <-- replace with your EmailJS public key
        }
      );
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setErrors({ form: "Failed to send message. Please try again." });
    } finally {
      setSending(false);
    }
  };

  const featuredProjects = [
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 text-gray-900">
      {/* Canadian Flag Decoration */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-white to-red-600 z-50"></div>
      
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-red-600 p-0 backdrop-blur-sm border-2 border-white hover:bg-red-700 hover:scale-110 transition-all duration-300 shadow-lg ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 text-white" />
      </Button>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-red-700">
        <div className="absolute inset-0 z-0">
          {/* Maple Leaf Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-white text-9xl">🍁</div>
            <div className="absolute top-40 right-20 text-white text-6xl">🍁</div>
            <div className="absolute bottom-20 left-1/4 text-white text-7xl">🍁</div>
            <div className="absolute bottom-40 right-1/3 text-white text-5xl">🍁</div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-red-600/50 to-red-800/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15)_0%,rgba(220,38,38,0)_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.1)_0%,rgba(220,38,38,0)_60%)]"></div>
          <div className="absolute inset-0">
            {randomStyles.map((style, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={style}
              />
            ))}
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8 animate-fadeIn">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border-2 border-white bg-white/95 px-4 py-2 text-sm backdrop-blur-sm shadow-lg">
                  <span className="mr-2 text-xl">🍁</span>
                  <span className="font-semibold text-red-600">AI Full Stack Engineer</span>
                  <span className="ml-2 text-xl">🍁</span>
                </div>
                <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white drop-shadow-lg">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                    Anton Romeo
                  </span>
                </h1>
                <p className="max-w-2xl text-xl text-white/95 drop-shadow-md">
                  AI Full-Stack Engineer with 10 years of experience building production-grade web and mobile applications powered by modern AI systems. Specialized in LLM-driven features, RAG pipelines, and intelligent backend services.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="animate-slideInLeft bg-white text-red-600 hover:bg-red-50 font-semibold shadow-lg border-2 border-white"
                >
                  <Link href="#contact">
                    Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="animate-slideInLeft animation-delay-100 border-2 border-white text-white hover:bg-white/20 font-semibold backdrop-blur-sm"
                >
                  <Link href="#projects">View my work</Link>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="animate-slideInLeft animation-delay-200 text-white hover:bg-white/20 font-semibold backdrop-blur-sm"
                >
                  <Link href="/cv" className="group flex items-center gap-1">
                    <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
                    Download CV
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30">
                  <MapPin className="h-4 w-4 text-white" />
                  <span className="text-white font-medium">🇨🇦 Edmundston, NB, Canada</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30">
                  <Mail className="h-4 w-4 text-white" />
                  <span className="text-white font-medium">antonr24710@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30">
                  <Phone className="h-4 w-4 text-white" />
                  <span className="text-white font-medium">+1 251 250 0203</span>
                </div>
              </div>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-xs">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 to-red-200/30 opacity-50 blur-3xl"></div>
              <div className="absolute -top-4 -right-4 text-6xl z-10 animate-bounce">🍁</div>
              <div className="relative h-full w-full animate-float">
                <div className="absolute inset-0 rounded-full border-8 border-white shadow-2xl"></div>
                <Image
                  src="/anton.jpg?height=300&width=300"
                  alt="Developer illustration"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover rounded-full border-4 border-red-600"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t-4 border-red-600 bg-white py-24 relative">
        <div className="absolute top-10 right-10 text-8xl opacity-5">🍁</div>
        <div className="absolute bottom-10 left-10 text-8xl opacity-5">🍁</div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-fadeIn">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent">
                🍁 About Me 🍁
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-700 font-medium">
              With 10 years of experience building production-grade web and mobile applications powered by modern AI systems. Specialized in LLM-driven features, RAG pipelines, intelligent backend services, and delivering secure, low-latency systems built for real-world adoption.
            </p>
          </div>

          <div className="mt-16">
            <Tabs defaultValue="profile" className="mx-auto max-w-4xl">
              <TabsList className="grid w-full grid-cols-3 bg-red-100 border-2 border-red-300 p-1">
                <TabsTrigger
                  value="profile"
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white font-semibold"
                >
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white font-semibold"
                >
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  value="interests"
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white font-semibold"
                >
                  Interests
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="profile"
                className="mt-6 space-y-6 rounded-xl border-2 border-red-200 bg-red-50/50 p-6 backdrop-blur-sm animate-fadeIn shadow-lg"
              >
                <p className="text-gray-800 leading-relaxed">
                  AI Full-Stack Engineer with 10 years of experience building production-grade web and mobile applications powered by modern AI systems. Specialized in LLM-driven features, RAG pipelines, and intelligent backend services, with a strong balance of web and mobile app development.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  Experienced in designing and deploying scalable AI microservices, integrating LLMs into real user workflows such as chat assistants, document automation, and semantic search. Skilled in FastAPI, Node.js, cloud-native deployment on AWS, and delivering secure, low-latency systems that are built for real-world adoption. Known for writing clean, maintainable code and translating complex AI capabilities into reliable, user-focused products.
                </p>
                <div className="rounded-lg border-2 border-red-200 bg-white p-4 shadow-md">
                  <p className="italic text-red-700 font-medium flex items-center gap-2">
                    <span>🍁</span>
                    "Code is read much more often than it is written."
                    <span>🍁</span>
                  </p>
                </div>
                <div className="rounded-lg border-2 border-red-200 bg-white p-4 shadow-md">
                  <p className="italic text-red-700 font-medium flex items-center gap-2">
                    <span>🍁</span>
                    "Make it work, make it right, make it fast."
                    <span>🍁</span>
                  </p>
                </div>
              </TabsContent>
              <TabsContent
                value="skills"
                className="mt-6 space-y-6 rounded-xl border-2 border-red-200 bg-red-50/50 p-6 backdrop-blur-sm animate-fadeIn shadow-lg"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-red-600 flex items-center gap-2">
                    <span>🍁</span> Core Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Next.js",
                      "Angular",
                      "Prisma",
                      "GraphQL",
                      "Supabase",
                      "FastAPI",
                      "Node.js",
                      "Flask",
                      "Django",
                      "Docker",
                      "PostgreSQL",
                      "MongoDB",
                      "AWS",
                      "CI/CD",
                      "Kubernetes",
                      "GCP"
                    ].map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-2 border-red-400 bg-white text-red-600 hover:bg-red-600 hover:text-white transition-colors animate-fadeIn font-semibold"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-red-600 flex items-center gap-2">
                    <span>🍁</span> AI & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Artificial Intelligence",
                      "LangChain",
                      "LangGraph",
                      "RAG",
                      "Vector DBs",
                      "OpenAI API",
                      "GPT-4/5",
                      "Claude",
                      "Gemini",
                      "Elevenlabs",
                      "Whisper",
                      "Pinecone",
                      "Machine Learning",
                      "Tensorflow",
                      "Pytorch"
                    ].map((tool, index) => (
                      <Badge
                        key={tool}
                        variant="outline"
                        className="border-2 border-red-400 bg-white text-red-600 hover:bg-red-600 hover:text-white transition-colors animate-fadeIn font-semibold"
                        style={{ animationDelay: `${index * 50 + 500}ms` }}
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="interests"
                className="mt-6 space-y-6 rounded-xl border-2 border-red-200 bg-red-50/50 p-6 backdrop-blur-sm animate-fadeIn shadow-lg"
              >
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border-2 border-red-300 bg-white p-4 transition-all hover:bg-red-50 hover:scale-105 hover:border-red-500 animate-fadeIn animation-delay-100 shadow-md">
                    <h3 className="mb-2 font-bold text-red-600 flex items-center gap-2">
                      <span>⚽</span> Football
                    </h3>
                    <p className="text-sm text-gray-700">
                      Passionate about football as a team sport, following major leagues 
                      and tournaments, and enjoying the teamwork and strategic aspects of the game.
                    </p>
                  </div>
                  <div className="rounded-lg border-2 border-red-300 bg-white p-4 transition-all hover:bg-red-50 hover:scale-105 hover:border-red-500 animate-fadeIn animation-delay-200 shadow-md">
                    <h3 className="mb-2 font-bold text-red-600 flex items-center gap-2">
                      <span>🏒</span> Hockey
                    </h3>
                    <p className="text-sm text-gray-700">
                      Enthusiastic about hockey as a team sport, appreciating the speed, 
                      skill, and collaboration of the game while following NHL and international competitions.
                    </p>
                  </div>
                  <div className="rounded-lg border-2 border-red-300 bg-white p-4 transition-all hover:bg-red-50 hover:scale-105 hover:border-red-500 animate-fadeIn animation-delay-300 shadow-md">
                    <h3 className="mb-2 font-bold text-red-600 flex items-center gap-2">
                      <span>💡</span> Trending Technology Learning
                    </h3>
                    <p className="text-sm text-gray-700">
                      Constantly exploring emerging technologies, experimenting with
                      new frameworks, and staying ahead of industry trends.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="border-t-4 border-red-600 bg-gradient-to-br from-red-50 to-white py-24 relative"
      >
        <div className="absolute top-20 right-20 text-9xl opacity-5">🍁</div>
        <div className="absolute bottom-20 left-20 text-9xl opacity-5">🍁</div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-fadeIn">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent">
                🍁 Recent Projects 🍁
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-700 font-medium">
              Here are a few projects I've worked on recently.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="group overflow-hidden border-2 border-red-300 bg-white transition-all hover:border-red-600 hover:shadow-2xl hover:shadow-red-200 animate-fadeIn"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute top-2 right-2 z-10 text-3xl">🍁</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex justify-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className="mr-2 h-8 w-8 rounded-full p-0 bg-red-600 border-2 border-white hover:bg-red-700 shadow-lg"
                      >
                        <ExternalLink className="h-4 w-4 text-white" />
                        <span className="sr-only">Visit site</span>
                      </Button>
                    </a>
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-br from-white to-red-50">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-red-700">{project.title}</h3>
                    <Badge
                      variant="outline"
                      className="border-2 border-red-400 bg-red-100 text-red-700 font-semibold"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <p className="mb-4 text-sm text-gray-700">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-red-600 text-white hover:bg-red-700 font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              asChild
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold text-lg px-8 py-6 shadow-lg animate-pulse"
            >
              <Link href="/projects">
                View all projects <ArrowRight className="ml-2 h-5 w-5" /> <span className="ml-2">🍁</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-t-4 border-red-600 bg-white py-24 relative">
        <div className="absolute top-10 left-10 text-8xl opacity-5">🍁</div>
        <div className="absolute bottom-10 right-10 text-8xl opacity-5">🍁</div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-fadeIn">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent">
                🍁 Professional Skillset 🍁
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-700 font-medium">
              Technologies and tools I use daily to build production-grade AI-powered applications and intelligent backend services.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[ 
                {
                  name: "AI & GenAI",
                  description: "LangChain, LangGraph, CrewAI, RAG, Vector DBs (Pinecone, FAISS), LLM routing (GPT-4, Claude, Mistral, Gemini), Multi-agent workflows",
                },
                {
                  name: "Backend Development",
                  description: "FastAPI, Flask, Spring Boot, Django, Node.js, Express, REST/GraphQL, Celery, Redis, WebSockets",
                },
                {
                  name: "Frontend & Mobile",
                  description: "React, Next.js, TypeScript, Redux Toolkit, Zustand, Swift, Kotlin, Flutter, React Native",
                },
                {
                  name: "Data & Databases",
                  description: "PostgreSQL, MySQL, DynamoDB, MongoDB, Redshift, Supabase, ETL pipelines, Real-time analytics",
                },
                {
                  name: "Cloud & DevOps",
                  description:
                    "AWS (Lambda, ECS/EKS, S3, RDS, DynamoDB), GCP, Docker, Kubernetes, Terraform, CI/CD (GitHub Actions)",
                },
                {
                  name: "Languages",
                  description: "Python, JavaScript, TypeScript, Java, Go, SQL",
                },
                {
                  name: "AI Microservices",
                  description: "FastAPI, Containerization, Cloud-native deployment, Low-latency systems, Production AI",
                },
                {
                  name: "Best Practices",
                  description: "SOC 2 compliance, AES-256 encryption, TDD, Agile/Scrum, System observability, Git",
                },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border-2 border-red-300 bg-gradient-to-br from-white to-red-50 p-6 transition-all hover:border-red-600 hover:shadow-xl hover:shadow-red-200 hover:scale-105 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -right-10 -top-10 text-6xl opacity-10">🍁</div>
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-red-200/30 transition-transform group-hover:scale-150"></div>
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border-2 border-red-400 bg-red-600 text-white shadow-md">
                      <Code className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-red-700">{skill.name}</h3>
                    <p className="text-sm text-gray-700">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="border-t-4 border-red-600 bg-gradient-to-br from-red-600 via-red-500 to-red-700 py-24 relative"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 text-9xl text-white">🍁</div>
          <div className="absolute bottom-20 right-20 text-9xl text-white">🍁</div>
          <div className="absolute top-1/2 left-1/3 text-7xl text-white">🍁</div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center animate-fadeIn">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white drop-shadow-lg">
              <span className="flex items-center justify-center gap-3">
                <span>🍁</span> Get In Touch <span>🍁</span>
              </span>
            </h2>
            <p className="mt-4 text-lg text-white/95 drop-shadow-md font-medium">
              Have a project in mind? Let's work together.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border-2 border-white bg-white/95 p-6 backdrop-blur-sm animate-slideInLeft shadow-2xl">
              <h3 className="mb-4 text-xl font-bold text-red-600 flex items-center gap-2">
                <span>🍁</span> Contact Information
              </h3>
              <div className="space-y-4">
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50 border-2 border-red-200 hover:border-red-400 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-red-400 bg-red-600 text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-red-600 font-semibold">Email</p>
                    <p className="font-medium text-gray-800">antonr24710@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50 border-2 border-red-200 hover:border-red-400 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-red-400 bg-red-600 text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-red-600 font-semibold">Phone</p>
                    <p className="font-medium text-gray-800">+1 (769) 358-9629</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50 border-2 border-red-200 hover:border-red-400 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-red-400 bg-red-600 text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-red-600 font-semibold">Location</p>
                    <p className="font-medium text-gray-800 flex items-center gap-1">
                      <span>🇨🇦</span> Edmundston, NB, Canada
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50 border-2 border-red-200 hover:border-red-400 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-red-400 bg-red-600 text-white">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-red-600 font-semibold">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/anton-romeo-218a4b3a8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium text-gray-800 hover:text-red-600 hover:underline transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border-2 border-white bg-white/95 p-6 backdrop-blur-sm animate-slideInRight shadow-2xl">
              <h3 className="mb-4 text-xl font-bold text-red-600 flex items-center gap-2">
                <span>🍁</span> Send a Message
              </h3>

              {sent ? (
                <div className="text-green-600 font-semibold mb-4 p-3 bg-green-50 rounded-lg border-2 border-green-300">
                  ✅ Message sent! Thank you for reaching out.
                </div>
              ) : null}
              {errors.form && (
                <div className="text-red-600 font-semibold mb-4 p-3 bg-red-50 rounded-lg border-2 border-red-300">
                  {errors.form}
                </div>
              )}
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-red-700">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full rounded-lg border-2 border-red-300 bg-white px-3 py-2 text-gray-800 placeholder:text-gray-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 ${
                        errors.name ? "border-red-600" : ""
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-red-700">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full rounded-lg border-2 border-red-300 bg-white px-3 py-2 text-gray-800 placeholder:text-gray-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 ${
                        errors.email ? "border-red-600" : ""
                      }`}
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-red-700">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    className={`w-full rounded-lg border-2 border-red-300 bg-white px-3 py-2 text-gray-800 placeholder:text-gray-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 ${
                      errors.subject ? "border-red-600" : ""
                    }`}
                    placeholder="Subject"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs">{errors.subject}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-red-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full rounded-lg border-2 border-red-300 bg-white px-3 py-2 text-gray-800 placeholder:text-gray-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 ${
                      errors.message ? "border-red-600" : ""
                    }`}
                    placeholder="Your message"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-400 text-xs">{errors.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-red-600 text-white hover:bg-red-700 font-bold text-lg py-6 border-2 border-white shadow-lg"
                  disabled={sending}
                >
                  {sending ? "Sending... 🍁" : "Send Message 🍁"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-red-600 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 py-12 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-5 left-10 text-6xl text-red-300">🍁</div>
          <div className="absolute bottom-5 right-10 text-6xl text-red-300">🍁</div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-full border-4 border-red-500 animate-pulse"></div>
                <Image
                  width={40}
                  height={40}
                  src="/anton.jpg"
                  alt="Profile picture"
                  className="h-10 w-10 rounded-full object-cover border-2 border-white"
                />
              </div>
              <span className="text-lg font-bold text-white flex items-center gap-2">
                <span>🍁</span> Anton Romeo <span className="text-red-400">| Canada</span> <span>🇨🇦</span>
              </span>
            </div>
            <div className="flex gap-6">

              <Link
                href="mailto:antonr24710@gmail.com"
                className="text-white transition-all hover:text-red-400 hover:scale-110 p-2 rounded-full border-2 border-red-600 bg-red-600/20 hover:bg-red-600"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/anton-romeo-218a4b3a8"
                className="text-white transition-all hover:text-red-400 hover:scale-110 p-2 rounded-full border-2 border-red-600 bg-red-600/20 hover:bg-red-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <div className="text-sm text-red-200 font-medium flex items-center gap-2">
              🍁 © {new Date().getFullYear()} Anton Romeo. All rights reserved. Made with ❤️ in Canada 🇨🇦
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
