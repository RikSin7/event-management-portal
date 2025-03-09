const FormatDate = ({ dateString }) => {
  if (!dateString) return null;

  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const [month, day, year] = formattedDate.split(" ");
  return `${day.replace(",", "")} ${month} ${year}`;
};

export default FormatDate;
