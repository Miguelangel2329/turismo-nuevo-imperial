import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Leaf, TreePine, Heart } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Área Protegida",
      description: "Ecosistema único protegido por ley para preservar la biodiversidad local",
    },
    {
      icon: TreePine,
      title: "Bosque Nativo",
      description: "Vegetación autóctona que alberga especies endémicas de la región",
    },
    {
      icon: Leaf,
      title: "Conservación Activa",
      description: "Programas continuos de restauración y protección ambiental",
    },
    {
      icon: Heart,
      title: "Turismo Responsable",
      description: "Experiencias que generan conciencia y apoyan la conservación",
    },
  ]

  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre el Bosque de Protección</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un santuario natural que protege la bocatoma del Canal Nuevo Imperial, vital para el suministro de agua y la
            conservación de la biodiversidad regional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Un Ecosistema Único en el Corazón de la Región</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              El Bosque de Protección Aledaño a la Bocatoma del Canal Nuevo Imperial representa uno de los últimos
              refugios de biodiversidad en la zona. Este espacio protegido no solo salvaguarda especies nativas, sino
              que también cumple una función vital en la protección de recursos hídricos.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Establecido como área natural protegida, el bosque alberga una rica variedad de flora y fauna, incluyendo
              especies endémicas que han encontrado en este espacio su último refugio. La conservación de este
              ecosistema es fundamental para mantener el equilibrio ecológico de toda la región.
            </p>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <p className="text-green-800 font-medium">
                "La educación ambiental y el ecoturismo responsable son herramientas clave para garantizar la
                conservación a largo plazo de este valioso ecosistema."
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Vista del bosque protegido mostrando la diversidad de vegetación nativa"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
