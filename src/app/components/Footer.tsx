
import Image from "next/image";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbLocationPin } from "react-icons/tb";


export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <section id="footer">
        <div className="flex flex-col mt-20 bg-kite-dark-2 border-t border-neutral-800 bg-opacity-60 px-4 sm:px-6 md:px-48 2xl:px-72 py-6 sm:py-8 md:py-14">
          <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
            <div className="flex flex-col gap-4 items-center md:items-start">
              <div>
                <Image
                  src="/images/hexafort-white-cropped.png"
                  alt="Hexafort Logo Full"
                  // className="h-6 sm:h-8 md:h-6"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-xs sm:text-sm text-center md:text-left max-w-md">
                Hexafort is a global leader in enterprise security management,
                with strong presence in the US, UK, and India.
              </p>
            </div>

            <div className="flex flex-col gap-4 items-center md:items-start">
              <p className="text-xs sm:text-sm">Follow us on</p>
              <div className="flex justify-center md:justify-start text-xl sm:text-2xl space-x-4">
                <a
                  href="https://www.linkedin.com/company/hexafort"
                  aria-label="LinkedIn"
                  className="hover:text-teal-500 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/hexafort.io/"
                  aria-label="Instagram"
                  className="hover:text-teal-500 transition-colors"
                >
                  <FaInstagramSquare />
                </a>
                <a
                  href="https://x.com/hexafortsecure"
                  aria-label="Twitter"
                  className="hover:text-teal-500 transition-colors"
                >
                  <FaSquareXTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4 mt-10 text-sm">
            <div className="flex gap-2 items-center">
              <div>
                <TbLocationPin />
              </div>
              <div>
                <p>Hexafort, Inc.</p>
                <p className="text-xs">Newark, Delaware, US, 19713</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <TbLocationPin />
              </div>
              <div>
                <p>Hexafort Secure UK Ltd</p>
                <p className="text-xs">
                  Old Gloucester Street, London, UK, WC1N 3AX
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <TbLocationPin />
              </div>
              <div>
                <p>Hexafort Secure Private Limited</p>
                <p className="text-xs">Idukki, Kerala, IN, 685505</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:justify-between mt-14 space-y-4 md:space-y-0">
            <span className="text-xs">
              © {new Date().getFullYear()} Hexafort, Inc. All rights reserved.
            </span>
            <div className="flex items-center gap-1 text-xs">
              <MdEmail />
              <span>hello@hexafort.io</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
