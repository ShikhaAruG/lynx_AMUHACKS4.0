
import React from 'react';

interface FigmaEmbedProps {
  fileUrl: string;
  height?: number;
}

const FigmaEmbed: React.FC<FigmaEmbedProps> = ({ fileUrl, height = 600 }) => {
  // Extract the file key from the Figma URL
  const fileKeyMatch = fileUrl.match(/file\/([^/]+)/);
  if (!fileKeyMatch) {
    return <div className="p-4 border border-red-300 bg-red-50 text-red-700 rounded">Invalid Figma URL format</div>;
  }
  
  const fileKey = fileKeyMatch[1];
  const embedUrl = `https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/${fileKey}`;
  
  return (
    <div className="figma-embed w-full">
      <iframe 
        width="100%" 
        height={height} 
        src={embedUrl}
        allowFullScreen
        style={{ border: 'none' }}
        title="Figma Design Embed"
      />
    </div>
  );
};

export default FigmaEmbed;
