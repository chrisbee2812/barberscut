import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { MapPin, Phone, Clock } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Get In Touch"
        description="Have a question or want to book an appointment? Reach out to us. We're here to help."
      />
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-headline font-bold">Contact Us</h2>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-headline font-semibold">Our Location</h3>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 mt-1 text-primary" />
                <address className="not-italic text-muted-foreground">
                  123 Style Street<br />
                  New York, NY 10001
                </address>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <p className="text-muted-foreground">(212) 555-0123</p>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 mt-1 text-primary" />
                <div>
                  <h4 className="font-semibold">Hours:</h4>
                  <ul className="text-muted-foreground">
                    <li>Mon - Fri: 9am - 7pm</li>
                    <li>Saturday: 9am - 5pm</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src="https://picsum.photos/seed/map/600/338"
                width={600}
                height={338}
                alt="Map to ScissorVision"
                className="w-full h-full object-cover"
                data-ai-hint="city map"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
