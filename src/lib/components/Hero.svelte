<script lang="ts">
	import { t } from '$lib/i18n';

	const stackLine = $derived($t.stack.groups.flatMap((g) => g.items).join(' ✲ '));
</script>

<!-- meta bar -->
<div class="border-b border-rule">
	<div
		class="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-2.5 font-mono text-[11px] tracking-[0.14em] text-text-muted uppercase sm:px-8"
	>
		<span>{$t.hero.role}</span>
	</div>
</div>

<!-- intro + photo -->
<section class="border-b border-rule">
	<div
		class="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-[300px_1fr] md:items-start md:py-16"
	>
		<div class="mx-auto w-full max-w-[300px] md:mx-0">
			<div class="aspect-[4/5] overflow-hidden border border-rule">
				<img src="/photo-1.jpg" alt={$t.hero.name} class="h-full w-full object-cover object-top" />
			</div>
		</div>

		<div>
			<h1 class="font-display text-3xl leading-none tracking-tight text-text-primary uppercase sm:text-4xl md:text-5xl">
				{$t.hero.name}
			</h1>
			<p class="label mt-3 text-accent">/ {$t.hero.role}</p>
			<p class="mt-5 max-w-xl text-2xl leading-tight font-semibold tracking-tight text-text-primary sm:text-3xl">
				{$t.hero.headline}
			</p>
			<p class="mt-4 max-w-xl text-base leading-relaxed text-text-secondary">{$t.hero.bio}</p>
			<div class="mt-7">
				<a
					href={$t.hero.cta.href}
					class="inline-block bg-text-primary px-5 py-3 font-mono text-xs tracking-[0.1em] text-background uppercase transition-colors hover:bg-accent"
				>
					{$t.hero.cta.label} →
				</a>
			</div>
		</div>
	</div>
</section>

<!-- marquee -->
<div class="marquee border-b border-rule bg-accent text-background">
	<div class="track font-display py-2 text-lg tracking-wide uppercase sm:text-xl">
		<span class="pr-6">{stackLine} ✲ </span>
		<span class="pr-6">{stackLine} ✲ </span>
	</div>
</div>
