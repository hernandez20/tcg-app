import Header from "./Header";
import Footer from "./Footer";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <div className="h-screen bg-gray-100 flex align-middle justify-center mt-10">

        <main>{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}