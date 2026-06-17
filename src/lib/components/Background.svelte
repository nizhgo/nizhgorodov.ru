<script lang="ts">
	import { t } from '$lib/i18n';
	import ScrollReveal from './ScrollReveal.svelte';
</script>

<section class="mx-auto max-w-4xl px-4 py-16 sm:px-6">
	<ScrollReveal>
		<div class="mb-8 flex items-baseline gap-4">
			<span class="font-display text-5xl font-extrabold leading-none text-accent/15">02</span>
			<h2 class="label">{$t.background.title}</h2>
		</div>
	</ScrollReveal>

	<ScrollReveal stagger class="grid grid-cols-1 gap-3 md:grid-cols-2">
		<div class="tile tile-ticks reveal p-6">
			<p class="label">{$t.ui.experience}</p>
			<div class="mt-4 space-y-5">
				{#each $t.background.work as job}
					<div>
						<div class="flex items-baseline justify-between gap-3">
							<p class="font-display text-base font-bold text-text-primary">{job.place}</p>
							<p class="shrink-0 font-mono text-[11px] text-text-muted">{job.period}</p>
						</div>
						<p class="font-mono text-xs text-accent">{job.role}</p>
						{#if job.summary}
							<p class="mt-1.5 text-xs leading-relaxed text-text-muted">{job.summary}</p>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<div class="tile tile-ticks reveal p-6">
			<p class="label">{$t.ui.education}</p>
			<div class="mt-4 space-y-5">
				{#each $t.background.education as edu}
					<div>
						<div class="flex items-baseline justify-between gap-3">
							<p class="font-display text-base font-bold text-text-primary">{edu.place}</p>
							<p class="shrink-0 font-mono text-[11px] text-text-muted">{edu.period}</p>
						</div>
						<p class="font-mono text-xs text-accent">{edu.program}</p>
						{#if edu.note}
							<p class="mt-1.5 text-xs leading-relaxed text-text-muted">{edu.note}</p>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</ScrollReveal>
</section>
