
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const DesignSystem = () => {
  const [figmaUrl, setFigmaUrl] = useState('');
  const [embedCode, setEmbedCode] = useState('');
  
  // Generate embed code from Figma URL
  const generateEmbedCode = () => {
    if (!figmaUrl) return;
    
    // Extract the file key from the Figma URL
    const fileKeyMatch = figmaUrl.match(/file\/([^/]+)/);
    if (!fileKeyMatch) {
      setEmbedCode('Invalid Figma URL. Please use a URL like: https://www.figma.com/file/YOURFILEID/YourDesign');
      return;
    }
    
    const fileKey = fileKeyMatch[1];
    const embedHtml = `<iframe 
  width="100%" 
  height="600" 
  src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/${fileKey}" 
  allowfullscreen
></iframe>`;
    
    setEmbedCode(embedHtml);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">JanVoice Design System</h1>
      
      <Tabs defaultValue="embed">
        <TabsList className="mb-8">
          <TabsTrigger value="embed">Embed Figma</TabsTrigger>
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
        </TabsList>
        
        <TabsContent value="embed" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Embed Your Figma Design</CardTitle>
              <CardDescription>
                Paste your Figma file URL below to generate an embed code.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="figma-url" className="text-sm font-medium">Figma URL</label>
                <div className="flex gap-2">
                  <Input 
                    id="figma-url"
                    placeholder="https://www.figma.com/file/YOURFILEID/YourDesign" 
                    value={figmaUrl}
                    onChange={(e) => setFigmaUrl(e.target.value)}
                  />
                  <Button onClick={generateEmbedCode}>Generate</Button>
                </div>
              </div>
              
              {embedCode && (
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium">Embed Code</label>
                  <div className="relative">
                    <textarea 
                      className="w-full min-h-[100px] p-3 border rounded-md font-mono text-sm"
                      value={embedCode}
                      readOnly
                    />
                    <Button 
                      size="sm"
                      variant="secondary"
                      className="absolute top-2 right-2"
                      onClick={() => navigator.clipboard.writeText(embedCode)}
                    >
                      Copy
                    </Button>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">How to use this embed code:</h3>
                    <ol className="list-decimal ml-5 space-y-2">
                      <li>Copy the generated embed code above</li>
                      <li>Create a new component file like <code>src/components/FigmaDesign.tsx</code></li>
                      <li>Use the code like this:
                        <pre className="bg-slate-100 p-4 rounded-md mt-2 overflow-x-auto">
{`import React from 'react';

const FigmaDesign = () => {
  return (
    <div className="figma-embed">
      {/* Paste your embed code here */}
      <div dangerouslySetInnerHTML={{ 
        __html: \`${embedCode}\` 
      }} />
    </div>
  );
};

export default FigmaDesign;`}
                        </pre>
                      </li>
                      <li>Import and use this component wherever you need to display your design</li>
                    </ol>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Preview Your Figma Design</CardTitle>
              <CardDescription>
                If you've already embedded your design, it will appear below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {embedCode ? (
                <div dangerouslySetInnerHTML={{ __html: embedCode }} />
              ) : (
                <div className="border-2 border-dashed border-slate-200 rounded-lg p-12 text-center">
                  <p className="text-slate-500">Generate an embed code to preview your design here</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="colors" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
              <CardDescription>
                Use these colors in your Figma design to match the JanVoice application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: "Primary", color: "#2563eb", textColor: "white" },
                  { name: "Secondary", color: "#10b981", textColor: "white" },
                  { name: "Accent", color: "#f59e0b", textColor: "white" },
                  { name: "Background", color: "#f8fafc", textColor: "black" },
                  { name: "Text", color: "#1e293b", textColor: "white" },
                  { name: "Muted", color: "#94a3b8", textColor: "white" },
                ].map((color, index) => (
                  <div key={index} className="flex flex-col">
                    <div 
                      className="h-20 rounded-md mb-2 flex items-end p-2"
                      style={{ backgroundColor: color.color, color: color.textColor }}
                    >
                      <span className="font-medium">{color.name}</span>
                    </div>
                    <span className="text-sm font-mono">{color.color}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="components" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Key Components</CardTitle>
              <CardDescription>
                Reference these components when creating your Figma design
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>Default Button</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Cards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card description goes here</CardDescription>
                    </CardHeader>
                    <CardContent>
                      This is a sample card component used throughout the application.
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Typography</h3>
                <div className="space-y-4">
                  <div>
                    <h1 className="text-4xl font-bold">Heading 1</h1>
                    <p className="text-sm text-slate-500">text-4xl font-bold</p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Heading 2</h2>
                    <p className="text-sm text-slate-500">text-3xl font-bold</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Heading 3</h3>
                    <p className="text-sm text-slate-500">text-2xl font-bold</p>
                  </div>
                  <div>
                    <p className="text-base">Regular paragraph text</p>
                    <p className="text-sm text-slate-500">text-base</p>
                  </div>
                  <div>
                    <p className="text-sm">Small text</p>
                    <p className="text-sm text-slate-500">text-sm</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DesignSystem;
