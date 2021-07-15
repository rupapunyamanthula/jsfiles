var s = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("a")
          },3000)
        })
var s1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("b")
              },1000)
            }) 
var s2 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("c")
                  },2000)
                }) 
Promise.all([s, s1, s2]).then((values) => {
                    for(var i of values){
                        console.log(i)
                    }
                  });
