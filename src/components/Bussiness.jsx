export default function Bussiness () {
    return(
        <div id="bisnis" className="scroll-mt-28 flex justify-center px-4 py-12">
            <div className="w-full max-w-2xl">
                <div className="rounded-2xl border border-gray-800 bg-black/80 p-6 md:p-10 text-center space-y-4">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                        Tertarik untuk bekerja sama?
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
                        Saatnya wujudkan ide brilian Anda dengan dukungan teknologi mutakhir dan desain yang impactful.
                    </p>
                    <button
                        onClick={() => {
                            window.location.href =
                            "https://wa.me/6288704442416?text=Halo%2C%20saya%20ingin%20melakukan%20kerja%20sama%20dengan%20anda";
                        }}
                        className="w-full sm:w-auto px-6 py-3 rounded font-medium bg-green-400 hover:bg-green-300 text-black transition"
                        >
                        Mulai via WhatsApp
                    </button>
                </div>
            </div>
        </div>

    );
}