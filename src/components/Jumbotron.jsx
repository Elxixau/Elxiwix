import { Typewriter } from 'react-simple-typewriter';
import { CodeBracketIcon, PencilIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Jumbotron() {
    


    const features = [
        {
        title: 'Pengembangan',
        icon: <CodeBracketIcon className="w-10 h-10 text-emerald-500" />,
        desc: 'Laravel, React, Flask',
        outline: "hover:border-green-500"
        },
        {
        title: 'Desain',
        icon: <PencilIcon className="w-10 h-10 text-indigo-500" />,
        desc: 'Figma, Lunacy, Adobe XD',
        outline: "hover:border-indigo-500"
        },
        {
        title: 'Inovasi',
        icon: <SparklesIcon className="w-10 h-10 text-yellow-500" />,
        desc: 'Web3, Composable Architecture, Serverless, Edge Computing',
        outline: "hover:border-yellow-500"
        }
    ];

  return (
    <div  className="flex justify-center items-center min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl text-center">
        
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-2">Halo, saya</h1>
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-green-400 to-emerald-600">
            Indra&nbsp;
            <span className="hidden md:inline">P.</span>
            <span className="block md:hidden inline">Parlindungan</span>&nbsp;<br className="block sm:hidden" />Hutahaean
        </h1>


        <div className="text-xl sm:text-2xl lg:text-3xl font-thin text-green-200 mt-4 py-4">
          <Typewriter
            words={['Full-Stack Web Developer', 'UI/UX Designer', 'Graphic Designer']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={80}
            delaySpeed={2000}
          />
        </div>

        <p className="max-w-4xl mx-auto text-gray-400 mt-4 px-2 text-sm sm:text-base">
          Pengembang web dengan pengalaman lebih dari 3 tahun dalam membangun aplikasi menggunakan Laravel dan React modern. Terampil dalam merancang sistem backend yang efisien serta antarmuka frontend yang responsif dan estetis. Fokus pada performa, keamanan, dan pengalaman pengguna.
        </p>

        {/* Fitur card */}
        <div className="max-w-6xl mx-auto px-2 sm:px-4 py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`border border-gray-700 shadow-lg rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 ${feature.outline}`}
            >
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl text-gray-300 font-semibold text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-center text-sm sm:text-base">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Scroll section */}
        <div className="flex flex-col items-center">
          <p className="text-white text-base sm:text-lg mb-2">Scroll to Explore</p>
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-green-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}
