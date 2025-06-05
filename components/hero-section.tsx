import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/nuev.png?height=1080&width=1920"
          alt="Vista panorámica del Bosque de Protección Aledaño a la Bocatoma del Canal Nuevo Imperial"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center text-white">
        <Badge className="mb-4 bg-green-600/90 hover:bg-green-600 text-white border-0">
          <MapPin className="w-4 h-4 mr-1" />
          Área Natural Protegida
        </Badge>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Bosque de Protección
          <span className="block text-green-400">Canal Nuevo Imperial</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Descubre la biodiversidad única de este santuario natural. Una experiencia de ecoturismo que conecta
          educación, conservación y aventura.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3 h-auto">
            Explorar el Bosque
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-green-800 text-lg px-8 py-3 h-auto"
          >
            Ver Actividades
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-400">150+</div>
            <div className="text-sm md:text-base">Especies de Aves</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-400">50+</div>
            <div className="text-sm md:text-base">Especies de Plantas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-400">25</div>
            <div className="text-sm md:text-base">Hectáreas Protegidas</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-2xl md:text-3xl font-bold text-green-400 ml-1">4.8</span>
            </div>
            <div className="text-sm md:text-base">Valoración Visitantes</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
