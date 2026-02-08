import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { charities, Charity } from '@/data/charities';
import { Wallet, ArrowRight, CheckCircle2, Copy, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

export const DonationForm = () => {
  const { connected, publicKey } = useWallet();
  const [amount, setAmount] = useState('');
  const [selectedCharity, setSelectedCharity] = useState<Charity | null>(null);
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (connected && step === 1) {
      setStep(2);
    } else if (!connected) {
      setStep(1);
    }
  }, [connected]);

  const handleCharitySelect = (charityId: string) => {
    const charity = charities.find((c) => c.id === charityId);
    if (charity) {
      setSelectedCharity(charity);
    }
  };

  const handleAmountPreset = (value: string) => {
    setAmount(value);
  };

  const copyAddress = () => {
    if (selectedCharity) {
      navigator.clipboard.writeText(selectedCharity.walletAddress);
      toast.success('Wallet address copied!');
    }
  };

  const handleDonate = async () => {
    if (!selectedCharity || !amount) return;

    setIsProcessing(true);

    // Simulate transaction (in production, this would use the actual Solana program)
    setTimeout(() => {
      setIsProcessing(false);
      toast.success(
        `Successfully donated ${amount} SOL to ${selectedCharity.name}!`,
        {
          description: 'Thank you for your donation 🫡🫡WAGMI ',
        }
      );
      setAmount('');
      setSelectedCharity(null);
      setStep(2);
    }, 2000);
  };

  const canProceed = amount && parseFloat(amount) > 0 && selectedCharity;

  return (
    <section id="donate" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Make a <span className="gradient-text">Donation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Follow the simple steps below to send your donation directly to verified charities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {[
              { num: 1, label: 'Connect' },
              { num: 2, label: 'Amount' },
              { num: 3, label: 'Charity' },
              { num: 4, label: 'Confirm' },
            ].map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${step >= s.num
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground'
                    }`}
                >
                  {step > s.num ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    s.num
                  )}
                </div>
                {i < 3 && (
                  <div
                    className={`w-12 h-0.5 mx-2 transition-all ${step > s.num ? 'bg-primary' : 'bg-secondary'
                      }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-8">
            <AnimatePresence mode="wait">
              {/* Step 1: Connect Wallet */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Wallet className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">
                    Connect Your Wallet
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Connect your Phantom or Solflare wallet to get started
                  </p>
                  <WalletMultiButton />
                </motion.div>
              )}

              {/* Step 2: Enter Amount */}
              {step === 2 && connected && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Donation Amount (SOL)
                    </label>
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="text-2xl font-bold h-16 text-center bg-secondary border-border"
                    />
                  </div>

                  <div className="flex gap-3 flex-wrap justify-center">
                    {['0.1', '0.5', '1', '5', '10'].map((preset) => (
                      <Button
                        key={preset}
                        variant={amount === preset ? 'gradient' : 'outline'}
                        size="sm"
                        onClick={() => handleAmountPreset(preset)}
                      >
                        {preset} SOL
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    disabled={!amount || parseFloat(amount) <= 0}
                    onClick={() => setStep(3)}
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              )}

              {/* Step 3: Select Charity */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Select a Charity
                    </label>
                    <Select onValueChange={handleCharitySelect}>
                      <SelectTrigger className="h-14 bg-secondary border-border">
                        <SelectValue placeholder="Choose a charity to support" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border z-50">
                        {charities.map((charity) => (
                          <SelectItem
                            key={charity.id}
                            value={charity.id}
                            className="py-3"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{charity.logo}</span>
                              <div>
                                <div className="font-medium">{charity.name}</div>
                                <div className="text-xs text-muted-foreground">
                                  {charity.category}
                                </div>
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedCharity && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-secondary/50 border border-border"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-4xl">{selectedCharity.logo}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">
                            {selectedCharity.name}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            {selectedCharity.description}
                          </p>
                          <div className="flex items-center gap-2 p-2 rounded-lg bg-background/50">
                            <code className="text-xs text-muted-foreground flex-1 truncate">
                              {selectedCharity.walletAddress}
                            </code>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              onClick={copyAddress}
                            >
                              <Copy className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setStep(2)}
                    >
                      Back
                    </Button>
                    <Button
                      variant="gradient"
                      size="lg"
                      className="flex-1"
                      disabled={!selectedCharity}
                      onClick={() => setStep(4)}
                    >
                      Review Donation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Confirm */}
              {step === 4 && selectedCharity && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-display font-bold mb-2">
                      Review Your Donation
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Please confirm the details below
                    </p>
                  </div>

                  <div className="space-y-4 p-4 rounded-xl bg-secondary/30">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">From</span>
                      <code className="text-xs bg-background px-2 py-1 rounded">
                        {publicKey?.toBase58().slice(0, 8)}...
                        {publicKey?.toBase58().slice(-8)}
                      </code>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">To</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{selectedCharity.logo}</span>
                        <span className="font-medium">{selectedCharity.name}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Charity Wallet</span>
                      <code className="text-xs bg-background px-2 py-1 rounded">
                        {selectedCharity.walletAddress.slice(0, 8)}...
                        {selectedCharity.walletAddress.slice(-8)}
                      </code>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Amount</span>
                      <span className="text-2xl font-bold gradient-text">
                        {amount} SOL
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setStep(3)}
                      disabled={isProcessing}
                    >
                      Back
                    </Button>
                    <Button
                      variant="wallet"
                      size="lg"
                      className="flex-1"
                      onClick={handleDonate}
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                          />
                          Processing...
                        </>
                      ) : (
                        <>
                          Confirm Donation
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
