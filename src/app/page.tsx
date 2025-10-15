import Link from "next/link";

export default function Home() {
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
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-4">Welcome to Orchids</h2>
            <p className="text-xl mb-8">Building the future, one step at a time</p>
            <Link 
              href="/about" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold mb-3 text-blue-600">Innovation</h4>
                <p className="text-gray-700">
                  We drive innovation through cutting-edge technology and creative solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold mb-3 text-blue-600">Collaboration</h4>
                <p className="text-gray-700">
                  Working together to achieve remarkable results for our community.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold mb-3 text-blue-600">Excellence</h4>
                <p className="text-gray-700">
                  Committed to delivering excellence in everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>
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
