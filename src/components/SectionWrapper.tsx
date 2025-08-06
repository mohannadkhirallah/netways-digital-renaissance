import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  background?: 'default' | 'muted' | 'gradient' | 'dark';
  padding?: 'default' | 'large' | 'small';
  id?: string;
}

const SectionWrapper = ({ 
  children, 
  className = '', 
  background = 'default',
  padding = 'default',
  id 
}: SectionWrapperProps) => {
  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted/30',
    gradient: 'bg-gradient-card',
    dark: 'bg-gradient-hero text-white'
  };

  const paddingClasses = {
    default: 'py-section',
    large: 'py-32',
    small: 'py-16'
  };

  return (
    <section 
      id={id}
      className={`
        ${backgroundClasses[background]} 
        ${paddingClasses[padding]} 
        px-4 sm:px-6 lg:px-8 
        ${className}
      `}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;