import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  projectId: '8pcoayy9',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  // token: 'skSZ8t3pu0eV7clLzkS2odccdX6QxuJYAFEY3GQE9Lr3qgf4NxN2BTEJxaqtetfU9UVARhMDWNCN4lhlkp8htohM4PrArOL13AJBftwjn45JxBzwS72ZyZNGbTcaZllFQqB5RgLfqAonHrVYoK4F9DuUM9vt6uvIAALHLXTO8NY9YVYl9AoY',
  token: 'skH3Zh91m03r5E6tXZlwtnxrbH7aJqzcjPKthQ2PczHFuSsOY2BOy0vCcH4t02KYT0YOuoMsOXqOQYZeE7wmvMfNCy9rzmD2RHyvDIzErTnWTwvoem3TVnEB3q9LJH9aeKUMbFj5toerbEV9mUIt1KVCOly28dPybRY4xOv3cBMHkBdktzKd'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
