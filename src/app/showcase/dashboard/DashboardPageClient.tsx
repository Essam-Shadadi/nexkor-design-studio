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
import Link from "next/link";
import { useLanguage } from "@/components/lang/LanguageProvider";

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
  { time: "09:24", key: "incidentResolved" as const, type: "incident" as const },
  { time: "08:57", key: "newDeployment" as const, type: "deploy" as const },
  { time: "08:15", key: "userAccessUpdated" as const, type: "access" as const },
  { time: "07:50", key: "maintenanceCompleted" as const, type: "maintenance" as const },
];

export default function DashboardPageClient() {
  const { t } = useLanguage();

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
            <h1 className="text-xl font-heading mb-1">
              {t("dashboard.title")}
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t("dashboard.subtitle")}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t("dashboard.secureAccessLabel")}{" "}
              <Link href="/showcase/auth" className="text-nk-blue hover:underline">
                /showcase/auth
              </Link>
            </p>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <p className="text-sm font-heading">
                {t("dashboard.sidebar.navTitle")}
              </p>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-gray-600 dark:text-gray-300">
                • {t("dashboard.sidebar.nav.overview")}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                • {t("dashboard.sidebar.nav.systemsHealth")}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                • {t("dashboard.sidebar.nav.usageMetrics")}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                • {t("dashboard.sidebar.nav.securityAccess")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <p className="text-sm font-heading">
                {t("dashboard.filters.title")}
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input
                id="search"
                label={t("dashboard.filters.searchLabel")}
                placeholder={t("dashboard.filters.searchPlaceholder")}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Select
                id="status"
                label={t("dashboard.filters.statusLabel")}
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
              >
                <option value="all">{t("dashboard.filters.status.all")}</option>
                <option value="Healthy">{t("dashboard.filters.status.healthy")}</option>
                <option value="Warning">{t("dashboard.filters.status.warning")}</option>
                <option value="Down">{t("dashboard.filters.status.down")}</option>
              </Select>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button size="sm" variant="secondary" onClick={triggerLoading}>
                {t("dashboard.filters.refresh")}
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
                  {t(`dashboard.tabs.${tab.id}`)}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t("dashboard.notice.demoOnly")}
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

const TAB_ITEMS: { id: Tab }[] = [
  { id: "overview" },
  { id: "systems" },
  { id: "activity" },
];

// OVERVIEW
function OverviewSection({ loading }: { loading: boolean }) {
  const { t } = useLanguage();

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
                {t("dashboard.overview.activeSystems.title")}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-heading">
                {SYSTEMS.filter((s) => s.status !== "Down").length}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {t("dashboard.overview.activeSystems.captionPrefix")}{" "}
                {SYSTEMS.length}{" "}
                {t("dashboard.overview.activeSystems.captionSuffix")}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Card>
            <CardHeader className="pb-1">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {t("dashboard.overview.overallUptime.title")}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-heading">98.9%</p>
              <p className="text-xs text-gray-500 mt-1">
                {t("dashboard.overview.overallUptime.caption")}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Card>
            <CardHeader className="pb-1">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {t("dashboard.overview.incidentsToday.title")}
              </p>
            </CardHeader>
            <CardContent className="flex items-baseline gap-2">
              <p className="text-3xl font-heading">2</p>
              <Badge variant="yellow">
                {t("dashboard.overview.incidentsToday.badge")}
              </Badge>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Mini chart + summary */}
      <div className="grid gap-4 lg:grid-cols-[1.2fr,minmax(0,1fr)]">
        <Card>
          <CardHeader className="pb-2">
            <p className="text-sm font-heading">
              {t("dashboard.overview.requestVolume.title")}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t("dashboard.overview.requestVolume.subtitle")}
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
              {t("dashboard.overview.requestVolume.footer")}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <p className="text-sm font-heading">
              {t("dashboard.overview.statusSummary.title")}
            </p>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <p>
              • <strong>{SYSTEMS.filter((s) => s.status === "Healthy").length}</strong>{" "}
              {t("dashboard.overview.statusSummary.healthy")}
            </p>
            <p>
              • <strong>{SYSTEMS.filter((s) => s.status === "Warning").length}</strong>{" "}
              {t("dashboard.overview.statusSummary.warning")}
            </p>
            <p>
              • <strong>{SYSTEMS.filter((s) => s.status === "Down").length}</strong>{" "}
              {t("dashboard.overview.statusSummary.down")}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t("dashboard.overview.statusSummary.footer")}
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
  const { t } = useLanguage();

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-heading">
          {t("dashboard.systems.title")}
        </h2>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {t("dashboard.systems.showingPrefix")} {filtered.length}{" "}
          {t("dashboard.systems.showingMiddle")} {total}{" "}
          {t("dashboard.systems.showingSuffix")}
        </p>
      </div>

      <Card>
        <CardContent className="p-0 overflow-hidden">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-gray-50 dark:bg-nk-charcoal/80">
              <tr className="text-left">
                <th className="px-4 py-2">{t("dashboard.systems.table.system")}</th>
                <th className="px-4 py-2">{t("dashboard.systems.table.status")}</th>
                <th className="px-4 py-2">{t("dashboard.systems.table.latency")}</th>
                <th className="px-4 py-2">{t("dashboard.systems.table.uptime")}</th>
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
                    {t("dashboard.systems.empty")}
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
  const { t } = useLanguage();

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-heading">
        {t("dashboard.activity.title")}
      </h2>
      <Card>
        <CardContent className="space-y-3 text-sm">
          {ACTIVITY.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 border-b last:border-0 border-gray-100 dark:border-gray-800 pb-3 last:pb-0"
            >
              <span className="text-xs text-gray-500 dark:text-gray-400 w-14">
                {item.time}
              </span>
              <span className="flex-1 text-gray-700 dark:text-gray-200">
                {t(`dashboard.activity.items.${item.key}`)}
              </span>
              <StatusPill type={item.type} />
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

function StatusBadge({ status }: { status: System["status"] }) {
  const { t } = useLanguage();

  if (status === "Healthy") {
    return <Badge variant="green">{t("dashboard.status.healthy")}</Badge>;
  }
  if (status === "Warning") {
    return <Badge variant="yellow">{t("dashboard.status.warning")}</Badge>;
  }
  return <Badge variant="outline">{t("dashboard.status.down")}</Badge>;
}

function StatusPill({ type }: { type: (typeof ACTIVITY)[number]["type"] }) {
  const { t } = useLanguage();

  if (type === "incident") {
    return <Badge variant="yellow">{t("dashboard.activity.badge.incident")}</Badge>;
  }
  if (type === "deploy") {
    return <Badge variant="blue">{t("dashboard.activity.badge.deploy")}</Badge>;
  }
  if (type === "access") {
    return <Badge variant="outline">{t("dashboard.activity.badge.access")}</Badge>;
  }
  return <Badge variant="gray">{t("dashboard.activity.badge.maintenance")}</Badge>;
}
