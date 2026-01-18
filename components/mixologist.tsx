"use client";

import Image from "next/image";

export function Mixologist() {
    return (
        <section className="bg-brand-cream py-24 px-8 pt-32">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">

                {/* Left Side: Large Bartender Image */}
                <div className="w-full md:w-1/2 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/images/lou.jpg"
                        alt="Ekspert Miksologii Filip"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-800 mb-2 font-[family-name:var(--font-montserrat)]">
                        Zasady dobrego koktajlu według:
                    </h2>
                    <h3 className="text-4xl text-slate-900 font-[family-name:var(--font-caveat)] mb-8">
                        Poznaj Filipa
                    </h3>

                    <div className="space-y-6 text-slate-800 leading-relaxed mb-12">
                        <p>
                            Nasze koktajle powstają w oparciu o pasję i doświadczenie. Każda receptura to wynik współpracy z Filipem, który dba o to, by napoje były przygotowane zgodnie ze sztuką barmańską.
                        </p>
                        <p>
                            Praktyczne doświadczenie pozwala nam tworzyć kompozycje o zbalansowanym smaku, które są idealnym uzupełnieniem każdej wyjątkowej chwili.
                        </p>
                    </div>

                    {/* Ingredients Icons */}
                    <div className="flex items-center">
                        <svg width="95" height="98" viewBox="0 0 55 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.5 48.45C38.1315 48.45 46.75 39.5181 46.75 28.5C46.75 17.482 38.1315 8.55005 27.5 8.55005C16.8685 8.55005 8.25 17.482 8.25 28.5C8.25 39.5181 16.8685 48.45 27.5 48.45Z" fill="#EA95A7" />
                            <path d="M33.8762 18.0966C33.752 17.9678 33.5508 17.9678 33.4266 18.0966L31.9165 19.6619L31.9156 19.6624L31.9151 19.6633L17.0931 35.0268C16.969 35.1555 16.969 35.3641 17.0931 35.4928C19.4071 37.8914 22.4452 39.0903 25.4849 39.09C28.5232 39.0897 31.5629 37.8907 33.8762 35.4928C36.1163 33.1712 37.35 30.0819 37.35 26.7947C37.35 23.5075 36.1163 20.4185 33.8762 18.0966ZM25.1669 36.2098C23.0439 36.1337 20.9432 35.2928 19.2841 33.6879L25.1669 27.5902V36.2098ZM25.8028 27.59L31.6337 33.6344C31.6521 33.6534 31.6747 33.6638 31.696 33.6773C30.0351 35.2889 27.9303 36.1333 25.8028 36.2098V27.59ZM32.1248 33.2331C32.1119 33.211 32.1018 33.1874 32.0833 33.1683L26.2524 27.124H34.5702C34.4949 29.4148 33.6356 31.5615 32.1248 33.2331ZM26.2526 26.4648L32.1352 20.3673C33.6395 22.0369 34.4949 24.179 34.5702 26.4648H26.2526ZM33.4266 35.0268C31.3067 37.2241 28.4863 38.434 25.4849 38.434C22.5896 38.434 19.865 37.3057 17.773 35.2541L18.8345 34.1539C20.7008 35.9674 23.0916 36.8768 25.4849 36.8765C27.9761 36.8762 30.4686 35.8929 32.3653 33.9269C34.2023 32.0231 35.2139 29.49 35.2139 26.7947C35.2139 24.2095 34.2813 21.7758 32.5848 19.9013L33.646 18.8013C35.6251 20.9698 36.714 23.7939 36.714 26.7947C36.714 29.9058 35.5465 32.8294 33.4266 35.0268Z" fill="black" />
                        </svg>
                    </div>


                </div>
            </div>
        </section>
    );
}
