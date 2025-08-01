"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPinHouse, PhoneCall } from "lucide-react";
import gsap from "gsap";

interface FooterProps {
  [key: string]: unknown;
}

const Footer: React.FC<FooterProps> = () => {
  // Refs for the four main sections
  const sectionRefs = useRef([
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
  ]);
  // Refs for animated elements
  const logoRef = useRef<HTMLImageElement>(null);
  const socialRefs = [
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
  ];
  const contactRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  // Refs for quick links
  const quickLinkRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (sectionRefs.current.every((ref) => ref.current)) {
      gsap.from(
        sectionRefs.current.map((ref) => ref.current),
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  // Animation handlers
  const handleLogoEnter = () => {
    gsap.to(logoRef.current, {
      scale: 1.08,
      rotate: 8,
      duration: 0.5,
      ease: "power2.out",
    });
  };
  const handleLogoLeave = () => {
    gsap.to(logoRef.current, {
      scale: 1,
      rotate: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  const handleSocialEnter = (idx: number) => {
    gsap.to(socialRefs[idx].current, {
      scale: 1.2,
      rotate: -10 + idx * 10,
      duration: 0.4,
      ease: "back.out(2)",
    });
  };
  const handleSocialLeave = (idx: number) => {
    gsap.to(socialRefs[idx].current, {
      scale: 1,
      rotate: 0,
      duration: 0.4,
      ease: "back.inOut(2)",
    });
  };

  // Update handleContactEnter and handleContactLeave to support both contactRefs and quickLinkRefs
  const handleContactEnter = (idx: number, isQuickLink = false) => {
    const ref = isQuickLink
      ? { current: quickLinkRefs.current[idx] }
      : contactRefs[idx];
    gsap.to(ref.current, {
      x: 8,
      color: "#991b1b", // Use Tailwind's red-800
      duration: 0.4,
    });
  };
  const handleContactLeave = (idx: number, isQuickLink = false) => {
    const ref = isQuickLink
      ? { current: quickLinkRefs.current[idx] }
      : contactRefs[idx];
    gsap.to(ref.current, { x: 0, color: "#000", duration: 0.4 });
  };

  return (
    <footer className="bg-white mt-9 md:my-20">
      <hr className="border-t border-gray-300 my-4 w-[90%] mx-auto" />
      <div className="max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout with responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
          {/* Section 1: Company Info & Social */}
          <div className="space-y-4" ref={sectionRefs.current[0]}>
            <Image
              src="/assets/logo.png"
              width={150}
              height={150}
              alt="logo"
              loading="lazy"
              className="w-40 h-auto cursor-pointer"
              ref={logoRef}
              onMouseEnter={handleLogoEnter}
              onMouseLeave={handleLogoLeave}
            />
            <p className="text-sm text-black/80 leading-relaxed">
              <span className="text-bold">
                Cyborg Robotics Academy Private Limited
              </span>{" "}
              is one of the leading Robotics Academy in Pune offering various
              technical courses all under one roof.
            </p>
            <div className="flex gap-3 items-center">
              {[
                {
                  href: "https://www.instagram.com/cyborgroboticsacademy?igsh=dmppcHR2NWh1MDJ5",
                  src: "/assets/social-icons/instagram.webp",
                  alt: "Instagram",
                },
                {
                  href: "https://www.facebook.com/cyborgrobotics/",
                  src: "/assets/social-icons/Facebook.webp",
                  alt: "Facebook",
                },
                {
                  href: "https://youtube.com/@cyborgroboticsacademy2270?si=aQjTThVhESGN_bQ9",
                  src: "/assets/social-icons/youtube.png",
                  alt: "YouTube",
                },
              ].map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={socialRefs[idx]}
                  onMouseEnter={() => handleSocialEnter(idx)}
                  onMouseLeave={() => handleSocialLeave(idx)}
                >
                  <Image
                    src={item.src}
                    width={35 + (item.alt === "YouTube" ? 10 : 0)}
                    height={35 + (item.alt === "YouTube" ? 5 : 0)}
                    alt={item.alt}
                    className="rounded-xl transition-opacity cursor-pointer"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Section 2: Contact Information */}
          <div className="space-y-4" ref={sectionRefs.current[1]}>
            <h3 className="text-lg font-medium text-black">Contact Us</h3>
            <div
              className="flex  gap-3 items-center "
              ref={contactRefs[0]}
              onMouseEnter={() => handleContactEnter(0)}
              onMouseLeave={() => handleContactLeave(0)}
            >
              <Mail className=" mt-1 flex-shrink-0 " size={22} />
              <Link
                href="mailto:info@cyborgrobotics.in"
                className="text-base font-medium text-black hover:text-red-800 text-center"
              >
                info@cyborgrobotics.in
              </Link>
            </div>
            <div
              className="flex items-start  gap-3"
              ref={contactRefs[1]}
              onMouseEnter={() => handleContactEnter(1)}
              onMouseLeave={() => handleContactLeave(1)}
            >
              <MapPinHouse className=" mt-1 flex-shrink-0 " size={22} />
              <Link
                href="https://www.google.com/maps/place/North+Court,+Rd+Number+12,+Jogger's+Park,+Nilanjali+Society,+Kalyani+Nagar,+Pune,+Maharashtra+411006/@18.5492198,73.8982955,786m/data=!3m2!1e3!4b1!4m10!1m2!2m1!1sNorth+court,office+No:2A,+1st+floor,opposite+joggers+park,above+punjab+national+bank,kalyani+nagar,Pune+411+006!3m6!1s0x3bc2c110e47e39a3:0x1790569bae5ab0f4!8m2!3d18.5492148!4d73.9031664!15sCm9Ob3J0aCBjb3VydCxvZmZpY2UgTm86MkEsIDFzdCBmbG9vcixvcHBvc2l0ZSBqb2dnZXJzIHBhcmssYWJvdmUgcHVuamFiIG5hdGlvbmFsIGJhbmssa2FseWFuaSBuYWdhcixQdW5lIDQxMSAwMDYiA4gBAZIBEWNvbXBvdW5kX2J1aWxkaW5n4AEA!16s%2Fg%2F1hjggd2b0?authuser=0&entry=ttu&g_ep=EgoyMDI1MDMxNy4wIKXMDSoASAFQAw%3D%3D"
                className="text-base font-medium text-black hover:text-red-800 "
              >
                North Court, Office No: 2A, 1st Floor, Opposite Joggers Park,
                Above Punjab National Bank, Kalyani Nagar, Pune 411 006
              </Link>
            </div>
            <div
              className="flex items-center gap-3"
              ref={contactRefs[2]}
              onMouseEnter={() => handleContactEnter(2)}
              onMouseLeave={() => handleContactLeave(2)}
            >
              <PhoneCall className=" mt-1 flex-shrink-0" size={22} />
              <Link
                href="tel:+919175159292"
                className="text-base font-medium hover:text-red-800 text-black "
              >
                Phone: +91 91751 59292
              </Link>
            </div>
          </div>
          {/* Section 3: Quick Links */}
          <div className="space-y-4" ref={sectionRefs.current[2]}>
            <h3 className="text-lg font-medium text-black">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/gallery/photo", label: "Gallery" },
                { href: "/contact-us", label: "Contact" },
                {
                  href: "/terms-conditions",
                  label: "Terms and Conditions",
                },
                {
                  href: "/privacy-policy",
                  label: "Privacy Policy",
                },
              ].map((item, idx) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base font-medium text-black hover:text-red-800 transition-all "
                  >
                    <span
                      ref={(el) => {
                        quickLinkRefs.current[idx] = el;
                      }}
                      onMouseEnter={() => handleContactEnter(idx, true)}
                      onMouseLeave={() => handleContactLeave(idx, true)}
                      style={{ display: "inline-block" }}
                      className=""
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Download App Links */}
          <div className="space-y-4 animate-pulse" ref={sectionRefs.current[3]}>
            <h3 className="text-lg font-medium text-black text-shadow-md">
              Download the App
            </h3>
            <div className="flex gap-4 items-center cursor-pointer hover:scale-110 transition-transform duration-300">
              <Link target="_blank" href="#">
                <Image
                  alt="Google Play Store"
                  loading="lazy"
                  width={30}
                  height={30}
                  src="/assets/logo1.png"
                  className="w-16 h-auto hover:opacity-80 transition-opacity rotate-3d"
                />
              </Link>
              <h2 className="text-xl font-semibold text-red-500 gradient-text">
                Coming Soon
              </h2>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <hr className="border-t border-gray-300" />
        <div className="py-6 text-center">
          <p className="text-xs md:text-sm text-black">
            © Copyright All Rights Reserved by Cyborg Robotics Academy Private
            Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
