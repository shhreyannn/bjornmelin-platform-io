import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import StructuredData from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    template: "%s | Shreyan Pattanayak",
    default: "Shreyan Pattanayak - Machine Learning Intern & AI/ML Engineer",
  },
  description:
    "Machine Learning Intern and AI/ML Engineer specializing in predictive analytics, model deployment, MLOps, and data science solutions.",
  icons: {
    icon: '/headshot/headshot-2024.jpg',
    apple: '/headshot/headshot-2024.jpg',
  },
  openGraph: {
    type: 'website',
    title: 'Shreyan Pattanayak - Machine Learning Intern & AI/ML Engineer',
    description: 'Machine Learning Intern and AI/ML Engineer specializing in predictive analytics, model deployment, MLOps, and data science solutions.',
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
    description: 'Machine Learning Intern and AI/ML Engineer specializing in predictive analytics, model deployment, MLOps, and data science solutions.',
    images: ['/screenshots/hero-preview.png']
  },
  keywords: [
    "Machine Learning",
    "Predictive Analytics",
    "MLOps",
    "Data Science",
    "AI Engineering",
    "Model Deployment",
    "Feature Engineering",
    "AWS Machine Learning Engineer",
    "AWS Solutions Architect",
    "AWS SysOps Administrator",
    "AWS Developer",
    "AWS AI Practitioner",
    "Python",
    "Deep Learning",
    "Neural Networks",
    "TensorFlow",
    "PyTorch",
    "Scikit-Learn",
    "Data Analysis",
    "Statistical Modeling",
    "Cross-functional Collaboration",
    "Business Intelligence",
    "Automated Testing",
    "Continuous Integration",
    "Model Versioning",
    "Avanade",
    "3M",
    "Cloud Computing",
    "AWS",
    "CloudFormation",
    "GitHub Actions",
    "Docker",
    "Kubernetes",
    "FastAPI",
    "Databricks",
    "Innovation",
    "Technology",
  ],
  authors: [{ name: "Shreyan Pattanayak" }],
  creator: "Shreyan Pattanayak",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 pt-16 pb-8">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        <StructuredData type="both" />
      </body>
    </html>
  );
}