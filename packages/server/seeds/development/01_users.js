/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('users').del();
  await knex('users').insert([
    {
      id: 1,
      full_name: 'Violetta Juden',
      email: 'vjuden0@youku.com',
      address: '692 Spaight Avenue',
      city: 'Cauday',
      country: 'Peru',
      zipcode: 1239,
    },
    {
      id: 2,
      full_name: 'Thorstein Mangeon',
      email: 'tmangeon1@wp.com',
      address: '201 Dottie Court',
      city: 'Nemby',
      country: 'Paraguay',
      zipcode: 2349,
    },
    {
      id: 3,
      full_name: 'Morgen Allewell',
      email: 'mallewell2@eepurl.com',
      address: '6 Clove Trail',
      city: 'Potosí',
      country: 'Colombia',
      zipcode: 3459,
    },
    {
      id: 4,
      full_name: 'Erick Fitzpatrick',
      email: 'efitzpatrick3@theguardian.com',
      address: '3752 Granby Terrace',
      city: 'Guarapuava',
      country: 'Brazil',
      zipcode: 4569,
    },
    {
      id: 5,
      full_name: 'Courtney Borrett',
      email: 'cborrett4@ucoz.ru',
      address: '2 Bluestem Way',
      city: 'Villa Nueva',
      country: 'Argentina',
      zipcode: 5679,
    },
    {
      id: 6,
      full_name: 'Morley Papps',
      email: 'mpapps5@tiny.cc',
      address: '40580 Old Gate Terrace',
      city: 'Cahuacho',
      country: 'Peru',
      zipcode: 6789,
    },
    {
      id: 7,
      full_name: 'Annmaria Dalman',
      email: 'adalman6@ovh.net',
      address: '492 Fair Oaks Pass',
      city: 'Shanjiao',
      country: 'China',
      zipcode: 7890,
    },
    {
      id: 8,
      full_name: 'Pepita Bodham',
      email: 'pbodham7@mysql.com',
      address: '13448 Sullivan Trail',
      city: 'Pojok',
      country: 'Indonesia',
      zipcode: 8901,
    },
    {
      id: 9,
      full_name: 'Sebastiano Jarmyn',
      email: 'sjarmyn8@bbb.org',
      address: '76 Cottonwood Plaza',
      city: 'Bayog',
      country: 'Philippines',
      zipcode: 9021,
    },
    {
      id: 10,
      full_name: 'Paxon Ranby',
      email: 'pranby9@earthlink.net',
      address: '712 Mccormick Place',
      city: 'Chunoyar',
      country: 'Russia',
      zipcode: 1230,
    },
  ]);
};
