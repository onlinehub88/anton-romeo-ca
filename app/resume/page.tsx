import Link from "next/link"
import { ArrowLeft, Download, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      {/* Canadian Flag Stripe */}
      <div className="h-2 bg-gradient-to-r from-red-600 via-white to-red-600"></div>
      
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Button variant="outline" asChild className="mb-4 border-red-600 text-red-600 hover:bg-red-50">
              <Link href="/" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl flex items-center gap-3">
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Résumé 🍁
              </span>
            </h1>
          </div>
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
            <a
              href="/Anton-Romeo.pdf"
              download="Anton-Romeo.pdf"
              className="inline-flex items-center"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>

        <div className="rounded-xl border-2 border-red-200 bg-white shadow-2xl shadow-red-100 p-8">
          <div className="mb-8 grid gap-4 md:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="text-2xl font-bold text-red-600 flex items-center gap-2">
                <span>🍁</span> Anton Romeo <span>🇨🇦</span>
              </h2>
              <p className="text-lg text-gray-700 font-semibold">
                AI Full Stack Engineer
              </p>
            </div>
            <div className="space-y-2 text-right text-gray-700">
              <p className="flex items-center justify-end gap-2">
                <span>antonr24710@gmail.com</span>
                <ExternalLink className="h-4 w-4 text-red-600" />
              </p>
              <p>🇨🇦 Edmundston, NB, Canada</p>
              <p>+1 251 250 0203</p>
            </div>
          </div>

          <Separator className="my-6 bg-red-300 h-1" />

          <section className="mb-8">
            <h3 className="mb-4 text-xl font-bold text-red-600 flex items-center gap-2">
              <span>🍁</span> Profile
            </h3>
            <p className="text-gray-700">
              AI Full-Stack Engineer with 10 years of experience building production-grade web and mobile applications powered by modern AI systems. Specialized in LLM-driven features, RAG pipelines, and intelligent backend services, with a strong balance of web and mobile app development.
            </p>
            <p className="mt-4 text-gray-700">
              Experienced in designing and deploying scalable AI microservices, integrating LLMs into real user workflows such as chat assistants, document automation, and semantic search. Skilled in FastAPI, Node.js, cloud-native deployment on AWS, and delivering secure, low-latency systems that are built for real-world adoption. Known for writing clean, maintainable code and translating complex AI capabilities into reliable, user-focused products.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="mb-4 text-xl font-bold text-red-600 flex items-center gap-2">
              <span>🍁</span> Core Skills
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 font-medium text-red-600">Languages</h4>
                <p className="text-gray-700">
                  Python, Java, JavaScript, TypeScript, Go, SQL
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-medium text-red-600">AI & GenAI</h4>
                <p className="text-gray-700">
                  LangChain, LangGraph, CrewAI, MCP, RAG, embeddings, semantic search, vector DBs (Pinecone, FAISS), prompt engineering, LLM routing (GPT-4, Claude, Mistral, Gemini), LangSmith, multi-agent workflows, speech I/O (Retell.ai, LiveKit, Deepgram, ElevenLabs)
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-medium text-red-600">Backend & Frontend</h4>
                <p className="text-gray-700">
                  FastAPI, Flask, Spring Boot, Django, Node.js, Express, REST/GraphQL, React, Next.js (App Router), TypeScript, Redux Toolkit, Zustand
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-medium text-red-600">Cloud & DevOps</h4>
                <p className="text-gray-700">
                  AWS (S3, Lambda, Kinesis, Step Functions, EventBridge, RDS, DynamoDB, ECS/EKS), GCP, Docker, Kubernetes, Terraform, CI/CD (GitHub Actions), Vercel, Railway
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="mb-4 text-xl font-bold text-red-600 flex items-center gap-2">
              <span>🍁</span> Professional Experience
            </h3>
            <div className="space-y-6">
              <div>
                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="font-medium text-red-600 flex items-center gap-2">
                      <span>🍁</span> AI Software Engineer
                    </h4>
                    <p className="text-gray-600">BeckTek</p>
                  </div>
                  <Badge variant="outline" className="border-red-300 bg-red-50 text-red-700">
                    03/2022 - 05/2025
                  </Badge>
                </div>
                <ul className="ml-5 list-disc space-y-1 text-zinc-300">
                  <li>Designed and delivered LLM-driven AI systems including conversational assistants, document Q&A, and intelligent data extraction pipelines</li>
                  <li>Built and optimized retrieval-augmented generation (RAG) pipelines using embeddings and vector databases</li>
                  <li>Engineered full-stack development across web and mobile, building AI-enabled user interfaces with React/Next.js</li>
                  <li>Architected FastAPI-based AI microservices for inference, retrieval, and orchestration, containerized with Docker and deployed on AWS ECS</li>
                </ul>
              </div>

              <div>
                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="font-medium text-red-600 flex items-center gap-2">
                      <span>🍁</span> Full-Stack Engineer
                    </h4>
                    <p className="text-gray-600">Sedin Technologies</p>
                  </div>
                  <Badge variant="outline" className="border-red-300 bg-red-50 text-red-700">
                    09/2020 - 02/2022
                  </Badge>
                </div>
                <ul className="ml-5 list-disc space-y-1 text-gray-700">
                  <li>Built and maintained full-stack web applications using Next.js, React, and TypeScript</li>
                  <li>Introduced early AI-driven features such as intelligent search, text summarization, and rule-based recommendation logic</li>
                  <li>Developed backend services with Flask and Django, designing RESTful APIs and business logic</li>
                  <li>Implemented secure authentication and authorization using JWT and role-based access control</li>
                </ul>
              </div>

              <div>
                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="font-medium text-red-600 flex items-center gap-2">
                      <span>🍁</span> Full Stack Developer
                    </h4>
                    <p className="text-gray-600">Aatio</p>
                  </div>
                  <Badge variant="outline" className="border-red-300 bg-red-50 text-red-700">
                    04/2018 - 08/2020
                  </Badge>
                </div>
                <ul className="ml-5 list-disc space-y-1 text-gray-700">
                  <li>Delivered responsive web applications using React, JavaScript, and REST APIs</li>
                  <li>Built backend services with Node.js and Django, integrating relational databases</li>
                  <li>Developed mobile-friendly web interfaces and supported early mobile app integrations</li>
                  <li>Optimized database queries and backend logic, improving application performance</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="mb-4 text-xl font-bold text-red-600 flex items-center gap-2">
              <span>🍁</span> Education
            </h3>
            <div>
              <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h4 className="font-medium text-gray-800">Bachelor's Degree</h4>
                  <p className="text-gray-600">University of New Brunswick 🇨🇦</p>
                </div>
                <Badge variant="outline" className="border-red-300 bg-red-50 text-red-700">
                  2012 - 2016
                </Badge>
              </div>
            </div>
          </section>

          <section>
            <h3 className="mb-4 text-xl font-bold text-red-600 flex items-center gap-2">
              <span>🍁</span> Key Skills
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border-2 border-red-200 bg-white p-4 hover:border-red-400 transition-colors">
                <h4 className="font-medium text-red-600">AI & Machine Learning</h4>
                <p className="text-sm text-gray-600">LLM integration, RAG pipelines, Vector databases, Prompt engineering</p>
              </div>
              <div className="rounded-lg border-2 border-red-200 bg-white p-4 hover:border-red-400 transition-colors">
                <h4 className="font-medium text-red-600">Backend Development</h4>
                <p className="text-sm text-gray-600">FastAPI, Node.js, Python, REST/GraphQL APIs, Microservices</p>
              </div>
              <div className="rounded-lg border-2 border-red-200 bg-white p-4 hover:border-red-400 transition-colors">
                <h4 className="font-medium text-red-600">Frontend Development</h4>
                <p className="text-sm text-gray-600">React, Next.js, TypeScript, Redux, Responsive Design</p>
              </div>
              <div className="rounded-lg border-2 border-red-200 bg-white p-4 hover:border-red-400 transition-colors">
                <h4 className="font-medium text-red-600">Cloud & DevOps</h4>
                <p className="text-sm text-gray-600">AWS, Docker, Kubernetes, CI/CD, Infrastructure as Code</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
