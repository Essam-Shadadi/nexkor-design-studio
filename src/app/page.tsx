export default function Home() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-heading text-nk-blue">Nexkor Design Studio</h1>
      <p className="text-lg">
        Tailwind is{" "}
        <span className="px-2 py-0.5 rounded-xl bg-nk-green/10 text-nk-green">working</span>
      </p>
      <button className="px-4 py-2 rounded-xl bg-nk-blue text-white hover:opacity-90 transition">
        Primary Button
      </button>
    </main>
  );
}
