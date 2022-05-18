import { properties, useResource, useString, useTitle } from "@tomic/react";

interface ResourcePageProps {
  url: string,
}

export function ResourcePage({
  url
}: ResourcePageProps) {
  const resource = useResource(url)
  const title = useTitle(resource)
  const [description, setDescription] = useString(resource, properties.description, {
    commit: true
  })

  return <div>Resource: {url}
    <h1>{title}</h1>
    <textarea value={description || ""} onChange={e => setDescription(e.target.value)} />
  </div>
}
