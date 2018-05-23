function verifyEachProperty(expect, clone, propertyType, key) {
    expect(clone).to.have.property(key);
    if (propertyType) {
        expect(clone[key]).to.be.a(propertyType);
    }
    delete clone[key];
}

module.exports = (expect, clone, propertyType, properties) => {
    properties.forEach(verifyEachProperty.bind(null, expect, clone, propertyType));
};
