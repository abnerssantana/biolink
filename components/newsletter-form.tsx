"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"

interface NewsletterFormProps {
  title?: string
  description?: string
  className?: string
}

export function NewsletterForm({
  title = "Inscreva-se na Newsletter",
  description = "Receba dicas de treino, novidades e conteúdo exclusivo diretamente no seu email.",
  className,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
      setEmail("")
    } catch (err) {
      setError("Ocorreu um erro. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card
      className={cn("bg-zinc-900/80 text-white dark:bg-zinc-800/80 backdrop-blur-sm border-zinc-800/50", className)}
    >
      <CardHeader>
        <SectionHeader title={title} />
        <CardDescription className="text-zinc-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-4 text-center">
            <div className="mb-3 rounded-full bg-green-500/20 p-3">
              <Mail className="h-6 w-6 text-green-500" />
            </div>
            <p className="text-lg font-medium">Inscrição realizada com sucesso!</p>
            <p className="text-sm text-zinc-400">Você receberá nossos emails em breve.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-zinc-800 border-zinc-700"
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Inscrever-se"
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

