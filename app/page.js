import { Hero } from '@/components/Hero/page'
import searchMenu from "@/components/searchMenu/page";
export default function Home() {
  const handleSearch = () =>{
    console.log("searching");
  }
  return (
    <main className="flex flex-col justify-between p-20">
      {/* <h1 className="text-3xl font-bold text-center">Car Herum</h1> */}
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className='homeTextContainer'>
          <h1 className='text-3xl font-bold'>Car Catalogue</h1>
          <p>Exlore the cars you might like</p>
        </div>
        <form className='searchBar' onSubmit={handleSearch()}>
       <div className='searchItem'>
        <searchMenu/>
       </div>
        </form>
        <div className='carsFilter'>
          <div className='filterContainer'>
            {/* <CustomFilter title="fuel"/>
            <CustomFilter title="year"/> */}
          </div>
        </div>

      </div>
    </main>
  )
}
