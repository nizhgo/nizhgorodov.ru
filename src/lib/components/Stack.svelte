<script lang="ts">
	import { t } from '$lib/i18n';
	import ScrollReveal from './ScrollReveal.svelte';
</script>

<section class="mx-auto max-w-3xl px-6 py-16">
	<ScrollReveal>
		<div class="mb-8 flex items-baseline gap-4">
			<span class="font-mono text-5xl font-bold leading-none text-accent/10">02</span>
			<h2 class="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
				{$t.stack.title}
			</h2>
		</div>
	</ScrollReveal>

	<ScrollReveal stagger>
		<div class="space-y-5">
			{#each $t.stack.groups as group}
				<div class="reveal flex flex-col gap-2 sm:flex-row sm:gap-6">
					<p
						class="shrink-0 pt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted sm:w-44"
					>
						{group.label}
					</p>
					<div class="flex flex-wrap gap-2">
						{#each group.items as item}
							<span
								class="rounded border border-border px-2.5 py-1 font-mono text-xs text-text-secondary"
							>
								{item}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</ScrollReveal>
</section>
