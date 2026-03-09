export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description?: string;
}

export const stats: Stat[] = [
  {
    id: "providers",
    value: 1500,
    suffix: "+",
    label: "Healthcare Providers",
    description: "Trusted by practices nationwide"
  },
  {
    id: "claims",
    value: 99,
    suffix: "%",
    label: "Clean Claim Rate",
    description: "First-pass claim acceptance"
  },
  {
    id: "specialties",
    value: 75,
    suffix: "+",
    label: "Medical Specialties",
    description: "Comprehensive specialty coverage"
  },
  {
    id: "recovery",
    value: 30,
    suffix: "%",
    label: "Revenue Increase",
    description: "Average improvement in collections"
  },
];

export const trustBadges = [
  { id: "hipaa", label: "HIPAA Compliant", icon: "Shield" },
  { id: "certified", label: "AAPC Certified", icon: "Award" },
  { id: "support", label: "24/7 Support", icon: "Clock" },
  { id: "secure", label: "256-bit Encryption", icon: "Lock" },
];
