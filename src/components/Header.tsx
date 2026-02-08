import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export const Header = () => {
  const { connected } = useWallet();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <Sparkles className="w-4 h-4 text-accent absolute -top-1 -right-1" />
          </div>
          <span className="font-display text-xl font-bold gradient-text">
            SolSahayog
          </span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#donate" className="text-muted-foreground hover:text-foreground transition-colors">
            Donate
          </a>
          <a href="#charities" className="text-muted-foreground hover:text-foreground transition-colors">
            Charities
          </a>
          <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors">
            Impact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {connected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Connected</span>
            </motion.div>
          )}
          <WalletMultiButton />
        </div>
      </div>
    </motion.header>
  );
};
