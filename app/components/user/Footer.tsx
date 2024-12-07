import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  PinIcon as Pinterest,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative w-full bg-cover bg-no-repeat bg-center bg-blue-950 text-white z-[2]"
      style={{
        backgroundImage: "url('/images/footer-background.svg')",
        paddingTop: "260px",
        paddingBottom: "20px",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div>
            <Image
              src="/placeholder.svg?height=50&width=150"
              alt="Egg-cellent"
              width={150}
              height={50}
              className="h-12 w-auto brightness-0 invert"
            />
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/our-farms"
                  className="text-white/90 hover:text-white"
                >
                  Our Farms
                </Link>
              </li>
              <li>
                <Link
                  href="/choose-happy"
                  className="text-white/90 hover:text-white"
                >
                  Choose Happy
                </Link>
              </li>
              <li>
                <Link
                  href="/recipes"
                  className="text-white/90 hover:text-white"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/store-locator"
                  className="text-white/90 hover:text-white"
                >
                  Store Locator
                </Link>
              </li>
            </ul>
          </div>

          {/* Heritage */}
          <div>
            <h3 className="font-semibold text-white mb-4">Heritage</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/vitamin-plus"
                  className="text-white/90 hover:text-white"
                >
                  Vitamin Plus
                </Link>
              </li>
              <li>
                <Link
                  href="/organic"
                  className="text-white/90 hover:text-white"
                >
                  Organic
                </Link>
              </li>
              <li>
                <Link
                  href="/free-range"
                  className="text-white/90 hover:text-white"
                >
                  Free Range
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faqs" className="text-white/90 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-white/90 hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/growers"
                  className="text-white/90 hover:text-white"
                >
                  Growers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-white/90 hover:text-white">
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/90 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" className="text-white hover:text-white/80">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-white hover:text-white/80">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-white hover:text-white/80">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-white hover:text-white/80">
              <Pinterest className="h-6 w-6" />
              <span className="sr-only">Pinterest</span>
            </Link>
            <Link href="#" className="text-white hover:text-white/80">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-white hover:text-white/80">
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
          <Link
            href="/buy-now"
            className="bg-[#1e1b4b] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Buy Now
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
          <p className="text-white/90 text-sm mb-4 md:mb-0">
            © Egg-cellent
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-white/90 hover:text-white text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="text-white/90 hover:text-white text-sm"
            >
              Terms of Use
            </Link>
            <span className="text-white/90 text-sm">
              Website Made by Prisma
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
