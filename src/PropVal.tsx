import { JSONValue, useProperty, valToString } from "@tomic/react"
import { useContext } from "react"
import { AppContext } from "./Browser"
import ValueComp from "./ValueComp"

interface PropValTypes {
  propertyUrl: string,
  value: JSONValue
}

export default function PropVal ({
  propertyUrl,
  value
}: PropValTypes) {
  const property = useProperty(propertyUrl)
  const {setUrl} = useContext(AppContext)

  const handleNavigation = (e: any) => {
    e.preventDefault();
    setUrl(valToString(propertyUrl))
  }

  return <div>
    <a onClick={handleNavigation} href={property.subject} title={property.description}>{property.shortname}</a>
    <ValueComp value={value} dataType={property.datatype}/>
  </div>
}
