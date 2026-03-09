import { motion } from "framer-motion";
import {
  Scale,
  FileText,
  Shield,
  AlertTriangle,
  Users,
  DollarSign,
  Clock,
  Ban,
  Gavel,
  CheckCircle2,
} from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TermsOfService = () => {
  const effectiveDate = "January 1, 2025";

  const serviceLevels = [
    {
      name: "Starter Plan",
      rate: "7% of collections",
      minimum: "$500/month",
      features: [
        "Claims submission",
        "Payment posting",
        "Basic reporting",
        "Email support",
        "HIPAA compliance",
      ],
    },
    {
      name: "Professional Plan",
      rate: "5.5% of collections",
      minimum: "$1,000/month",
      features: [
        "All Starter features",
        "Denial management",
        "Prior authorization",
        "Detailed analytics",
        "Phone & email support",
        "Dedicated account manager",
      ],
    },
    {
      name: "Enterprise Plan",
      rate: "Custom pricing",
      minimum: "Contact for quote",
      features: [
        "All Professional features",
        "Provider credentialing",
        "Custom integrations",
        "A/R recovery",
        "24/7 priority support",
        "On-site training",
        "Custom reporting",
      ],
    },
  ];

  const clientObligations = [
    {
      title: "Accurate Information",
      description: "Provide complete, accurate, and timely information",
      details: [
        "Patient demographics and insurance information",
        "Medical records and documentation",
        "Charge capture and encounter data",
        "Updates to practice information",
        "Changes to payer enrollments",
      ],
    },
    {
      title: "Timely Response",
      description: "Respond to our requests within specified timeframes",
      details: [
        "Documentation requests within 3 business days",
        "Denial appeals within 5 business days",
        "Payer correspondence within 2 business days",
        "Payment posting inquiries within 24 hours",
        "Credentialing documentation within 7 days",
      ],
    },
    {
      title: "Access to Systems",
      description: "Provide access to necessary systems and portals",
      details: [
        "EHR/PM system access for billing staff",
        "Payer portal credentials",
        "Clearinghouse access",
        "Bank account information for deposits",
        "Practice management system access",
      ],
    },
    {
      title: "Payment Terms",
      description: "Adhere to agreed-upon payment schedules",
      details: [
        "Monthly invoicing based on collections",
        "Payment due within 30 days of invoice",
        "Minimum monthly fees apply regardless of collections",
        "Disputed charges must be notified within 15 days",
        "Late payments subject to 1.5% monthly fee",
      ],
    },
  ];

  const prohibitedUses = [
    {
      title: "Fraudulent Activities",
      icon: AlertTriangle,
      description: "Any form of healthcare fraud or abuse",
      examples: [
        "Upcoding or unbundling services",
        "Billing for services not rendered",
        "Misrepresenting diagnoses or procedures",
        "Kickbacks or referrals for compensation",
        "Falsifying medical records",
      ],
    },
    {
      title: "Privacy Violations",
      icon: Shield,
      description: "Unauthorized disclosure of protected health information",
      examples: [
        "Sharing patient data without authorization",
        "Selling patient information",
        "Improper disposal of medical records",
        "Accessing records without need",
        "Failing to report breaches",
      ],
    },
    {
      title: "System Misuse",
      icon: Ban,
      description: "Improper use of our systems and platforms",
      examples: [
        "Unauthorized access to accounts",
        "Sharing login credentials",
        "Attempting to bypass security measures",
        "Introducing malware or viruses",
        "Automated scraping or data harvesting",
      ],
    },
  ];

  const terminationReasons = [
    {
      by: "Client",
      notice: "30 days",
      description: "May terminate with 30-day written notice",
    },
    {
      by: "MedBill Pro",
      notice: "30 days",
      description: "May terminate for material breach with 30-day notice",
    },
    {
      by: "Either Party",
      notice: "Immediate",
      description:
        "Immediate termination for cause (fraud, illegal activities)",
    },
    {
      by: "MedBill Pro",
      notice: "Immediate",
      description:
        "Immediate termination if client violates HIPAA requirements",
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
              <Scale className="w-10 h-10 text-secondary" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Legal Agreement for MedBill Pro Medical Billing Services
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Effective: {effectiveDate}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agreement Acceptance */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Agreement to Terms
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                By accessing or using MedBill Pro's medical billing services,
                website, or software platforms (collectively, the "Services"),
                you agree to be bound by these Terms of Service ("Terms"). These
                Terms constitute a legally binding agreement between you
                ("Client" or "you") and MedBill Pro ("we," "us," or "our").
              </p>
              <p>
                If you do not agree to these Terms, you may not use our
                Services. If you are agreeing to these Terms on behalf of an
                organization or entity, you represent and warrant that you have
                the authority to bind that organization or entity to these
                Terms.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  Important Notice
                </h3>
                <p className="text-sm text-foreground">
                  These Terms govern your use of our Services along with our
                  Privacy Policy, Business Associate Agreement (BAA), and any
                  applicable Service Level Agreements (SLAs). All parties must
                  comply with HIPAA regulations and applicable healthcare laws.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Description */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive medical billing and revenue cycle management
              solutions tailored to your practice.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {serviceLevels.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {plan.name}
                    </CardTitle>
                    <div className="mt-4">
                      <div className="text-3xl font-bold text-foreground">
                        {plan.rate}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {plan.minimum}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Service Scope & Limitations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Included Services:
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                      Medical claims submission
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                      Insurance verification
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                      Coding and documentation review
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                      Denial management
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                      Payment posting
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                      Accounts receivable follow-up
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                      Financial reporting
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                      Patient billing support
                    </li>
                  </ul>
                </div>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <h4 className="font-semibold text-destructive mb-2">
                    Services NOT Included:
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Ban className="w-4 h-4 text-destructive mt-0.5" />
                      Clinical decision making
                    </li>
                    <li className="flex items-start gap-2">
                      <Ban className="w-4 h-4 text-destructive mt-0.5" />
                      Legal or compliance advice
                    </li>
                    <li className="flex items-start gap-2">
                      <Ban className="w-4 h-4 text-destructive mt-0.5" />
                      Practice management consulting
                    </li>
                    <li className="flex items-start gap-2">
                      <Ban className="w-4 h-4 text-destructive mt-0.5" />
                      Software implementation
                    </li>
                    <li className="flex items-start gap-2">
                      <Ban className="w-4 h-4 text-destructive mt-0.5" />
                      Human resources management
                    </li>
                    <li className="flex items-start gap-2">
                      <Ban className="w-4 h-4 text-destructive mt-0.5" />
                      Marketing services
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Responsibilities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Client Responsibilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              To ensure optimal service delivery, clients must fulfill certain
              obligations.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {clientObligations.map((obligation, index) => (
              <motion.div
                key={obligation.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {obligation.title}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {obligation.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {obligation.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                          <span>{detail}</span>
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

      {/* Prohibited Uses */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Ban className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Prohibited Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The following activities are strictly prohibited and may result in
              immediate termination.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {prohibitedUses.map((prohibited, index) => (
              <motion.div
                key={prohibited.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-destructive/20 hover:border-destructive/40 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-destructive/10">
                        <prohibited.icon className="w-5 h-5 text-destructive" />
                      </div>
                      <CardTitle className="text-lg">
                        {prohibited.title}
                      </CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {prohibited.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {prohibited.examples.map((example, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Ban className="w-3 h-3 text-destructive flex-shrink-0 mt-1" />
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

      {/* Payment Terms */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Payment Terms & Fees
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clear, transparent pricing based on collections - we only succeed
              when you do.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Fee Structure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Performance-Based Pricing:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5" />
                      <span>
                        Fees calculated as a percentage of{" "}
                        <strong className="text-foreground">
                          actual collections
                        </strong>
                        , not charges
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5" />
                      <span>
                        Minimum monthly fees apply regardless of collection
                        volume
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5" />
                      <span>
                        Payments collected within 30 days are considered for
                        monthly fees
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5" />
                      <span>
                        Adjustments, refunds, and recoupments deducted from fees
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-foreground mb-3">
                    Billing & Invoicing:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-primary mt-0.5" />
                      <span>Invoices issued monthly, due within 30 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-primary mt-0.5" />
                      <span>
                        Late payments subject to 1.5% monthly finance charge
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-primary mt-0.5" />
                      <span>
                        Disputed charges must be reported within 15 days
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-primary mt-0.5" />
                      <span>
                        Collection costs for delinquent accounts are Client's
                        responsibility
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-foreground mb-3">
                    Additional Fees:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      • Setup fees: $500-$2,500 (one-time, based on practice
                      size)
                    </li>
                    <li>• Software integration: $1,000-$5,000 (if required)</li>
                    <li>
                      • Implementation support: $100/hour (beyond included
                      hours)
                    </li>
                    <li>
                      • Custom reporting: $75/report (beyond standard reports)
                    </li>
                    <li>
                      • After-hours support: Available for Enterprise clients
                      only
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Gavel className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Termination & Cancellation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the terms and conditions for ending our service
              agreement.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Termination Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {terminationReasons.map((term, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-background rounded-lg"
                    >
                      <div className="flex-shrink-0 w-32">
                        <span className="text-sm font-semibold text-primary">
                          {term.by}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="w-4 h-4 text-secondary" />
                          <span className="font-medium text-foreground">
                            {term.notice} Notice
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {term.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">
                    Upon Termination:
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• All outstanding fees must be paid within 30 days</li>
                    <li>• Client data will be returned within 45 days</li>
                    <li>• Ongoing claims will be processed for 60 days</li>
                    <li>
                      • Business Associate Agreement remains in effect for PHI
                    </li>
                    <li>
                      • Both parties release all claims except for willful
                      misconduct
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <AlertTriangle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Limitation of Liability
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Important limitations on our liability and your remedies.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Disclaimer of Warranties</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                  WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
                  BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                </p>
                <p>
                  We do not warrant that: (a) the Services will be
                  uninterrupted, secure, or error-free; (b) the Services will
                  meet your requirements; (c) results from use of the Services
                  will be accurate or reliable; or (d) any errors will be
                  corrected.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Liability Cap</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  <strong className="text-foreground">Except for:</strong> (i)
                  death or personal injury caused by our negligence; (ii) fraud
                  or willful misconduct; or (iii) any liability which cannot be
                  excluded by applicable law;
                </p>
                <p>
                  <strong className="text-foreground">
                    Our total liability
                  </strong>{" "}
                  to you for all claims under these Terms shall not exceed the{" "}
                  <span className="text-primary">
                    amount of fees paid by you during the twelve (12) months
                    immediately preceding the claim
                  </span>
                  .
                </p>
                <p>
                  <strong className="text-foreground">In no event</strong> shall
                  we be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including but not limited
                  to lost profits, lost revenue, lost data, or business
                  interruption.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Gavel className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Dispute Resolution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Procedures for resolving any disputes that may arise.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Binding Arbitration Agreement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-muted-foreground space-y-3">
                  <p>
                    <strong className="text-foreground">
                      Agreement to Arbitrate:
                    </strong>{" "}
                    You and MedBill Pro agree to resolve any disputes, claims,
                    or controversies arising out of or relating to these Terms
                    or the Services through binding arbitration, except as
                    expressly provided otherwise.
                  </p>

                  <p>
                    <strong className="text-foreground">
                      Arbitration Rules:
                    </strong>{" "}
                    Arbitration shall be administered by the American
                    Arbitration Association (AAA) in accordance with its
                    Commercial Arbitration Rules. The arbitration shall be
                    conducted in English, in your state of residence, and the
                    arbitrator's decision shall be final and binding.
                  </p>

                  <p>
                    <strong className="text-foreground">Costs:</strong> Each
                    party shall bear its own attorneys' fees and costs, unless
                    the arbitrator determines otherwise or applicable law
                    provides otherwise. The arbitration filing and
                    administrative fees will be shared equally.
                  </p>

                  <p>
                    <strong className="text-foreground">
                      Class Action Waiver:
                    </strong>{" "}
                    You agree to resolve disputes individually and waive any
                    right to participate in class actions, class arbitrations,
                    or representative proceedings.
                  </p>
                </div>

                <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">
                    Exception for Small Claims:
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Either party may bring an individual action in small claims
                    court, provided the action remains in small claims court and
                    is not transferred or removed to another court.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Scale className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Governing Law & Jurisdiction
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The legal framework governing these Terms and our Services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    These Terms shall be governed by and construed in accordance
                    with the laws of the{" "}
                    <strong className="text-foreground">
                      State of Delaware
                    </strong>
                    , without regard to its conflict of law principles. Any
                    legal action or proceeding arising under these Terms will be
                    brought exclusively in the federal or state courts located
                    in Delaware.
                  </p>

                  <p>
                    The application of the United Nations Convention on
                    Contracts for the International Sale of Goods is expressly
                    excluded.
                  </p>

                  <p>
                    These Terms do not limit any rights you may have under
                    HIPAA, the HITECH Act, or other applicable healthcare
                    regulations, which shall prevail in the event of any
                    conflict.
                  </p>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">
                      Federal Regulations
                    </h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• HIPAA Privacy Rule (45 CFR Part 160)</li>
                      <li>• HIPAA Security Rule (45 CFR Part 164)</li>
                      <li>• HITECH Act provisions</li>
                      <li>• Medicare/Medicaid regulations</li>
                      <li>• Stark Law and Anti-Kickback Statute</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">
                      State Compliance
                    </h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• State privacy laws</li>
                      <li>• State medical billing regulations</li>
                      <li>• State licensure requirements</li>
                      <li>• Workers' compensation laws</li>
                      <li>• Prompt payment regulations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our legal team is here to help clarify any aspects of our Terms of
              Service.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto text-center p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Contact Our Legal Department
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:legal@medbillpro.com"
                className="block text-primary hover:underline"
              >
                legal@medbillpro.com
              </a>
              <a
                href="tel:+1 (201) 699-6877"
                className="block text-primary hover:underline"
              >
                +1 (201) 699-6877
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                Please allow 2-3 business days for a response to legal
                inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default TermsOfService;
