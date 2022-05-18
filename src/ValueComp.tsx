import {Datatype, JSONValue, valToDate, valToString} from '@tomic/react'
import { useContext } from 'react';
import { AppContext } from './Browser';

interface ValueCompType {
  value: JSONValue;
  dataType: Datatype;
}

export default function ValueComp ({value, dataType}: ValueCompType) {

  const {setUrl} = useContext(AppContext)

  switch (dataType) {
    case Datatype.ATOMIC_URL: {
      const handleNavigation = (e: any) => {
        e.preventDefault()
        setUrl(valToString(value))
      }
      return <p><a onClick={handleNavigation} href={value?.toString()}>{value?.toString()}</a></p>
    }
    case Datatype.TIMESTAMP: {
      let date = valToDate(value)
      return <p>{date.toDateString()}</p>
    }
    case Datatype.STRING: {
      return <p>{valToString(value)}</p>
    }
    default: {
      return <p>{valToString(value)}</p>
    }
  }
}
