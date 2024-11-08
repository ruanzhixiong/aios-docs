<template>
  <section
    class="relative mx-auto flex min-h-[52rem] max-w-[800px] flex-col items-center justify-center gap-2 py-8 max-sm:min-h-[28rem] md:py-12 md:pb-8 lg:py-24 lg:pb-20"
  >
    <ParticlesBg
      class="fixed inset-0 z-[-3]"
      :quantity="250"
      :ease="100"
      :color="isDark ? '#FFF' : '#000'"
      :staticity="10"
      refresh
    />
    <span
      class="fixed top-0 z-[-1] h-screen w-full bg-white opacity-40 dark:bg-black dark:opacity-50"
    ></span>
    <NuxtLink
      to="/getting-started/installation"
      target=""
      class="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium hover:cursor-pointer"
    >
      <span class="text-md">🎉</span>
      <UiSeparator
        class="mx-2 h-4 dark:bg-gray-600"
        orientation="vertical"
      />
      <span class="underline-offset-4 hover:underline">发布 v0.0.1 版本</span>
      <Icon
        name="lucide:arrow-right"
        class="ml-1 size-4"
      />
    </NuxtLink>
    <h1
      class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]"
    >
      为你量身打造
      <TextHighlight
        class="rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-1"
        text-end-color="hsl(var(--accent))"
      >
        <FlipWords
          :words="['强大', '智能']"
          :duration="3000"
        />
      </TextHighlight>
      <br />超级智能体.
    </h1>

    <span class="mt-4 text-center text-lg text-gray-600 sm:text-xl dark:text-gray-200">
      我们将AI能力汇聚一处：根据个性化需求灵活定制智能助手功能 <br />
      解决问题，提升生产, 探索未来工作模式.
    </span>

    <div class="mt-4 flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
      <NuxtLink to="/getting-started/introduction">
        <UiButton> 快速开始 </UiButton>
      </NuxtLink>
      <NuxtLink
        to="https://ai.bobandata.com/webChat/chat/#/"
        target="_blank"
      >
        <UiButton variant="outline">
          <SmartIcon
            name="lucide:rocket"
            class="mr-1"
          />
          访问应用
        </UiButton>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const isDark = computed(() => useColorMode().value == "dark");
</script>
