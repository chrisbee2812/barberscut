import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data";
import { CombIcon, StraightRazorIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Our Services"
        description="We offer a comprehensive range of grooming services, performed by skilled barbers dedicated to their craft. Find the perfect treatment to refresh your look."
      />
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.name} className="flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="flex-row gap-4 items-center">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  {service.name.includes('Shave') ? <StraightRazorIcon className="w-6 h-6"/> : <CombIcon className="w-6 h-6"/>}
                </div>
                <CardTitle className="font-headline text-2xl">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter>
                <p className="font-bold text-xl text-primary">{service.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
