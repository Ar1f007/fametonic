import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

    const navigation = [
        {
            title: "About Us",
            href: "#",
        },
        {
            title: "Contact",
            href: "#",
        }
    ]

    return (
        <header className="container mx-auto flex justify-between p-4 md:py-11 md:px-6 relative z-50">                 
            <Link
                href="/"
                className="flex justify-center md:justify-start w-full md:w-auto ml-4 md:ml-0"
                aria-label="fametonic home"
            >
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={174}
                    height={74}
                    priority
                    className="h-12 md:h-[74px] w-auto"
                />
            </Link>

            <nav className="flex items-center md:items-start">
                <ul className="hidden md:flex space-x-10">
                    {
                        navigation.map((link, idx) => (
                            <li key={idx}>
                                <Link
                                    href={link.href}
                                    className="text-lg font-body font-semibold text-muted hover:text-foreground transition-colors whitespace-nowrap"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <div className="md:hidden">
                    <button className="size-8 p-1 flex flex-col gap-y-1.5">
                        {
                            [1, 2, 3].map(el => (
                                <span
                                    key={el}
                                    className="block h-[2px] w-full bg-foreground"
                                />
                            ))
                        }
                    </button>
                </div>
            </nav>
        </header>
    )
}