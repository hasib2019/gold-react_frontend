import React from 'react'

const index = () => {
  return (
    <>
    <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <img src="./banner.png" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

      <div class="min-h-[500px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <img src="./cg.png" alt="Logo Image"/>
      </div>
    </div>
    <div className="about" id="about">
      <div className="firstPara">
      <h5><b class="text-3xl">WHO WE ARE?</b><br/>CRYSTAL GOLD AND JEWELRY TRADING</h5>
      <p>Crystal Gold & JEWELRY Trading established in 2022, being located at the Dubai Gold Souq, Deira, Dubai, the heart of gold and bullion trading business for the Middle East and as well as African and Asian markets, gives us the competitive edge and to showcase our expertise in the gold industry. Crystal Gold and Jewelery LLC has positioned itself as the best buyer of scrap gold and a one of the leading name in the gold bullion trading in Dubai. The journey so far has been amazing with lot of customer base , being one of the bullion trader and scrap gold buyer in UAE.</p>
      <p>Crystal Gold & JEWELRY Trading was able to reach so many milestones Crystal Gold & JEWELRY Trading having tremendous experience in Gold bullion trading, gold scrap dealing, Gold wholesale trading, buying old ornaments, importing and exporting of gold. Crystal Gold & Jewelery Trading is also specialized in refining, smelting as well as assaying of gold with utmost precision and professionalism.</p>
      <p>We offer a full range of gold bars, TT Bars, PAMP Bars, Gold Coins and specialized in 24 Carat gold ornaments.</p>
        <hr />
        <p>-- Thank you for having with us.</p>
      </div>
    </div>

    <div id="product" className="products">
    <div class="container mx-auto py-8">
        <div class="text-center mb-8">
            <h1 class="text-3xl font-bold">OUR PRODUCTS</h1>
            <p class="text-lg mt-2">CRYSTAL GOLD AND JEWELRY TRADING</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div class="flex flex-col items-center text-center p-6 rounded-lg border border-amber-300">
                <img src="./product-img1.png" alt="Gold Bars" class="w-32 h-32 mb-4" />
                <h2 class="text-xs text-amber-500 font-semibold mb-2">GOLD BARS</h2>
                <p class="text-gray-600 text-sm">1 Ounce Gold Bars, Gram Gold Bars, 5 & 10 Ounce Gold Bars, Kilogram Gold Bar</p>
            </div>
            <div class="flex flex-col items-center text-center p-6 rounded-lg border border-amber-300">
                <img src="./product-img2.png" alt="TT Bars" class="w-32 h-32 mb-4" />
                <h2 class="text-xs text-amber-500 font-semibold mb-2">TT BARS</h2>
                <p class="text-gray-600 text-sm">1 Ounce Gold Bars, Gram Gold Bars, 5 & 10 Ounce Gold Bars, Kilogram Gold Bar</p>
            </div>
            <div class="flex flex-col items-center text-center p-6 rounded-lg border border-amber-300">
                <img src="./product-img3.png" alt="Kilo Bar" class="w-32 h-32 mb-4" />
                <h2 class="text-xs text-amber-500 font-semibold mb-2">KILO BAR</h2>
                <p class="text-gray-600 text-sm">1 Ounce Gold Bars, Gram Gold Bars, 5 & 10 Ounce Gold Bars, Kilogram Gold Bar</p>
            </div>
            <div class="flex flex-col items-center text-center p-6 rounded-lg border border-amber-300">
                <img src="./product-img4.png" alt="Scrap Gold" class="w-32 h-32 mb-4" />
                <h2 class="text-xs text-amber-500 font-semibold mb-2">SCRAP GOLD</h2>
                <p class="text-gray-600 text-sm">1 Ounce Gold Bars, Gram Gold Bars, 5 & 10 Ounce Gold Bars, Kilogram Gold Bar</p>
            </div>
            <div class="flex flex-col items-center text-center p-6 rounded-lg border border-amber-300">
                <img src="./product-img5.png" alt="Gold Coins" class="w-32 h-32 mb-4" />
                <h2 class="text-xs text-amber-500 font-semibold mb-2">GOLD COINS</h2>
                <p class="text-gray-600 text-sm">U.S. Gold Coins, Canadian Gold Coins, Krugerrand, Australia Mint, Austrian Gold Coin</p>
            </div>
            <div class="flex flex-col items-center text-center p-6 rounded-lg border border-amber-300">
                <img src="./product-img6.png" alt="Silver Bars" class="w-32 h-32 mb-4" />
                <h2 class="text-xs text-amber-500 font-semibold mb-2">SILVER BARS</h2>
                <p class="text-gray-600 text-sm">1 Ounce Silver Bars, 5 & 10 Ounce Silver Bars, 1 Kilogram Silver Bars</p>
            </div>
            <div class="flex flex-col items-center text-center p-6 rounded-lg border border-amber-300">
                <img src="./product-img7.png" alt="Silver Coins" class="w-32 h-32 mb-4" />
                <h2 class="text-xs text-amber-500 font-semibold mb-2">SILVER COINS</h2>
                <p class="text-gray-600 text-sm">U.S. Silver Coins, Canadian Silver Coins, Govt Minted Silver Coins</p>
            </div>
            <div class="flex flex-col items-center text-center p-6 rounded-lg border border-amber-300">
                <img src="./product-img8.png" alt="Pure Gold Chain" class="w-32 h-32 mb-4" />
                <h2 class="text-xs text-amber-500 font-semibold mb-2">PURE GOLD CHAIN</h2>
                <p class="text-gray-600 text-sm">Gold Chain, Govt Minted Silver Coins, Silver Rounds</p>
            </div>
        </div>
    </div>
    </div>
    <div id="service" className='services'>
    <div class="container mx-auto py-8">
        <div class="text-center mb-8">
            <h1 class="text-3xl font-bold">OUR SERVICES</h1>
            <p class="text-lg mt-2">CRYSTAL GOLD AND JEWELRY TRADING</p>
        </div>

    <div class="grid md:grid-cols-4 max-w-screen-lg mx-auto gap-10 mt-8 px-5">
    <div class="flex gap-8 items-start flex-col ">
        <div>
            <h3 class="font-semibold text-sm text-amber-500 "> BULLION SERVICE</h3>
            <p class="mt-1 text-gray-500 text-justify"> Bullion banking encompasses all services which are denominated by precious metal, including the lending, investment and servicing of precious metal assets and precious metal derivatives. As with fiat currency banking, bullion banking is typically based on a fractional reserve system.</p>
        </div>
    </div>

    <div class="flex gap-8 items-start flex-col ">
        <div>
            <h3 class="font-semibold text-sm text-amber-500 ">JEWELRY & PRECIOUS STONE</h3>
            <p class="mt-1 text-gray-500 text-justify"> Revered as the pinnacle of gem luxury, blue diamonds are considered to be the most expensive stones in the world. The allure of blue diamonds lies in their exceptional rarity and extraordinary beauty.</p>
        </div>
    </div>

    <div class="flex gap-8 items-start flex-col ">
        <div>
            <h3 class="font-semibold text-sm text-amber-500 ">MINES FINANCING & MINING </h3>
            <p class="mt-1 text-gray-500 text-justify">Mining ventures typically rely on a mix of financing sources to commence operations. These include equity financing, where capital is raised through the issuance of shares, and debt financing, through loans and bonds. Strategic joint ventures and private equity are also common in the industry.</p>
        </div>
    </div>

    <div class="flex gap-8 items-start flex-col ">
        <div>
            <h3 class="font-semibold text-sm text-amber-500">REFINING </h3>
            <p class="mt-1 text-gray-500 text-justify">The molten gold, called crude bullion, is then cast into molds. The gold is further refined into pure material by electrolytic refining , chlorination, or acid leaching processes.</p>
        </div>
    </div>
    </div>
    </div>
    </div>
    <div id= "gallery" className='gallery'>
    <div class="container mx-auto py-8">
        <div class="text-center mb-8">
            <h1 class="text-3xl font-bold">PHOTO GALLERY</h1>
            <p class="text-lg mt-2">CRYSTAL GOLD AND JEWELRY TRADING</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div class="overflow-hidden rounded-lg">
                <img src="./img1.jpg" alt="Gold Bars" class="object-cover w-full h-full" />
            </div>
            <div class="overflow-hidden rounded-lg">
                <img src="./img2.jpg" alt="Gold Chains" class="object-cover w-full h-full" />
            </div>
            <div class="overflow-hidden rounded-lg">
                <img src="./img3.jpg" alt="Gold Coins" class="object-cover w-full h-full" />
            </div>
            <div class="overflow-hidden rounded-lg">
                <img src="./img4.jpg" alt="Gold Bars and Coins" class="object-cover w-full h-full" />
            </div>
            <div class="overflow-hidden rounded-lg">
                <img src="./img5.jpg" alt="Gold and Silver" class="object-cover w-full h-full" />
            </div>
            <div class="overflow-hidden rounded-lg">
                <img src="./img6.jpg" alt="Gold Accessories" class="object-cover w-full h-full" />
            </div>
            <div class="overflow-hidden rounded-lg">
                <img src="./img7.jpg" alt="Gold Bullion" class="object-cover w-full h-full" />
            </div>
            <div class="overflow-hidden rounded-lg">
                <img src="./img8.jpg" alt="Gold Collection" class="object-cover w-full h-full" />
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default index