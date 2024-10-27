"use client";
import { FooterProps } from "./Footer.types";

export const Footer = ({ siteTitle }: FooterProps) => {
  return (
    <div className="bg-base-100 text-base-content">
      <div className="container mx-auto flex flex-col items-center justify-center p-4">
        <p className="text-sm">
          {siteTitle} {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
