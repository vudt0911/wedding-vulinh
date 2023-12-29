<template>
	<div class="w-full rounded-2xl border border-gray-800 bg-white/80 p-8 dark:border-slate-800 md:w-96">
		<div class="flex justify-end">
			<BCALogo class="h-8 w-20 md:w-24" />
		</div>
		<div class="space-y-3 pt-3 md:pt-5">
			<hr class="border-slate-600" />
			<span class="block text-sm font-bold uppercase tracking-[0.3em] md:text-base">Ha Thu Trang</span>
			<span class="block text-sm font-bold uppercase tracking-[0.3em] md:text-base">0399-482-932</span>
			<button id="btnGift" class="flex w-full items-center justify-center rounded bg-blue-800 px-4 py-1.5 text-sm text-white md:text-base" type="button" @click="copy('0399482932')" title="Copy số tài khoản">
				<FontAwesomeIcon :icon="['fas', 'copy']" />
				<span id="btnGiftText" class="flex-1">Copy</span>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	const copy = async (text: string) => {
		const btnGift = document.getElementById('btnGift');

		if (!btnGift) return;

		const btnGiftText = btnGift.lastElementChild;

		if (!btnGiftText) return;

		await navigator.clipboard.writeText(text);

		btnGift.setAttribute('title', 'Đã sao chép thành công');
		btnGiftText.innerHTML = 'Đã sao chép thành công';

		setTimeout(() => {
			btnGift.setAttribute('title', 'Copy');
			btnGiftText.innerHTML = 'Copy';
		}, 3000);
	};
</script>
