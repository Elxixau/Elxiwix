// src/data/experienceData.js
import { CheckIcon, ClockIcon, CurrencyDollarIcon, UserIcon } from '@heroicons/react/24/outline';


    const descriptions = 
    {

        0: {
            title : 'Freelance - Elxiwix', 
            location : 'Samarinda, Kalimantan Timur',
            time : 'Feb 2022 - Sekarang',
            role : 'Fullstack Web Developer',
            desc: 'Terampil dalam merancang dan mengembangkan situs web responsif menggunakan HTML, CSS, JavaScript, serta framework modern seperti Laravel dan Tailwind CSS. Mahir dalam mengubah desain dari Figma menjadi halaman web yang interaktif dan fungsional. Berpengalaman dalam membangun fitur frontend dan backend yang fokus pada kinerja aplikasi, keamanan data, serta menciptakan pengalaman pengguna (UX) yang intuitif dan optimal.',
            features: 
                        [{
                            title: 'Individu/ Tim',
                            icon: <UserIcon className="w-10 h-10 text-emerald-500" />,
                            desc: 'Action'
                        },
                        {
                            title: 'Conditional',
                            icon: <CurrencyDollarIcon className="w-10 h-10 text-indigo-500" />,
                            desc: 'Budget'
                        },
                        {
                            title: 'Situasional',
                            icon: <ClockIcon className="w-10 h-10 text-yellow-500" />,
                            desc: 'Duration'
                        }],
            ach: 
                    [{
                        icon:  <CheckIcon className="w-5 h-5 text-green-600" />,
                        desc: 'Mengubah desain dari Figma menjadi halaman web responsif dengan struktur kode yang bersih dan konsisten.'
                    },
                    {
                        icon:  <CheckIcon className="w-5 h-5 text-green-600" />,
                        desc: 'Membangun aplikasi web Laravel dengan fitur autentikasi, pengelolaan data dinamis, dan integrasi layanan pihak ketiga.'
                    },
                    {
                        icon:  <CheckIcon className="w-5 h-5 text-green-600" />,
                        desc: 'Menerapkan prinsip UX dan praktik terbaik dalam pengembangan frontend untuk meningkatkan kenyamanan dan interaksi pengguna.'
                    }],
            tech: 
                    [  { name: 'HTML'}, { name: 'CSS'}, { name: 'PHP'}, { name: 'Javascript'}, { name: 'Laravel'}, { name: 'React'}, { name: 'Figma'}],
            sample: [  { name: 'Aplikasi Web Dinamis'}, { name: 'Sistem Informasi Interaktif'}, { name: 'Platform Pemesanan & Pembayaran Online'}],
        },

        1: {
            title : 'Freelance - Elxiwix', 
            location : 'Samarinda, Kalimantan Timur',
            role : 'Design Graphic',
            time : 'Feb 2024 - Sekarang',
            desc: 'Berpengalaman dalam menciptakan desain visual untuk berbagai kebutuhan digital dan cetak. Terampil menggunakan perangkat lunak desain seperti Adobe Illustrator, Photoshop, dan Figma untuk menghasilkan karya yang estetis dan komunikatif. Fokus pada pengembangan identitas visual, materi promosi, serta tampilan UI yang user-friendly dan profesional.',
            features: 
                        [{
                            title: 'Individu',
                            icon: <UserIcon className="w-10 h-10 text-emerald-500" />,
                            desc: 'Action'
                        },
                        {
                            title: 'Conditional',
                            icon: <CurrencyDollarIcon className="w-10 h-10 text-indigo-500" />,
                            desc: 'Budget'
                        },
                        {
                            title: 'Situasional',
                            icon: <ClockIcon className="w-10 h-10 text-yellow-500" />,
                            desc: 'Duration'
                        }],
                ach: 
                    [{
                        icon: <CheckIcon className="w-5 h-5 text-green-600" />,
                        desc: 'Merancang identitas merek lengkap termasuk logo, palet warna, dan tipografi untuk berbagai usaha kecil.'
                    },
                    {
                        icon: <CheckIcon className="w-5 h-5 text-green-600" />,
                        desc: 'Membuat materi promosi digital seperti banner media sosial, poster event, dan infografis.'
                    },
                    {
                        icon: <CheckIcon className="w-5 h-5 text-green-600" />,
                        desc: 'Mendesain UI untuk aplikasi web menggunakan Figma dan mendampingi tim developer dalam implementasi.'
                    }],
            tech: 
                    [{ name: 'Figma'}, { name: 'Photoshop'},  { name: 'ilustrator'}, { name: 'Canva'}, { name: 'CorelDraw'}],
            sample: 
                    [{ name: 'Brand Identity'}, { name: 'Social Media Campaign'}, { name: 'UI Design for Web/App'}],
        },
        
        2: {
            title : 'Fulltime - Pendikom', 
            location : 'Samarinda, Kalimantan Timur',
            role : 'Asisten Praktikum',
            time : 'Aug 2024 - Sep 2024',
            desc: 'Membimbing mahasiswa dalam sesi praktikum mata kuliah Visual Programming dan Desain Komputer. Memberikan panduan teknis, membantu troubleshooting, serta mendukung dosen dalam evaluasi dan penilaian tugas mahasiswa.',
            features: 
                        [{
                            title: 'Individu',
                            icon: <UserIcon className="w-10 h-10 text-emerald-500" />,
                            desc: 'Action'
                        },
                        {
                            title: '-',
                            icon: <CurrencyDollarIcon className="w-10 h-10 text-indigo-500" />,
                            desc: 'Budget'
                        },
                        {
                            title: '1Jp/ Hari',
                            icon: <ClockIcon className="w-10 h-10 text-yellow-500" />,
                            desc: 'Duration'
                        }],
                ach: 
                    [{
                        icon: <CheckIcon className="w-5 h-5 text-green-600" />,
                        desc: 'Membantu lebih dari 60 mahasiswa memahami konsep dasar pemrograman visual dengan pendekatan praktis.'
                    },
                    {
                        icon: <CheckIcon className="w-5 h-5 text-green-600" />,
                        desc: 'Membuat modul praktikum tambahan dan dokumentasi langkah-langkah debugging aplikasi.'
                    },
                    {
                        icon: <CheckIcon className="w-5 h-5 text-green-600" />,
                        desc: 'Menjadi penghubung antara dosen dan mahasiswa untuk konsultasi teknis dan asistensi tugas.'
                    }],
            tech: 
                    [{ name: 'Python'}, { name: 'PyQt5'},  { name: 'PyGUI'}, { name: 'GitHub'}, { name: 'Git'}],
            sample: 
                    [{ name: 'Aplikasi Inventaris Barang (GUI)'}, { name: 'Sistem Reservasi Sederhana'}, { name: 'Dashboard Desktop dengan PyQt'}],
        },
            
    };

export default descriptions;
