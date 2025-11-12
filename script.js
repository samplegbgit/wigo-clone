const rides = [
  { name: "Mini", price: 120, time: "10 mins" },
  { name: "Sedan", price: 180, time: "8 mins" },
  { name: "SUV", price: 250, time: "6 mins" }
];

const rideList = document.querySelector(".ride-list");
const findBtn = document.getElementById("find");

findBtn.addEventListener("click", () => {
  rideList.innerHTML = "<h3>Available Rides</h3>";
  rides.forEach(r => {
    rideList.innerHTML += `
      <div class="card">
        <h4>${r.name}</h4>
        <p>💰 ₹${r.price}</p>
        <p>⏰ ${r.time}</p>
        <button>Book Now</button>
      </div>
    `;
  });
});
