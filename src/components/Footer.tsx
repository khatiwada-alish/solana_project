import { Heart, Github, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold gradient-text">
              SolSahayog
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Documentation
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://x.com/khatiwadaalish0"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/khatiwada-alish"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            build by Alish in {' '}
            <span className="gradient-text font-medium">Solana</span>
            {' '}• {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};
