<script lang="ts">
	import { t } from '$lib/i18n';
	import ScrollReveal from './ScrollReveal.svelte';
</script>

<section id="work" class="mx-auto max-w-4xl scroll-mt-24 px-4 py-16 sm:px-6">
	<ScrollReveal>
		<div class="mb-8 flex items-baseline gap-4">
			<span class="font-display text-5xl font-extrabold leading-none text-accent/15">01</span>
			<h2 class="label">{$t.ui.allWork}</h2>
		</div>
	</ScrollReveal>

	<ScrollReveal stagger class="grid grid-cols-1 gap-3">
		{#each $t.projects.items as project, i}
			<article class="tile tile-hover tile-ticks reveal group p-6 sm:p-7">
				<div class="flex flex-wrap items-center gap-x-3 gap-y-2">
					<span class="font-mono text-xs font-bold text-accent">{String(i + 1).padStart(2, '0')}</span>
					<h3
						class="font-display text-xl font-bold text-text-primary transition-colors group-hover:text-accent sm:text-2xl"
					>
						{project.title}
					</h3>
					{#if project.confidential}
						<span
							class="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-text-muted"
						>
							{project.ndaLabel ?? 'NDA'}
						</span>
					{/if}
				</div>

				<p class="mt-1.5 font-mono text-[11px] text-text-muted">
					{project.role}{#if project.period} · {project.period}{/if}
				</p>

				<p class="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary">{project.tagline}</p>

				{#if project.metrics && project.metrics.length}
					<div class="mt-4 flex flex-wrap gap-2">
						{#each project.metrics as metric}
							<span class="rounded bg-accent/10 px-2 py-1 font-mono text-[11px] text-accent">{metric}</span>
						{/each}
					</div>
				{/if}

				<ul class="mt-4 space-y-2.5">
					{#each project.bullets as bullet}
						<li class="flex gap-2.5 text-sm leading-relaxed text-text-secondary">
							<span class="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent/50"></span>
							<span>{bullet}</span>
						</li>
					{/each}
				</ul>

				<div class="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-border pt-4">
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
								class="group/link inline-flex items-center gap-1.5 font-mono text-xs text-text-secondary transition-colors hover:text-accent"
							>
								{link.label}
								<span class="transition-transform group-hover/link:translate-x-0.5" aria-hidden="true">↗</span>
							</a>
						{/each}
					</div>
				{/if}
			</article>
		{/each}
	</ScrollReveal>
</section>
