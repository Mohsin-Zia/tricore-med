import {
  FileText,
  Shield,
  TrendingUp,
  ClipboardCheck,
  Award,
  Video,
  Activity,
  SearchCheck,
  type LucideIcon
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  features: string[];
}

export const services: Service[] = [
  {
    id: "medical-billing",
    title: "Medical Billing",
    shortDescription: "Boost revenue and minimize claim denials with our expert billing team.",
    description: "Increase revenue and reduce claim denials with our experienced billing team. We focus on accurate submissions, faster reimbursements, and efficient accounts receivable management to keep your cash flow steady.",
    icon: FileText,
    benefits: [
      "Reduce claim denials by up to 95%",
      "Faster payment turnaround (24-48 hours)",
      "Improved cash flow and collections",
      "Reduced administrative burden"
    ],
    features: [
      "Patient demographics verification",
      "Insurance eligibility verification",
      "Charge entry and coding",
      "Claim submission and tracking",
      "Payment posting and reconciliation",
      "Denial management and appeals"
    ]
  },
  {
    id: "credentialing",
    title: "Credentialing and Enrollment",
    shortDescription: "Simplify insurance credentialing and enrollment with our specialists.",
    description: "Streamline insurance credentialing and payer enrollment with expert guidance, allowing your practice to concentrate on delivering high-quality patient care.",
    icon: Award,
    benefits: [
      "Faster network enrollment",
      "Reduced credentialing delays",
      "Complete documentation management",
      "Ongoing credential maintenance"
    ],
    features: [
      "Initial credentialing applications",
      "Re-credentialing and renewals",
      "CAQH profile management",
      "Payer enrollment and contracting",
      "License and certificate tracking",
      "Privileging support"
    ]
  },
  {
    id: "rcm",
    title: "Revenue Cycle Management (RCM)",
    shortDescription: "Optimize cash flow, enhance coding accuracy, and maximize denial recoveries.",
    description: "Strengthen financial performance with comprehensive, end-to-end RCM solutions that improve coding accuracy, accelerate cash flow, and maximize denial recoveries.",
    icon: TrendingUp,
    benefits: [
      "Increase collections by 20-30%",
      "Reduce days in A/R significantly",
      "Improve first-pass claim rate",
      "Enhanced financial visibility"
    ],
    features: [
      "Pre-authorization services",
      "Charge capture optimization",
      "Claims management and scrubbing",
      "Payment posting and reconciliation",
      "Denial management and prevention",
      "Financial reporting and analytics"
    ]
  },
  {
    id: "telehealth-billing",
    title: "Telehealth Medical Billing",
    shortDescription: "Protect your virtual care revenue with precise telehealth billing services.",
    description: "Safeguard your virtual care revenue with precise telehealth billing, timely claim submissions, and reliable reimbursements.",
    icon: Video,
    benefits: [
      "Specialized telehealth coding expertise",
      "Compliance with virtual care regulations",
      "Maximized telehealth reimbursement",
      "Reduced telehealth claim denials"
    ],
    features: [
      "Virtual visit code selection",
      "Telehealth modifier application",
      "Platform-specific billing requirements",
      "Real-time telehealth claim tracking",
      "Virtual care compliance review",
      "Telehealth revenue optimization"
    ]
  },
  {
    id: "rpm-billing",
    title: "RPM Medical Billing",
    shortDescription: "Let our Remote Patient Monitoring billing experts handle your chronic care claims.",
    description: "Ensure full revenue capture for Remote Patient Monitoring services with compliant, accurate billing and proactive claim management.",
    icon: Activity,
    benefits: [
      "Expert RPM billing knowledge",
      "CMS compliance assurance",
      "Maximum RPM revenue capture",
      "Accurate time-based billing"
    ],
    features: [
      "RPM device setup billing",
      "Daily/monthly time tracking",
      "Chronic care management billing",
      "Remote physiologic monitoring",
      "Care coordination billing",
      "RPM compliance documentation"
    ]
  },
  {
    id: "free-practice-audit",
    title: "Free Practice Audit",
    shortDescription: "Not sure why your revenue isn't growing? Our complimentary audit identifies missed opportunities.",
    description: "Unsure why your revenue growth has stalled? Our complimentary practice audit uncovers missed opportunities and delivers clear, actionable strategies to enhance billing efficiency and boost cash flow.",
    icon: SearchCheck,
    benefits: [
      "Identify missed revenue opportunities",
      "Uncover billing inefficiencies",
      "Compliance gap analysis",
      "Customized optimization strategy"
    ],
    features: [
      "Revenue cycle assessment",
      "Claim denial analysis",
      "Coding accuracy review",
      "Workflow evaluation",
      "Benchmarking against industry standards",
      "Actionable improvement recommendations"
    ]
  },
  // {
  //   id: "dme-billing",
  //   title: "DME Billing Services",
  //   shortDescription: "Expert Durable Medical Equipment billing with surgical precision.",
  //   description: "Axaline Medical Billing expertly manages the Durable Medical Equipment (DME) revenue cycle by bridging the gap between clinical documentation and complex payer requirements, ensuring every claim is processed with surgical precision.",
  //   icon: Shield,
  //   benefits: [
  //     "100% submission accuracy",
  //     "Reduced DME claim denials",
  //     "Rental revenue optimization",
  //     "Prior authorization success"
  //   ],
  //   features: [
  //     "Documentation scrubbing (CMN verification)",
  //     "Compliance oversight (Medicare LCDs)",
  //     "Rental cycle logic and tracking",
  //     "Prior auth strategy for mobility equipment",
  //     "Medical necessity documentation",
  //     "DME-specific coding expertise"
  //   ]
  // }
];

export const featuredServices = services.slice(0, 6);
