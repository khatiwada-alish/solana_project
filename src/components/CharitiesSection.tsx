import { motion } from 'framer-motion';
import { charities } from '@/data/charities';
import { ExternalLink } from 'lucide-react';

export const CharitiesSection = () => {
  return (
    <section id="charities" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--primary)/0.05)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Verified <span className="gradient-text">Charities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Here are example of charities in nepal.All the wallet adress and charities are just a demo and not real.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {charities.map((charity, index) => (
            <motion.div
              key={charity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 group cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-3xl">
                  {charity.logo}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-semibold text-lg">
                      {charity.name}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="inline-block px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary mt-1">
                    {charity.category}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4">
                {charity.description}
              </p>

              <div className="p-3 rounded-lg bg-background/30 group-hover:bg-background/50 transition-colors">
                <div className="text-xs text-muted-foreground mb-1">Wallet Address</div>
                <code className="text-xs text-foreground/80 break-all">
                  {charity.walletAddress}
                </code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
