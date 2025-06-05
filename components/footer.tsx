import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const quickLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-nosotros", label: "Sobre el Bosque" },
    { href: "#actividades", label: "Actividades" },
    { href: "#conservacion", label: "Conservación" },
  ]

  const resources = [
    { href: "#", label: "Guía del Visitante" },
    { href: "#", label: "Material Educativo" },
    { href: "#", label: "Investigaciones" },
    { href: "#", label: "Voluntariado" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">Bosque Imperial</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Área Natural Protegida dedicada a la conservación, educación ambiental y ecoturismo responsable en el
              corazón de la región de Lima.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2 text-green-400" />
                Imperial, Cañete, Lima
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2 text-green-400" />
                +51 999 123 456
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2 text-green-400" />
                info@bosqueimperial.pe
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm px-1 py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm px-1 py-0.5"
                  >
                    {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mantente Informado</h3>
            <p className="text-gray-300 text-sm mb-4">
              Recibe noticias sobre conservación, nuevas actividades y programas educativos.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-green-500"
              />
              <Button className="w-full bg-green-600 hover:bg-green-700">Suscribirse</Button>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full p-1"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Bosque de Protección Aledaño a la Bocatoma del Canal Nuevo Imperial.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Todos los derechos reservados. Desarrollado con 💚 para la conservación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
