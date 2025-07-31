import React from "react";
import { Code, Paintbrush, Monitor, Check } from "lucide-react";

const services = [
  {
    title: "Fullstack Web Developer",
    description: "Membangun aplikasi web dari sisi front-end hingga back-end dengan teknologi modern.",
    icon: <Code className="w-8 h-8 text-white " />,
    points: [
      "React, Vue, Tailwind, Laravel",
      "REST API & Database",
      "Deployment & Optimization",
    ],
  },
  {
    title: "Graphic Designer",
    description: "Desain visual untuk branding, sosial media, dan kebutuhan promosi lainnya.",
    icon: <Paintbrush className="w-8 h-8 text-white" />,
    points: [
      "Logo & Brand Identity",
      "Konten Sosial Media",
      "Cetak & Digital Marketing",
    ],
  },
  {
    title: "Single Role Developer",
    description: "Peran khusus sebagai Front-end, Back-end Developer, atau UI/UX Designer.",
    icon: <Monitor className="w-8 h-8 text-white" />,
    points: [
      "Front-end: React, Vue, Next.js",
      "Back-end: Laravel, Express, PostgreSQL",
      "UI/UX: Wireframing & Design System",
    ],
  },
];

export default function Services() {
  return (
    <div className="  p-4 sm:p-8 max-w-7xl mx-auto text-center" id="layanan">
        <div className="text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-green-400 to-emerald-600 mb-4">
                Layanan
            </h1>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-14">
                Kami hadir dengan layanan yang menyeluruh, mulai dari pengembangan aplikasi web, desain visual, hingga strategi digital yang sesuai dengan kebutuhan Anda.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-2xl p-6 hover:shadow-[0_0_12px_4px_rgba(34,197,94,0.5)] transition-all duration-300"
            >
              <div className="mb-4 ">
                {service.icon}
                </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-3">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start text-gray-300 text-base">
                    <Check className="w-5 h-5 text-green-500 mt-1 mr-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </div>
  );
}
