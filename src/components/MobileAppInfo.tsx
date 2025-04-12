
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Smartphone, Github, Code } from "lucide-react";

const MobileAppInfo = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="h-6 w-6" />
            Mobile App Setup Instructions
          </CardTitle>
          <CardDescription>
            Follow these steps to run JanVoice as a native mobile application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-md bg-amber-50 p-4 border border-amber-200">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 mr-2" />
              <div>
                <h3 className="text-sm font-medium text-amber-800">Important Note</h3>
                <p className="text-sm mt-1 text-amber-700">
                  You'll need to transfer this project to your own computer to build the mobile app.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">Step 1: Transfer the project</h3>
            <p className="text-sm text-slate-600 mb-4">
              Transfer the project to your own Github repository via the "Export to Github" button.
              Then git clone the project to your local machine.
            </p>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <code className="text-xs bg-slate-100 p-1 rounded">git clone [your-github-repo-url]</code>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">Step 2: Install dependencies</h3>
            <p className="text-sm text-slate-600 mb-4">
              Install all project dependencies including Capacitor packages.
            </p>
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <code className="text-xs bg-slate-100 p-1 rounded">npm install</code>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">Step 3: Add platform</h3>
            <p className="text-sm text-slate-600 mb-4">
              Add iOS and/or Android platforms to your project.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <code className="text-xs bg-slate-100 p-1 rounded">npx cap add ios</code>
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <code className="text-xs bg-slate-100 p-1 rounded">npx cap add android</code>
              </div>
            </div>
          </div>
            
          <div>
            <h3 className="text-base font-semibold mb-2">Step 4: Build the web app</h3>
            <p className="text-sm text-slate-600 mb-4">
              Build your web application before syncing to mobile platforms.
            </p>
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <code className="text-xs bg-slate-100 p-1 rounded">npm run build</code>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">Step 5: Sync with Capacitor</h3>
            <p className="text-sm text-slate-600 mb-4">
              Sync your web build with the native platforms.
            </p>
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <code className="text-xs bg-slate-100 p-1 rounded">npx cap sync</code>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">Step 6: Run the app</h3>
            <p className="text-sm text-slate-600 mb-4">
              Run the app on an emulator or physical device.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <code className="text-xs bg-slate-100 p-1 rounded">npx cap run ios</code>
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <code className="text-xs bg-slate-100 p-1 rounded">npx cap run android</code>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-500 mt-4">
            <p><strong>Note for iOS:</strong> You'll need a Mac with Xcode installed.</p>
            <p><strong>Note for Android:</strong> You'll need Android Studio installed.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MobileAppInfo;
