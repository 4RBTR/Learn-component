import Emoticon from "@/components/Emoticon"

const Emoticonpage = async () => {
    return (
    <div className="w-full flex flex-wrap gap-5 p-4 justify-center">
        <Emoticon name="Alice" defaultEmoticon="happy" />
        <Emoticon name="Bob" defaultEmoticon="sad" />
        <Emoticon name="Charlie" defaultEmoticon="angry" />
    </div>
)
}
export default Emoticonpage