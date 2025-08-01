"use client"

import { link } from "fs";
import Image from "next/image";

interface Props {
  link: string;
  name: string;
  description: string;
  tag1: string;
  tag2: string;
  imageSrc: string;
}

export default function PlayProject(props: Props) {
    return(
        <a href={props.link} target="_blank" className="group mb-4 rounded-2xl border-[#efefef] border-2 overflow-hidden hover:border-[var(--main-blue)] grid grid-cols-1 md:grid-cols-[1fr_2fr] cursor-pointer">
            <div className="w-full h-40 md:h-full relative overflow-hidden">
                <Image src={props.imageSrc} alt={props.name} fill className="object-cover transform scale-101 origin-center" />
            </div>
            <div className="px-5 pt-6 pb-8 w-full h-full flex flex-col justify-center">
                <div className="w-full flex items-center mb-3">
                    <p className={`text-md text-[var(--colour-bodytext)] group-hover:underline group-hover:text-[var(--main-blue)]`}>
                        {props.name}
                    </p>
                </div>
                <p className="mb-3 text-sm text-[var(--colour-bodytext-2)]">{props.description}</p>
                <div>
                    <p className="mt-2 inline-block text-xs text-[var(--colour-bodytext-3)]">{props.tag1}</p>
                    <p className="mt-2 ml-7 inline-block text-xs text-[var(--colour-bodytext-3)]">{props.tag2}</p>
                </div>
            </div>
        </a>
    )
}