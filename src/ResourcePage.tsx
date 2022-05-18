import { properties, useResource, useString, useTitle } from "@tomic/react";

interface ResourcePageProps{
  url: string,
}

export function ResourcePage ({
  url
}: ResourcePageProps) {
  const resource = useResource(url)
  const title = useTitle(resource)
  const [description] = useString(resource, properties.description)

  return <div>Resource: {url}
  <h1>{title}</h1>
  <p>{description}</p>
  </div>
}
