import { useState, useEffect } from "react";
import { FaRegCopy } from "react-icons/fa";

// all the properties of a button (its variant, where it goes, its text)
interface Props {
  variant: string;
  link: string;
  text: string;
  textSize: string;
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
      <a href={props.link} className={`bg-[var(--main-blue)] hover:bg-[var(--main-darkerblue)] transition-colors h-10 rounded-full text-white tracking-tight flex items-center text-sm font-medium px-4 ${props.textSize ?? "text-sm"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "disabled-button") {
    return (
      <a href={props.link} className={`bg-[#ADADAD] h-9 rounded-full text-white flex items-center text-sm font-medium px-3 ${props.textSize ?? "text-sm"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "blue-hyperlink") {
    return (
      <a href={props.link} className={`bg-transparent h-9 rounded-full text-[var(--main-blue)] hover:underline tracking-tight flex items-center text-sm font-medium px-0 ${props.textSize ?? "text-sm"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "grey-hyperlink") {
    return (
      <a href={props.link} className={`bg-transparent h-9 rounded-full text-[var(--colour-bodytext-2)] hover:text-[var(--main-blue)] tracking-tight flex items-center text-sm font-medium px-0 ${props.textSize ?? "text-sm"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "copy-email") {
      const baseEmail = props.text;
      const hoverText = `${baseEmail} - Copy email`;

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
          className={`bg-transparent h-9 rounded-full text-[var(--main-blue)] tracking-tight flex items-center text-sm font-medium px-0 ${
            !copied ? "hover:underline" : ""
          } ${props.textSize ?? "text-sm"}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
        >
          {displayText}
          {!copied && isHovered && (
            <FaRegCopy className="ml-2 text-[var(--main-blue)]" />
          )}
        </a>
      );
    }

}