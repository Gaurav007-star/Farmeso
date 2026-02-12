import { Button } from "@/components/ui/button"
import { ArrowUpRight } from 'lucide-react'

const AboutUs = () => {
    return (
        <section className="py-[10vh] bg-[rgb(var(--color-bg-light))]">
            <div className="max-w-7xl mx-auto px-[30px]">
                {/* 1. Tabs Row */}
                <div className="flex gap-3 mb-12 overflow-x-auto">
                    <Button className="rounded-full border border-neutral-200 bg-transparent hover:bg-neutral-100 text-neutral-600 px-8 h-10 font-medium text-sm">
                        About Us
                    </Button>
                </div>

                {/* 2. Content Row */}
                <div className="grid lg:grid-cols-12 mb-10">
                    <div className="lg:col-span-9">
                        <h2 className="text-3xl md:text-5xl font-medium leading-[1.1] mb-8 text-neutral-900">
                            With years of expertise in both farming and tech,
                            we're committed to helping farmers grow smarter
                            and achieve better yields. Together, we're shaping
                            the future of farming for a more sustainable world.
                        </h2>
                        <div className="max-w-3xl">
                            <p className="text-neutral-500 text-lg leading-relaxed font-medium mb-10">
                                By combining innovation with sustainability, we empower farmers to increase productivity, reduce waste, and contribute to a healthier planet. Together, we are shaping the future of farming, ensuring it thrives for generations to come.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[300px]">
                    {/* Card 1: Image (Farmer) */}
                    <div className="rounded-3xl overflow-hidden h-[200px] relative group">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1733353253217-e5af8b558994?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Farmer in field"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Card 2: 10+ Years */}
                    <div className="bg-dark rounded-3xl p-4 flex flex-col justify-between h-[300px] group transition-all duration-300">
                        <div className="flex justify-between items-start">
                            <span className="text-4xl font-medium text-white tracking-tight">10+</span>
                            <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-[rgb(var(--color-brand-yellow))] group-hover:text-black transition-colors duration-300">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-white mb-4 leading-tight">
                                Years of Innovation
                            </h3>
                            <p className="text-neutral-500 text-sm leading-relaxed">
                                With a decade of experience, we've pioneered advancements in precision agriculture, helping farmers increase yields by 30% while reducing water consumption by 25%.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Image (Plants) */}
                    <div className="rounded-3xl overflow-hidden h-[200px] relative group">
                        <img
                            src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1200&auto=format&fit=crop"
                            alt="Sustainable farming"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Card 4: 85% Satisfaction */}
                    <div className="bg-brand-light-yellow rounded-3xl p-4 flex flex-col justify-between h-[300px] group transition-all duration-300">
                        <div className="flex justify-between items-start">
                            <span className="text-4xl font-medium text-neutral-900 tracking-tight">85%</span>
                            <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-neutral-900 mb-4 leading-tight">
                                Customer Satisfaction Rate
                            </h3>
                            <p className="text-neutral-900/80 text-sm leading-relaxed">
                                With an 85% customer satisfaction rate, our users trust us to deliver valuable tools and support that enable them to work smarter and grow better.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
