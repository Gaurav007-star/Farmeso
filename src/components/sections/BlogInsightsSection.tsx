

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from 'lucide-react'

const BlogInsightsSection = () => {
    return (
        <section className="py-[10vh] bg-white">
            <div className="max-w-7xl mx-auto px-[30px]">
                {/* Header */}
                <div className="flex flex-col items-start text-left mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-neutral-300 bg-transparent text-sm font-medium mb-8 text-neutral-900">
                        Our Blog
                    </div>
                    <h2 className="section-heading max-w-3xl">
                        Latest Insights And <br />
                        Tips From Our <br />
                        Experts
                    </h2>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Card 1: Solid Background (Editorial) */}
                    <div className="group cursor-pointer relative rounded-[2rem] overflow-hidden bg-brand-gold aspect-4/3 p-10 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
                        <div className="flex justify-start">
                            <Badge variant="outline" className="rounded-full border-neutral-900 text-neutral-900 px-4 py-1 text-sm font-normal hover:bg-neutral-900 hover:text-[rgb(var(--color-brand-gold))] transition-colors">
                                Agriculture
                            </Badge>
                        </div>

                        <div>
                            <h3 className="text-3xl md:text-4xl font-medium text-neutral-900 leading-tight mb-8 tracking-tight">
                                Emerging Trends In <br />
                                Agricultural Technology <br />
                                Solutions & Best Farming
                            </h3>

                            <div className="flex items-center gap-4 border-t border-neutral-900/20 pt-6">
                                <div className="text-neutral-900 font-medium tracking-tight">Darrell Steward</div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Image Background */}
                    <div className="group cursor-pointer relative rounded-[2rem] overflow-hidden aspect-4/3 transition-transform duration-300 hover:-translate-y-1">
                        <img
                            src="https://images.unsplash.com/photo-1563201515-adbe35c669c5?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Farming Technology"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

                        <div className="absolute inset-0 p-10 flex flex-col justify-between">
                            <div className="flex justify-start">
                                <Badge variant="outline" className="rounded-full border-white text-white px-4 py-1 text-sm font-normal backdrop-blur-sm bg-white/10 hover:bg-white hover:text-black transition-colors">
                                    Technology
                                </Badge>
                            </div>

                            <div>
                                <h3 className="text-3xl md:text-4xl font-medium text-white leading-tight mb-8 tracking-tight">
                                    Emerging Trends In <br />
                                    Agricultural Technology <br />
                                    Solutions & Best Farming <br />
                                    Techniques
                                </h3>

                                <div className="flex items-center gap-4 border-t border-white/30 pt-6">
                                    <div className="text-white font-medium tracking-tight">Darrell Steward</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="flex justify-center">
                    <Button className="rounded-full bg-neutral-900 text-white hover:bg-neutral-800 px-8 py-6 text-base h-auto group">
                        View all blogs
                        <div className="ml-2 bg-white rounded-full p-1 group-hover:bg-neutral-200 transition-colors">
                            <ArrowUpRight className="h-3 w-3 text-neutral-900" />
                        </div>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default BlogInsightsSection
