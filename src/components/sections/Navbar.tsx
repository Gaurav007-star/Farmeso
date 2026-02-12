
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > window.innerHeight - 100) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    })

    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Service', href: '#' },
        { name: 'Others', href: '#' },
    ]

    return (
        <motion.nav
            initial={{
                width: "95%",
                maxWidth: "80rem",
                borderRadius: "9999px",
                top: "1.5rem",
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.2)"
            }}
            animate={isScrolled ? {
                width: "100%",
                maxWidth: "100%",
                borderRadius: "0px",
                top: "0px",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(12px)",
                border: "1px solid transparent",
                borderBottom: "1px solid #e5e5e5"
            } : {
                width: "95%",
                maxWidth: "80rem",
                borderRadius: "9999px",
                top: "1.5rem",
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.2)"
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-1/2 -translate-x-1/2 z-50 flex items-center justify-between shadow-sm px-[30px]"
        >
            {/* Logo */}
            <div className="flex items-center gap-2">
                <span className="font-medium text-xl tracking-tight text-neutral-900">Farmeso</span>
            </div>

            {/* Desktop Navigation */}
            <div className={`hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2`}>
                <NavigationMenu>
                    <NavigationMenuList>
                        {navItems.map((item) => (
                            <NavigationMenuItem key={item.name}>
                                <NavigationMenuLink href={item.href} className="text-sm font-medium text-neutral-600 hover:text-brand-beige  px-2 py-1 hover:bg-transparent">
                                    {item.name}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-4">
                <Button className="bg-black text-white hover:bg-neutral-800 rounded-full px-6 h-10">
                    Contact us <div className="ml-2 bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-medium">↗</div>
                </Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="top" className="rounded-b-[2rem]">
                        <div className="flex flex-col gap-6 mt-8 items-center">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-xl font-medium hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <Button className="w-full max-w-xs bg-black text-white rounded-full">Contact us</Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </motion.nav>
    )
}

export default Navbar
