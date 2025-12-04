import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg hover:cursor-pointer text-white',
  {
    variants: {
      variant: {
        default: 'bg-amazon-500 hover:bg-glacier-600 has-[>svg]:gap-2 font-bold hover:scale-101 transition',
        delete: 'bg-gray-100 text-white has-[>svg]:gap-2 font-bold',
        disabled: 'bg-error-600 text-white has-[>svg]:gap-2 font-bold',
      },
      size: {
        default: 'px-4 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
