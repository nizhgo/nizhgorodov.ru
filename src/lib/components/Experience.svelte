<script lang="ts">
	import { t } from '$lib/i18n';
	import ScrollReveal from './ScrollReveal.svelte';
</script>

<section class="mx-auto max-w-3xl px-6 py-14">
	<ScrollReveal>
		<h3 class="mb-8 text-center text-lg font-bold text-accent">{$t.experience.title}</h3>
	</ScrollReveal>

	<div class="space-y-10">
		{#each $t.experience.items as job}
			<ScrollReveal>
				<article>
					<div
						class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
					>
						<div>
							<h4 class="text-lg font-bold text-text-primary">{job.company}</h4>
							<p class="text-sm font-semibold text-accent">{job.role}</p>
						</div>
						<time class="font-mono text-xs text-text-muted">{job.period}</time>
					</div>

					<p class="mt-3 text-sm leading-relaxed text-text-secondary">
						{job.description}
					</p>

					<ul class="mt-4 space-y-2">
						{#each job.highlights as highlight}
							<li
								class="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary"
							>
								<span
									class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50"
								></span>
								{highlight}
							</li>
						{/each}
					</ul>
				</article>
			</ScrollReveal>
		{/each}
	</div>
</section>
