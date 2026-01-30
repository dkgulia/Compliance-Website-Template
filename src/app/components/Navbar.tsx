"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full top-0 shadow-md z-[100] border-b-1 border-neutral-800 flex justify-center bg-kite-dark">
        <div className="container px-4 sm:px-6 md:px-0">
          <div className="flex items-center justify-between py-2 sm:py-3 md:py-4 md:px-12 md:mx-10">
            <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-8">
              <Image
                src="/images/dual-hex-white.png"
                alt="ComplianceHub Logo"
                width={32}
                height={0}
                onClick={() => router.push("/")}
                className="cursor-pointer"
              />
              <p
                className="text-xs font-medium sm:text-sm cursor-pointer hover:text-teal-600"
                onClick={() => router.push("/product")}
              >
                Product
              </p>
              <p className="text-xs font-medium sm:text-sm cursor-pointer hover:text-teal-600">Resources</p>
            </div>
            <div className="flex space-x-1 sm:space-x-2 md:space-x-4">
              <a
                href="https://cal.com/compliancehub/demo"
                target="_blank"
                className="py-1 px-2 sm:px-3 sm:py-1.5 md:px-2 md:py-1 text-xs rounded-lg bg-gray-800 hover:bg-gray-700 transition border border-gray-600"
              >
                Book a Demo
              </a>
              <a
                href="https://secure.compliancehub.io"
                className="py-1 px-2 sm:px-3 sm:py-1.5 md:px-2 md:py-1 text-xs rounded-lg bg-teal-800 hover:bg-teal-700 transition-all border border-teal-600"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
