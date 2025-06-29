import Image from "next/image"

export default function Me() {
    return (
        <div className="relative group">
            <div className="transition-all duration-800 rounded-full overflow-hidden group-hover:scale-[1.07]">
                <Image src="/about.jpg" alt="Hung Tran" className="object-cover"  width={200} height={200} />
            </div>
            <p className="absolute transition-all duration-800 ease text-[var(--main-blue)] font-black tracking-tight -z-10 text-5xl -top-5 -left-4 group-hover:-top-9 group-hover:left-1">&lt;/&gt;</p>
            <p className="absolute transition-all duration-800 ease-in-out text-[var(--colour-yellow)] font-extrabold tracking-tight -z-10 text-6xl top-5 -right-11 group-hover:top-8 group-hover:-right-10">&#123; &#125;</p>
            <p className="absolute transition-all duration-800 ease-in-out text-[var(--main-blue)] font-medium tracking-tight text-9xl -bottom-15 right-6 group-hover:-bottom-18 group-hover:right-8">*</p>
        </div>
    )
}