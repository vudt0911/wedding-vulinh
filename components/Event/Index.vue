<template>
	<section class="bg-gray-200 text-center dark:bg-slate-800" id="event">
		<div class="py-12 md:py-24">
			<h2 class="font-body text-4xl text-yellow-800 dark:text-yellow-300/90 md:text-7xl" data-aos="zoom-in" data-aos-duration="750">Thông Tin Tiệc Cưới</h2>
			<div class="mx-auto w-2/4 py-4 md:py-8">
				<hr class="border-slate-600 dark:border-gray-100" />
			</div>
			<div class="mx-auto w-3/4 md:w-2/3" data-aos="zoom-in" data-aos-duration="750">
				<h3 class="mt-5 text-sm font-semibold text-slate-600 dark:text-gray-100 md:text-lg">
<!--          Không làm giảm đi sự tôn trọng của chúng tôi, chúng tôi mời {{ recipient }} đến dự <span class="font-bold">Tiệc Cưới</span>  của con trai và con gái chúng tôi, sẽ được tổ chức vào ngày-->
          Không làm giảm đi sự tôn trọng của chúng tôi, chúng tôi mời {{ route.query.name }} đến dự <span class="font-bold">Tiệc Cưới</span>  của con trai và con gái chúng tôi, sẽ được tổ chức vào ngày
        </h3>
			</div>
		</div>
		<div class="mx-auto max-w-xs lg:max-w-4xl">
			<div class="flex flex-col items-center justify-center gap-y-10 pb-14 md:flex-row md:gap-y-0 md:gap-x-10 md:pb-20">
				<EventCard icon="ring" title="Nhà Trai" time="09:00 - Phú Xuyên.Hà Nội" local="Số 4 Trần Phú, Văn Trai Thượng, Phú Xuyên, Hà Nội" mapLocal="https://maps.app.goo.gl/jdTdGV4Ca8m9SPmr6" data-aos="flip-right" data-aos-duration="750" />
				<EventCard icon="wine-glass" title="Nhà Gái" time="09:00 - Phú Xuyên.Hà Nội" local="Số 11A Trần Hưng Đạo, Đồng Tiến, Phú Xuyên, Hà Nội" mapLocal="https://www.google.com/maps/place/C%E1%BA%A7u+%C4%90%E1%BB%93ng+Quan/@20.7946296,105.8400965,20z/data=!4m6!3m5!1s0x3135b45c790300fd:0xf7c155053b94806e!8m2!3d20.7944804!4d105.8384523!16s%2Fg%2F11c6smw5kb?entry=ttu" data-aos="flip-left" data-aos-duration="750" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import type { LocationQueryValue } from 'vue-router';

	const { recipient } = defineProps<{ recipient: string | LocationQueryValue[] }>();

  const route = useRoute()
</script>
