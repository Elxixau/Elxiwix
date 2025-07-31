
// components/Experience/ExperienceCard.jsx
export default function ExperienceCard({ exp, isSelected, onClick }) {
  return (
    <div
  onClick={onClick}
  className={`cursor-pointer border p-4 rounded-3xl transition duration-300 ${
    isSelected
      ? 'border-green-500 shadow-[0_0_12px_2px_rgba(34,197,94,0.3)]'
      : 'border-gray-700 hover:border-green-400 hover:shadow-[0_0_10px_#22c55e50]'
  }`}
>
      <div className="flex justify-between items-center">
        <h1 className="text-xl text-white font-bold">{exp.title}</h1>
        {exp.icon}
      </div>
      <h1 className="text-md text-white font-medium">{exp.location}</h1>
      <p className="text-sm text-gray-300">{exp.time}</p>
      <p className="text-gray-400 my-4">{exp.status}</p>
    </div>
  );
}
