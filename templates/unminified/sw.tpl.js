importScripts('sww.js');

var version = '$VERSION';
var worker = new self.ServiceWorkerWare();
worker.use(new self.StaticCacher($FILES_TO_LOAD));
worker.use(new self.SimpleOfflineCache());

var extraFile = '$HOOK';
if (extraFile && extraFile !== 'null') {
  importScripts(extraFile);
}

worker.init();
