<template>
	<section class="bg-gray-200 text-center dark:bg-slate-800" id="event">
		<div class="py-12 md:py-24">
			<h2 class="font-body text-4xl text-yellow-800 dark:text-yellow-300/90 md:text-7xl" data-aos="zoom-in" data-aos-duration="750">Thông Tin Tiệc Cưới</h2>
			<div class="mx-auto w-2/4 py-4 md:py-8">
				<hr class="border-slate-600 dark:border-gray-100" />
			</div>
			<div class="mx-auto w-3/4 md:w-2/3" data-aos="zoom-in" data-aos-duration="750">
				<h3 class="mt-5 text-sm font-semibold text-slate-600 dark:text-gray-100 md:text-lg">
          Không làm giảm đi sự tôn trọng của chúng tôi, chúng tôi mời {{ recipient }} đến dự <span class="font-bold">Tiệc Cưới</span>  của con trai và con gái chúng tôi, theo ý Chúa, sẽ được tổ chức vào ngày
        </h3>
			</div>
		</div>
		<div class="mx-auto max-w-xs lg:max-w-4xl">
			<div class="flex flex-col items-center justify-center gap-y-10 pb-14 md:flex-row md:gap-y-0 md:gap-x-10 md:pb-20">
				<EventCard icon="ring" title="Nhà Trai" time="18:00 - Cầu Giấy.Hà Nội" local="Trung tâm tiệc cưới XXX, Cầu Giấy, Hà Nội" mapLocal="https://www.google.com/maps/place/C%C6%A1+Quan+C%E1%BA%A3nh+S%C3%A1t+%C4%90i%E1%BB%81u+Tra+(C01)+B%E1%BB%99+C%C3%B4ng+An/@21.0482609,105.7765061,17z/data=!3m1!4b1!4m6!3m5!1s0x3135aacbd669e44d:0x38e5c709a527e69c!8m2!3d21.0482559!4d105.779081!16s%2Fg%2F1yg578029?entry=ttu" data-aos="flip-right" data-aos-duration="750" />
				<EventCard icon="wine-glass" title="Nhà Gái" time="11:00 - Phú Xuyên.Hà Nội" local="Số 1 Trần Hưng Đạo, Đồng Tiến, Phú Xuyên, Hà Nội" mapLocal="https://www.google.com/maps/place/C%E1%BA%A7u+%C4%90%E1%BB%93ng+Quan/@20.7946296,105.8400965,20z/data=!4m6!3m5!1s0x3135b45c790300fd:0xf7c155053b94806e!8m2!3d20.7944804!4d105.8384523!16s%2Fg%2F11c6smw5kb?entry=ttu" data-aos="flip-left" data-aos-duration="750" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import type { LocationQueryValue } from 'vue-router';

	const { recipient } = defineProps<{ recipient: string | LocationQueryValue[] }>();
</script>
