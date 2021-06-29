const Character = () => {
  const view = `
  <div class="Character-inner">
    <article class="Characters-card">
      <img src="image" alt = "name">
      <h2>Name</h2>
    </article>
    <article class ="Characters-card">
      <h3>Epísode:</h3>
      <h3>Status:</h3>
      <h3>Especies:</h3>
      <h3>Origin:</h3>
      <h3>Last location:</h3>
    </article>
  </div>
  `;
  return view;
};

export default Character;
