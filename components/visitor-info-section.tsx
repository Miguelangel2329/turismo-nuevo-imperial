import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Phone, Mail, Calendar, Users, DollarSign, AlertTriangle, CheckCircle, Info } from "lucide-react"

export function VisitorInfoSection() {
  const visitInfo = [
    {
      icon: Clock,
      title: "Horarios de Visita",
      details: [
        "Lunes a Viernes: 8:00 AM - 4:00 PM",
        "Sábados: 8:00 AM - 2:00 PM",
        "Domingos: Cerrado",
        "Última entrada: 2 horas antes del cierre",
      ],
    },
    {
      icon: DollarSign,
      title: "Tarifas",
      details: [
        "Estudiantes: S/. 10.00",
        "Adultos: S/. 15.00",
        "Grupos (10+): 20% descuento",
        "Guía especializado: S/. 50.00 por grupo",
      ],
    },
    {
      icon: Users,
      title: "Capacidad",
      details: [
        "Máximo 25 personas por grupo",
        "Reserva obligatoria para grupos",
        "Visitas individuales permitidas",
        "Capacidad diaria: 100 visitantes",
      ],
    },
  ]

  const requirements = [
    "Calzado cerrado y cómodo para caminar",
    "Ropa de colores neutros (evitar colores brillantes)",
    "Protector solar y repelente de insectos",
    "Botella de agua reutilizable",
    "Cámara fotográfica (opcional)",
    "Binoculares (se pueden alquilar en el sitio)",
  ]

  const rules = [
    "Mantener silencio para no disturbar la fauna",
    "No alimentar a los animales",
    "No recolectar plantas, flores o frutos",
    "Permanecer en los senderos señalizados",
    "No fumar dentro del área protegida",
    "Llevar la basura de vuelta",
  ]

  return (
    <section id="visita" className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Planifica tu Visita</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Toda la información que necesitas para disfrutar de una experiencia segura y enriquecedora en el Bosque de
            Protección.
          </p>
        </div>

        {/* Visit Information Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {visitInfo.map((info, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <info.icon className="w-6 h-6 mr-3 text-green-600" />
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Location and Contact */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-green-600" />
                Ubicación y Acceso
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Dirección:</h4>
                <p className="text-gray-600">
                  Bocatoma del Canal Nuevo Imperial
                  <br />
                  Distrito de Imperial, Cañete
                  <br />
                  Región Lima, Perú
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cómo llegar:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Desde Lima: 2.5 horas en vehículo</li>
                  <li>• Transporte público hasta Imperial</li>
                  <li>• Taxi local hasta la bocatoma (15 min)</li>
                </ul>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">Ver en Google Maps</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="w-6 h-6 mr-3 text-green-600" />
                Contacto y Reservas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-gray-400" />
                  <span className="text-gray-600">+51 999 123 456</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-gray-400" />
                  <span className="text-gray-600">info@bosqueimperial.pe</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3 text-gray-400" />
                  <span className="text-gray-600">Reservas con 48h de anticipación</span>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600 mb-4">
                  Para grupos de estudiantes, ofrecemos tarifas especiales y programas educativos personalizados.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">Hacer Reserva</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Requirements and Rules */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Info className="w-6 h-6 mr-3" />
                Qué Traer
              </CardTitle>
              <CardDescription>Elementos recomendados para tu visita</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start text-blue-700">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                    {requirement}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50/50">
            <CardHeader>
              <CardTitle className="flex items-center text-amber-800">
                <AlertTriangle className="w-6 h-6 mr-3" />
                Normas de Visita
              </CardTitle>
              <CardDescription>Reglas importantes para la conservación</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start text-amber-700">
                    <AlertTriangle className="w-4 h-4 mr-2 text-amber-500 mt-0.5 flex-shrink-0" />
                    {rule}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Special Programs for Students */}
        <div className="mt-16 bg-green-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Programas Especiales para Estudiantes de Turismo</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Ofrecemos experiencias educativas diseñadas específicamente para estudiantes de turismo, incluyendo talleres
            prácticos, certificaciones y oportunidades de investigación en ecoturismo y conservación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Solicitar Programa Educativo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Descargar Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
