import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
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
    // { label: "Our Team", href: "/about#team" },
    // { label: "Careers", href: "/about#careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "FAQ", href: "/pricing#faq" },
    // { label: "Pricing", href: "/pricing" },
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
  const location = useLocation();

  // Scroll to top when route changes (excluding hash changes on same page)
  useEffect(() => {
    // Only scroll to top if it's a new page (not just a hash change)
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      // For hash links, scroll to the element after a short delay
      setTimeout(() => {
        const hash = location.hash.substring(1); // Remove the #
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // If element not found, scroll to top
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]);

  const handleLinkClick = () => {
    // Scroll to top immediately when any footer link is clicked
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" onClick={handleLinkClick} className="flex items-center mb-4">
              <div className="w-20 h-20 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="Tricore Medical Billing Logo" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <span className="text-xl font-bold">  
                Tricore <span className="text-secondary">Medical Billing</span>
              </span>
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Expert medical billing services trusted by 150+ healthcare
              providers nationwide. Maximize your revenue with our comprehensive
              billing solutions.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+1 (201) 699-6877"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="w-5 h-5 mr-3" />
                +1 (201) 699-6877
              </a>
              <a
                href="mailto:contact@tricoremedicalbilling.com"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5 mr-3" />
                contact@tricoremedicalbilling.com
              </a>
              <div className="flex items-start text-primary-foreground/80">
                <MapPin className="w-5 h-5 mr-3 mt-0.5" />
                <span>
                  25 Hamilton Ave,
                  <br />
                  Clifton, NJ 07011, USA
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
                    onClick={handleLinkClick}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
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
                    onClick={handleLinkClick}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
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
                    onClick={handleLinkClick}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
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
                    onClick={handleLinkClick}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
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
              © {new Date().getFullYear()} Tricore Medical Billing. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}>
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
