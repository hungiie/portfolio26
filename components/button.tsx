import { useState, useEffect } from "react";

// all the properties of a button (its variant, where it goes, its text)
interface Props {
  variant: string;
  link: string;
  text: string;
  textSize: string;
  target: string;
}

export default function Button(props: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  if (props.variant == "blue-button") {
    return (
      <a href={props.link} target={props.target} className={`bg-[var(--main-blue)] hover:bg-[var(--main-darkerblue)] transition-colors h-10 rounded-full text-white flex items-center font-medium px-4 ${props.textSize ?? "text-sm"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "disabled-button") {
    return (
      <a href={props.link} target={props.target} className={`bg-[#ADADAD] h-9 rounded-full text-white flex items-center font-medium px-3 ${props.textSize ?? "text-sm"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "blue-hyperlink") {
    return (
      <a href={props.link} target={props.target} className={`bg-transparent h-9 rounded-full text-[var(--main-blue)] hover:underline flex items-center font-medium p-0 ${props.textSize ?? "text-sm"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "grey-hyperlink") {
    return (
      <a href={props.link} target={props.target} className={`bg-transparent h-9 rounded-full text-[var(--colour-bodytext-2)] hover:text-[var(--main-blue)] flex items-center font-medium p-0 ${props.textSize ?? "text-sm"}`}>
        {props.text}
      </a>
    );
  }

}