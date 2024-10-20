import "./globals.css";
import Navbar from "@/Components/Navbar";
import Provider from "./Providers";

export const metadata = {
  title: "Next App Tutorial",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
    <body className="text-foreground bg-background">
      <Provider>
        <Navbar />
        {children}
      </Provider>
    </body>
  </html>
  );
}
