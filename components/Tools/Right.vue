<template>
	<div class="fixed bottom-[6.5rem] right-5 z-40 flex flex-col gap-y-4 md:bottom-5">
		<Listbox v-model="$colorMode.preference">
			<ListboxButton class="floating-btn" :title="`Chế độ: ${currentThemeName} đang hoạt động`">
				<span class="sr-only">Chế độ hoạt động</span>
				<FontAwesomeIcon class="h-5 w-5" :icon="['fas', currentThemeColor]" />
			</ListboxButton>
			<ListboxOptions class="space-y-4">
				<ListboxOption class="floating-btn ui-active:bg-blue-500" :title="theme.name" v-for="theme in themes.filter((theme) => theme.value !== $colorMode.preference)" :key="theme.id" :value="theme.value">
					<FontAwesomeIcon class="h-5 w-5" :icon="['fas', theme.icon]" />
				</ListboxOption>
			</ListboxOptions>
		</Listbox>
		<button :class="`floating-btn ${scroll}`" id="backToTop" type="button" title="Trở lại đầu trang" @click="back">
			<span class="sr-only">Trở lại đầu trang</span>
			<FontAwesomeIcon class="h-5 w-5" :icon="['fas', 'arrow-up']" />
		</button>
	</div>
</template>

<script setup lang="ts">
	import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';

	const scroll = ref('hidden');
	const colorMode = useColorMode();
	const themes: Theme[] = [
		{ id: 1, name: 'Sáng', value: 'system', icon: 'desktop' },
		// { id: 2, name: 'Mode Terang', value: 'light', icon: 'circle-half-stroke' },
		{ id: 3, name: 'Tối', value: 'dark', icon: 'moon' },
	];

	onMounted(() => window.addEventListener('scroll', show));

	onBeforeUnmount(() => window.removeEventListener('scroll', show));

	const currentThemeColor = computed(() => (colorMode.preference === 'system' ? 'desktop' : colorMode.value === 'dark' ? 'moon' : 'circle-half-stroke'));
	const currentThemeName = computed(() => (colorMode.preference === 'system' ? 'Sáng' : colorMode.value === 'dark' ? 'Tối' : 'Terang'));

	const show = () => {
		const button = document.getElementById('backToTop');

		if (!button) return;

		if (window.scrollY > 500) {
			scroll.value = '';
		} else {
			scroll.value = 'hidden';
		}
	};

	const back = () => window.scrollTo({ top: 0, behavior: 'smooth' });
</script>
