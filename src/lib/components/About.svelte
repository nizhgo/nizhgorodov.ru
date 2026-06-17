<script lang="ts">
	import { t } from '$lib/i18n';
	import ScrollReveal from './ScrollReveal.svelte';
</script>

<section class="border-b border-rule">
	<div class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
		<ScrollReveal>
			<p class="label text-accent">/ {$t.about.title}</p>
			<div class="mt-6 max-w-3xl space-y-4">
				{#each $t.about.body as para, i}
					<p
						class="text-text-primary {i === 0
							? 'text-2xl leading-snug font-semibold tracking-tight sm:text-3xl'
							: 'text-base leading-relaxed text-text-secondary sm:text-lg'}"
					>
						{para}
					</p>
				{/each}
			</div>
		</ScrollReveal>
	</div>
</section>
