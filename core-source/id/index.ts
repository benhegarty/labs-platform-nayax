const base64Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$+";
const idRandomPartLength = 6;

// Helper function to convert a number to base-64
function toBase64(num: number, length: number): string {
  let result = "";
  while (num > 0) {
    result = base64Chars[num % 64] + result;
    num = Math.floor(num / 64);
  }
  return result.padStart(length, "0"); // Ensure it meets the required length
}

// Helper function to convert base-64 to a number
function fromBase64(base64Str: string): number {
  let result = 0;
  for (let i = 0; i < base64Str.length; i++) {
    result = result * 64 + base64Chars.indexOf(base64Str[i]);
  }
  return result;
}

// Helper function to generate cryptographically secure random base-64 characters
function generateRandomBase64(length: number): string {
  const randomPart = new Uint8Array(length); // Create an array of random bytes
  crypto.getRandomValues(randomPart); // Fill the array with cryptographically secure random values

  let result = "";
  for (let i = 0; i < length; i++) {
    // Map each random byte to one of the 64 base-64 characters
    result += base64Chars[randomPart[i] % 64];
  }
  return result;
}

// Function to generate the ID
export function generateId(): string {
  const now = new Date();

  // Calculate year since 2020 (1 base-64 character)
  const year = now.getUTCFullYear() - 2020;
  const yearEncoded = toBase64(year % 64, 1);

  // Calculate week of the year (1 base-64 character)
  const firstDayOfYear = new Date(Date.UTC(now.getUTCFullYear(), 0, 1));
  const dayOfYear = Math.floor((now.getTime() - firstDayOfYear.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  const week = Math.ceil(dayOfYear / 7);
  const weekEncoded = toBase64(week, 1);

  // Calculate 36ms interval since the start of the week (4 base-64 characters)
  const startOfWeek = new Date(firstDayOfYear.getTime() + (week - 1) * 7 * 24 * 60 * 60 * 1000);
  const interval = Math.floor((now.getTime() - startOfWeek.getTime()) / 36);
  const intervalEncoded = toBase64(interval, 4);

  // Generate 4 random base-64 characters
  const randomPart = generateRandomBase64(idRandomPartLength);

  // Combine all parts (Time at the start)
  return yearEncoded + weekEncoded + intervalEncoded + randomPart;
}

// Function to decode the ID into a timestamp
export function getIdTimestamp(id: string): Date {
  const yearEncoded = id.slice(0, 1);
  const weekEncoded = id.slice(1, 2);
  const intervalEncoded = id.slice(2, 6);

  const year = fromBase64(yearEncoded) + 2020;
  const week = fromBase64(weekEncoded);
  const interval = fromBase64(intervalEncoded); // This is now the 36ms interval within the week

  // Reconstruct the timestamp from the year, week, and 36ms interval
  const firstDayOfYear = new Date(Date.UTC(year, 0, 1));
  const startOfWeek = new Date(firstDayOfYear.getTime() + (week - 1) * 7 * 24 * 60 * 60 * 1000);
  const timestamp = new Date(startOfWeek.getTime() + interval * 36); // 36ms interval

  return timestamp;
}
