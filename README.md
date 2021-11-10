[![Piral Logo](https://github.com/smapiot/piral/raw/develop/docs/assets/logo.png)](https://piral.io)

# [Piral Sample](https://piral.io) &middot; [![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/smapiot/piral/blob/main/LICENSE) [![Gitter Chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/piral-io/community)

> Using a custom *types.d.ts* for type merging

:zap: Provides a new API called `registerMenuItem` which is added to the runtime and merged into the typings.

## Getting Started

The custom typing is available in the file *src/types.d.ts*. This file contains the following part:

```ts
import type {} from 'piral-core';

declare module 'piral-core/lib/types/custom' {
  interface PiletCustomApi extends RegisterMenuItemApi { }
}
```

Here we tell TypeScript to extend the `PiletCustomApi` interface found in the module `'piral-core/lib/types/custom'` with the declared `RegisterMenuItemApi` interface. This extends the API with our definition.

To run the sample first install the dependencies:

```sh
npm install
```

then you can start the debug server:

```sh
npm start
```

## More Information

The [Piral documentation page](https://docs.piral.io/guidelines/tutorials/05-customizing-the-api) contains more details on customizing the Pilet API.

## License

Piral and this sample code is released using the MIT license. For more information see the [license file](./LICENSE).
