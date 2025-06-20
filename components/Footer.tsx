'use client';
import { Button } from 'components/ui/button';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer style={{ marginTop: 'auto' }} className="flex py-8 pt-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <a href="https://x.com/d3tru04">
          <Button
            variant="link"
            className="text-muted-foreground link-with-animation"
          >
            <span className="text-secondary">X</span>
          </Button>
        </a>
        <a href="https://github.com/D3TRU04">
          <Button
            variant="link"
            className="text-muted-foreground link-with-animation"
          >
            <span className="text-secondary">GitHub</span>
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/dantruong04/">
          <Button
            variant="link"
            className="text-muted-foreground link-with-animation"
          >
            <span className="text-secondary">LinkedIn</span>
          </Button>
        </a>
        <a href="mailto:dantruongg_@utexas.edu">
          <Button
            variant="link"
            className="text-muted-foreground link-with-animation"
          >
            <span className="text-secondary">Email</span>
          </Button>
        </a>
      </motion.div>
    </footer>
  );
}
