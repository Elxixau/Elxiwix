import amazingImg from "../assets/images/project/amazing.png";
import abouinamImg from "../assets/images/project/abouinam.png";
import libraryImg from "../assets/images/project/e_library.png";
import kendaraankuImg from "../assets/images/project/kendaraanku.png";
import selfImg from "../assets/images/project/self.png";
import elxiwixImg from "../assets/images/project/elxiwix.png";

const projects = [
  {
    id: 1,
    title: "Amazing Grace E-ticket Vol. 1",
    image: amazingImg,
    technologies: ["Laravel", "Javascript", "Bootstrap"],
    link: "https://github.com/Elxixau/amazing-grace",
    description: "Sistem e-ticketing konser rohani dengan QR Code dan validasi realtime.",
  },
  {
    id: 2,
    title: "Abouinam Event System",
    image: abouinamImg,
    technologies: ["Laravel", "Javascript", "Tailwind"],
    link: "https://github.com/Elxixau/Abouinam",
    description: "Platform lomba digital dengan sistem akun, kuis, pendaftaran, dan pembayaran manual.",
  },
  {
    id: 3,
    title: "E-Library",
    image: libraryImg,
    technologies: ["Laravel", "Bootstrap"],
    link: "https://github.com/Elxixau/E-Library-book-Catalouge-",
    description: "Perpustakaan digital untuk mengelola koleksi buku dan pencarian cerdas.",
  },
  {
    id: 4,
    title: "Kendaraanku",
    image: kendaraankuImg,
    technologies: ["Laravel", "Tailwind"],
    link: "https://github.com/Elxixau/KendaraanKu",
    description: "Aplikasi manajemen kendaraan pribadi dan perusahaan dengan koordinat kendaraan.",
  },
  {
    id: 5,
    title: "SelfPhoto",
    image: selfImg,
    technologies: ["Laravel", "JavaScript", "Tailwind"],
    link: "https://github.com/Elxixau/Selfphoto",
    description: "Sistem SelfPhoto dengan payment gateway dan cloud gallery.",
  },
  {
    id: 6,
    title: "Elxiwix",
    image: elxiwixImg,
    technologies: ["React", "Tailwind"],
    link: "/project/elxiwix",
    description: "Aplikasi manajemen kendaraan pribadi dan perusahaan dengan fitur pencatatan lengkap.",
  },
];

export default projects;
