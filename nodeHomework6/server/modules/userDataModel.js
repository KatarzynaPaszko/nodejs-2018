const argv = require('yargs').argv;

function userDataModel() { 
    const { name, username, id, email, street,
        suite, city, zipcode, lat, lng,
        phone, website, companyName,
        companyCatchPhrase, companyBs
    } = argv;

    return {
        id: id,
        name: name ? name : null,
        username: username ? username : null,
        email: email ? email : null,
        address: {
            street: street ? street : null,
            suite: suite ? suite : null,
            city: city ? city : null,
            zipcode: zipcode ? zipcode : null,
            geo: {
              lat: lat ? lat : null,
              lng: lng ? lng : null
            }
          },
          phone: phone ? phone : null,
          website: website ? website : null,
          company: {
            name: companyName ? companyName : null,
            catchPhrase: companyCatchPhrase ? companyCatchPhrase : null,
            bs: companyBs ? companyBs : null
          }
    }
    return user;
}

module.exports = {
    userDataModel,
}
