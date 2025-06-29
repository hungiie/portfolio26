"use client"

import Image from "next/image";

interface Props {
  link: string;
  name: string;
  description: string;
  tag: string;
  imageSrc: string;
}

export default function OtherProjectThumbnail(props: Props) {
    return(
        <a href={props.link} className="group mb-8 block rounded-2xl border-[#e3e3e3] border-1 overflow-hidden hover:border-[var(--main-blue)]">
            <div className="w-full h-60 relative">
                <Image src={props.imageSrc} alt={props.name} fill className="object-cover" />
            </div>
            <div className="px-5 pt-6 pb-8 w-full">
                <div className="w-full flex items-center mb-3">
                    <p className={`text-md text-[var(--colour-bodytext)] group-hover:underline group-hover:text-[var(--main-blue)]`}>
                        {props.name}
                    </p>
                </div>
                <p className="mb-3 text-sm text-[var(--colour-bodytext)]">{props.description}</p>
                <p className="mt-2 inline-block text-xs text-[#4F4F4F]">{props.tag}</p>
            </div>
        </a>
    )
}