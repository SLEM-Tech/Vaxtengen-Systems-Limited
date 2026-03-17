"use client";
import React from "react";
import { motion } from "framer-motion";
import FooterCard from "../Cards/FooterCard";
import Link from "next/link";
import { ChatServiceIconSvg, FileIconSvg, RocketIconSvg } from "../SvgIcons";
import useToken from "../hooks/useToken";
import { signOut } from "@utils/lib";
import { CompanyName, filterCustomersByEmail } from "@constants";
import { useCustomer } from "../lib/woocommerce";
import { LogoImage } from "@utils/function";
import { usePathname } from "next/navigation";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTiktok,
  BiLogoWhatsapp,
} from "@node_modules/react-icons/bi";

interface footerDataProps {
  title: string;
  links: {
    label: string;
    href: string;
    function?: () => void;
  }[];
}

const Footer = () => {
  const { email } = useToken();
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const { data: customer, isLoading, isError } = useCustomer("");
  const wc_customer2_info: Woo_Customer_Type[] = customer ?? [];
  const wc_customer_info: Woo_Customer_Type | undefined =
    filterCustomersByEmail(wc_customer2_info, email);
  const firstName = wc_customer_info?.first_name;
  const footer1socialMediaIcons = [
    {
      id: 1,
      icon: <BiLogoTiktok className="text-2xl sm:text-3xl text-white" />,
      link: "",
      backgroundColor: "bg-gray-900",
    },
    {
      id: 2,
      icon: <BiLogoWhatsapp className="text-2xl sm:text-3xl text-white" />,
      link: "",
      backgroundColor: "bg-whatsapp",
    },
    // {
    // 	id: 2,
    // 	icon: <Iconbi.BiLogoTwitter className='text-lg sm:text-2xl text-white' />,
    // 	link: "#",
    // 	backgroundColor: "bg-[#3CF]",
    // },
  ];

  const footerCardData = [
    {
      icon: <RocketIconSvg />,
      name: "Delivery Assistance",
      description: "Seller Online Delivery",
    },
    {
      icon: <FileIconSvg />,
      name: "Secure Purchase",
      description: "100% Secure Payment",
    },
    {
      icon: <ChatServiceIconSvg />,
      name: "Unmatched Service",
      description: "Dedicated Support",
    },
  ];

  const footerData: footerDataProps[] = [
    {
      title: "Account",
      links: [
        {
          label: firstName ? "Update Account" : "Create Account",
          href: firstName ? "/user/account-details" : "/user/register",
        },
        {
          label: firstName ? "Log Out" : "Login",
          href: firstName ? "" : "/user/login",
          function: firstName ? signOut : () => {},
        },
        {
          label: firstName ? "Change Password" : "Forget Password",
          href: firstName ? "/user/change-password" : "/user/forget-password",
        },
      ],
    },
    {
      title: "Information",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "Support", href: "/contact-us" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Use", href: "/terms-of-use?terms-of-use" },
        { label: "Privacy Policy", href: "/terms-of-use?privacy-policy" },
        { label: "Delivery & Shipping", href: "/terms-of-use?delivery-return" },
        { label: "Refund Policy", href: "/terms-of-use?refund-policy" },
      ],
    },
  ];

  const productCards = footerCardData.map((item, index) => (
    <FooterCard
      key={index}
      icon={item.icon}
      name={item.name}
      description={item.description}
      borderRight={index !== footerCardData.length - 1}
    />
  ));

  const staggerDelay = 0.2;

  return (
    <footer className="bg-background w-full py-2 flex flex-col item-center">
      <div className="mx-auto max-w-[1400px] w-full hidden slg:block">
        <section className="flex justify-center gap-16 mt-2">
          <div className="flex flex-col gap-4 w-[80%]">
            {/* Logo and branding */}
            <div className="flex flex-col gap-2">
              <LogoImage className="!w-[60px] lg:!w-[100px] rounded-sm" />
              {/* <span className="text-black font-semibold text-lg italic tracking-tighter">
                {CompanyName}
              </span> */}
            </div>
          </div>

          <div className="flex gap-4 w-full pt-3">
            {footerData.map((section, index) => (
              <div key={index} className="flex flex-col gap-4 lg:gap-5 w-full">
                <span className="text-black font-medium text-base leading-[1.6]">
                  {section.title}
                </span>
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    onClick={link.function}
                    className="text-black/80 text-sm leading-[1.3] hover:text-primary-100 transition-[.3]">
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="justify-center mt-8 mb-2 hidden slg:flex">
        <hr className="w-full bg-primary-400/40" />
      </div>

      <div className="mx-auto flex w-full flex-col slg:hidden mb-4">
        <section className="flex flex-col justify-between gap-3 sm:gap-6 mt-2 px-4 xs:px-6 sm:px-10">
          <div className="flex w-full justify-between items-end gap-4">
            <div className="">
              <div className="flex flex-col gap-1">
                <LogoImage className="!w-[35px] lg:!w-[30px]" />
                <span className="text-black font-semibold text-sm italic tracking-tighter">
                  {CompanyName}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-8 w-full pt-3">
            {footerData.map((section, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 sm:gap-5 w-full min-w-0">
                <span className="text-black font-medium text-sm sm:text-base leading-[1.6]">
                  {section.title}
                </span>

                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className={`${link.href === pathname ? "text-primary-100" : "text-black"} text-xs sm:text-sm font-[400] hover:text-primary-100 transition-[.3] leading-6`}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mx-auto max-w-[1156px] px-4">
        <div className="flex items-center justify-center py-3">
          <div className="text-gray-700 sm:font-mono text-xs leading-[1.4] text-center">
            Copyright&nbsp;@ {currentYear}&nbsp;{CompanyName} All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
