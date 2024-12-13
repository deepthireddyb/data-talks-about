import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  topics: string[];
  url: string;
  homepage?: string;
  animate?: boolean;
}

const ProjectCard = ({ name, description, topics, url, homepage, animate = true }: ProjectCardProps) => {
  return (
    <Card className={`p-6 backdrop-blur-sm bg-white/80 border border-gray-200 hover:border-gray-300 transition-all duration-300 ${
      animate ? "animate-fade-up" : ""
    }`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <div className="flex gap-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          {homepage && (
            <a
              href={homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Badge
            key={topic}
            variant="secondary"
            className="bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            {topic}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

export default ProjectCard;