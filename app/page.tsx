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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-white/10 p-0 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 text-white" />
      </Button>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_60%)]"></div>
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
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm">
                  <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-white"></span>
                  AI Full Stack Engineer
                </div>
                <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Hi, I'm{" "}
                  <span className="animate-gradient-text bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                    Anton Romeo
                  </span>
                </h1>
                <p className="max-w-2xl text-xl text-zinc-400">
                  AI Full-Stack Engineer with 10 years of experience building production-grade web and mobile applications powered by modern AI systems. Specialized in LLM-driven features, RAG pipelines, and intelligent backend services.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="animate-slideInLeft bg-white text-black hover:bg-gray-200"
                >
                  <Link href="#contact">
                    Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="animate-slideInLeft animation-delay-100 border-white text-white hover:bg-white/10"
                >
                  <Link href="#projects">View my work</Link>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="animate-slideInLeft animation-delay-200 text-white hover:bg-white/10"
                >
                  <Link href="/cv" className="group flex items-center gap-1">
                    <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
                    Download CV
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Edmundston, NB, Canada
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  antonr24710@gmail.com
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  +1 251 250 0203
                </div>
              </div>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-xs">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-white/10 opacity-30 blur-3xl"></div>
              <div className="relative h-full w-full animate-float">
                <Image
                  src="/anton.png?height=300&width=300"
                  alt="Developer illustration"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-white/10 bg-black py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-fadeIn">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="animate-gradient-text bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              With 10 years of experience building production-grade web and mobile applications powered by modern AI systems. Specialized in LLM-driven features, RAG pipelines, intelligent backend services, and delivering secure, low-latency systems built for real-world adoption.
            </p>
          </div>

          <div className="mt-16">
            <Tabs defaultValue="profile" className="mx-auto max-w-4xl">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger
                  value="profile"
                  className="data-[state=active]:bg-white data-[state=active]:text-black"
                >
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="data-[state=active]:bg-white data-[state=active]:text-black"
                >
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  value="interests"
                  className="data-[state=active]:bg-white data-[state=active]:text-black"
                >
                  Interests
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="profile"
                className="mt-6 space-y-6 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm animate-fadeIn"
              >
                <p className="text-zinc-300">
                  AI Full-Stack Engineer with 10 years of experience building production-grade web and mobile applications powered by modern AI systems. Specialized in LLM-driven features, RAG pipelines, and intelligent backend services, with a strong balance of web and mobile app development.
                </p>
                <p className="text-zinc-300">
                  Experienced in designing and deploying scalable AI microservices, integrating LLMs into real user workflows such as chat assistants, document automation, and semantic search. Skilled in FastAPI, Node.js, cloud-native deployment on AWS, and delivering secure, low-latency systems that are built for real-world adoption. Known for writing clean, maintainable code and translating complex AI capabilities into reliable, user-focused products.
                </p>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <p className="italic text-zinc-400">
                    "The Only Way Out is to LEARN!"
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <p className="italic text-zinc-400">
                    "Strive to build things that make a difference!"
                  </p>
                </div>
              </TabsContent>
              <TabsContent
                value="skills"
                className="mt-6 space-y-6 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm animate-fadeIn"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Core Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "JavaScript",
                      "TypeScript",
                      "Java",
                      "Go",
                      "React",
                      "Next.js",
                      "FastAPI",
                      "Node.js",
                      "Flask",
                      "Django",
                      "AWS",
                      "Docker",
                      "PostgreSQL",
                      "MongoDB",
                    ].map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-white/20 bg-white/5 animate-fadeIn"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">AI & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "LangChain",
                      "LangGraph",
                      "RAG",
                      "Vector DBs",
                      "OpenAI API",
                      "GPT-4",
                      "Claude",
                      "Redux",
                      "Zustand",
                      "Kubernetes",
                    ].map((tool, index) => (
                      <Badge
                        key={tool}
                        variant="outline"
                        className="border-white/20 bg-white/5 animate-fadeIn"
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
                className="mt-6 space-y-6 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm animate-fadeIn"
              >
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 hover:scale-105 animate-fadeIn animation-delay-100">
                    <h3 className="mb-2 font-medium">AI Innovation</h3>
                    <p className="text-sm text-zinc-400">
                      Exploring cutting-edge AI technologies and implementing
                      LLM-driven solutions for real-world problems.
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 hover:scale-105 animate-fadeIn animation-delay-200">
                    <h3 className="mb-2 font-medium">Full Stack Development</h3>
                    <p className="text-sm text-zinc-400">
                      Building end-to-end applications with modern frameworks
                      and best practices for web and mobile platforms.
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 hover:scale-105 animate-fadeIn animation-delay-300">
                    <h3 className="mb-2 font-medium">Continuous Learning</h3>
                    <p className="text-sm text-zinc-400">
                      Staying current with emerging technologies and sharing
                      knowledge with the developer community.
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
        className="border-t border-white/10 bg-zinc-950 py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-fadeIn">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="animate-gradient-text bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Recent Projects
              </span>
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Here are a few projects I've worked on recently.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project 1: BinahAI */}
            <Card className="group overflow-hidden border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10 animate-fadeIn animation-delay-100">
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <Image
                  src="/portfolios/healthcare_binahai.png?height=300&width=600"
                  alt="BinahAI"
                  width={600}
                  height={300}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 flex justify-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <a href="https://binah.ai/" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      variant="outline"
                      className="mr-2 h-8 w-8 rounded-full p-0 bg-white/10 border-white/20 hover:bg-white/20"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Visit site</span>
                    </Button>
                  </a>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">BinahAI</h3>
                  <Badge
                    variant="outline"
                    className="border-white/20 bg-white/5"
                  >
                    Healthcare, AI
                  </Badge>
                </div>
                <p className="mb-4 text-sm text-zinc-400">
                Built full-stack AI-powered contactless health monitoring platform using React Native for mobile interfaces and GCP Functions for serverless backend. Integrated OpenAI APIs for intelligent health insights and implemented real-time video analysis with scalable cloud architecture.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React Native", "GCP", "Node.js", "FastAPI", "OpenAI API", "Firebase", "TypeScript", "Docker"].map(
                    (tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-white/10"
                      >
                        {tech}
                      </Badge>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Project 3: Dr. Oracle */}
            <Card className="group overflow-hidden border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10 animate-fadeIn animation-delay-300">
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <Image
                  src="/portfolios/healthcare_droracleai.png?height=300&width=600"
                  alt="Dr. Oracle"
                  width={600}
                  height={300}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 flex justify-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <a href="https://droracle.ai" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      variant="outline"
                      className="mr-2 h-8 w-8 rounded-full p-0 bg-white/10 border-white/20 hover:bg-white/20"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Visit site</span>
                    </Button>
                  </a>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Dr. Oracle</h3>
                  <Badge
                    variant="outline"
                    className="border-white/20 bg-white/5"
                  >
                    Medical, AI
                  </Badge>
                </div>
                <p className="mb-4 text-sm text-zinc-400">
                Developed full-stack AI research assistant for medical data analysis. Built responsive frontend with Next.js and TypeScript, implemented LLM-powered backend with LangChain for document Q&A, and integrated Supabase for HIPAA-compliant data management.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "TypeScript", "LangChain", "OpenAI API", "Supabase", "Python", "AWS"].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-white/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project 2: SPENDiD */}
            <Card className="group overflow-hidden border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10 animate-fadeIn animation-delay-200">
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <Image
                  src="/portfolios/finance_spendid.png?height=300&width=600"
                  alt="Rendair"
                  width={600}
                  height={300}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 flex justify-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <a href="https://spendid.io" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      variant="outline"
                      className="mr-2 h-8 w-8 rounded-full p-0 bg-white/10 border-white/20 hover:bg-white/20"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Visit site</span>
                    </Button>
                  </a>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">SPENDiD</h3>
                  <Badge
                    variant="outline"
                    className="border-white/20 bg-white/5"
                  >
                    Finance, AI, DevOps
                  </Badge>
                </div>
                <p className="mb-4 text-sm text-zinc-400">
                Built full-stack predictive financial insights platform with Vue.js frontend and serverless backend. Integrated OpenAI for AI-driven analytics, implemented secure API Gateway for fintech compliance, and deployed scalable microservices on AWS Lambda.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Vue.js", "AWS Lambda", "Node.js", "OpenAI API", "API Gateway", "DynamoDB", "TypeScript"].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-white/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-black animate-pulse"
            >
              <Link href="/projects">
                View all projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-t border-white/10 bg-black py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-fadeIn">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="animate-gradient-text bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Professional Skillset
              </span>
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
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
                  className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10 hover:scale-105 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/5 transition-transform group-hover:scale-150"></div>
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <Code className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-medium">{skill.name}</h3>
                    <p className="text-sm text-zinc-400">{skill.description}</p>
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
        className="border-t border-white/10 bg-zinc-950 py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-fadeIn">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="animate-gradient-text bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Have a project in mind? Let's work together.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm animate-slideInLeft">
              <h3 className="mb-4 text-xl font-medium">Contact Information</h3>
              <div className="space-y-4">
                
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Email</p>
                    <p className="font-medium">antonr24710@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Phone</p>
                    <p className="font-medium">+1 251 250 0203</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Location</p>
                    <p className="font-medium">Edmundston, NB, Canada</p>
                  </div>
                </div>
                {/* <a href="https://www.linkedin.com/in/anton-romeo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:bg-white/10 rounded-lg transition-colors p-3 -m-3 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 group-hover:border-white/20">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">LinkedIn</p>
                    <p className="font-medium text-white group-hover:underline">Connect on LinkedIn</p>
                  </div>
                </a> */}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm animate-slideInRight">
              <h3 className="mb-4 text-xl font-medium">Send a Message</h3>

              {sent ? (
                <div className="text-green-400 font-medium mb-4">
                  Message sent! Thank you for reaching out.
                </div>
              ) : null}
              {errors.form && (
                <div className="text-red-400 font-medium mb-4">
                  {errors.form}
                </div>
              )}
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    className={`w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 ${
                      errors.subject ? "border-red-500" : ""
                    }`}
                    placeholder="Subject"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs">{errors.subject}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    placeholder="Your message"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-400 text-xs">{errors.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-200"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <Image
                width={32}
                height={32}
                src="/anton.png"
                alt="Profile picture"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-lg font-bold">Anton Romeo</span>
            </div>
            <div className="flex gap-6">
              <Link
                href="https://github.com/onlinehub88"
                className="text-zinc-400 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="mailto:antonr24710@gmail.com"
                className="text-zinc-400 transition-colors hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/anton-romeo/"
                className="text-zinc-400 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <div className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Anton Romeo. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
