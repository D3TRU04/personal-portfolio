'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from 'components/ui/button';;
export function Header() {
  return (
    <header className="flex justify-center py-8 pt-6 pb-0">
      <Link href="/" passHref>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="link" className="link-with-animation">
            Home
          </Button>
        </motion.div>
      </Link>
      <Link href="/resume" passHref>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="link" className="link-with-animation">
            Resume
          </Button>
        </motion.div>
      </Link>
      <Link href="/projects" passHref>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="link" className="link-with-animation">
            Projects
          </Button>
        </motion.div>
      </Link>
    </header>
  );
}
