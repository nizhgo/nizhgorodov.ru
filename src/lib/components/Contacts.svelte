<script lang="ts">
	import { t } from '$lib/i18n';
	import ScrollReveal from './ScrollReveal.svelte';

	const links = [
		{ label: 'Telegram', value: '@nizhgo', href: 'https://t.me/nizhgo' },
		{ label: 'GitHub', value: 'github.com/Nizhgo', href: 'https://github.com/Nizhgo' },
		{ label: 'Email', value: 'alexey@nizhgorodov.ru', href: 'mailto:alexey@nizhgorodov.ru' }
	];
</script>

<section id="contact" class="scroll-mt-20 border-t border-rule">
	<div class="mx-auto max-w-6xl px-5 py-16 sm:px-8">
		<ScrollReveal>
			<p class="label text-accent">/ {$t.contacts.title}</p>
			<p
				class="mt-5 font-display text-4xl leading-[1.0] tracking-wide text-text-primary uppercase sm:text-6xl"
			>
				{$t.hero.name}
			</p>
		</ScrollReveal>

		<ScrollReveal stagger class="mt-10 block">
			{#each links as link}
				<a
					href={link.href}
					target={link.href.startsWith('mailto') ? undefined : '_blank'}
					rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
					class="reveal group flex items-center justify-between gap-4 border-t border-rule py-5 transition-colors hover:bg-accent hover:text-background"
				>
					<span class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
						<span class="font-mono text-[11px] tracking-[0.16em] uppercase opacity-60">{link.label}</span>
						<span class="font-mono text-lg text-text-primary group-hover:text-background sm:text-xl"
							>{link.value}</span
						>
					</span>
					<span class="text-2xl">↗</span>
				</a>
			{/each}
			<div class="border-t border-rule"></div>
		</ScrollReveal>
	</div>
</section>
