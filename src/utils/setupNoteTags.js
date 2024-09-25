const setupNoteTags = (notes) => {
  const allTags = {}

  // Check if notes is actually an array
  if (!Array.isArray(notes)) {
    console.error('Invalid input: notes is not an array')
    return []
  }

  // Return early if notes array is empty
  if (notes.length === 0) {
    console.warn('No notes provided')
    return []
  }

  notes.forEach((note) => {
    // Ensure each note has a content object and a tags array
    if (note && note.content && Array.isArray(note.content.tags)) {
      note.content.tags.forEach((tag) => {
        if (tag) {
          // Ensure tag is not undefined or null
          if (allTags[tag]) {
            allTags[tag] += 1
          } else {
            allTags[tag] = 1
          }
        } else {
          console.warn('Invalid tag encountered:', tag)
        }
      })
    } else {
      console.warn('Note missing content or tags:', note)
    }
  })

  // Sort tags alphabetically (case-insensitive)
  const newNoteTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.toLowerCase().localeCompare(secondTag.toLowerCase())
  })

  return newNoteTags
}

export default setupNoteTags

