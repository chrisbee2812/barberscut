import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services, barbers } from '@/lib/data';

export default function Home() {
  const featuredServices = services.slice(0, 3);
  const featuredBarbers = barbers.slice(0, 2);

  return (
    <div className="flex flex-col min-h-dvh">
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        
          <Image
            src="/barbers-tools.webp"
            alt="Barber tools on a wooden counter"
            fill
            className="object-cover object-center"
            priority
            data-ai-hint="Barber tools on a wooden counter"
          />
      
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center text-primary-foreground space-y-4">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
              ScissorVision Barbershop
            </h1>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl drop-shadow-md">
              Classic Cuts & Modern Styles. Experience the art of grooming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
                A Cut Above the Rest
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Welcome to ScissorVision, where traditional barbering meets contemporary style. Our skilled barbers are dedicated to providing you with a premium grooming experience, tailored to your individual look. Relax, unwind, and leave looking your best.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/seed/shopinterior/600/400"
                alt="Barbershop Interior"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-xl"
                data-ai-hint="barbershop interior"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Featured Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From sharp haircuts to precise beard trims, we offer a range of services to keep you looking fresh.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
            {featuredServices.map((service) => (
              <Card key={service.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{service.description}</p>
                </CardContent>
                <CardFooter>
                  <p className="font-bold text-lg">{service.price}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Our barbers are masters of their craft, passionate about style and precision.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12">
                {featuredBarbers.map((barber) => {
                  const barberImage = PlaceHolderImages.find((img) => img.id === barber.imageId);
                  return (
                    <Card key={barber.name} className="overflow-hidden">
                      <div className="relative h-80 w-full">
                        {barberImage && (
                          <Image
                              src={barberImage.imageUrl}
                              alt={`Portrait of ${barber.name}`}
                              fill
                              className="object-cover"
                              data-ai-hint={barberImage.imageHint}
                          />
                        )}
                      </div>
                      <CardHeader>
                          <CardTitle className="font-headline">{barber.name}</CardTitle>
                          <CardDescription>{barber.specialty}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
            </div>
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/team">See The Full Team</Link>
              </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
