function About() {
    return (
        <div className="flex flex-col">
            <h1 className="bg-white text-4xl text-center p-3">Here's a bit about Honda's first ever hybrid car.</h1>
            <body>
                <p className="bg-white px-32 py-10">
                    The 2000 - 2006 Honda Insight covers the first generation of Honda's first hybrid car to hit the market.

                    This vehicle boasts a whopping ~60 MPG and still beats most of the other hybrid cars out there today.

                </p>
                <p className="bg-white px-32 py-2">
                I started this webpage for both future and current Honda Insight enthusiasts alike. Check out the listings or learn more about the car!

                </p>
            </body>
            <div className="bg-gray-100 min-h-screen">
         <div className='flex justify-center'>
          <div className='container relative'>
          <img src="https://static01.nyt.com/images/2019/07/26/business/25wheels3-print/25wheels4-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
               alt="ficus green insight"
               className='w-full'/>
          </div>
        </div>
        </div>

        </div>
            )
}

export default About;