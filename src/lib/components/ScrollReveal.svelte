<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		children: import('svelte').Snippet;
		stagger?: boolean;
		class?: string;
	}

	let { children, stagger = false, class: className = '' }: Props = $props();

	let el: HTMLDivElement;

	onMount(() => {
		const targets = stagger ? el.querySelectorAll('.reveal') : [el];

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
						observer.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
		);

		for (const target of targets) {
			observer.observe(target);
		}

		return () => observer.disconnect();
	});
</script>

<div bind:this={el} class="{stagger ? 'stagger' : 'reveal'} {className}">
	{@render children()}
</div>
