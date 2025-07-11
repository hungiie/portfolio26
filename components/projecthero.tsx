"use client"

import Button from "./button";

interface Props {
    name: string;
    description: string | React.ReactNode;
    colourCode: string;
    linkText1: string;
    linkText2: string;
}

export default function ProjectHero(props: Props) {
    return (
        <div className="mt-35">
            <p className="px-6 py-3 text-md md:text-md text-white rounded-full inline-block" style={{ backgroundColor: props.colourCode }}>
                {props.name}
            </p>
            <p className="text-[var(--colour-bodytext)] text-4xl md:text-7xl font-semibold mt-10 mb-15 tracking-tight leading-[120%] md:leading-[110%] w-full md:w-4/5">{props.description}</p>
            <div className="flex items-center">
                <div className="mr-10 md:mr-20">
                    <Button variant="blue-hyperlink" link="#" text={props.linkText1} target="_self" textSize="text-md"/>
                </div>
                <Button variant="blue-hyperlink" link="#" text={props.linkText2} target="_self" textSize="text-md"/>
            </div>
        </div>
    )
}