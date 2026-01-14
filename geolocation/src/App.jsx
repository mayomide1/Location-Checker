import React, { useState } from 'react'

const GeolocationByIpAddress = () => {
  const [location, setLocation] = useState(null) // single object

  async function getData() {
    try {
      const response = await fetch(`https://ipapi.co/json/`)
      const data = await response.json()
      setLocation(data)
      console.log(data) // log the fetched data
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div style={{
        width: "500px",   // div needs a fixed width
        margin: "10px auto",
        minWidth: "50px",
        border: "1px solid #ccc",
         padding: "20px",
         borderRadius: "8px"
    }}>
        <h3 style={{textAlign: "center"}}><strong>IP Geolocation Info</strong></h3>
      <div style={{ textAlign: "center" }}><button onClick={getData}
      style={{border:"2px solid black", padding:"5px", borderRadius:"15px", cursor:"pointer", marginTop: "20px"}}
      >Check Geolocation info</button></div>

   {location && (
  <div style={{
    // border: "1px solid #ccc",
    padding: "20px",
    // borderRadius: "10px",
    width: "100%",
    marginTop: "20px",
    // boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
  }}>
    
    <p><strong>IP Address:</strong> {location.ip}</p>
    <p><strong>Country:</strong> {location.country_name} ({location.country})</p>
    <p><strong>City:</strong> {location.city} ({location.region_code})</p>
    <p><strong>Latitude:</strong> {location.latitude}</p>
    <p><strong>Longitude:</strong> {location.longitude}</p>
    <p><strong>Organization:</strong> {location.org}</p>
  </div>
)}

    </div>
  )
}

export default GeolocationByIpAddress
