const theme = {
  plain: {
    backgroundColor: "#f5f2f0",
    color: "#34495E",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "#6c6783",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["tag", "operator", "number"],
      style: {
        color: "#F85E84",
      },
    },
    {
      types: ["property", "function"],
      style: {
        color: "#dd4a68",
      },
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#eeebff",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#34495E",
        fontStyle: "italic",
      },
    },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "at-rule",
        "placeholder",
        "variable",
      ],
      style: {
        color: "#690",
      },
    },
    {
      types: ["boolean", "keyword"],
      style: {
        color: "#07a",
      },
    },
    {
      types: ["script"],
      style: {
        color: "#34495E",
      },
    },
    {
      types: ["attr-value"],
      style: {
        color: "#34495E",
      },
    },
    {
      types: ["parameter"],
      style: {
        color: "#F29364",
        fontStyle: "italic",
      },
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through",
      },
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["important"],
      style: {
        color: "#c4b9fe",
      },
    },
  ],
};

export default theme;
