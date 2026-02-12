

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";

const items = [
    {
        id: 'harvesting',
        label: 'Harvesting',
        image: 'https://images.unsplash.com/photo-1625586891428-65bb5d6f743c?q=80&w=1128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 'progress',
        label: 'Progress',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 'through',
        label: 'Through',
        image: 'https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 'innovation',
        label: 'Innovation',
        image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 'sustainability',
        label: 'Sustainability',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 'expertise',
        label: 'Expertise',
        image: 'https://images.unsplash.com/photo-1558906307-1a1c52b5ac8a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

const SplitInnovationSection = () => {
    const [activeId, setActiveId] = useState(items[0].id);

    return (
        <section className="grid md:grid-cols-2">
            <div className="relative min-h-[500px] overflow-hidden bg-neutral-900">
                <AnimatePresence>
                    {items.map((item) => (
                        item.id === activeId && (
                            <motion.img
                                key={item.id}
                                src={item.image}
                                alt={item.label}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        )
                    ))}
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/10 z-10" />
            </div>

            <div className="bg-brand-light-yellow py-[10vh] px-[30px] flex flex-col justify-center">
                <div className="w-full flex flex-col space-y-2">
                    {items.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveId(item.id)}
                            className={cn(
                                "w-full h-max text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-left font-heading hover:opacity-80 relative py-2 transition-colors duration-500 cursor-pointer hover:text-brand-orange",
                                activeId === item.id ? "text-brand-orange" : "text-neutral-900"
                            )}
                        >
                            {item.label}
                            {activeId === item.id && (
                                <motion.div
                                    className="absolute left-0 bottom-0 h-[3px] bg-brand-orange"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SplitInnovationSection
