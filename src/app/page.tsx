import Link from "next/link";
import { redirect } from "next/navigation";

const metrics = [
  { value: "4.8x", label: "ROAS médio" },
  { value: "-38%", label: "CPA reduzido" },
  { value: "2.1x", label: "Conversão" },
  { value: "24/7", label: "Automações" },
];

const pillars = [
  {
    title: "UTMFY Tracking",
    text: "Rastreia cliques, campanhas, criativos, páginas, checkout e conversões com precisão total.",
  },
  {
    title: "CRM + Pipeline",
    text: "Organiza leads, funil, relacionamento e acompanhamento comercial em um único lugar.",
  },
  {
    title: "Automação",
    text: "Ativa gatilhos, follow-up, regras e rotação de orçamento sem esforço manual.",
  },
  {
    title: "IA Comercial",
    text: "Score, diagnóstico e recomendações com inteligência de lucro, não só de volume.",
  },
];

const modules = [
  "UTM Builder e padronização",
  "Tracking server-side e click",
  "Checkout + webhooks",
  "Meta CAPI + GA4 + pixel",
  "Atribuição campanha → venda",
  "CRM e lead scoring",
  "ROAS / CAC / Receita",
  "Automações em cascata",
  "Dashboards por canal",
  "IA para gestão comercial",
];

const plans = [
  {
    name: "Starter",
    price: "R$ 299",
    subtitle: "Para agências em crescimento",
    features: ["Tracking", "Dashboard", "CRM inicial", "1 automação"],
  },
  {
    name: "Scale",
    price: "R$ 799",
    subtitle: "Para operação ativa",
    popular: true,
    features: ["Tudo do Starter", "Atribuição avançada", "Lead scoring", "Automações multi-step"],
  },
  {
    name: "Agency",
    price: "R$ 1.990",
    subtitle: "Para múltiplos clientes",
    features: ["Multi-clientes", "Workspaces", "Relatórios", "Suporte priorizado"],
  },
];

const proof = [
  { label: "CPA", value: "R$ 184" },
  { label: "ROAS", value: "4.8x" },
  { label: "Faturamento", value: "R$ 86.4k" },
  { label: "Tempo", value: "-41%" },
];

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = (await searchParams) || {};
  const query = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (typeof value === "string") {
      query.set(key, value);
    } else if (Array.isArray(value)) {
      for (const item of value) {
        if (typeof item === "string") query.append(key, item);
      }
    }
  }

  if (query.get("user_id") && query.get("access_token")) {
    redirect(`/callback?${query.toString()}`);
  }

  return (
    <main className="min-h-screen bg-[#07111f] text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.28),_transparent_35%),radial-gradient(circle_at_right,_rgba(16,185,129,0.18),_transparent_22%)]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 lg:px-12">
          <header className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-400 to-emerald-400 text-lg font-black text-slate-950">
                K
              </div>
              <div>
                <div className="text-lg font-black tracking-tight">KJS SCALE</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">UTMFY premium</div>
              </div>
            </div>

            <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
              <a href="#plataforma" className="transition hover:text-white">Plataforma</a>
              <a href="#modulos" className="transition hover:text-white">Módulos</a>
              <a href="#cases" className="transition hover:text-white">Cases</a>
              <a href="#precos" className="transition hover:text-white">Planos</a>
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/dashboard" className="hidden rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-semibold text-slate-200 md:inline-flex">
                Entrar
              </Link>
              <Link href="/dashboard" className="rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25">
                Agendar demo
              </Link>
            </div>
          </header>

          <div className="pt-16 text-center sm:pt-22 lg:pt-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-200">
              Growth OS para low ticket
            </div>

            <h1 className="mx-auto mt-8 max-w-5xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
              Converta tráfego barato em receita escalável.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
              A KJS SCALE reúne UTMFY, CRM, automação e IA para transformar campanhas baratas em
              operações de crescimento previsíveis, com controle real de CAC, ROAS e lucro.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/dashboard" className="rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 px-7 py-3.5 text-base font-bold text-slate-950 shadow-xl shadow-cyan-500/35">
                Ver dashboard
              </Link>
              <Link href="#precos" className="rounded-full border border-slate-700 bg-slate-900/50 px-7 py-3.5 text-base font-semibold text-slate-100">
                Ver planos
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 backdrop-blur-sm">
                <div className="text-3xl font-black text-cyan-300">{item.value}</div>
                <p className="mt-2 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plataforma" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Arquitetura da plataforma</p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Uma stack pensada para vender mais com menos ruído.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6 shadow-xl shadow-slate-950/20">
              <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-200">
                Core
              </div>
              <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="modulos" className="bg-slate-950/70 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Módulos essenciais</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Tudo que uma operação de baixo ticket precisa para escalar sem improviso.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/15 text-sm text-cyan-300">
                  ✓
                </div>
                <p className="text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Resultados</p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">A prova está na performance real</h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {proof.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <div className="text-3xl font-black text-cyan-300">{item.value}</div>
              <p className="mt-2 text-sm text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="precos" className="bg-slate-950/70 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Planos</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Estrutura acessível para agências de growth.</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-7 ${
                  plan.popular
                    ? "border-cyan-400 bg-gradient-to-b from-cyan-500/10 to-slate-900 shadow-lg shadow-cyan-500/20"
                    : "border-slate-800 bg-slate-900/70"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  {plan.popular && (
                    <span className="rounded-full bg-cyan-500/15 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="pb-1 text-slate-400">/ mês</span>
                </div>

                <p className="mt-3 text-sm text-slate-300">{plan.subtitle}</p>

                <ul className="mt-6 space-y-3 text-slate-200">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-0.5 text-cyan-300">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/dashboard" className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 font-bold ${plan.popular ? "bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 text-slate-950" : "border border-slate-700 bg-slate-950 text-white hover:border-slate-500"}`}>
                  Escolher plano
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-cyan-500/25 bg-gradient-to-r from-blue-600/15 via-slate-900 to-emerald-500/15 p-8 text-center sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Pronto para escalar</p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Transforme cada venda em uma máquina de crescimento.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            A KJS SCALE é a plataforma premium para agências de growth que querem rastrear,
            converter e otimizar campanhas em um único ecossistema.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/dashboard" className="rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 px-7 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/30">
              Solicitar demonstração
            </Link>
            <a href="mailto:contato@kjs-scale.com" className="rounded-full border border-slate-700 px-7 py-3.5 text-base font-semibold text-slate-100">
              contato@kjs-scale.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
