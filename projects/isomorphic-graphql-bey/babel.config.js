const isServer = true;

const presets = [
  ["@babel/preset-typescript", {
    isTSX: true,
    allExtensions: true
  }],
  [
    ...(isServer
      ? [
          "@babel/preset-env",
          {
            targets: {
              node: "current",
            },
          },
        ]
      : [
          "@babel/preset-env",
          {
            targets: "> 3%",
            useBuiltIns: "usage",
          },
        ]),
  ],
];

module.exports = { presets };
