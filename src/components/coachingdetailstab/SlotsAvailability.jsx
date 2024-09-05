import React from "react";

const SlotsAvailability = ({ numberOfSlot = 60, bookedslot = 1 }) => {
  const generateslot = (count) => {
    return Array.from({ length: count }, (_, index) => (index + 1).toString());
  };

  const slotToShow = generateslot(numberOfSlot);

  const availableslot = slotToShow.map((seat, index) => ({
    seat,
    isBooked: index < bookedslot, 
  }));

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-left">Slot Availability</h2>
      <div className="flex flex-col items-left">
        {availableslot.map(({ seat, isBooked }) => {
          const seatClass = isBooked
            ? "bg-secondary text-white"
            : "bg-gray-300 text-white";
                return (
                  <div
                    key={seat}
                    className={`w-12 h-12 mx-1 flex items-center justify-center rounded mb-2 ${seatClass} text-xs font-medium`}
                    title={isBooked ? "Booked" : "Available"}
                  >
                    <span className="text-lg font-bold">{seat}</span>
                  </div>
                );
              })}
            </div>
      </div>
  );
};

export default SlotsAvailability;
