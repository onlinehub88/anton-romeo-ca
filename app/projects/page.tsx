"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ProjectsPage() {
  const projects = [
    {
      id: 2,
      title: "BinahAI",
      category: "Healthcare, Full Stack, AI",
      description:
        "Developed full-stack mobile and backend solutions for Binah.ai's AI-powered, contactless health monitoring platform. Built React Native mobile apps, implemented serverless backend with GCP Functions and Node.js, and integrated ML-based health insights for real-time video analysis.",
      image: "/portfolios/healthcare_binahai.png?height=300&width=600",
      technologies: ["React Native", "Node.js", "GCP Functions", "FastAPI", "Firebase", "OpenAI", "Docker"],
      link: "https://binah.ai/",
      github: "#",
    },
    {
      id: 4,
      title: "ContractPower",
      category: "AI Agent, Full Stack",
      description:
        "Built full-stack AI document intelligence platform for ContractPower. Developed React frontend with Flask backend, integrated Document AI and LLM-powered contract analysis, and implemented secure data processing with MySQL for the renewable energy sector.",
      image: "/portfolios/AI_contactpower.png?height=300&width=600",
      technologies: ["React", "Flask", "Document AI", "LangChain", "MySQL", "GCP", "OpenAI"],
      link: "https://contractpower.ai",
      github: "#",
    },
    {
      id: 5,
      title: "Revivoto",
      category: "Real Estate, Full Stack",
      description:
        "Developed full-stack real estate photo editing platform for Revivoto. Built Angular frontend with .NET Core backend, implemented image processing workflows, integrated Entity Framework ORM with MS SQL, and deployed on Azure for virtual staging services.",
      image: "/portfolios/realestate_revivoto.png?height=300&width=600",
      technologies: ["Angular", ".NET Core", "MS SQL", "Entity Framework", "Azure", "TypeScript"],
      link: "https://revivoto.com/",
      github: "#",
    },
    {
      id: 6,
      title: "Rendair",
      category: "Real Estate, Full Stack, AI",
      description:
        "Built full-stack 3D rendering platform for Rendair. Developed React frontend with Material-UI, implemented Node.js backend with RESTful APIs, integrated AWS services (S3 for storage, EC2 for rendering), and enabled secure collaboration for architectural visualization.",
      image: "/portfolios/realestate_rendairai.png?height=300&width=600",
      technologies: ["React", "Node.js", "Material-UI", "AWS", "S3", "EC2", "REST API"],
      link: "https://www.rendaircorp.com",
      github: "#",
    },
    {
      id: 9,
      title: "SPENDiD",
      category: "Finance, AI, DevOps",
      description:
        "SPENDiD API has automated cloud deployments and implemented CI/CD for the company's predictive financial insights platform. It has also integrated AI-driven analytics and enabled scalable, secure fintech solutions for web and API clients.",
      image: "/portfolios/finance_spendid.png?height=300&width=600",
      technologies: ["AWS Lambda", "CI/CD", "Vue.js", "OpenAI", "CloudFront", "API Gateway", "S3"],
      link: "https://spendid.io",
      github: "#",
    },
    {
      id: 1,
      title: "TryringAI",
      category: "AI Agent, Web3, Full Stack",
      description:
        "Developed full-stack autonomous voice-based phone agent platform for Ring AI. Built Next.js frontend with TypeScript, implemented Node.js backend integrating OpenAI LLMs, speech-to-text/text-to-speech APIs, and Web3 functionality for 24/7 multilingual support in crypto/NFT sectors.",
      image: "/portfolios/web3_AI_ringAI.png?height=300&width=600",
      technologies: ["Next.js", "TypeScript", "Node.js", "OpenAI", "LLM", "STT/TTS", "Web3", "AWS"],
      link: "https://www.tryring.ai/",
      github: "#",
    },
    {
      id: 3,
      title: "Dr. Oracle",
      category: "Medical, AI, Full Stack",
      description:
        "Developed full-stack AI research assistant for medical data analysis. Built Next.js frontend with TypeScript, implemented LangChain-powered backend for intelligent document processing, integrated OpenAI APIs for medical insights, and ensured HIPAA compliance with Supabase.",
      image: "/portfolios/healthcare_droracleai.png?height=300&width=600",
      technologies: ["Next.js", "TypeScript", "LangChain", "OpenAI", "Supabase", "AWS", "HIPAA"],
      link: "https://droracle.ai",
      github: "#",
    },
    {
      id: 8,
      title: "Streamlined Finance",
      category: "Finance, Full Stack, AI",
      description:
        "Built full-stack AI-powered order-to-cash platform. Developed Next.js frontend with Tailwind CSS, implemented Django backend with REST APIs, integrated Stripe for payments, and used MongoDB/DynamoDB for data persistence. Enabled seamless B2B invoicing and accounting automation.",
      image: "/portfolios/finance_streamlined.png?height=300&width=600",
      technologies: ["Next.js", "Tailwind CSS", "Django", "Stripe API", "MongoDB", "DynamoDB", "REST API"],
      link: "https://www.streamlined.finance",
      github: "#",
    },
    {
      id: 7,
      title: "CryptoDo",
      category: "Web3, Blockchain, Full Stack",
      description:
        "Developed full-stack no-code multichain web3 builder platform. Built Next.js frontend, implemented Node.js microservices backend, integrated Web3.js for blockchain interactions, and enabled secure smart contract deployment using Solidity for decentralized app creation.",
      image: "/portfolios/web3_cryptodo.png?height=300&width=600",
      technologies: ["Next.js", "Node.js", "Web3.js", "Solidity", "Microservices", "TypeScript", "AWS"],
      link: "https://cryptodo.app",
      github: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-zinc-400">
            A collection of projects I've worked on throughout my career,
            showcasing my skills and expertise in various technologies and
            domains.
          </p>
          <Separator className="mt-8 bg-white/10" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
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
                    className="mr-2 h-8 w-8 rounded-full p-0"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Visit site</span>
                  </Button>
                  {/* <Button
                    size="sm"
                    variant="outline"
                    className="h-8 w-8 rounded-full p-0"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">View code</span>
                  </Button> */}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <Badge
                    variant="outline"
                    className="border-white/20 bg-white/5"
                  >
                    {project.category}
                  </Badge>
                </div>
                <p className="mb-4 text-sm text-zinc-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[...new Set(project.technologies)].slice(0, 10).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-white/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 10 && (
                    <Badge variant="secondary" className="bg-white/10">
                      +{project.technologies.length - 10} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
