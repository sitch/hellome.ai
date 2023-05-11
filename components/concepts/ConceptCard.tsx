import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import AnimatedButton from "@/components/common/AnimatedButton/AnimatedButton"

type Props = {
  title?: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
  footer?: React.ReactNode
  showFooter?: boolean
  wide?: boolean
}
export function ConceptCard({
  title,
  description,
  children,
  footer,
  showFooter = false,
  wide = true,
}: Props) {
  return (
    <Card className={wide ? "w-full" : "w-[350px]"}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Framework</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="hello">Hello</SelectItem>
                    <SelectItem value="sitchenko">Me.js</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
          </div>
        </form> */}

        {children}
      </CardContent>
      {showFooter &&
        (footer ?? (
          <CardFooter className="flex justify-between">
            <Button variant="ghost">Cancel</Button>
            {/* <Button>Reset</Button> */}
            <AnimatedButton>Next</AnimatedButton>
          </CardFooter>
        ))}
    </Card>
  )
}
