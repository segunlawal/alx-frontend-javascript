import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const p1 = new ClassRoom(19);
  const p2 = new ClassRoom(20);
  const p3 = new ClassRoom(34);
  return [p1, p2, p3];
}
