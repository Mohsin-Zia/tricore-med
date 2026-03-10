import { useRef } from "react";
import { Shield, Lock, FileCheck, Eye, AlertTriangle } from "lucide-react";
import { useGsapFadeIn } from "@/hooks/useGsapAnimations";

const securityFeatures = [
  {
    icon: Lock,
    title: "•	Encrypted Data Storage & Transmission ",
    description: "– Keeps all information safe",
  },
  {
    icon: Shield,
    title: "•	Controlled Access Permissions ",
    description: "Only authorized personnel can view sensitive data.",
  },
  {
    icon: FileCheck,
    title: "•	Secure Communication Channels ",
    description: "For safe messaging and file sharing.",
  },
  {
    icon: Eye,
    title: "•	Transparent Activity Tracking ",
    description: "Detailed audit logs for full oversight.",
  },
  {
    icon: AlertTriangle,
    title: "•	Proactive Security Updates ",
    description: "Staying current with HIPAA and best practices.",
  },
];

export const HIPAASecuritySection = () => {
  const sectionRef = useGsapFadeIn();

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-teal/10 text-teal font-semibold text-sm mb-4">
            Data Security & Compliance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            HIPAA-Ready Medical Billing Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Tricore Medical Billing, safeguarding your patients’ data is our
            top priority. We ensure all billing and revenue cycle processes meet
            the strictest privacy and security standards.
          </p>
        </div>

        {/* HIPAA Badge */}
        <div className="flex justify-center mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-teal/20 flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-10 h-10 text-teal" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                HIPAA Compliant
              </h3>
              <p className="text-muted-foreground">
                Your data is protected with enterprise-grade security measures
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            How We Keep Your Data Secure
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border">
                  <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why HIPAA Matters */}
        <div className="bg-gradient-to-r from-navy to-navy-light rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Why HIPAA Compliance Is Essential
            </h3>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Working with a HIPAA-compliant billing partner helps protect your
              practice from costly penalties, preserves patient trust, and
              ensures secure, professional operations. Tricore Medical Billing
              delivers reliable billing services backed by strict privacy and
              data protection standards.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-teal-light" />
                <span>BAA Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-teal-light" />
                <span>Encrypted Data Transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-teal-light" />
                <span>Regular Security Audits</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-teal-light" />
                <span>Staff Training</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
