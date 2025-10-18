import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        // Boldo Primary (Dark Blue)
        default:
          "bg-boldo-white text-boldo-blue-dark hover:bg-boldo-white-hover border-2 border-boldo-white",
        primary:
          "bg-boldo-blue-dark text-boldo-white hover:bg-boldo-blue-dark-hover border-2 border-boldo-blue-dark",
        // Boldo Primary Green
        primaryGreen:
          "bg-boldo-green text-boldo-blue-dark hover:bg-boldo-green-hover border-2 border-boldo-green-stroke",
        // Boldo Primary White
        primaryWhite:
          "bg-boldo-white text-boldo-blue-dark hover:bg-boldo-white-hover border-2 border-boldo-white",
        // Boldo Secondary (Blue with Dark Blue stroke)
        secondary: " text-boldo-blue-dark  border-2 border-boldo-blue-dark",
        // Boldo Secondary White (Blue with White stroke and text)
        secondaryWhite:
          "bg-boldo-blue text-boldo-white hover:bg-boldo-blue-hover border-2 border-boldo-white",
        // Keep other shadcn variants for compatibility
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "bg-white text-[#0A2640] hover:bg-white/90 border-2 border-white",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        // Large (Figma: 16px 56px, 20px/1.4, radius 56px)
        default: "px-14 py-4 text-xl leading-[1.4]",
        lg: "px-14 py-4 text-xl leading-[1.4]",
        // Small (Figma: 8px 40px, 16px/1.5, radius 24px)
        sm: "px-10 py-2 text-base leading-[1.5]",
        // Icon sizes (unchanged)
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
