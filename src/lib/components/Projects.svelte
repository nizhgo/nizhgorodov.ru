<script lang="ts">
	import { t } from '$lib/i18n';
	import ScrollReveal from './ScrollReveal.svelte';
</script>

<section id="work" class="mx-auto max-w-6xl scroll-mt-20 px-5 py-14 sm:px-8">
	<ScrollReveal>
		<div class="flex items-end justify-between border-b border-rule pb-4">
			<h2 class="font-display text-2xl tracking-wide text-text-primary uppercase sm:text-3xl">
				{$t.ui.allWork}
			</h2>
			<span class="label">{$t.projects.items.length} / 08</span>
		</div>
	</ScrollReveal>

	<ScrollReveal stagger class="block">
		{#each $t.projects.items as project, i}
			<article class="reveal group border-b border-rule py-9">
				<div class="grid gap-x-7 gap-y-4 md:grid-cols-[5rem_1fr]">
					<span class="font-display text-5xl leading-none text-accent md:text-6xl">
						{String(i + 1).padStart(2, '0')}
					</span>

					<div>
						<div class="flex flex-wrap items-center gap-x-3 gap-y-2">
							<h3 class="text-xl font-bold tracking-tight text-text-primary sm:text-2xl">
								{project.title}
							</h3>
							{#if project.confidential}
								<span class="border border-rule px-2 py-0.5 font-mono text-[10px] tracking-wider text-text-muted uppercase">
									{project.ndaLabel ?? 'NDA'}
								</span>
							{/if}
						</div>

						<p class="mt-1.5 font-mono text-[11px] tracking-wide text-text-muted">
							{project.role}{#if project.period} · {project.period}{/if}
						</p>

						<p class="mt-3 max-w-2xl leading-relaxed text-text-secondary">{project.tagline}</p>

						{#if project.metrics && project.metrics.length}
							<div class="mt-4 flex flex-wrap gap-2">
								{#each project.metrics as metric}
									<span class="rounded-full bg-accent px-3 py-1 font-mono text-[10px] tracking-wide text-background">
										{metric}
									</span>
								{/each}
							</div>
						{/if}

						<ul class="mt-4 max-w-2xl space-y-2.5">
							{#each project.bullets as bullet}
								<li class="flex gap-3 text-[15px] leading-relaxed text-text-secondary">
									<span class="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-accent"></span>
									<span>{bullet}</span>
								</li>
							{/each}
						</ul>

						<div class="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
							{#each project.stack as tech}
								<span class="font-mono text-[10px] text-text-muted">{tech}</span>
							{/each}
						</div>

						{#if !project.confidential && project.links && project.links.length}
							<div class="mt-3 flex flex-wrap gap-x-5 gap-y-2">
								{#each project.links as link}
									<a
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-1.5 font-mono text-xs text-text-primary underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
									>
										{link.label} ↗
									</a>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</article>
		{/each}
	</ScrollReveal>
</section>
