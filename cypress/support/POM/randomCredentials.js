import { faker } from '@faker-js/faker';
const randomCredentials = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    zipCode: faker.location.zipCode(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    avatar: faker.image.avatar(),
    birthDate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    phoneNumber: faker.phone.number()
}

export { randomCredentials }