

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUpRight, Facebook, Instagram, Globe } from 'lucide-react'


const Footer = () => {
    const mainLinks = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Service', href: '#' },
        { name: 'Service Details', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Blog Details', href: '#' },
    ]

    const otherLinks = [
        { name: 'Pricing', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Blog Details', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Checkout', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: '404', href: '#' },
    ]

    const templateLinks = [
        { name: 'Style Guide', href: '#' },
        { name: 'Licenses', href: '#' },
        { name: 'Changelog', href: '#' },
    ]

    return (
        <footer className="bg-dark text-white py-[10vh]">
            <div className="max-w-7xl mx-auto px-[30px]">
                <div className="grid lg:grid-cols-12 gap-12 mb-20">
                    {/* Left Column: Brand & Newsletter */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full">
                        <div>
                            <div className="flex items-start gap-1 mb-8">
                                <h2 className="text-4xl font-medium tracking-tight text-white">Farmeso</h2>
                                <span className="text-[10px] uppercase leading-tight text-gray-400 mt-4">The Part of <br /> Innovation</span>
                            </div>

                            <div className="flex gap-4 mb-12">
                                {[Facebook, Instagram, Globe].map((Icon, i) => (
                                    <div key={i} className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer group">
                                        <Icon className="h-4 w-4 text-white group-hover:text-black transition-colors" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-4">Subscribe To The Newsletter</h3>
                            <div className="relative mb-3">
                                <Input
                                    placeholder="Enter e-mail address"
                                    className="bg-transparent border border-white/20 rounded-full py-6 pr-14 text-white placeholder:text-gray-500 focus-visible:ring-0 focus-visible:border-white w-full"
                                />
                                <Button size="icon" className="absolute right-1.5 top-1.5 h-9 w-9 rounded-full bg-white hover:bg-gray-200 text-black">
                                    <ArrowUpRight className="h-4 w-4" />
                                </Button>
                            </div>
                            <p className="text-xs text-gray-500">Your information is never disclosed to third parties.</p>
                        </div>
                    </div>

                    {/* Right Columns: Links */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:pl-12">
                        {/* Main Page */}
                        <div>
                            <h3 className="font-medium text-lg mb-6 text-gray-400">Main Page</h3>
                            <ul className="space-y-4">
                                {mainLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Other Page */}
                        <div>
                            <h3 className="font-medium text-lg mb-6 text-gray-400">Other Page</h3>
                            <ul className="space-y-4">
                                {otherLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Template */}
                        <div>
                            <h3 className="font-medium text-lg mb-6 text-gray-400">Template</h3>
                            <ul className="space-y-4">
                                {templateLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
