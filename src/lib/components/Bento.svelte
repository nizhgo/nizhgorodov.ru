<script lang="ts">
	import { t } from '$lib/i18n';
	import MapTile from './MapTile.svelte';

	const featured = $derived($t.projects.items.slice(0, 2));

	const contacts = [
		{ label: '@nizhgo', href: 'https://t.me/nizhgo' },
		{ label: 'GitHub', href: 'https://github.com/Nizhgo' },
		{ label: 'alexey@nizhgorodov.ru', href: 'mailto:alexey@nizhgorodov.ru' }
	];
</script>

<section class="mx-auto max-w-6xl px-4 pt-6 pb-10 sm:px-6">
	<div
		class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[minmax(150px,auto)]"
	>
		<!-- Identity -->
		<div
			class="tile tile-ticks bento-in flex flex-col justify-between p-6 sm:col-span-2 lg:col-span-4 lg:row-span-2"
		>
			<p class="label">{$t.hero.role}</p>
			<div class="my-4">
				<h1
					class="font-display text-4xl leading-[0.95] font-extrabold tracking-tight text-text-primary sm:text-5xl md:text-6xl"
				>
					{$t.hero.name}
				</h1>
				<p class="mt-4 max-w-xl text-base text-text-secondary sm:text-lg">{$t.hero.headline}</p>
				<p class="mt-3 max-w-xl text-sm leading-relaxed text-text-muted">{$t.hero.bio}</p>
			</div>
			<div class="flex flex-wrap items-center gap-x-5 gap-y-3">
				<a
					href={$t.hero.cta.href}
					class="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-bold text-background transition-opacity hover:opacity-90"
				>
					{$t.hero.cta.label}
					<span aria-hidden="true">↓</span>
				</a>
				<p class="flex items-center gap-2 font-mono text-[11px] text-text-muted">
					<span class="inline-block h-2 w-2 shrink-0 rounded-full bg-accent"></span>
					{$t.hero.availability}
				</p>
			</div>
		</div>

		<!-- Live map / dataviz -->
		<div
			class="tile tile-ticks bento-in relative min-h-[200px] overflow-hidden p-5 sm:col-span-2 lg:col-span-2 lg:row-span-2"
		>
			<MapTile />
			<div class="relative flex h-full flex-col justify-between">
				<p class="label">Real-time · maps · dataviz</p>
				<p class="font-mono text-xs text-text-secondary">{$t.hero.location}</p>
			</div>
		</div>

		<!-- Photos (triptych) -->
		<div
			class="tile tile-ticks bento-in min-h-[320px] p-2 sm:col-span-1 lg:col-span-2 lg:row-span-2"
		>
			<div class="flex h-full min-h-[300px] flex-col gap-2">
				<img
					src="/photo-1.jpg"
					alt={$t.hero.name}
					class="min-h-0 w-full flex-[3] rounded-[0.7rem] object-cover object-top"
				/>
				<div class="flex flex-[2] gap-2">
					<img
						src="/photo-2.jpg"
						alt=""
						class="h-full w-1/2 rounded-[0.7rem] object-cover object-top"
					/>
					<img
						src="/photo-3.jpg"
						alt=""
						class="h-full w-1/2 rounded-[0.7rem] object-cover object-center"
					/>
				</div>
			</div>
		</div>

		<!-- Numbers -->
		<div class="tile tile-ticks bento-in p-5 sm:col-span-1 lg:col-span-4">
			<p class="label">{$t.ui.numbers}</p>
			<div class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
				{#each $t.hero.stats as stat}
					<div>
						<p class="font-display text-3xl font-extrabold text-accent sm:text-4xl">{stat.value}</p>
						<p class="mt-1 text-xs leading-tight text-text-muted">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Stack -->
		<div class="tile tile-ticks bento-in p-5 sm:col-span-2 lg:col-span-4">
			<p class="label">{$t.stack.title}</p>
			<div class="mt-4 space-y-2.5">
				{#each $t.stack.groups as group}
					<div class="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-4">
						<p class="label shrink-0 sm:w-40">{group.label}</p>
						<div class="flex flex-wrap gap-1.5">
							{#each group.items as item}
								<span
									class="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-text-secondary"
									>{item}</span
								>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Featured projects -->
		{#each featured as project}
			<a
				href="#work"
				class="tile tile-hover tile-ticks bento-in group flex flex-col justify-between gap-3 p-5 sm:col-span-1 lg:col-span-3"
			>
				<div class="flex items-start justify-between gap-3">
					<p class="label">{$t.ui.featured}</p>
					<span
						class="font-mono text-text-muted transition-transform group-hover:translate-x-0.5"
						aria-hidden="true">↗</span
					>
				</div>
				<div>
					<h2
						class="font-display text-lg font-bold text-text-primary transition-colors group-hover:text-accent"
					>
						{project.title}
					</h2>
					{#if project.metrics}
						<div class="mt-2 flex flex-wrap gap-1.5">
							{#each project.metrics.slice(0, 2) as metric}
								<span class="rounded bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent"
									>{metric}</span
								>
							{/each}
						</div>
					{/if}
				</div>
			</a>
		{/each}

		<!-- Contact -->
		<div class="tile tile-ticks bento-in flex flex-col justify-between gap-4 p-5 sm:col-span-2 lg:col-span-6">
			<div>
				<p class="label">{$t.contacts.title}</p>
				<p class="mt-2 max-w-xl text-sm text-text-secondary">{$t.contacts.note}</p>
			</div>
			<div class="flex flex-wrap gap-x-6 gap-y-2">
				{#each contacts as link}
					<a
						href={link.href}
						target={link.href.startsWith('mailto') ? undefined : '_blank'}
						rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
						class="group inline-flex items-center gap-1.5 font-mono text-sm text-text-secondary transition-colors hover:text-accent"
					>
						{link.label}
						<span class="text-text-muted transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
