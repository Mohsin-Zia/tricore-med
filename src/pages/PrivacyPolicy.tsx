import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Lock,
  UserCheck,
  FileText,
  AlertCircle,
  Mail,
  Phone,
  Globe,
  CheckCircle2,
  Cookie,
  Database,
  Globe2,
  RefreshCw,
} from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PrivacyPolicy = () => {
  const effectiveDate = "January 1, 2025";
  const lastUpdated = "December 15, 2024";

  const dataCategories = [
    {
      icon: UserCheck,
      title: "Personal Information",
      description: "We collect information that identifies you personally",
      examples: [
        "Full name, title, and credentials",
        "Business email address and contact number",
        "Practice name and address",
        "Professional license information",
        "National Provider Identifier (NPI)",
        "Tax identification number (TIN)",
        "Website URL and social media profiles",
      ],
    },
    {
      icon: Database,
      title: "Practice Information",
      description: "Details about your medical practice and operations",
      examples: [
        "Practice size and specialty",
        "Annual patient volume and collections",
        "Current billing software and systems",
        "Electronic Health Record (EHR) system",
        "Payer enrollment status",
        "Staffing structure and roles",
        "Current billing challenges and pain points",
      ],
    },
    {
      icon: Lock,
      title: "Protected Health Information (PHI)",
      description: "When acting as a Business Associate, we may handle PHI",
      examples: [
        "Patient demographic information",
        "Diagnosis and procedure codes",
        "Insurance information and coverage details",
        "Medical records and documentation",
        "Billing and claims data",
        "Payment and financial information",
        "Treatment and care records (as needed for billing)",
      ],
    },
    {
      icon: Globe,
      title: "Technical Information",
      description: "Data collected automatically through our services",
      examples: [
        "IP address and browser type",
        "Device information and operating system",
        "Referring website and pages viewed",
        "Time spent on our platform",
        "Click patterns and user interactions",
        "Authentication and access logs",
        "Performance and diagnostic data",
      ],
    },
    {
      icon: Cookie,
      title: "Cookies and Tracking",
      description:
        "Information collected through cookies and similar technologies",
      examples: [
        "Preferences and settings",
        "Session identifiers",
        "Authentication tokens",
        "Analytics and usage metrics",
        "Marketing and advertising data",
        "A/B testing information",
        "Cross-site tracking data",
      ],
    },
    {
      icon: RefreshCw,
      title: "Communications Data",
      description: "Information from your interactions with us",
      examples: [
        "Email correspondence and attachments",
        "Phone call recordings and transcripts",
        "Chat and support ticket history",
        "Meeting notes and action items",
        "Survey responses and feedback",
        "Marketing engagement data",
        "Webinar and event participation",
      ],
    },
  ];

  const dataPurposes = [
    {
      title: "Service Delivery",
      icon: FileText,
      uses: [
        "Process and submit medical claims on your behalf",
        "Verify insurance eligibility and coverage",
        "Perform medical coding and documentation review",
        "Manage denial prevention and appeals",
        "Handle accounts receivable follow-up",
        "Generate financial and performance reports",
        "Provide credentialing and enrollment services",
      ],
    },
    {
      title: "Account Management",
      icon: UserCheck,
      uses: [
        "Create and maintain your account",
        "Authenticate and authorize users",
        "Manage permissions and access controls",
        "Communicate service updates and notifications",
        "Process payments and billing",
        "Maintain compliance documentation",
        "Track service usage and metrics",
      ],
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      uses: [
        "Detect and prevent fraud and abuse",
        "Monitor for unauthorized access",
        "Conduct security audits and assessments",
        "Maintain HIPAA compliance",
        "Respond to security incidents",
        "Verify identity and credentials",
        "Protect against malicious activity",
      ],
    },
    {
      title: "Analytics & Improvement",
      icon: Globe2,
      uses: [
        "Analyze service performance",
        "Identify trends and patterns",
        "Develop new features and services",
        "Conduct research and development",
        "Optimize user experience",
        "Generate benchmarking insights",
        "Create industry reports and publications",
      ],
    },
    {
      title: "Marketing & Communications",
      icon: Mail,
      uses: [
        "Send service-related notifications",
        "Provide product updates and enhancements",
        "Share educational content and resources",
        "Promote relevant services and offers",
        "Invite to webinars and events",
        "Conduct customer satisfaction surveys",
        "Personalize your experience",
      ],
    },
    {
      title: "Legal Requirements",
      icon: AlertCircle,
      uses: [
        "Comply with legal obligations",
        "Respond to lawful requests and subpoenas",
        "Protect our rights and property",
        "Enforce our terms and conditions",
        "Prevent illegal activities",
        "Maintain business records",
        "Respond to regulatory inquiries",
      ],
    },
  ];

  const dataSharedWith = [
    {
      category: "Healthcare Payers",
      parties: [
        "Insurance companies",
        "Government payers (Medicare, Medicaid)",
        "Third-party administrators",
        "Workers' compensation carriers",
      ],
      purpose:
        "Submit claims, verify eligibility, resolve denials, and obtain payment authorization",
    },
    {
      category: "Business Associates",
      parties: [
        "Clearinghouses",
        "EHR vendors",
        "Practice management systems",
        "Cloud service providers",
        "Data analytics platforms",
      ],
      purpose:
        "Facilitate claims transmission, maintain records, and provide technical infrastructure",
    },
    {
      category: "Service Providers",
      parties: [
        "Legal counsel",
        "Accounting firms",
        "IT security consultants",
        "Compliance auditors",
        "Backup and disaster recovery services",
      ],
      purpose:
        "Support business operations, maintain compliance, and ensure service quality",
    },
    {
      category: "Regulatory Authorities",
      parties: [
        "Department of Health and Human Services (HHS)",
        "Office for Civil Rights (OCR)",
        "State health departments",
        "Attorneys General",
        "CMS (Centers for Medicare & Medicaid Services)",
      ],
      purpose:
        "Comply with regulations, respond to investigations, and report breaches",
    },
    {
      category: "Professional Advisors",
      parties: [
        "Revenue cycle consultants",
        "Coding experts",
        "Industry analysts",
        "Benchmarking partners",
      ],
      purpose: "Improve service quality and provide industry insights",
    },
    {
      category: "Affiliates & Partners",
      parties: [
        "Parent companies and subsidiaries",
        "Strategic partners",
        "Joint ventures",
        "Resellers and distributors",
      ],
      purpose: "Coordinate service delivery and provide integrated solutions",
    },
  ];

  const userRights = [
    {
      title: "Right to Access",
      description:
        "You can request a copy of all personal information we hold about you",
      process:
        "Submit a written request via email or certified mail. We will provide your information within 30 days.",
    },
    {
      title: "Right to Correction",
      description:
        "You can request correction of inaccurate or incomplete information",
      process:
        "Contact our privacy office with details of the inaccuracies. We will investigate and correct errors within 30 days.",
    },
    {
      title: "Right to Deletion",
      description: "You can request deletion of your personal information",
      process:
        "Submit a deletion request. We will delete your information unless required by law or for legitimate business purposes.",
    },
    {
      title: "Right to Restrict Processing",
      description: "You can limit how we use your information",
      process:
        "Specify the processing activities you want restricted. We will accommodate your request where feasible.",
    },
    {
      title: "Right to Data Portability",
      description: "You can receive your data in a structured format",
      process:
        "We will provide your information in a commonly used format (CSV, JSON, XML) upon request.",
    },
    {
      title: "Right to Object",
      description: "You can object to certain processing activities",
      process:
        "Submit your objection with reasons. We will honor your objection unless we have compelling legitimate grounds.",
    },
    {
      title: "Right to Withdraw Consent",
      description:
        "You can withdraw consent where processing is based on consent",
      process:
        "Contact us to withdraw consent. This will not affect the lawfulness of processing before withdrawal.",
    },
    {
      title: "Right to Opt-Out of Sale",
      description: "You can opt-out of the sale of your personal information",
      process:
        "We do not sell personal information. However, you can opt-out of sharing with third parties for marketing purposes.",
    },
  ];

  const securityMeasures = [
    {
      category: "Technical Safeguards",
      measures: [
        "AES-256 encryption for data at rest",
        "TLS 1.3 for data in transit",
        "Multi-factor authentication (MFA)",
        "Secure socket layer (SSL) certificates",
        "Intrusion detection and prevention systems",
        "Web application firewall (WAF)",
        "Regular penetration testing",
        "Vulnerability scanning and patching",
        "Secure development lifecycle (SDLC)",
        "API security with rate limiting and authentication",
      ],
    },
    {
      category: "Administrative Safeguards",
      measures: [
        "Comprehensive privacy and security policies",
        "Annual HIPAA training for all employees",
        "Background checks for personnel",
        "Role-based access controls (RBAC)",
        "Least privilege access principle",
        "Separation of duties",
        "Incident response procedures",
        "Business continuity and disaster recovery plans",
        "Regular security awareness training",
        "Privacy impact assessments",
      ],
    },
    {
      category: "Physical Safeguards",
      measures: [
        "Secure data centers with 24/7 monitoring",
        "Biometric access controls",
        "Video surveillance and security personnel",
        "Environmental controls (temperature, humidity)",
        "Fire suppression systems",
        "Uninterruptible power supply (UPS)",
        "Regular security patrols",
        "Visitor management systems",
        "Equipment disposal procedures",
        "Clean desk policies",
      ],
    },
    {
      category: "Compliance Measures",
      measures: [
        "HIPAA Privacy and Security Rules",
        "HITECH Act provisions",
        "Omnibus Rule requirements",
        "HITECH Breach Notification",
        "State privacy law compliance",
        "EU General Data Protection Regulation (GDPR)",
        "California Consumer Privacy Act (CCPA)",
        "ISO 27001 Information Security",
        "SOC 2 Type II certification",
        "PCI DSS compliance for payment processing",
      ],
    },
  ];

  const retentionPeriods = [
    { type: "Account Information", period: "While account active + 7 years" },
    { type: "Transaction Records", period: "10 years from transaction date" },
    { type: "Financial Records", period: "7 years after audit completion" },
    {
      type: "Medical Records",
      period: "As required by state law (typically 7-10 years)",
    },
    { type: "Employment Records", period: "7 years after employment ends" },
    { type: "Marketing Communications", period: "Until opt-out + 2 years" },
    {
      type: "Website Analytics",
      period: "26 months (anonymized after 13 months)",
    },
    {
      type: "Security Logs",
      period: "90 days for operational logs, 6 years for security incidents",
    },
    {
      type: "Legal Documents",
      period: "Permanent or until statute of limitations expires",
    },
    { type: "Backup Data", period: "Daily backups retained for 90 days" },
  ];

  const policyUpdates = [
    {
      date: "December 2024",
      change: "Enhanced data processing transparency, added CCPA rights",
    },
    {
      date: "August 2024",
      change: "Updated cookie policy and tracking disclosures",
    },
    {
      date: "March 2024",
      change: "Added international data transfer provisions",
    },
    {
      date: "January 2024",
      change: "Expanded data breach notification requirements",
    },
    {
      date: "September 2023",
      change: "Updated third-party service provider disclosures",
    },
    {
      date: "May 2023",
      change: "Enhanced user rights section under GDPR/CCPA",
    },
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="w-10 h-10 text-secondary" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              We Care About Your Privacy & Protect Your Data With Responsibility
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Effective: {effectiveDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Commitment to Your Privacy
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                At <strong className="text-foreground">MedBill Pro</strong>, we
                take your privacy seriously. As a certified and responsible
                organization providing medical billing and revenue cycle
                management services, we are committed to safeguarding the
                personal and protected health information of everyone who visits
                or uses our website and services.
              </p>
              <p>
                This Privacy Policy outlines how MedBill Pro collects, uses,
                shares, and protects your information while delivering secure,
                compliant, and user-friendly medical billing solutions. We
                provide complete transparency in our data practices and empower
                you to make informed choices about your information.
              </p>
              <p>
                By using our website, services, or providing information to us,
                you agree to the terms of this Privacy Policy. If you do not
                agree with these terms, please do not use our services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Information We Collect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We collect various types of information to provide our medical
              billing services effectively and comply with regulatory
              requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {dataCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <category.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">
                        {category.title}
                      </CardTitle>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.examples.map((example, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How We Use Your Information
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use your information for specific purposes related to our
              medical billing services and to improve our offerings.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {dataPurposes.map((purpose, index) => (
              <motion.div
                key={purpose.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <purpose.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <CardTitle className="text-xl">{purpose.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {purpose.uses.map((use, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information We Share */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Globe2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Information We Share
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We may share your information with specific categories of third
              parties to deliver our services and comply with legal
              requirements.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {dataSharedWith.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {item.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Parties:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.parties.map((party, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {party}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Purpose:
                      </h4>
                      <p className="text-muted-foreground">{item.purpose}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 max-w-3xl mx-auto bg-destructive/10 border border-destructive/20 rounded-xl p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-destructive mb-2">
                  Important Notice: We Do Not Sell Your Information
                </h3>
                <p className="text-muted-foreground">
                  MedBill Pro does <strong>NOT</strong> sell, rent, or trade
                  your personal information or protected health information for
                  marketing or promotional purposes. We only share information
                  as described in this policy and as permitted or required by
                  law.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Your Privacy Rights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <UserCheck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Your Privacy Rights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              You have specific rights regarding your personal information under
              HIPAA, GDPR, CCPA, and other applicable laws.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {userRights.map((right, index) => (
                <AccordionItem
                  key={right.title}
                  value={`right-${index}`}
                  className="border rounded-xl px-6 bg-card shadow-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <div className="flex items-center gap-3 pr-4">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-semibold text-foreground">
                        {right.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pl-8">
                    <p className="text-foreground font-medium mb-2">
                      {right.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-primary">Process:</strong>{" "}
                      {right.process}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Data Security Measures
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We implement industry-leading security measures to protect your
              information from unauthorized access, use, or disclosure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {securityMeasures.map((measure, index) => (
              <motion.div
                key={measure.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {measure.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {measure.measures.map((m, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Shield className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Database className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Data Retention Policy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We retain your information only as long as necessary for
              legitimate business purposes or as required by law.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Retention Periods by Data Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {retentionPeriods.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-muted/30 rounded-lg"
                    >
                      <span className="font-medium text-foreground">
                        {item.type}
                      </span>
                      <span className="text-sm text-primary font-semibold">
                        {item.period}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Policy Updates */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <RefreshCw className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Policy Updates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We may update this Privacy Policy from time to time. Here's a
              history of recent changes.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Revision History</CardTitle>
                <CardDescription>
                  Track of updates to our Privacy Policy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {policyUpdates.map((update, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg"
                    >
                      <div className="flex-shrink-0 w-20 text-sm font-semibold text-primary">
                        {update.date}
                      </div>
                      <div className="flex-1">
                        <p className="text-muted-foreground">{update.change}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <motion.div
              className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-foreground">
                <strong className="text-primary">Important:</strong> Continued
                use of our services after any changes to this Privacy Policy
                constitutes acceptance of the updated terms. We encourage you to
                review this policy periodically.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Contact Us About Privacy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              If you have questions, concerns, or requests regarding your
              privacy, our dedicated privacy team is here to help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-card rounded-xl shadow-md"
            >
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <a
                href="mailto:privacy@medbillpro.com"
                className="text-primary hover:underline"
              >
                privacy@medbillpro.com
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-card rounded-xl shadow-md"
            >
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <a
                href="tel:+1 (201) 699-6877"
                className="text-primary hover:underline"
              >
                +1 (201) 699-6877
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-card rounded-xl shadow-md"
            >
              <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Website</h3>
              <a href="/" className="text-primary hover:underline">
                www.medbillpro.com
              </a>
            </motion.div>
          </div>

          <motion.div
            className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-foreground mb-4">
              Privacy Request Form
            </h3>
            <p className="text-muted-foreground mb-6">
              For fastest response, please include the following information
              when contacting us:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Your full name and contact information</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  Specific request (access, correction, deletion, etc.)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Verification of your identity (if applicable)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Details of the information in question</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Your preferred method of response</span>
              </li>
            </ul>
            <p className="text-sm text-foreground mt-6">
              We will respond to all legitimate privacy requests within{" "}
              <strong className="text-primary">30 business days</strong> of
              receipt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Additional Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn more about your privacy rights and healthcare data
              protection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              {
                title: "HIPAA Privacy Rule",
                url: "https://www.hhs.gov/hipaa/index.html",
              },
              {
                title: "HITECH Act",
                url: "https://www.hhs.gov/ocr/privacy/hipaa/administrative/enforcementrule/hitechenforcementifr.html",
              },
              { title: "CCPA Rights", url: "https://oag.ca.gov/privacy/ccpa" },
              { title: "GDPR Information", url: "https://gdpr-info.eu/" },
            ].map((resource, index) => (
              <motion.a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium text-foreground">
                  {resource.title}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default PrivacyPolicy;
