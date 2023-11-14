'use server'
import fs from 'fs/promises'

export async function submit(formData: FormData) {
  'use server'
  try {
    const pet = formData.get('pet')
    if (pet == null) {
      return { success: false, message: 'Missing pet name.' }
    }

    await fs.writeFile('./pet.txt', pet.toString(), 'utf-8')
    return {
      success: true,
      message: "That's a cool pet name.",
    }
  } catch (_) {
    // Handler error here
    return {
      success: true,
    }
  }
}
