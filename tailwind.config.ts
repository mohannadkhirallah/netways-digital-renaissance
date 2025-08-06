import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				brand: {
					primary: 'hsl(var(--brand-primary))',
					'primary-light': 'hsl(var(--brand-primary-light))',
					'primary-dark': 'hsl(var(--brand-primary-dark))',
					secondary: 'hsl(var(--brand-secondary))',
					accent: 'hsl(var(--brand-accent))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
				'headline': ['2rem', { lineHeight: '1.3' }],
				'title': ['1.5rem', { lineHeight: '1.4' }],
				'subtitle': ['1.25rem', { lineHeight: '1.5' }],
			},
			spacing: {
				'section': '6rem',
				'component': '3rem',
				'element': '1.5rem',
			},
			boxShadow: {
				'soft': '0 2px 8px hsl(var(--brand-primary) / 0.08)',
				'medium': '0 4px 16px hsl(var(--brand-primary) / 0.12)',
				'strong': '0 8px 32px hsl(var(--brand-primary) / 0.16)',
				'glow': '0 0 24px hsl(var(--brand-primary) / 0.2)',
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, hsl(var(--brand-primary)), hsl(var(--brand-primary-light)))',
				'gradient-secondary': 'linear-gradient(135deg, hsl(var(--brand-secondary)), hsl(30 100% 60%))',
				'gradient-hero': 'linear-gradient(135deg, hsl(var(--brand-primary)) 0%, hsl(220 25% 25%) 100%)',
				'gradient-card': 'linear-gradient(145deg, hsl(0 0% 100%) 0%, hsl(210 40% 98%) 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--brand-primary) / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--brand-primary) / 0.6)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'slide-up': 'slide-up 0.8s ease-out forwards',
				'scale-in': 'scale-in 0.6s ease-out forwards',
				'glow': 'glow 2s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;