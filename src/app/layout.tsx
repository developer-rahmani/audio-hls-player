import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">{children}</body>
    </html>
  );
}
