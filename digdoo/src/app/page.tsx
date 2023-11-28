import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { promises as fs } from 'fs'
import Link from 'next/link'

export default async function Home() {
  const session =  await getServerSession();

  const _jsonPricingOptions = await fs.readFile(process.cwd() + '/public/pricingOptions.json', 'utf-8');
  const pricingData = JSON.parse(_jsonPricingOptions);

  interface PricingDataType {
    options: PricingOptionProps[]
  }

  interface PricingOptionProps {
    title: string;
    description: string;
    optionPerks: string[];
  }

  const PricingOptionElement = ({title, description, optionPerks}: PricingOptionProps) => {
    return (
      <div className='flex flex-col border border-gray-200 shadow-md rounded-xl w-[30%] max-w-[400px] text-center m-5 p-5' key={title}>
        <h1 className='m-4 text-2xl font-medium tracking-wide'>{title}</h1>
        <hr />
        <p className='m-5'>{description}</p>
        <hr />
        {optionPerks.map(perk => (
          <>
            <p className='text-left m-2 text-gray-800'>- {perk}</p>
            <hr />
          </>
        ))}
      </div>
    )
  }

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
          <ul className='flex flex-row gap-1 m-2'>
            <li className='shadow-md rounded-md p-2 px-6 hover:rounded hover:bg-blue-500 hover:cursor-pointer transition-all hover:transition-all hover:text-neutral-100'>
              <Link href='/business'>Business</Link>
            </li>
            <li className='shadow-md rounded-md p-2 px-6 hover:rounded hover:bg-blue-500 hover:cursor-pointer transition-all hover:transition-all hover:text-neutral-100'>
              <Link href='/dashboard'>Developers</Link>
            </li>
          </ul>
        </span>
        <hr className='' />
        <span><h1 className='text-4xl font-semibold tracking-tighter m-3'>Digital Doorways</h1></span>
        <span>
          <ul className='flex flex-row gap-6 m-3 mx-6'>
            <p className='underline text-blue-900 hover:text-black hover:cursor-pointer'>start</p>
            <p className='underline text-blue-900 hover:text-black hover:cursor-pointer'>develop</p>
            <p className='underline text-blue-900 hover:text-black hover:cursor-pointer'>host</p>
          </ul>
        </span>
      </div>
      <div className='bg-blue-500 h-96 p-3 flex flex-row justify-center text-white'>
        <div className='flex flex-row justify-center gap-12'>
          <div className='flex flex-col justify-center'>
            <p className='m-[-10px] text-xl'>Get</p>
            <h1 className='text-[72px] font-bold m-[-10px]'>$200</h1>
          </div>
          <div className='flex flex-col justify-center min-w-[200px]'>
            <h2 className='text-2xl font-semibold w-[75%]'>New Doorways</h2>
            <p className='w-[75%] hover:cursor-pointer hover:underline'>Start a website with us and get 2 months of service for free*</p>
            <button className='self-start bg-green-600 p-2 px-4 m-3'>Open an account</button>
          </div>
        </div>
        <div className='self-center'>
          <form className='flex flex-col bg-white p-4 min-w-[400px] text-black gap-2 rounded'>
            <h1 className='text-2xl font-medium m-2'>Welcome</h1>
            <input type='text' placeholder='username' className='p-2 rounded-md'></input>
            <input type='password' placeholder='password' className='p-2 rounded-md'></input>
            <span>
              <input type='checkbox' name='remember-checkbox' className='m-2'></input>
              <label htmlFor='remember-checkbox'>Remember me</label>
            </span>
            <input type='submit' value={'Sign In'} className='bg-blue-600 text-white p-2 rounded-md hover:cursor-pointer'></input>
            <a className='text-xs text-blue-400' href="">Forgot username/password?</a>
            <a className='text-xs text-blue-400' href="">Not enrolled? Sign up now.</a>
          </form>
        </div>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-center text-2xl mt-6 text-blue-800/80'>Choose what is right for you</h2>
        <div className='flex flex-row justify-evenly w-[90%] self-center'>
          {pricingData.options.map((item: PricingOptionProps) => ( <PricingOptionElement key={item.title} { ...item } /> )) }
        </div>
      </div>
    </main>
  )
}
