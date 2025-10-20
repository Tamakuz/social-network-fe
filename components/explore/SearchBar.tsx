"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

/**
 * SearchBar Component (Modern & Interactive)
 *
 * Search bar untuk explore page dengan desain modern.
 * Terletak di /components/explore/ sebagai bagian dari Explore Page.
 *
 * Features:
 * - Search input dengan icon
 * - Clear button saat ada input
 * - Smooth animations
 * - Focus state yang jelas
 * - Placeholder yang menarik
 *
 * Props:
 * - value: string (search query)
 * - onChange: function (callback saat input berubah)
 * - onSearch: function (callback saat search)
 * - placeholder: string (optional)
 *
 * Dependencies: lucide-react (npm install lucide-react)
 */

interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value = "",
  onChange,
  onSearch,
  placeholder = "Search for topics, people, or posts...",
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = React.useState(value);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchQuery(newValue);
    onChange?.(newValue);
  };

  const handleClear = () => {
    setSearchQuery("");
    onChange?.("");
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch?.(searchQuery);
    }
  };

  return (
    <div className="relative group">
      {/* Glow Effect Background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity duration-500" />

      {/* Search Icon */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          <Search className="size-5 text-muted-foreground group-focus-within:text-primary transition-all duration-300 group-focus-within:scale-110" />
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Input */}
      <Input
        ref={inputRef}
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="relative pl-12 pr-12 h-14 bg-muted/30 border-2 border-border/50 rounded-full focus:bg-background focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all duration-300 text-base placeholder:text-muted-foreground/60"
      />

      {/* Clear Button */}
      {searchQuery && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 size-8 rounded-full bg-muted/50 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 group/clear"
        >
          <X className="size-4 text-muted-foreground group-hover/clear:text-primary transition-colors" />
        </button>
      )}
    </div>
  );
}
