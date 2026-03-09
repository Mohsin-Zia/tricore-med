import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const footerLinks = {
  services: [
    { label: "Medical Billing", href: "/services#medical-billing" },
    { label: "Medical Coding", href: "/services#medical-coding" },
    { label: "Credentialing", href: "/services#credentialing" },
    { label: "Revenue Cycle Management", href: "/services#rcm" },
    { label: "Denial Management", href: "/services#denial-management" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/about#careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "FAQ", href: "/pricing#faq" },
    { label: "Pricing", href: "/pricing" },
    { label: "Specialties", href: "/specialties" },
    { label: "Case Studies", href: "/case-studies" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground flex items-center justify-center">
                <span className="text-xl font-bold text-primary">M</span>
              </div>
              <span className="text-xl font-bold">
                MedBill<span className="text-secondary">Pro</span>
              </span>
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Expert medical billing services trusted by 1,500+ healthcare
              providers nationwide. Maximize your revenue with our comprehensive
              billing solutions.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+1 (201) 699-6877"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5 mr-3" />
                +1 (201) 699-6877
              </a>
              <a
                href="mailto:contact@tricoremd.com"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5 mr-3" />
                contact@tricoremd.com
              </a>
              <div className="flex items-start text-primary-foreground/80">
                <MapPin className="w-5 h-5 mr-3 mt-0.5" />
                <span>
                  123 Medical Center Dr.
                  <br />
                  Suite 500, New York, NY 10001
                </span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-lg mb-4 mt-6">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © {new Date().getFullYear()} MedBill Pro. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
