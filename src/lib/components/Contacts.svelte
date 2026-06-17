<script lang="ts">
	import { t } from '$lib/i18n';
	import ScrollReveal from './ScrollReveal.svelte';

	const links = [
		{ label: '@nizhgo', href: 'https://t.me/nizhgo' },
		{ label: 'GitHub', href: 'https://github.com/Nizhgo' },
		{ label: 'alexey@nizhgorodov.ru', href: 'mailto:alexey@nizhgorodov.ru' }
	] as const;
</script>

<section class="mx-auto max-w-3xl px-6 py-16">
	<ScrollReveal>
		<p class="mb-6 max-w-md text-sm leading-relaxed text-text-secondary">
			{$t.contacts.note}
		</p>
		<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
			{#each links as link}
				<a
					href={link.href}
					target={link.href.startsWith('mailto') ? undefined : '_blank'}
					rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
					class="group flex items-center gap-2 font-mono text-sm text-text-secondary transition-colors hover:text-accent"
				>
					{link.label}
					<span
						class="inline-block text-text-muted transition-transform group-hover:translate-x-1"
						>→</span
					>
				</a>
			{/each}
		</div>
	</ScrollReveal>
</section>
