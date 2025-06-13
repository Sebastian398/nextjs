import Link from 'next/link';

export default function TemaLibrePage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 py-16 px-4">
      <nav className="max-w-4xl mx-auto flex justify-between items-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-700">Inteligencia Artificial</h1>
        <ul className="flex space-x-6 text-indigo-600 font-medium">
          <li><a href="#introduccion" className="hover:text-indigo-900 transition">Introducción</a></li>
          <li><a href="#aplicaciones" className="hover:text-indigo-900 transition">Aplicaciones</a></li>
        </ul>
      </nav>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-10">
        <section id="introduccion" className="mb-8">
          <h2 className="text-4xl font-bold text-indigo-700 mb-4">Inteligencia Artificial</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            La inteligencia artificial (IA) es un área de la informática que busca crear sistemas capaces de realizar tareas que normalmente requieren inteligencia humana, como el aprendizaje, el razonamiento y la percepción.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 mb-4">
            <li>Aprendizaje automático (machine learning)</li>
            <li>Procesamiento de lenguaje natural</li>
            <li>Visión por computador</li>
            <li>Robótica</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            La IA está transformando industrias como la medicina, la educación, la logística y el entretenimiento, permitiendo soluciones innovadoras y eficientes.
          </p>
        </section>

        <div className="mt-8">
          <Link
            href="/inicio"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition inline-block text-center">← Regresar a Inicio
            </Link>
        </div>
      </div>
    </main>
  );
}
