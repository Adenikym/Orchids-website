import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';


// Type definitions
interface Category {
  label: string;
  color: string;
}

interface ProgramSectionProps {
  badge: string;
  title: string;
  highlightWord: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  buttonAction?: () => void;
  categories?: Category[];
}

interface Program {
  badge: string;
  title: string;
  highlightWord: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  buttonAction?: () => void;
  categories?: Category[];
}

// Reusable Program Section Component
const ProgramSection: FC<ProgramSectionProps> = ({ 
  badge, 
  title, 
  highlightWord, 
  description, 
  buttonText, 
  imageSrc, 
  imageAlt,
  imagePosition = 'left',
  buttonAction,
  categories
}) => {
  return (
    <div className="relative py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${imagePosition === 'right' ? 'lg:grid-flow-dense' : ''}`}>
          {/* Image Column */}
          <div className={`relative ${imagePosition === 'right' ? 'lg:col-start-2' : ''}`}>
            <div className="relative rounded-3xl overflow-hidden ">
              <Image
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-cover"
                width={600}
                height={600}
              />
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-purple-300 rounded-full opacity-40 pointer-events-none hidden lg:block" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-200 rounded-full opacity-50 pointer-events-none hidden lg:block" />
          </div>

          {/* Content Column */}
          <div className={`space-y-6 ${imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
            {/* Badge */}
            <div className="inline-flex items-center">
              <span className="text-purple-400 font-bold text-sm tracking-wider uppercase">
                {badge}
              </span>
              <div className="ml-3 h-0.5 w-16 bg-purple-400" />
            </div>

            {/* Title with highlight */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
              {title.split(highlightWord)[0]}
              <span className="text-purple-400">{highlightWord}</span>
              {title.split(highlightWord)[1]}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              {description}
            </p>

            {/* Categories (if provided) */}
            {categories && categories.length > 0 && (
              <div className="space-y-3 pt-1 -mt-2">
                {categories.map((category, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-md ${category.color}`} />
                    <span className="text-gray-700 text-base">{category.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button */}
            <button 
              onClick={() => {
                console.log('Button clicked!', buttonAction);
                if (buttonAction) {
                  buttonAction();
                }
              }} 
              className="bg-white border-2 border-purple-200 text-purple-500 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {buttonText}
            </button>

           
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-200 rounded-full opacity-15 blur-3xl pointer-events-none" />
    </div>
  );
};

// Main Component with all three sections
const ProgramSections: FC<{
  openDonationModal?: () => void;
}> = ({ openDonationModal }) => {
  const programs: Program[] = [
    {
      badge: "WHY YOUR DONATION MATTERS",
      title: "Your Support Changes Lives",
      highlightWord: "Support",
      description: "Every contribution, big or small fuels our mission to help children heal through play. From buying crayons and toys to organizing therapy sessions and hospital visits, your generosity directly creates moments of joy and recovery.",
      buttonText: "Donate Now",
      imageSrc: "https://res.cloudinary.com/da1snxdv9/image/upload/v1767632132/Rectangle_15_ec7yaz.svg",
      imageAlt: "Volunteer with children during ward visit",
      imagePosition: "right",
      buttonAction: openDonationModal
    },
    {
      badge: "FINANCIAL PLAN",
      title: "Where your Donation Goes",
      highlightWord: "Donation",
      description: "We believe in full transparency. Every donation directly funds our outreach programs, play therapy sessions, volunteer training, and children's materials. You're not just giving money, you're giving hope",
      buttonText: "Donate Now",
      imageSrc: "https://res.cloudinary.com/da1snxdv9/image/upload/v1767631817/Group_87_lxs03i.svg",
      imageAlt: "Happy family receiving support",
      imagePosition: "left",
      buttonAction: openDonationModal,
      categories: [
        { label: "Activity kits and program materials.", color: "bg-purple-400" },
        { label: "Regional hubs and Operational costs", color: "bg-yellow-400" },
        { label: "Advocacy and Awareness", color: "bg-purple-200" },
        { label: "Training and Volunteer Support", color: "bg-purple-300" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {programs.map((program: Program, index: number) => (
        <ProgramSection
          key={index}
          badge={program.badge}
          title={program.title}
          highlightWord={program.highlightWord}
          description={program.description}
          buttonText={program.buttonText}
          imageSrc={program.imageSrc}
          imageAlt={program.imageAlt}
          imagePosition={program.imagePosition}
          buttonAction={program.buttonAction}
          categories={program.categories}
        />
      ))}
    </div>
  );
};

export default ProgramSections;