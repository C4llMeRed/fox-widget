let state = {
  hunger: 0.50
};

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.pathname.includes("/feed")) {
    let newHunger = Math.min(1, state.hunger + 0.20);
    state.hunger = Math.round(newHunger * 100) / 100; // arrotonda a 2 decimali
  }

  return new Response(JSON.stringify(state), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}