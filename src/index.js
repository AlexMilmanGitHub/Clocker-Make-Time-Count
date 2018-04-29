const WorkerInteractor = require('./lib/worker/worker-interactor');

class Clocker {
  constructor(store) {
    this.store = store;
  }

  getWorkerInteractor() {
    return new WorkerInteractor();
  }
}

let i = new Clocker({});

let w = i.getWorkerInteractor();

console.log('Interactor: ', w);

module.exports = Clocker;
