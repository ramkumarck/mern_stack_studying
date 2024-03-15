

function miqdadAsyncFunction() {
  let p = new Promise(function (resolve) {
    // do some async logic here
    setTimeout(function () {
      resolve("hi there");
    }, 1000);
  });
  return p;
}

async function main() {
    // no callback , no .then syntax
    let value = await miqdadAsyncFunction();
    console.log('hi there1');
    console.log(value);
    }


main();