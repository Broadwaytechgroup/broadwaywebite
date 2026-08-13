import {
  Code2, Smartphone, Cpu, Cloud, ShieldCheck, Network, Server, Wrench,
  ShoppingCart, Radio, Lightbulb, BrainCircuit, Puzzle, Headset,
  Award, Sparkles, Gem, Users, Lock, Clock, LifeBuoy, Target,
  Building2, Landmark, HeartHandshake, Stethoscope, GraduationCap, Banknote, Store,
  Search, PenTool, CheckCircle, Rocket,
  MapPin, Phone, Mail, MessageCircle,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code2, Smartphone, Cpu, Cloud, ShieldCheck, Network, Server, Wrench,
  ShoppingCart, Radio, Lightbulb, BrainCircuit, Puzzle, Headset,
  Award, Sparkles, Gem, Users, Lock, Clock, LifeBuoy, Target,
  Building2, Landmark, HeartHandshake, Stethoscope, GraduationCap, Banknote, Store,
  Search, PenTool, CheckCircle, Rocket,
  MapPin, Phone, Mail, MessageCircle,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Code2;
}
