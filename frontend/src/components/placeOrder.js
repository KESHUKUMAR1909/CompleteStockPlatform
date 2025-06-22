// utils/placeOrder.js
export async function placeOrder(name, qty, price, mode) {
  const API=import.meta.env.VITE_REACT_APP_API_URL;
  // 1️⃣ Read the stored user object
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const userId = user._id;

  console.log(userId);
  // 2️⃣ Build payload including userId
  const payload = { name, qty, price, mode, user: userId };
  console.log(payload)
  const res = await fetch(`${API}/newOrder`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || res.statusText);
  }
  return res.text();
}
