import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar fijo */}
      <nav className="bg-gray-800 text-white py-4 px-6 fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold">Mi Sitio</div>
          <div className="space-x-4">
            <Link href="/nextjs" className="hover:underline">Next.js</Link>
            <Link href="/tailwind" className="hover:underline">Tailwind CSS</Link>
            <Link href="/ia" className="hover:underline">IA</Link>
          </div>
        </div>
      </nav>

      {/* Header con imagen de fondo y mensaje sin fondo negro */}
      <header 
        className="mt-20 bg-blue-700 text-white py-20 shadow-md bg-contain bg-center bg-repeat"
        style={{backgroundImage: "url('/img/fondo3.jpg')"}}
      >
        <div className="max-w-7xl mx-auto px-4 p-8">
          <h1 className="text-4xl font-bold">¡Bienvenido a nuestro sitio web!</h1>
          <p className="mt-2 text-lg max-w-xl">
            Explora nuestras páginas para aprender sobre Next.js, Tailwind CSS y más.
          </p>
        </div>
      </header>

      <section className="flex-grow max-w-4xl mx-auto px-4 py-10 w-full">
        <p className="text-xl text-gray-700 font-medium mb-8 text-center">
          Elige una de las siguientes secciones para descubrir más sobre cada tecnología:
        </p>
        <div className="flex flex-row gap-8 w-full">
          <Link href="/nextjs" className="flex-1">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-xl rounded-xl font-semibold shadow-md transition-all duration-200 transform hover:scale-105">
              ¿Qué es NextJS?
            </button>
          </Link>
          <Link href="/tailwind" className="flex-1">
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-6 text-xl rounded-xl font-semibold shadow-md transition-all duration-200 transform hover:scale-105">
              TailwindCSS y Ejemplos
            </button>
          </Link>
          <Link href="/ia" className="flex-1">
            <button className="w-full  bg-teal-500 hover:bg-teal-600 text-white py-6 text-xl rounded-xl font-semibold shadow-md transition-all duration-200 transform hover:scale-105">
              Inteligencia Artificial (IA)
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
