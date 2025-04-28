const chartBetween = (link) => {
  let doc = document.body;

  fetch(link)
    .then((response) => {
      response.text().then((text) => {
        let block = document.createElement("div");

        block.innerHTML = text;

        doc.append(block);

        let element = document.querySelectorAll("[data-value]");

        let arrayValue = [];
        console.log(element);

        for (let i = 0; i < element.length; i++) {
          arrayValue.push(Number(element[i].title));
        }

        console.log(arrayValue);
      });
    })
    .catch((e) => console.log(e));
};

chartBetween(
  "https://yastatic.net/s3/school/files/18e50d01-1671-40c5-b730-552c952aced1/upload.html"
);
