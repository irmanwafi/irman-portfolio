<!-- filepath: c:\Users\Irman\Desktop\lit-space\irman-portfolio\src\routes\gallery\+page.svelte -->
<script lang="ts">
	import BasePage from '$lib/components/common/base-page/base-page.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Carousel from '$lib/components/ui/carousel/carousel.svelte';
	import CarouselContent from '$lib/components/ui/carousel/carousel-content.svelte';
	import CarouselItem from '$lib/components/ui/carousel/carousel-item.svelte';
	import CarouselNext from '$lib/components/ui/carousel/carousel-next.svelte';
	import CarouselPrevious from '$lib/components/ui/carousel/carousel-previous.svelte';
	import { Card, CardContent, CardFooter } from '$lib/components/ui/card';
	import FancyCard from '$lib/components/ui/card/fancy-card.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import H2 from '$lib/components/ui/typography/h2.svelte';
	import H3 from '$lib/components/ui/typography/h3.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import GalleryData, { type GalleryItem } from '$lib/data/gallery';
	import { href } from '$lib/utils';
	import { onMount } from 'svelte';
	import { type CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import {
		Dialog,
		DialogClose,
		DialogContent,
		DialogFooter,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';

	let api: CarouselAPI;
	let selectedCategory = '';

	// Filter gallery items based on selected category
	$: filteredItems = selectedCategory
		? GalleryData.items.filter((item) => item.category === selectedCategory)
		: GalleryData.items;

	// Auto-scroll the carousel
	onMount(() => {
		const interval = setInterval(() => {
			if (!api) return;
			api.scrollNext();
		}, 5000);

		return () => clearInterval(interval);
	});

	// Format date for display
	function formatDate(date: Date): string {
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<BasePage title={GalleryData.title}>
	<div class="flex flex-col gap-8">
		<!-- Header with introduction -->
		<div class="flex flex-col gap-4 text-center py-4">
			<H1>My Gallery</H1>
			<Muted class="max-w-3xl mx-auto">
				A collection of moments from my professional journey, drone photography explorations, and project
				sites. Browse through these images to get a glimpse of my experiences and interests.
			</Muted>
		</div>

		<!-- Category filters -->
		<div class="flex flex-row flex-wrap justify-center gap-2 py-2">
			<Button
				variant={selectedCategory === '' ? 'default' : 'outline'}
				on:click={() => (selectedCategory = '')}
			>
				All
			</Button>
			{#each GalleryData.categories as category}
				<Button
					variant={selectedCategory === category.slug ? 'default' : 'outline'}
					on:click={() => (selectedCategory = category.slug)}
				>
					{category.name}
				</Button>
			{/each}
		</div>

		<!-- Category description if filter is active -->
		{#if selectedCategory}
			<div class="px-4 py-2 bg-muted rounded-md text-center mx-auto max-w-3xl">
				<Muted>
					{GalleryData.categories.find((c) => c.slug === selectedCategory)?.description || ''}
				</Muted>
			</div>
		{/if}

		<!-- Featured carousel -->
		<div class="w-full">
			<div class="flex flex-row items-center gap-2 mb-4 px-4">
				<H2>Featured Images</H2>
				<Separator class="flex-1" />
			</div>
			
			<Carousel bind:api class="w-full" opts={{ loop: true }}>
				<CarouselContent>					{#each filteredItems.slice(0, 5) as item}
						<CarouselItem class="md:basis-1/2 lg:basis-1/3">
							<Dialog>
								<DialogTrigger>
									<Card
										class="flex aspect-video flex-col justify-end bg-cover bg-center bg-no-repeat h-[250px] cursor-pointer transition-all hover:opacity-90 border-white/10 hover:border-white/20 dark:border-white/5 dark:hover:border-white/15"
										style={item.type !== 'video' ? `background-image:url("${item.src}")` : ''}
									>
										{#if item.type === 'video'}
											<div class="flex-1 overflow-hidden relative">
												<div class="absolute inset-0 flex items-center justify-center">
													<img 
														src={`https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`} 
														alt={item.label}
														class="w-full h-full object-cover"
													/>
													<div class="absolute inset-0 bg-black/30 flex items-center justify-center">
														<Icon icon="i-carbon-play-circle" className="w-12 h-12 text-white" />
														<!-- Show video format badge -->
														<Badge class="absolute bottom-2 right-2">
															{item.videoFormat === 'vertical' ? 'Shorts' : 
															item.videoFormat === 'horizontal' ? 'Landscape' : 'Standard'}
														</Badge>
													</div>
												</div>
											</div>
										{/if}
										<CardFooter class="rounded-b-md bg-[#00000099] pt-4 text-white backdrop-blur-sm">
											{item.label}
										</CardFooter>
									</Card>
								</DialogTrigger>
								<DialogContent class="flex min-h-[70%] max-h-[90vh] min-w-[70%] flex-col">
									<DialogTitle>{item.label}</DialogTitle>
									{#if item.type === 'video'}
										<div class="flex-1 relative flex items-center justify-center bg-black">
											{#if item.videoFormat === 'vertical'}
												<div style="max-width: 350px; width: 100%; max-height: 100%; margin: 0 auto;">
													<iframe
														style="aspect-ratio: 9/16; width: 100%; height: 100%;"
														src={`https://www.youtube.com/embed/${item.videoId}?autoplay=${item.autoplay ? '1' : '0'}&loop=1&rel=0&modestbranding=1&playsinline=1`}
														title={item.label}
														frameborder="0"
														allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
														allowfullscreen
													></iframe>
												</div>
											{:else if item.videoFormat === 'horizontal'}
												<div style="max-width: 100%; width: 100%; max-height: 100%;">
													<iframe
														style="aspect-ratio: 16/9; width: 100%; height: 100%;"
														src={`https://www.youtube.com/embed/${item.videoId}?autoplay=${item.autoplay ? '1' : '0'}&loop=1&rel=0&modestbranding=1&playsinline=1`}
														title={item.label}
														frameborder="0"
														allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
														allowfullscreen
													></iframe>
												</div>
											{:else}
												<div style="max-width: 100%; width: 100%; max-height: 100%;">
													<iframe
														style="aspect-ratio: 16/9; width: 100%; height: 100%;"
														src={`https://www.youtube.com/embed/${item.videoId}?autoplay=${item.autoplay ? '1' : '0'}&loop=1&rel=0&modestbranding=1&playsinline=1`}
														title={item.label}
														frameborder="0"
														allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
														allowfullscreen
													></iframe>
												</div>
											{/if}
										</div>
									{:else}
										<div
											class="flex-1 bg-cover bg-center bg-no-repeat"
											style={`background-image: url("${item.src}")`}
										></div>
									{/if}
									<Muted class="py-2">{item.description}</Muted>
									<Muted class="text-sm">{formatDate(item.date)}</Muted>
									<DialogFooter>
										<Badge>{GalleryData.categories.find((c) => c.slug === item.category)?.name || ''}</Badge>
										<DialogClose>
											<Button>Close</Button>
										</DialogClose>
									</DialogFooter>
								</DialogContent>
							</Dialog>
						</CarouselItem>
					{/each}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>

		<Separator />

		<!-- All gallery images in grid -->
		<div class="w-full">
			<div class="flex flex-row items-center gap-2 mb-4 px-4">
				<H2>Gallery</H2>
				<Separator class="flex-1" />
			</div>
			
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">				{#each filteredItems as item}
					<Dialog>
						<DialogTrigger>
							<Card
								class="flex aspect-video flex-col justify-end bg-cover bg-center bg-no-repeat h-[200px] cursor-pointer transition-all hover:opacity-90 border-white/10 hover:border-white/20 dark:border-white/5 dark:hover:border-white/15"
								style={item.type !== 'video' ? `background-image:url("${item.src}")` : ''}
							>
								{#if item.type === 'video'}
									<div class="flex-1 overflow-hidden relative">
										<div class="absolute inset-0 flex items-center justify-center">
											<img 
												src={`https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`} 
												alt={item.label}
												class="w-full h-full object-cover"
											/>
											<div class="absolute inset-0 bg-black/30 flex items-center justify-center">
												<Icon icon="i-carbon-play-circle" className="w-12 h-12 text-white" />
												<!-- Show video format badge -->
												<Badge class="absolute bottom-2 right-2">
													{item.videoFormat === 'vertical' ? 'Shorts' : 
													item.videoFormat === 'horizontal' ? 'Landscape' : 'Standard'}
												</Badge>
											</div>
										</div>
									</div>
								{/if}
								<Separator />
								<CardFooter class="rounded-b-md bg-[#00000099] pt-4 text-white backdrop-blur-sm">
									{item.label}
								</CardFooter>
							</Card>
						</DialogTrigger>
						<DialogContent class="flex min-h-[70%] max-h-[90vh] min-w-[70%] flex-col">
							<DialogTitle>{item.label}</DialogTitle>
							{#if item.type === 'video'}
								<div class="flex-1 relative flex items-center justify-center bg-black">
									{#if item.videoFormat === 'vertical'}
										<div style="max-width: 350px; width: 100%; max-height: 100%; margin: 0 auto;">
											<iframe
												style="aspect-ratio: 9/16; width: 100%; height: 100%;"
												src={`https://www.youtube.com/embed/${item.videoId}?autoplay=${item.autoplay ? '1' : '0'}&loop=1&rel=0&modestbranding=1&playsinline=1`}
												title={item.label}
												frameborder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowfullscreen
											></iframe>
										</div>
									{:else if item.videoFormat === 'horizontal'}
										<div style="max-width: 100%; width: 100%; max-height: 100%;">
											<iframe
												style="aspect-ratio: 16/9; width: 100%; height: 100%;"
												src={`https://www.youtube.com/embed/${item.videoId}?autoplay=${item.autoplay ? '1' : '0'}&loop=1&rel=0&modestbranding=1&playsinline=1`}
												title={item.label}
												frameborder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowfullscreen
											></iframe>
										</div>
									{:else}
										<div style="max-width: 100%; width: 100%; max-height: 100%;">
											<iframe
												style="aspect-ratio: 16/9; width: 100%; height: 100%;"
												src={`https://www.youtube.com/embed/${item.videoId}?autoplay=${item.autoplay ? '1' : '0'}&loop=1&rel=0&modestbranding=1&playsinline=1`}
												title={item.label}
												frameborder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowfullscreen
											></iframe>
										</div>
									{/if}
								</div>
							{:else}
								<div
									class="flex-1 bg-cover bg-center bg-no-repeat"
									style={`background-image: url("${item.src}")`}
								></div>
							{/if}
							<Muted class="py-2">{item.description}</Muted>
							<Muted class="text-sm">{formatDate(item.date)}</Muted>
							<DialogFooter>
								<Badge>{GalleryData.categories.find((c) => c.slug === item.category)?.name || ''}</Badge>
								<DialogClose>
									<Button>Close</Button>
								</DialogClose>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				{/each}
			</div>
		</div>
	</div>
</BasePage>
