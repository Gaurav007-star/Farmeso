import { ArrowRight } from 'lucide-react';

const ServiceSection = () => {
    return (
        <section className="py-[10vh] bg-bg-light">
            <div className="max-w-7xl mx-auto px-[30px]">
                {/* Header Area */}
                <div className="mb-12">
                    <span className="inline-block px-5 py-2 rounded-full border border-neutral-300 text-sm font-medium mb-8 text-neutral-900">
                        Our Services
                    </span>
                    <h2 className="section-heading">
                        Practical Impactful <br />
                        Solutions For Modern <br />
                        Agriculture
                    </h2>
                </div>

                {/* The Grid Layout */}
                <div className="w-full flex flex-col gap-5 h-auto lg:h-max">

                    {/* Top Large Card: Sustainable Irrigation */}
                    <div className="relative w-full h-[650px] rounded-xl overflow-hidden group cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1656407410275-e63e689bcd90?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Green Wheat Field"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Floating Glass Box */}
                        <div className="absolute bottom-8 right-8 p-8 w-[360px] bg-white/5 backdrop-blur-xs rounded-xl shadow-2xl">
                            <h3 className="text-2xl font-medium text-white mb-4 leading-tight">
                                Sustainable Irrigation <br /> for Smarter Farming
                            </h3>
                            <p className="text-white/80 text-sm mb-6 leading-relaxed">
                                We collaborate closely with clients to understand their unique needs and goals.
                            </p>
                            <div className="pt-5 border-t border-white/20">
                                <p className="text-white/70 text-[11px] mb-4 leading-tight">
                                    Our focus is on boosting resilience and ensuring long-term productivity
                                </p>
                                <div className="flex items-center text-white text-sm font-medium gap-2">
                                    Learn more
                                    <div className="bg-white rounded-full p-1">
                                        <ArrowRight className="h-3 w-3 text-black fill-black" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* bottom Column (Stacked Cards) */}
                    <div className="w-full h-max flex max-[768px]:flex-col items-start justify-between gap-5">
                        <div className="relative w-full h-[400px] rounded-xl overflow-hidden group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=800&auto=format&fit=crop"
                                alt="Harvester"
                                className="absolute inset-0 w-full h-full object-cover "
                            />
                            <div className="absolute bottom-8 right-8 p-6 w-[250px] bg-white/5 backdrop-blur-xs rounded-xl shadow-2xl">
                                <h3 className="text-xl font-medium text-white mb-4 leading-tight">
                                    Comprehensive <br /> Supply Chain Support
                                </h3>
                                <div className="flex items-center text-white text-xs font-medium gap-2">
                                    Learn more
                                    <div className="bg-white rounded-full p-1">
                                        <ArrowRight className="h-3 w-3 text-black" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full h-[800px] max-[768px]:h-[400px] rounded-xl overflow-hidden group cursor-pointer">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1661963967380-7aa4e5647929?q=80&w=732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Tractor in Field"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Dark/Green Gradient Overlay at bottom */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                            <div className="absolute bottom-8 right-8 p-6 w-[250px] bg-white/5 backdrop-blur-xs rounded-xl shadow-2xl">
                                <h3 className="text-xl font-medium text-white mb-4 leading-tight">
                                    Revolutionising <br /> Agriculture Farming
                                </h3>
                                <div className="flex items-center text-white text-sm font-medium gap-2">
                                    Learn more
                                    <div className="bg-white rounded-full p-1">
                                        <ArrowRight className="h-3 w-3 text-black" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default ServiceSection;