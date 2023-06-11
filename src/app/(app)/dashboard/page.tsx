import Link from "next/link";
export const metadata = {
  title: "Dashboard | Next 13",
};
export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl">Dashboard</h1>
      <Link
        className="text-white font-bold hover:bg-green-500 rounded-lg p-4 bg-green-600"
        href={"/profile"}
      >
        Profile
      </Link>
      <Link
        className="text-white mt-4 font-bold hover:bg-green-500 rounded-lg p-4 bg-green-600"
        href={"/"}
      >
        Sair
      </Link>
    </main>
  );
}
