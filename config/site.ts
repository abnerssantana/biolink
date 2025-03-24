import type { ThemeConfig } from "@/types/theme"

export const siteConfig = {
  name: "Abner Santana",
  description: "Compartilhando conhecimento sobre corrida de rua, treinos e experiências.",
  url: "https://abnersantana.com",
  ogImage: "https://abnersantana.com/og.jpg",
  links: {
    youtube: "https://youtube.com/@abnersantana",
    strava: "https://strava.com/athletes/abnersantana",
    instagram: "https://instagram.com/abnersantana",
    twitter: "https://twitter.com/abnersantana",
    facebook: "https://facebook.com/abnersantana",
    email: "contato@abnersantana.com",
  },
  author: {
    name: "Abner Santana",
    birthYear: 1993,
    weight: "62kg",
    height: "1.80m",
    location: "São José do Rio Preto - SP",
  },
  achievements: [
    { distance: "5K", time: "19:27" },
    { distance: "10K", time: "39:29" },
    { distance: "21K", time: "1:17:28" },
    { distance: "42K", time: "2:59:42" },
  ],
  featuredVideos: [
    {
      title: "O que é Potência Aeróbica na Corrida? Porque não gastar tempo nessa zona?",
      thumbnail: "/videos/potencia-aerobica.jpg",
      views: "12k visualizações",
      url: "#",
    },
    {
      title: "Ritmo de Limiar: Guia Definitivo",
      thumbnail: "/videos/ritmo-limiar.jpg",
      views: "9k visualizações",
      url: "#",
    },
    {
      title: "Mente de Corredor: Um Guia para a Corrida Consciente",
      thumbnail: "/videos/mente-corredor.jpg",
      views: "7.5k visualizações",
      url: "#",
    },
    {
      title: "Tolerância ao Esforço: Por que alguns corredores aguentam mais?",
      thumbnail: "/videos/tolerancia-esforco.jpg",
      views: "8.5k visualizações",
      url: "#",
    },
    {
      title: "O segredo dos corredores quenianos",
      thumbnail: "/videos/corredores-quenianos.jpg",
      views: "12k visualizações",
      url: "#",
    },
  ],
  features: [
    {
      title: "Magic Training - Sua plataforma de treinos",
      description:
        "Transforme sua corrida com planos de treinamento gratuitos e personalizados, que combinam ciência e experiência.",
      icon: "wrench",
      buttonText: "Acessar",
      buttonUrl: "#",
      color: "bg-gradient-to-br from-blue-900 to-blue-950",
    },
    {
      title: "Calculadora de Ritmos",
      description: "Descubra seus ritmos ideais e zonas de frequência cardíaca para otimizar seus treinos de corrida.",
      icon: "calculator",
      buttonText: "Calcular",
      buttonUrl: "#",
      color: "bg-gradient-to-br from-green-900 to-green-950",
    },
  ],
  upcomingEvents: [
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
  ],
  downloadResources: [
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
  ],
  quickLinks: [
    {
      title: "Blog de Corrida",
      url: "#",
      icon: "book",
      isExternal: false,
    },
    {
      title: "Calendário de Provas 2024",
      url: "#",
      icon: "calendar",
      isExternal: false,
    },
    {
      title: "Loja de Equipamentos",
      url: "#",
      icon: "shopping-bag",
      isExternal: true,
    },
    {
      title: "Resultados de Provas",
      url: "#",
      icon: "trophy",
      isExternal: true,
    },
    {
      title: "Calculadora de Pace",
      url: "#",
      icon: "calculator",
      isExternal: false,
    },
    {
      title: "Plataforma de Treinos",
      url: "#",
      icon: "wrench",
      isExternal: false,
    },
  ],
  socialLinks: [
    { platform: "instagram", url: "#", username: "@abnersantana", color: "text-pink-500" },
    { platform: "youtube", url: "#", username: "@abnersantana", color: "text-red-500" },
    { platform: "strava", url: "#", username: "@abnersantana", color: "text-orange-500" },
    { platform: "twitter", url: "#", username: "@abnersantana", color: "text-blue-400" },
    { platform: "facebook", url: "#", username: "Abner Santana", color: "text-blue-600" },
  ],
} as const

export const themeConfig: ThemeConfig = {
  colors: {
    primary: {
      DEFAULT: "#ff5722",
      foreground: "#ffffff",
    },
    secondary: {
      DEFAULT: "#2dd4bf",
      foreground: "#ffffff",
    },
    card: {
      DEFAULT: "#1e1e1e",
      foreground: "#ffffff",
    },
    background: "#121212",
    foreground: "#ffffff",
    muted: {
      DEFAULT: "#2a2a2a",
      foreground: "#a1a1aa",
    },
    accent: {
      DEFAULT: "#ff5722",
      foreground: "#ffffff",
    },
    destructive: {
      DEFAULT: "#ff0000",
      foreground: "#ffffff",
    },
    success: {
      DEFAULT: "#10b981",
      foreground: "#ffffff",
    },
  },
  borderRadius: {
    lg: "0.75rem",
    md: "0.5rem",
    sm: "0.25rem",
  },
  fontFamily: {
    sans: "'Inter', sans-serif",
    heading: "'Inter', sans-serif",
  },
}

