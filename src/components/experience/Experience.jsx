import ExperiencesDetail from './ExperiencesDetail';
import ExperienceCard from './ExperienceCard';
import { useState } from 'react';

export default function Experience() {
  const experience = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>,
      title: 'Freelance - Elxiwix',
      location: 'WFH - SMD, Kalimantan Timur',
      time: 'Feb 2022 - Sekarang',
      status: 'Fullstack Web Developer',
      id: 0,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>,
      title: 'Freelance - Elxiwix',
      location: 'WFH - SMD, Kalimantan Timur',
      time: 'Feb 2024 - Sekarang',
      status: 'Design Graphic',
      id: 1,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>,
      title: 'Fulltime - Pendikom',
      location: 'UNMUL - SMD, Kalimantan Timur',
      time: 'Aug 2024 - Sep 2024',
      status: 'Asisten Praktikum - Pemrograman Visual',
      id: 2,
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    < >
      <div id="pengalaman" className=" scroll-mt-28 text-center">
        <h1 className="text-2xl p-4  sm:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-green-400 to-emerald-600">Pengalaman </h1>
        <p className="text-lg text-gray-400 font-medium text-center p-4 ">"Menjelajahi peluang, menyelesaikan tantangan, dan tumbuh bersama setiap proyek.</p>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 sm:gap-8 max-w-7xl w-full min-h-screen p-4 sm:p-8">
          {/* Bagian Kiri */}
          <div className="col-span-4 lg:col-span-1 space-y-4">
            {experience.map((exp, index) => (
              <ExperienceCard
                key={index}
                exp={exp}
                isSelected={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>

          {/* Bagian Kanan */}
          <div className="col-span-4 lg:col-span-3 border border-gray-700 p-4 sm:p-8 rounded-3xl">
            <ExperiencesDetail data={experience[selectedIndex]} />
          </div>
        </div>
      </div>

      <div className="flex justify-center py-8">
        <div>
          <h1 className="text-2xl p-4  sm:text-4xl lg:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-green-400 to-emerald-600r">Achievement</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-8 max-w-7xl w-full p-4 sm:p-8">
            <div className="flex justify-start items-center gap-4 border border-gray-700 rounded-xl p-4  hover:shadow-[0_0_12px_4px_rgba(34,197,94,0.5)] transition-all duration-300">
              <div className="bg-indigo-300 rounded-md p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold text-white">Sertifikasi Teknisi Komputer BNSP</p>
              <p className="text-md font-thin text-white">Dinas Ketenagakerjaan - Kota Bontang</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 border border-gray-700 rounded-xl p-4  hover:shadow-[0_0_12px_4px_rgba(34,197,94,0.5)] transition-all duration-300">
              <div className="bg-blue-400 rounded-md p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold text-white">1st Place App Development - Smart IT Competition</p>
              <p className="text-md font-thin text-white">Entitas Mahasiswa D3 TI - Universitas Sebelas Maret Surakarta</p>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </>
    
  );
}
