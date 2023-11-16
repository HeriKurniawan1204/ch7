import React from 'react'

export const Card = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <h3>Nama : Heri Kurniawan</h3>
        <p>Moto : "lorem"</p>
      </div>
    </div>
  )
}
