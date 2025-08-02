import React from "react";

const Destination = () => {
  const destinations = [
    {
      place: "1st place",
      name: "Nusa Lembongan Island",
      image:
        "https://www.originaltravel.co.uk/vdm/imgProduits/diapo/IDN/673822.ori.jpg",
    },
    {
      place: "2nd place",
      name: "Pura Ulun Danu Beratan, Bali",
      image:
        "https://www.torntackies.com/wp-content/uploads/2022/06/Diamond-Beach-Nusa-Penida.jpg",
    },
    {
      place: "3rd place",
      name: "Piaynemo, Raja Ampat",
      image:
        "https://static1.squarespace.com/static/57265e5745bf21105b61fddb/57266474d51cd4d116888f9c/5cd81d85068074000139c6e9/1648530332205/832793C2-BF4B-4DCE-8E75-BFBC55009B52.JPG?format=1500w",
    },
    {
      place: "4th place",
      name: "Gunung Kelimutu",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchv8DX-iWT7MVtfaRdxhUPmFxZp4Wy--RG-97torYV3G9aJ8v0RbdJUXLHTIRJoLAPsg&usqp=CAU",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-black via-[#0f172a] to-black text-white py-16 px-4">
      <div className="text-center mb-10">
        <h3 className="text-gray-400 text-sm mb-1">Confused? Try these</h3>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Destination Recommendations
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {destinations.map((dest, idx) => (
          <div
            key={idx}
            className="relative w-full max-w-xs rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
          >
            {/* Image */}
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-120 object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-4 z-10 text-center">
              <h2 className="text-2xl font-semibold text-white">{dest.place}</h2>
              <p className="text-sm text-gray-300">{dest.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
