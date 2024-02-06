const postAPI  = async (path, data)=>{
    console.log(data)
    const url = import.meta.env.VITE_URL_KEY
    const res = await fetch(url+path, {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const response = await res.json() 
    console.log(response)
    return response
}

export {
    postAPI
}