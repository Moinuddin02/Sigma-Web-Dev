function getdata(dataid,getnextdata) {
    
    setTimeout(() => {
        console.log("Data "+dataid)
        if (getnextdata) {
            getnextdata();
        }
    }, 2000);
}

getdata(1,()=>{
    console.log("Getting Data 2...")
    getdata(2,()=>{
        console.log("Getting Data 3...")
        getdata(3,()=>{
            console.log("Getting Data 4...")
            getdata(4,()=>{
                console.log("Getting Data 5...")
                getdata(5,()=>{
                    console.log("Getting Data 6...")
                    getdata(6)
                })
            })
        })
    })
})