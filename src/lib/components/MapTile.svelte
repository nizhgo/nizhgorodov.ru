<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	// fixed "cities" in normalized space — spread like a world map
	const PINS = [
		[0.12, 0.46],
		[0.27, 0.3],
		[0.43, 0.6],
		[0.55, 0.36],
		[0.68, 0.56],
		[0.8, 0.32],
		[0.9, 0.52],
		[0.36, 0.74]
	];
	const ARCS = [
		[1, 3],
		[3, 5],
		[0, 2],
		[2, 4],
		[4, 6],
		[2, 7],
		[3, 4]
	];

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		let w = 0;
		let h = 0;
		let rgb: [number, number, number] = [203, 255, 0];
		let raf = 0;
		let running = false;
		let t = 0;

		const readAccent = () => {
			const v = getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim();
			const m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(v);
			if (m) rgb = [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
		};

		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			w = rect.width;
			h = rect.height;
			if (w === 0 || h === 0) return;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.round(w * dpr);
			canvas.height = Math.round(h * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};

		const px = (i: number) => [PINS[i][0] * w, PINS[i][1] * h] as const;

		const bezier = (ax: number, ay: number, bx: number, by: number, cx: number, cy: number, tt: number) => {
			const u = 1 - tt;
			return [
				u * u * ax + 2 * u * tt * cx + tt * tt * bx,
				u * u * ay + 2 * u * tt * cy + tt * tt * by
			] as const;
		};

		const draw = () => {
			if (w === 0 || h === 0) return;
			const [r, g, b] = rgb;
			ctx.clearRect(0, 0, w, h);

			// graticule — faint map grid
			ctx.strokeStyle = `rgba(${r},${g},${b},0.07)`;
			ctx.lineWidth = 1;
			for (let i = 1; i <= 3; i++) {
				const y = (h * i) / 4;
				ctx.beginPath();
				ctx.moveTo(0, y);
				ctx.quadraticCurveTo(w / 2, y - 8, w, y);
				ctx.stroke();
			}
			for (let i = 1; i <= 4; i++) {
				const x = (w * i) / 5;
				ctx.beginPath();
				ctx.moveTo(x, 0);
				ctx.lineTo(x, h);
				ctx.stroke();
			}

			// arcs + travelling pulses
			for (let k = 0; k < ARCS.length; k++) {
				const [ax, ay] = px(ARCS[k][0]);
				const [bx, by] = px(ARCS[k][1]);
				const mx = (ax + bx) / 2;
				const my = (ay + by) / 2;
				const cx = mx;
				const cy = my - Math.hypot(bx - ax, by - ay) * 0.32;

				ctx.strokeStyle = `rgba(${r},${g},${b},0.16)`;
				ctx.lineWidth = 1;
				ctx.beginPath();
				ctx.moveTo(ax, ay);
				ctx.quadraticCurveTo(cx, cy, bx, by);
				ctx.stroke();

				if (!reduce) {
					const tt = (t * 0.0009 + k / ARCS.length) % 1;
					const [dx, dy] = bezier(ax, ay, bx, by, cx, cy, tt);
					const fade = Math.sin(tt * Math.PI);
					ctx.fillStyle = `rgba(${r},${g},${b},${0.9 * fade})`;
					ctx.beginPath();
					ctx.arc(dx, dy, 2, 0, Math.PI * 2);
					ctx.fill();
				}
			}

			// pins
			for (let i = 0; i < PINS.length; i++) {
				const [x, y] = px(i);
				const pulse = reduce ? 0.6 : 0.5 + 0.5 * Math.sin(t * 0.002 + i);
				ctx.fillStyle = `rgba(${r},${g},${b},${0.08 + 0.08 * pulse})`;
				ctx.beginPath();
				ctx.arc(x, y, 6 + 4 * pulse, 0, Math.PI * 2);
				ctx.fill();
				ctx.fillStyle = `rgba(${r},${g},${b},0.95)`;
				ctx.beginPath();
				ctx.arc(x, y, 2.2, 0, Math.PI * 2);
				ctx.fill();
			}
		};

		const step = (now: number) => {
			t = now;
			draw();
			raf = requestAnimationFrame(step);
		};

		const start = () => {
			if (running || reduce) return;
			running = true;
			raf = requestAnimationFrame(step);
		};
		const stop = () => {
			running = false;
			cancelAnimationFrame(raf);
		};

		readAccent();
		resize();
		draw();
		start();

		const ro = new ResizeObserver(() => {
			resize();
			draw();
		});
		ro.observe(canvas);
		const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), {
			threshold: 0.01
		});
		io.observe(canvas);
		const mo = new MutationObserver(() => {
			readAccent();
			draw();
		});
		mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

		return () => {
			stop();
			ro.disconnect();
			io.disconnect();
			mo.disconnect();
		};
	});
</script>

<canvas bind:this={canvas} class="absolute inset-0 h-full w-full" aria-hidden="true"></canvas>
