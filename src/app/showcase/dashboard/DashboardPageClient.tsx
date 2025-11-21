"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

import { Container } from "@/components/ui/Container";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

type System = {
  name: string;
  status: "Healthy" | "Warning" | "Down";
  latency: string;
  uptime: string;
};

type Tab = "overview" | "systems" | "activity";

const SYSTEMS: System[] = [
  { name: "Nexkor HR Portal", status: "Healthy", latency: "96ms", uptime: "99.9%" },
  { name: "Cloud Monitor", status: "Warning", latency: "220ms", uptime: "98.7%" },
  { name: "Secure Access", status: "Healthy", latency: "130ms", uptime: "99.5%" },
  { name: "Smart Assistant", status: "Healthy", latency: "80ms", uptime: "99.8%" },
  { name: "Nexkor Track", status: "Down", latency: "—", uptime: "94.3%" },
];

const ACTIVITY = [
  { time: "09:24", label: "Incident resolved on Nexkor Track", type: "incident" as const },
  { time: "08:57", label: "New deployment: Cloud Monitor v1.3.2", type: "deploy" as const },
  { time: "08:15", label: "User access updated in Secure Access", type: "access" as const },
  { time: "07:50", label: "Scheduled maintenance completed", type: "maintenance" as const },
];

export default function DashboardPageClient() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] =
    useState<"all" | "Healthy" | "Warning" | "Down">("all");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const filtered = SYSTEMS.filter((sys) => {
    const matchesQuery = sys.name.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = statusFilter === "all" || sys.status === statusFilter;
    return matchesQuery && matchesStatus;
  });

  const triggerLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  useEffect(() => {
    // simulate initial load
    triggerLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-nk-bg dark:bg-nk-bgDark">
      <Container className="py-10 lg:py-12 grid gap-8 lg:grid-cols-[260px,minmax(0,1fr)]">
        {/* SIDEBAR */}
        <aside className="space-y-6">
          <div>
            <h1 className="text-xl font-heading mb-1">Nexkor Dashboard</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Example dashboard built with Nexkor Design Studio.
            </p>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <p className="text-sm font-heading">Demo navigation</p>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-gray-600 dark:text-gray-300">• Overview</p>
              <p className="text-gray-600 dark:text-gray-300">• Systems health</p>
              <p className="text-gray-600 dark:text-gray-300">• Usage metrics</p>
              <p className="text-gray-600 dark:text-gray-300">• Security & access</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <p className="text-sm font-heading">Filters</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input
                id="search"
                label="Search systems"
                placeholder="e.g. Cloud Monitor"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Select
                id="status"
                label="Status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
              >
                <option value="all">All</option>
                <option value="Healthy">Healthy</option>
                <option value="Warning">Warning</option>
                <option value="Down">Down</option>
              </Select>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button size="sm" variant="secondary" onClick={triggerLoading}>
                Refresh data
              </Button>
            </CardFooter>
          </Card>
        </aside>

        {/* MAIN CONTENT */}
        <main className="space-y-6">
          {/* TABS */}
          <div className="flex flex-wrap items-center gap-3 justify-between">
            <div className="inline-flex rounded-full border bg-white dark:bg-nk-charcoal/80 p-1 text-xs">
              {TAB_ITEMS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-1.5 rounded-full transition ${
                    activeTab === tab.id
                      ? "bg-nk-blue text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-nk-charcoal"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Demo-only data. No real infrastructure connected.
            </p>
          </div>

          {activeTab === "overview" && (
            <OverviewSection loading={loading} />
          )}

          {activeTab === "systems" && (
            <SystemsSection
              loading={loading}
              filtered={filtered}
              total={SYSTEMS.length}
            />
          )}

          {activeTab === "activity" && <ActivitySection />}
        </main>
      </Container>
    </div>
  );
}

const TAB_ITEMS: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "systems", label: "Systems" },
  { id: "activity", label: "Activity" },
];

// OVERVIEW
function OverviewSection({ loading }: { loading: boolean }) {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate="show"
        className="grid gap-4 md:grid-cols-3"
      >
        <motion.div variants={fadeUp}>
          <Card>
            <CardHeader className="pb-1">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Active systems
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-heading">
                {SYSTEMS.filter((s) => s.status !== "Down").length}
              </p>
              <p className="text-xs text-gray-500 mt-1">Out of {SYSTEMS.length} total</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Card>
            <CardHeader className="pb-1">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Overall uptime
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-heading">98.9%</p>
              <p className="text-xs text-gray-500 mt-1">Rolling 30 days (demo data)</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Card>
            <CardHeader className="pb-1">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Incidents today
              </p>
            </CardHeader>
            <CardContent className="flex items-baseline gap-2">
              <p className="text-3xl font-heading">2</p>
              <Badge variant="yellow">Simulated</Badge>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Mini chart + summary */}
      <div className="grid gap-4 lg:grid-cols-[1.2fr,minmax(0,1fr)]">
        <Card>
          <CardHeader className="pb-2">
            <p className="text-sm font-heading">Request volume (demo)</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Simulated request volume across all Nexkor services.
            </p>
            <div className="flex items-end gap-2 h-32">
              {MOCK_REQUEST_BARS.map((h, idx) => (
                <div
                  key={idx}
                  className="flex-1 rounded-t-lg bg-nk-blue/40 dark:bg-nk-blue/60"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Data is mocked to illustrate chart-friendly layout and spacing.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <p className="text-sm font-heading">Status summary</p>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <p>
              • <strong>{SYSTEMS.filter((s) => s.status === "Healthy").length}</strong> systems are
              fully healthy.
            </p>
            <p>
              • <strong>{SYSTEMS.filter((s) => s.status === "Warning").length}</strong> system
              requires attention.
            </p>
            <p>
              • <strong>{SYSTEMS.filter((s) => s.status === "Down").length}</strong> system is
              currently down (simulated incident).
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              This section demonstrates how textual summaries and charts can live together in
              dashboards.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const MOCK_REQUEST_BARS = [40, 55, 70, 50, 80, 60, 75];

// SYSTEMS
function SystemsSection({
  loading,
  filtered,
  total,
}: {
  loading: boolean;
  filtered: System[];
  total: number;
}) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-heading">System health</h2>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Showing {filtered.length} of {total} systems
        </p>
      </div>

      <Card>
        <CardContent className="p-0 overflow-hidden">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-gray-50 dark:bg-nk-charcoal/80">
              <tr className="text-left">
                <th className="px-4 py-2">System</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Latency</th>
                <th className="px-4 py-2">Uptime</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 4 }).map((_, idx) => (
                  <tr key={idx} className="border-t border-gray-100 dark:border-gray-800">
                    <td className="px-4 py-3">
                      <div className="h-4 w-40 rounded bg-gray-100 dark:bg-nk-charcoal/70 animate-pulse" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="h-4 w-20 rounded bg-gray-100 dark:bg-nk-charcoal/70 animate-pulse" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="h-4 w-12 rounded bg-gray-100 dark:bg-nk-charcoal/70 animate-pulse" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="h-4 w-12 rounded bg-gray-100 dark:bg-nk-charcoal/70 animate-pulse" />
                    </td>
                  </tr>
                ))
              ) : filtered.length === 0 ? (
                <tr className="border-t border-gray-100 dark:border-gray-800">
                  <td
                    className="px-4 py-6 text-center text-gray-500 dark:text-gray-400"
                    colSpan={4}
                  >
                    No systems match the current filters.
                  </td>
                </tr>
              ) : (
                filtered.map((sys) => (
                  <tr
                    key={sys.name}
                    className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50/60 dark:hover:bg-nk-charcoal/70"
                  >
                    <td className="px-4 py-3">{sys.name}</td>
                    <td className="px-4 py-3">
                      <StatusBadge status={sys.status} />
                    </td>
                    <td className="px-4 py-3">{sys.latency}</td>
                    <td className="px-4 py-3">{sys.uptime}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </section>
  );
}

// ACTIVITY
function ActivitySection() {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-heading">Recent activity</h2>
      <Card>
        <CardContent className="space-y-3 text-sm">
          {ACTIVITY.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 border-b last:border-0 border-gray-100 dark:border-gray-800 pb-3 last:pb-0"
            >
              <span className="text-xs text-gray-500 dark:text-gray-400 w-14">{item.time}</span>
              <span className="flex-1 text-gray-700 dark:text-gray-200">{item.label}</span>
              <StatusPill type={item.type} />
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

function StatusBadge({ status }: { status: System["status"] }) {
  if (status === "Healthy") return <Badge variant="green">Healthy</Badge>;
  if (status === "Warning") return <Badge variant="yellow">Warning</Badge>;
  return <Badge variant="outline">Down</Badge>;
}

function StatusPill({ type }: { type: (typeof ACTIVITY)[number]["type"] }) {
  if (type === "incident") return <Badge variant="yellow">Incident</Badge>;
  if (type === "deploy") return <Badge variant="blue">Deploy</Badge>;
  if (type === "access") return <Badge variant="outline">Access</Badge>;
  return <Badge variant="gray">Maintenance</Badge>;
}
