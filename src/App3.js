
import './App.css';
import MainMenu from './components/MainMenu';
import Products from './services/data/Product';
import ProductCard from './components/ProductCard';

function App() {
 
  return (
    <div className="App"> 
    <div className='container mx-auto'>
      <div className='header flex justify-between border-b border-slate-300 py-2 text-sm'>
        <div className='flex gap-8'>
          
          <a href='/about_us' text-primary className='text-blue-500'>Chat with Us</a>
          <p class='text-zinc-800'>+62 877 2738 2499</p>
          <p>Toko Keren Sentosa</p>  
        </div>
        <div className=''>
          <ul class='flex gap-8 text-blue-500'>
            <li>Blog</li>
            <li>About US</li>
            <li>Career</li>
          </ul>
        </div>
      </div>

      <div class='siteinfo flex justify-between py-14'>
          <h1 class='text-3xl font-bold'>TokoKeren</h1>
          <div className='flex w-full justify-center'>
            <input type="text" className='bg-gray-100 w-3/4 h-5/5 focus:outline-blue-300 rounded-2xl text-lg pl-3' placeholder='Search Products, Categories ...'/>
            <img src="images/search-icon.png" className='w-4 h-4 self-center -ml-6' alt="search-icon.png"></img>
          </div>
          <div className='flex gap-5'>
            <img src="/images/user-icon.png" className='w-7 h-7 self-center' alt="user-icon.png"></img>
            <div className="relative w-9 h-9">  
              <img src="/images/cart-icon.png" className='w-full h-full self-center' alt="cart-icon.png"></img>
                <div className='absolute -bottom-2 -left-1 text-xs bg-red-500 rounded-full w-4 h-4 text-center text-white font-bold'>4</div>
            </div>  
          </div>
      </div>
      <div className='flex gap-20 justify-center bg-gray-50 py-4'>
       
        <MainMenu  title="Bakery" icon={true}/>
        <MainMenu  title="Meat and fish"  icon={true}/>
        <MainMenu  title="Drinks "  icon={true}/>
        <MainMenu  title="Kitchen "  icon={true}/>
        <MainMenu  title="Special Nutrition" icon={true}/>
        <MainMenu  title="Baby "  icon={true}/>
        <MainMenu  title="Axioo " icon={false} />
        <MainMenu  title="Pharmacy "  icon={false}/>
      
      </div>  
 
<div className="flex md:flex-row-reverse flex-wrap py-14">
  
  <div className=" w-3/4 h-3/4 flex flex-wrap mb-5">
     {Products.map((tm,index) => {
     
     return(

        <ProductCard item={tm} key={index}/>
       
     ) ;
    })}
    
   <div className='w-full h-1/4 flex justify-center item-center'>
      <a className='flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' href ="/Product">Show More Product</a>  
    </div>

  </div>
  <div className="w-full md:w-1/4  p-4 text-gray-700">
    <div className='w-full mb-10'>
      <h3 className='text-2xl font-bold mb-2'>Produk Terlaris</h3>
        <div className='mb-2 py-3'>
          <a className='flex justify-between items-center' href="/Asus">  
              <span className='text-gray-900 hover:text-gray-500'>Bolu</span>
              <span className='bg-blue-600 opacity-80 text-white text-sm font-semobold rounded-lg px-2 py-1'>320</span>
          </a>
        </div>
        <div className='mb-2 py-3'>
        <a className='flex justify-between items-center' href="/Apple">  
            <span className='text-gray-900 hover:text-gray-500'>Mie</span>
            <span className='bg-blue-600 opacity-80 text-white text-sm font-semobold rounded-lg px-2 py-1'>200</span>
        </a>
        </div>
        <div className='mb-2 py-3'>
          <a className='flex justify-between items-center' href="/Lenovo">  
              <span className='text-gray-900 hover:text-gray-500'>Pizza</span>
              <span className='bg-blue-600 opacity-80 text-white text-sm font-semobold rounded-lg px-2 py-1'>150</span>
          </a>
        </div>
        <div className='mb-2 py-3'>
          <a className='flex justify-between items-center' href="/Toshiba">  
              <span className='text-gray-900 hover:text-gray-500'>Dessert</span>
              <span className='bg-blue-600 opacity-80 text-white text-sm font-semobold rounded-lg px-2 py-1'>100</span>
          </a>
        </div>
      </div>
    
      <div className='w-full mb-10'>
        <h3 className='text-2xl font-bold py-3'>Order By</h3>
        <div className='flex justify-left py-4'>
            <input className="mr-5 leading-tight  h-5 w-5 checked:bg-green-600" type="checkbox" />
              <label className="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                Termurah
              </label>
        </div>
        <div className='flex justify-left py-4'>
            <input className="mr-5 leading-tight  h-5 w-5 checked:bg-green-600" type="checkbox" />
              <label className="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                Terlaris
              </label>
        </div>
        <div className='flex justify-left py-4'>
            <input className="mr-5 leading-tight  h-5 w-5 checked:bg-green-600" type="checkbox" />
              <label className="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                Termahal
              </label>
        </div>
      </div>

      <div className='w-full mb-10'>
        <h3 className='text-2xl font-bold py-3'>Rating</h3>
        <div className='flex justify-left py-4'>
            <input className="mr-5 leading-tight  h-5 w-5 checked:bg-green-600" type="checkbox" />
              <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
              <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
              <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
              <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
              <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
        </div>
        <div className='flex justify-left py-4'>
            <input className="mr-5 leading-tight  h-5 w-5 checked:bg-green-600" type="checkbox" />
              <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
              <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
              <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
              <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
              <img src="/images/layer.png" className='w-5 h-5' alt="" />
        </div>
        <div className='flex justify-left py-4'>
            <input className="mr-5 leading-tight  h-5 w-5 checked:bg-green-600" type="checkbox" />
              <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
              <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
              <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
              <img src="/images/layer.png" className='w-5 h-5' alt="" />
              <img src="/images/layer.png" className='w-5 h-5' alt="" />
        </div>
        <div className='flex justify-left py-4'>
            <input className="mr-5 leading-tight  h-5 w-5 checked:bg-green-600" type="checkbox" />
              <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
              <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
              <img src="/images/layer.png" className='w-5 h-5' alt="" />
              <img src="/images/layer.png" className='w-5 h-5' alt="" />
              <img src="/images/layer.png" className='w-5 h-5' alt="" />
        </div>
        <div className='flex justify-left py-4'>
            <input className="mr-5 leading-tight  h-5 w-5 checked:bg-green-600" type="checkbox" />
              <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
              <img src="/images/layer.png" className='w-5 h-5' alt="" />
              <img src="/images/layer.png" className='w-5 h-5' alt="" />
              <img src="/images/layer.png" className='w-5 h-5' alt="" />
              <img src="/images/layer.png" className='w-5 h-5' alt="" />
        </div>
      </div>
      
      <div className='w-full mb-10'>
        <h3 className='text-2xl font-bold py-6'>Price</h3>
        <input className='accent-blue-600 w-full' type="range"></input>
      </div>

      <div className='w-full mb-10'>
        <div className='inline-flex'>
          <div className='w-1/2'>
            <h2 className='font-semibold'>Min</h2>
            <input className='border rounded-xl p-4 w-full bg-slate-100 outline-none focus:outline-blue-300' type="text" placeholder='0'/>
          </div>

          <div className='px-6 pt-10'>
            <span className='text-gray-400'>-</span>
          </div>

          <div className='w-1/2'>
            <h2 className='font-semibold'>Max</h2>
            <input className='border rounded-xl p-4 w-full bg-slate-100 outline-none focus:outline-blue-300' type="text" placeholder='0'/>
          </div>
        </div>

        <div className='inline-flex gap-20 py-5'>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Apply
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Reset
          </button>
        </div>
      </div> 
  </div>
</div>
  
  <div className='footer w-full p-10'>
    <div className='flex justify-between mb-10'>
      <div className=''>
        <h1 className='text-lg font-bold mb-5'>Get In Touch</h1>
        <ul className='font-light text-sm space-y-3'>
          <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>About Us</li>
          <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Careers</li>
          <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Press Release</li>
          <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Blog</li>
        </ul>
      </div>

      <div className=''>
        <h1 className='text-lg font-bold mb-5'>Connections</h1>
        <ul className='font-light text-sm space-y-3'>
          <li className='text-blue-500 hover:text-blue-700 cursor-pointer flex gap-2'>
            <img src="/images/fb.png" className='w-5 h-5' alt="" />Facebook
          </li>
          <li className='text-blue-500 hover:text-blue-700 cursor-pointer flex gap-2'>
            <img src="/images/Group.png" className='w-5 h-5' alt="" />Twitter
          </li>
          <li className='text-blue-500 hover:text-blue-700 cursor-pointer flex gap-2'>
            <img src="/images/insta.png" className='w-5 h-5' alt="" />Instagram
          </li>
          <li className='text-blue-500 hover:text-blue-700 cursor-pointer flex gap-2'>
            <img src="/images/yt.png" className='w-5 h-5' alt="" /> Youtube
          </li>
          <li className='text-blue-500 hover:text-blue-700 cursor-pointer flex gap-2'>
            <img src="/images/linkedin.png" className='w-5 h-5' alt="" />Linkedin
          </li>
        </ul>
      </div>

      <div className=''>
        <h1 className='text-lg font-bold mb-5'>Earnings</h1>
        <ul className='font-light text-sm space-y-3'>
          <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Become an Afiliate</li>
          <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Advertise Your Product</li>
          <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Sell On Market</li>
        </ul>
      </div>

      <div className=''>
        <h1 className='text-lg font-bold mb-5'>Account</h1>
        <ul className='font-light text-sm space-y-3'>
          <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Your Account</li>
          <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Returns Centre</li>
          <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>100% Purchase Protection</li>
          <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Chat With Us</li>
          <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Help</li>
        </ul>
      </div>
    </div>
    <div className='flex justify-end'>
        <span className='text-gray-800 font-bold'>
        Web Development By Eddy Purwono © 2022 TokoKeren.Com
        </span>
      </div>
  </div>  

</div>
</div>
  );
}

 
 

export default App;
