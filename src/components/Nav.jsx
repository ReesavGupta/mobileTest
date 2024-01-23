import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
function Nav({}) {
  const [menuVisible, setMenuVisible] = useState(null)
  const toggleMenu = () => {
    setMenuVisible((prev) => !prev)
  }
  const [location, setLocation] = useState(null)

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setLocation({ latitude, longitude })
          toast.success(
            `Location accessed: Latitude ${latitude}, Longitude ${longitude}`
          )
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            console.error('User denied the request for Geolocation.')
          } else {
            console.error(`Error getting location: ${error.message}`)
          }
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }
  const camOn = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    })
    if (stream) {
      toast.success('camera accesed')
    }
  }
  const onMic = async () => {
    console.log('mic is acessed')
    const audioStream = await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true,
    })
    if (audioStream) {
      toast.success('mic acessed')
    }
  }
  return (
    <div className="border w-full h-14 bg-slate-300 shadow-sm relative">
      <div
        className="flex flex-col justify-center items-end mt-2 px-5 cursor-pointer"
        onClick={toggleMenu}
      >
        <div className="h-1 w-8 bg-slate-50 m-1 shadow-md rounded-lg"></div>
        <div className="h-1 w-8 bg-slate-50 m-1 shadow-md rounded-lg"></div>
        <div className="h-1 w-8 bg-slate-50 m-1 shadow-md rounded-lg"></div>
      </div>
      {menuVisible && (
        <div className="z-100 mobile-menu md:hidden bg-slate-300 w-full text-slate-600 list-none px-5 py-2">
          <li
            onClick={onMic}
            className="block py-1 hover:bg-slate-200 transition duration-200 hover:text-slate-500 font-semibold"
          >
            Turn On mic
          </li>
          {/* Replace onClick with the startCamera function */}
          <li
            onClick={camOn}
            className="block py-1 hover:bg-slate-200 transition duration-200 hover:text-slate-500 font-semibold cursor-pointer"
          >
            Turn On camera
          </li>
          <li
            onClick={getLocation}
            className="block py-1 hover:bg-slate-200 transition duration-200 hover:text-slate-500 font-semibold"
          >
            Turn On Location
          </li>
        </div>
      )}
    </div>
  )
}

export default Nav
