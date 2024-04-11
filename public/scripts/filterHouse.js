const select = document.querySelector(".FilterHouse");
const form = document.querySelector(".FormFilter");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const select = form.querySelector(".FilterHouse");
    const categoryId = select.value;

    try {
      const res = await fetch(`/ads/${categoryId}/category`);
      const advertisments = await res.json();

      if (advertisments && advertisments.length > 0) {
        const advertismentsContainer = document.querySelector(
          ".advertisment-container"
        );
        advertismentsContainer.innerHTML = ""; // Очищаем контейнер объявлений

        advertisments.forEach((ad) => {
          const card = document.createElement("div");
          card.classList.add("card");
          card.setAttribute("data-id", ad.id);
          card.style.width = "18rem";
          card.style.margin = "20px";

          const advertismentCard = `
              <div class = 'viewCard'>
                <h5>${ad.image}</h5>
                <p>${ad.description}</p>
                <p>${ad.price} ₽</p>
              </div>
            `;

          card.innerHTML = advertismentCard;
          advertismentsContainer.appendChild(card);
        });
      } else {
        console.log("Объявления не найдены");
      }
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  });
}

// if (form) {
//   form.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const {select} = e.target;
//     const res = await fetch(`/ads/${select.value}/category`);
//     const data = await res.json();
//     if (data.message === "success") {
//       const container = (document.querySelector(".container").innerHTML =
//         data.category);
//     }
//   });
// }
