import { Home, Calculator, GitCompare, FileText, UtilityPole, ClipboardCheck, Heart, Info, Mail, Scale, Shield, Landmark } from 'lucide-react';

export const NAV_ITEMS = [
  { id: 'Home', label: 'Dashboard', icon: Home },
  { id: 'Estimate', label: 'Estimator', icon: Calculator },
  { id: 'Compare', label: 'Compare', icon: GitCompare },
  { id: 'Lease', label: 'Lease/Rent', icon: FileText },
  { id: 'Utilities', label: 'Utilities', icon: UtilityPole },
  { id: 'Appraisal', label: 'Appraisal', icon: ClipboardCheck },
  { id: 'Favorites', label: 'Favorites', icon: Heart },
] as const;

export const FOOTER_LINKS = [
  { id: 'About', label: 'About', icon: Info },
  { id: 'Contact', label: 'Contact', icon: Mail },
  { id: 'Legal', label: 'Legal & Disclaimer', icon: Scale },
  { id: 'License', label: 'License', icon: Shield },
] as const;
