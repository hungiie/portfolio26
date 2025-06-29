"use client"

import Image from "next/image";

interface Props {
  link: string;
  name: string;
  description: string;
  tag1: string;
  tag2: string;
  tag3: string;
  imageSrc: string;
  colourCode: string;
}

export default function ProjectThumbnail(props: Props) {
    return(
        <a href={props.link} className="group mb-8 block rounded-2xl border-[#e7e7e7] border-2 overflow-hidden hover:border-[var(--main-blue)]">
            <div className="w-full h-40 md:h-66 relative">
                <Image src={props.imageSrc} alt={props.name} fill className="object-cover" />
            </div>
            <div className="px-5 md:px-7 pb-8 w-full">
                <div className="w-full flex items-center mt-6 mb-5">
                    {/* <span className="w-2 h-2 rounded-full inline-block mr-3" style={{ backgroundColor: props.colourCode }}></span> */}
                    <p className={`text-lg text-[var(--colour-bodytext)] group-hover:underline group-hover:text-[var(--main-blue)]`}>
                        {props.name}
                    </p>
                </div>
                <p className="mb-3 text-sm text-[var(--colour-bodytext-2)]">{props.description}</p>
                <div className="flex mt-7 justify-between md:justify-normal">
                    <p className="mr-3 md:mr-8 inline-block text-xs text-[var(--colour-bodytext-3)]">{props.tag1}</p>
                    <p className="mr-3 md:mr-8 inline-block text-xs text-[var(--colour-bodytext-3)]">{props.tag2}</p>
                    <p className="inline-block text-xs text-[var(--colour-bodytext-3)]">{props.tag3}</p>
                </div>
            </div>
        </a>
    )
}