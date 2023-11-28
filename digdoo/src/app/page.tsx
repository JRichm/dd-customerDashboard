import Image from 'next/image';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session =  await getServerSession();

  return (
    <main>
      {/* <p>Session Result:</p> 
      { session?.user?.name ? (
        <p>{session?.user?.name}</p>
      ) : (
        <p>Not Logged In</p>
      )} */}
      
      <div className='flex flex-col'>
        {/* <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png' alt="no picture" width={50} height={50} className='hover:cursor-pointer'></Image> */}
        <span>
          <ul className='flex flex-row gap-6 m-3'>
            <p>Business Owners</p>
            <p>Developers</p>
          </ul>
        </span>
        <span><h1 className='text-3xl font-bold m-3'>Digital Doorways</h1></span>
        <span>
          <ul className='flex flex-row gap-6 m-3'>
            <p>start new website</p>
            <p>upgrade your website</p>
            <p>host your website</p>
          </ul>
        </span>
      </div>
      <div className='bg-blue-500 h-96 p-3 flex flex-row justify-center text-white'>
        <div className='flex flex-row w-full justify-center gap-12'>
          <div className='flex flex-col justify-center'>
            <p>Get</p>
            <h1 className='text-[72px] font-bold'>$200</h1>
          </div>
          <div className='flex flex-col justify-center'>
            <h2 className='text-2xl w-[75%]'>New Digital Doorway customers</h2>
            <p className='w-[75%]'>Start a website with us with 2 months of service for free.</p>
            <button className='self-start bg-green-600 p-2 px-4 m-3'>Open an account</button>
          </div>
        </div>
        <div>
          <form className='flex flex-col bg-white p-4 min-w-[400px] text-black gap-2'>
            <h1 className='text-2xl m-2'>Welcome</h1>
            <input type='text' placeholder='username'></input>
            <input type='password' placeholder='password'></input>
            <span>
              <input type='checkbox' name='remember-checkbox'></input>
              <label htmlFor='remember-checkbox'>Remember me</label>
            </span>
            <input type='submit' value={'Sign In'} className='bg-blue-600 text-white p-2 rounded-md'></input>
            <a className='text-xs text-blue-400' href="">Forgot username/password?</a>
            <a className='text-xs text-blue-400' href="">Not enrolled? Sign up now.</a>
          </form>
        </div>
      </div>
      <div>
        <span>
          <h2 className='text-center text-2xl m-4 text-gray-600'>Choose what is right for you</h2>
        </span>
      </div>
    </main>
  )
}
