import Image from "next/image";
import Link from "next/link";

const industries = [
    {
        name: "Financial Services",
        href: "/industries/financial-services",
        image: "/images/financialServices.jpg",
    },
    {
        name: "Healthcare",
        href: "/industries/healthcare",
        image: "/images/healthcare.jpg",
    },
    {
        name: "Home Services",
        href: "/industries/home-services",
        image: "/images/1.jpg", // Placeholder mapping
    },
    {
        name: "Hospitality",
        href: "/industries/hospitality",
        image: "/images/2.jpg", // Placeholder mapping
    },
    {
        name: "Manufacturing",
        href: "/industries/manufacturing",
        image: "/images/manufacturing.jpg",
    },
    {
        name: "Professional Services",
        href: "/industries/professional-services",
        image: "/images/3.jpg", // Placeholder mapping
    },
    {
        name: "Real Estate",
        href: "/industries/real-estate",
        image: "/images/real_estate.jpg",
    },
    {
        name: "Retail & E-commerce",
        href: "/industries/retail-ecommerce",
        image: "/images/retail.jpg",
    },
    {
        name: "Technology & Media",
        href: "/industries/technology-media",
        image: "/images/tech.jpg",
    },
];

export default function IndustriesPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="py-20 px-6 text-center max-w-[1200px] mx-auto">
                <span className="inline-block py-1.5 px-3 rounded-full bg-[#e9f9f3] text-[#169b78] font-bold text-xs tracking-wider uppercase mb-3">
                    Industries
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f1720] mb-4 tracking-tight">
                    Tailored automation solutions for your industry
                </h1>
                <p className="text-[#6b7b8d] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    We understand the unique challenges and opportunities in each sector.
                    Explore how we help businesses like yours automate workflows, reduce
                    costs, and scale efficiently.
                </p>
            </section>

            {/* Grid Section */}
            <section className="pb-24 px-6 max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry) => (
                        <Link
                            key={industry.href}
                            href={industry.href}
                            className="group block bg-white border border-[#E7EDF2] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#1db993] hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="relative w-full aspect-[16/10] bg-[#f5f7fa] overflow-hidden">
                                <Image
                                    src={industry.image}
                                    alt={industry.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5 text-center">
                                <h3 className="text-lg font-semibold text-[#0f1720]">
                                    {industry.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
