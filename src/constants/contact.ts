import { Clock, LucideIcon, Mail, MapPin, Phone } from "lucide-react";
import { ContactNumber } from '@/constants/company';
export interface ContactItem{
    icon:LucideIcon,
    title:string,
    content:string,
    subtitle:string,
}

export const ContactInfo:ContactItem[] = [
    {
      icon: Phone,
      title: 'Call Us',
      content: ContactNumber,
      subtitle: 'Mon-Fri 9AM-6PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@premiumhomes.com',
      subtitle: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Gururgram',
      subtitle: 'Haryana'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9AM-6PM',
      subtitle: 'Sat-Sun: 10AM-4PM'
    }
  ];
