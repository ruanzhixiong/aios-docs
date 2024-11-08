<template>
  <div class="flex flex-col overflow-hidden">
    <ContainerScroll>
      <template #title>
        <h1 className="text-4xl font-semibold text-black dark:text-white">
          探索更多可能性 <br />
          <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none"> 滚动动画 </span>
        </h1>
      </template>
      <template #card>
        <NuxtImg
          src="screenshot.png"
          class="mx-auto h-full rounded-2xl object-cover object-left-top"
          alt="hero"
          height="720"
          width="1400"
        >
        </NuxtImg>
      </template>
    </ContainerScroll>
  </div>
</template>
