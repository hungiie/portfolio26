import Image from "next/image"

export default function Me() {
    return (
        <div className="relative group">
            <div className="transition-all duration-800 rounded-full overflow-hidden w-[120px] h-[120px] md:w-[200px] md:h-[200px] group-hover:scale-[1.07]">
                <Image src="/about.jpg" alt="Hung Tran" className="object-cover rounded-full" fill />
            </div>
            <p className="
            absolute 
            transition-all 
            duration-800 
            ease 
            text-[var(--main-blue)] 
            font-black 
            tracking-tight 
            -z-10 
            text-4xl
            md:text-5xl 
            -top-6 
            -left-2 
            group-hover:-top-9 
            group-hover:left-1
            ">
                &lt;/&gt;
            </p>
            <p className="
            absolute 
            transition-all 
            duration-800 
            ease-in-out 
            text-[var(--colour-yellow)] 
            font-extrabold 
            tracking-tight 
            -z-10 
            text-4xl
            md:text-6xl 
            top-2
            -right-6 
            md:-right-11 
            group-hover:top-8 
            group-hover:-right-10
            ">
                &#123; &#125;
            </p>
            <p className="
            absolute 
            transition-all 
            duration-800 
            ease-in-out 
            text-[var(--main-blue)] 
            font-medium 
            tracking-tight 
            text-8xl
            -bottom-13
            right-0
            md:text-[10rem] 
            md:-bottom-21
            md:right-2 
            group-hover:-bottom-24 
            group-hover:right-6
            ">
                *
            </p>
        </div>
    )
}
