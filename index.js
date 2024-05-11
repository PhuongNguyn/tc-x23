// Cach 1: callback

document.onanimationend(() => {
  console.log("Animation Ended");
  document.onanimationend(() => {
    document.onanimationend(() => {});
  });
});

// Cach 2: Promise

fetch("https://localhost:3000")
  .then((result) => {
    fetch("https://localhost:3000").then(() => {});
  })
  .catch((err) => console.log(err));

// Cach 3: Async/await
const test = async () => {
  try {
    const result = await fetch("https://localhost:3000");

    return result;
  } catch (error) {
    console.log(error);
  }
};

const test2 = async () => {
  try {
    const result = await fetch("https://localhost:3000");

    return result;
  } catch (error) {
    console.log(error);
  }
};

// Promise.all

// Trường hợp hàm dưới phải đợi hàm trên thực thi
// const a = await test();
// const b = await test2();
// const c = a + b;

// Concurrency != Parrallel
// Parrallel (Song Song) => Đa luồng
// Concurrency (Đồng Thời) => Đơn luồng

const caculate = async () => {
  // Concurrency
  const [] = await Promise.all(test(), test2());

  const c = a + b;
};

caculate();
