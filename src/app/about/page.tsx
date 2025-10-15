import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="bg-blue-600 text-white py-4 px-6 shadow-md">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Orchids</h1>
          <div className="space-x-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Orchids</h2>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Orchids, we are committed to fostering innovation, collaboration, and excellence.
                Our organization brings together talented individuals who share a passion for making
                a positive impact on our community and the world.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We envision a future where technology and creativity converge to solve the world&apos;s
                most pressing challenges. Through our work, we strive to create lasting value and
                meaningful change.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Values</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Innovation and continuous improvement</li>
                <li>Integrity and transparency in all our actions</li>
                <li>Collaboration and teamwork</li>
                <li>Excellence in execution</li>
                <li>Commitment to our community</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 Orchids Organization. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
