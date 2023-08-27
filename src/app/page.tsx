'use client'

import FirstService from "@/components/FirstService";
import Footer from "@/components/Footer";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import ScrollTop from "@/components/ScrollTop";
import SecondService from "@/components/SecondService";
import Testimonials from "@/components/Testimonials";
import ThirdService from "@/components/ThirdService";


export default function Home() {
  return (
    <main className="xl:max-w-[1280px] mx-auto w-full bg-white relative">
    <Navbar />
    <Hero />
    <FirstService />
    <SecondService />
    <Testimonials />
    <ThirdService />
    <Products />
    <Footer />
    <ScrollTop />
    <Help />
  </main>
  )
}
