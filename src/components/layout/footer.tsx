import Link from "next/link";
import { Scissors, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Scissors className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-lg">ScissorVision</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Classic Cuts & Modern Styles.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Visit Us</h4>
            <address className="not-italic text-sm text-muted-foreground">
              123 Style Street<br />
              New York, NY 10001<br />
            </address>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Hours</h4>
            <ul className="text-sm text-muted-foreground">
                <li>Mon - Fri: 9am - 7pm</li>
                <li>Saturday: 9am - 5pm</li>
                <li>Sunday: Closed</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ScissorVision. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
