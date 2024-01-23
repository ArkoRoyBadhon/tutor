import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden mx-auto">
      {/* <div> */}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
