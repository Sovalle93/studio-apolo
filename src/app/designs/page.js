    'use client';

    export default function PortfolioBook() {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
        {/* Description Section */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#272e80' }}>
            Portafolio
            </h1>
            <p className="text-xl" style={{ color: '#3754a5' }}>
            Explora nuestros diseños de cada proyecto que demustra nuestras innovadoras soluciones
            que transforman los negocios de nuestros clientes a traves the storytelling estratégico
            y desarrollo de marcas.
            </p>
        </div>

        {/* Embedded Booklet */}
        <div className="relative max-w-6xl mx-auto bg-white p-4 rounded-xl shadow-xl">
            <div className="aspect-[4/3]">
            <iframe
                src="https://simplebooklet.com/rovallebook25"
                className="w-full h-full border-2 border-gray-200 rounded-lg"
                allowFullScreen
                title="Creative Portfolio"
            />
            </div>
        </div>

        {/* Portfolio Description */}
        <div className="max-w-4xl mx-auto mt-16 p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#272e80' }}>Sobre este Portafolio</h2>
            <div className="prose prose-lg" style={{ color: '#3754a5' }}>
            <p>
                Esta coleccion de trabajos es la trayectoria de 10 años de nuestra directora creativa, que
                demuestra nuestro enfoque en cada proyecto:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Posicionamiento estratégico de marcas</li>
                <li>Decisiones de diseño basadas en datos que aumentan la participación del cliente</li>
                <li>Coherencia entre plataformas con principios de diseño adaptativo</li>
                <li>Prácticas de diseño sostenible que reducen el impacto ambiental del cliente</li>
            </ul>
            <p className="mt-4">
            Nuestro director creativo aporta más de 15 años de experiencia combinando
            la artesanía tradicional con soluciones digitales de vanguardia
            </p>
            </div>
        </div>
    </div>
    );
}