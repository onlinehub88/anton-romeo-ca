"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

export default function CVPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 text-gray-900 print:bg-white print:text-black">
      {/* Canadian Flag Decoration */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-white to-red-600 z-50 print:hidden"></div>
      
      <div className="container mx-auto p-8 print:p-0 relative">
        {/* Background Decorations */}
        <div className="absolute top-20 right-10 text-8xl opacity-5 pointer-events-none print:hidden">🍁</div>
        <div className="absolute bottom-20 left-10 text-8xl opacity-5 pointer-events-none print:hidden">🍁</div>
        
        {/* Print-only header */}
        <div className="hidden print:block">
          <h1 className="text-3xl font-bold flex items-center gap-2">🍁 Anton Romeo 🇨🇦</h1>
          <p className="text-lg">AI Full Stack Engineer</p>
        </div>

        {/* Screen-only header with download button */}
        <div className="mb-8 flex justify-between items-center print:hidden">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => router.push("/")}
              className="bg-red-600 text-white hover:bg-red-700 font-semibold border-2 border-white shadow-lg"
            >
              <span className="mr-2">🍁</span> Back to Home
            </Button>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent flex items-center gap-2">
            <span>🍁</span> CV / Resume <span>🇨🇦</span>
          </h1>
          <Button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Anton-Romeo.pdf";
              link.download = "Anton-Romeo.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="bg-red-600 text-white hover:bg-red-700 font-semibold border-2 border-white shadow-lg"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <div className="rounded-xl border-2 border-red-300 bg-white p-8 shadow-2xl shadow-red-200 print:border-0 print:p-0 print:shadow-none">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-red-700 flex items-center gap-2">
              <span>🍁</span> Anton Romeo
            </h1>
            <p className="text-lg font-semibold text-red-600">
              AI Full Stack Engineer
            </p>
            <div className="mt-2 text-sm text-gray-700">
              <p>📧 Email: antonr24710@gmail.com</p>
              <p>📍 Address: Edmundston, NB, Canada 🇨🇦</p>
              <p>📞 Phone: +1 (769) 358-9629</p>
              <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/anton-romeo-218a4b3a8" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 underline">linkedin.com/in/anton-romeo-218a4b3a8</a></p>
            </div>
          </div>

          <Separator className="my-6 bg-red-300 h-1" />

          <section className="mb-6">
            <h2 className="mb-3 text-xl font-bold text-red-600 flex items-center gap-2">
              <span>🍁</span> PROFILE
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              AI Full-Stack Engineer with 10 years of experience building production-grade web and mobile applications powered by modern AI systems. Specialized in LLM-driven features, RAG pipelines, and intelligent backend services, with a strong balance of web and mobile app development.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Experienced in designing and deploying scalable AI microservices, integrating LLMs into real user workflows such as chat assistants, document automation, and semantic search. Skilled in FastAPI, Node.js, cloud-native deployment on AWS, and delivering secure, low-latency systems that are built for real-world adoption. Known for writing clean, maintainable code and translating complex AI capabilities into reliable, user-focused products.
            </p>
            <h3 className="mb-2 font-bold text-red-600">Technology Stack:</h3>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li>
                <span className="font-semibold">Languages:</span> Python, Java, JavaScript, TypeScript, Go, SQL
              </li>
              <li>
                <span className="font-semibold">AI & GenAI:</span> LangChain, LangGraph, CrewAI, MCP, RAG, embeddings, semantic search, vector DBs (Pinecone, FAISS), prompt engineering, LLM routing (GPT-4, Claude, Mistral, Gemini), LangSmith, multi-agent workflows, speech I/O (Retell.ai, LiveKit, Deepgram, ElevenLabs)
              </li>
              <li>
                <span className="font-semibold">Backend:</span> FastAPI, Flask, Spring Boot, Django, Node.js, Express, REST/GraphQL, Celery, Redis, WebSockets
              </li>
              <li>
                <span className="font-semibold">Frontend:</span> React, Next.js (App Router), TypeScript, Redux Toolkit, Zustand, responsive UIs
              </li>
              <li>
                <span className="font-semibold">Mobile:</span> Swift, Kotlin, Flutter, React Native
              </li>
              <li>
                <span className="font-semibold">Data:</span> PostgreSQL, MySQL, DynamoDB, Redshift, ETL pipelines, Supabase, real-time analytics
              </li>
              <li>
                <span className="font-semibold">Cloud & DevOps:</span> AWS (S3, Lambda, Kinesis, Step Functions, EventBridge, RDS, DynamoDB, EMR, IAM, ECS/EKS), GCP, Docker, Kubernetes, Terraform, CI/CD (GitHub Actions), Vercel, Railway
              </li>
              <li>
                <span className="font-semibold">Practices:</span> SOC 2 compliance, AES-256 encryption, TDD, Agile/Scrum, Jira, Git, system observability, cross-functional collaboration
              </li>
            </ul>
          </section>

          <Separator className="my-6 bg-red-300 h-1" />

          <section className="mb-6">
            <h2 className="mb-3 text-xl font-bold text-red-600 flex items-center gap-2">
              <span>🍁</span> EDUCATION
            </h2>
            <div>
              <p className="font-semibold text-gray-800">University of New Brunswick 🇨🇦</p>
              <p className="text-gray-600">Bachelor's Degree 2012-2016</p>
            </div>
          </section>

          <Separator className="my-6 bg-red-300 h-1" />

          <section className="mb-6">
            <h2 className="mb-3 text-xl font-bold text-red-600 flex items-center gap-2">
              <span>🍁</span> KEY COMPETENCIES
            </h2>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li>Production AI Systems: LLM-driven chat assistants, document Q&A, intelligent automation</li>
              <li>RAG Pipelines: Vector databases, embeddings, semantic search optimization</li>
              <li>Full-Stack Development: React, Next.js, TypeScript, responsive web and mobile interfaces</li>
              <li>AI Microservices: FastAPI, containerization, cloud-native deployment (AWS ECS)</li>
              <li>System Architecture: Scalable, low-latency, secure systems for real-world adoption</li>
            </ul>
          </section>

          <Separator className="my-6 bg-red-300 h-1" />

          <section className="mb-6">
            <h2 className="mb-3 text-xl font-bold text-red-600 flex items-center gap-2">
              <span>🍁</span> SKILLS
            </h2>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
              {[
                "Python",
                "JavaScript",
                "TypeScript",
                "Java",
                "Go",
                "LangChain",
                "LangGraph",
                "RAG",
                "Vector DBs",
                "FastAPI",
                "Node.js",
                "React",
                "Next.js",
                "Redux",
                "AWS",
                "Docker",
                "Kubernetes",
                "PostgreSQL",
                "MongoDB",
                "DynamoDB",
                "OpenAI API",
                "GPT-4",
                "Claude",
                "Flask",
                "Django",
                "Spring Boot",
                "GraphQL",
                "CI/CD",
                "Terraform",
                "Git",
              ].map((skill) => (
                <div
                  key={skill}
                  className="rounded-md border-2 border-red-300 bg-white px-3 py-2 text-center text-sm hover:border-red-600 hover:bg-red-50 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          <Separator className="my-6 bg-red-300 h-1" />

          <section className="mb-6">
            <h2 className="mb-3 text-xl font-bold text-red-600 flex items-center gap-2">
              <span>🍁</span> EMPLOYMENT HISTORY
            </h2>
            <div className="mb-6">
              <div className="mb-2">
                <p className="font-bold text-red-600 flex items-center gap-2">
                  <span>🍁</span> BeckTek
                </p>
                <p className="text-gray-700 font-semibold">AI Software Engineer</p>
                <p className="text-sm text-gray-600">March 2022 - May 2025 (3 years 2 months)</p>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-gray-700">
                <li>Designed and delivered LLM-driven AI systems including conversational assistants, document Q&A, and intelligent data extraction pipelines, enabling users to query and automate workflows over large internal knowledge bases.</li>
                <li>Built and optimized retrieval-augmented generation (RAG) pipelines using embeddings and vector databases to produce accurate, context-aware responses from unstructured documents and customer data in production environments.</li>
                <li>Engineered full-stack development across web and mobile, building AI-enabled user interfaces with React/Next.js and integrating real-time AI features into mobile applications via REST and WebSocket APIs.</li>
                <li>Architected FastAPI-based AI microservices for inference, retrieval, and orchestration, containerized with Docker and deployed on AWS ECS to support scalable, low-latency workloads.</li>
                <li>Implemented cloud infrastructure, CI/CD pipelines, and monitoring using AWS services (ECS, S3, CloudWatch), improving deployment reliability, observability, and operational efficiency for AI services.</li>
              </ul>
            </div>
            <div className="mb-6">
              <div className="mb-2">
                <p className="font-bold text-red-600 flex items-center gap-2">
                  <span>🍁</span> Sedin Technologies
                </p>
                <p className="text-gray-700 font-semibold">Full-Stack Engineer</p>
                <p className="text-sm text-gray-600">September 2020 - February 2022 (1 year 5 months)</p>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-gray-700">
                <li>Engineered infrastructure as code (IaC) using Terraform to automate cloud provisioning and management, resulting in a 20% reduction in infrastructure costs and a 35% increase in deployment frequency.</li>
                <li>Architected and managed robust CI/CD pipelines using Bamboo and scripting, enabling continuous deployment of Docker images to RKE (Rancher) Kubernetes clusters with a 99.9% success rate.</li>
                <li>Oversaw release management processes for major application deployments, coordinating with development and QA teams to ensure seamless transitions.</li>
                <li>Owned the management and scaling of containerized applications on the Rancher Kubernetes Cluster, establishing health checks to ensure robust application stability and resilience.</li>
                <li>Pioneered the implementation of the ELK Stack (Elasticsearch, Logstash, Kibana) for centralized log aggregation and monitoring, optimizing system analysis and improving incident resolution speed by 50%.</li>
                <li>Integrated conversational AI models (OpenAI's GPT-3/GPT-4, Langchain) into the platform, enhancing interactive features and user engagement.</li>
                <li>Mentored junior DevOps engineers on best practices for CI/CD, IaC, and security.</li>
              </ul>
            </div>
            <div className="mb-6">
              <div className="mb-2">
                <p className="font-bold text-red-600 flex items-center gap-2">
                  <span>🍁</span> Gust
                </p>
                <p className="text-gray-700 font-semibold">Back End & DevOps Developer</p>
                <p className="text-sm text-gray-600">October 2018 - October 2021 (3 years 1 month)</p>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-gray-700">
                <li>Developed and maintained robust backend systems using Node.js, Express.js, Sequelize ORM, and MySQL, integrated with a React/Redux Saga frontend.</li>
                <li>Implemented automated tasks using Linux commands and scripting, improving backend efficiency and streamlining developer workflows.</li>
                <li>Engineered load balancing solutions to ensure efficient network traffic distribution, improving system performance and reliability under high load.</li>
                <li>Customized and managed configuration management in Rancher, including the dynamic provisioning of persistent volumes for Kubernetes pods.</li>
                <li>Contributed to the improvement of CI/CD processes by proposing and implementing alternative pipeline strategies that enhanced automation and system reliability.</li>
                <li>Spearheaded the development of a marketplace platform using React, Next.js, and GraphQL.</li>
              </ul>
            </div>
            <div>
              <div className="mb-2">
                <p className="font-bold text-red-600 flex items-center gap-2">
                  <span>🍁</span> MNP Digital
                </p>
                <p className="text-gray-700 font-semibold">Software Intern</p>
                <p className="text-sm text-gray-600">September 2016 - March 2018 (1 year 6 months)</p>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-gray-700">
                <li>Assisted in developing internal web tools and dashboards using JavaScript, Python, and SQL.</li>
                <li>Supported backend development tasks, including API enhancements, database maintenance, and bug fixes.</li>
                <li>Participated in requirements gathering, testing, and documentation as part of agile project teams.</li>
                <li>Gained foundational experience in software engineering best practices, version control, and production support.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
