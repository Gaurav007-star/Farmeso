

import { Button } from "@/components/ui/button"
import { CheckCircle, Sprout, ArrowUpRight } from 'lucide-react'

const AiFeatureSection = () => {
    return (
        <section className="py-[10vh] bg-[rgb(var(--color-bg-surface))]">
            <div className="max-w-7xl mx-auto px-[30px] grid lg:grid-cols-2 gap-10 items-center">
                {/* Left Column: Visual Media */}
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-sm aspect-4/3 lg:aspect-square h-full">
                    <img
                        src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Agricultural Field"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                {/* Right Column: Content Block */}
                <div className="h-full flex flex-col justify-center">
                    <div>
                        <div className="inline-block px-4 py-1 rounded-full border border-neutral-300 bg-transparent text-xs font-medium tracking-wide mb-4 text-neutral-900">
                            Plant by plant
                        </div>
                        <h2 className="section-heading">
                            AI Enables Plant- <br className="hidden lg:block" />
                            Level Detection
                        </h2>
                        <p className="text-neutral-600 mb-8 text-lg font-medium leading-tight max-w-xl">
                            We don't just grow crops — we grow relationships rooted in trust, innovation, and a shared commitment to sustainability. By combining deep agricultural knowledge with forward-thinking practices.
                        </p>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 gap-8 mb-8">
                            <div>
                                <div className="mb-4">
                                    <CheckCircle className="h-8 w-8 text-neutral-900 stroke-[1.5]" />
                                </div>
                                <h3 className="font-medium text-xl mb-2 text-neutral-900">Composting</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">Reducing waste and returning nutrients to the soil</p>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <Sprout className="h-8 w-8 text-neutral-900 stroke-[1.5]" />
                                </div>
                                <h3 className="font-medium text-xl mb-2 text-neutral-900">Water-Saving</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">Smart irrigation that conserves every drop</p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div>
                            <Button className="rounded-full bg-neutral-900 text-white hover:bg-neutral-800 p-4 text-base h-auto group">
                                Start growing with us
                                <div className="ml-2 bg-white rounded-full p-1 group-hover:bg-neutral-200 transition-colors">
                                    <ArrowUpRight className="h-3 w-3 text-neutral-900" />
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AiFeatureSection
