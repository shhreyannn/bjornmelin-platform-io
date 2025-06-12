import { Metadata } from "next";
import { AboutDetail } from "@/components/sections/about-detail";

export const metadata: Metadata = {
  title: "About - Shreyan Pattanayak | Machine Learning Intern & AI/ML Engineer",
  description:
    "Learn more about Shreyan Pattanayak, a Machine Learning Intern and AI/ML Engineer with 6 AWS certifications, specializing in predictive analytics, model deployment, and MLOps solutions.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <AboutDetail />
    </main>
  );
}