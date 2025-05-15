import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme() // Get the current theme from next-themes

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg", // Style for the toast
          description: "group-[.toast]:text-muted-foreground", // Style for the description text
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground", // Style for action button
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground", // Style for cancel button
        },
      }}
      {...props} // Forward all other props to Sonner
    />
  )
}

export { Toaster, toast }
