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
        <a href={props.link} target="_blank" className="group mb-8 block rounded-2xl border-[#efefef] border-2 overflow-hidden hover:border-[var(--main-blue)]">
            <div className="w-full h-40 md:h-60 relative overflow-hidden">
                <Image src={props.imageSrc} alt={props.name} fill className="object-cover transform scale-101 origin-center" />
            </div>
            <div className="px-5 pt-6 pb-8 w-full">
                <div className="w-full flex items-center mb-3">
                    <p className={`text-md text-[var(--colour-bodytext)] group-hover:underline group-hover:text-[var(--main-blue)]`}>
                        {props.name}
                    </p>
                </div>
                <p className="mb-3 text-sm text-[var(--colour-bodytext-2)]">{props.description}</p>
                <p className="mt-2 inline-block text-xs text-[var(--colour-bodytext-3)]">{props.tag}</p>
            </div>
        </a>
    )
}