import Link from 'next/link';

export default function TailwindPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 py-16 px-4">
      <nav className="max-w-4xl mx-auto flex justify-between items-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-700">Tailwind CSS Info</h1>
        <ul className="flex space-x-6 text-indigo-600 font-medium">
          <li><a href="#que-es" className="hover:text-indigo-900 transition">¿Qué es?</a></li>
          <li><a href="#componentes" className="hover:text-indigo-900 transition">Componentes</a></li>
        </ul>
      </nav>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-10">
        <section id="que-es" className="mb-8">
          <h2 className="text-4xl font-bold text-indigo-700 mb-4">¿Qué es Tailwind CSS?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Tailwind CSS es un framework de utilidades para CSS que permite diseñar interfaces rápidamente usando clases predefinidas. 
            Su enfoque utility-first facilita la personalización y el desarrollo ágil de componentes sin escribir CSS personalizado.
          </p>
        </section>

        <section id="componentes">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Ejemplo de 3 componentes:</h3>
          <div className="flex flex-col gap-6">
            {/* Botón */}
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold transition">
              Botón Tailwind
            </button>
            {/* Tarjeta */}
            <div className="border rounded-xl p-6 shadow-md bg-gray-50">
              <h4 className="font-bold text-xl mb-3 text-indigo-700">Tarjeta</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Card usando Tailwind.
              </p>
            </div>
            {/* Alerta */}
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-5 rounded-lg text-lg">
              <p>¡Alerta de ejemplo en Tailwind!</p>
            </div>
          </div><br></br>
        </section>
          <Link
            href="/inicio"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold transition inline-block text-center"
          >
            ← Regresar a Inicio
          </Link>
        </div>
    </main>
  );
}
