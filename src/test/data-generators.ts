import { faker } from '@faker-js/faker';

type Overrides = Record<string, any>;

export const userGenerator = (overrides?: Overrides) => ({
  id: faker.datatype.uuid(),
  firstName: faker.internet.userName(),
  lastName: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  teamId: faker.datatype.uuid(),
  teamName: faker.company.companyName(),
  role: 'ADMIN',
  bio: faker.lorem.sentence(),
  createdAt: Date.now(),
  ...overrides,
});
