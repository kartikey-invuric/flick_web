<script setup>
// Intro section data
const introData = {
  sectionId: 'pest-control-intro',
  title:
    'Give Pests ‘The Flick’ with our Termite, Residential & Commercial Pest Control Services Services',
  subtitle:
    'Flick has protected Australian homes and businesses for more than 105 years, delivering proven pest control solutions backed by local technicians who understand your local area’s unique challenges. Whether you’re dealing with termites, cockroaches, ants, spiders, rodents, or seasonal pest problems, our team provides safe, fast and reliable treatments you can trust. With dedicated teams across Sydney, Melbourne, Brisbane, Perth, Adelaide and regional areas, we respond quickly to local pest issues using science-backed treatments and long-term prevention plans. From residential properties to large commercial facilities, Flick keeps communities protected, hygienic and pest-free..',
  introLead: 'Flick has protected',
  bgColor: 'bg-white',
  variant: 'intro',
  headingClass: 'mx-auto max-w-[1100px]',
  titleClass: 'text-[#12358e]',
  subtitleClass: 'text-[#555] tracking-[0.035em]'
}

// Services section data
const servicesData = {
  sectionId: 'services',
  title: "Flick's Unique Pest Control Services",
  subtitle: 'Explore Our Services For Your Home or Business',
  bgColor: 'bg-[#f5f5f5]',
  variant: 'default',
  cards: [
    {
      title: 'Termite Solutions',
      description:
        'Despite their size, termites are by far the most damaging pest that Aussie homes face. Termite surveys find that 1 in 3 properties in Australia will be affected by termites at some stage, which causes greater damage than fires, storms, and floods combined, causing up to $1 billion in damage to homes each year.',
      image: 'https://www.flick.com.au/wp-content/uploads/Termite-Solution.jpg',
      cardBgColor: 'bg-white',
      buttonText: 'Termite Solutions',
      link: '/services/termite-solutions'
    },
    {
      title: 'Home Protection',
      description:
        'Our Home Protection plans offer simple, affordable pest control options designed to keep families safe from the most disruptive pests. We tailor treatments to your property type, local climate, and pest risks; whether you’re dealing with termites in Queensland, spiders in Western Australia, or cockroaches in Sydney.',
      image: 'https://www.flick.com.au/wp-content/uploads/Home-Protection.jpg',
      cardBgColor: 'bg-white',
      buttonText: 'Home Pest Control',
      link: '/services/home-protection'
    },
    {
      title: '24/7 Smart Digital Rodent Control',
      description:
        'Our SMART Digital monitoring is an intelligent, environmentally-friendly pest control system that keeps an eye on things you don’t want to see. It predicts and prevents costly mouse infestations in your home because it’s the eyes and ears of your pest control professional when they can’t be there. SMART technology keeps your home, family, and pets safe from rodents year-round.',
      image: 'https://www.flick.com.au/wp-content/uploads/2401_SMART-Group-400x400px.jpg',
      cardBgColor: 'bg-white',
      buttonText: 'Smart Digital Pest Control',
      link: '/services/smart-digital-pest-control'
    },
    {
      title: 'Washroom & Hygiene Services',
      description:
        'Flick provides an extensive range of essential washroom and hygiene solutions for your workplace. Our range encourages good health and hygiene practices to help reduce the risk and spread of viruses and bacteria. Cross-contamination can occur frequently in washrooms, locker rooms, and kitchens due to microorganisms spreading quickly in moist areas along with those transmitted through airborne pathogens.',
      image: 'https://www.flick.com.au/wp-content/uploads/Washroom-Hygiene-Service.jpg',
      cardBgColor: 'bg-white',
      buttonText: 'Commercial Washroom Hygiene',
      link: '/services/washroom-hygiene'
    }
  ]
}

// Leaders section data
const leadersData = {
  sectionId: 'leaders',
  title: "Australia's Pest Control Leaders",
  subtitle: 'Staying At The Forefront Of Pest Control For Over 105 Years!',
  bgColor: 'bg-white',
  variant: 'leaders',
  cards: [
    {
      title: 'Residential Pest Control',
      description:
        "Protecting your home from unwanted pests is essential and easy with Flick’s year round Home Protection Plans. Household pests like cockroaches, ants, rats, mice, spiders, fleas, flying insects, bed bugs, bird control and termites can cause costly damage to your property and more importantly pose health risks to your family and pets. Subscribe to one of our affordable home protection plans and keep your home pest free.",
      image: 'https://www.flick.com.au/wp-content/uploads/Residential-Pest-Control.jpg',
      cardBgColor: 'bg-white',
      linkText: 'Learn more about our residential pest services',
      link: '/services/residential'
    },
    {
      title: 'Commercial Pest Control',
      description:
        'From creepy crawlies, stored product and flying insects to rodents and bed bugs, we analyse each site, the environment and risks before developing a tailored pest control plan. Our integrated pest control services use the latest technology and tailored solutions.',
      image: 'https://www.flick.com.au/wp-content/uploads/Commercial-Pest-Control.jpg',
      cardBgColor: 'bg-white',
      linkText: 'Learn more about our commercial pest services',
      link: '/services/commercial'
    },
    {
      title: 'Sustainability',
      description:
        "As Australia’s leading pest control and hygiene service provider, Flick is committed to building a healthier, safer, and more sustainable world. Through innovative, eco-friendly solutions, including non-toxic SMART technology and optimised operational practices, we protect your home and business while making a positive impact on the environment for everyone.",
      image: 'https://www.flick.com.au/wp-content/uploads/IMG1_CommittedToSustainability-1-1-scaled.jpg',
      cardBgColor: 'bg-white',
      linkText: 'Learn more about our commitment to sustainability',
      link: '/sustainability'
    }
  ]
}

// Industry section data
const industryData = {
  sectionId: 'industry',
  title: 'Pest Control Solutions For Your Industry',
  subtitle:
    'Providing Effective And Sustainable Pest Control For Australian Businesses',
  bgColor: 'bg-[#f8f9fa]',
  variant: 'industry',
  cards: [
    {
      title: 'Agricultural',
      description: '',
      icon: 'agricultural',
      cardBgColor: 'bg-[#d3dce0]',
      link: '/industries/agricultural'
    },
    {
      title: 'Education',
      description: '',
      icon: 'education',
      cardBgColor: 'bg-[#d3dce0]',
      link: '/industries/education'
    },
    {
      title: 'Health & Aged Care',
      description: '',
      icon: 'health',
      cardBgColor: 'bg-[#d3dce0]',
      link: '/industries/health-aged-care'
    },
    {
      title: 'Hospitality',
      description: '',
      icon: 'hospitality',
      cardBgColor: 'bg-[#d3dce0]',
      link: '/industries/hospitality'
    },
    {
      title: 'Local Governments',
      description: '',
      icon: 'government',
      cardBgColor: 'bg-[#d3dce0]',
      link: '/industries/local-governments'
    },
    {
      title: 'Manufacturing & Logistics',
      description: '',
      icon: 'manufacturing',
      cardBgColor: 'bg-[#d3dce0]',
      link: '/industries/manufacturing-logistics'
    },
    {
      title: 'Public Housing & Retirement Homes',
      description: '',
      icon: 'housing',
      cardBgColor: 'bg-[#d3dce0]',
      link: '/industries/public-housing'
    },
    {
      title: 'Retail & Wholesale',
      description: '',
      icon: 'retail',
      cardBgColor: 'bg-[#d3dce0]',
      link: '/industries/retail-wholesale'
    }
  ],
  footerLink: {
    text: 'commercial pest control services for your industry',
    to: '/commercial'
  }
}

// FAQ section data
const faqData = {
  sectionId: 'faq',
  title: 'Frequently Asked Questions',
  bgColor: 'bg-[#f8f9fa]',
  variant: 'faq',
  faqData: [
    {
      question: 'What types of pests does Flick treat?',
      answer:
        'Flick provides treatment for a wide range of pests including termites, ants, cockroaches, spiders, bed bugs, rats, mice, birds, fleas, and flying insects. We offer tailored solutions for both residential and commercial properties.'
    },
    {
      question: "What are Flick's Home Protection Plans?",
      answer:
        'Our Home Protection Plans are year-round pest control subscriptions designed to protect your home and family from common household pests. These plans offer flexible options, yearly inspections, and are backed by a 12-month warranty for pest covered in your plan.'
    },
    {
      question: 'How does the SMART Digital Rodent Control system work?',
      answer:
        'Flick’s SMART system uses intelligent sensors and digital monitoring to detect rodent activity 24/7. It prevents infestations by alerting our technicians early, providing an environmentally friendly and efficient rodent control solution.'
    },
    {
      question: 'What areas of the home do you treat during a visit?',
      answer:
        'Our technicians treat both the interior and exterior of your home, including entry points, roof voids, under the house, and outdoor areas where pests are likely to nest or enter.'
    },
    {
      question: 'What makes Flick different from other pest control companies?',
      answer:
        'With over 105 years of experience, innovative SMART pest control technology, eco-friendly practices, and tailored service plans, Flick stands out as Australia’s trusted leader in pest and hygiene services.'
    },
    {
      question: "Is Flick's pest control service safe for kids and pets?",
      answer:
        'Yes, Flick’s pest control services are designed with the safety of your family and pets in mind. We use the same professional-grade products in homes as we do in hospitals and childcare centres. While all pesticides carry some risk, our trained technicians use them carefully to minimise exposure. For added safety, we recommend that children, pets, and pregnant individuals stay out of treated areas during application and until the products have fully dried—typically within 3–4 hours.'
    },
    {
      question: 'How often should I book professional pest control in Australia?',
      answer:
        'Most homes benefit from a professional pest control service every 3–6 months, depending on the climate and local pest activity. Warmer regions like Queensland and NSW often require more frequent treatments due to higher humidity and year-round insect movement.'
    },
    {
      question: 'Do you offer pest control across all major Australian cities?',
      answer:
        'Yes. Flick operates nationwide with locally trained technicians in Sydney, Melbourne, Brisbane, Adelaide, Perth, Canberra and regional communities. Our team understands the pests that thrive in your area and provides fast, reliable service.'
    },
    {
      question: 'What’s included in your residential pest inspection?',
      answer:
        'Our technicians inspect internal and external areas, roof voids, subfloors, garden beds and moisture-prone zones to detect termites, cockroaches, rodents, ants and other common Australian pests. You’ll receive a clear report and recommended treatment plan.'
    }
  ],
  footerLink: {
    text: 'VIEW MORE FAQS',
    to: '/faq'
  }
};

</script>

<template>
  <div class="w-full">
    <AppHeader />

    <main>
      <HomeHero />

      <!-- Intro text above the pest control services -->
      <GenericSection
        :section-id="introData.sectionId"
        :title="introData.title"
        :subtitle="introData.subtitle"
        :intro-lead="introData.introLead"
        :bg-color="introData.bgColor"
        :variant="introData.variant"
        :heading-class="introData.headingClass"
        :title-class="introData.titleClass"
        :subtitle-class="introData.subtitleClass"
      />

      <!-- Services section -->
      <GenericSection
        :section-id="servicesData.sectionId"
        :title="servicesData.title"
        :subtitle="servicesData.subtitle"
        :cards="servicesData.cards"
        :bg-color="servicesData.bgColor"
        :variant="servicesData.variant"
      />

      <!-- Leaders section -->
      <GenericSection
        :section-id="leadersData.sectionId"
        :title="leadersData.title"
        :subtitle="leadersData.subtitle"
        :cards="leadersData.cards"
        :bg-color="leadersData.bgColor"
        :variant="leadersData.variant"
      />

      <!-- Industry section -->
      <GenericSection
        :section-id="industryData.sectionId"
        :title="industryData.title"
        :subtitle="industryData.subtitle"
        :cards="industryData.cards"
        :bg-color="industryData.bgColor"
        :variant="industryData.variant"
        :footer-link="industryData.footerLink"
      />

      <!-- Reviews section -->
      <Reviews />

      <!-- FAQ section -->
      <GenericSection
        :section-id="faqData.sectionId"
        :title="faqData.title"
        :bg-color="faqData.bgColor"
        :variant="faqData.variant"
        :faq-data="faqData.faqData"
        :footer-link="faqData.footerLink"
      />

      <TopPestSolutions />
    </main>

    <AppFooter />
  </div>
</template>