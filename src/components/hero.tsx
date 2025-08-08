import Image from "next/image";
import Link from "next/link";

export default function Hero() {

    const listItems = [
        "Start growing your influence right away—no waiting required!",
        "Create viral TikToks and Reels step by step with easy-to-follow lessons",
        "Use a Personal AI Worker to boost your content",
        "Learn from expert-led courses designed for aspiring influencers",
    ]

    return (
        <main className="container mx-auto p-4 lg:px-6 relative lg:mt-6">
            <div className="flex flex-col lg:flex-row flex-1">
                <div className="-mt-4 lg:mt-0 relative z-0 flex-1 lg:block lg:absolute lg:-top-8 md:right-0 xl:-right-23">
                    <Image
                        src="/mobile_mockup.png"
                        alt="Dashboard's view on a smartphone"
                        width={666}
                        height={679}
                        className="object-cover w-full max-w-[600px] lg:max-w-none mx-auto"
                        priority
                    />
                </div>

                <div>
                    <div className="relative flex-1 z-10 lg:max-w-[65%]">
                        <h1 className="text-center lg:text-left font-heading font-extrabold lg:font-bold text-[25px] lg:text-[35px] leading-[1.3]">
                            <span className="text-white block text-balance lg:text-wrap">
                                Want to Turn Social Media Into a Profitable Career?
                            </span>
                            <span className="text-secondary-light text-shadow-md text-shadow-primary block mt-2 lg:mt-0 lg:text-left text-pretty lg:text-pretty">
                                Discover your way to success with Fametonic:
                            </span>
                        </h1>

                        <ul className="space-y-3 my-8 lg:mt-5">
                            {
                                listItems.map((item, idx) => (
                                    <li key={idx} className="text-md text-left font-medium lg:font-semibold flex gap-2 items-center">
                                        <span className="basis-[20px]">✨</span>
                                        <span className="flex-1">{item}</span>
                                    </li>
                                ))
                            }
                        </ul>

                        <div className="flex flex-col">

                            <div className="text-muted font-medium text-center lg:text-left order-1 lg:order-1">
                                <p className="mb-4 text-xs">
                                    By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
                                </p>
                                <p className="text-[10px]">
                                    Fametonic {new Date().getFullYear()} &copy;All Rights Reserved.
                                </p>
                            </div>


                            <div className="mt-8 lg:mt-0 lg:mb-8 flex flex-col lg:w-3/5 gap-3 order-2 lg:order-0 pb-5 lg:pb-0">
                                <Link
                                    href="#"
                                    className="font-heading w-full bg-primary uppercase text-center px-2 py-1.5 text-xl rounded-xl shadow-[2px_2px_10px_0_#00E7F9] shadow-secondary-light font-semibold inline-flex justify-center items-center gap-2"
                                >
                                    Get Started
                                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.19238 6.26465C7.60266 6.67918 7.60225 7.33287 7.19141 7.74707L2.29102 12.6875C1.87768 13.1039 1.22189 13.104 0.808594 12.6875C0.607462 12.4847 0.50002 12.2157 0.5 11.9512L0.5 11.7451L0.538086 11.707C0.551454 11.6485 0.568204 11.5907 0.591797 11.5352C0.644656 11.4108 0.722378 11.2983 0.819336 11.2041L4.97949 7L0.818359 2.7959L0.819336 2.79492C0.408805 2.3804 0.4084 1.72679 0.819336 1.3125C1.23271 0.895833 1.88939 0.895784 2.30273 1.3125L2.30273 1.31348L7.19238 6.26465Z" fill="white" stroke="white" />
                                    </svg>
                                </Link>

                                <small className="text-xs text-white text-center">
                                    1-minute quiz for personalized Insights
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};
