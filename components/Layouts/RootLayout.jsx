export default function RootLayout({ children }) {
  return (
    <main className="flex justify-center font-proxima-nova">
      <div className="w-full lg:max-w-[1440px]">{children}</div>
    </main>
  );
}
