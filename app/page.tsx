async function fetchClasses() {
  const response = await fetch(`${process.env.RPG_API_PREFIX}/classes`, {
    // @ts-expect-error Dunno how to override RequestInit
    headers: {
      'x-api-key': process.env.LHF_API_KEY,
    },
    next: { tags: [`classes`] },
  })

  return response.json()
}

export default async function Home() {
  const classes = await fetchClasses()
  return <>{JSON.stringify(classes)}</>
}
