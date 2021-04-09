const theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#FCFCFC",
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
        color: "#A9DC76",
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
        color: "#77DAE6",
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
        color: "#72CDD8",
      },
    },
    {
      types: ["boolean", "keyword"],
      style: {
        color: "#A89AED",
      },
    },
    {
      types: ["script"],
      style: {
        color: "white",
      },
    },
    {
      types: ["attr-value"],
      style: {
        color: "#F6D063",
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
