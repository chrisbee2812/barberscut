import type { FC, ReactNode } from 'react';

type PageHeaderProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export const PageHeader: FC<PageHeaderProps> = ({ title, description, children }) => {
  return (
    <div className="bg-card border-b">
      <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20 text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
          {title}
        </h1>
        {description && (
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};
