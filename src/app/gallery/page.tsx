import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter((img) => img.id.startsWith('gallery-'));

  return (
    <div>
      <PageHeader
        title="Our Gallery"
        description="A picture is worth a thousand words. Browse our gallery to see the quality of our work, the styles we create, and the atmosphere of our shop."
      />
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
