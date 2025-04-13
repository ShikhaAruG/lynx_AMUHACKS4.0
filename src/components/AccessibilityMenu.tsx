
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Eye, Type, ArrowUpDown } from "lucide-react";

interface AccessibilityOptions {
  colorBlindMode: "none" | "protanopia" | "deuteranopia" | "tritanopia";
  dyslexiaFont: boolean;
  highContrast: boolean;
  textSize: "normal" | "large" | "x-large";
}

interface AccessibilityMenuProps {
  options: AccessibilityOptions;
  onOptionsChange: (newOptions: Partial<AccessibilityOptions>) => void;
}

const AccessibilityMenu = ({ options, onOptionsChange }: AccessibilityMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Eye className="h-4 w-4" />
          <span className="hidden sm:inline">Accessibility</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Accessibility Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuLabel className="text-xs font-normal text-slate-500 pt-2">
          Color Vision
        </DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={options.colorBlindMode === "none"}
          onCheckedChange={() => onOptionsChange({ colorBlindMode: "none" })}
        >
          Normal
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={options.colorBlindMode === "protanopia"}
          onCheckedChange={() => onOptionsChange({ colorBlindMode: "protanopia" })}
        >
          Protanopia (Red-Blind)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={options.colorBlindMode === "deuteranopia"}
          onCheckedChange={() => onOptionsChange({ colorBlindMode: "deuteranopia" })}
        >
          Deuteranopia (Green-Blind)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={options.colorBlindMode === "tritanopia"}
          onCheckedChange={() => onOptionsChange({ colorBlindMode: "tritanopia" })}
        >
          Tritanopia (Blue-Blind)
        </DropdownMenuCheckboxItem>
        
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="text-xs font-normal text-slate-500">
          Reading Support
        </DropdownMenuLabel>
        
        <DropdownMenuCheckboxItem
          checked={options.dyslexiaFont}
          onCheckedChange={(checked) => onOptionsChange({ dyslexiaFont: checked })}
        >
          <Type className="h-4 w-4 mr-2" />
          Dyslexia-friendly font
        </DropdownMenuCheckboxItem>
        
        <DropdownMenuCheckboxItem
          checked={options.highContrast}
          onCheckedChange={(checked) => onOptionsChange({ highContrast: checked })}
        >
          High contrast
        </DropdownMenuCheckboxItem>
        
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="text-xs font-normal text-slate-500">
          Text Size
        </DropdownMenuLabel>
        
        <DropdownMenuCheckboxItem
          checked={options.textSize === "normal"}
          onCheckedChange={() => onOptionsChange({ textSize: "normal" })}
        >
          <ArrowUpDown className="h-4 w-4 mr-2" />
          Normal
        </DropdownMenuCheckboxItem>
        
        <DropdownMenuCheckboxItem
          checked={options.textSize === "large"}
          onCheckedChange={() => onOptionsChange({ textSize: "large" })}
        >
          <ArrowUpDown className="h-4 w-4 mr-2" />
          Large
        </DropdownMenuCheckboxItem>
        
        <DropdownMenuCheckboxItem
          checked={options.textSize === "x-large"}
          onCheckedChange={() => onOptionsChange({ textSize: "x-large" })}
        >
          <ArrowUpDown className="h-4 w-4 mr-2" />
          Extra Large
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccessibilityMenu;
