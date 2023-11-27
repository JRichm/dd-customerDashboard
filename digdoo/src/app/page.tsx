import Image from 'next/image';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session =  await getServerSession();

  return (
    <main>
      <p>Session Result:</p> 
      { session?.user?.name ? (
        <p>{session?.user?.name}</p>
      ) : (
        <p>Not Logged In</p>
      )}
    </main>
  )
}
