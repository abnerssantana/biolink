import Image from "next/image"
import Link from "next/link"
import { 
  Cake, 
  Mail, 
  MapPin, 
  Play, 
  Youtube, 
  BookOpen, 
  Calendar, 
  Trophy, 
  Calculator, 
  Wrench, 
  Heart, 
  ShoppingBag 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FeatureCard } from "@/components/feature-card"
import { ThemeToggle } from "@/components/theme-toggle"
import { SocialLinks } from "@/components/social-links"
import { NewsletterForm } from "@/components/newsletter-form"
import { UpcomingEvents } from "@/components/upcoming-events"
import { DownloadResources } from "@/components/download-resources"
import { QuickLinks } from "@/components/quick-links"
import { AnimatedBackground } from "@/components/animated-background"
import { FeaturedVideosSection } from "@/components/featured-videos-section"
import { siteConfig } from "@/config/site"

export default function Home() {
  // Generate Quick Links with Icons
  const quickLinksWithIcons = siteConfig.quickLinks.map(link => {
    let icon
    
    switch (link.icon) {
      case "book":
        icon = <BookOpen className="h-4 w-4" />
        break
      case "calendar":
        icon = <Calendar className="h-4 w-4" />
        break
      case "shopping-bag":
        icon = <ShoppingBag className="h-4 w-4" />
        break
      case "trophy":
        icon = <Trophy className="h-4 w-4" />
        break
      case "calculator":
        icon = <Calculator className="h-4 w-4" />
        break
      case "wrench":
        icon = <Wrench className="h-4 w-4" />
        break
      default:
        icon = <Heart className="h-4 w-4" />
    }
    
    return {
      ...link,
      icon
    }
  })

  return (
    <main className="min-h-screen">
      {/* Dynamic animated background */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 py-8">
        {/* Header with Theme Toggle */}
        <div className="flex justify-end mb-6">
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Section - Left Column */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card className="overflow-hidden bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 dark:from-zinc-800/90 dark:to-zinc-950/90 backdrop-blur-sm border-zinc-800/50">
              <CardHeader className="pb-0">
                <div className="flex justify-center">
                  <Image
                    src="/avatar.jpg"
                    alt={siteConfig.author.name}
                    width={150}
                    height={150}
                    className="rounded-full border-4 border-primary object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="text-center pt-4">
                <div className="mb-2 text-orange-400">
                  <span>🏃‍♂️ Ultramaratonista </span>
                  <span className="inline-flex items-center">🏅 🔥</span>
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-2">{siteConfig.author.name}</CardTitle>
                <CardDescription className="text-zinc-300 dark:text-zinc-400">
                  {siteConfig.description}
                </CardDescription>
              </CardContent>
            </Card>

            {/* Personal Info Cards */}
            <Card className="bg-zinc-900/80 text-white dark:bg-zinc-800/80 backdrop-blur-sm border-zinc-800/50">
              <CardContent className="p-4 flex items-center gap-3">
                <Cake className="h-5 w-5 text-zinc-400" />
                <span>Nascido em {siteConfig.author.birthYear} | {siteConfig.author.weight} | {siteConfig.author.height}</span>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/80 text-white dark:bg-zinc-800/80 backdrop-blur-sm border-zinc-800/50">
              <CardContent className="p-4 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-zinc-400" />
                <span>{siteConfig.author.location}</span>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/80 text-white dark:bg-zinc-800/80 backdrop-blur-sm border-zinc-800/50">
              <CardContent className="p-4 flex items-center gap-3">
                <Mail className="h-5 w-5 text-zinc-400" />
                <Link href={`mailto:${siteConfig.links.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.links.email}
                </Link>
              </CardContent>
            </Card>

            {/* Social Links */}
            <SocialLinks links={[...siteConfig.socialLinks]} />

            {/* Newsletter Form */}
            <NewsletterForm />
          </div>

          {/* Middle Column */}
          <div className="space-y-6 md:col-span-2">
            {/* YouTube Card */}
            <Card className="bg-zinc-900/80 text-white dark:bg-zinc-800/80 backdrop-blur-sm border-zinc-800/50 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Youtube className="h-8 w-8 text-red-600" />
                    <div>
                      <div className="text-lg font-medium">Youtube</div>
                      <div className="text-sm text-zinc-400">{siteConfig.socialLinks.find(link => link.platform === "youtube")?.username}</div>
                    </div>
                  </div>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    asChild
                  >
                    <Link href={siteConfig.links.youtube} target="_blank" rel="noopener noreferrer">
                      Inscreva-se <span className="ml-2 text-xs">5.6K</span>
                    </Link>
                  </Button>
                </div>
                <p className="text-zinc-300 dark:text-zinc-400 text-sm">
                  Dicas valiosas de treinamento, orientações práticas e insights sobre como melhorar seu desempenho na
                  corrida, além de informações sobre como se...
                </p>
              </CardContent>
            </Card>

            {/* Achievements Section */}
            <Card className="bg-zinc-900/80 text-white dark:bg-zinc-800/80 backdrop-blur-sm border-zinc-800/50">
              <CardHeader>
                <CardTitle>Conquistas e Recordes Pessoais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300 dark:text-zinc-400 mb-4">Evolução constante e dedicação aos treinos</p>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.achievements.map((achievement, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="bg-zinc-800/80 dark:bg-zinc-700/80 text-zinc-200"
                    >
                      {achievement.distance} - {achievement.time}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {siteConfig.features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon as "calculator" | "wrench"}
                  buttonText={feature.buttonText}
                  buttonUrl={feature.buttonUrl}
                  color={feature.color}
                />
              ))}
            </div>

            {/* Vídeos em Destaque */}
            <FeaturedVideosSection videos={[...siteConfig.featuredVideos]} />

            {/* Upcoming Events */}
            <UpcomingEvents events={siteConfig.upcomingEvents.map(event => ({ ...event }))} />

            {/* Download Resources */}
            <DownloadResources resources={[...siteConfig.downloadResources]} />

            {/* Quick Links */}
            <QuickLinks links={quickLinksWithIcons} />
          </div>
        </div>

        <footer className="mt-12 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} {siteConfig.name} - All Rights Reserved</p>
        </footer>
      </div>
    </main>
  )
}