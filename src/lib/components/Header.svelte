<script lang="ts">
	import { locale, toggleLocale } from '$lib/i18n';
	import { theme } from '$lib/theme';
</script>

<header class="w-full">
	<nav class="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
		<a
			href="/"
			class="font-display text-xs tracking-wider text-accent transition-opacity hover:opacity-70"
			>NIZHGO</a
		>
		<div class="flex items-center gap-3">
			<button
				onclick={theme.toggle}
				class="flex h-8 w-8 items-center justify-center rounded-full text-text-muted transition-colors hover:text-accent"
				aria-label="Toggle theme"
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
					>
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
					</svg>
				{/if}
			</button>
			<button
				onclick={toggleLocale}
				class="rounded-full border border-accent px-5 py-1.5 text-sm text-accent transition-all hover:bg-accent/10"
			>
				EN / RU
			</button>
		</div>
	</nav>
</header>
