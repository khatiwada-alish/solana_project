import { WalletProvider } from '@/components/WalletProvider';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { DonationForm } from '@/components/DonationForm';
import { CharitiesSection } from '@/components/CharitiesSection';
import { StatsSection } from '@/components/StatsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <WalletProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <DonationForm />
          <CharitiesSection />
          <StatsSection />
        </main>
        <Footer />
      </div>
    </WalletProvider>
  );
};

export default Index;
