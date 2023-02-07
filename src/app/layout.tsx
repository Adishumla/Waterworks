import "../styles/globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/navigation/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-clear text-mediterranean">
				<Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
