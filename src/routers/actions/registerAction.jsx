
import { redirect } from 'react-router-dom';
import { account } from '../../lib/appwrite'
import generateID from '../../utils/generateID';

const registerAction = async ({ request }) => {

  const formData = await request.formData();

  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  

  if (!name || !email || !password) {
    return {
      error: true,
      message: 'Todos los campos son obligatorios.',
    };
  }
  
  try {
    await account.create(
      generateID(),
      email,
      password,
      name,
    )
  } catch (error) {
    return {
      message: error.message,
    }
  }

  try {
    await account.createEmailPasswordSession(
      email,
      password,
    )
  } catch (error) {
    console.log(`Error creating email session: ${error.message}`);
    return redirect("/login")
  }


  return redirect("/")
}

export default registerAction