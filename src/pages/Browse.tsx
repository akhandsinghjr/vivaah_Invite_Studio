
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InvitationGrid from "@/components/InvitationGrid";

const Browse = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Page Header */}
        <div className="bg-wedding-cream py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-wedding-charcoal mb-4">
              Browse Our Collection
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our curated selection of beautiful digital wedding invitations designed to make your special day even more memorable.
            </p>
          </div>
        </div>
        
        {/* Invitations Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <InvitationGrid />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Browse;
