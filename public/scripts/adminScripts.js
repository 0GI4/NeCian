const listAdmin = document.querySelector(".listAdmin");
const addAdvertismentForm = document.querySelector(".addAdvertismentForm");

if (listAdmin) {
  listAdmin.addEventListener("click", async (e) => {
    console.log(1);
    if (e.target.classList.contains("updateBtn")) {
      const form = document.querySelector(`.formUpdate${e.target.dataset.id}`);
      form.classList.toggle("hidden");
    }

    if (e.target.classList.contains("saveUpdate")) {
      e.preventDefault();
      const form = e.target.closest("form");
      const { id } = form.dataset;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      console.log(data);
      const response = await fetch(`/api/admin/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.message === "ok") {
        form.classList.add("hidden");
        const priceElement = document.querySelector(`.price${id}`);
        const descriptionElement = document.querySelector(`.description${id}`);

        if (priceElement) priceElement.textContent = `${data.price} ₽`;
        if (descriptionElement)
          descriptionElement.innerHTML = `<em>${data.description}</em>`;
      }
    }
  });
}

if (listAdmin) {
  listAdmin.addEventListener("click", async (e) => {
    if (e.target.classList.contains("del")) {
      try {
        const card = e.target.closest(".card");
        const cardId = card.dataset.id;
        const del = confirm("Вы точно хотите удалить объявление");
        if (del) {
          const response = await fetch(`/api/admin/${cardId}`, {
            method: "DELETE",
          });
          const data = await response.json();
          if (data.message === "Success") {
            card.remove();
          }
        }
      } catch (error) {
        console.error("Ошибка при удалении карточки:", error);
      }
    }
  });
}

if (addAdvertismentForm) {
  addAdvertismentForm.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();
      const { category, price, description, photo } = event.target;
      const formData = new FormData();
      const picturesData = [...photo.files];
      picturesData.forEach((file) => {
        formData.append("url", file);
      });
      formData.append("categoryId", category.value);
      formData.append("price", price.value);
      formData.append("description", description.value);

      const res = await fetch("/api/admin", {
        method: "post",
        body: formData,
      });
      const data = await res.json();
      if (data.message === "success") {
        listAdmin.insertAdjacentHTML("beforeend", data.html);
        event.target.reset();
      } else {
        document.querySelector(".errAdvertisment").innerHTML = data.message;
      }
    } catch (error) {
      console.error("Ошибка при добавлении карточки:", error);
    }
  });
}
