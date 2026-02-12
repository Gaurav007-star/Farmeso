
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"
import { Sprout, Wheat, Sun, Leaf, TrendingUp, Activity, Zap, Droplets } from "lucide-react"

const PartnersSection = () => {
    const partners = [
        { name: "AgriTech", icon: Sprout },
        { name: "FarmO", icon: Wheat },
        { name: "GrowSmart", icon: Sun },
        { name: "EcoHarvest", icon: Leaf },
        { name: "YieldMax", icon: TrendingUp },
        { name: "SoilSense", icon: Activity },
        { name: "BioGen", icon: Zap },
        { name: "AquaFlow", icon: Droplets },
    ]

    // Duplicate for seamless loop
    const loopedPartners = [...partners, ...partners, ...partners]

    return (
        <section className="py-[10vh]">
            <div className="max-w-7xl mx-auto px-[30px] overflow-hidden">
                <div className="text-center mb-8">
                    <p className="text-sm font-medium text-neutral-500 tracking-wide">
                        Partners in our ecosystem.
                    </p>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        AutoScroll({
                            speed: 1.5,
                            stopOnInteraction: false,
                            stopOnMouseEnter: true,
                        }),
                    ]}
                    className="w-full"
                >
                    <div className="relative">
                        {/* Left Fade */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[rgb(var(--color-bg-surface))] to-transparent z-10 pointer-events-none" />
                        {/* Right Fade */}
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[rgb(var(--color-bg-surface))] to-transparent z-10 pointer-events-none" />
                        <CarouselContent className="-ml-12 items-center">
                            {loopedPartners.map((partner, index) => (
                                <CarouselItem key={index} className="pl-12 md:basis-1/4 lg:basis-1/6">
                                    <div className="flex items-center gap-2 group cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                                        <partner.icon className="h-6 w-6 text-neutral-800 fill-neutral-800" strokeWidth={0} />
                                        <span className="text-xl font-medium text-neutral-800 tracking-tight">
                                            {partner.name}
                                        </span>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

export default PartnersSection
