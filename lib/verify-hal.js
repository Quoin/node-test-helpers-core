const _ = require('lodash');

function verifyEachLink(expect, link, key) {
    expect(link).to.have.property('href');
    expect(link.href).to.be.a('string');
}

function verifyHal(expect, data) {
    expect(data).to.have.property('_links').to.be.an('object');

    expect(data._links).to.have.property('self').to.be.an('object');

    _.forEach(data._links, verifyEachLink.bind(null, expect));

    if (data._embedded) {
        console.log("found _embedded");
        expect(data._embedded).to.be.an('object');

        _.forEach(data._embedded, (value, key) => {
            expect(value).to.be.an('array');

            value.forEach(verifyHal.bind(null, expect));
        });
    }
}

module.exports = verifyHal;
