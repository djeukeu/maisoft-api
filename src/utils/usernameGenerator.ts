import { generateFromEmail } from 'unique-username-generator';

const usernameGenerator = (email: string) => {
  const username = generateFromEmail(email, 4);
  return username;
};

export default usernameGenerator;
