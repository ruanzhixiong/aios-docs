export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: "博闻智星",
      description: "Aios Docs",
    },
    theme: {
      customizable: true,
      color: "zinc",
      radius: 0.5,
    },
    header: {
      title: "博闻智星",
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: "/logo.png",
        dark: "/logo.png",
      },
      nav: [],
      links: [
        {
          icon: "lucide:github",
          to: "hhttps://github.com/ruanzhixiong/aios-docs",
          target: "_blank",
        },
      ],
    },
    aside: {
      useLevel: true,
      collapse: true,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: "Copyright bobandata © 2024",
      links: [
        {
          icon: "lucide:github",
          to: "hhttps://github.com/ruanzhixiong/aios-docs",
          target: "_blank",
        },
      ],
    },
    toc: {
      enable: true,
      title: "On This Page",
      links: [
        {
          title: "Star on GitHub",
          icon: "lucide:star",
          to: "hhttps://github.com/ruanzhixiong/aios-docs",
          target: "_blank",
        },
        {
          title: "Create Issues",
          icon: "lucide:circle-dot",
          to: "hhttps://github.com/ruanzhixiong/aios-docs/issues",
          target: "_blank",
        },
      ],
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});
