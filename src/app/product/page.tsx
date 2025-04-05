import type { Metadata } from "next";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
    title: 'Product - Hexafort Secure',
    description: '...',
  }

export default function Product() {
    return (
        <>
        <Navbar />
        <p className="mt-16">Product</p>
        <Footer />
        </>
    )
}