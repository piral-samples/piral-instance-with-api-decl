import 'piral/polyfills';
import { renderInstance, Extend } from 'piral';
import { layout, errors } from './layout';
import { RegisterMenuItemApi } from './types';

// change to your feed URL here (either using feed.piral.io or your own service)
const feedUrl = 'https://feed.piral.io/api/v1/pilet/sample';

function createRegisterMenuItemApi(): Extend<RegisterMenuItemApi> {
  return () => (api, _meta) => ({
    registerMenuItem(route, text, Icon) {
      api.registerMenu(() => <div>Example...<Icon /></div>)
    },
  });
}

renderInstance({
  layout,
  errors,
  extendApi: [createRegisterMenuItemApi()],
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
});
