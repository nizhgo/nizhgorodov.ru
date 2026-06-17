<script lang="ts">
	import { t } from '$lib/i18n';
	import ScrollReveal from './ScrollReveal.svelte';
</script>

<section class="mx-auto max-w-6xl px-5 py-14 sm:px-8">
	<ScrollReveal>
		<div class="flex items-end justify-between border-b border-rule pb-4">
			<h2 class="font-display text-2xl tracking-wide text-text-primary uppercase sm:text-3xl">
				{$t.background.title}
			</h2>
		</div>
	</ScrollReveal>

	<ScrollReveal class="grid gap-x-10 gap-y-10 pt-9 md:grid-cols-2">
		<div>
			<p class="label text-accent">/ {$t.ui.experience}</p>
			<div class="mt-5 space-y-7">
				{#each $t.background.work as job}
					<div class="border-t border-border pt-4">
						{#if job.logo}
							{#if job.logoBg}
								<span
									class="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#15171c] p-1.5"
								>
									<img src={job.logo} alt="" class="h-full w-full object-contain" />
								</span>
							{:else}
								<img src={job.logo} alt="" class="mb-3 h-6 w-auto max-w-[130px] object-contain" />
							{/if}
						{/if}
						<div class="flex items-baseline justify-between gap-3">
							<p class="text-lg font-bold text-text-primary">{job.place}</p>
							<p class="shrink-0 font-mono text-[11px] text-text-muted">{job.period}</p>
						</div>
						<p class="font-mono text-xs text-accent">{job.role}</p>
						{#if job.summary}
							<p class="mt-2 text-sm leading-relaxed text-text-secondary">{job.summary}</p>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<div>
			<p class="label text-accent">/ {$t.ui.education}</p>
			<div class="mt-5 space-y-7">
				{#each $t.background.education as edu}
					<div class="border-t border-border pt-4">
						{#if edu.logo}
							<img src={edu.logo} alt="" class="mb-3 h-9 w-auto max-w-[150px] object-contain" />
						{/if}
						<div class="flex items-baseline justify-between gap-3">
							<p class="text-lg font-bold text-text-primary">{edu.place}</p>
							<p class="shrink-0 font-mono text-[11px] text-text-muted">{edu.period}</p>
						</div>
						<p class="mt-2 font-mono text-xs text-accent">{edu.program}</p>
						{#if edu.note}
							<p class="mt-2 text-sm leading-relaxed text-text-secondary">{edu.note}</p>
						{/if}
						{#if edu.link}
							<a
								href={edu.link.href}
								target="_blank"
								rel="noopener noreferrer"
								class="mt-3 inline-flex items-center gap-1 font-mono text-xs text-text-primary underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
							>
								{edu.link.label} ↗
							</a>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</ScrollReveal>
</section>
