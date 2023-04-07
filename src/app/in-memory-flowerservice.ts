import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let flowers = [
        {
            flower_id: 1,
            flower_name: 'Rose',
            flower_Desc:
              ' Roses have been naturally growing for over 35 million years! However, they were not known to be cultivated until about 5,000 years ago.',
            flower_Price: '10$',
          },
          {
            flower_id: 2,
            flower_name: 'Sunflower',
            flower_Desc:
              'Sunflowers are one of the most popular flower types and are best known for their dazzling yellow color and large size.',
            flower_Price: '12$',
          },
          {
            flower_id: 3,
            flower_name: 'Lavender',
            flower_Desc:
              'Lavender are sweet herb garden favorites that provide soothing fragrances, flavorings, and beauty all together in little floral packages.',
            flower_Price: '13$',
          },
          {
            flower_id: 4,
            flower_name: 'Orchid',
            flower_Desc:
              'Orchids are one of the oldest flowering plants known to man? Scientists speculate that orchids have been around as long as 100 million years.',
            flower_Price: '14$',
          },
          {
            flower_id: 5,
            flower_name: 'Tulip',
            flower_Desc:
              'Like most common flowers, tulips come in a wide variety of colors and shapes, each of which has its own meaning.',
            flower_Price: '15$',
          },
          {
            flower_id: 6,
            flower_name: 'Marigold',
            flower_Desc:
              'Beautifully orange and gold in color, marigolds symbolize a desire for wealth and success.',
            flower_Price: '16$',
          },
          {
            flower_id: 7,
            flower_name: 'Peony',
            flower_Desc:
              'Peonies, a beloved flower that blooms in late spring/early summer, come in a wide variety of colors.',
            flower_Price: '17$',
          },
          {
            flower_id: 8,
            flower_name: 'Dahlia',
            flower_Desc:
              'These attractive blooms come in a wide range of colors and can be easily incorporated into any existing or new garden',
            flower_Price: '18$',
          },
          {
            flower_id: 9,
            flower_name: 'Daffodil',
            flower_Desc:
              'Daffodils go by many names depending on the species and variety — narcissus, jonquils, or paperwhites — but they are all daffodils and they all belong to the genus Narcissus.',
            flower_Price: '19$',
          },
          {
            flower_id: 10,
            flower_name: 'Zinnia ',
            flower_Desc:
              'Colorful, easy-to-grow zinnias are a beginner gardener’s dream. ',
            flower_Price: '20$',
          }
    ];
    return {flowers};
  }
}