import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { barbers } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { PageHeader } from "@/components/page-header";

export default function TeamPage() {
  return (
    <div>
      <PageHeader
        title="Meet Our Team"
        description="Our barbers are the heart of ScissorVision. Each one brings a unique set of skills, a passion for grooming, and a commitment to making you look and feel your best."
      />
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbers.map((barber) => {
            const barberImage = PlaceHolderImages.find((img) => img.id === barber.imageId);
            return (
              <Card key={barber.name} className="overflow-hidden group">
                 <div className="relative h-96 w-full overflow-hidden">
                  {barberImage && (
                    <Image
                      src={barberImage.imageUrl}
                      alt={`Portrait of ${barber.name}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={barberImage.imageHint}
                    />
                  )}
                 </div>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{barber.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{barber.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{barber.bio}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
