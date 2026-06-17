<script lang="ts">
	import { t } from '$lib/i18n';
	import ScrollReveal from './ScrollReveal.svelte';
</script>

<section class="mx-auto max-w-3xl px-6 py-14">
	<ScrollReveal>
		<h3 class="mb-8 text-center text-lg font-bold text-accent">{$t.skills.title}</h3>
	</ScrollReveal>

	<ScrollReveal stagger>
		<div class="grid gap-5 sm:grid-cols-2">
			{#each $t.skills.categories as category}
				<div class="reveal rounded-xl border border-border bg-surface/40 p-5">
					<h4 class="mb-3 text-sm font-bold text-text-primary">{category.name}</h4>
					<div class="flex flex-wrap gap-2">
						{#each category.items as skill}
							<span
								class="rounded-full border border-border px-3.5 py-1 font-mono text-xs text-text-secondary transition-colors hover:border-accent/40 hover:text-accent"
							>
								{skill}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</ScrollReveal>
</section>
