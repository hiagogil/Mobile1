describe('Acessar forms', () => {
    it('Acessando forms', async () => {
        await $('~Forms').click();
        await $('~text-input').setValue('test');

        expect(await $('~input-text-result').getText()).toBe('test');

        await $('~Dropdown').click();

        await seletor.SelectDrop()

        await $('~button-Active').click()


    });
});
