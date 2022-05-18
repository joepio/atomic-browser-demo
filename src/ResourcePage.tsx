import { properties, useResource, useStore, useString, useTitle } from "@tomic/react";

interface ResourcePageProps {
  url: string,
}

export function ResourcePage({
  url
}: ResourcePageProps) {
  const resource = useResource(url)
  const title = useTitle(resource)
  const store = useStore()
  const [description, setDescription] = useString(resource, properties.description, {
    commit: false
  })

  if (resource.error) {
    return <div>{resource.error.message}</div>
  }

  if (resource.loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{title}</h1>
      <textarea value={description || ""} onChange={e => setDescription(e.target.value)} />
      <button onClick={() => resource.save(store)}>save</button>
    </div>
  )
}
