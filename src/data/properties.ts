import { Property } from '@/types/property';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury Villa in Lonavala',
    description: 'A premium villa in the hills of Lonavala with scenic views and modern design.',
    price: 25000000,
    location: {
      address: 'Plot No. 12, Hill View Estate',
      city: 'Lonavala',
      state: 'Maharashtra',
      zipCode: '410401',
      coordinates: { lat: 18.7557, lng: 73.4070 }
    },
    details: {
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4200,
      yearBuilt: 2022,
      propertyType: 'villa',
      status: 'for-sale'
    },
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg'
    ],
    features: ['Swimming Pool', 'Garden', 'Home Automation', 'Modular Kitchen'],
    agent: {
      id: 'agent1',
      name: 'Amit Sharma',
      email: 'amit@indiarealtors.com',
      phone: '+91 98765 43210',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg'
    },
    createdAt: '2025-01-15',
    updatedAt: '2025-01-15'
  },
  {
    id: '2',
    title: 'Modern Apartment in Gurgaon',
    description: 'Spacious 3BHK in DLF Phase 5 with city views and premium amenities.',
    price: 18000000,
    location: {
      address: 'Tower B, DLF Aralias, Golf Course Road',
      city: 'Gurgaon',
      state: 'Haryana',
      zipCode: '122009',
      coordinates: { lat: 28.4224, lng: 77.0785 }
    },
    details: {
      bedrooms: 3,
      bathrooms: 3,
      sqft: 2400,
      yearBuilt: 2021,
      propertyType: 'apartment',
      status: 'for-sale'
    },
    images: [
      'https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    ],
    features: ['Clubhouse', 'Gym', 'Swimming Pool', '24x7 Security'],
    agent: {
      id: 'agent2',
      name: 'Priya Mehta',
      email: 'priya@gurgaonhomes.in',
      phone: '+91 98990 12345',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    },
    createdAt: '2025-01-10',
    updatedAt: '2025-01-10'
  },
  {
    id: '3',
    title: 'Independent House in Bangalore',
    description: 'Beautiful 4BHK house in Whitefield with private lawn and garage.',
    price: 9500000,
    location: {
      address: '23/4, Green Woods Layout, Whitefield',
      city: 'Bangalore',
      state: 'Karnataka',
      zipCode: '560066',
      coordinates: { lat: 12.9698, lng: 77.7499 }
    },
    details: {
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3000,
      yearBuilt: 2018,
      propertyType: 'apartment',
      status: 'for-sale'
    },
    images: [
      'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg',
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg'
    ],
    features: ['Garage', 'Private Garden', 'Solar Panels'],
    agent: {
      id: 'agent3',
      name: 'Sandeep Reddy',
      email: 'sandeep@blorehomes.com',
      phone: '+91 98760 45678',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg'
    },
    createdAt: '2025-01-08',
    updatedAt: '2025-01-08'
  },
  {
    id: '4',
    title: 'Seaside Apartment in Goa',
    description: 'A 2BHK premium apartment near Candolim Beach, perfect for vacation or investment.',
    price: 7500000,
    location: {
      address: 'Sunset Residency, Candolim',
      city: 'Goa',
      state: 'Goa',
      zipCode: '403515',
      coordinates: { lat: 15.5186, lng: 73.7636 }
    },
    details: {
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1400,
      yearBuilt: 2020,
      propertyType: 'apartment',
      status: 'for-sale'
    },
    images: [
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg',
      'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg'
    ],
    features: ['Beach Access', 'Balcony', 'Power Backup', 'Swimming Pool'],
    agent: {
      id: 'agent4',
      name: 'Nisha Fernandes',
      email: 'nisha@goabeachhomes.in',
      phone: '+91 88000 56789',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    },
    createdAt: '2025-01-05',
    updatedAt: '2025-01-05'
  },
  {
    id: '5',
    title: 'Heritage Bungalow in Jaipur',
    description: 'Restored Haveli-style bungalow with cultural charm and modern utilities.',
    price: 13500000,
    location: {
      address: 'Haveli No. 21, Pink City Road',
      city: 'Jaipur',
      state: 'Rajasthan',
      zipCode: '302001',
      coordinates: { lat: 26.9124, lng: 75.7873 }
    },
    details: {
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2500,
      yearBuilt: 1940,
      propertyType: 'bungalow',
      status: 'for-sale'
    },
    images: [
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg'
    ],
    features: ['Terrace', 'Original Architecture', 'Servant Quarters'],
    agent: {
      id: 'agent5',
      name: 'Ravi Malhotra',
      email: 'ravi@rajasthanheritage.com',
      phone: '+91 91234 56789',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg'
    },
    createdAt: '2025-01-03',
    updatedAt: '2025-01-03'
  }
];
