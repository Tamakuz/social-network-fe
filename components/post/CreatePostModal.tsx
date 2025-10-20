"use client";

import * as React from "react";
import { X, Image as ImageIcon, Smile, MapPin, Calendar, BarChart3, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/**
 * CreatePostModal Component (Modern & Feature-Rich)
 *
 * Modal untuk membuat post baru dengan berbagai fitur.
 * Terletak di /components/post/ untuk create post functionality.
 *
 * Features:
 * - Textarea auto-resize untuk post content
 * - Character counter (280 chars limit)
 * - Upload image/media (placeholder)
 * - Emoji picker (placeholder)
 * - Add location (placeholder)
 * - Schedule post (placeholder)
 * - Poll creation (placeholder)
 * - User avatar display
 * - Post button dengan loading state
 * - Smooth animations
 *
 * Props:
 * - open: boolean (modal terbuka/tertutup)
 * - onOpenChange: function (callback saat modal berubah)
 * - onPost: function (callback saat post dibuat)
 *
 * Dependencies: lucide-react (npm install lucide-react)
 */

interface CreatePostModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onPost?: (content: string, images?: string[]) => void;
}

export function CreatePostModal({
  open = false,
  onOpenChange,
  onPost,
}: CreatePostModalProps) {
  const [content, setContent] = React.useState("");
  const [images, setImages] = React.useState<string[]>([]);
  const [isPosting, setIsPosting] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const maxChars = 280;
  const charsLeft = maxChars - content.length;
  const isOverLimit = charsLeft < 0;
  const isNearLimit = charsLeft <= 20 && charsLeft >= 0;

  // Auto-resize textarea
  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [content]);

  const handlePost = async () => {
    if (!content.trim() || isOverLimit) return;

    setIsPosting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    onPost?.(content, images);
    
    // Reset form
    setContent("");
    setImages([]);
    setIsPosting(false);
    onOpenChange?.(false);
  };

  const handleImageUpload = () => {
    // TODO: Implement image upload
    console.log("Upload image");
  };

  const handleClose = () => {
    if (content.trim() && !confirm("Discard post?")) {
      return;
    }
    setContent("");
    setImages([]);
    onOpenChange?.(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 gap-0 bg-gradient-to-br from-card via-card/95 to-card/90 border-border/50">
        {/* Header */}
        <DialogHeader className="px-6 py-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">Create Post</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="size-8 rounded-full hover:bg-accent/50"
            >
              <X className="size-5" />
            </Button>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="px-6 py-4 space-y-4 max-h-[70vh] overflow-y-auto">
          {/* User Info */}
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 p-0.5 ring-2 ring-primary/20">
              <div className="size-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                <span className="text-lg font-bold text-primary">J</span>
              </div>
            </div>
            <div>
              <p className="font-bold text-foreground">John Doe</p>
              <p className="text-xs text-muted-foreground">@johndoe</p>
            </div>
          </div>

          {/* Textarea */}
          <div className="relative">
            <Textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's happening?"
              className="min-h-[120px] max-h-[400px] resize-none border-0 bg-transparent text-lg placeholder:text-muted-foreground/60 focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
              autoFocus
            />
            
            {/* Character Counter */}
            <div className="absolute bottom-2 right-2">
              <div
                className={`text-xs font-semibold transition-colors ${
                  isOverLimit
                    ? "text-destructive"
                    : isNearLimit
                    ? "text-yellow-500"
                    : "text-muted-foreground"
                }`}
              >
                {charsLeft < 0 ? `+${Math.abs(charsLeft)}` : charsLeft}
              </div>
            </div>
          </div>

          {/* Image Preview */}
          {images.length > 0 && (
            <div className="grid grid-cols-2 gap-2">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-xl overflow-hidden bg-muted/30 border border-border/40"
                >
                  <img
                    src={img}
                    alt={`Upload ${index + 1}`}
                    className="size-full object-cover"
                  />
                  <button
                    onClick={() => setImages(images.filter((_, i) => i !== index))}
                    className="absolute top-2 right-2 size-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Divider */}
          <div className="border-t border-border/30" />

          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {/* Upload Image */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleImageUpload}
                className="size-9 rounded-full hover:bg-primary/10 text-primary"
                title="Add image"
              >
                <ImageIcon className="size-5" />
              </Button>

              {/* Emoji */}
              <Button
                variant="ghost"
                size="icon"
                className="size-9 rounded-full hover:bg-primary/10 text-primary"
                title="Add emoji"
              >
                <Smile className="size-5" />
              </Button>

              {/* Location */}
              <Button
                variant="ghost"
                size="icon"
                className="size-9 rounded-full hover:bg-primary/10 text-primary"
                title="Add location"
              >
                <MapPin className="size-5" />
              </Button>

              {/* Schedule */}
              <Button
                variant="ghost"
                size="icon"
                className="size-9 rounded-full hover:bg-primary/10 text-primary"
                title="Schedule post"
              >
                <Calendar className="size-5" />
              </Button>

              {/* Poll */}
              <Button
                variant="ghost"
                size="icon"
                className="size-9 rounded-full hover:bg-primary/10 text-primary"
                title="Create poll"
              >
                <BarChart3 className="size-5" />
              </Button>
            </div>

            {/* Post Button */}
            <Button
              onClick={handlePost}
              disabled={!content.trim() || isOverLimit || isPosting}
              className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30"
            >
              {isPosting ? (
                <>
                  <Loader2 className="size-4 mr-2 animate-spin" />
                  Posting...
                </>
              ) : (
                "Post"
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
