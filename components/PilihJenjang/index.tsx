// app/components/PilihJenjang/index.tsx

import React from 'react';
import Image from 'next/image';

// --- DATA UNTUK KARTU ---
// Path gambar sekarang menunjuk ke folder /public/images/
const educationLevels = [
    {
        id: 'tk',
        title: 'TK',
        description: 'TK Telkom memberikan pengalaman pembelajaran yang seru dan menarik di masa usia dini ✨',
        imageUrl: '/images/tk.jpg',
    },
    {
        id: 'sd',
        title: 'SD',
        description: 'SD Telkom sebagai langkah awal dalam mengembangkan fondasi pendidikan yang kokoh 🌱',
        imageUrl: '/images/sd.jpeg',
    },
    {
        id: 'smp',
        title: 'SMP',
        description: 'Nikmati pengalaman belajar yang berkualitas di SMP Telkom dengan komunitas yang dinamis 🧑‍🔬',
        imageUrl: '/images/smp.jpeg',
    },
    {
        id: 'sma',
        title: 'SMA',
        description: 'Dapatkan kesempatan untuk mengembangkan potensi akademik dan non-akademik di SMA Telkom 🎓',
        imageUrl: '/images/sma.jpeg',
    },
    {
        id: 'smk',
        title: 'SMK',
        description: 'Dapatkan pendidikan kejuruan di SMK Telkom yang berfokus pada persiapan karir yang kokoh 💼',
        imageUrl: '/images/smk.jpeg',
    },
];

const PilihJenjang = () => {
    return (
        <div className="bg-white p-8 sm:p-12 rounded-xl shadow-lg max-w-6xl w-full">
            <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                    Silakan pilih jenjang yang ingin kamu masuki
                </h1>
                <p className="mt-2 text-gray-500">
                    Sebelum kamu memilih sekolah, pilih jenjangmu dulu, yuk!
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {educationLevels.map((level) => (
                    <div
                        key={level.id}
                        className="flex flex-col rounded-lg overflow-hidden shadow-md border border-gray-100 transition-transform hover:scale-105"
                    >
                        <div className="bg-red-600 flex items-center justify-center p-4 h-48 relative">
                            <Image
                                src={level.imageUrl}
                                alt={`Ilustrasi ${level.title}`}
                                width={150}
                                height={150}
                                className="object-contain" // 'object-contain' mungkin lebih baik untuk ilustrasi agar tidak terpotong
                            />
                        </div>
                        <div className="p-5 flex flex-col flex-grow bg-white">
                            <h2 className="text-2xl font-bold text-gray-800">{level.title}</h2>
                            <p className="mt-2 text-sm text-gray-600 flex-grow">
                                {level.description}
                            </p>
                            <button className="mt-5 w-full bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-300 transition-colors duration-300">
                                Pilih
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PilihJenjang;