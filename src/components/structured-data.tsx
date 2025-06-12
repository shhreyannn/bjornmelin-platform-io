export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shreyan Pattanayak",
    url: "https://bjornmelin.com",
    jobTitle: "Machine Learning Intern & AI/ML Engineer",
    description:
      "Machine Learning Intern and AI/ML Engineer specializing in predictive analytics, model deployment, MLOps, and data science solutions. 6x AWS Certified professional with expertise in machine learning, AI engineering, and modern development practices.",
    sameAs: [
      "https://github.com/shreyannpattanayak",
      "https://linkedin.com/in/shreyan-pattanayak",
    ],
    knowsAbout: [
      "Machine Learning",
      "Predictive Analytics",
      "MLOps",
      "Data Science",
      "AI Engineering",
      "Model Deployment",
      "Feature Engineering",
      "AWS Cloud Architecture",
      "Python Development",
      "TensorFlow & PyTorch",
      "Scikit-Learn",
      "Statistical Modeling",
      "Cross-functional Collaboration",
      "Business Intelligence",
      "Automated Testing",
      "Continuous Integration",
      "Model Versioning",
      "Deep Learning",
      "Neural Networks",
      "Data Analysis",
      "Cloud Computing",
      "AWS",
      "CloudFormation",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "FastAPI",
      "Databricks",
      "Innovation & Technology",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shreyan Pattanayak - Portfolio",
    url: "https://bjornmelin.com",
    description:
      "Personal portfolio of Shreyan Pattanayak, Machine Learning Intern and AI/ML Engineer specializing in predictive analytics, model deployment, MLOps, and data science solutions.",
    author: {
      "@type": "Person",
      name: "Shreyan Pattanayak",
    },
  };
}

interface StructuredDataProps {
  type: "person" | "website" | "both";
}

export default function StructuredData({ type }: StructuredDataProps) {
  const schemas = [];

  if (type === "person" || type === "both") {
    schemas.push(generatePersonSchema());
  }

  if (type === "website" || type === "both") {
    schemas.push(generateWebsiteSchema());
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}