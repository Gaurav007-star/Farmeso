

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from 'lucide-react'
import CtaBackground from "@/assets/cta/cta.png";

const FinalCTASection = () => {
    return (
        <section className="relative h-screen min-h-[600px] w-full flex items-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 object-cover bg-center bg-no-repeat"
            >
                <img src={CtaBackground} alt="" className="w-full h-full object-cover" />
                {/* Gradient Overlay - Left Aligned */}
                <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/20 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative max-w-7xl mx-auto px-[30px] py-[10vh] w-full h-full flex flex-col justify-center">
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] mb-8 tracking-tight">
                        Building A Better <br />
                        Future, One Crop <br />
                        At A Time
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-200 mb-10 max-w-lg leading-relaxed font-medium">
                        We don't just grow crops — we grow relationships rooted in trust, innovation, and a shared commitment to sustainability.
                    </p>
                    <div className="flex gap-4">
                        <Button className="rounded-full bg-white text-neutral-900 hover:bg-neutral-200 px-8 py-6 text-base h-auto group border-none">
                            Let’s work together
                            <div className="ml-2 bg-neutral-900 rounded-full p-1 group-hover:bg-neutral-800 transition-colors">
                                <ArrowUpRight className="h-3 w-3 text-white" />
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinalCTASection
