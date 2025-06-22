export async function placeOrder(name, qty, price, mode) {
  const API = process.env.REACT_APP_API_URL;

  const payload = { name, qty, price, mode }; // ✅ no need for userId
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
