export interface Tool {
  id: string;
  title: string;
  description: string;
  category: string;
  primaryOutcome: string;
  view: string;
}

export const TOOLS: Tool[] = [
  {
    id: "value-estimator",
    title: "Land Value Estimator",
    description: "Estimate fair market value for rural parcels using acreage, zoning, and location baselines.",
    category: "valuation",
    primaryOutcome: "Estimated Value Range",
    view: "Estimate"
  },
  {
    id: "parcel-compare",
    title: "Parcel Comparison Grid",
    description: "Side-by-side technical comparison of multiple land properties across key valuation metrics.",
    category: "comparisons",
    primaryOutcome: "Comparative Matrix",
    view: "Compare"
  },
  {
    id: "utility-impact",
    title: "Utility Impact Estimator",
    description: "Calculate expected value variance derived from infrastructure proximity (water, power, road).",
    category: "utilities",
    primaryOutcome: "Infrastructure Premium",
    view: "Utilities"
  },
  {
    id: "lease-calc",
    title: "Farmland Lease Calculator",
    description: "Compute standardized annual rent estimates or crop-share models based on acreage output.",
    category: "lease/rent",
    primaryOutcome: "Fair Cash Rent",
    view: "Lease"
  },
  {
    id: "appraisal-prep",
    title: "Appraisal Prep Checklist",
    description: "Structured workflow to assemble verification data and compliance records before an appraisal.",
    category: "appraisal",
    primaryOutcome: "Readiness Score",
    view: "Appraisal"
  }
];
