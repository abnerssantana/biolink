export const siteConfig = {
  name: "Abner Santana",
  description: "Compartilhando conhecimento sobre corrida de rua, treinos e experiências.",
  url: "https://links.magictraining.run/",
  ogImage: "https://links.magictraining.run/og.jpg",
  links: {
    youtube: "https://youtube.com/@abnerssantana",
    strava: "https://strava.com/athletes/abnerssantana",
    instagram: "https://instagram.com/abnerssantana",
    twitter: "https://twitter.com/abnerssantana",
    facebook: "https://facebook.com/abnersantana",
    email: "abnerss@outlook.com",
  },
  author: {
    name: "Abner Santana",
    birthYear: 1993,
    weight: "62kg",
    height: "1.80m",
    location: "São José do Rio Preto - SP",
  },
  achievements: [
    { distance: "5K", time: "14:27" },
    { distance: "10K", time: "30:49" },
    { distance: "21K", time: "1:11:22" },
    { distance: "42K", time: "2:30:44" },
  ],
  featuredVideos: [
    {
      title: "O que é Potência Aeróbica na Corrida? Porque não gastar tempo nessa zona?",
      thumbnail: "/videos/potencia.jpg",
      views: "12k visualizações",
      url: "#",
    },
    {
      title: "Ritmo de Limiar: Guia Definitivo",
      thumbnail: "/videos/limiar.jpg",
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
      thumbnail: "/videos/esforco.jpg",
      views: "8.5k visualizações",
      url: "#",
    },
    {
      title: "Suplementos Mágicos: O que realmente funciona?",
      thumbnail: "/videos/suplementos.jpg",
      views: "12k visualizações",
      url: "#",
    },
    {
      title: "O segredo dos corredores quenianos",
      thumbnail: "/videos/quenia.jpg",
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
      buttonUrl: "https://magictraining.run",
      color: "bg-blue-900",
    },
    {
      title: "Calculadora de Ritmos",
      description: "Descubra seus ritmos ideais e zonas de frequência cardíaca para otimizar seus treinos de corrida.",
      icon: "calculator",
      buttonText: "Calcular",
      buttonUrl: "https://magictraining.run/calculadora",
      color: "",
    },
  ],
  quickLinks: [
    {
      title: "Loja vivendo a corrida",
      url: "#",
      icon: "shopping-bag",
      isExternal: true,
    },
    {
      title: "Calculadora de Pace",
      url: "https://magictraining.run/calculadora",
      icon: "calculator",
      isExternal: false,
    },
    {
      title: "Plataforma de Treinos",
      url: "https://magictraining.run",
      icon: "wrench",
      isExternal: false,
    },
  ],
  socialLinks: [
    { platform: "instagram", url: "https://instagram.com/abnerssantana", username: "@abnerssantana", color: "text-pink-500" },
    { platform: "youtube", url: "https://youtube.com/@abnerssantana", username: "@abnerssantana", color: "text-red-500" },
    { platform: "strava", url: "https://strava.com/athletes/abnerssantana", username: "@abnerssantana", color: "text-orange-500" },
    { platform: "twitter", url: "https://twitter.com/abnerssantana", username: "@abnerssantana", color: "text-blue-400" },
    { platform: "facebook", url: "https://facebook.com/abnersantana", username: "Abner Santana", color: "text-blue-600" },
  ] as { platform: string; url: string; username: string; color: string }[], // Add this type assertion
} as const
