

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            quote: "Farmetic has optimized our entire workflow. We've seen a 20% increase in yield since implementing their AI monitoring.",
            author: "Sarah Jenkins",
            role: "Owner, GreenValley Farms",
            avatar: "SJ"
        },
        {
            id: 2,
            quote: "The soil analysis tools are a game changer. We use exactly the fertilizer we need, saving money and the environment.",
            author: "Mike Ross",
            role: "Agronomist",
            avatar: "MR"
        },
        {
            id: 3,
            quote: "Customer support is phenomenal. They helped us integrate the system with our existing machinery seamlessly.",
            author: "David Chen",
            role: "Tech Lead, AgriCorp",
            avatar: "DC"
        },
        {
            id: 4,
            quote: "I was skeptical at first, but the results speak for themselves. The data insights are incredibly accurate and actionable.",
            author: "James Wilson",
            role: "Farm Manager, Wilson Estates",
            avatar: "JW"
        },
        {
            id: 5,
            quote: "The automated irrigation system has saved us countless hours and significantly reduced our water usage.",
            author: "Elena Rodriguez",
            role: "Sustainability Director, EcoGrow",
            avatar: "ER"
        },
        {
            id: 6,
            quote: "Their platform is intuitive and easy to use. Even our non-technical staff picked it up in no time.",
            author: "Robert Taylor",
            role: "Operations Head, Taylor Farms",
            avatar: "RT"
        },
        {
            id: 7,
            quote: "Partnering with Farmetic was the best decision we made this year. The ROI has been impressive.",
            author: "Lisa Wang",
            role: "CEO, FutureHarvest",
            avatar: "LW"
        }
    ]

    return (
        <section className="py-[10vh] bg-[rgb(var(--color-bg-surface))] overflow-hidden">
            <div className="max-w-7xl mx-auto px-[30px]">
                <div className="flex flex-col gap-12">
                    {/* Top Section: Static Content */}
                    <div className="flex flex-col items-start text-left">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-neutral-300 bg-transparent text-sm font-medium mb-6 text-neutral-900">
                            Our Testimonial
                        </div>
                        <h2 className="section-heading max-w-2xl">
                            What Our Clients Say About Our Solutions
                        </h2>
                    </div>

                    {/* Bottom Section: Carousel */}
                    <div className="w-full">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <div className="relative">
                                {/* Left Fade */}
                                <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[rgb(var(--color-bg-surface))] to-transparent z-10 pointer-events-none" />
                                {/* Right Fade */}
                                <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[rgb(var(--color-bg-surface))] to-transparent z-10 pointer-events-none" />

                                <CarouselContent className="-ml-6 pb-4">
                                    {testimonials.map((t) => (
                                        <CarouselItem key={t.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                            <div className="h-full">
                                                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow duration-300 bg-linear-to-b from-white via-white to-brand-orange/80 rounded-3xl cursor-grab">
                                                    <CardContent className="flex flex-col justify-between h-full p-8">
                                                        <div>
                                                            <Quote className="h-8 w-8 text-neutral-300 mb-6 fill-current" />
                                                            <p className="text-lg text-neutral-600 leading-relaxed">"{t.quote}"</p>
                                                        </div>

                                                        <div className="flex items-center gap-4 mt-8 pt-8 border-t border-neutral-100">
                                                            <Avatar className="h-12 w-12 rounded-full ring-2 ring-white">
                                                                <AvatarImage src={`https://i.pravatar.cc/150?u=${t.id}`} className="object-cover" />
                                                                <AvatarFallback className="bg-neutral-100 text-neutral-600 font-medium">{t.avatar}</AvatarFallback>
                                                            </Avatar>
                                                            <div>
                                                                <div className="font-medium text-neutral-900 text-sm leading-tight">{t.author}</div>
                                                                <div className="text-xs text-neutral-500 mt-0.5">{t.role}</div>
                                                                <div className="flex gap-0.5 mt-1.5 text-[rgb(var(--color-brand-orange))]">
                                                                    {[...Array(5)].map((_, i) => (
                                                                        <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </div>
                            <div className="flex items-center justify-end gap-4 mt-10">
                                <CarouselPrevious variant="outline" className="static translate-y-0 text-neutral-900 hover:bg-neutral-200 border-neutral-300 h-10 w-10 md:h-12 md:w-20 rounded-full cursor-pointer opacity-100" />
                                <CarouselNext variant="outline" className="static translate-y-0 bg-brand-orange hover:bg-brand-orange/70 text-white h-10 w-10 md:h-12 md:w-20 rounded-full cursor-pointer opacity-100" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
