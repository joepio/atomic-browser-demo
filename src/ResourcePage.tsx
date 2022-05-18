import { useResource, useTitle } from "@tomic/react";

interface ResourcePageProps{
  url: string,
}

export function ResourcePage ({
  url
}: ResourcePageProps) {
  const resource = useResource(url)
  const title = useTitle(resource)

  return <div>Resource: {url}
  <h1>{title}</h1>
  </div>
}
