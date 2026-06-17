<script lang="ts">
	import { t } from '$lib/i18n';
	import ScrollReveal from './ScrollReveal.svelte';
</script>

<section class="mx-auto max-w-3xl px-6 py-16">
	<ScrollReveal>
		<div class="mb-8 flex items-baseline gap-4">
			<span class="font-mono text-5xl font-bold leading-none text-accent/10">03</span>
			<h3 class="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
				{$t.background.title}
			</h3>
		</div>
	</ScrollReveal>

	<ScrollReveal>
		<div class="space-y-2 font-mono text-sm">
			{#each $t.background.work as job}
				<p>
					<span class="font-bold text-text-primary">{job.place}</span>
					<span class="text-text-muted"> → </span>
					<span class="text-text-secondary">{job.role}</span>
					<span class="text-text-muted">, {job.period}</span>
				</p>
			{/each}

			<div class="h-4"></div>

			{#each $t.background.education as edu}
				<p>
					<span class="font-bold text-text-primary">{edu.place}</span>
					<span class="text-text-muted"> → </span>
					<span class="text-text-secondary">{edu.program}</span>
					<span class="text-text-muted">, {edu.period}</span>
				</p>
			{/each}
		</div>
	</ScrollReveal>
</section>
