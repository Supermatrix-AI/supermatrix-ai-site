"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Infinity,
  ShieldCheck,
  Rocket,
  Layers,
  Sparkles,
  Github,
  Mail,
  Globe,
  Workflow,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: "DIWA Engines",
    text:
      "Modular intelligence units (DIWA-0…∞) specializing in decoding, forecasting, BI, and economic arbitrage.",
  },
  {
    icon: <Infinity className="h-6 w-6" />,
    title: "FusionLinker™",
    text:
      "Unifies data streams and tools into one sovereign brain — APIs, files, models, and workflows.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Sovereign by Design",
    text:
      "Privacy-first architecture with granular keys, vault isolation, and IP-safe execution layers.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Universal Rosetta",
    text:
      "Cross-civilizational decoding stack for scripts, symbols, and knowledge graphs.",
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Agentic Pipelines",
    text:
      "Composable AI agents for research, OSINT, forecasting, and enterprise automations.",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "IP & Compliance",
    text:
      "WIPO/IPOPHL-ready artifacts, audit trails, and exportable evidence packs.",
  },
];

const useCases = [
  {
    title: "Cultural Intelligence & Decoding",
    points: [
      "Indus, Linear A, Rongorongo, and more",
      "Symbolic → semantic pipelines",
      "Scholarly export packs",
    ],
  },
  {
    title: "Business Intelligence & Forecasting",
    points: [
      "Market scanning & trend graphs",
      "Metaculus/Good Judgment integrations",
      "Brier-calibrated engines",
    ],
  },
  {
    title: "Economic Arbitrage (Diwa-21)",
    points: [
      "Risk engines & hedging templates",
      "Backtesting dashboards",
      "Policy-aware guardrails",
    ],
  },
  {
    title: "Enterprise Automation",
    points: [
      "RFP assistants & proposal bots",
      "Knowledge bases & copilots",
      "Secure workflow orchestration",
    ],
  },
];

const nav = [
  { name: "Features", href: "#features" },
  { name: "Use Cases", href: "#usecases" },
  { name: "Architecture", href: "#architecture" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Contact", href: "#contact" },
];

export default function SupermatrixLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100 selection:bg-emerald-300/30">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 grid place-items-center shadow-lg shadow-cyan-500/20">
              <Infinity className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-bold tracking-tight">
                Supermatrix<span className="text-cyan-400">AI</span>
              </div>
              <div className="text-[11px] text-slate-400">
                Sovereign Intelligence Stack
              </div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <a
                key={n.name}
                href={n.href}
                className="text-sm text-slate-300 hover:text-white transition"
              >
                {n.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Button asChild className="rounded-2xl">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Contact
              </a>
            </Button>
            <Button asChild variant="secondary" className="rounded-2xl">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(75%_60%_at_50%_0%,black,transparent)]">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] bg-cyan-500/20 blur-3xl rounded-full" />
          <div className="absolute top-40 right-0 h-[28rem] w-[28rem] bg-indigo-500/20 blur-3xl rounded-full" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Sovereign AI for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-300">
                  Decoding, Forecasting, and Automation
                </span>
              </h1>
              <p className="mt-5 text-slate-300 text-lg md:text-xl max-w-2xl">
                Build, orchestrate, and protect mission-critical intelligence.
                SupermatrixAI unifies DIWA engines, FusionLinker™, and Universal
                Rosetta into one composable stack.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="rounded-2xl">
                  <Rocket className="mr-2 h-4 w-4" /> Launch Demo
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-2xl"
                  asChild
                >
                  <a href="#features">
                    <Sparkles className="mr-2 h-4 w-4" /> Explore Features
                  </a>
                </Button>
              </div>
              <div className="mt-6 text-xs text-slate-400">
                *Your data stays yours. IP-safe, audit-ready.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <Card className="rounded-3xl bg-slate-900/60 border-white/10 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-slate-200 flex items-center gap-2">
                    <Globe className="h-5 w-5" /> System Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl bg-slate-800/60 p-4">
                      <div className="text-slate-400">Engines</div>
                      <div className="text-lg font-semibold">DIWA-0…21</div>
                    </div>
                    <div className="rounded-2xl bg-slate-800/60 p-4">
                      <div className="text-slate-400">Pipelines</div>
                      <div className="text-lg font-semibold">
                        Agentic + OSINT
                      </div>
                    </div>
                    <div className="rounded-2xl bg-slate-800/60 p-4">
                      <div className="text-slate-400">Security</div>
                      <div className="text-lg font-semibold">Vault + Keys</div>
                    </div>
                    <div className="rounded-2xl bg-slate-800/60 p-4">
                      <div className="text-slate-400">Deploy</div>
                      <div className="text-lg font-semibold">Cloud / Edge</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Key Features
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl">
            Everything you need to run a sovereign, composable AI stack — from
            decoding engines to enterprise automation.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="rounded-2xl bg-slate-900/60 border-white/10 hover:border-cyan-400/40 transition">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-slate-100">
                    <span className="rounded-xl bg-cyan-500/15 p-2 text-cyan-300">
                      {f.icon}
                    </span>
                    {f.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm">{f.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section id="usecases" className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Use Cases
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl">
            Start with templates and customize. Each kit includes data schemas,
            prompts, and guardrails.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {useCases.map((u, i) => (
            <Card key={i} className="rounded-2xl bg-slate-900/60 border-white/10">
              <CardHeader>
                <CardTitle className="text-slate-100">{u.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                  {u.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Architecture at a Glance
          </h2>
          <p className="mt-3 text-slate-300 max-w-3xl">
            Composable micro-services with API Gateway, Vaulted Storage, Agent
            Orchestrator, and Model Layer. Swap in local or cloud models as
            needed.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
          <Card className="rounded-2xl bg-slate-900/60 border-white/10">
            <CardHeader>
              <CardTitle>Data & Vaults</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-300">
              Vector stores, doc vaults, audit logs, and encryption keys. Bring
              your own storage or use managed backends.
            </CardContent>
          </Card>
          <Card className="rounded-2xl bg-slate-900/60 border-white/10">
            <CardHeader>
              <CardTitle>Engines & Orchestrator</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-300">
              DIWA engines execute tasks with policy guardrails. Agent graph
              routes queries, tools, and memory.
            </CardContent>
          </Card>
          <Card className="rounded-2xl bg-slate-900/60 border-white/10">
            <CardHeader>
              <CardTitle>API Gateway</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-300">
              FastAPI endpoints for ingest, search, decode, forecast, and
              automations. Keyed access per tenant.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Roadmap
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl">
            Initial public prototype → private pilots → enterprise rollouts.
            Your feedback shapes the stack.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <Card className="rounded-2xl bg-slate-900/60 border-white/10">
            <CardHeader>
              <CardTitle>Phase 1 — Prototype</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-300 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Landing page + docs</li>
                <li>Demo: DIWA-15 (decoding), DIWA-21 (arbitrage)</li>
                <li>Local model adapters</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl bg-slate-900/60 border-white/10">
            <CardHeader>
              <CardTitle>Phase 2 — Pilots</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-300 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Partner integrations (docs, storage)</li>
                <li>RBAC, audit, vault policies</li>
                <li>Private datasets & KPIs</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl bg-slate-900/60 border-white/10">
            <CardHeader>
              <CardTitle>Phase 3 — Scale</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-300 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Multi-tenant orchestration</li>
                <li>SLA & monitoring</li>
                <li>Marketplace of DIWA modules</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl">
            Tell us your use case. We’ll tailor a pilot around your data and
            constraints.
          </p>
        </div>
        <Card className="rounded-2xl bg-slate-900/60 border-white/10">
          <CardContent className="p-6">
            <form className="grid md:grid-cols-2 gap-4 text-sm">
              <input
                className="rounded-xl bg-slate-800/60 p-3 outline-none focus:ring-2 focus:ring-cyan-400/50"
                placeholder="Full name"
              />
              <input
                className="rounded-xl bg-slate-800/60 p-3 outline-none focus:ring-2 focus:ring-cyan-400/50"
                placeholder="Email"
              />
              <input
                className="rounded-xl bg-slate-800/60 p-3 outline-none focus:ring-2 focus:ring-cyan-400/50 md:col-span-2"
                placeholder="Company / Organization"
              />
              <textarea
                rows={4}
                className="rounded-xl bg-slate-800/60 p-3 outline-none focus:ring-2 focus:ring-cyan-400/50 md:col-span-2"
                placeholder="Describe your goals"
              ></textarea>
              <div className="md:col-span-2 flex justify-end">
                <Button className="rounded-2xl">
                  <Mail className="mr-2 h-4 w-4" /> Send
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div>© {new Date().getFullYear()} SupermatrixAI. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white flex items-center gap-1">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );const [year, setYear] = React.useState<string>("");
React.useEffect(() => setYear(String(new Date().getFullYear())), []);
// ...
<div>© {year} SupermatrixAI. All rights reserved.</div>
