// Object composition is a principle from a business flow without need to inherit from its parent. this principle is based on where we have defined a behavior (method/function) so when we want to make another flow business wih a few same behavior(method), we can use the existing without inheriting

const canSendMessage = self => ({
    sendMessage: () => console.log('send message:', self.message)
})

const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone', self.from)
})

const personalEnterprise = (from, message, store) => {
    const self = {
        from,
        message,
        store
    }

    const personalEnterpriseBehaviors = self => ({
        createCatalog: () => console.log('Catalog has created: ', self.store)
    })

    return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
}

const pel = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store');
pel.createCatalog();
pel.sendMessage();
pel.isValid();
console.log(pel);
