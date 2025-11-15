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
rideList.addEventListener("click", (e) => {
  if (e.target.textContent === "Book Now") {
    alert("✅ Ride booked successfully!");
  }
});
const filterSelect = document.getElementById("filter");

filterSelect.addEventListener("change", () => {
  const val = filterSelect.value;
  const filtered = val === "all" ? rides : rides.filter(r => r.name === val);
  rideList.innerHTML = "<h3>Available Rides</h3>";
  filtered.forEach(r => {
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
const darkBtn = document.createElement("button");
darkBtn.textContent = "🌙 Dark Mode";
darkBtn.style.position = "fixed";
darkBtn.style.bottom = "20px";
darkBtn.style.right = "20px";
document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
