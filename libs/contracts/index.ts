export function isActiveContract(c) {
  if (c.endDateTime) {
    const endDateTime = new Date(c.endDateTime);
    if (endDateTime < new Date()) return false;
  }
  if (c.pendingDate) {
    const pengingDateTime = new Date(c.pendingDate);
    if (pengingDateTime > new Date()) return false;
  }
  if (c.expiryDateTime) {
    const expiryDateTime = new Date(c.expiryDateTime);
    if (expiryDateTime < new Date()) return false;
  }
  if (c.cancelledDateTime) {
    const cancelledDateTime = new Date(c.cancelledDateTime);
    if (cancelledDateTime < new Date()) return false;
  }
  if (!c.startDateTime && (c.pendingDate || c.isPending)) return false;
  if (c.startDateTime) {
    const startDateTime = new Date(c.startDateTime);
    if (startDateTime > new Date()) return false;
  }
  return true;
}