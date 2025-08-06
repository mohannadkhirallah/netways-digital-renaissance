import SectionWrapper from '@/components/SectionWrapper';

const PrivacyPolicy = () => {
  return (
    <div className="pt-20">
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-display font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: December 2024</p>
            
            <h2 className="text-title font-bold mb-4">Information We Collect</h2>
            <p className="mb-6">We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.</p>
            
            <h2 className="text-title font-bold mb-4">How We Use Your Information</h2>
            <p className="mb-6">We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
            
            <h2 className="text-title font-bold mb-4">Information Sharing</h2>
            <p className="mb-6">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
            
            <h2 className="text-title font-bold mb-4">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at privacy@netways.com</p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default PrivacyPolicy;