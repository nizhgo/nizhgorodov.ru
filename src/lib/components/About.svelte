<script lang="ts">
	import { t } from '$lib/i18n';
	import ScrollReveal from './ScrollReveal.svelte';
</script>

<section class="border-b border-rule">
	<div class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
		<ScrollReveal>
			<p class="label text-accent">/ {$t.about.title}</p>
			<div class="mt-6 max-w-4xl space-y-6">
				{#each $t.about.body as para, i}
					<p
						class="leading-relaxed text-text-primary {i === 0
							? 'text-2xl font-semibold tracking-tight sm:text-[32px]'
							: 'text-lg text-text-secondary'}"
					>
						{para}
					</p>
				{/each}
			</div>
		</ScrollReveal>
	</div>
</section>
