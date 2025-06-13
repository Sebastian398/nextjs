import Link from 'next/link';

export default function NextjsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 py-16 px-4">
      <nav className="max-w-4xl mx-auto flex justify-between items-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-700">Next.js Info</h1>
        <ul className="flex space-x-6 text-indigo-600 font-medium">
          <li><a href="#que-es" className="hover:text-indigo-900 transition">¿Qué es?</a></li>
          <li><a href="#caracteristicas" className="hover:text-indigo-900 transition">Características</a></li>
          <li><a href="#uso" className="hover:text-indigo-900 transition">Uso</a></li>
        </ul>
      </nav>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-10">
        <section id="que-es" className="mb-8">
          <h2 className="text-4xl font-bold text-indigo-700 mb-4">¿Qué es Next.js?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Next.js es un framework de desarrollo web basado en React que facilita la creación de aplicaciones rápidas, interactivas y optimizadas para SEO.
            Ofrece renderizado del lado del servidor (SSR), generación de sitios estáticos (SSG), rutas automáticas y muchas herramientas modernas para construir sitios escalables y eficientes.
          </p>
        </section>

        <section id="caracteristicas" className="mb-8">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Características principales</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
            <li>Renderizado del lado del servidor y generación estática</li>
            <li>Optimización automática de imágenes y recursos</li>
            <li>Ruteo basado en archivos y API integradas</li>
            <li>Excelente para SEO y rendimiento</li>
          </ul>
        </section>

        <section id="uso">
          <p className="text-gray-700 text-lg leading-relaxed">
            Es ampliamente usado para crear sitios modernos, e-commerce y aplicaciones empresariales.
          </p>

          {/* Contenedor flex para ambos botones */}
          <div className="mt-6 flex gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">Aprende más</button>

            <Link
              href="/inicio"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition inline-block text-center">← Regresar a Inicio</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
