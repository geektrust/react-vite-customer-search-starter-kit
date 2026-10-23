const CUSTOMERS = [
  { id: 1, name: "Asha", city: "Bangalore" },
  { id: 2, name: "Ravi", city: "Chennai" },
  { id: 3, name: "Arjun", city: "Pune" },
];

export function fetchCustomers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) return reject(new Error("Network error"));
      resolve(CUSTOMERS);
    }, 200 + Math.random() * 1200);
  });
}
