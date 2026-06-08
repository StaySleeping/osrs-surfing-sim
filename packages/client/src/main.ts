import { OsrsClient } from './OsrsClient.js';
import { injectOsrsAssetUrls } from './ui/injectOsrsAssetUrls.js';

injectOsrsAssetUrls();

OsrsClient.mount().catch((error) => {
  console.error(error);
});
