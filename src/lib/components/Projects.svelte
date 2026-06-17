<script lang="ts">
	import { t } from '$lib/i18n';
	import ScrollReveal from './ScrollReveal.svelte';
</script>

<section class="mx-auto max-w-3xl px-6 py-16">
	<ScrollReveal>
		<div class="mb-8 flex items-baseline gap-4">
			<span class="font-mono text-5xl font-bold leading-none text-accent/10">01</span>
			<h3 class="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
				{$t.projects.title}
			</h3>
		</div>
	</ScrollReveal>

	<ScrollReveal stagger>
		<div class="divide-y divide-border">
			{#each $t.projects.items as project, i}
				<div class="reveal project-row group flex gap-5 px-2 py-6 sm:gap-8">
					<span
						class="shrink-0 font-mono text-3xl font-bold leading-none text-accent/10 transition-colors group-hover:text-accent/30 sm:text-4xl"
					>
						{String(i + 1).padStart(2, '0')}
					</span>
					<div class="flex-1 min-w-0">
						<h4
							class="text-base font-bold text-text-primary transition-colors group-hover:text-accent sm:text-lg"
						>
							{project.title}
						</h4>
						<p class="mt-1.5 text-sm leading-relaxed text-text-secondary">
							{project.description}
						</p>
						<div class="mt-3 flex flex-wrap gap-x-3 gap-y-1">
							{#each project.tags as tag}
								<span class="font-mono text-[10px] text-text-muted">{tag}</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</ScrollReveal>
</section>
