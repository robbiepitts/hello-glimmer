var metaName = '{{MODULE_PREFIX}}/config/environment';
var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
var config = JSON.parse(unescape(rawConfig));

export default config;
