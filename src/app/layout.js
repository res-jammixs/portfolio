import "./globals.css";

export const metadata = {
  title: "James Michael Siton | Portfolio",
  description:
    "Professional portfolio of James Michael Restauro Siton, an Information Technology student focused on frontend, full-stack, UI/UX, SQAE, and game development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
