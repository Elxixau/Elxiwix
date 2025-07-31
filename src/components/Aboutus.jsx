import ProfilePicture from '../assets/images/IMG_1153.png';
import Location from '../assets/logos/location.png'
import Calendar from '../assets/logos/calendar.png'

export default function Aboutus() {
    return(
        <div id="tentang" className='scroll-mt-28'>
            <div className="text-center">
                <h1 className="text-2xl p-4  sm:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-green-400 to-emerald-600">Tentang Saya</h1>
                <p className="text-lg text-gray-400 font-medium text-center p-4 ">"Mentranformasikan Gagasan Kreatif ke dalam Solusi Digital yang Fungsional dan Berdampak."</p>
                <div className="flex justify-center pt-12">
                    <div className="w-full max-w-xs">
                        <hr className="border-t-2 border-gray-500 mx-auto" />
                    </div>
                </div>
            </div>
        

            <div className=" flex justify-center items-center ">
                <div className="grid md:grid-cols-3 gap-12 items-center max-w-7xl p-4 sm:p-8">
                    <div className="col-span-2">
                    <h1 className="text-2xl text-white font-medium mb-4">
                        Halo, saya Indra Parlindungan Hutahaean
                    </h1>
                    <p className="text-gray-400 text-lg text-justify">
                       Saya berlatar belakang Pendidikan Komputer dari Universitas Mulawarman dengan minat kuat di 
                       bidang web development, khususnya sebagai Fullstack, Frontend, dan Backend Developer. 
                       Berpengalaman sebagai freelance developer dalam membangun berbagai aplikasi web yang modern dan fungsional.
                    </p>
                    <p className="text-gray-400 text-lg mt-4 text-justify">
                        Selain kemampuan teknis, saya juga memiliki keterampilan dalam kepemimpinan, pencatatan notulen, 
                        cepat beradaptasi, mampu bekerja sama dalam tim, dan siap bekerja di bawah tekanan. 
                        Saya terus termotivasi untuk mengembangkan keahlian dalam teknologi yang berkembang pesat.
                    </p>
                    <p className="text-gray-400 text-lg mt-4 text-justify">
                         Di luar dunia coding, saya suka bermain gitar—karena terkadang inspirasi untuk solusi teknis justru datang dari petikan senar yang tidak sengaja. 
                         Kalau kode error, biasanya saya "stem dulu gitarnya", siapa tahu bug-nya ikut lurus.
                    </p>
                   
                    <div className="flex flex-wrap  items-center gap-4 mt-6">
                        <div className="flex items-center border border-gray-700  p-2 px-2 sm:px-4  rounded shadow-md">
                        <img
                            src={Location}
                            alt="Location"
                            className="w-5 h-5 mr-2 opacity-80"
                        />
                        <p className="text-sm sm:text-lg text-gray-400">Bontang, Kalimantan Timur</p>
                        </div>
                        <div className="flex items-center  p-2 px-2 sm:px-4  bg-green-500 rounded shadow-md">
                        <img 
                            src={Calendar} 
                            alt="Calendar" 
                            className="w-5 h-5 mr-2" 
                        />
                        <p className="text-sm sm:text-lg text-white">Siap Bekerja</p>
                        </div>
                    </div>
                    </div>

                    <div className="flex justify-center col-span-2  md:col-span-1 ">
                    <div className="border border-gray-700 p-6 md:p-12 rounded-lg shadow-md">
                        <img
                        src={ProfilePicture}
                        alt="Profile"
                        className="h-80 w-auto object-cover rounded-lg"
                        />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}