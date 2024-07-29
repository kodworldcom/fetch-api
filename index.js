const addItemsToHtml = (items) => {
  const container = document.getElementById("items");
  const ulElement = document.createElement("ul");

  items.forEach((item, index) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `${index + 1} - ${item.title}`;
    ulElement.appendChild(liElement);
  });

  container.appendChild(ulElement);
};

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    addItemsToHtml(data);
  });

/* 

const getData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Error");
    }
    const data = await res.json();

    console.log(datas);
  } catch (error) {
    console.log(error);
  }
};

getData();
 */
