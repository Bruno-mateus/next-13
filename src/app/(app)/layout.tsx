export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="absolute top-0 w-full p-4 bg-gray-900 text-gray-100 flex justify-center">
        <h1 className="text-xl">logged at user-010010</h1>
      </header>
      {children}
    </>
  );
}
