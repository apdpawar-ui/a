fetch("/api/data")
  .then(r => r.json())
  .then(d => console.log(d));
