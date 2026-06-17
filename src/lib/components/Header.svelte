<script lang="ts">
	import { locale, toggleLocale } from '$lib/i18n';
	import { theme } from '$lib/theme';
</script>

<header class="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-md">
	<nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
		<a
			href="/"
			class="font-display text-base font-extrabold tracking-tight text-accent transition-opacity hover:opacity-70"
			>nizhgo</a
		>
		<div class="flex items-center gap-2">
			<button
				onclick={theme.toggle}
				class="flex h-9 w-9 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-surface-2 hover:text-accent"
				aria-label={$theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
			>
				{#if $theme === 'dark'}
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<circle cx="12" cy="12" r="5" />
						<line x1="12" y1="1" x2="12" y2="3" />
						<line x1="12" y1="21" x2="12" y2="23" />
						<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
						<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
						<line x1="1" y1="12" x2="3" y2="12" />
						<line x1="21" y1="12" x2="23" y2="12" />
						<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
						<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
					</svg>
				{:else}
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
					</svg>
				{/if}
			</button>
			<button
				onclick={toggleLocale}
				class="rounded-full border border-border px-4 py-1.5 font-mono text-xs text-text-secondary transition-all hover:border-accent hover:text-accent"
				aria-label="Switch language"
			>
				{$locale === 'ru' ? 'EN' : 'RU'}
			</button>
		</div>
	</nav>
</header>
