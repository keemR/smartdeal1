interface StructuredDataProps {
  name: string;
  description: string;
  price: string;
  regularPrice: string;
  merchant: string;
  category: string;
  image: string;
  rating: number;
  reviewCount: number;
  availability: 'InStock' | 'OutOfStock';
  validUntil: string;
}

export function generateStructuredData({
  name,
  description,
  price,
  regularPrice,
  merchant,
  category,
  image,
  rating,
  reviewCount,
  availability,
  validUntil
}: StructuredDataProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": name,
    "description": description,
    "price": price.replace('$', ''),
    "priceCurrency": "USD",
    "priceValidUntil": validUntil,
    "availability": `https://schema.org/${availability}`,
    "url": window.location.href,
    "seller": {
      "@type": "Organization",
      "name": merchant
    },
    "itemCondition": "https://schema.org/NewCondition",
    "image": image,
    "category": category,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "reviewCount": reviewCount
    }
  };
}