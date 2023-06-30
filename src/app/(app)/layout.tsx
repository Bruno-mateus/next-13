

export default async function AppLayout({ children }: { children: React.ReactNode }) {

  return (
    <html>
      <body>
        <header className="absolute top-0 w-full p-4 bg-gray-900 text-gray-100 flex justify-center">
          <h1 className="text-xl">Welcome</h1>
        </header>
          {children}
      </body>
    </html>
  );
}
