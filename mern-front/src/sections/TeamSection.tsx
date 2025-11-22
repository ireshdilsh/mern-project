const people = [
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Dries Vincent',
        role: 'Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Courtney Henry',
        role: 'Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Tom Cook',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

export default function TeamSection() {
    return (
        <div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                            Meet our leadership
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
                            best results for our clients.
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img
                                        alt=""
                                        src={person.imageUrl}
                                        className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                                    />
                                    <div>
                                        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 -mt-15">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <img
                        alt=""
                        src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
                        className="mx-auto h-12"
                    />
                    <figure className="mt-10">
                        <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                            <p>
                                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                                molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                            </p>
                        </blockquote>
                        <figcaption className="mt-10">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                className="mx-auto size-10 rounded-full"
                            />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div className="font-semibold text-gray-900">Judith Black</div>
                                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                                    <circle r={1} cx={1} cy={1} />
                                </svg>
                                <div className="text-gray-600">CEO of Workcation</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
        </div>
    )
}
