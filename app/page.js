import { Hero } from '@/components/Hero/page'


export default function Home() {
  const handleSearch = () =>{
    console.log("searching");
  }
  // const [manu, setManu] = useState("")
  return (
    <main className="flex flex-col justify-between p-20 max-[500px]:p-0">
      {/* <h1 className="text-3xl font-bold text-center">Car Herum</h1> */}
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className='homeTextContainer'>
          <h1 className='text-3xl font-bold'>Car Catalogue</h1>
          <p>Exlore the cars you might like</p>
        </div>
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
