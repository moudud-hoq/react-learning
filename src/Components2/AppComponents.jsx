import { useEffect, useState } from "react";
import Watch from "../Components2/Watch/Watch.jsx";

function AppComponents() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  // Watch in Array of Objects format data===========================
  // const watches = [
  //   {
  //     "brand": "Apple",
  //     "model": "Apple Watch Series 7",
  //     "display": "Always-On Retina LTPO OLED",
  //     "processor": "Apple S7 SiP",
  //     "storage": "32GB",
  //     "connectivity": ["Bluetooth 5.0", "Wi-Fi 802.11b/g/n 2.4GHz", "GPS/GNSS", "Cellular"],
  //     "waterResistance": "50 meters",
  //     "sensors": ["Heart rate sensor", "Electrocardiogram (ECG)", "Blood oxygen sensor", "Accelerometer", "Gyroscope", "Barometric altimeter", "Ambient light sensor"],
  //     "batteryLife": "Up to 18 hours",
  //     "price": "$399"
  //   },
  //   {
  //     "brand": "Samsung",
  //     "model": "Samsung Galaxy Watch 4",
  //     "display": "Super AMOLED",
  //     "processor": "Samsung Exynos W920",
  //     "storage": "16GB",
  //     "connectivity": ["Bluetooth 5.0", "Wi-Fi 802.11b/g/n 2.4GHz", "GPS/Glonass/Beidou/Galileo"],
  //     "waterResistance": "50 meters",
  //     "sensors": ["Heart rate sensor", "Electrocardiogram (ECG)", "Bioelectrical impedance analysis (BIA)", "Accelerometer", "Gyroscope", "Barometer", "Ambient light sensor"],
  //     "batteryLife": "Up to 40 hours",
  //     "price": "$279"
  //   },
  //   {
  //     "brand": "Fitbit",
  //     "model": "Fitbit Sense",
  //     "display": "AMOLED",
  //     "processor": "N/A",
  //     "storage": "N/A",
  //     "connectivity": ["Bluetooth 5.0", "Wi-Fi 802.11b/g/n 2.4GHz", "GPS"],
  //     "waterResistance": "50 meters",
  //     "sensors": ["Heart rate sensor", "Electrodermal activity (EDA) sensor", "Skin temperature sensor", "Accelerometer", "Gyroscope", "Ambient light sensor"],
  //     "batteryLife": "Up to 6 days",
  //     "price": "$299"
  //   },
  //   {
  //     "brand": "Garmin",
  //     "model": "Garmin Venu 2",
  //     "display": "AMOLED",
  //     "processor": "N/A",
  //     "storage": "N/A",
  //     "connectivity": ["Bluetooth 5.0", "Wi-Fi 802.11b/g/n 2.4GHz", "GPS/GLONASS/Galileo"],
  //     "waterResistance": "50 meters",
  //     "sensors": ["Heart rate sensor", "Pulse Oximeter", "Barometric altimeter", "Compass", "Gyroscope", "Accelerometer", "Thermometer", "Hydration tracking"],
  //     "batteryLife": "Up to 11 days",
  //     "price": "$399"
  //   },
  //   {
  //     "brand": "Huawei",
  //     "model": "Huawei Watch GT 3",
  //     "display": "AMOLED",
  //     "processor": "Kirin A1",
  //     "storage": "16GB",
  //     "connectivity": ["Bluetooth 5.2", "Wi-Fi 802.11b/g/n 2.4GHz", "GPS/GLONASS/Galileo"],
  //     "waterResistance": "50 meters",
  //     "sensors": ["Heart rate sensor", "SpO2 sensor", "Accelerometer", "Gyroscope", "Geomagnetic sensor", "Air pressure sensor", "Temperature sensor"],
  //     "batteryLife": "Up to 14 days",
  //     "price": "$329"
  //   }
  // ]

  return (
    <div>
      <h1>Smart Watch World</h1>
      <hr />
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch} />
      ))}

      {/*====================== Or Template String:================ */}
      {/*       {watches.map((watch) => (
        <Watch key={`${watch.brand}-${watch.model}`} watch={watch} />
      ))} */}
    </div>
  );
}

export default AppComponents;
