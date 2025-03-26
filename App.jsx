import React from "react";

export default function HommeATeteDeChoux() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <section style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem" }}>Homme à Tête de Choux</h1>
        <p style={{ maxWidth: "600px", margin: "1rem auto" }}>
          Produits frais, bio ou justes, transformés avec soin en bouillons, sauces et autres préparations essentielles. Une cuisine de saison, prête à sublimer vos plats.
        </p>
      </section>

      <section style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
        <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem" }}>
          <h2>Bouillon umami</h2>
          <p>À base de shiitakés, légumes du jardin, et algues. Parfait pour vos ramen ou risottos.</p>
        </div>
        <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem" }}>
          <h2>Sauce tomate rôtie</h2>
          <p>Tomates anciennes rôties, ail confit et un soupçon de basilic frais. Idéale avec les pâtes ou les légumes.</p>
        </div>
        <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem" }}>
          <h2>Émulsion cébette & huile de livèche</h2>
          <p>Pour napper des légumes vapeur, une viande blanche ou même un œuf mollet.</p>
        </div>
      </section>

      <section style={{ textAlign: "center", marginTop: "3rem" }}>
        <h2>Le Jardin du Chef</h2>
        <p style={{ maxWidth: "600px", margin: "1rem auto" }}>
          Nos produits viennent en grande majorité de notre propre jardin, cultivés en bio-intensif, en respectant les saisons et la biodiversité. Fraîcheur garantie.
        </p>
      </section>

      <section style={{ textAlign: "center", marginTop: "3rem" }}>
        <h2>Newsletter</h2>
        <p>Recevez les nouveautés, recettes et points de collecte près de chez vous.</p>
        <input placeholder="Votre email" style={{ padding: "0.5rem", width: "200px", marginRight: "0.5rem" }}/>
        <button style={{ padding: "0.5rem 1rem" }}>S'inscrire</button>
      </section>

      <section style={{ textAlign: "center", marginTop: "3rem" }}>
        <h2>Où nous trouver</h2>
        <p>Retrouvez-nous chaque samedi sur les marchés de la région, et bientôt en point de retrait.</p>
      </section>
    </main>
  );
}
