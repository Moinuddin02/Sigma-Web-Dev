function api() {
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
            console.log("Whether Data")
            resolve(200)
         }, 3000);
    })
}

async function getwhetherdata()
{
   await api();
   await api();
}