const expect = require('expect');
const workerInteractor = require('../../../src/lib/worker/worker-interactor');
const jsData = require('js-data');

describe('Worker-Interactor', () => {

  let store = new jsData.Container();
  let workerInt = new workerInteractor(store);

  it('should be of type of workerInteractor', () => {
    expect(workerInt).toBeInstanceOf(workerInteractor);
  });

  it('should have store property', () => {
    expect(workerInt.store).toBeInstanceOf(jsData.Container);
  });
});
