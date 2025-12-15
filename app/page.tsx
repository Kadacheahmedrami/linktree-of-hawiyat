import Image from "next/image"
import { Instagram, Facebook, Linkedin, Globe, Smartphone } from "lucide-react"

export default function HawiyatLinktree() {
  const links = [
    {
      title: "Visit Our Website",
      url: "https://hawiyat.org",
      icon: <Globe className="w-5 h-5" />,
      color: "bg-[#FFE566]", // Vibrant sunny yellow
    },
    {
      title: "Open App",
      url: "https://app.hawiyat.org",
      icon: <Smartphone className="w-5 h-5" />,
      color: "bg-[#80D4FF]", // Bright sky blue
    },
    {
      title: "Instagram",
      url: "https://instagram.com/hawiyat.cloud",
      icon: <Instagram className="w-5 h-5" />,
      color: "bg-[#FF99CC]", // Vibrant pink
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/people/Hawiyat/61577698462110/",
      icon: <Facebook className="w-5 h-5" />,
      color: "bg-[#66B3FF]", // Bright Facebook blue
    },
    {
      title: "WhatsApp: +213 559 55 59 51",
      url: "https://wa.me/213559555951",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      color: "bg-[#66E3A2]", // Vibrant WhatsApp green
    },
    {
      title: "WhatsApp: +213 674 67 84 94",
      url: "https://wa.me/213674678494",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      color: "bg-[#66E3A2]", // Vibrant WhatsApp green
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/company/hawiyat/",
      icon: <Linkedin className="w-5 h-5" />,
      color: "bg-[#66B3FF]", // Bright LinkedIn blue
    },
  ]

  return (
    <main className="min-h-screen bg-[#DFDFDF] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Logo and Title Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="mb-8 relative w-32 h-32">
            <Image src="/images/hwlogo.png" alt="Hawiyat Logo" fill className="object-contain" />
          </div>
          <h1 className="text-5xl font-bold text-black mb-3 text-center" >
            Hawiyat
          </h1>
          <p className="text-xl text-black/80 text-center">Empowering Algeria with Cloud Innovation</p>
        </div>

        {/* Links Section */}
        <div className="space-y-5">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block ${link.color} border-4 border-black py-5 px-6 transition-all hover:translate-x-2 hover:translate-y-2 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-black group-hover:scale-110 transition-transform">{link.icon}</div>
                  <span className="text-black font-bold text-lg" >
                    {link.title}
                  </span>
                </div>
                <svg
                  className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-black/60 text-sm">© 2025 Hawiyat. All rights reserved.</p>
        </div>
      </div>
    </main>
  )
}
