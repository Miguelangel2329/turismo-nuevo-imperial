import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Shield, Droplets, TreePine, Users, BookOpen, Heart, Target, TrendingUp } from "lucide-react"
import Image from "next/image"

export function ConservationSection() {
  const conservationProjects = [
    {
      title: "Restauración de Hábitat",
      description: "Reforestación con especies nativas para recuperar áreas degradadas",
      progress: 75,
      goal: "50 hectáreas restauradas",
      achieved: "37.5 hectáreas completadas",
    },
    {
      title: "Protección de Fuentes de Agua",
      description: "Conservación de la bocatoma y sistemas hídricos del área",
      progress: 90,
      goal: "100% de fuentes protegidas",
      achieved: "90% de objetivos cumplidos",
    },
    {
      title: "Monitoreo de Biodiversidad",
      description: "Seguimiento científico de especies de flora y fauna",
      progress: 60,
      goal: "Inventario completo",
      achieved: "60% de especies catalogadas",
    },
  ]

  const impactStats = [
    {
      icon: TreePine,
      value: "2,500+",
      label: "Árboles Plantados",
      description: "En los últimos 3 años",
    },
    {
      icon: Droplets,
      value: "100%",
      label: "Calidad del Agua",
      description: "Mantenida en niveles óptimos",
    },
    {
      icon: Users,
      value: "1,200+",
      label: "Estudiantes Educados",
      description: "Programas de educación ambiental",
    },
    {
      icon: Shield,
      value: "25",
      label: "Hectáreas Protegidas",
      description: "Bajo conservación activa",
    },
  ]

  return (
    <section id="conservacion" className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conservación y Desarrollo Sostenible</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro compromiso con la protección del ecosistema se refleja en acciones concretas y resultados medibles
            que garantizan la sostenibilidad a largo plazo.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                <CardTitle className="text-lg">{stat.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{stat.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Conservation Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Proyectos de Conservación Activos</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {conservationProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-green-600" />
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progreso</span>
                      <span className="font-semibold">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                  <div className="text-sm space-y-1">
                    <div className="flex items-center text-gray-600">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                      Meta: {project.goal}
                    </div>
                    <div className="text-green-600 font-medium">✓ {project.achieved}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Educational Impact */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Educación Ambiental para el Futuro</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Creemos que la educación es la base de la conservación. Nuestros programas están diseñados específicamente
              para estudiantes de turismo, proporcionando conocimientos prácticos sobre ecoturismo responsable y gestión
              de áreas protegidas.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <BookOpen className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Programas Académicos</h4>
                  <p className="text-gray-600 text-sm">Cursos certificados en ecoturismo y conservación</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Talleres Prácticos</h4>
                  <p className="text-gray-600 text-sm">Experiencias hands-on en conservación y turismo sostenible</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Voluntariado</h4>
                  <p className="text-gray-600 text-sm">Oportunidades de contribuir directamente a la conservación</p>
                </div>
              </div>
            </div>

            <Button className="bg-green-600 hover:bg-green-700">Únete a Nuestros Programas</Button>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Estudiantes participando en actividades de educación ambiental en el bosque"
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
