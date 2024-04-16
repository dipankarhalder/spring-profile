import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center p-24">
      <Link
        href="/dashboard"
        className="px-5 py-2 bg-blue-600 text-white rounded text-sm"
      >
        Click me
      </Link>
    </main>
  );
}
