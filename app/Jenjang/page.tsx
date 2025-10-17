
import PilihJenjang from '@/components/PilihJenjang';

export default function JenjangPage() {
    return (
        // Latar belakang utama halaman
        <div className="relative min-h-screen bg-gray-50">

            {/* --- Lapisan Merah di Bagian Atas --- */}
            <div className="absolute top-0 left-0 w-full h-80 bg-red-700" />

            {/* --- Konten Utama di Tengah --- */}
            {/* z-10 agar komponen ini berada di atas lapisan merah */}
            <main className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6">
                <PilihJenjang />
            </main>

        </div>
    );
}