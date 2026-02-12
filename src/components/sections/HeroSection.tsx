
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from 'lucide-react'
import { cn } from "@/lib/utils"

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1754226714756-33662aa7501c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        thumbnail: "https://images.unsplash.com/photo-1754226714756-33662aa7501c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2940&auto=format&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=300&auto=format&fit=crop"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        thumbnail: "https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Slider */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={cn(
                        "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000",
                        currentSlide === index ? "opacity-100" : "opacity-0"
                    )}
                    style={{ backgroundImage: `url("${slide.image}")` }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-transparent via-black/20 to-black/80" />
                </div>
            ))}

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-[30px] pt-32 pb-[10vh] flex flex-col justify-center">
                <div className="max-w-4xl space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-1000">
                    <h1 className="text-6xl md:text-8xl font-medium text-white leading-[0.9] tracking-tight">
                        Next—Gen <br />
                        Farming Growth <br />
                        Innovation
                    </h1>

                    <p className="text-xl text-gray-200 max-w-xl font-light leading-relaxed">
                        We don't just grow crops — we grow relationships
                        rooted in trust, innovation, and a shared commitment
                    </p>

                    <div className="flex items-center gap-6 pt-8">
                        <Button className="h-14 pl-8 pr-2 rounded-full bg-white text-black hover:bg-neutral-200 text-lg border-none">
                            Start growing with us
                            <span className="ml-4 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center">
                                <ArrowUpRight className="h-5 w-5" />
                            </span>
                        </Button>
                    </div>
                </div>

                {/* Bottom Right Controls */}
                <div className="absolute bottom-12 right-6 md:right-12 flex items-end gap-6">

                    {/* Thumbnails */}
                    <div className="hidden md:flex gap-2 p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                onClick={() => setCurrentSlide(index)}
                                className={cn(
                                    "relative w-24 h-20 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border-2",
                                    currentSlide === index ? "border-white scale-105" : "border-transparent opacity-70 hover:opacity-100"
                                )}
                            >
                                <img
                                    src={slide.thumbnail}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                    <div
                        className="h-full bg-white transition-all duration-500 ease-linear"
                        style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
