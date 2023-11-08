
describe('Acessar forms', () => {
    it('Acessando forms', async () => {
        await $('~Forms').click();
        await $('~text-input').setValue('test');

    

    });
});