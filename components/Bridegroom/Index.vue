<template>
	<section class="bg-gray-200 text-center dark:bg-slate-800 md:pb-10 lg:pb-6" id="bride">
		<div class="mx-auto max-w-2xl py-12 md:py-24" data-aos="zoom-in" data-aos-duration="750">
			<h2 class="font-body text-5xl text-yellow-800 dark:text-yellow-300/90 md:text-7xl">Hạnh Phúc Trọn Đời</h2>
			<h3 class="mx-auto mt-5 max-w-xs text-sm font-semibold text-slate-600 dark:text-gray-100 md:max-w-full">Chúc cho cô dâu, chú rể trăm năm hạnh phúc, thủy chung trọn vẹn, đi về có nhau, dù sống đến tuổi răng long đầu bạc nhưng xem nhau như những ngày mới gặp nhé. Happy Wedding!</h3>
		</div>
		<div class="mx-auto flex max-w-2xl flex-col items-center justify-evenly gap-y-10 md:flex-row md:gap-y-0 lg:max-w-full">
			<BridegroomProfile name="Đinh Thế Vũ" instagramURL="https://www.facebook.com/thevu0911">
				<template #family>Con trai ông Đinh Xuân Tuấn</template>
				<template #image>
					<img
						class="h-60 w-60 rounded-full border-4 border-yellow-800 object-cover shadow-2xl dark:border-yellow-300/90 lg:h-96 lg:w-96"
						src="/images/vu.jpg"
						alt="Bride Image"
						loading="lazy"
						dataAos="fade-down"
						data-aos-duration="1000"
					/>
				</template>
				<template #social="{ icon }">
					<FontAwesomeIcon :icon="['fab', icon]" size="lg" inverse />
				</template>
			</BridegroomProfile>
			<span class="text-slate:600 font-body text-5xl dark:text-gray-100 md:-mt-52 md:text-7xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">&</span>
			<BridegroomProfile name="Hà Bảo Linh" instagramURL="https://www.facebook.com/baolinh.ha.7">
				<template #family>Con gái ông Hà Khắc Huynh và bà Đinh Thị Ánh Tuyết</template>
				<template #image>
					<img
						class="h-60 w-60 rounded-full border-4 border-yellow-800 object-cover shadow-2xl dark:border-yellow-300/90 lg:h-96 lg:w-96"
						src="/images/linh.jpg"
						alt="Bride Image"
						loading="lazy"
						dataAos="fade-down"
						data-aos-duration="1000"
					/>
				</template>
				<template #social="{ icon }">
					<FontAwesomeIcon :icon="['fab', icon]" size="lg" inverse />
				</template>
			</BridegroomProfile>
		</div>
	</section>
</template>

<script setup lang="ts"></script>
