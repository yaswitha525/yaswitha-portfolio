import React from 'react';
import { Headphones, ChefHat, Compass, Sparkles, BookOpen, Utensils, MapPin } from 'lucide-react';

interface Hobby {
  number: string;
  title: string;
  tag: string;
  icon: React.ElementType;
  secondaryIcon: React.ElementType;
  image: string;
  imageAlt: string;
  accent: {
    badge: string;
    text: string;
    border: string;
    glow: string;
  };
}

const hobbies: Hobby[] = [
  {
    number: '01',
    title: 'Listening to podcasts & learning new things',
    tag: 'Knowledge & Curiosity',
    icon: Headphones,
    secondaryIcon: BookOpen,
    image: '/assets/hobbies/hobby_podcasts.jpg',
    imageAlt: 'Desk setup with wireless headphones, warm coffee, and notebook for podcast learning',
    accent: {
      badge: 'bg-amber-400/15 text-amber-300 border-amber-400/30',
      text: 'text-amber-300',
      border: 'hover:border-amber-400/40',
      glow: 'group-hover:shadow-[0_0_25px_rgba(254,208,73,0.2)]',
    },
  },
  {
    number: '02',
    title: 'Cooking',
    tag: 'Culinary Creativity',
    icon: ChefHat,
    secondaryIcon: Utensils,
    image: '/assets/hobbies/hobby_cooking.jpg',
    imageAlt: 'Gourmet cooking with fresh herbs, pan on stove, and culinary ingredients',
    accent: {
      badge: 'bg-rose-400/15 text-rose-300 border-rose-400/30',
      text: 'text-rose-300',
      border: 'hover:border-rose-400/40',
      glow: 'group-hover:shadow-[0_0_25px_rgba(244,114,182,0.2)]',
    },
  },
  {
    number: '03',
    title: 'Travelling & exploring new places',
    tag: 'Adventure & Wanderlust',
    icon: Compass,
    secondaryIcon: MapPin,
    image: '/assets/hobbies/hobby_travel.jpg',
    imageAlt: 'Scenic alpine mountain overlook during golden hour with backpack and camera',
    accent: {
      badge: 'bg-cyan-400/15 text-cyan-300 border-cyan-400/30',
      text: 'text-cyan-300',
      border: 'hover:border-cyan-400/40',
      glow: 'group-hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]',
    },
  },
];

export const BeyondCodeSection: React.FC = () => {
  return (
    <section id="beyond-code" className="space-y-8">
      {/* Section Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-300 uppercase mb-2">
          <span>06</span>
          <span>•</span>
          <span>Hobbies</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          My <span className="italic text-amber-200">Hobbies</span> & Interests
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mt-2 font-sans">
          What sparks my curiosity, creativity, and energy outside of engineering.
        </p>
      </div>

      {/* 3 Visually Rich Hobby Cards with Images and Icons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          const SecondaryIcon = hobby.secondaryIcon;
          return (
            <div
              key={hobby.number}
              className={`group relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:bg-white/[0.09] hover:-translate-y-1.5 hover:shadow-2xl ${hobby.accent.border} ${hobby.accent.glow} overflow-hidden`}
            >
              {/* Image banner with overlay */}
              <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden mb-4 border border-white/10 shadow-md">
                <img
                  src={hobby.image}
                  alt={hobby.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Number badge on top left */}
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-300 border border-white/20">
                    {hobby.number}
                  </span>
                </div>

                {/* Floating glowing icon on top right */}
                <div className="absolute top-3 right-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center border backdrop-blur-md shadow-md transition-transform duration-300 group-hover:scale-110 ${hobby.accent.badge}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Tag pill at bottom left of image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm border border-white/15 text-white/90 flex items-center gap-1.5">
                    <SecondaryIcon className="w-3 h-3 text-amber-300" />
                    <span>{hobby.tag}</span>
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="pt-1 pb-1">
                <h3 className="font-serif text-lg sm:text-xl text-white font-medium group-hover:text-amber-100 transition-colors leading-snug">
                  {hobby.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
