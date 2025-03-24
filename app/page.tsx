import Image from "next/image"
import { Cake, Mail, MapPin, Play, Youtube, BookOpen, Calendar, Trophy, Calculator, Wrench, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VideoCard } from "@/components/video-card"
import { FeatureCard } from "@/components/feature-card"
import { ThemeToggle } from "@/components/theme-toggle"
import { SocialLinks } from "@/components/social-links"
import { NewsletterForm } from "@/components/newsletter-form"
import { UpcomingEvents } from "@/components/upcoming-events"
import { DownloadResources } from "@/components/download-resources"
import { QuickLinks } from "@/components/quick-links"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
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
                    src="/placeholder.svg?height=150&width=150"
                    alt="Abner Santana"
                    width={150}
                    height={150}
                    className="rounded-full border-4 border-primary"
                  />
                </div>
              </CardHeader>
              <CardContent className="text-center pt-4">
                <div className="mb-2 text-orange-400">
                  <span>🏃‍♂️ Ultramaratonista </span>
                  <span className="inline-flex items-center">🏅 🔥</span>
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-2">Abner Santana</CardTitle>
                <CardDescription className="text-zinc-300 dark:text-zinc-400">
                  Compartilhando conhecimento sobre corrida de rua, treinos e experiências. Do iniciante ao avançado,
                  todos são bem-vindos nessa jornada!
                </CardDescription>
              </CardContent>
            </Card>

            {/* Personal Info Cards */}
            <Card className="bg-zinc-900/80 text-white dark:bg-zinc-800/80 backdrop-blur-sm border-zinc-800/50">
              <CardContent className="p-4 flex items-center gap-3">
                <Cake className="h-5 w-5 text-zinc-400" />
                <span>Nascido em 1993 | 62kg | 1.80m</span>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/80 text-white dark:bg-zinc-800/80 backdrop-blur-sm border-zinc-800/50">
              <CardContent className="p-4 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-zinc-400" />
                <span>São José do Rio Preto - SP</span>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/80 text-white dark:bg-zinc-800/80 backdrop-blur-sm border-zinc-800/50">
              <CardContent className="p-4 flex items-center gap-3">
                <Mail className="h-5 w-5 text-zinc-400" />
                <span>E-mail</span>
              </CardContent>
            </Card>

            {/* Social Links */}
            <SocialLinks
              links={[
                { platform: "instagram", url: "#", username: "@abnersantana", color: "text-pink-500" },
                { platform: "youtube", url: "#", username: "@abnersantana", color: "text-red-500" },
                { platform: "strava", url: "#", username: "@abnersantana", color: "text-orange-500" },
                { platform: "twitter", url: "#", username: "@abnersantana", color: "text-blue-400" },
                { platform: "facebook", url: "#", username: "Abner Santana", color: "text-blue-600" },
              ]}
            />

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
                      <div className="text-sm text-zinc-400">@abnersantana</div>
                    </div>
                  </div>
                  <Button variant="destructive" size="sm">
                    Inscreva-se <span className="ml-2 text-xs">5.6K</span>
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
                  <Badge variant="outline" className="bg-zinc-800/80 dark:bg-zinc-700/80 text-zinc-200">
                    5K - 19:27
                  </Badge>
                  <Badge variant="outline" className="bg-zinc-800/80 dark:bg-zinc-700/80 text-zinc-200">
                    10K - 39:29
                  </Badge>
                  <Badge variant="outline" className="bg-zinc-800/80 dark:bg-zinc-700/80 text-zinc-200">
                    21K - 1:17:28
                  </Badge>
                  <Badge variant="outline" className="bg-zinc-800/80 dark:bg-zinc-700/80 text-zinc-200">
                    42K - 2:59:42
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                title="Magic Training - Sua plataforma de treinos"
                description="Transforme sua corrida com planos de treinamento gratuitos e personalizados, que combinam ciência e experiência."
                icon="wrench"
                buttonText="Acessar"
                buttonUrl="#"
                color="bg-gradient-to-br from-blue-900/90 to-blue-950/90 backdrop-blur-sm border-blue-900/30"
              />

              <FeatureCard
                title="Calculadora de Ritmos"
                description="Descubra seus ritmos ideais e zonas de frequência cardíaca para otimizar seus treinos de corrida."
                icon="calculator"
                buttonText="Calcular"
                buttonUrl="#"
                color="bg-gradient-to-br from-green-900/90 to-green-950/90 backdrop-blur-sm border-green-900/30"
              />
            </div>

            {/* Upcoming Events */}
            <UpcomingEvents
              events={[
                {
                  title: "Maratona de São Paulo",
                  date: "7 de Abril, 2024",
                  location: "São Paulo, SP",
                  type: "race",
                },
                {
                  title: "Workshop de Nutrição para Corredores",
                  date: "15 de Maio, 2024",
                  location: "Online",
                  type: "workshop",
                },
                {
                  title: "Treino em Grupo - Long Run",
                  date: "Todos os sábados, 6:00",
                  location: "Parque da Represa, Rio Preto",
                  type: "training",
                },
                {
                  title: "Meia Maratona de Rio Preto",
                  date: "12 de Junho, 2024",
                  location: "São José do Rio Preto, SP",
                  type: "race",
                },
              ]}
            />

            {/* Download Resources */}
            <DownloadResources
              resources={[
                {
                  title: "Plano de Treino 5K - Iniciantes",
                  description: "Plano completo de 8 semanas para sua primeira corrida de 5K",
                  url: "#",
                  type: "pdf",
                  size: "1.2 MB",
                },
                {
                  title: "Planilha de Controle de Treinos",
                  description: "Acompanhe seu progresso e evolução nos treinos",
                  url: "#",
                  type: "spreadsheet",
                  size: "450 KB",
                },
                {
                  title: "Guia de Nutrição para Corredores",
                  description: "Alimentação antes, durante e após os treinos",
                  url: "#",
                  type: "pdf",
                  size: "3.5 MB",
                },
                {
                  title: "Infográfico: Técnica de Corrida",
                  description: "Postura, passada e movimentos corretos",
                  url: "#",
                  type: "image",
                  size: "850 KB",
                },
              ]}
            />

            {/* Quick Links */}
            <QuickLinks
              links={[
                {
                  title: "Blog de Corrida",
                  url: "#",
                  icon: <BookOpen className="h-4 w-4" />,
                  isExternal: false,
                },
                {
                  title: "Calendário de Provas 2024",
                  url: "#",
                  icon: <Calendar className="h-4 w-4" />,
                  isExternal: false,
                },
                {
                  title: "Loja de Equipamentos",
                  url: "#",
                  icon: <Heart className="h-4 w-4" />,
                  isExternal: true,
                },
                {
                  title: "Resultados de Provas",
                  url: "#",
                  icon: <Trophy className="h-4 w-4" />,
                  isExternal: true,
                },
                {
                  title: "Calculadora de Pace",
                  url: "#",
                  icon: <Calculator className="h-4 w-4" />,
                  isExternal: false,
                },
                {
                  title: "Plataforma de Treinos",
                  url: "#",
                  icon: <Wrench className="h-4 w-4" />,
                  isExternal: false,
                },
              ]}
            />
          </div>

          {/* Right Column - Videos */}
          <div className="md:col-span-3 lg:col-span-1">
            <Card className="bg-zinc-900/80 text-white dark:bg-zinc-800/80 backdrop-blur-sm border-zinc-800/50 h-full">
              <CardHeader className="flex flex-row items-center">
                <Play className="h-5 w-5 text-red-600 mr-2" />
                <CardTitle>Vídeos em Destaque</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-zinc-400">Os melhores conteúdos do canal para você começar</p>

                <VideoCard
                  title="O que é Potência Aeróbica na Corrida? Porque não gastar tempo nessa zona?"
                  thumbnail="/placeholder.svg?height=80&width=120"
                  views="12k visualizações"
                />

                <VideoCard
                  title="Ritmo de Limiar: Guia Definitivo"
                  thumbnail="/placeholder.svg?height=80&width=120"
                  views="9k visualizações"
                />

                <VideoCard
                  title="Mente de Corredor: Um Guia para a Corrida Consciente"
                  thumbnail="/placeholder.svg?height=80&width=120"
                  views="7.5k visualizações"
                />

                <VideoCard
                  title="Tolerância ao Esforço: Por que alguns corredores aguentam mais?"
                  thumbnail="/placeholder.svg?height=80&width=120"
                  views="8.5k visualizações"
                />

                <VideoCard
                  title="O segredo dos corredores quenianos"
                  thumbnail="/placeholder.svg?height=80&width=120"
                  views="12k visualizações"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <footer className="mt-12 text-center text-zinc-500 text-sm">
          <p>© 2024 Abner Santana - All Rights Reserved</p>
        </footer>
      </div>
    </main>
  )
}

