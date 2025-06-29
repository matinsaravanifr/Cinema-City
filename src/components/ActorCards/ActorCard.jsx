import img from './../../assets/test.png'

export default function ActorCard() {
  return (
    <section className='w-[200px] h-[280px] bg-[#1f1f1f] rounded-2xl flex flex-col'>
        <img className='w-[90%] h-[80%] m-auto pt-0.5 rounded-2xl' src={img} alt="" />
        <h1 className='text-center text-white font-bold  pb-3'>Actor name</h1>
    </section>
  )
}
