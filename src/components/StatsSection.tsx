import { motion } from 'framer-motion';
import { TrendingUp, Users, Heart, Zap } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '245.8K',
    label: 'SOL Donated',
    suffix: '+',
  },
  {
    icon: Users,
    value: '12,847',
    label: 'Active Donors',
    suffix: '',
  },
  {
    icon: Heart,
    value: '6',
    label: 'Verified Charities',
    suffix: '',
  },
  {
    icon: Zap,
    value: '0.00025',
    label: 'Avg Transaction Fee',
    suffix: ' SOL',
  },
];

export const StatsSection = () => {
  return (
    <section id="impact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Platform <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            See the difference our community is making together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card rounded-2xl p-6 text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
