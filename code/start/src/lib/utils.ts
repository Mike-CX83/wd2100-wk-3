import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// shadcn helper — merges class names without breaking Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}