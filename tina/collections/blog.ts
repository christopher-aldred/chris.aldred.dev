import type { Collection } from "tinacms";

export const BlogCollection: Collection = {
  name: "blog",
  label: "Blog",
  path: "content/pages",
  format: "md",
  ui: {
    router: () => "/blog",
  },
  fields: [
    {
      type: "string",
      name: "header",
      label: "Header",
    },
    {
      type: "object",
      list: true,
      name: "posts",
      label: "Posts",
      ui: {
        itemProps: (item) => {
          return {
            label: item?.title,
          };
        },
      },
      fields: [
        { type: "string", name: "title" },
        { type: "string", name: "body", isBody: true },
        { type: "datetime", name: "date" },
      ],
    },
  ],
};
