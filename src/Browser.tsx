import { useState } from "react";
import { ResourcePage } from "./ResourcePage";

export default function Browser () {
  const [url, setUrl] = useState('https://atomicdata.dev/agents/P2zgoc2CEHKgxBCVSpAv8Ep4NKLtHGRUsff9Ws/UTuo=');

  return (
    <div>
      <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
      <ResourcePage url={url} />
    </div>
  )
}
