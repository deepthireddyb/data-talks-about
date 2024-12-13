import React from "react";
import { useGithubProjects } from "@/hooks/useGithubProjects";
import ProjectCard from "@/components/ProjectCard";
import { ChartBar, Database, Code } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { data: projects, isLoading, error } = useGithubProjects("deepthireddyb");
  const { toast } = useToast();

  React.useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch projects. Please try again later.",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container px-4 py-16 mx-auto max-w-6xl">
        <section className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center gap-4 mb-6">
            <ChartBar className="w-6 h-6 text-purple-600" />
            <Database className="w-6 h-6 text-purple-600" />
            <Code className="w-6 h-6 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Data Science Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exploring data science through innovative projects and analysis
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Projects
          </h2>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-48 rounded-lg bg-gray-100 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects?.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  description={project.description || "No description available"}
                  topics={project.topics}
                  url={project.html_url}
                  homepage={project.homepage}
                  animate={index < 4}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Index;