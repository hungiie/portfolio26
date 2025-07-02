interface Props {
  subject1: string;
  value1: string;
  subject2: string;
  value2: string;
  subject3: string;
  value3: string;
  description1: string;
  description2: string;
}


export default function Overview(props: Props) {
    return(
        <div className="mt-15">
            <div className="w-full md:w-1/2 mb-15">
                <p className="text-[var(--colour-bodytext)] mb-3 text-sm">{props.description1}</p>
                <p className="text-[var(--colour-bodytext)] text-sm">{props.description2}</p>
            </div>
            <div className="grid grid-cols-2 w-4/5 md:w-1/5">
                <p className="text-[var(--colour-bodytext)] text-sm">{props.subject1}</p>
                <p className="text-[var(--colour-bodytext-3)] text-sm">{props.value1}</p>
                <p className="text-[var(--colour-bodytext)] text-sm">{props.subject2}</p>
                <p className="text-[var(--colour-bodytext-3)] text-sm">{props.value2}</p>
                <p className="text-[var(--colour-bodytext)] text-sm">{props.subject3}</p>
                <p className="text-[var(--colour-bodytext-3)] text-sm">{props.value3}</p>
            </div>
        </div>
    )
}