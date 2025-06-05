"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Camera, Play, Eye } from "lucide-react"

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("todas")

  const categories = [
    { id: "todas", label: "Todas" },
    { id: "flora", label: "Flora" },
    { id: "fauna", label: "Fauna" },
    { id: "paisajes", label: "Paisajes" },
    { id: "actividades", label: "Actividades" },
  ]

  const galleryItems = [
    {
      id: 1,
      type: "image",
      category: "fauna",
      title: "Colibrí Esmeralda",
      description: "Una de las 150+ especies de aves del bosque",
      image: "/placeholder.svg?height=400&width=600",
      alt: "Colibrí esmeralda alimentándose de flores nativas",
    },
    {
      id: 2,
      type: "image",
      category: "flora",
      title: "Orquídeas Nativas",
      description: "Especies endémicas en su hábitat natural",
      image: "/placeholder.svg?height=400&width=600",
      alt: "Orquídeas nativas creciendo en el bosque protegido",
    },
    {
      id: 3,
      type: "video",
      category: "paisajes",
      title: "Amanecer en el Bosque",
      description: "La magia del bosque al despertar",
      image: "/placeholder.svg?height=400&width=600",
      alt: "Vista del amanecer sobre el dosel del bosque",
    },
    {
      id: 4,
      type: "image",
      category: "actividades",
      title: "Observación de Aves",
      description: "Estudiantes en actividad de campo",
      image: "/placeholder.svg?height=400&width=600",
      alt: "Grupo de estudiantes observando aves con binoculares",
    },
    {
      id: 5,
      type: "image",
      category: "fauna",
      title: "Mariposa Morpho",
      description: "Lepidóptero característico de la región",
      image: "/placeholder.svg?height=400&width=600",
      alt: "Mariposa morpho azul posada en una hoja",
    },
    {
      id: 6,
      type: "image",
      category: "paisajes",
      title: "Sendero Principal",
      description: "Camino interpretativo del bosque",
      image: "/placeholder.svg?height=400&width=600",
      alt: "Sendero serpenteante a través del bosque nativo",
    },
    {
      id: 7,
      type: "image",
      category: "flora",
      title: "Cecropia Gigante",
      description: "Árbol emblemático del bosque húmedo",
      image: "/placeholder.svg?height=400&width=600",
      alt: "Gran árbol cecropia con su característico follaje",
    },
    {
      id: 8,
      type: "video",
      category: "actividades",
      title: "Taller de Fotografía",
      description: "Aprendiendo técnicas de fotografía natural",
      image: "/placeholder.svg?height=400&width=600",
      alt: "Instructor enseñando técnicas de fotografía a estudiantes",
    },
    {
      id: 9,
      type: "image",
      category: "paisajes",
      title: "Bocatoma del Canal",
      description: "Infraestructura hídrica protegida",
      image: "/placeholder.svg?height=400&width=600",
      alt: "Vista de la bocatoma del Canal Nuevo Imperial",
    },
  ]

  const filteredItems =
    activeCategory === "todas" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Galería del Bosque</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora la belleza natural y la biodiversidad del Bosque de Protección a través de imágenes y videos
            capturados por visitantes y expertos.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id
                  ? "bg-green-600 hover:bg-green-700"
                  : "hover:bg-green-50 hover:text-green-700 hover:border-green-300"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.type === "video" ? (
                      <Play className="w-12 h-12 text-white" />
                    ) : (
                      <Eye className="w-12 h-12 text-white" />
                    )}
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className={item.type === "video" ? "bg-red-600" : "bg-green-600"}>
                    {item.type === "video" ? <Play className="w-3 h-3 mr-1" /> : <Camera className="w-3 h-3 mr-1" />}
                    {item.type === "video" ? "Video" : "Foto"}
                  </Badge>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-green-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Tienes fotos del bosque?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Comparte tus mejores capturas del Bosque de Protección y ayuda a otros a descubrir la belleza de este
            ecosistema único. Las mejores fotos serán destacadas en nuestra galería oficial.
          </p>
          <Button className="bg-green-600 hover:bg-green-700">Compartir mis Fotos</Button>
        </div>
      </div>
    </section>
  )
}
