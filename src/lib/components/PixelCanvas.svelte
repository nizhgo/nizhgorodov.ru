<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		function getColor() {
			const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
			return isDark ? { r: 203, g: 255, b: 0 } : { r: 26, g: 140, b: 0 };
		}

		let COLOR = getColor();

		const themeObserver = new MutationObserver(() => {
			COLOR = getColor();
		});
		themeObserver.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme']
		});
		let pixelSize: number;
		let gridWidth: number;
		let gridHeight: number;
		let pixelGrid: {
			brightness: number;
			targetBrightness: number;
			transitionSpeed: number;
		}[][] = [];
		let animationId: number;
		let w: number;
		let h: number;

		function resize() {
			const dpr = window.devicePixelRatio || 1;
			const rect = canvas.getBoundingClientRect();
			w = rect.width;
			h = rect.height;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
			ctx!.scale(dpr, dpr);

			pixelSize = Math.max(4, Math.floor(Math.min(w, h) / 40));
			gridWidth = Math.ceil(w / pixelSize);
			gridHeight = Math.ceil(h / pixelSize);

			pixelGrid = [];
			for (let y = 0; y < gridHeight; y++) {
				pixelGrid[y] = [];
				for (let x = 0; x < gridWidth; x++) {
					const isActive = Math.random() < 0.2;
					pixelGrid[y][x] = {
						brightness: isActive ? Math.random() * 0.7 + 0.3 : 0,
						targetBrightness: 0,
						transitionSpeed: 0.05 + Math.random() * 0.1
					};
				}
			}
		}

		function update() {
			const time = Date.now() / 1000;
			for (let y = 0; y < gridHeight; y++) {
				for (let x = 0; x < gridWidth; x++) {
					const pixel = pixelGrid[y][x];
					const distFromCenter =
						Math.sqrt(
							Math.pow((x - gridWidth / 2) / gridWidth, 2) +
								Math.pow((y - gridHeight / 2) / gridHeight, 2)
						) * 8;

					const wave1 = 0.5 + 0.5 * Math.sin(x / 5 + time * 1.5);
					const wave2 = 0.5 + 0.5 * Math.cos(y / 4 + time);
					const wave3 = 0.5 + 0.5 * Math.sin(distFromCenter - time * 2);
					const wave4 = 0.5 + 0.5 * Math.sin(x / 3 - y / 3 + time * 0.7);

					const combined = wave1 * 0.3 + wave2 * 0.2 + wave3 * 0.3 + wave4 * 0.2;

					if (Math.random() < 0.002) {
						pixel.targetBrightness = Math.random();
					} else {
						pixel.targetBrightness = combined > 0.6 ? combined : 0;
					}

					if (pixel.brightness < pixel.targetBrightness) {
						pixel.brightness = Math.min(
							pixel.brightness + pixel.transitionSpeed,
							pixel.targetBrightness
						);
					} else {
						pixel.brightness = Math.max(
							pixel.brightness - pixel.transitionSpeed,
							pixel.targetBrightness
						);
					}
				}
			}
		}

		function draw() {
			ctx!.clearRect(0, 0, w, h);
			for (let y = 0; y < gridHeight; y++) {
				for (let x = 0; x < gridWidth; x++) {
					const pixel = pixelGrid[y][x];
					if (pixel.brightness > 0.1) {
						ctx!.fillStyle = `rgba(${COLOR.r},${COLOR.g},${COLOR.b},${pixel.brightness})`;
						ctx!.fillRect(x * pixelSize, y * pixelSize, pixelSize - 1, pixelSize - 1);
					}
				}
			}
		}

		function loop() {
			update();
			draw();
			animationId = requestAnimationFrame(loop);
		}

		resize();
		loop();
		window.addEventListener('resize', resize);

		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener('resize', resize);
			themeObserver.disconnect();
		};
	});
</script>

<canvas
	bind:this={canvas}
	class="mx-auto h-52 w-full max-w-md sm:h-64 md:h-72"
	aria-hidden="true"
></canvas>
