<template>
  <section class="mx-auto flex max-w-7xl flex-col items-center justify-center">
    <div class="mb-6 py-12 text-5xl font-semibold">特色功能</div>
    <span class="flex flex-row flex-wrap items-center justify-center gap-6">
      <ClientOnly>
        <CardSpotlight
          v-for="feature in features"
          :key="feature.title"
          class="relative flex h-screen max-h-64 max-w-96 flex-col items-start justify-start overflow-hidden rounded-2xl border border-zinc-200 px-6 py-8 shadow-xl backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/50"
          :gradient-color="isDark ? '#262626' : '#E9E9E9'"
        >
          <SmartIcon
            :name="feature.icon || 'lucide:rocket'"
            class="mb-2"
            :size="22"
          />
          <h3 class="relative z-50 mb-4 text-xl font-bold dark:text-white">
            {{ feature.title }}
          </h3>

          <p
            class="relative z-50 mb-4 text-base font-normal text-zinc-500"
            v-html="feature.description"
          ></p>

          <Meteors />
        </CardSpotlight>
      </ClientOnly>
    </span>
  </section>
</template>

<script lang="ts" setup>
const isDark = computed(() => useColorMode().value == "dark");

const features = [
  {
    title: "多模态对话能力",
    description: `· 支持图片、文本混合输入 <br />
      · 能够识别和理解图片内容 <br />
      · 可以进行图片相关的问答和讨论`,
    icon: "lucide:code-2",
  },
  {
    title: "知识库管理",
    description: `· 支持自定义知识库的创建和管理 <br />
      · 可以导入各种格式的文档（PDF、Word、Markdown等） <br />
      · 基于知识库进行精准的问答和检索`,
    icon: "lucide:sliders",
  },
  {
    title: "函数调用能力",
    description: `· 支持自定义函数的接入和调用 <br />
      · 可以实现复杂的任务自动化 <br />
      · 能够与外部系统和API进行集成`,
    icon: "lucide:wind",
  },
  {
    title: "灵活的插件架构",
    description: `· 支持插件的接入和调用 <br />
      · 可以实现丰富的功能扩展 <br />
      · 能够与外部系统和API进行集成`,
    icon: "lucide:moon",
  },
  {
    title: "高性能和轻量级",
    description: `· 优化了性能，确保快速加载和流畅的用户体验 <br />
      · 组件响应用户偏好，实现美观的暗模式设计`,
    icon: "lucide:zap",
  },
  {
    title: "丰富的插件生态",
    description: `· 支持插件的接入和调用 <br />
      · 可以实现丰富的功能扩展 <br />
      · 能够与外部系统和API进行集成`,
    icon: "lucide:activity",
  },
];
</script>
