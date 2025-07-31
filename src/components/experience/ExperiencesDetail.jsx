import Location from '../../assets/logos/location.png';
import Calendar from '../../assets/logos/calendar.png';
import descriptions from '../../data/experienceDataDetail';


export default function ExperiencesDetail({ data }) {
   
        const content = descriptions[data?.id] || descriptions[0];


    return(
        <>
         {/* Header Section*/}
            <div className="flex justify-between items-start lg:items-center ">
                <div >
                    <h1 className="text-lg sm:text-4xl  text-white font-bold">{content.title}</h1>
                </div>

                <div className="lg:flex flex-col md:flex-row justify-center  hidden  items-start gap-2 sm:gap-4 ">
                    <div className="flex items-center">
                        <img
                        src={Location}
                        alt="Location"
                        className="w-4 h-4 mr-2 opacity-80"
                        />
                        <p className="text-xs sm:text-sm text-gray-400">{content.location}</p>
                    </div>
                    <div className="flex items-center">
                        <img 
                        src={Calendar} 
                        alt="Calendar" 
                        className="w-4 h-4 mr-2 opacity-80" />
                        <p className="text-xs sm:text-sm text-gray-400">{content.time}</p>
                    </div>
                </div>
            </div>
            <h1 className="text-sm sm:text-xl text-green-400 font-thin sm:font-medium mt-1">
                {content.role}
            </h1>
            <div className="flex  flex-row justify-start block lg:hidden items-start py-2 gap-2 sm:gap-4 ">
                    <div className="flex items-center">
                        <img
                        src={Location}
                        alt="Location"
                        className="w-4 h-4 mr-2 opacity-80"
                        />
                        <p className="text-xs sm:text-sm text-gray-400">{content.location}</p>
                    </div>

                    <div className="flex items-center">
                        <img 
                        src={Calendar} 
                        alt="Calendar" 
                        className="w-4 h-4 mr-2 opacity-80" />
                        <p className="text-xs sm:text-sm text-gray-400">{content.time}</p>
                    </div>
            </div>

                {/* Body Section*/}
            <div className="">
                <p className="text-lg text-gray-300 font-reguler py-4">{content.desc}</p>
            </div>

            {/* Fitur card */}
            <div className="max-w-6xl mx-auto  py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
            {content.features.map((feature, index) => (
                <div key={index} className=" border border-gray-800 rounded rounded-xl p-4 ">
                <div className="flex items-center justify-center mb-4">
                    {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl text-white font-black text-center">
                    {feature.title}
                </h3>
                <p className="text-gray-300 text-center text-sm sm:text-base">{feature.desc}</p>
                </div>
            ))}
            </div>

            {/* Footer Section */}
            <div className="space-y-8">
                    
                {/* Main Achievement*/}
                <div className="">
                    <h1 className=" text-2xl font-bold text-white pb-4">Main Achievement</h1>
                    <div className="space-y-4">
                        {content.ach.map((ach,index) => (
                        <div key={index} className="flex items-center border border-gray-800 rounded-xl p-4 gap-4  hover:shadow-[0_0_12px_4px_rgba(34,197,94,0.5)] transition-all duration-300">
                            <div className="min-w-10 min-h-10 w-10 h-10 border-2 border-green-300 rounded-full flex items-center justify-center shrink-0">
                            {ach.icon}
                            </div>
                            <p className="text-gray-300 text-sm md:text-base">
                                {ach.desc}
                            </p>
                        </div>
                        ))}
                </div>
                </div>

                {/* Technologies */}
                <div className="">
                    <h1 className=" text-2xl font-bold text-white pb-4">Used Technologies</h1>
                    <div  className="grid grid-cols-4 lg:grid-cols-7 gap-4">
                        {content.tech.map((tech,index)=>(
                            
                            <div key={index} className="flex justify-center border border-gray-800 rounded-xl p-2 text-gray-300 hover:shadow-[0_0_12px_4px_rgba(34,197,94,0.5)] transition-all duration-300">
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Work Samples */}
                <div className="">
                    <h1 className=" text-2xl font-bold text-white pb-4">Digital Technologies</h1>
                    <div  className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {content.sample.map((sample,index)=>(
                            
                            <div key={index} className="flex justify-center border border-gray-800 rounded-xl p-2 text-gray-300  hover:shadow-[0_0_12px_4px_rgba(34,197,94,0.5)] transition-all duration-300">
                                {sample.name}
                            </div>
                        ))}
                    </div>   
                </div>
            </div>
        </>

    );
}