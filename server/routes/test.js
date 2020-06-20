router.get('/products/:upc', async (req, res) => {
    const { upc } = req.params;
    try {
      router.get('/products/storage/:upc', async (req, res) => {
        if(mongoose.types.ObjectId.isValid(upc)) {
            try { const product = await Product.findById(upc)
                if(!product) {
                    const {data} = await axios.get(`https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`);
                    const productArray = [];
                    data.items.map((item) => {
                        productArray.push({
                        title: item.title,
                        description: item.description,
                        category: item.category,
                        price: item.lowest_recorded_price,
                        image: item.images[0]
                    })})
                res.send(productArray)
                }
            } catch (e) { res.status(500).send() }
        } else {
            try {
                router.get('/products/:upc', async (req, res) =>{
                    const { data } = await axios.get(`/products/storage/${upc}`)
                    const productArray = [];
                    data.items.map((item) => {
                        productArray.push({
                        title: item.title,
                        description: item.description,
                        category: item.category,
                        price: item.lowest_recorded_price,
                        image: item.images[0]
                    })})
                    res.send(productArray)
                })
            } catch (e) { res.status(500).send() } 
        }
    })}
    finally {
        router.post('/products/:upc', async (req, res) => {
            const product = new Product(req.body)
            console.log(product)
            try{
                await product.save()
                res.status(201).send(product)
            } catch (e) { res.status(400).send(e) }
            })
    }
})