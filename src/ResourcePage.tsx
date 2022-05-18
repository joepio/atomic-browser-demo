import { properties, useResource, useStore, useString, useTitle } from "@tomic/react";
import PropVal from "./PropVal";

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

  if (resource.error) {
    return <div>{resource.error.message}</div>
  }

  if (resource.loading) {
    return <div>Loading...</div>
  }

  const propVals = [...resource.getPropVals()]

  return (
    <div>
      <h1>{title}</h1>
      <textarea value={description || ""} onChange={e => setDescription(e.target.value)} />
      {propVals.map(([property, value]) => (
        <PropVal propertyUrl={property} value={value} />
      ))}
    </div>
  )
}
