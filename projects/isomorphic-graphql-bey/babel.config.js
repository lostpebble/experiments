const isServer = true;

let environmentPresets

if (isServer) {
  environmentPresets = [
    "@babel/preset-env",
    {
      targets: {
        node: "current",
      },
    },
  ];
} else {
  environmentPresets = [
    "@babel/preset-env",
    {
      targets: "> 3%",
      useBuiltIns: "usage",
    },
  ];
}

const presets = [
  [
    "@babel/preset-typescript",
    {
      isTSX: true,
      allExtensions: true,
    },
  ],
    environmentPresets
  // [
    // ...(isServer
    //   ? [
    //       "@babel/preset-env",
    //       {
    //         targets: {
    //           node: "current",
    //         },
    //       },
    //     ]
    //   : [
    //       "@babel/preset-env",
    //       {
    //         targets: "> 3%",
    //         useBuiltIns: "usage",
    //       },
    //     ]),
  // ],
];

module.exports = { presets };
