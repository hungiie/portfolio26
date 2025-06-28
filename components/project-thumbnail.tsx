"use client"
import Button from "./button";

interface Props {
  link: string;
  name: string;
  description: string;
  tag: string;
  imageSrc: string;
  colourCode: string;
}

export default function ProjectThumbnail(props: Props) {
    return(
        <a href={props.link} className="group mb-8 block rounded-2xl border-[#e3e3e3] border-1 overflow-hidden">
            <img src={props.imageSrc} alt={props.name} className="w-full h-65 object-cover" />
            <div className="px-7 py-5">
                <p className="mb-3 text-lg text-[var(--main-blue)] group-hover:underline">{props.name}</p>
                <p className="mb-3 text-sm text-gray-600">{props.description}</p>
                <p className="mt-2 inline-block text-xs text-[#4F4F4F]">{props.tag}</p>
            </div>
        </a>
    )
}