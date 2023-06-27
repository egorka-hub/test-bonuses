export default function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  return `${day}.${month.toString().padStart(2, '0')}`;
}
