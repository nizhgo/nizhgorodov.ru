<script lang="ts">
	import { t } from '$lib/i18n';
	import ScrollReveal from './ScrollReveal.svelte';
</script>

<section class="mx-auto max-w-3xl px-6 py-14">
	<ScrollReveal>
		<h3 class="mb-8 text-center text-lg font-bold text-accent">{$t.education.title}</h3>
	</ScrollReveal>

	<div class="space-y-6">
		{#each $t.education.items as edu}
			<ScrollReveal>
				<article class="rounded-xl border border-border bg-surface/30 p-6">
					<div
						class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"
					>
						<div>
							<span
								class="mb-2 inline-block rounded-full bg-accent/10 px-3 py-0.5 text-xs font-bold text-accent"
							>
								{edu.degree}
							</span>
							<h4 class="text-lg font-bold text-text-primary">{edu.institution}</h4>
							<p class="text-sm text-text-secondary">{edu.faculty}</p>
						</div>
						<time class="shrink-0 font-mono text-xs text-text-muted">{edu.period}</time>
					</div>

					{#if edu.details}
						<p class="mt-3 text-sm leading-relaxed text-text-secondary">
							{edu.details}
						</p>
					{/if}
				</article>
			</ScrollReveal>
		{/each}
	</div>
</section>
