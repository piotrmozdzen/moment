import Image from "next/image";

export function Hero() {
    return (
        <section className="min-h-screen w-full bg-[radial-gradient(circle_at_center,_#F2E6D9_0%,_#B8CEF2_100%)] flex flex-col md:flex-row items-center overflow-hidden">
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-32">
                {/* Content will be decided later */}
            </div>
            <div className="w-full md:w-1/2 h-full flex items-center justify-center p-8 md:p-12 relative">
                <div className="relative w-full h-[600px] md:h-[800px]">
                    <Image
                        src="/images/hero-cocktail.png"
                        alt="Cocktail"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
