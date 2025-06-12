import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shreyan Pattanayak - Machine Learning Intern & AI/ML Engineer",
  description:
    "Portfolio of Shreyan Pattanayak, a Machine Learning Intern and AI/ML Engineer specializing in predictive analytics, model deployment, MLOps, and data science solutions. 6x AWS Certified professional with expertise in machine learning and scalable AI solutions.",
  openGraph: {
    type: 'website',
    title: 'Shreyan Pattanayak - Machine Learning Intern & AI/ML Engineer',
    description: 'Portfolio of Shreyan Pattanayak, a Machine Learning Intern and AI/ML Engineer specializing in predictive analytics, model deployment, MLOps, and data science solutions.',
    images: [{
      url: '/screenshots/hero-preview.png',
      width: 1200,
      height: 630,
      alt: 'Shreyan Pattanayak - Portfolio Hero Section'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreyan Pattanayak - Machine Learning Intern & AI/ML Engineer',
    description: 'Portfolio of Shreyan Pattanayak, a Machine Learning Intern and AI/ML Engineer specializing in predictive analytics, model deployment, MLOps, and data science solutions.',
    images: ['/screenshots/hero-preview.png']
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <FeaturedProjects />
    </main>
  );
}