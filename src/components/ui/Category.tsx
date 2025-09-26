import Data from '@/Shared/Data'

function Category() {
  return (
    <div className='mt-40'>
      <h2 className='font-bold text-center text-3xl mb-6'>Browser By Type</h2>

      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20 '>
        {Data.Category.map((category)=>(
            <div key={category.id} className='border rounded-xl flex flex-col items-center p-3 hover:shadow-md'>
                <img src={category.icon} alt="" width={35} height={35}/>
                <h2 className='mt-2'>{category.name}</h2>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Category