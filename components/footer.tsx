import Image from "next/image";

export default function Footer() {
    return (
        <div className="pb-18">
            <p className="mb-1 text-xs text-[rgba(0,0,0,0.3)]">Designed and coded by me using Tailwind CSS and Next.js</p>
            <p className="mb-7 text-xs text-[rgba(0,0,0,0.3)]">© 2025 Hung. All rights reserved.</p>
            <div className="flex">
                <a href="#" className="mr-3">
                    <Image src="/linkedin.png" alt="linkedin logo" width={20} height={20} />
                </a>
                <a href="#" className="mr-3">
                    <Image src="/tiktok.png" alt="tiktok logo" width={20} height={20} />
                </a>
                <a href="#" className="mr-3">
                    <Image src="/mail.png" alt="mail logo" width={20} height={20} />
                </a>
            </div>
        </div>
    )
}