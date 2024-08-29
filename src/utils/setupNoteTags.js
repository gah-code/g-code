const setupNoteTags = (notes) => {
  const allTags = {}

  // Check if notes is actually an array
  if (!Array.isArray(notes)) {
    console.error('Invalid input: notes is not an array')
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
        }
      })
    }
  })

  const newNoteTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })

  return newNoteTags
}

export default setupNoteTags

