// Utility to safely parse a fetch Response that might return HTML
export async function parseJSONSafe(response) {
  const text = await response.text(); // always read raw text (so we can inspect if it's HTML)
  try {
    return JSON.parse(text);
  } catch (err) {
    // Log the raw response so you can inspect server HTML/error page in console
    console.error('Server returned non-JSON response:', text);
    // Re-throw a friendly error for UI, while keeping raw HTML visible in console
    throw new Error('Server returned an unexpected response. Check console for details.');
  }
}