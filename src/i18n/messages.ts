export type Language = "en" | "ar";

type Messages = Record<string, string>;

const en: Messages = {
  // Navbar
  "nav.docs": "Docs",
  "nav.colors": "Colors",
  "nav.typography": "Typography",
  "nav.components": "Components",
  "nav.dashboard": "Dashboard",
  "nav.theme.light": "Light mode",
  "nav.theme.dark": "Dark mode",

  // HERO
  "landing.hero.title": "Design that defines Nexkor.",
  "landing.hero.subtitle":
    "A modern, human-centered design system powering every Nexkor experience- crafted for clarity, accessibility, and performance.",
  "landing.hero.primaryCta": "Explore components",
  "landing.hero.secondaryCta": "View motion system",
  "landing.hero.dashboardCta": "View dashboard demo",
  "landing.hero.authCta": "Try auth flow",
  "landing.hero.meta.tech": "Next.js · TypeScript · TailwindCSS · Framer Motion",
  "landing.hero.meta.tagline": "Design-led frontend for Nexkor demos",

  // FEATURE GRID
  "landing.features.title": "Built for a complete demo ecosystem",
  "landing.features.subtitle":
    "Nexkor Design Studio is the visual foundation for HR Portal, Cloud Monitor, Secure Access, Smart Assistant, and more.",

  "landing.features.tag1": "Design System",
  "landing.features.item1.title": "Unified visual language",
  "landing.features.item1.body":
    "Colors, typography, spacing, and components that stay consistent across every Nexkor demo.",

  "landing.features.tag2": "Motion",
  "landing.features.item2.title": "Thoughtful micro-interactions",
  "landing.features.item2.body":
    "Framer Motion presets for fades, slides, scales, and staggered reveals — all respecting reduced motion.",

  "landing.features.tag3": "Engineering",
  "landing.features.item3.title": "Production-grade frontend",
  "landing.features.item3.body":
    "Next.js, TypeScript, Tailwind, and CI/CD pipelines ensure the demo is as solid as real product code.",

  // PREVIEW SECTION
  "landing.preview.badge": "Nexkor UI Preview",
  "landing.preview.title": "Dashboard Shell",
  "landing.preview.live": "Live demo",
  "landing.preview.footerLeft": "Powered by Nexkor Design Studio",
  "landing.preview.footerRight": "Responsive · Accessible · Fast",
  "landing.preview.openDashboard": "Open full dashboard",

  "landing.preview.sideTitle": "One visual language. Many Nexkor experiences.",
  "landing.preview.sideBody":
    "The same components, tokens, and motion patterns power landing pages, dashboards, auth flows, and internal tools across the entire Nexkor demo ecosystem.",
  "landing.preview.point1": "Shared color & typography tokens",
  "landing.preview.point2": "Reusable layout and overlay primitives",
  "landing.preview.point3": "Motion presets for subtle, consistent animation",
  "landing.preview.formsCta": "See form patterns",

  // CTA SECTION
  "landing.cta.title": "Ready to use Nexkor Design Studio in every demo?",
  "landing.cta.subtitle":
    "Start from the design system pages, copy patterns into new products, and keep Nexkor’s visual identity consistent across your entire portfolio.",
  "landing.cta.tokens": "View design tokens",
  "landing.cta.docs": "Open documentation",

  // DASHBOARD
  "dashboard.title": "Nexkor Dashboard",
  "dashboard.subtitle": "Example dashboard built with Nexkor Design Studio.",
  "dashboard.secureAccessLabel": "Secure Access demo:",

  "dashboard.sidebar.navTitle": "Demo navigation",
  "dashboard.sidebar.nav.overview": "Overview",
  "dashboard.sidebar.nav.systemsHealth": "Systems health",
  "dashboard.sidebar.nav.usageMetrics": "Usage metrics",
  "dashboard.sidebar.nav.securityAccess": "Security & access",

  "dashboard.filters.title": "Filters",
  "dashboard.filters.searchLabel": "Search systems",
  "dashboard.filters.searchPlaceholder": "e.g. Cloud Monitor",
  "dashboard.filters.statusLabel": "Status",
  "dashboard.filters.status.all": "All",
  "dashboard.filters.status.healthy": "Healthy",
  "dashboard.filters.status.warning": "Warning",
  "dashboard.filters.status.down": "Down",
  "dashboard.filters.refresh": "Refresh data",

  "dashboard.tabs.overview": "Overview",
  "dashboard.tabs.systems": "Systems",
  "dashboard.tabs.activity": "Activity",

  "dashboard.notice.demoOnly": "Demo-only data. No real infrastructure connected.",

  "dashboard.overview.activeSystems.title": "Active systems",
  "dashboard.overview.activeSystems.captionPrefix": "Out of",
  "dashboard.overview.activeSystems.captionSuffix": "total",

  "dashboard.overview.overallUptime.title": "Overall uptime",
  "dashboard.overview.overallUptime.caption": "Rolling 30 days (demo data)",

  "dashboard.overview.incidentsToday.title": "Incidents today",
  "dashboard.overview.incidentsToday.badge": "Simulated",

  "dashboard.overview.requestVolume.title": "Request volume (demo)",
  "dashboard.overview.requestVolume.subtitle":
    "Simulated request volume across all Nexkor services.",
  "dashboard.overview.requestVolume.footer":
    "Data is mocked to illustrate chart-friendly layout and spacing.",

  "dashboard.overview.statusSummary.title": "Status summary",
  "dashboard.overview.statusSummary.healthy": "systems are fully healthy.",
  "dashboard.overview.statusSummary.warning": "system requires attention.",
  "dashboard.overview.statusSummary.down":
    "system is currently down (simulated incident).",
  "dashboard.overview.statusSummary.footer":
    "This section demonstrates how textual summaries and charts can live together in dashboards.",

  "dashboard.systems.title": "System health",
  "dashboard.systems.showingPrefix": "Showing",
  "dashboard.systems.showingMiddle": "of",
  "dashboard.systems.showingSuffix": "systems",
  "dashboard.systems.table.system": "System",
  "dashboard.systems.table.status": "Status",
  "dashboard.systems.table.latency": "Latency",
  "dashboard.systems.table.uptime": "Uptime",
  "dashboard.systems.empty": "No systems match the current filters.",

  "dashboard.activity.title": "Recent activity",
  "dashboard.activity.items.incidentResolved": "Incident resolved on Nexkor Track",
  "dashboard.activity.items.newDeployment":
    "New deployment: Cloud Monitor v1.3.2",
  "dashboard.activity.items.userAccessUpdated":
    "User access updated in Secure Access",
  "dashboard.activity.items.maintenanceCompleted":
    "Scheduled maintenance completed",

  "dashboard.activity.badge.incident": "Incident",
  "dashboard.activity.badge.deploy": "Deploy",
  "dashboard.activity.badge.access": "Access",
  "dashboard.activity.badge.maintenance": "Maintenance",

  "dashboard.status.healthy": "Healthy",
  "dashboard.status.warning": "Warning",
  "dashboard.status.down": "Down",

  // AUTH
  "auth.badge": "Auth showcase",
  "auth.title": "Secure access with Nexkor",
  "auth.subtitle":
    "This page demonstrates a basic email/password login followed by a multi-factor authentication step using Nexkor Design Studio components.",

  "auth.login.title": "Sign in to your workspace",
  "auth.login.subtitle":
    "Use any email and password to continue to the MFA step.",
  "auth.login.emailLabel": "Email",
  "auth.login.emailPlaceholder": "you@nexkor.org",
  "auth.login.passwordLabel": "Password",
  "auth.login.passwordPlaceholder": "••••••••",
  "auth.login.rememberDevice": "Remember this device",
  "auth.login.forgotPassword": "Forgot password?",
  "auth.login.button": "Continue",
  "auth.login.demoNotice": "Demo only – no real authentication.",
  "auth.login.viewDashboard": "View dashboard",

  "auth.mfa.title": "Multi-factor authentication",
  "auth.mfa.subtitle":
    "We’ve sent a 6-digit code to your email. For the demo, use 123456.",
  "auth.mfa.codeLabel": "Verification code",
  "auth.mfa.codePlaceholder": "Enter 6-digit code",
  "auth.mfa.button": "Verify & continue",
  "auth.mfa.resend": "Resend code",
  "auth.mfa.error.invalidCode": "Invalid code. Try 123456 for the demo.",
  "auth.mfa.error.resendMessage":
    "New demo code requested. Use 123456 again.",
  "auth.mfa.backToLogin": "Back to login",
  "auth.mfa.footer": "Secure Access · Demo flow",

  "auth.success.title": "You’re in.",
  "auth.success.body1":
    "Authentication complete. In a real Nexkor product, this would redirect you into a dashboard, portal, or admin experience.",
  "auth.success.body2":
    "For the showcase, you can continue to the dashboard demo or explore more design system pages.",
  "auth.success.openDashboard": "Open dashboard demo",
  "auth.success.exploreComponents": "Explore components",

  // DOCS – COMPONENTS
  "docs.components.title": "Components",
  "docs.components.intro":
    "Nexkor Design Studio provides reusable, accessible components that can be used across all demos: buttons, badges, forms, layout primitives, overlays, feedback elements, and more. This page describes how to use them conceptually. Explore /design-system/components for a live gallery.",

  "docs.components.buttons.title": "Buttons",
  "docs.components.buttons.body":
    "The Button component supports multiple variants and sizes, plus a loading state:",
  "docs.components.buttons.primary":
    "primary — main calls to action",
  "docs.components.buttons.secondary":
    "secondary — secondary actions or less prominent CTAs",
  "docs.components.buttons.ghost":
    "ghost — minimal buttons in toolbars or subtle actions",
  "docs.components.buttons.destructive":
    "destructive — destructive actions like delete/remove",
  "docs.components.buttons.loading":
    "Use the loading prop when an action is in progress to show a spinner and disable the button.",

  "docs.components.badges.title": "Badges",
  "docs.components.badges.body":
    "Badge is used to display small status labels or metadata. Variants map to semantic meaning:",
  "docs.components.badges.blue": "blue — informational",
  "docs.components.badges.green": "green — success",
  "docs.components.badges.yellow": "yellow — warnings",
  "docs.components.badges.outline": "outline — neutral status",

  "docs.components.forms.title": "Forms",
  "docs.components.forms.body":
    "Forms are built using Input, Textarea, and Select components, each supporting:",
  "docs.components.forms.label":
    "label prop for accessible labeling",
  "docs.components.forms.hint":
    "hint for helper text",
  "docs.components.forms.error":
    "error for validation errors",
  "docs.components.forms.aria":
    "Proper aria-invalid and aria-describedby wiring",
  "docs.components.forms.link":
    "See /design-system/forms for full form examples.",

  "docs.components.layout.title": "Layout primitives",
  "docs.components.layout.body":
    "Layout components provide structure:",
  "docs.components.layout.card":
    "Card with header/content/footer slots",
  "docs.components.layout.container":
    "Container for max-width and page padding",
  "docs.components.layout.grid":
    "Grid helper for responsive grids",
  "docs.components.layout.shell":
    "Navbar & Footer components for consistent shell layout",

  "docs.components.overlays.title": "Overlays & feedback",
  "docs.components.overlays.body":
    "Nexkor includes a small but powerful set of interactive components:",
  "docs.components.overlays.modal":
    "Modal — accessible dialog with focus trap, ESC close, and click-out",
  "docs.components.overlays.drawer":
    "Drawer — side panel for settings, filters, or navigation",
  "docs.components.overlays.tooltip":
    "Tooltip — hover tooltip for icons and subtle explanations",
  "docs.components.overlays.toast":
    "Toast — global notification system via ToastProvider",
  "docs.components.overlays.footer":
    "Each overlay is built with accessibility in mind and leverages the shared motion system for consistent transitions.",

  "docs.components.showcase.title": "Showcase pages",
  "docs.components.showcase.body":
    "To see the components in real contexts, explore:",
  "docs.components.showcase.landing":
    "/showcase/landing — marketing landing",
  "docs.components.showcase.dashboard":
    "/showcase/dashboard — operations dashboard",
  "docs.components.showcase.auth":
    "/showcase/auth — login + MFA flow",

  // DOCS – FOUNDATIONS
  "docs.foundations.title": "Foundations",
  "docs.foundations.intro":
    "Foundations define the core visual language of Nexkor — colors, typography, spacing, radii, and motion. All components and layouts are built on top of these primitives to ensure consistency across every Nexkor demo.",

  "docs.foundations.color.title": "Color system",
  "docs.foundations.color.body":
    "Nexkor uses a brand-forward palette with semantic naming in Tailwind:",
  "docs.foundations.color.footer":
    "In components, prefer semantic usage rather than hardcoded hex values. For example: primary buttons use nk.blue, backgrounds use nk.bg / nk.bgDark, and feedback states use green/yellow.",

  "docs.foundations.typography.title": "Typography",
  "docs.foundations.typography.body":
    "The design system uses Poppins for headings and Inter for body text. They are loaded with next/font and exposed as CSS variables:",
  "docs.foundations.typography.footer":
    "Components use font-heading for titles/headings and font-body for body text, ensuring consistent typography across pages.",

  "docs.foundations.spacing.title": "Spacing & radii",
  "docs.foundations.spacing.body":
    "Spacing follows Tailwind's default scale. Corners are typically rounded using slightly larger radii for a modern soft look:",
  "docs.foundations.spacing.footer":
    "Cards, modals, and interactive elements use rounded-xl or rounded-2xl to align with the brand's “futuristic minimalism” aesthetic.",

  "docs.foundations.motion.title": "Motion",
  "docs.foundations.motion.body":
    "Motion is provided via shared Framer Motion presets in src/lib/motion.ts. Examples:",
  "docs.foundations.motion.footer":
    "Motion is wrapped in a global MotionProvider that respects prefers-reduced-motion, ensuring animations are accessible by default.",

  "docs.foundations.theming.title": "Theming",
  "docs.foundations.theming.body":
    "Light and dark modes are handled via a theme provider that toggles a className on the <html> element and persists the user's preference. Components use Tailwind's dark: variant to adjust colors and surfaces.",
    // DOCS – GETTING STARTED
"docs.gettingStarted.title": "Getting Started",
"docs.gettingStarted.intro":
  "This guide explains how the Nexkor Design Studio project is structured and how to work with it locally. The design system is built with Next.js, TypeScript, TailwindCSS, and Framer Motion, and is intended as the visual foundation for all Nexkor demos.",

"docs.gettingStarted.techStack.title": "Tech stack",
"docs.gettingStarted.techStack.item1": "Next.js App Router (TypeScript)",
"docs.gettingStarted.techStack.item2": "TailwindCSS for styling & design tokens",
"docs.gettingStarted.techStack.item3": "Framer Motion for animation & transitions",
"docs.gettingStarted.techStack.item4": "Storybook for isolated UI development",
"docs.gettingStarted.techStack.item5":
  "ESLint, Prettier, Husky, lint-staged, GitHub Actions for quality & CI",

"docs.gettingStarted.structure.title": "Project structure (high level)",

"docs.gettingStarted.running.title": "Running the project",
"docs.gettingStarted.running.body":
  "Install dependencies and run the development server:",
"docs.gettingStarted.running.afterCommand":
  "Then open",

"docs.gettingStarted.storybook.title": "Storybook",
"docs.gettingStarted.storybook.body":
  "Storybook is used to preview and develop components in isolation:",
"docs.gettingStarted.storybook.afterCommand":
  "This opens a dedicated UI where you can browse design tokens, buttons, forms, overlays, and showcase pages without navigating through the main app.",

"docs.gettingStarted.nextSteps.title": "Next steps",
"docs.gettingStarted.nextSteps.body":
  "Once the project is running, explore:",
"docs.gettingStarted.nextSteps.item1":
  "/design-system/colors for color tokens",
"docs.gettingStarted.nextSteps.item2":
  "/design-system/typography for typography",
"docs.gettingStarted.nextSteps.item3":
  "/design-system/components for UI primitives",
"docs.gettingStarted.nextSteps.item4":
  "/showcase/landing for the landing page demo",
"docs.gettingStarted.nextSteps.item5":
  "/showcase/dashboard for the dashboard demo",
"docs.gettingStarted.nextSteps.item6":
  "/showcase/auth for the auth/MFA flow",
  // DOCS – TOKENS
"docs.tokens.title": "Design Tokens",
"docs.tokens.intro":
  "Design tokens are the single source of truth for Nexkor's visual language — colors, typography, radii, and motion timings. They are defined in tailwind.config.js and can be exported as JSON to be shared with other platforms or tools.",

"docs.tokens.export.title": "Token export",
"docs.tokens.export.body":
  "A simple JSON representation of key tokens is exposed at",
"docs.tokens.export.button": "Download tokens.json",

"docs.tokens.colors.title": "Color tokens",
"docs.tokens.colors.body":
  "Colors are defined with a Nexkor-specific prefix in Tailwind and mirrored in",

"docs.tokens.typography.title": "Typography tokens",
"docs.tokens.typography.body":
  "Typography tokens describe the mapping between semantic roles and actual font families:",
"docs.tokens.typography.footer":
  "Components do not hardcode font names; they reference",
"docs.tokens.typography.and": "and",

"docs.tokens.usage.title": "Using tokens in other projects",
"docs.tokens.usage.body": "You can import",
"docs.tokens.usage.bodyTail":
  "into other tools (e.g. Figma plugins, design token pipelines, or other frontends) to keep Nexkor's visual identity consistent across all platforms.",
// DOCS – LAYOUT
"docs.layout.sidebar.title": "Documentation",
"docs.layout.mobile.title": "Docs",
"docs.layout.mobile.menu": "Menu",
"docs.layout.main.title": "Nexkor Design System",
"docs.layout.main.subtitle":
  "Select a page from the left to begin exploring the design system.",

"docs.nav.gettingStarted": "Getting Started",
"docs.nav.foundations": "Foundations",
"docs.nav.components": "Components",
"docs.nav.tokens": "Tokens",
// DESIGN SYSTEM – COLORS
"colors.page.title": "Colors",
"colors.page.subtitle":
  "Nexkor brand palette with live WCAG contrast badges. Click a hex to copy.",
"colors.page.tip":
  "Tip: semantic tokens keep usage consistent across apps (primary, surface, text, success, warning).",

"colors.brand.nexkorGreen": "Nexkor Green",
"colors.brand.deepCharcoal": "Deep Charcoal",
"colors.brand.accentGreen": "Accent Green",
"colors.brand.accentYellow": "Accent Yellow",
"colors.brand.neutralGray": "Neutral Gray",
"colors.brand.bgLight": "BG Light",
"colors.brand.bgDark": "BG Dark",

"colors.semantic.title": "Semantic roles",
"colors.semantic.table.token": "Token",
"colors.semantic.table.class": "Tailwind class",
"colors.semantic.table.hex": "Hex",
"colors.semantic.table.usage": "Usage",

"colors.semantic.usage.bg": "Page backgrounds (light)",
"colors.semantic.usage.bgDark": "Page backgrounds (dark)",
"colors.semantic.usage.blue": "Primary actions/links",
"colors.semantic.usage.charcoal": "Body text on light surfaces",
"colors.semantic.usage.green": "Success states",
"colors.semantic.usage.yellow": "Warnings/attention",
"colors.semantic.usage.gray": "Borders, subtle fills",
  // COMPONENTS GALLERY
  "components.gallery.title": "Components",

  // Buttons
  "components.gallery.buttons.title": "Buttons",
  "components.gallery.buttons.primary": "Primary",
  "components.gallery.buttons.secondary": "Secondary",
  "components.gallery.buttons.ghost": "Ghost",
  "components.gallery.buttons.destructive": "Destructive",
  "components.gallery.buttons.loading": "Loading...",

  // Badges
  "components.gallery.badges.title": "Badges",
  "components.gallery.badges.gray": "Gray",
  "components.gallery.badges.blue": "Blue",
  "components.gallery.badges.green": "Green",
  "components.gallery.badges.yellow": "Yellow",
  "components.gallery.badges.outline": "Outline",

  // Cards
  "components.gallery.cards.title": "Cards",
  "components.gallery.cards.card1.header": "Card Header",
  "components.gallery.cards.card1.body": "Cards are composable containers used for display and structure.",
  "components.gallery.cards.card1.action": "Action",
  "components.gallery.cards.card2.body": "Minimal card — content only.",

  // Layout Helpers
  "components.gallery.layout.title": "Layout Helpers",
  "components.gallery.layout.container.label": "Container:",
  "components.gallery.layout.container.body": "Centers content with consistent max width and padding.",
  "components.gallery.layout.grid.label": "Grid:",
  "components.gallery.layout.grid.body": "Responsive grid helper (2–3–4 columns).",

  // Overlays & Feedback
  "components.gallery.overlays.title": "Overlays & Feedback",

  // Modal
  "components.gallery.overlays.modal.open": "Open Modal",
  "components.gallery.overlays.modal.title": "Nexkor Modal",
  "components.gallery.overlays.modal.body": "A fully accessible modal with focus trap and ESC close.",
  "components.gallery.overlays.modal.cancel": "Cancel",
  "components.gallery.overlays.modal.confirm": "Confirm",

  // Drawer
  "components.gallery.overlays.drawer.open": "Open Drawer",
  "components.gallery.overlays.drawer.title": "Drawer Panel",
  "components.gallery.overlays.drawer.body": "Use drawers for settings, filters or secondary navigation.",
  "components.gallery.overlays.drawer.close": "Close Drawer",

  // Tooltip
  "components.gallery.overlays.tooltip.label": "This is a tooltip",
  "components.gallery.overlays.tooltip.button": "Hover Me",

  // Toast
  "components.gallery.overlays.toast.message": "This is a Nexkor toast!",
  "components.gallery.overlays.toast.button": "Show Toast",

  // Motion
  "components.gallery.motion.title": "Motion",
  "components.gallery.motion.intro": "These are the reusable animation presets available in the Nexkor Motion System.",

  "components.gallery.motion.fade.title": "Fade",
  "components.gallery.motion.fade.body": "Simple opacity transition.",

  "components.gallery.motion.fadeUp.title": "Fade Up",
  "components.gallery.motion.fadeUp.body": "Fade with upward motion.",

  "components.gallery.motion.slideLeft.title": "Slide Left",
  "components.gallery.motion.slideLeft.body": "Horizontal slide-in animation.",

  "components.gallery.motion.scaleIn.title": "Scale In",
  "components.gallery.motion.scaleIn.body": "Subtle zoom-in transition.",

  "components.gallery.motion.stagger.title": "Stagger",
  "components.gallery.motion.stagger.item1": "Item 1",
  "components.gallery.motion.stagger.item2": "Item 2",
  "components.gallery.motion.stagger.item3": "Item 3",
    // FORMS PAGE
  "forms.title": "Forms",
  "forms.subtitle": "Accessible form controls with labels, hints, and error messaging.",

  "forms.example.title": "Example form",

  "forms.example.name.label": "Full name",
  "forms.example.name.placeholder": "Nexkor User",
  "forms.example.name.hint": "Use your real name.",

  "forms.example.email.label": "Email",
  "forms.example.email.placeholder": "you@example.com",

  "forms.example.role.label": "Role",
  "forms.example.role.hint": "What best describes your role?",
  "forms.example.role.placeholder": "Select…",
  "forms.example.role.frontend": "Frontend Engineer",
  "forms.example.role.fullstack": "Fullstack Developer",
  "forms.example.role.designer": "Product Designer",

  "forms.example.message.label": "Message",
  "forms.example.message.placeholder": "Tell us a bit about your project…",

  "forms.example.submit": "Submit",
    // MOTION PAGE
  "motion.page.title": "Motion System",
  "motion.page.subtitle":
    "Reusable animation presets that ensure consistent micro-interactions across all Nexkor products. Motion respects user preferences like reduced motion.",

  "motion.fade.title": "Fade",
  "motion.fade.body": "Simple opacity transition used for subtle reveals.",

  "motion.fadeUp.title": "Fade Up",
  "motion.fadeUp.body": "Fade with upward motion, ideal for cards and list items.",

  "motion.slideLeft.title": "Slide Left",
  "motion.slideLeft.body":
    "Horizontal slide-in, useful for side panels and inline transitions.",

  "motion.slideRight.title": "Slide Right",
  "motion.slideRight.body":
    "Mirrored slide direction for layout symmetry.",

  "motion.scaleIn.title": "Scale In",
  "motion.scaleIn.body":
    "Subtle zoom-in, ideal for hero elements or emphasis.",

  "motion.stagger.title": "Stagger",
  "motion.stagger.item1": "One",
  "motion.stagger.item2": "Two",
  "motion.stagger.item3": "Three",
    // TYPOGRAPHY PAGE
  "typography.title": "Typography",

  "typography.subtitle.part1": "Nexkor uses",
  "typography.subtitle.headingFont": "Poppins",
  "typography.subtitle.part2": "for headings and",
  "typography.subtitle.bodyFont": "Inter",
  "typography.subtitle.part3": "for body text via",

  "typography.scale.title": "Type Scale",

  "typography.weights.title": "Weights & Styles",
  "typography.weights.headings": "Headings – Poppins",
  "typography.weights.h1": "Heading 1",
  "typography.weights.h2": "Heading 2",
  "typography.weights.h3": "Heading 3",

  "typography.weights.body": "Body – Inter",
  "typography.weights.bodyText":
    "Body text—16px base size with comfortable line-height for dashboards and docs.",
  "typography.weights.caption":
    "Caption text for subtle annotations and UI hints.",




};

const ar: Messages = {
  // Navbar
  "nav.docs": "التوثيق",
  "nav.colors": "الألوان",
  "nav.typography": "الخطوط",
  "nav.components": "المكوّنات",
  "nav.dashboard": "لوحة التحكم",
  "nav.theme.light": "وضع نهاري",
  "nav.theme.dark": "وضع ليلي",

  // HERO
  "landing.hero.title": "تصميم يعرّف نكسكور.",
  "landing.hero.subtitle":
    "نظام تصميم حديث، يركّز على الإنسان، يدعم جميع تجارب نكسكور - مصمم للوضوح وإمكانية الوصول والأداء.",
  "landing.hero.primaryCta": "استكشف المكوّنات",
  "landing.hero.secondaryCta": "عرض نظام الحركة",
  "landing.hero.dashboardCta": "معاينة لوحة التحكم",
  "landing.hero.authCta": "تجربة تدفّق الدخول",
  "landing.hero.meta.tech": "Next.js · TypeScript · TailwindCSS · Framer Motion",
  "landing.hero.meta.tagline": "واجهة أمامية بقيادة التصميم لعروض نكسكور",

  // FEATURE GRID
  "landing.features.title": "مصمّم لنظام عروض متكامل",
  "landing.features.subtitle":
    "استوديو تصميم نكسكور هو الأساس البصري لباب الموارد البشرية، ومراقب السحابة، والوصول الآمن، والمساعد الذكي، وغير ذلك.",

  "landing.features.tag1": "نظام التصميم",
  "landing.features.item1.title": "لغة بصرية موحّدة",
  "landing.features.item1.body":
    "ألوان وخطوط وتباعد ومكوّنات تبقى متسقة عبر جميع عروض نكسكور.",

  "landing.features.tag2": "الحركة",
  "landing.features.item2.title": "تفاعلات دقيقة ومدروسة",
  "landing.features.item2.body":
    "إعدادات جاهزة من Framer Motion للظهور التدريجي والحركة والانتحال — مع احترام تفضيل تقليل الحركة.",

  "landing.features.tag3": "الهندسة",
  "landing.features.item3.title": "واجهة أمامية بمستوى الإنتاج",
  "landing.features.item3.body":
    "Next.js و TypeScript و Tailwind مع خطوط CI/CD لضمان أن الكود قوي مثل المنتجات الحقيقية.",

  // PREVIEW SECTION
  "landing.preview.badge": "معاينة واجهة نكسكور",
  "landing.preview.title": "قالب لوحة تحكم",
  "landing.preview.live": "عرض حي",
  "landing.preview.footerLeft": "مدعوم من استوديو تصميم نكسكور",
  "landing.preview.footerRight": "متجاوب · قابل للوصول · سريع",
  "landing.preview.openDashboard": "فتح لوحة التحكم الكاملة",

  "landing.preview.sideTitle": "لغة بصرية واحدة لعدة تجارب نكسكور.",
  "landing.preview.sideBody":
    "نفس المكوّنات والرموز والحركة تدعم صفحات الهبوط ولوحات التحكم وتدفّقات الدخول والأدوات الداخلية عبر نظام نكسكور التجريبي.",
  "landing.preview.point1": "رموز ألوان وخطوط مشتركة",
  "landing.preview.point2": "مكوّنات تخطيط وطبقات متكرّرة الاستخدام",
  "landing.preview.point3": "حركة خفيفة ومتسقة",
  "landing.preview.formsCta": "عرض أنماط النماذج",

  // CTA SECTION
  "landing.cta.title": "جاهز لاستخدام استوديو تصميم نكسكور في كل عرض؟",
  "landing.cta.subtitle":
    "ابدأ من صفحات نظام التصميم، وانسخ الأنماط إلى المنتجات الجديدة، وحافظ على هوية نكسكور البصرية في كامل محفظتك.",
  "landing.cta.tokens": "عرض رموز التصميم",
  "landing.cta.docs": "فتح التوثيق",

  // DASHBOARD
  "dashboard.title": "لوحة تحكم نكسكور",
  "dashboard.subtitle": "مثال على لوحة تحكم مبنية باستخدام استوديو تصميم نكسكور.",
  "dashboard.secureAccessLabel": "عرض الوصول الآمن:",

  "dashboard.sidebar.navTitle": "التنقل في العرض التجريبي",
  "dashboard.sidebar.nav.overview": "نظرة عامة",
  "dashboard.sidebar.nav.systemsHealth": "حالة الأنظمة",
  "dashboard.sidebar.nav.usageMetrics": "مقاييس الاستخدام",
  "dashboard.sidebar.nav.securityAccess": "الأمان والوصول",

  "dashboard.filters.title": "عوامل التصفية",
  "dashboard.filters.searchLabel": "بحث عن الأنظمة",
  "dashboard.filters.searchPlaceholder": "مثال: مراقب السحابة",
  "dashboard.filters.statusLabel": "الحالة",
  "dashboard.filters.status.all": "الكل",
  "dashboard.filters.status.healthy": "سليم",
  "dashboard.filters.status.warning": "تحذير",
  "dashboard.filters.status.down": "متوقف",
  "dashboard.filters.refresh": "تحديث البيانات",

  "dashboard.tabs.overview": "نظرة عامة",
  "dashboard.tabs.systems": "الأنظمة",
  "dashboard.tabs.activity": "النشاط",

  "dashboard.notice.demoOnly":
    "بيانات تجريبية فقط، لا يوجد أي بنية تحتية حقيقية متصلة.",

  "dashboard.overview.activeSystems.title": "الأنظمة النشطة",
  "dashboard.overview.activeSystems.captionPrefix": "من أصل",
  "dashboard.overview.activeSystems.captionSuffix": "نظام إجمالي",

  "dashboard.overview.overallUptime.title": "الجاهزية الكلية",
  "dashboard.overview.overallUptime.caption":
    "آخر 30 يوماً (بيانات تجريبية)",

  "dashboard.overview.incidentsToday.title": "الحوادث اليوم",
  "dashboard.overview.incidentsToday.badge": "محاكاة",

  "dashboard.overview.requestVolume.title": "حجم الطلبات (تجريبي)",
  "dashboard.overview.requestVolume.subtitle":
    "حجم طلبات مُحاكى عبر جميع خدمات نكسكور.",
  "dashboard.overview.requestVolume.footer":
    "البيانات مُحاكاة لتوضيح تخطيط الرسوم البيانية والمسافات.",

  "dashboard.overview.statusSummary.title": "ملخص الحالة",
  "dashboard.overview.statusSummary.healthy":
    "أنظمة في حالة سليمة بالكامل.",
  "dashboard.overview.statusSummary.warning":
    "أنظمة تحتاج إلى انتباه.",
  "dashboard.overview.statusSummary.down":
    "أنظمة متوقفة حالياً (حادثة مُحاكاة).",
  "dashboard.overview.statusSummary.footer":
    "يوضح هذا القسم كيف يمكن للنصوص والرسوم البيانية أن تتعايش معاً في لوحات التحكم.",

  "dashboard.systems.title": "حالة الأنظمة",
  "dashboard.systems.showingPrefix": "عرض",
  "dashboard.systems.showingMiddle": "من",
  "dashboard.systems.showingSuffix": "نظام",
  "dashboard.systems.table.system": "النظام",
  "dashboard.systems.table.status": "الحالة",
  "dashboard.systems.table.latency": "الزمن الاستجابي",
  "dashboard.systems.table.uptime": "الجاهزية",
  "dashboard.systems.empty":
    "لا يوجد أي نظام يطابق عوامل التصفية الحالية.",

  "dashboard.activity.title": "النشاط الأخير",
  "dashboard.activity.items.incidentResolved":
    "تم حل الحادث في نكسكور تراك",
  "dashboard.activity.items.newDeployment":
    "نشر جديد: كلود مونيتور v1.3.2",
  "dashboard.activity.items.userAccessUpdated":
    "تم تحديث صلاحيات المستخدم في الوصول الآمن",
  "dashboard.activity.items.maintenanceCompleted":
    "اكتملت أعمال الصيانة المجدولة",

  "dashboard.activity.badge.incident": "حادث",
  "dashboard.activity.badge.deploy": "نشر",
  "dashboard.activity.badge.access": "وصول",
  "dashboard.activity.badge.maintenance": "صيانة",

  "dashboard.status.healthy": "سليم",
  "dashboard.status.warning": "تحذير",
  "dashboard.status.down": "متوقف",

  // AUTH
  "auth.badge": "عرض المصادقة",
  "auth.title": "وصول آمن مع نكسكور",
  "auth.subtitle":
    "تعرض هذه الصفحة نموذج دخول بالبريد الإلكتروني وكلمة المرور متبوعًا بخطوة مصادقة متعددة العوامل باستخدام مكوّنات استوديو تصميم نكسكور.",

  "auth.login.title": "سجّل الدخول إلى مساحة العمل الخاصة بك",
  "auth.login.subtitle":
    "استخدم أي بريد إلكتروني وكلمة مرور للمتابعة إلى خطوة المصادقة متعددة العوامل.",
  "auth.login.emailLabel": "البريد الإلكتروني",
  "auth.login.emailPlaceholder": "you@nexkor.org",
  "auth.login.passwordLabel": "كلمة المرور",
  "auth.login.passwordPlaceholder": "••••••••",
  "auth.login.rememberDevice": "تذكّر هذا الجهاز",
  "auth.login.forgotPassword": "هل نسيت كلمة المرور؟",
  "auth.login.button": "متابعة",
  "auth.login.demoNotice": "عرض تجريبي فقط — لا توجد مصادقة حقيقية.",
  "auth.login.viewDashboard": "عرض لوحة التحكم",

  "auth.mfa.title": "المصادقة متعددة العوامل",
  "auth.mfa.subtitle":
    "أرسلنا رمزاً مكوّناً من 6 أرقام إلى بريدك الإلكتروني. في العرض التجريبي، استخدم 123456.",
  "auth.mfa.codeLabel": "رمز التحقق",
  "auth.mfa.codePlaceholder": "أدخل الرمز المؤلف من 6 أرقام",
  "auth.mfa.button": "تحقق واستمر",
  "auth.mfa.resend": "إعادة إرسال الرمز",
  "auth.mfa.error.invalidCode": "رمز غير صالح. جرّب 123456 في العرض التجريبي.",
  "auth.mfa.error.resendMessage":
    "تم طلب رمز تجريبي جديد. استخدم 123456 مرة أخرى.",
  "auth.mfa.backToLogin": "العودة إلى تسجيل الدخول",
  "auth.mfa.footer": "الوصول الآمن · تدفّق تجريبي",

  "auth.success.title": "تم تسجيل الدخول.",
  "auth.success.body1":
    "اكتملت عملية المصادقة. في منتج نكسكور حقيقي، سيتم توجيهك الآن إلى لوحة تحكم أو بوابة أو تجربة إدارية.",
  "auth.success.body2":
    "في هذا العرض التجريبي يمكنك المتابعة إلى لوحة التحكم أو استكشاف المزيد من صفحات نظام التصميم.",
  "auth.success.openDashboard": "فتح عرض لوحة التحكم",
  "auth.success.exploreComponents": "استكشاف المكوّنات",

  // DOCS – COMPONENTS
  "docs.components.title": "المكوّنات",
  "docs.components.intro":
    "يوفّر استوديو تصميم نكسكور مكوّنات قابلة لإعادة الاستخدام وقابلة للوصول يمكن استخدامها عبر جميع العروض التجريبية: الأزرار، الشارات، النماذج، مكوّنات التخطيط الأساسية، الطبقات (Overlays)، عناصر التغذية الراجعة، وغيرها. تشرح هذه الصفحة كيفية استخدامها بشكل مفاهيمي. اطّلع على /design-system/components لمعاينة حيّة.",

  "docs.components.buttons.title": "الأزرار",
  "docs.components.buttons.body":
    "يدعم مكوّن Button عدة أنماط (Variants) وأحجام، بالإضافة إلى حالة التحميل:",
  "docs.components.buttons.primary":
    "primary — للدعوات الأساسية لاتخاذ إجراء",
  "docs.components.buttons.secondary":
    "secondary — للإجراءات الثانوية أو الدعوات الأقل بروزاً",
  "docs.components.buttons.ghost":
    "ghost — أزرار بسيطة في أشرطة الأدوات أو للإجراءات الدقيقة",
  "docs.components.buttons.destructive":
    "destructive — للإجراءات التدميرية مثل الحذف أو الإزالة",
  "docs.components.buttons.loading":
    "استخدم خاصية loading عند تنفيذ إجراء ما لإظهار مؤشّر تحميل وتعطيل الزر.",

  "docs.components.badges.title": "الشارات",
  "docs.components.badges.body":
    "يُستخدم مكوّن Badge لعرض تسميات حالة صغيرة أو بيانات وصفية. الأنماط تعبّر عن معانٍ دلالية:",
  "docs.components.badges.blue": "Nexkor Green — للمعلومات",
  "docs.components.badges.green": "green — للنجاح",
  "docs.components.badges.yellow": "yellow — للتنبيهات أو التحذيرات",
  "docs.components.badges.outline": "outline — حالة حيادية",

  "docs.components.forms.title": "النماذج",
  "docs.components.forms.body":
    "تُبنى النماذج باستخدام مكوّنات Input و Textarea و Select، وكل منها يدعم:",
  "docs.components.forms.label":
    "خاصية label لوضع تسمية قابلة للوصول",
  "docs.components.forms.hint":
    "خاصية hint لنص المساعدة",
  "docs.components.forms.error":
    "خاصية error لرسائل التحقق من الصحة",
  "docs.components.forms.aria":
    "تهيئة صحيحة لخصائص aria-invalid و aria-describedby",
  "docs.components.forms.link":
    "اطّلع على /design-system/forms لأمثلة كاملة على النماذج.",

  "docs.components.layout.title": "مكوّنات التخطيط الأساسية",
  "docs.components.layout.body":
    "توفّر مكوّنات التخطيط البنية العامة للصفحة:",
  "docs.components.layout.card":
    "Card مع أماكن مخصّصة للرأس والمحتوى والتذييل",
  "docs.components.layout.container":
    "Container لضبط العرض الأقصى وهوامش الصفحة",
  "docs.components.layout.grid":
    "مساعد Grid لشبكات متجاوبة",
  "docs.components.layout.shell":
    "مكوّنا شريط التنقل والتذييل (Navbar & Footer) لقالب واجهة متّسق",

  "docs.components.overlays.title": "الطبقات والتغذية الراجعة",
  "docs.components.overlays.body":
    "يتضمّن نكسكور مجموعة صغيرة ولكن قويّة من المكوّنات التفاعلية:",
  "docs.components.overlays.modal":
    "Modal — حوار قابل للوصول مع حجز تركيز (focus trap) وإغلاق بزر ESC والنقر خارج النافذة",
  "docs.components.overlays.drawer":
    "Drawer — لوحة جانبية للإعدادات أو عوامل التصفية أو التنقل",
  "docs.components.overlays.tooltip":
    "Tooltip — تلميح يظهر عند المرور على الأيقونات أو للعناصر التي تحتاج شرحاً بسيطاً",
  "docs.components.overlays.toast":
    "Toast — نظام إشعارات عام عبر ToastProvider",
  "docs.components.overlays.footer":
    "تم بناء كل طبقة مع مراعاة متطلبات الوصول، وتستخدم نظام الحركة المشترك لانتقالات متّسقة.",

  "docs.components.showcase.title": "صفحات العرض",
  "docs.components.showcase.body":
    "لمشاهدة المكوّنات في سياقات حقيقية، استكشف:",
  "docs.components.showcase.landing":
    "/showcase/landing — صفحة هبوط تسويقية",
  "docs.components.showcase.dashboard":
    "/showcase/dashboard — لوحة تحكم للعمليات",
  "docs.components.showcase.auth":
    "/showcase/auth — تدفّق تسجيل دخول مع مصادقة متعددة العوامل",

  // DOCS – FOUNDATIONS
  "docs.foundations.title": "الأساسيات",
  "docs.foundations.intro":
    "تحدّد الأساسيات اللغة البصرية الجوهرية لنكسكور — الألوان، والخطوط، والتباعد، والانحناءات، والحركة. تُبنى جميع المكوّنات والتخطيطات فوق هذه اللبنات الأساسية لضمان الاتساق عبر جميع عروض نكسكور.",

  "docs.foundations.color.title": "نظام الألوان",
  "docs.foundations.color.body":
    "يستخدم نكسكور لوحة ألوان تركّز على الهوية البصرية مع تسمية دلالية داخل Tailwind:",
  "docs.foundations.color.footer":
    "عند بناء المكوّنات، يُفضَّل استخدام الأسماء الدلالية بدلاً من القيم السداسية الثابتة. على سبيل المثال: تستخدم الأزرار الأساسية nk.blue، وتستخدم الخلفيات nk.bg / nk.bgDark، وتستخدم حالات النجاح/التحذير الأخضر والأصفر.",

  "docs.foundations.typography.title": "الخطوط",
  "docs.foundations.typography.body":
    "يستخدم نظام التصميم خط Poppins للعناوين وخط Inter للنصوص. يتم تحميلهما عبر next/font وتوفيرهـما كمتغيرات CSS:",
  "docs.foundations.typography.footer":
    "تستخدم المكوّنات font-heading للعناوين و font-body لنصوص المحتوى، مما يضمن اتساق الطباعة عبر الصفحات.",

  "docs.foundations.spacing.title": "التباعد والزوايا",
  "docs.foundations.spacing.body":
    "يتبع التباعد مقياس Tailwind الافتراضي. وتُستخدم زوايا مستديرة أكبر قليلاً لمنح إحساس عصري ناعم:",
  "docs.foundations.spacing.footer":
    "تستخدم البطاقات والنوافذ المنبثقة والعناصر التفاعلية rounded-xl أو rounded-2xl بما يتوافق مع طابع \"الحد الأدنى المستقبلي\" للهوية البصرية.",

  "docs.foundations.motion.title": "الحركة",
  "docs.foundations.motion.body":
    "تُوفَّر الحركة عبر إعدادات جاهزة مشتركة من Framer Motion داخل الملف src/lib/motion.ts. على سبيل المثال:",
  "docs.foundations.motion.footer":
    "تُغلَّف الحركة ضمن MotionProvider عام يحترم تفضيل المستخدم prefers-reduced-motion، لضمان أن تكون الحركات قابلة للوصول افتراضيًا.",

  "docs.foundations.theming.title": "نظام السِمات",
  "docs.foundations.theming.body":
    "يتم التعامل مع الوضعين الفاتح والداكن عبر موفّر سِمة (theme provider) يغيّر className على عنصر <html> ويحتفظ بتفضيل المستخدم. تستخدم المكوّنات معامل Tailwind المسمّى dark: لضبط الألوان والأسطح.",
    // DOCS – GETTING STARTED
"docs.gettingStarted.title": "البدء",
"docs.gettingStarted.intro":
  "يشرح هذا الدليل كيفية تنظيم مشروع استوديو تصميم نكسكور وكيفية العمل عليه محليًا. تم بناء نظام التصميم باستخدام Next.js و TypeScript و TailwindCSS و Framer Motion، ويهدف ليكون الأساس البصري لجميع عروض نكسكور التجريبية.",

"docs.gettingStarted.techStack.title": "حزمة التقنيات",
"docs.gettingStarted.techStack.item1": "Next.js App Router (TypeScript)",
"docs.gettingStarted.techStack.item2": "TailwindCSS للتنسيق ورموز التصميم (design tokens)",
"docs.gettingStarted.techStack.item3": "Framer Motion للحركة والانتقالات",
"docs.gettingStarted.techStack.item4": "Storybook لتطوير المكوّنات بشكل معزول",
"docs.gettingStarted.techStack.item5":
  "ESLint و Prettier و Husky و lint-staged و GitHub Actions لضمان الجودة والتكامل المستمر (CI)",

"docs.gettingStarted.structure.title": "بنية المشروع (نظرة عامة)",

"docs.gettingStarted.running.title": "تشغيل المشروع",
"docs.gettingStarted.running.body":
  "قم بتثبيت الحزم ثم شغّل خادم التطوير:",
"docs.gettingStarted.running.afterCommand":
  "ثم افتح الرابط",

"docs.gettingStarted.storybook.title": "ستوريبوك (Storybook)",
"docs.gettingStarted.storybook.body":
  "يُستخدم Storybook لمعاينة وتطوير المكوّنات بشكل معزول عن التطبيق الرئيسي:",
"docs.gettingStarted.storybook.afterCommand":
  "سيفتح هذا واجهة مخصّصة يمكنك من خلالها تصفح رموز التصميم، والأزرار، والنماذج، والطبقات، وصفحات العرض بدون الحاجة للتنقل داخل التطبيق الرئيسي.",

"docs.gettingStarted.nextSteps.title": "الخطوات التالية",
"docs.gettingStarted.nextSteps.body":
  "بعد تشغيل المشروع، استكشف الصفحات التالية:",
"docs.gettingStarted.nextSteps.item1":
  "/design-system/colors — لرموز الألوان",
"docs.gettingStarted.nextSteps.item2":
  "/design-system/typography — لسُلَّم الخطوط",
"docs.gettingStarted.nextSteps.item3":
  "/design-system/components — للمكوّنات الأساسية لواجهة المستخدم",
"docs.gettingStarted.nextSteps.item4":
  "/showcase/landing — لعرض صفحة الهبوط",
"docs.gettingStarted.nextSteps.item5":
  "/showcase/dashboard — لعرض لوحة التحكم",
"docs.gettingStarted.nextSteps.item6":
  "/showcase/auth — لعرض تدفّق تسجيل الدخول والمصادقة متعددة العوامل",
  // DOCS – TOKENS
"docs.tokens.title": "رموز التصميم (Design Tokens)",
"docs.tokens.intro":
  "تمثّل رموز التصميم مصدر الحقيقة الواحد للغة نكسكور البصرية — الألوان، والخطوط، وانحناءات الزوايا، وتوقيتات الحركة. يتم تعريفها داخل ملف tailwind.config.js ويمكن تصديرها كملف JSON لمشاركتها مع منصات أو أدوات أخرى.",

"docs.tokens.export.title": "تصدير الرموز",
"docs.tokens.export.body":
  "يتم توفير تمثيل بسيط على شكل JSON لأهم الرموز على المسار",
"docs.tokens.export.button": "تحميل tokens.json",

"docs.tokens.colors.title": "رموز الألوان",
"docs.tokens.colors.body":
  "تُعرَّف الألوان مع بادئة خاصة بنكسكور داخل Tailwind ويتم عكسها (mirrored) داخل",

"docs.tokens.typography.title": "رموز الطباعة",
"docs.tokens.typography.body":
  "تصف رموز الطباعة العلاقة بين الأدوار الدلالية (مثل العناوين والنصوص) وخطوط الكتابة الفعلية:",
"docs.tokens.typography.footer":
  "لا تقوم المكوّنات بكتابة أسماء الخطوط مباشرة، بل تشير إلى",
"docs.tokens.typography.and": "و",

"docs.tokens.usage.title": "استخدام الرموز في مشاريع أخرى",
"docs.tokens.usage.body": "يمكنك استيراد",
"docs.tokens.usage.bodyTail":
  "في أدوات أخرى (مثل إضافات Figma أو خطوط تدفّق رموز التصميم أو واجهات أمامية أخرى) للحفاظ على اتساق الهوية البصرية لنكسكور عبر جميع المنصات.",
// DOCS – LAYOUT
"docs.layout.sidebar.title": "التوثيق",
"docs.layout.mobile.title": "التوثيق",
"docs.layout.mobile.menu": "القائمة",
"docs.layout.main.title": "نظام تصميم نكسكور",
"docs.layout.main.subtitle":
  "اختر صفحة من القائمة على اليسار لبدء استكشاف نظام التصميم.",

"docs.nav.gettingStarted": "البدء",
"docs.nav.foundations": "الأساسيات",
"docs.nav.components": "المكوّنات",
"docs.nav.tokens": "رموز التصميم",
// DESIGN SYSTEM – COLORS
"colors.page.title": "الألوان",
"colors.page.subtitle":
  "لوحة ألوان نكسكور مع شارات تباين WCAG مباشرة. انقر على الكود السداسي (hex) لنسخه.",
"colors.page.tip":
  "معلومة: استخدام رموز دلالية للألوان يحافظ على اتساق الاستخدام عبر التطبيقات (الإجراء الأساسي، الخلفيات، النصوص، النجاح، التحذير).",

"colors.brand.nexkorGreen": "أخضر نكسكور",
"colors.brand.deepCharcoal": "فحم داكن",
"colors.brand.accentGreen": "أخضر ثانوي",
"colors.brand.accentYellow": "أصفر ثانوي",
"colors.brand.neutralGray": "رمادي حيادي",
"colors.brand.bgLight": "خلفية فاتحة",
"colors.brand.bgDark": "خلفية داكنة",

"colors.semantic.title": "الأدوار الدلالية",
"colors.semantic.table.token": "الرمز",
"colors.semantic.table.class": "كلاس Tailwind",
"colors.semantic.table.hex": "Hex",
"colors.semantic.table.usage": "الاستخدام",

"colors.semantic.usage.bg": "خلفيات الصفحات (وضع فاتح)",
"colors.semantic.usage.bgDark": "خلفيات الصفحات (وضع داكن)",
"colors.semantic.usage.blue": "الإجراءات/الروابط الأساسية",
"colors.semantic.usage.charcoal": "نصوص على الأسطح الفاتحة",
"colors.semantic.usage.green": "حالات النجاح",
"colors.semantic.usage.yellow": "التحذيرات / لفت الانتباه",
"colors.semantic.usage.gray": "الحدود والتعبئات الخفيفة",
  // COMPONENTS GALLERY
  "components.gallery.title": "المكوّنات",

  // Buttons
  "components.gallery.buttons.title": "الأزرار",
  "components.gallery.buttons.primary": "أساسي",
  "components.gallery.buttons.secondary": "ثانوي",
  "components.gallery.buttons.ghost": "شبح",
  "components.gallery.buttons.destructive": "هدّام",
  "components.gallery.buttons.loading": "جارٍ التحميل...",

  // Badges
  "components.gallery.badges.title": "الشارات",
  "components.gallery.badges.gray": "رمادي",
  "components.gallery.badges.blue": "أزرق",
  "components.gallery.badges.green": "أخضر",
  "components.gallery.badges.yellow": "أصفر",
  "components.gallery.badges.outline": "محدد",

  // Cards
  "components.gallery.cards.title": "البطاقات",
  "components.gallery.cards.card1.header": "عنوان البطاقة",
  "components.gallery.cards.card1.body": "البطاقات حاويات مرنة تُستخدم للعرض والبناء.",
  "components.gallery.cards.card1.action": "إجراء",
  "components.gallery.cards.card2.body": "بطاقة بسيطة — محتوى فقط.",

  // Layout Helpers
  "components.gallery.layout.title": "مساعدات التخطيط",
  "components.gallery.layout.container.label": "Container:",
  "components.gallery.layout.container.body": "مركز المحتوى مع عرض أقصى ومسافات ثابتة.",
  "components.gallery.layout.grid.label": "Grid:",
  "components.gallery.layout.grid.body": "شبكة متجاوبة (عمودان–ثلاثة–أربعة).",

  // Overlays & Feedback
  "components.gallery.overlays.title": "الطبقات والتغذية الراجعة",

  // Modal
  "components.gallery.overlays.modal.open": "فتح النافذة",
  "components.gallery.overlays.modal.title": "نافذة نكسكور",
  "components.gallery.overlays.modal.body": "نافذة منبثقة قابلة للوصول مع تركيز محجوز وإغلاق عبر ESC.",
  "components.gallery.overlays.modal.cancel": "إلغاء",
  "components.gallery.overlays.modal.confirm": "تأكيد",

  // Drawer
  "components.gallery.overlays.drawer.open": "فتح اللوحة الجانبية",
  "components.gallery.overlays.drawer.title": "لوحة جانبية",
  "components.gallery.overlays.drawer.body": "تُستخدم اللوحات الجانبية للإعدادات أو عوامل التصفية أو التنقل الثانوي.",
  "components.gallery.overlays.drawer.close": "إغلاق اللوحة",

  // Tooltip
  "components.gallery.overlays.tooltip.label": "هذه تلميحة",
  "components.gallery.overlays.tooltip.button": "مرّر فوقي",

  // Toast
  "components.gallery.overlays.toast.message": "هذا إشعار من نكسكور!",
  "components.gallery.overlays.toast.button": "إظهار الإشعار",

  // Motion
  "components.gallery.motion.title": "الحركة",
  "components.gallery.motion.intro": "هذه إعدادات الحركة الجاهزة المتوفرة في نظام الحركة الخاص بنكسكور.",

  "components.gallery.motion.fade.title": "Fade",
  "components.gallery.motion.fade.body": "انتقال يعتمد على الشفافية.",

  "components.gallery.motion.fadeUp.title": "Fade Up",
  "components.gallery.motion.fadeUp.body": "اختفاء تدريجي مع حركة للأعلى.",

  "components.gallery.motion.slideLeft.title": "Slide Left",
  "components.gallery.motion.slideLeft.body": "حركة انزلاقية أفقية من اليسار.",

  "components.gallery.motion.scaleIn.title": "Scale In",
  "components.gallery.motion.scaleIn.body": "تكبير طفيف للداخل.",

  "components.gallery.motion.stagger.title": "Stagger",
  "components.gallery.motion.stagger.item1": "عنصر 1",
  "components.gallery.motion.stagger.item2": "عنصر 2",
  "components.gallery.motion.stagger.item3": "عنصر 3",
    // FORMS PAGE
  "forms.title": "النماذج",
  "forms.subtitle": "عناصر نموذج قابلة للوصول مع تسميات ونصوص مساعدة ورسائل خطأ.",

  "forms.example.title": "نموذج مثال",

  "forms.example.name.label": "الاسم الكامل",
  "forms.example.name.placeholder": "مستخدم نكسكور",
  "forms.example.name.hint": "استخدم اسمك الحقيقي.",

  "forms.example.email.label": "البريد الإلكتروني",
  "forms.example.email.placeholder": "you@example.com",

  "forms.example.role.label": "الدور",
  "forms.example.role.hint": "ما الوصف الأفضل لدورك؟",
  "forms.example.role.placeholder": "اختر…",
  "forms.example.role.frontend": "مهندس واجهات أمامية",
  "forms.example.role.fullstack": "مطور فل ستاك",
  "forms.example.role.designer": "مصمم منتجات",

  "forms.example.message.label": "الرسالة",
  "forms.example.message.placeholder": "اخبرنا قليلاً عن مشروعك…",

  "forms.example.submit": "إرسال",
    // MOTION PAGE
  "motion.page.title": "نظام الحركة",
  "motion.page.subtitle":
    "إعدادات حركة جاهزة قابلة لإعادة الاستخدام تضمن تفاعلات دقيقة ومتسقة عبر جميع منتجات نكسكور، مع احترام تفضيل المستخدم لتقليل الحركة.",

  "motion.fade.title": "تلاشي",
  "motion.fade.body": "انتقال يعتمد على الشفافية فقط لعمليات ظهور هادئة.",

  "motion.fadeUp.title": "تلاشي للأعلى",
  "motion.fadeUp.body":
    "تلاشي مع حركة للأعلى، مثالي للبطاقات وعناصر القوائم.",

  "motion.slideLeft.title": "انزلاق لليسار",
  "motion.slideLeft.body":
    "حركة دخول أفقية، مفيدة للوحة الجانبية أو الانتقالات الداخلية.",

  "motion.slideRight.title": "انزلاق لليمين",
  "motion.slideRight.body":
    "اتجاه انزلاق معكوس للحفاظ على توازن التخطيط.",

  "motion.scaleIn.title": "تكبير للداخل",
  "motion.scaleIn.body":
    "تكبير بسيط، مناسب لعناصر البطل (Hero) أو العناصر البارزة.",

  "motion.stagger.title": "حركة متتالية",
  "motion.stagger.item1": "واحد",
  "motion.stagger.item2": "اثنان",
  "motion.stagger.item3": "ثلاثة",
    // TYPOGRAPHY PAGE
  "typography.title": "الطباعة",

  "typography.subtitle.part1": "يستخدم نكسكور خط",
  "typography.subtitle.headingFont": "Poppins",
  "typography.subtitle.part2": "للعناوين وخط",
  "typography.subtitle.bodyFont": "Inter",
  "typography.subtitle.part3": "لنصوص المحتوى عبر",

  "typography.scale.title": "مقياس الخط",

  "typography.weights.title": "الأوزان والأنماط",
  "typography.weights.headings": "العناوين – Poppins",
  "typography.weights.h1": "عنوان 1",
  "typography.weights.h2": "عنوان 2",
  "typography.weights.h3": "عنوان 3",

  "typography.weights.body": "النص – Inter",
  "typography.weights.bodyText":
    "نص المحتوى — حجم أساسي 16px مع ارتفاع أسطر مريح للوحة التحكم والوثائق.",
  "typography.weights.caption":
    "نص التعليقات الصغيرة والملاحظات داخل الواجهة.",




};

export const messages: Record<Language, Messages> = { en, ar };
