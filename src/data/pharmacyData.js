export const pharmacyInfo = {
  name: "AZ Pharmacy",
  tagline: "Your Health, Our Priority.",
  shortBio: "Welcome to AZ Pharmacy, your destination for everyday healthcare, genuine medicines, wellness, and personal care essentials. We aim to provide a welcoming pharmacy experience with a focus on customer care, quality products, and helpful service.",
  phone: "+92 332 5479257",
  phoneRaw: "+923325479257",
  whatsapp: "+92 332 5479257",
  whatsappRaw: "923325479257",
  email: "info@azpharmacy.com",
  address: "XJH9+9Q",
  city: "Bannu, Pakistan",
  fullAddress: "XJH9+9Q Bannu, Pakistan",
  hours: {
    weekdays: "Monday – Friday: 8:00 AM – 9:00 PM",
    saturday: "Saturday: 9:00 AM – 8:00 PM",
    sunday: "Sunday: 10:00 AM – 6:00 PM",
    holiday: "Public Holidays: 10:00 AM – 4:00 PM"
  },
  emergencyNote: "For urgent medical emergencies, please dial 1122 or visit your nearest emergency room immediately.",
  googleMapsUrl: "https://maps.google.com/?q=XJH9%2B9Q+Bannu,+Pakistan",
  mapEmbedUrl: "https://maps.google.com/maps?q=XJH9%2B9Q+Bannu,+Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed",
  socialLinks: {
    facebook: "https://facebook.com/azpharmacy",
    instagram: "https://instagram.com/azpharmacy"
  }
};

export const categories = [
  {
    id: "all",
    name: "All Products",
    description: "Browse our complete range of pharmaceutical and healthcare essentials.",
    icon: "SparklesIcon"
  },
  {
    id: "medicines",
    name: "Medicines",
    description: "Everyday medicines and healthcare essentials. Prescription medicines dispensed subject to valid doctor's prescription.",
    icon: "PillIcon"
  },
  {
    id: "vitamins",
    name: "Vitamins & Supplements",
    description: "Products for everyday nutritional and wellness needs from certified manufacturers.",
    icon: "HeartPulseIcon"
  },
  {
    id: "supplies",
    name: "Medical Supplies",
    description: "First-aid essentials, bandages, antiseptics, and everyday clinic supplies.",
    icon: "ShieldCheckIcon"
  },
  {
    id: "baby",
    name: "Baby Care",
    description: "Gentle baby care, hygiene, pediatrician-recommended creams, and essentials.",
    icon: "BabyIcon"
  },
  {
    id: "personal",
    name: "Personal Care",
    description: "Personal hygiene, dermatological skincare, dental care, and grooming.",
    icon: "SparklesIcon"
  },
  {
    id: "equipment",
    name: "Healthcare Equipment",
    description: "Selected health monitoring devices, digital thermometers, and blood pressure monitors.",
    icon: "ActivityIcon"
  }
];

export const products = [
  // Medicines
  {
    id: 1,
    name: "Paracetamol 500mg Tablets",
    category: "medicines",
    categoryLabel: "Medicines",
    description: "Effective temporary relief of mild to moderate pain, headaches, and fever reduction.",
    details: "Pack of 20 tablets. Fast acting formula. Always read the label and follow packaging directions.",
    availability: "In Stock",
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Ibuprofen 400mg Softgels",
    category: "medicines",
    categoryLabel: "Medicines",
    description: "Anti-inflammatory pain reliever for muscle aches, back pain, and fever reduction.",
    details: "Pack of 30 rapid liquid-filled capsules. Take with or after food. Inquire with pharmacist for contraindications.",
    availability: "In Stock",
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Cetirizine 10mg Allergy Relief",
    category: "medicines",
    categoryLabel: "Medicines",
    description: "24-hour non-drowsy relief from seasonal allergies, hay fever, sneezing, and runny nose.",
    details: "Pack of 14 film-coated tablets. Suitable for adults and children over 6 years.",
    availability: "In Stock",
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Amoxicillin 500mg Capsules",
    category: "medicines",
    categoryLabel: "Medicines",
    description: "Broad-spectrum antibacterial medication for prescribed bacterial infections.",
    details: "Requires valid doctor's prescription. Complete full course as prescribed by your physician.",
    availability: "Prescription Required",
    prescriptionRequired: true,
    image: "https://images.unsplash.com/photo-1576073719676-aa955fc6b889?auto=format&fit=crop&w=600&q=80"
  },

  // Vitamins & Supplements
  {
    id: 5,
    name: "Vitamin C 1000mg + Zinc Effervescent",
    category: "vitamins",
    categoryLabel: "Vitamins & Supplements",
    description: "Immune defense booster with antioxidant properties in refreshing citrus flavor.",
    details: "Tube of 20 effervescent tablets. Dissolve one in a glass of water daily.",
    availability: "In Stock",
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Vitamin D3 2000 IU Softgels",
    category: "vitamins",
    categoryLabel: "Vitamins & Supplements",
    description: "Supports strong bones, calcium absorption, and healthy immune function.",
    details: "60 softgels. High bio-availability formula in extra virgin olive oil base.",
    availability: "In Stock",
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Omega-3 Triple Strength Fish Oil",
    category: "vitamins",
    categoryLabel: "Vitamins & Supplements",
    description: "Concentrated EPA & DHA fatty acids supporting cardiovascular and brain health.",
    details: "90 enteric-coated softgels with zero fishy aftertaste. Molecularly distilled.",
    availability: "In Stock",
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Daily Complete Multivitamin for Adults",
    category: "vitamins",
    categoryLabel: "Vitamins & Supplements",
    description: "Comprehensive blend of 24 essential vitamins and minerals for sustained daily energy.",
    details: "100 tablets. Gluten-free, non-GMO. Ideal for active lifestyles and general nutritional balance.",
    availability: "In Stock",
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=600&q=80"
  },

  // Medical Supplies
  {
    id: 9,
    name: "Comprehensive First Aid Kit (60-Piece)",
    category: "supplies",
    categoryLabel: "Medical Supplies",
    description: "Emergency preparedness kit for homes, vehicles, and workplace minor injuries.",
    details: "Includes adhesive bandages, sterile gauze, antiseptic wipes, medical tape, tweezers, and scissors.",
    availability: "In Stock",
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "Sterile Gauze Pads & Conforming Bandages",
    category: "supplies",
    categoryLabel: "Medical Supplies",
    description: "Ultra-absorbent sterile dressing for wound care and minor post-op protection.",
    details: "Box of 25 individually wrapped 4x4 inch sterile pads. Breathable cotton weave.",
    availability: "In Stock",
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    name: "Povidone Iodine Antiseptic Solution",
    category: "supplies",
    categoryLabel: "Medical Supplies",
    description: "Hospital-grade antiseptic topical solution for cleansing minor cuts and abrasions.",
    details: "100ml bottle with controlled dropper tip. Kills bacteria, fungi, and viruses on contact.",
    availability: "In Stock",
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80"
  },

  // Baby Care
  {
    id: 12,
    name: "Gentle Baby Moisturizing Wash & Shampoo",
    category: "baby",
    categoryLabel: "Baby Care",
    description: "Tear-free, hypoallergenic formula enriched with natural oat extract for delicate skin.",
    details: "400ml pump bottle. Pediatrician tested, soap-free, dye-free, and paraben-free.",
    availability: "In Stock",
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    name: "Zinc Oxide Diaper Rash Relief Cream",
    category: "baby",
    categoryLabel: "Baby Care",
    description: "Fast-acting protective barrier cream that soothes and helps heal diaper rash irritation.",
    details: "100g tube. Contains 40% zinc oxide for immediate relief and overnight comfort.",
    availability: "In Stock",
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    name: "Infant Electrolyte Oral Rehydration Solution",
    category: "baby",
    categoryLabel: "Baby Care",
    description: "Specially formulated hydration fluid to quickly replenish fluids and minerals lost during illness.",
    details: "500ml ready-to-use liquid (Unflavored / Apple). Suitable for infants and toddlers.",
    availability: "In Stock",
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80"
  },

  // Personal Care
  {
    id: 15,
    name: "Ceramide Hydrating Daily Face & Body Lotion",
    category: "personal",
    categoryLabel: "Personal Care",
    description: "Dermatologist-developed barrier repair cream with 3 essential ceramides and hyaluronic acid.",
    details: "473ml pump dispenser. Non-comedogenic, fragrance-free, suitable for eczema-prone skin.",
    availability: "In Stock",
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 16,
    name: "Broad Spectrum SPF 50+ Sunscreen Gel",
    category: "personal",
    categoryLabel: "Personal Care",
    description: "Lightweight, non-greasy UVA/UVB mineral protection suitable for sensitive skin.",
    details: "80ml tube. Water resistant for 80 minutes. Zero white cast.",
    availability: "In Stock",
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 17,
    name: "Enamel Protection & Sensitive Care Toothpaste",
    category: "personal",
    categoryLabel: "Personal Care",
    description: "Clinically proven desensitizing formula for sensitive teeth and cavity protection.",
    details: "75ml tube with active potassium nitrate and fluoride. Fresh mint flavor.",
    availability: "In Stock",
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=600&q=80"
  },

  // Healthcare Equipment
  {
    id: 18,
    name: "Automatic Upper Arm Blood Pressure Monitor",
    category: "equipment",
    categoryLabel: "Healthcare Equipment",
    description: "Clinically validated digital BP machine with irregular heartbeat detection.",
    details: "Large backlit LCD screen, 2-user memory (99 readings each), comfortable wide-range cuff.",
    availability: "In Stock",
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 19,
    name: "Non-Contact Infrared Forehead Thermometer",
    category: "equipment",
    categoryLabel: "Healthcare Equipment",
    description: "Instant 1-second temperature scanning for infants, children, and adults.",
    details: "Color-coded fever indicator, silent mode for sleeping babies, memory recall for 32 readings.",
    availability: "In Stock",
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 20,
    name: "Fingertip Pulse Oximeter",
    category: "equipment",
    categoryLabel: "Healthcare Equipment",
    description: "Accurate SpO2 blood oxygen saturation and pulse rate monitor with OLED display.",
    details: "Includes lanyard and batteries. Auto-power off after 8 seconds of inactivity.",
    availability: "In Stock",
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80"
  }
];

export const services = [
  {
    id: "dispensing",
    title: "Prescription Medicine Dispensing",
    subtitle: "Safe, accurate, and regulated medication dispensing.",
    description: "We dispense prescription medications following rigorous professional checks and verification. Our pharmacists review dosage, instructions, and potential drug interactions to ensure your safety.",
    badge: "Licensed Pharmacist",
    icon: "PillIcon",
    points: [
      "Thorough review of prescriptions for safety and dosage accuracy",
      "Clear counseling on proper timing and administration",
      "Refill coordination with your healthcare provider",
      "Confidential handling of all medical records"
    ],
    ctaText: "Inquire About a Prescription",
    ctaAction: "contact"
  },
  {
    id: "availability",
    title: "Medicine Availability Inquiries",
    subtitle: "Quick phone and WhatsApp stock checks.",
    description: "Looking for a specific prescription or hard-to-find medication? Avoid unnecessary trips — contact us directly via phone or WhatsApp to verify immediate availability or request special ordering.",
    badge: "Instant Support",
    icon: "SearchIcon",
    points: [
      "Direct WhatsApp inquiries with fast response times",
      "Prompt stock status checks before you visit",
      "Special procurement for hard-to-find medications",
      "Notification when backordered items arrive"
    ],
    ctaText: "Check Availability on WhatsApp",
    ctaAction: "whatsapp"
  },
  {
    id: "guidance",
    title: "Healthcare Product Guidance",
    subtitle: "Helpful, attentive assistance for everyday wellness.",
    description: "Our dedicated pharmacy team is always ready to help you navigate over-the-counter options, first-aid products, and daily health essentials so you can choose the right products for your family.",
    badge: "Friendly Support",
    icon: "StethoscopeIcon",
    points: [
      "Guidance on over-the-counter remedy selection",
      "First-aid care and wound dressing recommendations",
      "Medical supplies advice for caregivers",
      "Clear explanation of product labels and storage"
    ],
    ctaText: "Speak With Our Team",
    ctaAction: "call"
  },
  {
    id: "wellness",
    title: "Vitamins & Wellness Consultation",
    subtitle: "Targeted nutritional supplements for active health.",
    description: "Explore reputable, high-potency vitamins and dietary supplements tailored to your lifestyle. We help explain ingredients and recommend products that support your specific wellness goals.",
    badge: "Certified Quality",
    icon: "HeartPulseIcon",
    points: [
      "Certified multivitamins and dietary supplements",
      "Immune support and seasonal defense formulas",
      "Senior, pediatric, and prenatal nutritional options",
      "Transparent ingredient sourcing and certifications"
    ],
    ctaText: "Explore Vitamins",
    ctaAction: "products-vitamins"
  },
  {
    id: "supplies",
    title: "First-Aid & Medical Supplies",
    subtitle: "Complete home and workplace emergency supplies.",
    description: "We stock a full range of hospital-grade wound dressings, sterile bandages, antiseptics, and monitoring devices to keep your household or office fully prepared for minor medical emergencies.",
    badge: "Essential Care",
    icon: "ShieldCheckIcon",
    points: [
      "Complete home and travel first aid kits",
      "Post-surgical dressings and sterile gauze",
      "Digital thermometers, BP cuffs, and pulse oximeters",
      "Antiseptic washes, tapes, and splints"
    ],
    ctaText: "View Medical Supplies",
    ctaAction: "products-supplies"
  },
  {
    id: "delivery",
    title: "Convenient Home Delivery",
    subtitle: "Safe doorstep delivery for local residents.",
    description: "For customers unable to visit our location, we offer local doorstep delivery within our designated community service zone. Call or WhatsApp our counter to confirm eligibility, timing, and terms.",
    badge: "Local Service",
    icon: "TruckIcon",
    points: [
      "Available within local city zones (confirm via phone)",
      "Safe and temperature-conscious packaging",
      "Same-day delivery for eligible daytime orders",
      "Valid prescription verification required prior to dispatch"
    ],
    ctaText: "Inquire About Delivery",
    ctaAction: "contact"
  }
];

export const values = [
  {
    title: "Customer Care",
    description: "We treat every customer with utmost respect, patient attention, and personalized care.",
    icon: "HeartPulseIcon"
  },
  {
    title: "Quality Assurance",
    description: "All pharmaceuticals and wellness items are sourced exclusively from licensed, verified distributors.",
    icon: "ShieldCheckIcon"
  },
  {
    title: "Integrity & Trust",
    description: "We provide clear, honest, and scientifically accurate product information with no inflated claims.",
    icon: "StethoscopeIcon"
  },
  {
    title: "Accessibility",
    description: "Convenient hours, central location, and instant communication via direct call and WhatsApp.",
    icon: "ClockIcon"
  }
];

export const faqs = [
  {
    question: "Do I need a prescription to purchase medications?",
    answer: "Prescription medications legally require a valid, current prescription from a licensed healthcare provider before dispensing. However, we have a broad selection of over-the-counter (OTC) medicines, pain relievers, allergy medications, and first-aid supplies available without a prescription."
  },
  {
    question: "How can I check if a specific medication is in stock?",
    answer: "The fastest way is to send us a message on WhatsApp or give us a quick call at +1 (555) 234-5678. Our staff can verify immediate shelf stock or place a rapid order with our pharmaceutical distributor."
  },
  {
    question: "Do you offer home delivery?",
    answer: "Yes, we provide local doorstep delivery within our designated neighborhood zones. Please contact our counter to confirm your delivery address and schedule."
  },
  {
    question: "Can your pharmacists give medical advice?",
    answer: "Our licensed pharmacists provide guidance on medication usage, dosage instructions, side effects, and over-the-counter recommendations. For diagnosis of medical conditions or changes to prescription therapies, please consult your physician."
  }
];
