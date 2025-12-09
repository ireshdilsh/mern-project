export default function FeaturesPage() {
    const features = [
        {
            title: "Instant Summaries",
            description: "Get the main points of any text in seconds, saving you valuable time.",
            icon: "⚡"
        },
        {
            title: "Custom Length Control",
            description: "Adjust the summary length from a few bullet points to detailed paragraphs.",
            icon: "⚙️"
        },
        {
            title: "Multiple Formats",
            description: "Summarize articles, PDFs, reports, and web links seamlessly.",
            icon: "📄"
        },
        {
            title: "Key Takeaways Highlight",
            description: "Our AI identifies and highlights the most critical information automatically.",
            icon: "💡"
        },
        {
            title: "Multilingual Support",
            description: "Summarize content written in over 20 different languages.",
            icon: "🌐"
        },
        {
            title: "Secure & Private",
            description: "Your data is encrypted and never stored, ensuring complete privacy.",
            icon: "🔒"
        },
    ];

    return (
        <div className='px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16 sm:py-20 md:py-24' id='features'>
            {/* --- Section Header --- */}
            <div className='text-center max-w-3xl mx-auto mb-12 sm:mb-16'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Powerful Features to Boost Productivity</h2>
                <p className='text-neutral-500 mt-4 text-lg'>
                    Stop skimming and start learning. Our AI tools provide fast, accurate summaries so you can process information faster than ever before.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>

                {features.map((feature, index) => (
                    // Feature Card Design
                    <div
                        key={index}
                        className='bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1'
                    >
                        {/* Icon/Emoji */}
                        <div className='text-4xl mb-4'>
                            {feature.icon}
                        </div>

                        {/* Title */}
                        <h3 className='text-xl font-semibold mb-2'>
                            {feature.title}
                        </h3>

                        {/* Description */}
                        <p className='text-neutral-500'>
                            {feature.description}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    );
}