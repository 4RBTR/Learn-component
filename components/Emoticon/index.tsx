"use client"

import { useState } from "react"
import Image from "next/image"
import { useEffect } from "react"

// this told that component is a client component
type Props = {
    name: string
    defaultEmoticon: "happy" | "sad" | "angry"
}
const Emoticon = (prop: Props) => {
    /**create state to store
     * emoticon value that will be =
     * change every time
     */
    const [emoticon, setEmoticon] = useState<"happy" | "sad" | "angry">(prop.defaultEmoticon)
    const [sourceImage, setSourceImage] = useState<string>("/Sad.png")

    useEffect(() => {
        if (emoticon === "happy") {
            setSourceImage("/images/happy.png")
        }
        if (emoticon === "sad") {
            setSourceImage("/images/sad.png")
        }
        if (emoticon === "angry") {
            setSourceImage("/images/angry.png")
        }
    }, [emoticon])
    return (
        <div className="w-48 flex flex-col items-center gap-3 rounded-md">
            <strong>Hi i am {prop.name},today i feel {emoticon}</strong>
            <Image
                width={100}
                height={100}
                alt="my emotion"
                className="size-36"
                src={sourceImage}
            />
            <select className="w-full p-2 border rounded" value={emoticon} onChange={(e) => setEmoticon(e.target.value as "happy" | "sad" | "angry")}>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="angry">Angry</option>
            </select>
        </div>
    )

}
export default Emoticon