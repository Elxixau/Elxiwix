export default function Bottom() {
  return (
    <footer className=" bg-black/10 backdrop-blur text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand or Name */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-white text-lg font-semibold">Elxiwix </h1>
            <p className="text-sm">Transforming Ideas into Digital Reality</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm">
            {["Beranda", "Tentang", "Layanan", "Proyek"].map((item, index) => (
              <a key={index} href="#" className="hover:text-white transition">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-sm text-center">
          © {new Date().getFullYear()} Elxiwix Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
