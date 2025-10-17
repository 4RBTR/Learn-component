"use client";

import {
    ButtonSuccess,
    ButtonWarning,
    ButtonDanger,
    ButtonSuccessOutline,
    ButtonDangerOutline,
    ButtonInfoOutline
} from "@/components/button/indeks";

const HalamanButton = () => {
    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-4">Hasil Komponen Tombol</h1>
            <div className="flex flex-wrap items-center gap-3 p-6 rounded-lg bg-gray-100 dark:bg-gray-800">
                <ButtonSuccess type="button" onClick={() => alert("Success!")}>Success Button</ButtonSuccess>
                <ButtonWarning type="button" onClick={() => alert("Warning!")}>Warning Button</ButtonWarning>
                <ButtonDanger type="button" onClick={() => alert("Danger!")}>Danger Button</ButtonDanger>
                <ButtonSuccessOutline type="button" onClick={() => alert("Success Outline!")}>Success Outline</ButtonSuccessOutline>
                <ButtonDangerOutline type="button" onClick={() => alert("Danger Outline!")}>Danger Outline</ButtonDangerOutline>
                <ButtonInfoOutline type="button" onClick={() => alert("Info Outline!")}>Info Outline</ButtonInfoOutline>
            </div>
        </div>
    );
};

export default HalamanButton;