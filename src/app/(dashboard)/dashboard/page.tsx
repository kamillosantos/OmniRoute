export const dynamic = "force-dynamic";

const revenueCards = [
  { label: "Revenue", value: "R$ 86.4k", trend: "+18.2%", tone: "cyan" },
  { label: "CAC", value: "R$ 184", trend: "-12.8%", tone: "emerald" },
  { label: "ROAS", value: "4.8x", trend: "+0.7x", tone: "violet" },
  { label: "Pipeline", value: "1.6k", trend: "+22%", tone: "amber" },
];

const campaigns = [
  { channel: "Meta Ads", name: "Oferta A — Low Ticket", roas: "4.8x", cpa: "R$ 184", status: "Otimizando" },
  { channel: "Google Ads", name: "Oferta B — WhatsApp", roas: "3.9x", cpa: "R$ 211", status: "Estável" },
  { channel: "TikTok", name: "Oferta C — Retargeting", roas: "5.4x", cpa: "R$ 162", status: "Alta performance" },
];

const leadScores = [
  { name: "Lead 01", status: "Alto potencial", score: 92 },
  { name: "Lead 02", status: "Baixo perfil", score: 68 },
  { name: "Lead 03", status: "Qualificado", score: 87 },
  { name: "Lead 04", status: "Em nurture", score: 74 },
];

const aiTasks = [
  "Reagendar follow-up para 12 leads quentes",
  "Aumentar budget em Google Ads em 8%",
  "Lançar teste de criativo para oferta A",
  "Ativar regra de pausa em CPA acima de R$ 220",
];

const funnel = [
  { label: "Leads", value: 94, color: "bg-cyan-400" },
  { label: "Qualificados", value: 71, color: "bg-violet-400" },
  { label: "Vendas", value: 46, color: "bg-emerald-400" },
  { label: "Faturado", value: 32, color: "bg-amber-400" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-4 text-slate-100 md:p-6">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-slate-950/40 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Revenue intelligence</p>
            <h1 className="mt-2 text-2xl font-black tracking-tight text-white md:text-3xl">KJS SCALE</h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-full border border-slate-700 bg-slate-950 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500">
              Exportar
            </button>
            <button className="rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 px-4 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110">
              + Novo lead
            </button>
          </div>
        </header>

        <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {revenueCards.map((card) => (
            <div key={card.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{card.label}</p>
                <span className={`rounded-full px-2 py-1 text-[10px] font-bold ${
                  card.tone === "cyan"
                    ? "bg-cyan-500/10 text-cyan-300"
                    : card.tone === "emerald"
                      ? "bg-emerald-500/10 text-emerald-300"
                      : card.tone === "violet"
                        ? "bg-violet-500/10 text-violet-300"
                        : "bg-amber-500/10 text-amber-300"
                }`}>
                  {card.trend}
                </span>
              </div>
              <h2 className="mt-6 text-3xl font-black text-white">{card.value}</h2>
              <p className="mt-2 text-sm text-slate-400">Comparado ao período anterior</p>
            </div>
          ))}
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">Campanhas</p>
                <h2 className="mt-2 text-xl font-bold text-white">Performance por canal</h2>
              </div>
              <button className="rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-200 transition hover:border-slate-500">
                Ver tudo
              </button>
            </div>

            <div className="mt-5 space-y-4">
              {campaigns.map((campaign) => (
                <div key={campaign.name} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{campaign.channel}</p>
                      <p className="mt-1 text-base font-semibold text-white">{campaign.name}</p>
                    </div>
                    <span className="inline-flex w-fit rounded-full bg-cyan-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                      {campaign.status}
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300 sm:grid-cols-2">
                    <div className="rounded-xl bg-slate-900 p-2">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">ROAS</div>
                      <div className="mt-1 text-lg font-black text-cyan-300">{campaign.roas}</div>
                    </div>
                    <div className="rounded-xl bg-slate-900 p-2">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">CPA</div>
                      <div className="mt-1 text-lg font-black text-violet-300">{campaign.cpa}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">Lead score</p>
                <button className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-200">Ver</button>
              </div>

              <div className="mt-5 space-y-4">
                {leadScores.map((lead) => (
                  <div key={lead.name} className="rounded-2xl bg-slate-950 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm text-slate-400">{lead.name}</p>
                        <p className="text-sm font-semibold text-white">{lead.status}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Score</p>
                        <p className="text-lg font-black text-cyan-300">{lead.score}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">IA comercial</p>
              <div className="mt-4 space-y-3">
                {aiTasks.map((task) => (
                  <div key={task} className="flex items-start gap-3 rounded-2xl bg-slate-950 p-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <p className="text-sm text-slate-200">{task}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">Funil de conversão</p>
                <h2 className="mt-2 text-xl font-bold text-white">Acompanhamento do pipeline</h2>
              </div>
              <button className="rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-200">Detalhes</button>
            </div>

            <div className="mt-6 space-y-4">
              {funnel.map((step) => (
                <div key={step.label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>{step.label}</span>
                    <span>{step.value}%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                    <div className={`${step.color} h-full rounded-full`} style={{ width: `${step.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-900 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Sugestão do sistema</p>
            <h2 className="mt-3 text-2xl font-black text-white">Ajuste agora para ganho extra</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              O canal Meta Ads está 18% acima do CPA alvo. A recomendação é elevar budget em 8% e
              reativar os criativos que geram maior CTR em ofertas de baixo ticket.
            </p>
            <button className="mt-5 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 px-4 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110">
              Aplicar recomendação
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
