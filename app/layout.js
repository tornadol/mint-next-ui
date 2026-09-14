export const metadata = {
  title: "The Singapore Mint",
  description: "The Singapore Mint storefront — Next.js handoff scaffold.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
