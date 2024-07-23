import * as React from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import {
  Home,
  Menu,
  Package,
  Package2,
  PanelTop,
  Sparkles,
  Users,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/home",
  },
  {
    label: "Your Profile",
    icon: PanelTop,
    href: "/profile",
  },
  {
    label: "Societies",
    icon: Package,
    href: "/societies",
  },
  {
    label: "Friends",
    icon: Users,
    href: "/friends",
  },
  {
    label: "Discover",
    icon: Sparkles,
    href: "/discover",
  },
];

export function MainNavigationMenu() {
  const pathName = usePathname();

  return (
    <header className="flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <div className="flex gap-3 items-center justify-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold mb-2"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Habit Inc</span>
              </Link>
              {routes.map((route: any) => (
                <Link
                  href={route.href}
                  key={route.href}
                  className={cn(
                    "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
                    pathName === route.href
                      ? "bg-muted text-primary"
                      : "text-muted-foreground "
                  )}
                >
                  <route.icon className="h-4 w-4" />
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <Link className="h-14 mr-6 flex items-center space-x-2" href="/">
          <div className="h-6 w-6">
            <Package2 />
          </div>
          <div className="hidden font-bold sm:inline-block">Habit Inc</div>
        </Link>
      </div>
      <div className="flex h-14 max-w-screen-2xl items-center gap-3">
        <div className="flex flex-1 items-center space-x-2 justify-center max-md:hidden">
          <nav className="flex items-center gap-3">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-3">
                <NavigationMenuItem>
                  <Link href="/home" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Track Habits
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/sign-up" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Progress Tracker
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/sign-in" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Achievements
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/home" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Explore
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <div className="flex justify-end items-center gap-3">
          <div className="flex gap-3 items-center">
            <Link
              href="/sign-up"
              className="group inline-flex h-9 w-max items-center justify-center outline outline-[0.1px] outline-secondary rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              Sign Up
            </Link>
            <Link
              href="/sign-in"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-[6px]"
            >
              Log In
            </Link>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
