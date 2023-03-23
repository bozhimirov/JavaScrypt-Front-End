function colorize() {
  const evenRows = Array.from(
    document.querySelectorAll("table tbody tr:nth-child(even)")
  );
  evenRows.forEach((e) => {
    e.style.backgroundColor = "Teal";
  });
}
