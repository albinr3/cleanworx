export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  price: string;
  features?: string[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  date: string;
  rating: number;
  content: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BrandPartner {
  id: string;
  name: string;
  logo: string;
}
