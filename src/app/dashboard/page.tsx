import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl">Dashboard</h1>
      <Link
        className="text-white font-bold hover:bg-green-500 rounded-lg p-4 bg-green-600"
        href={"/"}
      >
        Home
      </Link>
    </main>
  );
}
