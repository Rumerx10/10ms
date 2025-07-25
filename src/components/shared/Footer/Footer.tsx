"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerLinks = {
  company: [
    { label: "Career / Recruitment", href: "https://app.10minuteschool.com/careers" },
    { label: "Join as a Teacher", href: "https://docs.google.com/forms/d/e/1FAIpQLScWh9jjyWnUKdDKET1-LHvdTxuU6-ssd0GLTI-0JlQ2MH6RzA/viewform" },
    { label: "Join as an Affiliate", href: "https://affiliation.10minuteschool.com/" },
    { label: "Privacy policy", href: "https://app.10minuteschool.com/privacy-policy" },
    { label: "Refund policy", href: "https://app.10minuteschool.com/refund-policy" },
    { label: "Terms & Conditions", href: "https://app.10minuteschool.com/terms-and-conditions" },
  ],
  others: [
    { label: "Blog", href: "https://blog.10minuteschool.com/" },
    { label: "Book Store", href: "/store/all" },
    { label: "Free Notes & Guides", href: "https://10minuteschool.com/content" },
    { label: "Job Preparation Courses", href: "/jobs-prep" },
    { label: "Verify Certificate", href: "/certificate" },
    { label: "Free Download", href: "/resource" },
  ],
};

const socialLinks = [
  { alt: "facebook", src: "/footer/facebook.jpeg", href: "https://www.facebook.com/10minuteschool/" },
  { alt: "instagram", src: "/footer/instagram.jpeg", href: "https://www.instagram.com/10ms_insta/" },
  { alt: "linkedin", src: "/footer/linkedin.jpeg", href: "https://www.linkedin.com/company/10ms/" },
  { alt: "youtube", src: "/footer/youtube.jpeg", href: "https://www.youtube.com/channel/UCL89KKkLs0tZKld-iIS3NGw" },
  { alt: "Tiktok", src: "/footer/tiktok.jpeg", href: "https://www.tiktok.com/@10minuteschool?lang=en" },
];

const Footer = () => {
  const renderLinks = (section: keyof typeof footerLinks) =>
    footerLinks[section].map(({ label, href }, idx) =>
      href.startsWith("/") ? (
        <li key={idx}>
          <Link href={href} className="mb-2 text-sm font-medium hover:text-green-600 md:text-base">
            {label}
          </Link>
        </li>
      ) : (
        <li key={idx}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mb-2 text-sm font-medium hover:text-green-600 md:text-black"
          >
            {label}
          </a>
        </li>
      )
    );

  return (
    <footer className="bg-gray-50 pb-28 lg:pb-0">
      <div className="container flex-col mx-auto px-4 md:px-0 mb-24 md:mb-0">
        <div className="flex flex-col pt-12 md:flex-row md:border-b md:border-[#E4E4E4] lg:border-transparent  pb-2 lg:pb-8">
          {/* Left */}
          <div className="flex flex-col items-center w-full mb-7 md:mb-0 md:items-start md:mr-6">
            <Link href="/" className="mb-4">
              <Image
                src="https://10minuteschool.com/images/logo.svg"
                alt="Instructor"
                width={116}
                height={32}
                priority
              />
            </Link>
            <h3 className="mb-[14px] text-base font-semibold md:font-medium">
              Download Our Mobile App
            </h3>
            <div className="flex">
              <a
                href="https://play.google.com/store/apps/details?id=com.a10minuteschool.tenminuteschool"
                target="_blank"
                rel="noreferrer"
                className="mr-4"
              >
                <Image
                  src="/footer/google-play-icon.jpeg"
                  alt="google play"
                  width={156}
                  height={49}
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/10-minute-school/id1577061772"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/footer/ios-store-icon.jpeg"
                  alt="ios download"
                  width={156}
                  height={49}
                />
              </a>
            </div>
          </div>

          {/* Middle */}
          <div className="mx-0 flex w-full justify-center border-b border-[#E4E4E4] pb-8 md:mx-14 md:border-none lg:mx-0 lg:border-b lg:border-[#E4E4E4]">
            <div className="flex justify-center w-full max-w-sm">
              <div className="w-1/2 mr-4">
                <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">Company</h3>
                <ul className="flex flex-col justify-center text-gray-600 md:justify-start md:gap-4">
                  {renderLinks("company")}
                </ul>
              </div>
              <div className="w-1/2">
                <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">Others</h3>
                <ul className="flex flex-col justify-center text-gray-600 md:justify-start md:gap-4">
                  {renderLinks("others")}
                </ul>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col w-full ml-0 md:ml-4">
            <div className="hidden md:block">
              <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                Keep up with us at
              </h3>
              <p className="mb-4 text-base font-normal">
                Call Us: <a className="text-green-600" href="tel:16910">16910</a> (24x7)
              </p>
              <p className="mb-4 text-base font-normal">
                WhatsApp:{" "}
                <a
                  className="text-green-600"
                  href="https://api.whatsapp.com/send?phone=+8801896016252&text=I need your assistance"
                  target="_blank"
                  rel="noreferrer"
                >
                  +8801896016252
                </a>{" "}
                (24x7)
              </p>
              <p className="mb-4 text-base font-normal">
                Outside Bangladesh: <a className="text-green-600" href="tel:+8809610916910">+880 9610916910</a>
              </p>
              <p className="mb-2 text-base font-normal">
                Email Us: <span className="text-green-600">support@10minuteschool.com</span>
              </p>
            </div>
            <div className="mx-auto mb-3 mt-5 flex w-full max-w-[256px] gap-6 md:mx-0">
              {socialLinks.map(({ href, src, alt }, idx) => (
                <a key={idx} href={href} target="_blank" rel="noreferrer">
                  <Image src={src} alt={alt} width={32} height={32} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pb-5 text-center">
          <p className="text-xs font-normal text-gray-600 md:text-sm">
            2015 - 2025 Copyright © 10 Minute School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
