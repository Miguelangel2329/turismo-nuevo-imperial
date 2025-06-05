import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TelescopeIcon as Binoculars, Camera, BookOpen, Users, Clock, MapPin, TreePine, Leaf } from "lucide-react"
import Image from "next/image"

export function ActivitiesSection() {
  const activities = [
    {
      title: "Observación de Aves",
      description:
        "Descubre más de 150 especies de aves en su hábitat natural. Actividad guiada con expertos ornitólogos.",
      icon: Binoculars,
      duration: "3-4 horas",
      difficulty: "Fácil",
      groupSize: "Hasta 12 personas",
      highlights: ["Aves endémicas", "Guía especializado", "Equipo incluido"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Senderos Interpretativos",
      description: "Recorre senderos diseñados para el aprendizaje sobre flora, fauna y ecosistemas del bosque.",
      icon: TreePine,
      duration: "2-3 horas",
      difficulty: "Fácil a Moderado",
      groupSize: "Hasta 15 personas",
      highlights: ["Flora nativa", "Interpretación ambiental", "Senderos señalizados"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Fotografía de Naturaleza",
      description: "Talleres de fotografía enfocados en capturar la belleza natural del bosque de manera responsable.",
      icon: Camera,
      duration: "4-5 horas",
      difficulty: "Intermedio",
      groupSize: "Hasta 8 personas",
      highlights: ["Técnicas especializadas", "Spots fotográficos", "Ética fotográfica"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Educación Ambiental",
      description: "Programas educativos diseñados especialmente para estudiantes de turismo y conservación.",
      icon: BookOpen,
      duration: "6-8 horas",
      difficulty: "Educativo",
      groupSize: "Hasta 25 personas",
      highlights: ["Contenido académico", "Certificación", "Material didáctico"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Investigación Participativa",
      description: "Participa en proyectos de investigación científica y contribuye a la conservación del bosque.",
      icon: Leaf,
      duration: "Día completo",
      difficulty: "Avanzado",
      groupSize: "Hasta 10 personas",
      highlights: ["Investigación real", "Metodología científica", "Contribución a la ciencia"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Voluntariado Ambiental",
      description: "Únete a actividades de restauración, limpieza y mantenimiento del área protegida.",
      icon: Users,
      duration: "4-6 horas",
      difficulty: "Moderado",
      groupSize: "Hasta 20 personas",
      highlights: ["Impacto directo", "Trabajo en equipo", "Certificado de participación"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="actividades" className="py-20 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Actividades de Ecoturismo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experiencias diseñadas para conectarte con la naturaleza mientras contribuyes a la conservación y educación
            ambiental.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={activity.image || "/placeholder.svg"}
                  alt={`Actividad de ${activity.title.toLowerCase()}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600 hover:bg-green-600">
                    <activity.icon className="w-4 h-4 mr-1" />
                    {activity.title}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{activity.title}</CardTitle>
                <CardDescription className="text-gray-600">{activity.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-green-600" />
                    {activity.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-green-600" />
                    {activity.groupSize}
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-green-600" />
                  Dificultad: {activity.difficulty}
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Incluye:</h4>
                  <div className="flex flex-wrap gap-1">
                    {activity.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">Más Información</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿Interesado en una experiencia personalizada para tu grupo de estudiantes?
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Solicitar Programa Educativo Personalizado
          </Button>
        </div>
      </div>
    </section>
  )
}
