<template>
	<section class="bg-gray-200 dark:bg-slate-800" id="wish">
		<div class="mx-auto max-w-xs py-12 md:max-w-2xl md:py-16 lg:max-w-4xl">
			<h2 class="text-center font-serif text-2xl uppercase tracking-widest text-slate-600 dark:text-gray-100 md:text-4xl" data-aos="zoom-in" data-aos-duration="750">Tham dự lễ thành hôn</h2>
			<h3 class="mt-4 mb-10 text-center font-body text-sm italic text-slate-600 dark:text-gray-100 md:text-base" data-aos="zoom-in" data-aos-duration="750">Hãy gửi những lời chúc tốt đẹp nhất tới cô dâu chú rể.</h3>
			<div class="rounded-2xl bg-stone-400 p-8 shadow dark:bg-gray-200">
				<div class="space-y-6">
<!--					<span class="block text-center font-semibold text-gray-200 dark:text-slate-600">{{ totalWish }} Lời chúc</span>-->
					<span class="block text-center font-semibold text-gray-200 dark:text-slate-600">1001 Lời chúc</span>
					<div class="flex items-center justify-center gap-x-10">
						<div class="w-32 rounded bg-gray-200 py-2 px-4 text-center text-slate-600 dark:bg-slate-800 dark:text-gray-100">
<!--							<span class="block text-lg font-bold">{{ totalAttend }}</span>-->
							<span class="block text-lg font-bold">369</span>
							<span class="block text-xs font-semibold">Tham Gia </span>
						</div>
						<div class="w-32 rounded bg-gray-200 py-2 px-4 text-center text-slate-600 dark:bg-slate-800 dark:text-gray-100">
							<span class="block text-lg font-bold">{{ totalMiss }}</span>
							<span class="block text-xs font-semibold">Bận mất rồi !</span>
						</div>
					</div>
					<hr class="h-0.5 bg-slate-800" />
					<div class="mb-3 inline-flex w-full items-center rounded-lg bg-green-400 py-5 px-6 text-base text-gray-100" role="alert" v-show="showAlert">
            Thông điệp của bạn đã được gửi thành công! Cảm ơn bạn đã gửi tin nhắn.
						<button class="ml-auto border-none p-1 text-gray-100 transition-colors focus:outline-none hover:text-white" type="button" aria-label="Close" @click="showAlert = !showAlert">
							<FontAwesomeIcon class="fa-lg h-5 w-5" :icon="['fas', 'xmark']" />
						</button>
					</div>
					<form class="space-y-4" @submit.prevent="sendMessage">
						<div>
							<label class="mb-1 block text-gray-200 dark:text-slate-600" for="name">Tên</label>
							<input
								class="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 placeholder-stone-400 shadow focus:outline-none dark:placeholder-slate-400"
								type="text"
								placeholder="Tên"
								id="name"
								v-model="name"
							/>
						</div>
						<div>
							<label class="mb-1 block text-gray-200 dark:text-slate-600" for="message">Lời chúc</label>
							<textarea
								class="focus:shadow-outline w-full resize-none appearance-none rounded border py-2 px-3 leading-tight text-gray-700 placeholder-stone-400 shadow focus:outline-none dark:placeholder-slate-400"
								placeholder="Hãy viết lời chúc của bạn vào đây"
								rows="6"
								id="message"
								v-model="message"
							></textarea>
						</div>
						<div>
							<label class="mb-1 block text-gray-200 dark:text-slate-600" for="attendance">Xác nhận sự có mặt tại</label>
							<div class="relative inline-block w-full">
								<select
									class="focus:shadow-outline block w-full rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight text-stone-400 shadow focus:outline-none hover:border-gray-500 dark:text-slate-400"
									id="attendance"
									v-model="attendance"
								>
									<option class="text-black" disabled value="">Chọn địa điểm</option>
									<option class="text-black">Nhà Trai</option>
									<option class="text-black">Nhà Gái</option>
								</select>
<!--								<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">-->
<!--									<svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">-->
<!--										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />-->
<!--									</svg>-->
<!--								</div>-->
							</div>
						</div>
						<div class="text-right">
							<button class="btn" type="submit" title="Kirim Pesan" :disabled="isDisabled || btnLoading">
								<Loader class="h-6 w-6" v-if="btnLoading" />
								<span v-else>Gửi lời chúc</span>
							</button>
						</div>
					</form>
					<WishItem :wishes="wishes" :loading="loading" />
				</div>
			</div>
			<div class="mt-12 flex flex-col-reverse items-center justify-center gap-y-10 md:mt-24 md:flex-row md:gap-y-0 md:gap-x-10">
				<img class="h-[10rem] w-[30.338rem] rounded-lg lg:h-80" src="/images/wish.jpg" alt="Bride Image" loading="lazy" data-aos="fade-right" data-aos-duration="1000" />
				<div class="space-y-8 text-center">
					<p class="text-sm text-slate-600 dark:text-gray-200 md:text-base" data-aos="fade-down" data-aos-duration="1000">
            Thật vinh dự và hạnh phúc cho chúng tôi nếu {{ route.query.name }} và người thương sẵn lòng đến tham dự và chúc phúc cho cuộc hôn nhân của chúng tôi.
					</p>
					<p class="text-sm text-slate-600 dark:text-gray-200 md:text-base" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">Vì những lời cầu nguyện và phước lành của bạn, chúng tôi cảm ơn bạn.</p>
					<h3 class="font-body text-3xl text-yellow-800 dark:text-yellow-300/90" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">Vũ & Linh</h3>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import Pusher from 'pusher-js';
	import type { LocationQueryValue } from 'vue-router';

	const { recipient } = defineProps<{ recipient: string | LocationQueryValue[] }>();
  const route = useRoute()
	const loading = ref(false);
	const btnLoading = ref(false);
	const showAlert = ref(false);
	const name = ref(recipient);
	const message = ref('');
	const attendance = ref('');
	const wishes = ref<Wish[]>([]);
	const totalWish = ref(0);
	const totalAttend = ref(0);
	const totalMiss = ref(0);
	const isDisabled = computed(() => !name.value || !message.value || !attendance.value);

	const {
		public: { pusher },
	} = useRuntimeConfig();
	// const pusherInstance = new Pusher(pusher.key, {
	// 	cluster: pusher.cluster,
	// 	forceTLS: true,
	// });

	// onMounted(async () => {
	// 	const channel = pusherInstance.subscribe('wish-channel');
  //
	// 	channel.bind('wish-event', (data: Wish) => {
	// 		wishes.value.push(data);
	// 	});
  //
	// 	await getMessages();
	// });

	const getMessages = async () => {
		loading.value = true;

		try {
			// const { data } = await useFetch<PrismaWish>('/api/wish');
      //
			// if (data.value) {
			// 	wishes.value = data.value.wishes;
			// 	totalWish.value = data.value.totalWish;
			// 	totalAttend.value = data.value.totalAttend;
			// 	totalMiss.value = data.value.totalMiss;
			// }
		} catch (error) {
			console.error(error);
		} finally {
			loading.value = false;
		}
	};

	const sendMessage = async () => {
		btnLoading.value = true;

		try {
			// await useFetch<Wish>('/api/wish', {
			// 	method: 'POST',
			// 	body: {
			// 		name: name.value,
			// 		message: message.value,
			// 		attendance: attendance.value,
			// 	},
			// });

			showAlert.value = true;

			name.value = '';
			message.value = '';
			attendance.value = '';
		} catch (error) {
			console.error(error);
		} finally {
			btnLoading.value = false;

			await getMessages();
		}
	};
</script>
