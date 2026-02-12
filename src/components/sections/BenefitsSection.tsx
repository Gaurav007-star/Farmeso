
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

// import { ArrowLeft, ArrowRight } from "lucide-react"

const BenefitsSection = () => {
    const benefits = [
        {
            id: "01",
            title: "Unlocking the Full Potential of Your Land",
            description: "Our goal is to get you the best value for the regenerative practices that work best for your land",
            image: "https://images.unsplash.com/photo-1684806855070-d029d6422b06?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: "02",
            title: "Best Prices Delivered with Full Transparency",
            description: "We deliver the best price, transparently, and pay within the season",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: "03",
            title: "Grow Smarter with Agronomic Support",
            description: "We provide agronomic support to help you improve environmental outcomes and maximize value",
            image: "https://plus.unsplash.com/premium_photo-1679436184686-9d4fe8365c52?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: "04",
            title: "Precision Irrigation Systems",
            description: "Automated water management to optimize resource usage and reduce waste.",
            image: "https://images.unsplash.com/photo-1623676484964-94a00ae6c75e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: "05",
            title: "Advanced Aerial Intelligence",
            description: "Drone surveillance for early pest detection and crop monitoring.",
            image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: "06",
            title: "Real-time Soil Analytics",
            description: "Instant data on soil health to inform planting and fertilization decisions.",
            image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: "07",
            title: "Sustainable Future Planning",
            description: "Long-term strategies for eco-friendly and profitable farming.",
            image: "https://images.unsplash.com/photo-1570572109823-3d8eb72e6668?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    return (
        <section className="py-[10vh] bg-background">
            <div className="max-w-7xl mx-auto px-[30px]">
                <div className="text-left mb-16">
                    <div className="inline-block px-5 py-2 rounded-full border border-neutral-300 text-sm font-medium mb-8 text-neutral-900">
                        Our Value
                    </div>
                    <h2 className="section-heading">
                        Modern Solutions & Lasting <br /> Benefits For Farmers
                    </h2>
                </div>

                <div className="relative  w-full">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {benefits.map((benefit) => (
                                <CarouselItem key={benefit.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="relative aspect-3/4 rounded-2xl overflow-hidden group cursor-pointer bg-neutral-900">
                                        <img
                                            src={benefit.image}
                                            alt={benefit.title}
                                            className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/20" />

                                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                            <div className="flex items-start gap-4">
                                                <span className="text-5xl font-medium text-white tracking-tighter leading-none">{benefit.id}</span>
                                                <div className="pt-2">
                                                    <sup className="text-xs text-white/80 block mb-1">No</sup>
                                                    <h3 className="text-xl font-medium text-white leading-tight max-w-[200px]">{benefit.title}</h3>
                                                </div>
                                            </div>
                                            <p className="text-white/80 text-sm leading-relaxed max-w-[260px]">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-end items-center gap-4 mt-8 ">
                            <CarouselPrevious variant="outline" className="static translate-y-0 text-neutral-900 hover:bg-neutral-200 border-neutral-300 h-10 w-10 md:h-12 md:w-20 rounded-full cursor-pointer opacity-100" />
                            <CarouselNext variant="outline" className="static translate-y-0 bg-brand-orange hover:bg-brand-orange/70 text-white h-10 w-10 md:h-12 md:w-20 rounded-full cursor-pointer opacity-100" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default BenefitsSection
