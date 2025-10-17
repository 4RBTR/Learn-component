import { ReactNode } from "react";

type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

type Prop = {
    children: ReactNode;
    title: string;
    variant?: AlertVariant;
};

// Objek untuk menyimpan style sesuai variant
const variantStyles = {
    info: "bg-sky-200 text-sky-800 border-sky-800",
    success: "bg-green-200 text-green-800 border-green-800",
    warning: "bg-yellow-200 text-yellow-800 border-yellow-800",
    danger: "bg-red-200 text-red-800 border-red-800",
};

// Komponen untuk menampilkan ikon secara dinamis
const AlertIcon = ({ variant }: { variant: AlertVariant }) => {
    switch (variant) {
        case 'success':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            );
        case 'warning':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
            );
        case 'danger':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
            );
        case 'info':
        default:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
            );
    }
};

// Ubah nama komponen menjadi Alert
export const Alert = ({ children, title, variant = 'info' }: Prop) => {
    return (
        // Gunakan style dari objek variantStyles
        <div className={`my-2 rounded-md px-4 py-3 shadow-md border-l-4 ${variantStyles[variant]}`} role="alert">
            <div className="flex gap-2">
                <div>
                    {/* Panggil komponen AlertIcon */}
                    <AlertIcon variant={variant} />
                </div>
                <div>
                    <p className="font-bold text-lg">{title}</p>
                    <div className="text-sm">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};