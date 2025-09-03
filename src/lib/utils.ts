import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Building,
  Palette,
  HeartPulse,
  GraduationCap,
  Landmark,
  Users,
  Ship,
  Shield,
  Star,
  type LucideIcon,
} from 'lucide-react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Definimos un tipo para los atributos de la tarjeta
export type CardAttributes = {
  icon: LucideIcon;
  gradient: string;
};

// Mapeo de categorías a íconos y gradientes
const categoryMap: Record<string, { icon: LucideIcon; gradient: string }> = {
  Infraestructura: { icon: Building, gradient: 'from-blue-500 to-blue-700' },
  Cultura: { icon: Palette, gradient: 'from-purple-500 to-purple-700' },
  Salud: { icon: HeartPulse, gradient: 'from-red-500 to-red-700' },
  Educación: { icon: GraduationCap, gradient: 'from-green-500 to-green-700' },
  Economía: { icon: Landmark, gradient: 'from-yellow-500 to-yellow-700' },
  'Programas Sociales': { icon: Users, gradient: 'from-pink-500 to-pink-700' },
  Turismo: { icon: Ship, gradient: 'from-teal-500 to-teal-700' },
  Seguridad: { icon: Shield, gradient: 'from-gray-500 to-gray-700' },
  Default: { icon: Star, gradient: 'from-gray-600 to-gray-800' },
};

export function getCardAttributes(
  category: string,
  isFeatured: boolean
): CardAttributes {
  if (isFeatured) {
    return {
      icon: Star,
      gradient: 'from-amber-500 to-orange-600', // Gradiente dorado para destacadas
    };
  }
  return categoryMap[category] || categoryMap.Default;
}
