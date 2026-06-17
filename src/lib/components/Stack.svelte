<script lang="ts">
	import { t } from '$lib/i18n';
	import ScrollReveal from './ScrollReveal.svelte';
</script>

<section class="mx-auto max-w-3xl px-6 py-16">
	<ScrollReveal>
		<div class="mb-8 flex items-baseline gap-4">
			<span class="font-mono text-5xl font-bold leading-none text-accent/10">02</span>
			<h3 class="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
				{$t.stack.title}
			</h3>
		</div>
	</ScrollReveal>

	<ScrollReveal>
		<p class="font-mono text-sm leading-loose text-text-secondary">
			{$t.stack.items.join('  ·  ')}
		</p>
	</ScrollReveal>
</section>
