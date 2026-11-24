import React from "react";
import { projectsData } from "../data/projectsData";
import syncedGithubRepos from "../data/githubRepos.json";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Globe,
  Share2,
  Server,
  Database,
  FileCode,
  Box,
  Cloud,
  Network,
  ShieldCheck,
  Terminal,
  Activity,
  ArrowRight,
  GitFork,
  Star,
  Code2,
} from "lucide-react";

const iconMap = {
  Globe: Globe,
  Share2: Share2,
  Server: Server,
  Database: Database,
  FileCode: FileCode,
  Box: Box,
  Cloud: Cloud,
  Network: Network,
  ShieldCheck: ShieldCheck,
  Terminal: Terminal,
  Activity: Activity,
};

export const ProjectsSection = ({ onSelectProject }) => {
  const featured = projectsData.find((p) => p.isFeatured);
  const otherProjects = projectsData.filter((p) => !p.isFeatured);
  const repos = Array.isArray(syncedGithubRepos) ? syncedGithubRepos : [];

  return (
    <section
      id="projects"
      className="bg-navy-dark px-6 md:px-16 lg:px-20 min-h-screen py-24 text-white"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* SECTION HEADER */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold text-gold-accent tracking-tight after:content-[''] after:block after:h-[3px] after:w-16 after:bg-gold-accent after:mx-auto after:mt-3 after:rounded-xl">
            Selected Projects
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            Production-grade infrastructure as code, automated deployments, and resilient cloud architectures.
          </p>
        </div>

        {/* 1. FEATURED PROJECT */}
        {featured && (
          <div className="rounded-2xl bg-gradient-to-br from-navy-primary to-navy-dark border border-navy-light shadow-2xl p-6 sm:p-10 lg:p-12 transition-all duration-300 hover:border-gold-accent/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* LEFT INFO */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono tracking-widest uppercase text-gold-accent font-semibold">
                    {featured.tag}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                  {featured.title}
                </h2>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {featured.subtitle}
                </p>

                {/* TECH STACK BADGES */}
                <div className="flex flex-wrap gap-2">
                  {featured.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded bg-navy-dark border border-navy-light text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BULLETS */}
                <ul className="space-y-2.5 pt-2">
                  {featured.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-gray-200">
                      <CheckCircle2 size={16} className="text-gold-accent shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* ACTIONS */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => onSelectProject(featured)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-accent text-navy-dark font-bold text-sm hover:bg-gold-hover hover:scale-105 transition-all shadow-md cursor-pointer"
                  >
                    <span>Explore case study</span>
                    <ArrowRight size={16} />
                  </button>

                  {featured.githubUrl && (
                    <a
                      href={featured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-navy-dark text-gray-200 border border-navy-light hover:border-gold-accent hover:text-gold-accent transition-all text-sm font-semibold"
                    >
                      <Github size={16} />
                      <span>Source code</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>

              {/* RIGHT: ARCHITECTURE DIAGRAM PREVIEW */}
              <div className="lg:col-span-6 bg-navy-dark/90 rounded-xl p-6 border border-navy-light/80 shadow-inner space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="text-gold-accent font-semibold flex items-center gap-1.5">
                    <span>☁</span> AWS Cloud
                  </span>
                  <span>REFERENCE ARCHITECTURE</span>
                </div>

                <div className="border border-dashed border-navy-light rounded-lg p-4 space-y-4 bg-black/20">
                  <div className="flex justify-between items-center text-xs font-mono text-gray-400">
                    <span>Virtual Private Cloud</span>
                    <span className="text-gold-accent">10.0.0.0/16</span>
                  </div>

                  {/* ALB */}
                  <div className="p-3 bg-navy-primary rounded-lg border border-navy-light text-center max-w-xs mx-auto">
                    <div className="text-gold-accent font-semibold text-xs">Load Balancer</div>
                    <div className="text-[10px] text-gray-400">Application traffic</div>
                  </div>

                  <div className="flex justify-center text-gray-500 text-xs">↓</div>

                  {/* AZs */}
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 bg-navy-primary/70 rounded border border-navy-light text-xs space-y-2">
                      <div className="text-[11px] text-gray-400 font-mono">AZ A</div>
                      <div className="p-2 bg-navy-dark rounded text-[11px] text-gray-200">EC2 Instance</div>
                      <div className="p-2 bg-navy-dark rounded text-[11px] text-cyan-400">Containers</div>
                    </div>
                    <div className="p-3 bg-navy-primary/70 rounded border border-navy-light text-xs space-y-2">
                      <div className="text-[11px] text-gray-400 font-mono">AZ B</div>
                      <div className="p-2 bg-navy-dark rounded text-[11px] text-gray-200">EC2 Instance</div>
                      <div className="p-2 bg-navy-dark rounded text-[11px] text-cyan-400">Containers</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 pt-2 border-t border-navy-light/40">
                    <span className="text-emerald-400">🛡 Security groups / Auto Scaling</span>
                    <span className="text-gold-accent">&lt;/&gt; Infrastructure as Code</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectProject(featured)}
                  className="w-full text-center text-xs font-mono text-gold-accent hover:underline py-1 block cursor-pointer"
                >
                  Click to open full case study page →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. OTHER PROJECTS GRID (02 - 05) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-xl bg-navy-primary border border-navy-light p-6 sm:p-8 hover:border-gold-accent/50 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-6">
                {/* PIPELINE / FLOW VISUAL */}
                {project.pipeline && (
                  <div className="flex items-center justify-between bg-navy-dark/70 rounded-lg p-3 sm:p-4 border border-navy-light/60">
                    {project.pipeline.map((step, idx) => {
                      const IconComponent = iconMap[step.icon] || Server;
                      return (
                        <React.Fragment key={idx}>
                          <div className="flex flex-col items-center text-center gap-1">
                            <IconComponent size={20} className="text-cyan-400" />
                            <span className="text-[10px] sm:text-xs text-gray-300">
                              {step.label}
                            </span>
                          </div>
                          {idx < project.pipeline.length - 1 && (
                            <span className="text-gray-500 text-xs">→</span>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                )}

                {/* TAG & TITLE */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-gold-accent font-semibold tracking-wider">
                    {project.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* TECH STACK PILLS */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-navy-dark text-gray-300 border border-navy-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* VIEW CASE STUDY LINK */}
              <div className="pt-6 mt-6 border-t border-navy-light/60 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold-accent hover:text-gold-hover hover:underline transition-all cursor-pointer"
                >
                  <span>View case study</span>
                  <ArrowRight size={16} />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 3. LIVE GITHUB REPOSITORIES (AUTO-SYNCED) */}
        {repos.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-navy-light/60 pb-4">
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Code2 size={24} className="text-gold-accent" />
                  <span>Latest Repositories</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Synchronized live from Edwin's GitHub profile (@kimruto68)
                </p>
              </div>

              <a
                href="https://github.com/kimruto68?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-gold-accent hover:underline flex items-center gap-1.5 self-start sm:self-auto"
              >
                <span>Browse all on GitHub</span>
                <ExternalLink size={13} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-xl bg-navy-primary/60 border border-navy-light hover:border-gold-accent/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-md"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-gold-accent">
                        {repo.language || "Cloud"}
                      </span>
                      <ExternalLink
                        size={14}
                        className="text-gray-500 group-hover:text-gold-accent transition-colors"
                      />
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-gold-accent transition-colors line-clamp-1">
                      {repo.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 leading-relaxed">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-gray-400 pt-4 mt-4 border-t border-navy-light/40">
                    <span className="flex items-center gap-1">
                      <Star size={13} />
                      <span>{repo.stars || 0}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={13} />
                      <span>{repo.forks || 0}</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* 4. BUILT IN THE OPEN GITHUB REPO BANNER */}
        <div className="rounded-2xl bg-gradient-to-r from-navy-primary via-navy-light to-navy-primary border border-navy-light p-8 sm:p-10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-accent font-semibold flex items-center gap-2">
              <Github size={16} className="text-gold-accent" />
              Built in the open
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Explore the infrastructure behind the work.
            </h3>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              The code, configurations, and decisions are all there. Take a look at the Terraform modules, follow the documentation, and see how the pieces fit together.
            </p>
          </div>

          <a
            href="https://github.com/kimruto68/terraform-aws-architecture"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold-accent text-navy-dark font-bold text-sm hover:bg-gold-hover hover:scale-105 transition-all shadow-lg shrink-0"
          >
            <Github size={18} />
            <span>View repository</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
