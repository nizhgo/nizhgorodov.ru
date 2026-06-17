<script lang="ts">
	import { t } from '$lib/i18n';

	const year = new Date().getFullYear();
</script>

<footer class="py-8 text-center">
	<p class="font-mono text-xs text-text-muted">
		{$t.footer.copyright} | {year}
	</p>
</footer>
