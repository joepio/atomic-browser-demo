import { createContext, useMemo, useState } from "react";
import { ResourcePage } from "./ResourcePage";

export const AppContext = createContext({
  url: 'https://atomicdata.dev/agents/P2zgoc2CEHKgxBCVSpAv8Ep4NKLtHGRUsff9Ws/UTuo=',
  setUrl: (subject: string) => {}
})

export default function Browser () {
  const [url, setUrl] = useState('https://atomicdata.dev/agents/P2zgoc2CEHKgxBCVSpAv8Ep4NKLtHGRUsff9Ws/UTuo=');

  // const contextSubjectHook = useMemo(() => ({ url, setUrl }), [
  //   url
  // ]);

  return (
    <AppContext.Provider value={{url, setUrl}}>
      <div>
        <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
        <ResourcePage url={url} />
      </div>
    </AppContext.Provider>
  )
}
