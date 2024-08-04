import {faker} from '@faker-js/faker';

function removeSpecialCharacters(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '');
}

export default function generateCustomEmail() {
  const randomUsername = removeSpecialCharacters(faker.internet.userName());
  const randomDomain = removeSpecialCharacters(faker.internet.domainName());

  const emailDomain = randomDomain.includes('.') ? randomDomain : `${randomDomain}.com`;

  return `${randomUsername}@${emailDomain}`;
}
