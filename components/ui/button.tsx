import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center  whitespace-nowrap rounded-full text-base font-semiblod ring-offset-white transition-colors cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-primary hover:bg-accent-hover ",
          primary:
          "bg-primary text-white  ",
          outline:
          "border border-accent text-accent bg-transparent hover:bg-accent hover:text-primary",
        },
      size: {
        default: "h-[44px] px-6",
        md: "h-[48]  px-6 ",
        lg: "h-[56px] px-8 text-sm upercase tracking-[2px]",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
