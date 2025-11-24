import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
    return (
        <div>
            <Navbar />
            {/* About */}
            <section className="flex flex-col items-center justify-center py-24 px-6"
                id="about"
            >
                <h1 className="text-5xl font-semibold text-center">
                    Everyone has a story to tell
                </h1>

                <p className="text-neutral-500 mt-4 text-center max-w-2xl text-lg">
                    Everyone has a story to tell. We make it effortless to capture, organize,
                    and bring those stories to life with smart, intuitive AI tools.
                </p>

                {/* Feature Cards */}
                <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center">
                        <img
                            src="https://img.icons8.com/color/48/000000/folder-invoices.png"
                            alt="Smart Organization"
                            className="mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Smart Organization</h3>
                        <p className="text-neutral-500 text-sm">
                            Automatically sort photos and videos by people, events, and emotions.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center">
                        <img
                            src="https://img.icons8.com/color/48/000000/storytelling.png"
                            alt="AI Storytelling"
                            className="mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">AI Storytelling</h3>
                        <p className="text-neutral-500 text-sm">
                            Transform your memories into meaningful narratives for family and friends.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center">
                        <img
                            src="https://img.icons8.com/color/48/000000/video-playlist.png"
                            alt="Highlight Videos"
                            className="mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Highlight Videos</h3>
                        <p className="text-neutral-500 text-sm">
                            Create cinematic recap videos with a single click.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center">
                        <img
                            src="https://img.icons8.com/color/48/000000/privacy.png"
                            alt="Secure & Private"
                            className="mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
                        <p className="text-neutral-500 text-sm">
                            Keep your memories safe with encrypted storage and full privacy controls.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center">
                        <img
                            src="https://img.icons8.com/color/48/000000/share.png"
                            alt="Family Sharing"
                            className="mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Family Sharing</h3>
                        <p className="text-neutral-500 text-sm">
                            Easily share albums and stories with your loved ones.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center">
                        <img
                            src="https://img.icons8.com/color/48/000000/cloud.png"
                            alt="Cloud Backup"
                            className="mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Cloud Backup</h3>
                        <p className="text-neutral-500 text-sm">
                            Access your memories anytime, anywhere with secure cloud backup.
                        </p>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
