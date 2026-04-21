fetch('data/family.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("tree");

    data.forEach(person => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h3>${person.name}</h3>
        <p>Năm sinh: ${person.birth}</p>
      `;
      container.appendChild(div);
    });
  });