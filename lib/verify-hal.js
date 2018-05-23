const _ = require('lodash');

function verifyEachLink(expect, link, key) {
    expect(link).to.have.property('href');
    expect(link.href).to.be.a('string');
}

function verifyHal(expect, data) {
    expect(data).to.have.property('_links');
    expect(data._links).to.be.an('object');

    expect(data._links).to.have.property('self');
    expect(data._links.self).to.be.an('object');

    _.forEach(data._links, (link) => verifyEachLink(expect, link));

    if (data._embedded) {
        expect(data._embedded).to.be.an('object');

        _.forEach(data._embedded, (values, key) => {
            expect(values).to.be.an('array');

            values.forEach((value) => verifyHal(expect, value));
        });
    }
}

module.exports = verifyHal;
