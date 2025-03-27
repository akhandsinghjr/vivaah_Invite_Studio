
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomizationForm from "@/components/CustomizationForm";
import CustomizeIntro from "@/components/CustomizeIntro";
import { useParams } from "react-router-dom";

const Customize = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Page Header */}
        <div className="bg-wedding-cream py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-wedding-charcoal mb-4">
              {id ? 'Customize Your Invitation' : 'Customization Options'}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {id 
                ? 'Personalize every detail to make your invitation truly unique.' 
                : 'Choose a design to get started with your personalized wedding invitation.'}
            </p>
          </div>
        </div>
        
        {/* Customization Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {id ? <CustomizationForm /> : <CustomizeIntro />}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Customize;
