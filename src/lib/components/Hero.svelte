<script lang="ts">
	import { t } from '$lib/i18n';

	const nameParts = $derived($t.hero.name.split(' '));
	const stackLine = $derived($t.stack.groups.flatMap((g) => g.items).join(' ✲ '));

	const photos = [
		{ src: '/photo-1.jpg', cap: '01 · студия', pos: 'object-top' },
		{ src: '/photo-2.jpg', cap: '02 · field', pos: 'object-top' },
		{ src: '/photo-3.jpg', cap: '03 · field', pos: 'object-center' }
	];
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
		<span class="pr-6">{stackLine} ✲ </span>
		<span class="pr-6">{stackLine} ✲ </span>
	</div>
</div>

<!-- statement -->
<section class="border-b border-rule">
	<div class="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr] md:py-16">
		<div>
			<p class="label text-accent">/ {$t.hero.role}</p>
			<p class="mt-4 text-3xl leading-[1.12] font-semibold tracking-tight text-text-primary sm:text-4xl md:text-[42px]">
				{$t.hero.headline}
			</p>
		</div>
		<div>
			<p class="text-base leading-relaxed text-text-secondary">{$t.hero.bio}</p>
			<a
				href={$t.hero.cta.href}
				class="mt-6 inline-block bg-text-primary px-5 py-3 font-mono text-xs tracking-[0.1em] text-background uppercase transition-colors hover:bg-accent"
			>
				{$t.hero.cta.label} →
			</a>
			<p class="mt-5 flex items-center gap-2 font-mono text-[11px] text-text-muted">
				<span class="inline-block h-2 w-2 shrink-0 rounded-full bg-accent"></span>
				{$t.hero.availability}
			</p>
		</div>
	</div>
</section>

<!-- photos -->
<section class="border-b border-rule">
	<div class="mx-auto grid max-w-6xl grid-cols-3 gap-3 px-5 py-8 sm:px-8 sm:gap-5">
		{#each photos as photo}
			<figure>
				<div class="aspect-[3/4] overflow-hidden border border-rule">
					<img src={photo.src} alt="" class="h-full w-full object-cover {photo.pos}" />
				</div>
				<figcaption class="mt-2 font-mono text-[10px] tracking-wider text-text-muted uppercase">
					{photo.cap}
				</figcaption>
			</figure>
		{/each}
	</div>
</section>
