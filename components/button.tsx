import { useState, useEffect } from "react";

// all the properties of a button (its variant, where it goes, its text)
interface Props {
  variant: string;
  link: string;
  text: string;
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
      <a href={props.link} className="bg-[var(--main-blue)] hover:bg-[#0078E0] focus:bg-[#0078E0] transition-colors h-11 rounded-full text-white flex items-center text-sm font-medium px-5">
        {props.text}
      </a>
    );
  } else if (props.variant == "disabled-button") {
    return (
      <a href={props.link} className="bg-[#adadad] h-9 rounded-full text-white flex items-center text-sm font-medium px-3">
        {props.text}
      </a>
    );
  } else if (props.variant == "blue-hyperlink") {
    return (
      <a href={props.link} className="bg-transparent h-9 rounded-full text-[var(--main-blue)] hover:underline focus:underline flex items-center text-sm font-medium px-0">
        {props.text}
      </a>
    );
  } else if (props.variant == "grey-hyperlink") {
    return (
      <a href={props.link} className="bg-transparent h-9 rounded-full text-[#333333] hover:text-[var(--main-blue)] focus:text-[var(--main-blue)] hover:underline focus:underline flex items-center text-sm font-medium px-0">
        {props.text}
      </a>
    );
  } else if (props.variant == "copy-email") {
      const baseEmail = props.text;
      const hoverText = `${baseEmail} - Copy this email`;

      const displayText = copied
        ? "Copied!"
        : isHovered
        ? hoverText
        : baseEmail;

      const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(baseEmail).then(() => {
          setCopied(true);
        });
      };

      return (
        <a
          href={props.link}
          className={`bg-transparent h-9 rounded-full text-[var(--main-blue)] flex items-center text-sm font-medium px-0
            ${!copied ? "hover:underline" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
        >
          {displayText}
        </a>
      );
    }

}