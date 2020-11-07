// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator.js';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it.skip('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it.skip('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid("4083952015263")).toBe(true);
    });

    it.skip('debería retornar true para "79927398713"', () => {
      expect(validator.isValid("79927398713")).toBe(true);
    });
    //prueba extra true
    it.skip('debería retornar true para "49927398716"', () => {
      expect(validator.isValid("49927398716")).toBe(true); 
    });
    //prueba extra false
    it.skip('debería retornar false para "4539148803436467"', () => {
      expect(validator.isValid("4539148803436467")).toBe(false);
    });
    //prueba extra false
    it.skip('debería retornar false para "8273123273520569"', () => {
      expect(validator.isValid("8273123273520569")).toBe(false);
    });
    
    it.skip('debería retornar false para "1234567890"', () => {
      expect(validator.isValid("1234567890")).toBe(false);
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "************5616" para "4556364607935616"', () => {
      expect(validator.maskify).toBe(true);
    });

    it('Debería retornar "1" para "1"', () => {
      expect(validator.maskify).toBe(true);
    });

    it('Debería retornar "******orld" para "helloworld"', () => {
      expect(validator.maskify).toBe(false);
    });
  });
});
