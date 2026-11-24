import React, { useEffect } from "react";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  ChevronRight,
  Home,
} from "lucide-react";

export const CaseStudyPage = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-navy-dark text-white selection:bg-gold-accent selection:text-navy-dark">
      {/* MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-10 sm:py-14 space-y-12">
        {/* BREADCRUMBS (Replaces the top header bar) */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm text-gray-400 pb-4 border-b border-navy-light/40"
        >
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 hover:text-gold-accent transition-colors cursor-pointer"
          >
            <Home size={15} />
            <span>Home</span>
          </button>

          <ChevronRight size={14} className="text-gray-500 shrink-0" />

          <button
            onClick={onBack}
            className="hover:text-gold-accent transition-colors cursor-pointer"
          >
            <span>Projects</span>
          </button>

          <ChevronRight size={14} className="text-gray-500 shrink-0" />

          <span className="text-gold-accent font-medium truncate max-w-xs sm:max-w-md">
            {project.title}
          </span>
        </nav>

        {/* HERO TITLE & DETAILS */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-primary border border-navy-light text-xs font-mono text-gold-accent font-semibold">
            <span>Project Case Study</span>
            <span>•</span>
            <span>{project.number}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-normal max-w-4xl">
            {project.subtitle}
          </p>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md bg-navy-primary border border-navy-light text-xs font-mono text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-gold-accent text-navy-dark font-bold text-sm hover:bg-gold-hover hover:scale-105 transition-all shadow-md"
              >
                <Github size={18} />
                <span>View GitHub Repository</span>
                <ExternalLink size={14} />
              </a>
            )}
            {project.articleUrl && (
              <a
                href={project.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-navy-primary text-white border border-navy-light font-semibold text-sm hover:border-gold-accent hover:text-gold-accent transition-all"
              >
                <BookOpen size={16} />
                <span>Read Medium Article</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </section>

        <hr className="border-navy-light/40" />

        {/* BACKGROUND & CONTEXT */}
        {project.context && (
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-gold-accent font-semibold">
              Background & Context
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-5xl">
              {project.context}
            </p>
          </section>
        )}

        {/* THE CHALLENGE & WHAT WAS BUILT (Uncrammed, generous grid & padding) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 p-7 sm:p-8 rounded-2xl bg-navy-primary/60 border border-navy-light/80 shadow-md">
            <h2 className="text-xs font-mono uppercase tracking-wider text-gold-accent font-semibold">
              The Engineering Challenge
            </h2>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-medium">
              {project.problemStatement}
            </p>
          </div>

          <div className="space-y-4 p-7 sm:p-8 rounded-2xl bg-navy-primary/60 border border-navy-light/80 shadow-md">
            <h2 className="text-xs font-mono uppercase tracking-wider text-gold-accent font-semibold">
              What I Built
            </h2>
            <ul className="space-y-3.5">
              {project.whatIBuilt.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3.5 text-sm sm:text-base text-gray-300 leading-relaxed"
                >
                  <CheckCircle2
                    size={19}
                    className="text-gold-accent shrink-0 mt-1"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ARCHITECTURE DIAGRAM (FOR FEATURED) */}
        {project.isFeatured && (
          <section className="space-y-5">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-gold-accent font-semibold">
                Architecture Breakdown
              </h2>
              <h3 className="text-2xl font-bold text-white mt-1">
                How The Components Connect
              </h3>
            </div>

            <div className="p-6 sm:p-10 rounded-2xl bg-navy-primary/60 border border-navy-light/80 space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                <span className="text-gold-accent font-semibold">
                  AWS Cloud Environment
                </span>
                <span>VPC 10.0.0.0/16</span>
              </div>

              {/* ALB Box */}
              <div className="max-w-sm mx-auto p-4 rounded-xl bg-navy-dark border border-navy-light text-center shadow-inner">
                <div className="text-gold-accent font-bold text-sm">
                  Application Load Balancer
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Routes incoming HTTP/HTTPS traffic across subnets
                </div>
              </div>

              <div className="flex justify-center text-gray-400 text-sm">↓</div>

              {/* Availability Zones Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-navy-dark border border-navy-light space-y-4">
                  <div className="text-xs font-mono text-gray-400">
                    Availability Zone A (us-east-1a)
                  </div>
                  <div className="p-3.5 bg-navy-primary rounded-lg border border-navy-light/70">
                    <div className="text-sm font-semibold text-gray-200">
                      EC2 Instance
                    </div>
                    <div className="text-xs text-gray-400">Compute Layer</div>
                  </div>
                  <div className="p-3.5 bg-navy-primary rounded-lg border border-cyan-800/60">
                    <div className="text-sm font-semibold text-cyan-400">
                      Containers
                    </div>
                    <div className="text-xs text-gray-400">Application Workload</div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-navy-dark border border-navy-light space-y-4">
                  <div className="text-xs font-mono text-gray-400">
                    Availability Zone B (us-east-1b)
                  </div>
                  <div className="p-3.5 bg-navy-primary rounded-lg border border-navy-light/70">
                    <div className="text-sm font-semibold text-gray-200">
                      EC2 Instance
                    </div>
                    <div className="text-xs text-gray-400">Compute Layer</div>
                  </div>
                  <div className="p-3.5 bg-navy-primary rounded-lg border border-cyan-800/60">
                    <div className="text-sm font-semibold text-cyan-400">
                      Containers
                    </div>
                    <div className="text-xs text-gray-400">Application Workload</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between pt-4 text-xs font-mono text-gray-400 border-t border-navy-light/60">
                <span>✓ Health Checks & Auto Scaling Attached</span>
                <span className="text-gold-accent">Terraform Managed</span>
              </div>
            </div>
          </section>
        )}

        {/* TECHNICAL DECISIONS (Airy, well-spaced cards) */}
        {project.technicalDecisions && (
          <section className="space-y-6">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-gold-accent font-semibold">
                Design Choices
              </h2>
              <h3 className="text-2xl font-bold text-white mt-1">
                Why I Built It This Way
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.technicalDecisions.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-navy-primary/60 border border-navy-light/80 hover:border-gold-accent/50 transition-colors space-y-3 flex flex-col justify-between"
                >
                  <h4 className="font-semibold text-gold-accent text-base flex items-start gap-2.5">
                    <HelpCircle
                      size={18}
                      className="text-gold-accent shrink-0 mt-0.5"
                    />
                    <span>{item.question}</span>
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* REPOSITORY STRUCTURE */}
        {project.repoStructure && (
          <section className="space-y-4">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-gold-accent font-semibold">
                Code Organization
              </h2>
              <h3 className="text-2xl font-bold text-white mt-1">
                Repository File Tree
              </h3>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-black/60 border border-navy-light font-mono text-xs sm:text-sm text-emerald-400 overflow-x-auto leading-relaxed">
              {project.repoStructure.map((line, idx) => (
                <div key={idx} className="whitespace-pre">
                  {line}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* LESSONS LEARNED */}
        {project.lessonsLearned && (
          <section className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-navy-primary/80 to-navy-light/70 border border-navy-light space-y-3 shadow-lg">
            <h2 className="text-xs font-mono uppercase tracking-wider text-gold-accent font-semibold">
              Retrospective & Lessons Learned
            </h2>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-5xl">
              {project.lessonsLearned}
            </p>
          </section>
        )}

        {/* BOTTOM NAVIGATION / BACK TO PORTFOLIO */}
        <div className="pt-6 pb-12 flex items-center justify-between border-t border-navy-light/40">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-accent hover:text-gold-hover hover:-translate-x-1 transition-all cursor-pointer"
          >
            <ArrowLeft size={18} />
            <span>Back to All Projects</span>
          </button>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            ↑ Back to top
          </button>
        </div>
      </main>
    </div>
  );
};

export default CaseStudyPage;
