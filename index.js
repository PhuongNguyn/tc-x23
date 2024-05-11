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

// Trường hợp hàm dưới phải đợi hàm trên thực thi (Ví dụ: Trong khi nấu cơm đợi cơm chín xong hết mới qua nấu đồ ăn xong đợi nấu đồ ăn xong hết mới qua giặt đồ => Các hành động không liên quan đến nhau nhưng phải đợi nhau => Tốn thời gian, hiệu suất kém)
// const a = await test();
// const b = await test2();
// const c = a + b;

// Concurrency != Parrallel
// Parrallel (Song Song) => Đa luồng (Ví dụ: Vừa chơi game, vừa nghe nhạc, vừa coi phim)
// Concurrency (Đồng Thời) => Đơn luồng (Ví dụ: Trong lúc nấu cơm, trong lúc đợi cơm chín thì qua nấu đồ ăn luôn ko đợi cơm chín, trong lúc đợi đồ ăn chín thì qua giặt đồ luôn)

const caculate = async () => {
  // Concurrency
  const [] = await Promise.all(test(), test2());

  const c = a + b;
};

caculate();
