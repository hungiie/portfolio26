"use client"

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
        <a href={props.link} className="group mb-8 block rounded-2xl border-[#e3e3e3] border-1 overflow-hidden hover:border-[var(--main-blue)]">
            <img src={props.imageSrc} alt={props.name} className="w-full h-60 object-cover transition-transform duration-400 group-hover:scale-103" />
            <div className="px-7 pt-6 pb-8">
                <p className="mb-3 text-md text-[var(--colour-bodytext)] group-hover:underline group-hover:text-[var(--main-blue)] flex items-center">
                    {props.name}
                    <span className="w-2 h-2 rounded-full inline-block ml-3" style={{ backgroundColor: props.colourCode }}></span>
                </p>
                <p className="mb-3 text-sm text-[var(--colour-bodytext)]">{props.description}</p>
                <p className="mt-2 inline-block text-xs text-[#4F4F4F]">{props.tag}</p>
            </div>
        </a>
    )
}