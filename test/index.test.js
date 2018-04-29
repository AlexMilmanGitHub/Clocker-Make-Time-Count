const expect = require('expect');
const clocker = require('../src/index');

describe('Clocker Core', () => {

  it('should exist', () => {
    expect(clocker).toBeTruthy();

  });

  describe('New clocker', () => {
    let instance = null;
    let store = {};

    beforeEach(() => {
      instance = new clocker(store);
    });
    it('should be of type Clocker', () => {

      expect(instance).toBeInstanceOf(clocker);
    });

    it('should have a store attribute set by the constructor',  () =>{

      expect(instance.store).toBeDefined();
    });

    it('#getWorkerInteractor() method should return a WorkerIteractor', () =>{
      expect(typeof instance.getWorkerInteractor).toBe("function");
    });

  });

});
