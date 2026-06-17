<script lang="ts">
	import { t } from '$lib/i18n';

	const nameParts = $derived($t.hero.name.split(' '));
	const stackLine = $derived($t.stack.groups.flatMap((g) => g.items).join(' ✲ '));
</script>

<!-- meta bar -->
<div class="border-b border-rule">
	<div
		class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-2.5 font-mono text-[11px] tracking-[0.14em] text-text-muted uppercase sm:px-8"
	>
		<span>{$t.hero.role}</span>
		<span>{$t.hero.location}</span>
	</div>
</div>

<!-- giant name -->
<section class="mx-auto max-w-6xl px-5 pt-8 pb-6 sm:px-8">
	<h1 class="display text-[clamp(54px,14vw,200px)]">
		<span class="text-text-primary">{nameParts[0]}</span><br />
		<span class="text-outline">{nameParts.slice(1).join(' ')}</span>
	</h1>
</section>

<!-- marquee -->
<div class="marquee border-y border-rule bg-accent text-background">
	<div class="track font-display py-2 text-lg tracking-wide uppercase sm:text-xl">
		<span class="pr-6">{stackLine} ✲ </span>
		<span class="pr-6">{stackLine} ✲ </span>
	</div>
</div>

<!-- intro + photo -->
<section class="border-b border-rule">
	<div
		class="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-[300px_1fr] md:items-start md:py-16"
	>
		<figure class="mx-auto w-full max-w-[300px] md:mx-0">
			<div class="aspect-[4/5] overflow-hidden border border-rule">
				<img src="/photo-1.jpg" alt={$t.hero.name} class="h-full w-full object-cover object-top" />
			</div>
			<figcaption class="mt-2 font-mono text-[10px] tracking-wider text-text-muted uppercase">
				{$t.hero.location}
			</figcaption>
		</figure>

		<div>
			<p class="label text-accent">/ {$t.hero.role}</p>
			<p class="mt-3 text-3xl leading-[1.12] font-semibold tracking-tight text-text-primary sm:text-4xl md:text-[40px]">
				{$t.hero.headline}
			</p>
			<p class="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">{$t.hero.bio}</p>
			<div class="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
				<a
					href={$t.hero.cta.href}
					class="inline-block bg-text-primary px-5 py-3 font-mono text-xs tracking-[0.1em] text-background uppercase transition-colors hover:bg-accent"
				>
					{$t.hero.cta.label} →
				</a>
				<p class="flex items-center gap-2 font-mono text-[11px] text-text-muted">
					<span class="inline-block h-2 w-2 shrink-0 rounded-full bg-accent"></span>
					{$t.hero.availability}
				</p>
			</div>
		</div>
	</div>
</section>
