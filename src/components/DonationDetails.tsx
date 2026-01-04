import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Type definitions
interface ProgramSectionProps {
  badge: string;
  title: string;
  highlightWord: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
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
  imagePosition = 'left'
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
                fill
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

            {/* CTA Button */}
            <button className="bg-white border-2 border-purple-200 text-purple-500 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 shadow-sm hover:shadow-md">
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
const ProgramSections: FC = () => {
  const programs: Program[] = [
    {
      badge: "MONTHLY WARD VISITS",
      title: "We are Turning hospital wards into happy spaces.",
      highlightWord: "happy",
      description: "Every month, our volunteers visit pediatric wards with art materials, musical instruments, and STEM-based games. These sessions help children express themselves, ease anxiety, and rediscover the joy of being kids again even while receiving treatment.",
      buttonText: "Learn More",
      imageSrc: "https://res.cloudinary.com/da1snxdv9/image/upload/v1762952096/tori-bubbles_wm4b2x.png",
      imageAlt: "Volunteer with children during ward visit",
      imagePosition: "right"
    },
    {
      badge: "ORCHIDSAID",
      title: "No child should suffer for lack of care.",
      highlightWord: "lack",
      description: "Through OrchidsAid we provide financial and medical support to indigent families struggling with medical bills or essential supplies. No family should find children receive the care they need without financial barriers standing in the way of recovery.",
      buttonText: "Donate Now",
      imageSrc: "https://res.cloudinary.com/da1snxdv9/image/upload/v1765123255/Pie_Chart_1_gachui.png",
      imageAlt: "Happy family receiving support",
      imagePosition: "left"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
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
        />
      ))}
    </div>
  );
};

export default ProgramSections;