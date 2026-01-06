"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check } from "lucide-react"

interface EmailCaptureFormProps {
  buttonText?: string
  placeholder?: string
}

export function EmailCaptureForm({
  buttonText = "Get early access",
  placeholder = "you@company.com",
}: EmailCaptureFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setEmail("")
      } else {
        throw new Error("Failed to join waitlist")
      }
    } catch (error) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-2 text-primary">
        <Check className="h-4 w-4" />
        <span className="text-sm">You're on the list. We'll be in touch.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <div className="flex-1">
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 bg-background"
          disabled={isSubmitting}
        />
        {error && <p className="text-destructive text-xs mt-1.5">{error}</p>}
      </div>
      <Button type="submit" className="h-11 px-6" disabled={isSubmitting}>
        {isSubmitting ? "..." : buttonText}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}
