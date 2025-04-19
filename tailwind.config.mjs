/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'tech-dark': '#0D1117',
        'tech-darker': '#070A0F',
        'tech-light': '#F0F6FF',
        'neon-blue': '#00FFFF',
        'neon-purple': '#BD00FF',
        'neon-blue-dim': '#0099CC',
        'neon-purple-dim': '#8800BB',
        'terminal-green': '#00FF00',
        'metal-gray': '#2D3748',
        'metal-light': '#4A5568'
      },
      fontFamily: {
        'mono': ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        'sans': ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif']
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scanline': 'scanline 2s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 0 rgba(0,255,255,0)' },
          '100%': { textShadow: '0 0 8px rgba(0,255,255,0.8), 0 0 12px rgba(0,255,255,0.4)' }
        },
        scanline: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' }
        }
      }
    },
  },
  plugins: [],
}