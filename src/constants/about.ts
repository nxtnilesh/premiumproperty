import { Heart, Award, Users, Home, LucideIcon } from "lucide-react";

export interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface AchievementItem {
  number: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const CORE_VALUES: ValueItem[] = [
  {
    icon: Heart,
    title: "Client-Focused",
    description:
      "We put our clients first, ensuring every interaction exceeds expectations.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards in every aspect of our service.",
  },
  {
    icon: Users,
    title: "Integrity",
    description:
      "Honest, transparent communication builds lasting relationships.",
  },
  {
    icon: Home,
    title: "Innovation",
    description:
      "We embrace technology to enhance the property buying experience.",
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  { number: "2,500+", label: "Properties Sold" },
  { number: "5,000+", label: "Happy Clients" },
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Expert Agents" },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image:
      "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "With over 15 years in luxury real estate, Sarah founded PremiumHomes to redefine the property buying experience.",
  },
  {
    name: "Michael Chen",
    role: "Head of Sales",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Michael leads our sales team with expertise in high-end residential and commercial properties.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image:
      "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Emily develops innovative marketing strategies that showcase properties in their best light.",
  },
];
