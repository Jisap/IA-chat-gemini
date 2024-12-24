
import { account } from '../../lib/appwrite'

const registerAction = async ({ request }) => {
  const formData = await request.formData();
  console.dir(formData)
  return null
}

export default registerAction