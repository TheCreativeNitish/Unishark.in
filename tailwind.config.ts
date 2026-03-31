import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      spacing: {
        'safe': 'max(0.5rem, env(safe-area-inset-left))',
      },
    },
  },
} satisfies Config;
