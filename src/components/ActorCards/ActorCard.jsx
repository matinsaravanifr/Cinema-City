import img from './../../assets/test.png'

export default function ActorCard() {
  return (
    <section className='w-[200px] h-[264px] bg-[#1f1f1f] rounded-2xl'>
        <img className='w-full h-[80%]' src={img} alt="" />
        <h1 className='text-center text-white font bold'>Actor name</h1>
    </section>
  )
}
