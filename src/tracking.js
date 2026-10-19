
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw177tsPPw7xKjA0MujmJKZrTtce3rHUSlJ-XSsRXAIxmLd5H1gN6UtNMqLFcJ2vk6CqA/exec";

export function sendToGoogleSheets(eventType, details = {}) {
  const tracking = JSON.parse(
    sessionStorage.getItem("landingTracking") || "{}"
  );

  const payload = {
    event_type: eventType,
    ...tracking,
    ...details,
  };

  fetch(SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(payload),
  }).catch((error) => {
    console.error("Google Sheets tracking error:", error);
  });
}
