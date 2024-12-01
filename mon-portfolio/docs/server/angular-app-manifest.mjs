
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://HellManon.github.io/mon-portfolio"
  }
],
  assets: new Map([
['index.csr.html', {size: 550, hash: 'aa23eb2778cf0db2300387b228bcfac89ba469217332031cb32ab13648981c2a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1063, hash: '04eaeaa213cf2d66c2f3298c1f5559a2044d9953fe3e9f4b627e24559e2bb944', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 20882, hash: '3402ccd55db992540fdffec4b406c79fc1e9a0e12e04d35d5ce2011bbba15d47', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
