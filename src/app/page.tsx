import type { Metadata } from "next";
import Image from "next/image";

import FAQ from "@/app/components/FAQ";
import Marquee from "@/app/components/Marquee";
import { Hexagon, GlobalStyles } from "@/app/components/Hexagon";
import ProblemsList from "@/app/components/ProblemsList";

import { FiUnlock } from "react-icons/fi";
import { RiSlowDownFill } from "react-icons/ri";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { GrDocumentMissing } from "react-icons/gr";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { PiListStar } from "react-icons/pi";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineAutoGraph } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { TbCirclesRelation } from "react-icons/tb";
import { FaQuoteLeft } from "react-icons/fa6";
import { FiAlertTriangle } from "react-icons/fi";
import { RiErrorWarningLine } from "react-icons/ri";
import { HiOutlineSparkles } from "react-icons/hi2";
import {
  LuScanSearch,
  LuShieldCheck,
  LuCopyCheck,
  LuGavel,
  LuSquareArrowUpRight,
} from "react-icons/lu";
import { TbAutomation, TbChartInfographic } from "react-icons/tb";
import { FaBolt } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Hexafort Secure",
  description: "...",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="pt-32 px-4 sm:pt-32 sm:px-6 md:pt-32 md:px-6 lg:p-48 inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:36px_36px] md:bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_55%_55%_at_50%_50%,#000_80%,transparent_100%)]">
          <div className="flex flex-col md:flex-row md:space-x-2">
            <div className="flex-1 flex flex-col text-center items-center">
              <div className="md:space-y-4 space-y-1">
                <div className="inline-flex items-center font-mono text-xs sm:text-sm text-teal-600 tracking-wider uppercase rounded-lg px-2 gap-2">
                  <HiOutlineSparkles />
                  <p>Introducing Hexafort Secure</p>
                </div>
                <h1 className="text-base sm:text-xl md:text-2xl">
                  Enterprise-grade security management.
                </h1>
                <h1 className="text-xl sm:text-2xl md:text-4xl">
                  For every business.
                </h1>
                <h1 className="text-4xl sm:text-4xl md:text-6xl bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500 inline-block text-transparent bg-clip-text font-normal">
                  Automated. Fast.
                </h1>
              </div>
              <div className="mt-6 sm:mt-8 md:mt-10 w-fit justify-center space-y-2">
                <p className="text-gray-300 text-base sm:text-lg md:text-xl">
                  Hexafort Secure is more than just a security solution.
                </p>
                <p className="text-gray-300 text-xs sm:text-base md:text-lg">
                  It&apos;s a trusted partner that helps you navigate the
                  ever-evolving cybersecurity landscape.
                </p>
                <p className="text-gray-300 text-xs sm:text-base md:text-lg">
                  We&apos;ve got you covered. 24x7.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 md:mt-10 items-center">
                <a
                  href="https://cal.com/hexafort-security-advisory/30min"
                  target="_blank"
                  className="inline-flex px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 bg-teal-800 hover:bg-teal-700 text-white text-sm rounded-lg transition border border-teal-600"
                >
                  Talk to us now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted companies */}
      <section>
        <div className="flex justify-center mt-10 sm:-mt-6 md:-mt-8">
          <p className="text-xs sm:text-sm text-gray-400">
            Trusted by fast-growing companies worldwide
          </p>
        </div>
        <div className="mt-10 md:px-44 2xl:px-52">
          <Marquee />
        </div>
      </section>

      {/* Problem statement */}
      <section>
        <div className="flex flex-col px-6 md:px-48 md:mt-40 mt-14 2xl:px-72">
          <div className="flex md:justify-start justify-center">
            <p className="font-mono text-sm text-teal-600 tracking-wider">
              THE CHAOS OF COMPLEXITY
            </p>
          </div>
          <div className="md:text-3xl text-2xl mt-4 flex md:justify-between justify-center text-center md:text-left md:flex-row flex-col md:space-y-0 space-y-4">
            <div>
              <p>Cybersecurity isn’t just a checklist,</p>
              <p>It’s a race against time.</p>
            </div>
            <div className="flex items-end md:justify-start justify-end">
              <p className="text-gray-600 text-sm italic">- Ancient wisdom.</p>
            </div>
          </div>
          <p className="mt-4 text-gray-500 text-center md:text-left">
            The modern cybersecurity landscape is increasingly fragmented and
            complex.
          </p>
          <div className="grid md:grid-cols-2 mt-10">
            <div className="col-span-2">
              <p className="border md:inline-block px-2 py-1 rounded-lg bg-kite-dark-2 border-neutral-800 bg-opacity-60">
                One mistake leads to a chain of critical events
              </p>
            </div>
            <div className="flex flex-col col-span-2 space-y-4 justify-center mt-5">
              <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
                <div className="grid grid-cols-1 gap-2 col-span-2">
                  <ProblemsList />
                </div>
                <div className="flex flex-col gap-6 md:col-span-1 col-span-2">
                  <div className="flex justify-center">
                    <p className="text-center border px-2 py-1 rounded-lg bg-kite-dark-2 border-neutral-800 bg-opacity-60">
                      And events stack up before you know it
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="z-[60] flex gap-2 items-center rounded-lg p-2 bg-neutral-900 border border-neutral-800 shadow-lg justify-center md:justify-between md:hover:-translate-y-1 transition-all duration-300 ease-in-out">
                      <div className="flex items-center gap-1">
                        <span className="text-red-400 p-2">
                          <FiAlertTriangle />
                        </span>
                        <span className="text-sm text-gray-400">
                          Unauthorized access to customer PII
                        </span>
                      </div>
                      <span className="uppercase text-[8px] border rounded-xl px-1 text-red-400 border-red-400 font-mono">
                        critical
                      </span>
                    </div>
                    <div className="-mt-4 z-[50] -translate-x-4 flex gap-2 items-center rounded-lg p-2 bg-neutral-900 border border-neutral-800 shadow-lg justify-between md:hover:-translate-y-1 transition-all duration-300 ease-in-out">
                      <div className="flex items-center gap-1">
                        <span className="text-red-400 p-2">
                          <FiAlertTriangle />
                        </span>
                        <span className="text-sm text-gray-400">
                          Compliance score dropped by 40%
                        </span>
                      </div>
                      <span className="uppercase text-[8px] border rounded-xl px-1 border-red-400 text-red-400 font-mono">
                        critical
                      </span>
                    </div>
                    <div className="-mt-4 z-[40] flex gap-2 items-center rounded-lg p-2 bg-neutral-900 border border-neutral-800 shadow-lg justify-between md:hover:-translate-y-1 transition-all duration-300 ease-in-out">
                      <div className="flex items-center gap-1">
                        <span className="text-red-400 p-2">
                          <FiAlertTriangle />
                        </span>
                        <span className="text-sm text-gray-400">
                          Unpatched vulnerabilities exploited
                        </span>
                      </div>
                      <span className="uppercase text-[8px] border rounded-xl px-1 text-red-400 border-red-400 font-mono">
                        critical
                      </span>
                    </div>
                    <div className="-mt-4 z-[30] translate-x-4 flex gap-2 items-center rounded-lg p-2 bg-neutral-900 border border-neutral-800 shadow-lg justify-between md:hover:-translate-y-1 transition-all duration-300 ease-in-out">
                      <div className="flex items-center gap-1">
                        <span className="text-red-400 p-2">
                          <FiAlertTriangle />
                        </span>
                        <span className="text-sm text-gray-400">
                          17 Critical vulnerabilities discovered
                        </span>
                      </div>
                      <span className="uppercase text-[8px] border rounded-xl px-1 text-red-400 border-red-400 font-mono">
                        critical
                      </span>
                    </div>
                    <div className="-mt-4 z-[20] -translate-x-4 flex gap-2 items-center rounded-lg p-2 bg-neutral-900 border border-neutral-800 shadow-lg justify-between md:hover:-translate-y-1 transition-all duration-300 ease-in-out">
                      <div className="flex items-center gap-1">
                        <span className="text-amber-400 p-2">
                          <RiErrorWarningLine />
                        </span>
                        <span className="text-sm text-gray-400">
                          ZTNA not enforced
                        </span>
                      </div>
                      <span className="uppercase text-[8px] border rounded-xl px-1 border-amber-300 text-amber-300 font-mono">
                        warning
                      </span>
                    </div>
                    <div className="-mt-4 z-[10] flex gap-2 items-center rounded-lg p-2 bg-neutral-900 border border-neutral-800 shadow-lg justify-between md:hover:-translate-y-1 transition-all duration-300 ease-in-out">
                      <div className="flex items-center gap-1">
                        <span className="text-amber-400 p-2">
                          <RiErrorWarningLine />
                        </span>
                        <span className="text-sm text-gray-400">
                          Abnormal network traffic detected
                        </span>
                      </div>
                      <span className="uppercase text-[8px] border rounded-xl px-1 border-amber-300 text-amber-300 font-mono">
                        warning
                      </span>
                    </div>
                    <div className="-mt-4 z-[5] -translate-x-4 flex gap-2 items-center rounded-lg p-2 bg-neutral-900 border border-neutral-800 shadow-lg justify-between md:hover:-translate-y-1 transition-all duration-300 ease-in-out">
                      <div className="flex items-center gap-1">
                        <span className="text-amber-400 p-2">
                          <RiErrorWarningLine />
                        </span>
                        <span className="text-sm text-gray-400">
                          23 Policies need attention
                        </span>
                      </div>
                      <span className="uppercase text-[8px] border rounded-xl px-1 border-amber-300 text-amber-300 font-mono">
                        warning
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-10">
            <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
              <div className="flex flex-col justify-between space-y-4 border p-4 rounded-lg bg-kite-dark-2 border-neutral-800 bg-opacity-60">
                <div className="flex items-center justify-between">
                  <span>
                    <span className="text-2xl">53</span>%
                  </span>
                  <span className="text-xl opacity-10">
                    <FiUnlock />
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  of enterprises use 10+ security tools, yet breaches still rise
                </p>
              </div>
              <div className="flex flex-col justify-between space-y-4 border p-4 rounded-lg bg-kite-dark-2 border-neutral-800 bg-opacity-60">
                <div className="flex items-center justify-between">
                  <span>
                    <span className="text-2xl">40</span>%
                  </span>
                  <span className="text-xl opacity-10">
                    <RiSlowDownFill />
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  delay in incident response due to manual processes
                </p>
              </div>
              <div className="flex flex-col justify-between space-y-4 border p-4 rounded-lg bg-kite-dark-2 border-neutral-800 bg-opacity-60">
                <div className="flex items-center justify-between">
                  <span>
                    <span className="text-2xl">87</span>%
                  </span>
                  <span className="text-2xl opacity-10">
                    <MdOutlineVisibilityOff />
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  of CISOs say third-party risks are their #1 blind spot
                </p>
              </div>
              <div className="flex flex-col justify-between space-y-4 border p-4 rounded-lg bg-kite-dark-2 border-neutral-800 bg-opacity-60">
                <div className="flex items-center justify-between">
                  <span>
                    <span className="text-2xl">68</span>%
                  </span>
                  <span className="text-xl opacity-10">
                    <GrDocumentMissing />
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  of compliance violations stem from inconsistent policy
                  enforcement across hybrid environments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to get out */}
      <section>
        <div className="flex flex-col px-6 md:px-48 md:mt-40 space-y-8 mt-14 2xl:px-72">
          <div className="flex flex-col justify-center items-center space-y-2">
            <p className="font-mono text-sm text-teal-600 tracking-wider">
              CHAOS TO CONTROL
            </p>
            <p className="md:text-3xl text-2xl">Safeguard Your Organization</p>
            <p className="text-gray-500 text-center">
              Prevent breaches, ensure continuity, and secure trust
            </p>
          </div>
          <div className="grid md:grid-cols-3 md:gap-4 md:space-y-0 space-y-2">
            <div className="flex flex-col border bg-kite-dark-2 border-neutral-800 bg-opacity-60 rounded-lg p-4 space-y-4">
              <span className="text-5xl opacity-60 font-medium bg-gradient-to-b from-gray-400 to-transparent text-transparent bg-clip-text">
                1
              </span>
              <div className="flex flex-col space-y-1">
                <span className="text-lg">Identify</span>
                <span className="text-sm text-gray-500">
                  Proactively identifying cybersecurity risks is crucial to
                  safeguard sensitive data, ensure business continuity, prevent
                  costly breaches, and avoid regulatory fines or reputational
                  damage in today’s threat-driven digital ecosystem.
                </span>
              </div>
            </div>
            <div className="flex flex-col border rounded-lg bg-kite-dark-2 border-neutral-800 bg-opacity-60 p-4 space-y-4">
              <span className="text-5xl opacity-60 font-medium bg-gradient-to-b from-gray-400 to-transparent text-transparent bg-clip-text">
                2
              </span>
              <div className="flex flex-col space-y-1">
                <span className="text-lg">Prioritize</span>
                <span className="text-sm text-gray-500">
                  Prioritizing cybersecurity vulnerabilities enables
                  organizations to mitigate critical risks, allocate resources
                  efficiently, and minimize operational disruptions, building
                  resilience against evolving cyber threats.
                </span>
              </div>
            </div>
            <div className="flex flex-col border rounded-lg bg-kite-dark-2 border-neutral-800 bg-opacity-60 p-4 space-y-4">
              <span className="text-5xl opacity-60 font-medium bg-gradient-to-b from-gray-400 to-transparent text-transparent bg-clip-text">
                3
              </span>
              <div className="flex flex-col space-y-1">
                <span className="text-lg">Remediate</span>
                <span className="text-sm text-gray-500">
                  Timely remediation of cybersecurity threats eliminates
                  vulnerabilities, blocks potential breaches, and secures
                  business operations, ensuring long-term resilience and
                  stakeholder trust in a dynamic threat landscape.
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center md:space-x-4 justify-center flex-col md:flex-row md:space-y-0 space-y-4">
            <span className="text-sm rounded-lg px-4 py-1 border-neutral-700 text-gray-500 bg-neutral-800">
              Sounds hectic?
            </span>
            <div className="text-gray-500 border w-4 h-0.5 border-gray-200 dark:border-gray-700 dark:text-gray-400 rounded-lg"></div>
            <span className="text-sm rounded-lg px-4 py-1 border-neutral-700 text-gray-500 bg-neutral-800">
              Focus on growing your business instead?
            </span>
            <div className="text-gray-500 border w-4 h-0.5 border-gray-200 dark:border-gray-700 dark:text-gray-400 rounded-lg"></div>
            <span className="text-sm rounded-lg px-4 py-1 border-neutral-700 text-gray-500 bg-neutral-800">
              Let Hexafort handle this for you
            </span>
            <div className="text-gray-500 border w-4 h-0.5 border-gray-200 dark:border-gray-700 dark:text-gray-400 rounded-lg"></div>
            <span className="text-sm cursor-pointer rounded-lg px-4 py-1 bg-teal-800 hover:bg-teal-700 transition-all border border-teal-600">
              <a
                href="https://cal.com/hexafort-security-advisory/30min"
                target="_blank"
              >
                Talk to us now
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* Solution overview */}
      <section>
        <div className="flex flex-col px-6 md:px-48 md:mt-40 space-y-8 mt-14 2xl:px-72">
          <div className="flex flex-col justify-center items-center space-y-2">
            <p className="font-mono text-sm text-teal-600 tracking-wider">
              TOWARDS CYBER RESILIENCE
            </p>
            <p className="md:text-3xl text-2xl text-center">
              One platform. Enterprise-grade. Hexafort Secure.
            </p>
            <p className="text-gray-500 text-center">
              Manage your end-to-end security posture from a single platform,
              Hexafort Secure
            </p>
          </div>
          <div className="grid md:grid-cols-2 md:gap-10">
            <div className="flex flex-col gap-6 justify-center">
              <div className="flex items-center gap-4">
                <span className="rounded-lg border p-2 bg-kite-dark-2 border-neutral-700  hover:text-teal-500 transition-all ease-in-out duration-300 hover:scale-110">
                  <LuScanSearch />
                </span>
                <div className="flex flex-col gap-1">
                  <span>Detection</span>
                  <span className="text-sm text-gray-500">
                    Spot threats instantly with real-time monitoring and
                    advanced analytics.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="rounded-lg border p-2 bg-kite-dark-2 border-neutral-700 hover:text-teal-500 transition-all ease-in-out duration-300 hover:scale-110">
                  <LuShieldCheck />
                </span>
                <div className="flex flex-col gap-1">
                  <span>Prevention</span>
                  <span className="text-sm text-gray-500">
                    Block attacks before they strike with proactive defenses and
                    risk mitigation.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="rounded-lg border p-2 bg-kite-dark-2 border-neutral-700 hover:text-teal-500 transition-all ease-in-out duration-300 hover:scale-110">
                  <LuCopyCheck />
                </span>
                <div className="flex flex-col gap-1">
                  <span>Response</span>
                  <span className="text-sm text-gray-500">
                    Act fast and minimize damage with automated, expert-guided
                    incident response.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="rounded-lg border p-2 bg-kite-dark-2 border-neutral-700 hover:text-teal-500 transition-all ease-in-out duration-300 hover:scale-110">
                  <LuGavel />
                </span>
                <div className="flex flex-col gap-1">
                  <span>Governance</span>
                  <span className="text-sm text-gray-500">
                    Stay compliant and in control with scalable policy and risk
                    management.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="rounded-lg border p-2 bg-kite-dark-2 border-neutral-700 hover:text-teal-500 transition-all ease-in-out duration-300 hover:scale-110">
                  <TbAutomation />
                </span>
                <div className="flex flex-col gap-1">
                  <span>Automation</span>
                  <span className="text-sm text-gray-500">
                    Streamline security tasks and boost efficiency with
                    intelligent automation.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="rounded-lg border p-2 bg-kite-dark-2 border-neutral-700 hover:text-teal-500 transition-all ease-in-out duration-300 hover:scale-110">
                  <TbChartInfographic />
                </span>
                <div className="flex flex-col gap-1">
                  <span>Visibility</span>
                  <span className="text-sm text-gray-500">
                    Gain full insight into your security posture with
                    comprehensive visibility.
                  </span>
                </div>
              </div>
            </div>
            <div className="md:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] md:bg-[size:36px_36px] md:[mask-image:radial-gradient(ellipse_55%_55%_at_50%_50%,#000_80%,transparent_100%)]">
              <GlobalStyles />
              <Hexagon />
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-2">
            <div className="flex flex-col rounded-lg bg-kite-dark-2 border border-neutral-800 bg-opacity-60 p-4 space-y-4 justify-between">
              <p>Risk and Compliance</p>
              <div className="flex gap-1 items-baseline">
                <span className="text-xs text-gray-500">
                  <LuSquareArrowUpRight />
                </span>
                <span className="text-sm text-gray-400">
                  Compliance and risk management, simplified.
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex gap-1 items-center rounded-lg px-2 py-1 border-neutral-700 text-gray-500 bg-neutral-800">
                  <span className="text-xs text-teal-600">
                    <FaBolt />
                  </span>
                  <span className="text-sm text-gray-400">Risk Assessment</span>
                </div>
                <div className="flex gap-1 items-center rounded-lg px-2 py-1 border-neutral-700 text-gray-500 bg-neutral-800">
                  <span className="text-xs text-teal-600">
                    <FaBolt />
                  </span>
                  <span className="text-sm text-gray-400">
                    Real-time Compliance Posture
                  </span>
                </div>
                <div className="flex gap-1 items-center rounded-lg px-2 py-1 border-neutral-700 text-gray-500 bg-neutral-800">
                  <span className="text-xs text-teal-600">
                    <FaBolt />
                  </span>
                  <span className="text-sm text-gray-400">
                    Third-Party Risk Assessment
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg bg-kite-dark-2 border border-neutral-800 bg-opacity-60 p-4 space-y-4 justify-between">
              <p>Proactive Threat Defense</p>
              <div className="flex gap-1 items-baseline">
                <span className="text-xs text-gray-500">
                  <LuSquareArrowUpRight />
                </span>
                <span className="text-sm text-gray-400">
                  Stay ahead of threats with proactive defense.
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex gap-1 items-center rounded-lg px-2 py-1 border-neutral-700 text-gray-500 bg-neutral-800">
                  <span className="text-xs text-teal-600">
                    <FaBolt />
                  </span>
                  <span className="text-sm text-gray-400">
                    Threat Management
                  </span>
                </div>
                <div className="flex gap-1 items-center rounded-lg px-2 py-1 border-neutral-700 text-gray-500 bg-neutral-800">
                  <span className="text-xs text-teal-600">
                    <FaBolt />
                  </span>
                  <span className="text-sm text-gray-400">
                    Intrusion Detection
                  </span>
                </div>
                <div className="flex gap-1 items-center rounded-lg px-2 py-1 border-neutral-700 text-gray-500 bg-neutral-800">
                  <span className="text-xs text-teal-600">
                    <FaBolt />
                  </span>
                  <span className="text-sm text-gray-400">
                    Vulnerability Management
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg bg-kite-dark-2 border border-neutral-800 bg-opacity-60 p-4 space-y-4 justify-between">
              <p>Data and Access Governance</p>
              <div className="flex gap-1 items-baseline">
                <span className="text-xs text-gray-500">
                  <LuSquareArrowUpRight />
                </span>
                <span className="text-sm text-gray-400">
                  Protect your data with precision and control.
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex gap-1 items-center rounded-lg px-2 py-1 border-neutral-700 text-gray-500 bg-neutral-800">
                  <span className="text-xs text-teal-600">
                    <FaBolt />
                  </span>
                  <span className="text-sm text-gray-400">
                    Data Privacy Management
                  </span>
                </div>
                <div className="flex gap-1 items-center rounded-lg px-2 py-1 border-neutral-700 text-gray-500 bg-neutral-800">
                  <span className="text-xs text-teal-600">
                    <FaBolt />
                  </span>
                  <span className="text-sm text-gray-400">
                    Access Management
                  </span>
                </div>
                <div className="flex gap-1 items-center rounded-lg px-2 py-1 border-neutral-700 text-gray-500 bg-neutral-800">
                  <span className="text-xs text-teal-600">
                    <FaBolt />
                  </span>
                  <span className="text-sm text-gray-400">
                    Data Flow Monitoring System
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg bg-kite-dark-2 border border-neutral-800 bg-opacity-60 p-4 space-y-4 justify-between">
              <p>Cloud and Asset Security</p>
              <div className="flex gap-1 items-baseline">
                <span className="text-xs text-gray-500">
                  <LuSquareArrowUpRight />
                </span>
                <span className="text-sm text-gray-400">
                  Secure your cloud and endpoint assets with ease.
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex gap-1 items-center rounded-lg px-2 py-1 border-neutral-700 text-gray-500 bg-neutral-800">
                  <span className="text-xs text-teal-600">
                    <FaBolt />
                  </span>
                  <span className="text-sm text-gray-400">CSPM</span>
                </div>
                <div className="flex gap-1 items-center rounded-lg px-2 py-1 border-neutral-700 text-gray-500 bg-neutral-800">
                  <span className="text-xs text-teal-600">
                    <FaBolt />
                  </span>
                  <span className="text-sm text-gray-400">
                    Cloud Asset Inventory
                  </span>
                </div>
                <div className="flex gap-1 items-center rounded-lg px-2 py-1 border-neutral-700 text-gray-500 bg-neutral-800">
                  <span className="text-xs text-teal-600">
                    <FaBolt />
                  </span>
                  <span className="text-sm text-gray-400">
                    Endpoint Asset Monitoring
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we operate */}
      <section>
        <div className="flex flex-col md:flex-row px-6 md:px-48 md:mt-40 space-x-8 items-center mt-14 2xl:px-72">
          <div className="flex flex-col md:flex-1 justify-center space-y-2">
            <p className="font-mono text-sm text-teal-600 tracking-wider text-center md:text-left">
              HOW HEXAFORT OPERATES
            </p>
            <p className="md:text-3xl text-2xl text-center md:text-left">
              Clear Steps, No Surprises
            </p>
            <p className="text-gray-500 text-center md:text-left">
              From Assessment to Evolution: A Dynamic Cybersecurity Framework to
              Defend, Comply, and Thrive
            </p>
          </div>
          <div className="md:flex-1">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="border inline-block px-2 py-1 rounded-lg bg-kite-dark-2 border-neutral-800 bg-opacity-60 font-mono">
                  01
                </p>
                <div>
                  <p>Assessment</p>
                  <p className="text-sm text-gray-500">
                    We start with a comprehensive security assessment to
                    identify your unique risks and vulnerabilities.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="border inline-block px-2 py-1 rounded-lg bg-kite-dark-2 border-neutral-800 bg-opacity-60 font-mono">
                  02
                </p>
                <div>
                  <p>Implementation</p>
                  <p className="text-sm text-gray-500">
                    We implement Hexafort Secure, tailoring the solution to meet
                    your specific security needs and compliance requirements.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="border inline-block px-2 py-1 rounded-lg bg-kite-dark-2 border-neutral-800 bg-opacity-60 font-mono">
                  03
                </p>
                <div>
                  <p>Monitoring & Management</p>
                  <p className="text-sm text-gray-500">
                    Our team provides ongoing monitoring and management,
                    ensuring your systems are protected and compliant.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="border inline-block px-2 py-1 rounded-lg bg-kite-dark-2 border-neutral-800 bg-opacity-60 font-mono">
                  04
                </p>
                <div>
                  <p>Continuous Improvement</p>
                  <p className="text-sm text-gray-500">
                    We constantly evolve and innovate, providing you with the
                    latest security technologies and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership promise */}
      <section>
        <div className="flex flex-col px-6 md:px-48 md:mt-40 space-y-8 items-center mt-14 2xl:px-72">
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="font-mono text-sm text-teal-600 tracking-wider text-center">
              BUILD WITH HEXAFORT
            </p>
            <p className="md:text-3xl text-2xl text-center">
              We are your Cyber Security Ally
            </p>
            <p className="text-gray-500 text-center">
              We will take care of your cyber security burden while you build
              your business
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-4 p-4 rounded-lg bg-kite-dark-2 border border-neutral-800 bg-opacity-60">
              <div className="inline-block text-xl p-2 border rounded-lg border-teal-400  bg-teal-600">
                <IoShieldCheckmarkOutline />
              </div>
              <div className="space-y-1">
                <p className="text-lg">Security First Culture</p>
                <p className="text-sm text-gray-500">
                  Build organizational resilience with employee training,
                  phishing simulations, and zero-trust policies.
                </p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-kite-dark-2 border border-neutral-800 bg-opacity-60">
              <div className="inline-block text-xl p-2 border rounded-lg border-teal-400  bg-teal-600">
                <PiListStar />
              </div>
              <div className="space-y-1">
                <p className="text-lg">Confident Compliance</p>
                <p className="text-sm text-gray-500">
                  Simplify audits with real-time compliance dashboards and
                  automated evidence collection.
                </p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-kite-dark-2 border border-neutral-800 bg-opacity-60">
              <div className="inline-block text-xl p-2 border rounded-lg border-teal-400  bg-teal-600">
                <MdOutlineTipsAndUpdates />
              </div>
              <div className="space-y-1">
                <p className="text-lg">Innovation at Core</p>
                <p className="text-sm text-gray-500">
                  Access continuous product updates informed by our global
                  threat research team and MITRE ATT&CK insights.
                </p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-kite-dark-2 border border-neutral-800 bg-opacity-60">
              <div className="inline-block text-xl p-2 border rounded-lg border-teal-400  bg-teal-600">
                <FaRegHandshake />
              </div>
              <div className="space-y-1">
                <p className="text-lg">Transparent Collaboration</p>
                <p className="text-sm text-gray-500">
                  Monthly executive briefings, threat landscape reports, and
                  ROI-driven metrics keep you informed and empowered.
                </p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-kite-dark-2 border border-neutral-800 bg-opacity-60">
              <div className="inline-block text-xl p-2 border rounded-lg border-teal-400  bg-teal-600">
                <GrTechnology />
              </div>
              <div className="space-y-1">
                <p className="text-lg">Future-Ready Technology</p>
                <p className="text-sm text-gray-500">
                  Stay ahead with AI/ML-driven security and threat-informed
                  defense strategies.
                </p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-kite-dark-2 border border-neutral-800 bg-opacity-60">
              <div className="inline-block text-xl p-2 border rounded-lg border-teal-400  bg-teal-600">
                <MdOutlineAutoGraph />
              </div>
              <div className="space-y-1">
                <p className="text-lg">Client-Centric ROI</p>
                <p className="text-sm text-gray-500">
                  Achieve measurable cost savings, compliance confidence, and
                  breach prevention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section>
        <div className="flex flex-col px-6 md:px-48 md:mt-40 space-y-8 items-center mt-14 2xl:px-72">
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="font-mono text-sm text-teal-600 tracking-wider text-center">
              OUR PRESENCE
            </p>
            <p className="md:text-3xl text-2xl text-center">
              Driven by Expertise, Serving Clients Worldwide
            </p>
            <p className="text-gray-500 text-center">
              Global Reach, Unmatched Expertise, Tailored Solutions for Every
              Client
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="">
              <Image
                src="/images/world-map-hexagon.svg"
                height={100}
                width={1000}
                alt="world-map"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-2">
            <div className="flex flex-col border rounded-lg p-4 bg-kite-dark-2 border-neutral-800 bg-opacity-60 space-y-4">
              <div className="flex gap-2 text-lg items-center">
                <span className="border p-2 rounded-lg bg-kite-dark-2 border-neutral-700">
                  <FaGlobeAmericas />
                </span>
                <span>Footprint</span>
              </div>
              <p className="text-sm text-gray-400">
                Hexafort is an emerging global leader in enterprise security,
                with a strong presence in the North American region , Europe ,
                UK , Middle East , India , Singapore , Vietnam and Malaysia.
              </p>
            </div>
            <div className="flex flex-col border rounded-lg p-4 bg-kite-dark-2 border-neutral-800 bg-opacity-60 space-y-4">
              <div className="flex gap-2 text-lg items-center">
                <span className="border p-2 rounded-lg bg-kite-dark-2 border-neutral-700">
                  <FaFireAlt />
                </span>
                <span>Expertise</span>
              </div>
              <p className="text-sm text-gray-400">
                Our team of security professionals offers deep expertise and
                vast experience in protecting organizations of all scales.
              </p>
            </div>
            <div className="flex flex-col border rounded-lg p-4 bg-kite-dark-2 border-neutral-800 bg-opacity-60 space-y-4">
              <div className="flex gap-2 text-lg items-center">
                <span className="border p-2 rounded-lg bg-kite-dark-2 border-neutral-700">
                  <TbCirclesRelation />
                </span>
                <span>Clientele</span>
              </div>
              <p className="text-sm text-gray-400">
                We deliver customized solutions designed to address the specific
                security requirements of our varied clientele.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="flex flex-col px-6 md:px-48 md:mt-40 space-y-8 items-center mt-14 2xl:px-72">
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="font-mono text-sm text-teal-600 tracking-wider text-center">
              PARTNER STORIES
            </p>
            <p className="md:text-3xl text-2xl text-center">
              We Thrive on Our Relationships
            </p>
            <p className="text-gray-500 text-center">
              Building Strong Partnerships Through Trust, Excellence, and
              Collaboration
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div
              className="px-4 py-2 space-y-4 rounded-lg border border-neutral-800 bg-opacity-60"
              style={{ backgroundColor: "#171717" }}
            >
              <p className="text-3xl opacity-15">
                <FaQuoteLeft />
              </p>
              <p className="text-sm italic text-gray-300">
                &quot;They are experts at understanding the nuances of different
                data security and compliance requirements. As a result, they
                were extremely helpful in identifying areas for us to address in
                a timely manner. They are pleasant to work with and capable of
                meeting our company&apos;s data protection and certification
                requirements.&quot;
              </p>
              <p className="text-sm text-gray-500 text-right">
                - CEO, Whizphys.ai
              </p>
            </div>
            <div
              className="px-4 py-2 space-y-4 rounded-lg border border-neutral-800 bg-opacity-60"
              style={{ backgroundColor: "#171717" }}
            >
              <p className="text-3xl opacity-15">
                <FaQuoteLeft />
              </p>
              <p className="text-sm italic text-gray-300">
                &quot;As the CFO of Dartle, a SaaS analytics platform
                revolutionizing sports academies, data security and compliance
                are critical to our operations. Hexafort has been a game-changer
                in ensuring our financial and athlete performance data remain
                secure and compliant with industry standards. Their robust
                security infrastructure and proactive threat management have
                given us the confidence to scale without compromising sensitive
                information.&quot;
              </p>
              <p className="text-sm text-gray-500 text-right">- CFO, Dartle</p>
            </div>
            <div
              className="px-4 py-2 space-y-4 rounded-lg border border-neutral-800 bg-opacity-60"
              style={{ backgroundColor: "#171717" }}
            >
              <p className="text-3xl opacity-15">
                <FaQuoteLeft />
              </p>
              <p className="text-sm italic text-gray-300">
                &quot;Team was swift and helpful with the communication. Got the
                certifications done, and appreciate the effort Hexafort team has
                put. User friendly pricing and I recommend it.&quot;
              </p>
              <p className="text-sm text-gray-500 text-right">
                - CTO, Economize.cloud
              </p>
            </div>
            <div
              className="px-4 py-2 space-y-4 rounded-lg border border-neutral-800 bg-opacity-60"
              style={{ backgroundColor: "#171717" }}
            >
              <p className="text-3xl opacity-15">
                <FaQuoteLeft />
              </p>
              <p className="text-sm italic text-gray-300">
                &quot;As a virtual CISO and DPO I have relied on Hexafort to
                deliver support with ISO 27001 compliance. They completed a very
                detailed and useful internal audit prior to the external
                certification audit which ensured we had zero findings on the
                external certification audit report. The Hexafort team have a
                number of SMEs and nothing is too much trouble. I find Hexafort
                a pleasure to work with and am looking forward to working with
                them further on other projects.&quot;
              </p>
              <p className="text-sm text-gray-500 text-right">
                - Clair Phelps, CISO
              </p>
            </div>
            <div
              className="px-4 py-2 space-y-4 rounded-lg border border-neutral-800 bg-opacity-60"
              style={{ backgroundColor: "#171717" }}
            >
              <p className="text-3xl opacity-15">
                <FaQuoteLeft />
              </p>
              <p className="text-sm italic text-gray-300">
                &quot;In a short span of time, the Hexafort team really
                understood the requirements of our organization and provided
                excellent support and assistance. The team&apos;s proactive
                approach, responsiveness, and dedication to customer
                satisfaction make them a reliable partner. We truly appreciate
                their efforts and look forward to continuing our
                collaboration.&quot;
              </p>
              <p className="text-sm text-gray-500 text-right">
                - Team Lead, Intain
              </p>
            </div>
            <div
              className="px-4 py-2 space-y-4 rounded-lg border border-neutral-800 bg-opacity-60"
              style={{ backgroundColor: "#171717" }}
            >
              <p className="text-3xl opacity-15">
                <FaQuoteLeft />
              </p>
              <p className="text-sm italic text-gray-300">
                &quot;Hexafort&apos;s expertise in cloud security and risk
                management has not only streamlined our compliance processes but
                also safeguarded our platform against potential cyber threats.
                Their team is responsive, knowledgeable, and committed to
                providing top-tier security solutions.&quot;
              </p>
              <p className="text-sm text-gray-500 text-right">
                - Security Team, Dartle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="flex flex-col px-6 md:px-48 md:mt-40 space-y-8 items-center mt-14 2xl:px-72">
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="font-mono text-sm text-teal-600 tracking-wider text-center">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <p className="md:text-3xl text-2xl text-center">
              Your Questions, Our Commitment
            </p>
            <p className="text-gray-500 text-center">
              Trusted insights to simplify decisions and strengthen partnerships
            </p>
          </div>
          <FAQ />

          <div className="w-full pb-16 md:pb-24"></div>
        </div>
      </section>
    </>
  );
}
