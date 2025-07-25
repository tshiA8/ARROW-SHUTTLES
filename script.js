document.getElementById('fareForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const distance = parseFloat(e.target.distance.value);
  const fare = distance * 8;
  const pickup = e.target.pickup.value;
  const dropoff = e.target.dropoff.value;
  const date = e.target.date.value;
  const pax = e.target.passengers.value;

  const resultDiv = document.getElementById('fareResult');
  resultDiv.innerHTML = `
    Distance: <strong>${distance} km</strong><br>
    Price: <strong>R${fare.toFixed(2)}</strong>
  `;

  const msg = `Hi, I'd like to book a shuttle:\nFrom: ${pickup}\nTo: ${dropoff}\nDate: ${date}\nPassengers: ${pax}\nDistance: ${distance}km\nFare: R${fare.toFixed(2)}`;
  const whatsappUrl = `https://wa.me/27679987029?text=${encodeURIComponent(msg)}`;

  window.open(whatsappUrl, '_blank');
});
