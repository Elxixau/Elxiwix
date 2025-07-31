import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

export default function CardProject({ image, title, description, technologies = [], onNavigate }) {
  return (
    <div className="relative rounded-3xl border border-gray-800 overflow-hidden shadow-lg bg-black   group hover:shadow-[0_0_12px_4px_rgba(34,197,94,0.5)] transition-all duration-300">
      {/* Gambar */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
        />
        {/* Tombol Navigasi */}
        <button
          onClick={onNavigate}
          className="absolute top-2 right-2 bg-green-400/80 hover:bg-green-300 text-black p-2 rounded-xl shadow transition"
        >
          <ArrowUpTrayIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Konten */}
      <div className="p-8  ">
        <h3 className="text-xl font-black text-white mb-2">{title}</h3>
        <p className="text-md font-thin text-gray-300 mb-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
