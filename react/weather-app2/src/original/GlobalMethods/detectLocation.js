export default () => new Promise((resolve, reject)=>{

    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
        return resolve({
            lat: latitude,
            lng: longitude
        })
      }, err=>{
          console.warn(`ERROR(${err.code}): ${err.message}`);
      }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      });


})