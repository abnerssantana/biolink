"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import {
  Cake,
  Mail,
  MapPin,
  Youtube,
  BookOpen,
  Calendar,
  Trophy,
  Calculator,
  Wrench,
  ShoppingBag,
  ExternalLink,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Medal as Strava,
  ArrowRight,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { FeaturedVideosSection } from "@/components/featured-videos-section";
import { SocialLinks } from "@/components/social-links";
import { QuickLinks } from "@/components/quick-links";
import { Competitions } from "@/components/competitions";
import { FeatureCard } from "@/components/feature-card";
import AnimatedBackground from "@/components/animated-background";

export default function Page() {
  const controls = useAnimation();
  
  // Map platform names to icons for quick links
  const quickLinksWithIcons = siteConfig.quickLinks.map(link => {
    const icons = {
      book: <BookOpen className="size-4" />,
      calendar: <Calendar className="size-4" />,
      'shopping-bag': <ShoppingBag className="size-4" />,
      trophy: <Trophy className="size-4" />,
      calculator: <Calculator className="size-4" />,
      wrench: <Wrench className="size-4" />
    };
    
    return {
      ...link,
      icon: icons[link.icon] || <ExternalLink className="size-4" />
    };
  });
  
  useEffect(() => {
    controls.start({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.1 
      } 
    });
  }, [controls]);

  return (
    <main className="min-h-screen pb-8 sm:pb-12 md:pb-16">
      <AnimatedBackground />
      
      <div className="container mx-auto px-3 py-6 sm:px-4 sm:py-8 md:py-12">
        <motion.div 
          className="grid grid-cols-1 gap-5 sm:gap-6 md:gap-8 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          {/* Left Column */}
          <motion.div className="space-y-6" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            {/* Avatar Card */}
            <motion.div 
              whileHover={{ y: -5 }} 
              transition={{ duration: 0.2 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <Card className="overflow-hidden border-0 bg-white/80 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <motion.div 
                      className="relative mb-4"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full blur-md opacity-20" />
                      <Image
                        src="/avatar.jpg"
                        alt={siteConfig.author.name}
                        width={120}
                        height={120}
                        className="rounded-full border-3 border-white object-cover relative z-10 sm:w-32 sm:h-32 md:w-36 md:h-36"
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="mb-2 font-medium text-emerald-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Seu Alienígena Favorito 👽❤️✌️
                    </motion.div>
                    
                    <CardTitle className="mb-2 text-xl sm:text-2xl font-bold text-zinc-800 text-center">
                      {siteConfig.author.name}
                    </CardTitle>
                    
                    <CardDescription className="text-sm sm:text-base text-zinc-500 text-center">
                      {siteConfig.description}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info Cards */}
            {[
              { icon: <Cake className="size-4 sm:size-5 text-emerald-600 mx-2 sm:mx-4" />, text: `${siteConfig.author.birthYear} | ${siteConfig.author.weight} | ${siteConfig.author.height}` },
              { icon: <MapPin className="size-4 sm:size-5 text-emerald-600 mx-2 sm:mx-4" />, text: siteConfig.author.location },
              { icon: <Mail className="size-4 sm:size-5 text-emerald-600 mx-2 sm:mx-4" />, text: siteConfig.links.email, link: `mailto:${siteConfig.links.email}` }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -3 }} 
                transition={{ duration: 0.2 }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <Card className="border-0 bg-white/80 shadow-sm">
                  <CardContent className="flex items-center py-3 px-3 sm:px-4 text-sm sm:text-base">
                    {item.icon}
                    {item.link ? (
                      <Link href={item.link} className="transition-colors hover:text-emerald-600">
                        {item.text}
                      </Link>
                    ) : (
                      <span className="text-zinc-600">{item.text}</span>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <SocialLinks 
                links={siteConfig.socialLinks} 
                className="border-0 rounded-md sm:rounded-lg bg-white/80 shadow-sm" 
              />
            </motion.div>
            
            {/* Personal Records */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Card className="border-0 rounded-md sm:rounded-lg bg-white/80 shadow-sm">
                <CardHeader className="px-4 py-3 sm:px-6 sm:py-4">
                  <SectionHeader title="Recordes Pessoais" />
                </CardHeader>
                <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0">
                  <div className="flex flex-wrap gap-3">
                    {siteConfig.achievements.map((achievement, index) => (
                      <motion.div 
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge
                          variant="outline"
                          className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm border-emerald-100 bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 rounded-md"
                        >
                          {`${achievement.distance} - ${achievement.time}`}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <QuickLinks 
                links={quickLinksWithIcons}
                className="border-0 -md bg-white/80"
                showLinkIcon={true}
              />
            </motion.div>
          </motion.div>

          {/* Center/Right Columns */}
          <motion.div 
            className="space-y-5 sm:space-y-6 md:space-y-8 md:col-span-2"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            {/* YouTube Banner */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <Card className="overflow-hidden border-0 shadow-sm bg-gradient-to-r from-red-50 to-red-100">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        whileHover={{ rotate: 10 }} 
                        transition={{ duration: 0.2 }}
                      >
                        <Youtube className="size-6 sm:size-8 text-red-500" />
                      </motion.div>
                      <div>
                        <div className="text-base sm:text-lg font-medium text-zinc-800">YouTube</div>
                        <div className="text-sm text-zinc-500">
                          {siteConfig.socialLinks.find(link => link.platform === "youtube")?.username}
                        </div>
                      </div>
                    </div>
                    <Button asChild className="bg-red-500 text-white hover:bg-red-600 rounded-md text-xs sm:text-sm" size="sm">
                      <Link href={siteConfig.links.youtube} target="_blank" rel="noopener noreferrer">
                        Inscreva-se <span className="ml-2 text-xs">6.3K</span>
                      </Link>
                    </Button>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600">
                    Dicas valiosas de treinamento, orientações práticas e insights sobre como melhorar seu desempenho na corrida.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 md:grid-cols-2">
              {siteConfig.features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon as "calculator" | "wrench"}
                    buttonText={feature.buttonText}
                    buttonUrl={feature.buttonUrl}
                    color="bg-white/80 border-0 shadow-sm"
                    accentColor={feature.icon === "calculator" ? "text-emerald-500" : "text-blue-500"}
                    buttonColor={feature.icon === "calculator" ? 
                      "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-md text-xs sm:text-sm" : 
                      "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-md text-xs sm:text-sm"
                    }
                  />
                </motion.div>
              ))}
            </div>

            {/* Featured Videos */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <FeaturedVideosSection 
                videos={[...siteConfig.featuredVideos]}
                className="border-0 rounded-md sm:rounded-lg bg-white/80 shadow-sm"
              />
            </motion.div>
            
            {/* Competitions */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Competitions className="border-0 rounded-md sm:rounded-lg bg-white/80 shadow-sm" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}