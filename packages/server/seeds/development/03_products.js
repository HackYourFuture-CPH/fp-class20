/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('Products').del();
  await knex('Products').insert([
    {
      id: 1,
      categoryId: 2,
      name: 'chili pepper powder',
      description:
        'Ancho chile powder is made from sweet and earthy chilies, that are mildly hot. The chilies are native to Puebla, Mexico. Along with chocolate, these chiles form the base of a popular mole. In Mexico, there are three peppers that change names when changing state',
      price: 50.0,
      size: '100',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: './images/spices_sqaure/caraway.jpeg',
      stockAmount: 50,
    },
    {
      id: 2,
      categoryId: 1,
      name: 'saffron powder',
      description:
        'Our Superior Grade Spanish Saffron is grown in La Mancha, Spain. Saffron is expensive because it must be harvested by hand. The threads are the pistils of Crocus sativus, and it takes one acre and 75,000 crocuses to produce one pound of saffron.',
      price: 100.0,
      size: '250',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: './images/spices_sqaure/saffron_powder.jpeg',
      stockAmount: 50,
    },
    {
      id: 3,
      categoryId: 2,
      name: 'caraway seed',
      description:
        'The Dutch love Caraway Seeds in Leyden cheese. Danes love them in akvavit. The English love them in madeira cake, and Germans love them in sauerkraut. And just about every New Yorker loves them in rye bread.',
      price: 50.0,
      size: '100',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: './images/spices_sqaure/caraway_seed.jpeg',
      stockAmount: 50,
    },
    {
      id: 4,
      categoryId: 2,
      name: 'allspice',
      description:
        'Jamaicans take great pride in their world-famous allspice, harvested from 40-foot pimenta trees. So named because it is reminiscent of clove, cinnamon, and nutmeg all at once, allspice berries lend a rich, warm flavor to barbecue sauces, jerk seasoning, gingerbread, and apple pie',
      price: 100.0,
      size: '250',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: './images/spices_sqaure/allspice.jpeg',
      stockAmount: 50,
    },
    {
      id: 5,
      categoryId: 3,
      name: 'black cumin seeds',
      description:
        'Whole cumin seeds are perfect on top of salads or steamed rice. The true flavors come out when toasted first so the essential oils have a chance to bloom. Frying whole cumin seeds is also the first step in many curry recipes and have been used this way for thousands of years. We source our seeds from India and Turkey',
      price: 50.0,
      size: '100',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: './images/spices_sqaure/black_cumin_seeds.jpeg',
      stockAmount: 50,
    },
    {
      id: 6,
      categoryId: 3,
      name: 'Fenugreek powder',
      description:
        "Fenugreek seeds lend a subtle sweet taste to pickles and chutneys. Fenugreek comes to English from the Latin for 'greek hay.' Cooks in Pakistan typically roast them before grinding for a sweeter flavor",
      price: 100.0,
      size: '250',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: './images/spices_sqaure/fenugreek_powder.jpeg',
      stockAmount: 50,
    },
    {
      id: 7,
      categoryId: 2,
      name: 'goji berry',
      description:
        'Goji berry is made from sweet and earthy chilies, that are mildly hot. The chilies are native to Puebla, Mexico. Along with chocolate, these chiles form the base of a popular mole. In Mexico, there are three peppers that change names when changing state',
      price: 50.0,
      size: '100',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: './images/spices_sqaure/goji_berry.jpeg',
      stockAmount: 50,
    },
    {
      id: 8,
      categoryId: 3,
      name: 'star anise',
      description:
        'Gathered at their peak under the Andalusian sun, our Anise Seeds lend a fleeting and floral scent reminiscent of licorice. Use these whole seeds in Spanish tomato sauces, German brines, and sweet Italian sausages.',
      price: 100.0,
      size: '250',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: './images/spices_sqaure/star_anise.jpeg',
      stockAmount: 50,
    },
    {
      id: 9,
      categoryId: 3,
      name: 'dill seed',
      description:
        'The grassy flavor of Dill Seeds accent Russian and Caucasian dishes, is a key ingredient in sauerkraut and Nordic breads, and adds a hint to classic French sauces. Dill seed also stars in pickle recipes around the world.',
      price: 100.0,
      size: '250',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: './images/spices_sqaure/dill_seed.jpeg',
      stockAmount: 50,
    },
    {
      id: 10,
      categoryId: 3,
      name: 'poppy seeds',
      description:
        'Mixed into muffins or ground into paste for strudel, dough and blue poppy seeds have worked together since the days of ancient Greece. Their fresh, nutty flavor is highly distinctive. Store poppy seeds in the fridge for freshness.',
      price: 100.0,
      size: '250',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: './images/spices_sqaure/poppy_seed.jpeg',
      stockAmount: 50,
    },
    {
      id: 11,
      categoryId: 5,
      name: 'dried bay leaves',
      description:
        'The Oracle of Delphi chewed fresh laurel leaves for divine inspiration. When dried, they make for inspired sauces, stews, soups, and curries. We chased the bay leaf around the world and decided the large, fragrant Turkish variety is our favorite.',
      price: 50.0,
      size: '100',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: './images/spices_sqaure/dried_bay_leaves.jpeg',
      stockAmount: 50,
    },
    {
      id: 12,
      categoryId: 4,
      name: 'powdered ginger',
      description:
        'Ginger adds zing to almost anything. Most dried ginger in the U.S. comes from India, but the highest quality Ground Ginger comes from China. It can be difficult to find.',
      price: 100.0,
      size: '250',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: './images/spices_sqaure/ginger_powder.jpeg',
      stockAmount: 50,
    },
    {
      id: 13,
      categoryId: 4,
      name: 'cinnamon sticks',
      description:
        'If there’s one spice you must try from The Spice House, it’s cinnamon. Ground fresh every week, our three distinct varietals add depth and complexity to your baked goods, curries, or morning coffee.',
      price: 100.0,
      size: '250',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: './images/spices_sqaure/cinnamon_sticks.jpeg',
      stockAmount: 50,
    },
  ]);
};
